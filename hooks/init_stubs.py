"""
一次性脚本：根据 mkdocs.yml 的 nav 生成所有缺失的 stub 文章。

用法：
    python hooks/init_stubs.py

只会给**尚不存在**的文件写 stub，已写好的正文文件不会被覆盖。
每个 stub 按路径推断类型（行业研究 / 公司调研 / 产品调研 / 其他），套用对应模板。
"""

import os
import sys
from datetime import date

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(PROJECT_DIR, "docs")
TODAY = date.today().isoformat()


COMPANY_TEMPLATE = """# {title}

> 最后更新：{date}
>
> **待补充**。

## 一、公司速览
- 创立 / 总部 / 创始人 / 员工规模
- 一句话业务定位
- 最新估值 / 融资轮次 / 主要投资方

## 二、历史沿革
关键时间线，从创立到当前节点。

## 三、业务与产品
- 主营业务
- 产品矩阵
- 目标客户

## 四、技术路线
核心技术、模型选型、差异化的工程壁垒。

## 五、商业模式
收入结构、定价、客户画像、单位经济。

## 六、竞争与壁垒
- 直接对标
- 相对优劣势
- 可能的护城河

## 七、关键风险
监管、技术、商业、人才、供应链风险。

## 八、我的判断
（一两段个人观察，标明是观点而非事实。）

## 九、信息源
- TBD
"""

PRODUCT_TEMPLATE = """# {title}

> 最后更新：{date}
>
> **待补充**。

## 一、产品定位
一句话说清：这是给谁用的、解决什么问题、与 X 的核心不同是什么。

## 二、核心能力与架构
- 主要能力
- 底层模型 / 技术栈
- 关键架构决策

## 三、版本与路线图
重要版本演化、当前版本、已知下一步动向。

## 四、定价与商业化
定价表、付费墙设计、免费-付费转化假设。

## 五、用户反馈
来自社区、推特、Reddit、HN、知乎的真实反馈。标明来源。

## 六、竞品对比
| 维度 | 本产品 | 竞品 A | 竞品 B |
|---|---|---|---|
| … | … | … | … |

## 七、使用笔记
（可选：亲自上手的体验记录。）

## 八、信息源
- TBD
"""

INDUSTRY_TEMPLATE = """# {title}

> 最后更新：{date}
>
> **待补充**。

## 摘要
三句话能读完的核心结论。

## 一、行业定义与范围
边界、相邻但不纳入的领域。

## 二、产业链与关键环节
上游 / 中游 / 下游，以及每环节的主要玩家与价值占比。

## 三、市场规模与增长
当前市场规模、预测（注明预测来源）、驱动因素。

## 四、主要玩家格局
头部、腰部、新兴挑战者。

## 五、关键趋势与拐点
未来 12–24 个月的变量。

## 六、风险与变数
监管、技术、商业、地缘政治。

## 七、我的判断
（一两段个人观察。）

## 八、参考资料
- TBD
"""

GENERIC_TEMPLATE = """# {title}

> 最后更新：{date}
>
> **待补充**。
"""


def pick_template(rel_path: str) -> str:
    if "/02_公司调研/" in rel_path:
        return COMPANY_TEMPLATE
    if "/03_产品调研/" in rel_path:
        return PRODUCT_TEMPLATE
    if "/01_行业研究/" in rel_path:
        return INDUSTRY_TEMPLATE
    return GENERIC_TEMPLATE


def parse_nav_item(item):
    if isinstance(item, str):
        return None, item
    if isinstance(item, dict):
        for k, v in item.items():
            return k, v
    return None, None


def walk_nav(nav_list, out):
    for item in nav_list:
        title, value = parse_nav_item(item)
        if isinstance(value, list):
            walk_nav(value, out)
        elif isinstance(value, str):
            # 仅处理 .md 叶子节点
            if value.endswith(".md"):
                out.append((title, value))


def main():
    try:
        import yaml
    except ImportError:
        print("need pyyaml: pip install pyyaml", file=sys.stderr)
        sys.exit(1)

    mkdocs_path = os.path.join(PROJECT_DIR, "mkdocs.yml")

    # mkdocs.yml 里 pymdownx.emoji 使用 !!python/name:... tag，
    # SafeLoader 默认不认识，注册一个忽略构造器让未知 tag 返回 None。
    class _IgnoreUnknownTagsLoader(yaml.SafeLoader):
        pass

    def _ignore_unknown(loader, tag_suffix, node):
        return None

    _IgnoreUnknownTagsLoader.add_multi_constructor(
        "tag:yaml.org,2002:python/name:", _ignore_unknown
    )
    _IgnoreUnknownTagsLoader.add_multi_constructor(
        "tag:yaml.org,2002:python/object/apply:", _ignore_unknown
    )

    with open(mkdocs_path, "r", encoding="utf-8") as f:
        cfg = yaml.load(f, Loader=_IgnoreUnknownTagsLoader)

    entries = []
    walk_nav(cfg.get("nav", []), entries)

    created = 0
    skipped = 0
    for title, rel_path in entries:
        abs_path = os.path.join(DOCS_DIR, rel_path)
        if os.path.exists(abs_path):
            skipped += 1
            continue

        os.makedirs(os.path.dirname(abs_path), exist_ok=True)

        # 无 title 的条目（如 index.md）用路径倒数第二段 + index 兜底
        display_title = title
        if not display_title:
            # index.md 的情况理论上 nav 里应已创建为 index 页，但兜底一下
            parts = rel_path.rstrip("/").split("/")
            display_title = parts[-2] if len(parts) > 1 else parts[0]

        template = pick_template(rel_path)
        content = template.format(title=display_title, date=TODAY)

        with open(abs_path, "w", encoding="utf-8") as f:
            f.write(content)
        created += 1
        print(f"  + {rel_path}")

    print(f"\ndone. created {created}, skipped {skipped} existing.")


if __name__ == "__main__":
    main()
