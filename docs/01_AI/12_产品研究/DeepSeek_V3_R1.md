# DeepSeek V3 / R1

> 最后更新：2026-04-24
>
> DeepSeek V3（2024-12）和 R1（2025-01-20）是**2024-2025 AI 行业最大的"黑天鹅"**——一家 150 人中国团队、据称 **$5.6M 训练成本** 做出**可以与 GPT-4 / Claude 3.5 Sonnet 媲美的开源模型**，**震动美国股市**（NVIDIA 一日跌 17% 损失 $600B 市值）、**打破"前沿 AI 必须 100 万卡"神话**。

## 一、产品定位

DeepSeek V3 / R1 是 **"中国开源 AI 对抗美国闭源 AI 的最强武器"**——**V3 对标 GPT-4 / Claude 3.5**，**R1 对标 o1 推理模型**，**全部开源 + MIT 许可 + API 价极低**。定位不是盈利，而是**幻方量化（母公司）的技术 / 软实力投入**。

## 二、核心能力与架构

### DeepSeek V3（2024-12-26）
- **参数**：671B 总参 / 37B 激活（MoE 架构）
- **训练算力**：2.788M GPU-hours（H800）
- **训练成本**：约 **$5.6M**（业界公认，虽有争议）
- **基准**：
  - MMLU 88.5（接近 GPT-4o）
  - HumanEval 82.6（接近 Claude 3.5）
  - MATH 90.2（超越 GPT-4o）

### DeepSeek R1（2025-01-20）
- **推理模型**，对标 OpenAI o1
- 基于 V3 + RL 训练
- **完全开源**（权重 + 蒸馏模型）
- 基准：
  - AIME 2024：79.8（接近 o1-preview）
  - MATH-500：97.3
  - Codeforces：96.3 percentile
- **R1-Zero**：不用 RLHF 的纯 RL 版本

### 关键架构创新
1. **MLA（Multi-head Latent Attention）**：降低 KV cache 大小 5-10x
2. **MoE（DeepSeekMoE）**：671B 总 / 37B 激活
3. **FP8 混合精度训练**：效率提升
4. **GRPO**（Group Relative Policy Optimization）：替代 PPO 的 RL 算法
5. **Auxiliary-loss-free** load balancing

## 三、版本与路线图

| 时间 | 版本 | 里程碑 |
|---|---|---|
| 2023-07 | DeepSeek 成立 |
| 2024-01 | DeepSeek LLM 67B |
| 2024-05 | DeepSeek V2（首个 MLA + MoE）|
| 2024-12 | **DeepSeek V3** 发布 |
| **2025-01-20** | **DeepSeek R1 开源**（震撼全球）|
| 2025-Q2 | V3 Lite、R1-Distill 系列（小模型蒸馏）|
| 2025-Q3 | V3.5 / R1.5 迭代 |
| 2025-Q4 | **DeepSeek V4 / R2** 传闻 |
| 2026-Q1 | V4 发布预期 |

## 四、定价与商业化

### API 定价
| 模型 | 输入 / 1M tokens | 输出 / 1M tokens |
|---|---|---|
| DeepSeek V3 | $0.27（cache miss）/ $0.07（cache hit）| $1.10 |
| DeepSeek R1 | $0.55 / $0.14 | $2.19 |

**对比**：
- GPT-4o：输入 $2.50 / 输出 $10
- Claude 3.5 Sonnet：输入 $3 / 输出 $15
- **DeepSeek V3 比 GPT-4o 便宜 ~10x**

### 商业化不是核心目标
- 幻方量化自给算力
- API 亏本运行（至少 2025 阶段）
- 主要目的：**开源生态影响力 + 吸引开发者 + 为幻方 brand 加分**

### 下载量
- **Hugging Face 累计下载 5 亿+**
- GitHub 星 130k+
- 全球开发者广泛使用

## 五、用户反馈

### 开发者社区
- **"2025 年最震撼开源模型"** —— Reddit / HN 一致评价
- **"用 API 一个月 $5 完成了用 Claude 一个月 $500 的活"**
- **R1 推理链 transparency 被赞赏**（o1 不展示思考过程）

### 企业反馈
- **美国硅谷企业大量使用 DeepSeek V3** —— 成本优势明显
- 2025-02 Microsoft / AWS 等都宣布支持 DeepSeek 部署
- **但部分企业因数据主权 / 政治敏感不用中国模型**

### 批评
- **中文政治敏感话题回答谨慎**（符合中国监管）
- **超长上下文质量一般**（128K vs Gemini 2M）
- **多模态不如 GPT / Gemini**
- **"$5.6M" 成本争议**：只是 final run 成本，不含研究 / 基础设施

### 市场影响
- **2025-01-27 美股震动**：NVIDIA 单日 -17%，Nasdaq -3%
- 媒体爆发讨论 "AI capex 是否被过度投入"
- **Zuckerberg / Musk / Altman 多人回应** DeepSeek 冲击

## 六、竞品对比

| 维度 | DeepSeek V3 | GPT-4o | Claude 3.5 Sonnet | Llama 3.1 405B |
|---|---|---|---|---|
| 通用能力 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 编程 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 数学 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 多模态 | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| 开源 | ✅ | ❌ | ❌ | ✅ |
| 价格 | 极低 | 高 | 高 | 免费自部署 |

| 维度 | DeepSeek R1 | o1 | Claude Extended Thinking | QwQ-32B |
|---|---|---|---|---|
| 推理 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 数学 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Transparency | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 开源 | ✅ | ❌ | ❌ | ✅ |

## 七、使用笔记

### DeepSeek V3 最适合
1. **通用对话 / 问答**：免费且强
2. **数学 / 科学推理**：成本极低
3. **API 大规模批处理**：1/10 成本
4. **中文场景**：比 GPT 原生支持更好
5. **研究 / 学术**：开源可 fine-tune

### DeepSeek R1 最适合
1. **深度推理任务**：替代 o1（且有思考链）
2. **数学竞赛题**：AIME 水平
3. **R1-Distill 7B / 14B / 32B**：个人本地部署
4. **RL 研究**：开源权重 + 训练细节

### 不太适合
- **多模态 / 视觉任务**
- **严肃 Agent 生产环境**（Tool Use 未优化）
- **数据主权敏感**的政府 / 金融客户

## 八、信息源

- DeepSeek 官方博客（deepseek.com）
- DeepSeek V3 / R1 技术论文（arxiv.org）
- Hugging Face · DeepSeek 模型库
- SemiAnalysis · DeepSeek 成本分析
- Reddit r/LocalLLaMA / HN · 社区反馈
- 本站 · [DeepSeek 公司研究](../11_公司研究/DeepSeek.md) · [推理模型专题](../02_技术前沿/推理模型专题.md) · [芯片出口管制](../06_地缘与国家竞争/芯片出口管制.md) · [大模型路线对比](../02_技术前沿/大模型路线对比.md)
