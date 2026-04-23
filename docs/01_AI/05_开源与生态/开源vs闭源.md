# 开源 vs 闭源：生态格局演变

> 最后更新：2026-04-23
>
> 2023 年时"开源追不上闭源"几乎是共识。2025-2026 年这个共识正在瓦解——DeepSeek R1 开源 + 复现成本低击穿了头部公司的定价权，Llama 系列构建了开发者生态。但**开源是否真的能持续追上最前沿**，仍然是 2026 年 AI 最重要的辩论之一。

## 一句话结论

闭源和开源的能力差距**从 12 个月缩到 3-6 个月**，但**最前沿推理 + 最长上下文 + 最强工具使用**仍是闭源主导；**中低端 / 企业内部部署**市场则加速被开源占领。

## 三条关键要点

1. **DeepSeek R1（2025-01）是分水岭**：开源推理模型首次真正接近闭源前沿
2. **Meta / Alibaba / Mistral 构成三极开源**：不同地区、不同策略的开源领导者
3. **"Open Weights" ≠ "Open Source"**：多数"开源模型"不公开训练数据和方法，开放性边界模糊

## 谁是开源主力

### 海外开源阵营
- **Meta · Llama 系列**：2023 年 Llama 2 开启生态，Llama 3-4-5 持续迭代。**生态最大**——多数 fine-tune 项目基于 Llama
- **Mistral AI**：欧洲开源代表，Mistral 7B / Mixtral MoE / Large 2
- **HuggingFace 社区**：聚合平台 + 若干自研模型
- **DeepSeek**：V3 + R1 开源冲击波
- **Together AI · Perplexity**：部分模型开源

### 中国开源阵营
- **Qwen 系列**（阿里通义）：2025 年中文开源最强，Qwen 3 系列
- **DeepSeek** V3 / R1
- **智谱 · GLM 系列**：技术底子好
- **Baichuan / MiniMax / Moonshot**：部分模型开源

### 闭源阵营
- **OpenAI** GPT 系列 + o 系列
- **Anthropic** Claude 系列（**完全不开源 weights**）
- **Google** Gemini（Gemma 是小模型开源子线）
- **xAI** Grok（Grok 1 开源但后续不开）

## 能力差距演化

| 时间 | 闭源顶级 vs 开源顶级 benchmark 差距 |
|---|---|
| 2022 末（GPT-3.5 vs Llama 1） | 12-18 月差距，能力差距明显 |
| 2023 (GPT-4 vs Llama 2) | 9-12 月差距 |
| 2024 (GPT-4o vs Llama 3) | 6 月差距 |
| 2025 (Claude 3.7 / o1 vs DeepSeek R1) | **3-6 月差距**（推理方向首次追上）|

**趋势**：差距持续缩小。**但注意**：闭源公司在**未公开的新能力**（Agent 工具使用、超长上下文、多模态深度）上仍然有 cornered resource。

## 开源的商业逻辑

### Meta 为什么开源 Llama
用 [Commoditize Your Complement](../../99_方法论/框架_CYC.md) 框架：
- Meta 的主营业务是广告 → 大模型是 complement
- 如果 OpenAI / Google 垄断 LLM，能通过 LLM 层卡 Meta 分发
- 开源 Llama 压平 LLM 市场价格 → 保护广告业务
- **Zuckerberg 多次明说过这个逻辑**

### 阿里为什么开源 Qwen
- 阿里云是主营业务之一 → Qwen 拉动阿里云 Inference 业务
- 中国大模型开源 → 占领开发者心智（对抗字节豆包生态）
- 政策面：中国鼓励开源 → 合规加分

### DeepSeek 为什么开源
- **幻方量化是真正的"A"**，DeepSeek 是量化研究的副产品
- 开源建立技术声誉 → 帮助母公司招聘、社会资本
- 同时挤压 OpenAI 的定价权（类似 Linux 对 Unix）

### 谁不开源 · 为什么
- **Anthropic**：专注企业客户，安全是护城河。开源弱化安全控制。
- **OpenAI**：产品导向，开源会削弱 ChatGPT 品牌溢价
- 两家都认为**前沿能力本身是差异化**，不能免费给出去

## 开放性光谱

"开源"不是二元。现实中有多层：

| 层级 | 含义 | 代表 |
|---|---|---|
| **Open model** | Weights + license 允许商用 | Llama, Qwen, DeepSeek |
| **Open weights**（不含训练数据） | Weights 开放但训练数据保密 | 大多数"开源"模型 |
| **Open source**（含训练流程） | Weights + 训练脚本 + 数据 | OLMo (AI2), Pythia |
| **Fully open** | 含数据来源 license | 极少 |

**大多数所谓开源实际是 Open weights**——**无法完全复现**。这是 2025 年学术界的批评点。

## 企业部署的选择

企业选型考虑：
1. **性能需求**：前沿能力只有闭源 → 选闭源
2. **数据合规**：数据不能出境 / 必须内部部署 → 选开源
3. **成本**：同等能力开源 token 价 1/5-1/10
4. **供应商风险**：怕 API 涨价 / 下线 → 开源保底

**实际常见做法**：混合 —— 前沿任务调闭源 API，高频 / 敏感任务用开源本地部署。

## 用 Wardley Maps 看

（参考 [Wardley Maps](../../99_方法论/框架_Wardley_Maps.md)）

LLM 模型当前处于 **Product → Commodity 迁移**。开源力量在加速这个迁移——**每加速 1 年，基础模型公司的利润期缩短 1 年**。

## 2026 的关键变量

1. **DeepSeek V4 / R2** 能否保持追赶节奏
2. **Meta Llama 5 / Behemoth**：是否会**完全闭源最强那款**（已有迹象）
3. **Anthropic 会不会开源**：几乎不可能，但 Haiku 小模型有可能
4. **中国开源模型的国际影响力**：Qwen / DeepSeek 能否真正被全球开发者采用为主力
5. **Open source definition 战**：OSI 正在推 OSAI definition —— "仅 open weights" 可能被排除出"open source"称号

## 延伸阅读

- HuggingFace · Open LLM Leaderboard
- Nathan Lambert · Interconnects（开源模型追踪）
- Stanford AI Index 2025 · Research 章节（开源 vs 闭源能力对比）
- 本站 · [中国 AI 梯队结构](../06_地缘与国家竞争/中国AI梯队结构.md) · [Commoditize Your Complement 框架](../../99_方法论/框架_CYC.md)
