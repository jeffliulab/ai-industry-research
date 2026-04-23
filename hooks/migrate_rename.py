"""
一次性迁移脚本：批量重命名文件（git mv）+ 同步更新 mkdocs.yml 路径和内部 .md 交叉链接。

运行一次后可保留作历史记录，但不应重复运行（renames 字典里的 source 运行一次后就不存在了）。

用法：
    python hooks/migrate_rename.py --dry-run   # 预览
    python hooks/migrate_rename.py --apply     # 实际执行
"""

import os
import re
import shutil
import subprocess
import sys

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(PROJECT_DIR, "docs")
MKDOCS_YML = os.path.join(PROJECT_DIR, "mkdocs.yml")

# (old_relative_path_from_docs, new_relative_path_from_docs)
RENAMES = [
    # ===== 01_AI =====
    # 行业研究
    ("01_AI/01_行业研究/2026年AI行业格局总览.md", "01_AI/01_行业研究/AI行业格局2026.md"),
    ("01_AI/01_行业研究/大模型技术路线对比_Dense_MoE_Reasoning.md", "01_AI/01_行业研究/大模型路线对比.md"),
    ("01_AI/01_行业研究/推理模型专题_从o1到R1到Claude_Sonnet_4_6.md", "01_AI/01_行业研究/推理模型专题.md"),
    ("01_AI/01_行业研究/AI训练基础设施_GPU供需与云厂商格局.md", "01_AI/01_行业研究/AI训练基础设施.md"),
    ("01_AI/01_行业研究/开源vs闭源_生态格局演变.md", "01_AI/01_行业研究/开源vs闭源.md"),
    ("01_AI/01_行业研究/AI_Agent行业现状与路线分歧.md", "01_AI/01_行业研究/Agent行业现状.md"),
    ("01_AI/01_行业研究/多模态模型进展_文生图_文生视频_语音.md", "01_AI/01_行业研究/多模态模型进展.md"),
    ("01_AI/01_行业研究/AI商业化_订阅_API_Token经济模型.md", "01_AI/01_行业研究/AI商业化模式.md"),
    ("01_AI/01_行业研究/中国大模型六小虎格局演变.md", "01_AI/01_行业研究/中国六小虎.md"),
    ("01_AI/01_行业研究/AI安全与对齐研究产业化.md", "01_AI/01_行业研究/AI安全与对齐.md"),
    # 公司调研
    ("01_AI/02_公司调研/Cursor_Anysphere.md", "01_AI/02_公司调研/Anysphere.md"),
    ("01_AI/02_公司调研/Harvey_AI.md", "01_AI/02_公司调研/Harvey.md"),
    ("01_AI/02_公司调研/Mistral_AI.md", "01_AI/02_公司调研/Mistral.md"),
    ("01_AI/02_公司调研/Moonshot_月之暗面.md", "01_AI/02_公司调研/Moonshot.md"),
    ("01_AI/02_公司调研/字节豆包_Seed.md", "01_AI/02_公司调研/字节Seed.md"),
    # 产品调研
    ("01_AI/03_产品调研/Claude家族_Opus_Sonnet_Haiku.md", "01_AI/03_产品调研/Claude家族.md"),
    ("01_AI/03_产品调研/ChatGPT_与_Codex.md", "01_AI/03_产品调研/ChatGPT.md"),

    # ===== 02_机器人 =====
    # 行业研究
    ("02_机器人/01_行业研究/人形机器人行业格局2026.md", "02_机器人/01_行业研究/人形格局2026.md"),
    ("02_机器人/01_行业研究/机器人核心零部件供应链_谐波减速器_丝杠_电机.md", "02_机器人/01_行业研究/核心零部件.md"),
    ("02_机器人/01_行业研究/工业机器人_协作_服务机器人分类与市场.md", "02_机器人/01_行业研究/三类机器人市场.md"),
    ("02_机器人/01_行业研究/机器人基础模型RFM趋势.md", "02_机器人/01_行业研究/RFM趋势.md"),
    ("02_机器人/01_行业研究/中美人形机器人产业对比.md", "02_机器人/01_行业研究/中美产业对比.md"),
    ("02_机器人/01_行业研究/机器人量产的关键瓶颈.md", "02_机器人/01_行业研究/量产瓶颈.md"),
    ("02_机器人/01_行业研究/机器人数据飞轮_采集到训练.md", "02_机器人/01_行业研究/数据飞轮.md"),
    # 公司调研
    ("02_机器人/02_公司调研/Figure_AI.md", "02_机器人/02_公司调研/Figure.md"),
    ("02_机器人/02_公司调研/Agility_Robotics.md", "02_机器人/02_公司调研/Agility.md"),
    ("02_机器人/02_公司调研/1X_Technologies.md", "02_机器人/02_公司调研/1X.md"),
    ("02_机器人/02_公司调研/Sanctuary_AI.md", "02_机器人/02_公司调研/Sanctuary.md"),
    ("02_机器人/02_公司调研/宇树科技_Unitree.md", "02_机器人/02_公司调研/宇树.md"),
    ("02_机器人/02_公司调研/智元机器人_AgiBot.md", "02_机器人/02_公司调研/智元.md"),
    ("02_机器人/02_公司调研/优必选_UBTECH.md", "02_机器人/02_公司调研/优必选.md"),
    ("02_机器人/02_公司调研/傅利叶_Fourier.md", "02_机器人/02_公司调研/傅利叶.md"),
    ("02_机器人/02_公司调研/乐聚机器人.md", "02_机器人/02_公司调研/乐聚.md"),
    # 产品调研
    ("02_机器人/03_产品调研/Optimus_Gen2_Gen3.md", "02_机器人/03_产品调研/Optimus.md"),
    ("02_机器人/03_产品调研/Atlas_Electric_波士顿动力.md", "02_机器人/03_产品调研/Atlas_Electric.md"),
    ("02_机器人/03_产品调研/NEO_1X.md", "02_机器人/03_产品调研/NEO.md"),

    # ===== 03_具身智能 =====
    # 行业研究
    ("03_具身智能/01_行业研究/具身智能技术路线_VLA_VLM_World_Model.md", "03_具身智能/01_行业研究/技术路线.md"),
    ("03_具身智能/01_行业研究/Sim2Real与仿真平台_Isaac_MuJoCo_Genesis.md", "03_具身智能/01_行业研究/Sim2Real与仿真平台.md"),
    ("03_具身智能/01_行业研究/具身智能数据采集_遥操作_仿真_真机.md", "03_具身智能/01_行业研究/数据采集.md"),
    ("03_具身智能/01_行业研究/具身智能评测基准.md", "03_具身智能/01_行业研究/评测基准.md"),
    ("03_具身智能/01_行业研究/具身基础模型的Scaling_Law讨论.md", "03_具身智能/01_行业研究/Scaling_Law讨论.md"),
    # 公司调研
    ("03_具身智能/02_公司调研/Physical_Intelligence_π.md", "03_具身智能/02_公司调研/Physical_Intelligence.md"),
    ("03_具身智能/02_公司调研/Skild_AI.md", "03_具身智能/02_公司调研/Skild.md"),
    ("03_具身智能/02_公司调研/银河通用_Galbot.md", "03_具身智能/02_公司调研/银河通用.md"),
    # 产品调研
    ("03_具身智能/03_产品调研/π0_与_π0_5.md", "03_具身智能/03_产品调研/π0.md"),
    ("03_具身智能/03_产品调研/Helix_Figure.md", "03_具身智能/03_产品调研/Helix.md"),
    ("03_具身智能/03_产品调研/GR00T_NVIDIA.md", "03_具身智能/03_产品调研/GR00T.md"),
    ("03_具身智能/03_产品调研/RDT_清华.md", "03_具身智能/03_产品调研/RDT.md"),

    # ===== 04_AI金融 =====
    # 行业研究
    ("04_AI金融/01_行业研究/AI在金融的落地全景_量化_投研_客服_风控_保险.md", "04_AI金融/01_行业研究/金融落地全景.md"),
    ("04_AI金融/01_行业研究/大模型在投研侧的应用现状.md", "04_AI金融/01_行业研究/投研应用现状.md"),
    ("04_AI金融/01_行业研究/AI量化_与传统量化的异同.md", "04_AI金融/01_行业研究/AI量化.md"),
    ("04_AI金融/01_行业研究/金融大模型的监管与合规.md", "04_AI金融/01_行业研究/金融监管合规.md"),
    ("04_AI金融/01_行业研究/AI在银行_保险_券商的差异化落地.md", "04_AI金融/01_行业研究/银保证差异化.md"),
    ("04_AI金融/01_行业研究/Agent在金融流程自动化中的应用.md", "04_AI金融/01_行业研究/Agent在金融.md"),
    # 公司调研
    ("04_AI金融/02_公司调研/BlackRock_Aladdin_AI.md", "04_AI金融/02_公司调研/BlackRock.md"),
    ("04_AI金融/02_公司调研/Bloomberg_与BloombergGPT.md", "04_AI金融/02_公司调研/Bloomberg.md"),
    ("04_AI金融/02_公司调研/JPMorgan_COIN_IndexGPT.md", "04_AI金融/02_公司调研/JPMorgan.md"),
    ("04_AI金融/02_公司调研/蚂蚁_支小宝_百灵.md", "04_AI金融/02_公司调研/蚂蚁.md"),
    ("04_AI金融/02_公司调研/Kensho_SP.md", "04_AI金融/02_公司调研/Kensho.md"),
    ("04_AI金融/02_公司调研/Stripe_AI_与_Ramp.md", "04_AI金融/02_公司调研/Stripe与Ramp.md"),
    ("04_AI金融/02_公司调研/DeepSeek在金融的应用案例.md", "04_AI金融/02_公司调研/DeepSeek金融应用.md"),
    # 产品调研
    ("04_AI金融/03_产品调研/IndexGPT_JPM.md", "04_AI金融/03_产品调研/IndexGPT.md"),
    ("04_AI金融/03_产品调研/AlphaSense产品拆解.md", "04_AI金融/03_产品调研/AlphaSense产品.md"),

    # ===== 05_AI互联网 =====
    # 行业研究
    ("05_AI互联网/01_行业研究/生成式搜索革命_Perplexity_SearchGPT_AI_Overviews.md", "05_AI互联网/01_行业研究/生成式搜索革命.md"),
    ("05_AI互联网/01_行业研究/AI浏览器崛起_Comet_Arc_Dia.md", "05_AI互联网/01_行业研究/AI浏览器崛起.md"),
    ("05_AI互联网/01_行业研究/AI_Coding产品格局_Cursor_Windsurf_Claude_Code.md", "05_AI互联网/01_行业研究/AI_Coding产品格局.md"),
    ("05_AI互联网/01_行业研究/广告vs订阅_AI产品商业模式.md", "05_AI互联网/01_行业研究/AI产品商业模式.md"),
    ("05_AI互联网/01_行业研究/AI原生社交与陪伴产品.md", "05_AI互联网/01_行业研究/AI原生社交.md"),
    ("05_AI互联网/01_行业研究/中国AI应用层大战_豆包_Kimi_元宝_通义.md", "05_AI互联网/01_行业研究/中国AI应用层大战.md"),
    # 公司调研
    ("05_AI互联网/02_公司调研/Perplexity_公司篇.md", "05_AI互联网/02_公司调研/Perplexity.md"),
    ("05_AI互联网/02_公司调研/Vercel_v0.md", "05_AI互联网/02_公司调研/Vercel.md"),
    ("05_AI互联网/02_公司调研/Anysphere_Cursor.md", "05_AI互联网/02_公司调研/Anysphere.md"),
    ("05_AI互联网/02_公司调研/Character_AI.md", "05_AI互联网/02_公司调研/Character.md"),
    ("05_AI互联网/02_公司调研/Bolt_new.md", "05_AI互联网/02_公司调研/Bolt.md"),
    ("05_AI互联网/02_公司调研/The_Browser_Company_Arc_Dia.md", "05_AI互联网/02_公司调研/The_Browser_Company.md"),
    # 产品调研
    ("05_AI互联网/03_产品调研/Perplexity_Pro_与_Comet浏览器.md", "05_AI互联网/03_产品调研/Perplexity_Pro.md"),
    ("05_AI互联网/03_产品调研/ChatGPT作为互联网入口的演变.md", "05_AI互联网/03_产品调研/ChatGPT作为入口.md"),
    ("05_AI互联网/03_产品调研/Microsoft_Copilot_Pages.md", "05_AI互联网/03_产品调研/Copilot_Pages.md"),

    # ===== 99_方法论 =====
    ("99_方法论/行业研究框架_SCP_波特五力_价值链.md", "99_方法论/行业研究框架.md"),
    ("99_方法论/一手信息源清单_财报_招股书_访谈_播客.md", "99_方法论/一手信息源清单.md"),
    ("99_方法论/常用行业数据源_艾瑞_IDC_Gartner_咨询报告获取.md", "99_方法论/行业数据源.md"),
]


