# BloombergGPT

> 最后更新：2026-04-24
>
> BloombergGPT 是 **Bloomberg 2023-03 发布的金融领域自研大模型**——**500 亿参数，金融数据训练**（$40 年 Bloomberg 文档 + SEC 文件 + 新闻）。发布时是 **金融 AI 里程碑** 但**后续没有公开更多版本**，**被认为"失败于 GPT-4 + RAG 更实用"**的范例。

## 一、产品定位

BloombergGPT 是 **"自研金融 LLM 的代表"** —— 也是 **"为何自研 LLM 多数不值得"** 的典型教训。发布后 **Bloomberg Terminal 实际集成 AI 功能仍大量依赖 OpenAI GPT-4 + RAG**，BloombergGPT 本身没规模化。

## 二、核心能力与架构

- **参数**：50B（对标 GPT-3 级别）
- **训练数据**：
  - Bloomberg 专有金融数据 ~3000 亿 tokens
  - 公开语料 ~3000 亿 tokens
- **发布时**：金融 NLP benchmark SOTA
- **未开源**

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2023-03 | **BloombergGPT 论文发布** |
| 2023-2025 | 未公开大规模部署 |
| 2024 | Bloomberg Terminal AI 功能主要基于 GPT-4 + RAG |
| 2025 | BloombergGPT 实际淡出 |

## 四、定价与商业化

- 未单独商业化
- Bloomberg Terminal 本身 $2-3k/月
- AI 功能作为订阅增值

## 五、用户反馈

- 2023 **发布时震撼**
- 后续 **"论文宣传 > 产品落地"** 批评
- Bloomberg 客户反馈：**"用得上的都是 Bloomberg Terminal + ChatGPT 外挂"**

## 六、为什么"失败"

- **50B 参数不如 GPT-4** 通用能力
- **金融 benchmark 好 ≠ 实际投研有用**
- **RAG + GPT-4** 成本更低效果更好
- **2024 Bloomberg 内部转向 OpenAI / Anthropic 合作**

## 七、竞品对比

| 维度 | BloombergGPT | AlphaSense | Claude for Financial | 恒生 LightGPT |
|---|---|---|---|---|
| 模式 | 自研专用 LLM | RAG + 多 LLM | RAG + Claude | 自研微调 |
| 状态 | 停滞 | 增长 | 积极 | 持续 |
| 教训 | 自研太难 | RAG 才对 | 买方决定 | 中国场景特殊 |

## 八、教训

BloombergGPT 是 AI 金融产品研究的**经典"Don't build your own LLM" 案例**：
1. **LLM fine-tune 不值**（尤其小规模）
2. **RAG + 顶级 LLM > 自研中模型**
3. **数据护城河** 是对的方向，不是 LLM 本身

## 九、信息源

- BloombergGPT 论文（arxiv 2303.17564）
- Bloomberg Terminal 公开信息
- Bloomberg 2024-2025 内部 AI 访谈
- 本站 · [AlphaSense 产品](AlphaSense产品.md) · [SLM 专题](../../01_AI/02_技术前沿/SLM专题.md)