def run_git_mv(old_abs, new_abs, dry_run=False):
    """git mv with fallback to plain shutil.move if git fails."""
    if dry_run:
        print(f"  [DRY] git mv {os.path.relpath(old_abs, PROJECT_DIR)} → {os.path.relpath(new_abs, PROJECT_DIR)}")
        return
    try:
        subprocess.run(
            ["git", "mv", old_abs, new_abs],
            cwd=PROJECT_DIR,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        print(f"  ✓ git mv {os.path.relpath(old_abs, PROJECT_DIR)} → {os.path.relpath(new_abs, PROJECT_DIR)}")
    except subprocess.CalledProcessError:
        shutil.move(old_abs, new_abs)
        print(f"  ⚠ shutil.move (git mv failed) {os.path.relpath(old_abs, PROJECT_DIR)} → {os.path.relpath(new_abs, PROJECT_DIR)}")


def update_text_file(file_path, replacements, dry_run=False):
    """Apply (old, new) substring replacements to a file."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = content
    n_changes = 0
    for old, new in replacements:
        if old in new_content:
            new_content = new_content.replace(old, new)
            n_changes += 1
    if n_changes > 0 and not dry_run:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
    return n_changes


def main():
    dry_run = "--apply" not in sys.argv
    mode = "DRY-RUN (预览)" if dry_run else "APPLY (实际执行)"
    print(f"=== 迁移模式：{mode} ===")

    # Step 1: git mv all files
    print(f"\n[1/3] 重命名 {len(RENAMES)} 个文件")
    moved = 0
    skipped = 0
    for old_rel, new_rel in RENAMES:
        old_abs = os.path.join(DOCS_DIR, old_rel)
        new_abs = os.path.join(DOCS_DIR, new_rel)
        if not os.path.exists(old_abs):
            print(f"  · 已重命名或不存在：{old_rel}")
            skipped += 1
            continue
        if os.path.exists(new_abs):
            print(f"  ! 目标已存在：{new_rel}（跳过）")
            skipped += 1
            continue
        os.makedirs(os.path.dirname(new_abs), exist_ok=True)
        run_git_mv(old_abs, new_abs, dry_run=dry_run)
        moved += 1
    print(f"  小计：{moved} 重命名 / {skipped} 跳过")

    # Step 2: 更新 mkdocs.yml
    print(f"\n[2/3] 更新 mkdocs.yml nav paths")
    replacements = [(old, new) for old, new in RENAMES]
    n_changes = update_text_file(MKDOCS_YML, replacements, dry_run=dry_run)
    print(f"  mkdocs.yml: {n_changes} 个字符串替换")

    # Step 3: 更新所有 .md 文件里的内部交叉链接
    print(f"\n[3/3] 更新所有 .md 文件的内部交叉链接")
    # 构造链接级的替换：只替换路径的文件名部分，不动目录部分
    link_replacements = []
    for old, new in RENAMES:
        # 完整路径引用（绝对和相对都可能出现）
        link_replacements.append((old, new))
        # 仅文件名（相对引用，比如 [Claude](Claude家族_Opus_Sonnet_Haiku.md)）
        old_name = os.path.basename(old)
        new_name = os.path.basename(new)
        if old_name != new_name:
            link_replacements.append((old_name, new_name))

    total_files_changed = 0
    total_replacements = 0
    for root, _, files in os.walk(DOCS_DIR):
        for fname in files:
            if not fname.endswith(".md"):
                continue
            fpath = os.path.join(root, fname)
            n = update_text_file(fpath, link_replacements, dry_run=dry_run)
            if n > 0:
                total_files_changed += 1
                total_replacements += n
    print(f"  {total_files_changed} 个 .md 文件被更新，共 {total_replacements} 个字符串替换")

    print(f"\n=== 完成（{mode}）===")
    if dry_run:
        print("如果预览 OK，运行：python hooks/migrate_rename.py --apply")


if __name__ == "__main__":
    main()
