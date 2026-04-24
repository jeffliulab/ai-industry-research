# 企业 AI 落地模式：Copilot · RAG · Fine-tune · Agent

> 最后更新：2026-04-24
>
> 企业部署 AI 有四种主要模式：**Copilot 辅助员工 / RAG 接私有数据 / Fine-tune 定制模型 / Agent 自主流程**。本文梳理四种模式的成本、成熟度、典型场景、选择逻辑。

## 一句话结论

**企业 AI 落地是"由浅入深"的 4 级阶梯**：80% 企业停在 Copilot + RAG，只有 15% 做到 Fine-tune，5% 真正部署 Agent。2026 年的最大动向是**Agent 从 Demo 走向生产**。

## 三条关键要点

1. **Copilot 成熟度最高**：Microsoft Copilot、Google Workspace AI、Salesforce Einstein 已是主流
2. **RAG 是"买不动定制模型"的企业默认选择**：企业知识库 + 基础模型 + 检索
3. **Fine-tune 门槛高但回报明确**：特定场景（法律、医疗、金融）投入 $100k+ 值得

## 四种模式详解

### 模式 1 · Copilot（最浅）
**定义**：AI 作为员工的**智能助理**，建议由员工审核采纳

**代表**：
- **Microsoft 365 Copilot**（$30/seat/月）：Word / Excel / PowerPoint / Outlook 内嵌
- **Google Workspace AI**：Gmail / Docs 内嵌
- **GitHub Copilot**：开发者 IDE 辅助
- **Salesforce Einstein Copilot**：CRM 辅助
- **Notion AI**：文档协作辅助

**典型成本**：$10-30/seat/月

**适用**：
- 企业入门 AI（不需要大改流程）
- 通用办公场景
- 对数据隐私要求一般

**局限**：
- 不能深度定制
- 不能触及私有知识库（需 RAG）
- ROI 难量化（生产力提升隐性）

### 模式 2 · RAG（Retrieval-Augmented Generation）
**定义**：基础模型 + 私有数据检索 + 生成

**架构**：
```
企业知识库（文档 / 数据库 / Wiki）
  ↓ 向量化
向量数据库（Pinecone / Weaviate / Chroma）
  ↓ 查询时检索
LLM 生成（基于检索到的上下文）
```

**代表产品**：
- **Glean**（企业搜索 / 知识助手）
- **Hebbia**（投行 / 法律 RAG）
- **Harvey AI**（法律 RAG）
- **AlphaSense**（金融 RAG）

**典型成本**：
- 自建：工程投入 $100k-500k
- SaaS：$10-100/seat/月（Glean 等）

**适用**：
- 企业有大量私有文档
- 需要"用自家知识"回答问题
- 对数据不出境有一定要求

**挑战**：
- 检索质量是关键（差的检索 + 好的 LLM = 垃圾回答）
- 文档更新同步
- 权限控制（谁能看什么）

### 模式 3 · Fine-tuning（定制模型）
**定义**：在基础模型上，用企业**专有数据**做增量训练

**类型**：
- **LoRA / QLoRA**：轻量（改 1-10% 参数），成本 $1k-10k
- **Full Fine-tune**：全参数调，成本 $10k-100k
- **RLHF 定制**：用企业反馈对齐，成本 $50k+

**适用场景**：
- **行业特定术语 / 风格**：法律、医疗、金融术语
- **企业独特工作流**：固定格式报告生成
- **模型行为定制**：特定回答风格、禁止某些输出

**代表**：
- BloombergGPT（金融全 fine-tune，后已淡化）
- 各大医疗 / 法律 AI 公司的垂直模型

**挑战**：
- 成本高（工程 + GPU + 数据标注）
- 维护成本（基础模型升级后需要重新 fine-tune）
- 评测难（定制模型的效果如何测）

**趋势**：
- **LoRA / PEFT 降低了 fine-tune 门槛**
- **SLM + fine-tune** 越来越普遍（详见 [SLM 专题](../02_技术前沿/SLM专题.md)）

### 模式 4 · Agent（最深）
**定义**：AI **自主**完成多步骤任务，包含决策、工具使用、状态管理

**代表**：
- **Claude Code**（Coding Agent）
- **Harvey AI**（法律 Agent）
- **Sierra**（客服 Agent，按成功工单付费）
- **ChatGPT Agent**（Operator）
- **Hebbia**（投行工作流 Agent）

**典型成本**：
- Enterprise 合同 $50k-5M+ ACV
- 按成功任务付费（Sierra 等）

**适用**：
- 重复性高、规则明确的流程（KYC、合同审查、客服）
- 有明确的 ROI（替代若干人力 / 提升若干倍产能）

**挑战**：
- **长时程任务成功率** 仍低（30-50%）
- 安全 / 权限 / 责任划分
- 监管限制（金融 / 医疗前台决策受限）

详见 [Agent 行业现状](Agent行业现状.md) · [跨越鸿沟框架](../../99_方法论/框架_跨越鸿沟.md)。

## 企业选择决策树

```
问题 1: 数据敏感度？
├─ 高（不能出境）→ SLM fine-tune 本地 / 私有 RAG
└─ 低 → 继续
问题 2: 定制化需求？
├─ 高（特殊术语 / 行为）→ Fine-tune
└─ 中 → RAG + 强 prompt
├─ 低 → Copilot
问题 3: 流程是否重复性高？
├─ 是（且有 ROI）→ Agent
└─ 否 → Copilot / RAG
```

## 用 [Crossing the Chasm 框架](../../99_方法论/框架_跨越鸿沟.md) 看

当前企业 AI 采用分布（Menlo Ventures 2025 数据）：

| 模式 | 采用阶段 | 百分比 |
|---|---|---|
| **Copilot** | Early Majority | ~60% 企业已采用 |
| **RAG** | Early Adopter → Early Majority | ~30% |
| **Fine-tune** | Early Adopter | ~10-15% |
| **Agent** | Innovator → Early Adopter | ~5% 生产环境 |

## 用 [McKinsey Takers / Shapers / Makers 框架](../../99_方法论/框架_BCG_Advantage.md) 看

- **Takers**（90%）：买现成 Copilot，不改流程
- **Shapers**（9%）：RAG + Fine-tune 定制
- **Makers**（1%）：自建基础模型（BlackRock Aladdin、Bloomberg）

## 2026 关键变量

1. **Microsoft 365 Copilot 续订率**：反映 Copilot 模式真实 ROI
2. **Agent 从 Early Adopter 到 Early Majority 的速度**：关键看大企业生产部署
3. **SLM + LoRA 的成本下降**：Fine-tune 会不会成为中等企业默认
4. **RAG vs Fine-tune 替代关系**：长上下文窗口扩大（Gemini 2M tokens）是否让 RAG 过时

## 我的判断

> **我的看法**：
>
> 1. **Copilot 是流量入口**——让 AI 走进每个员工
> 2. **RAG 是中型企业的甜点**——投入产出比最好
> 3. **Fine-tune 是垂直领域的必需**——法律、医疗、金融的专业术语无可替代
> 4. **Agent 是未来 3 年的战场**——70% 企业承诺做 Agent，但 5% 真正生产部署
> 5. **"混合模式"（Copilot + RAG + Agent）** 会是 2026-2027 企业 AI 架构主流
>
> **我可能错在哪里**：
> - Agent 从 5% 到 50% 部署速度超预期
> - RAG 被长上下文 + 多模态 AI 彻底替代
> - Fine-tune 成本降到极低，每个公司都有自己的 fine-tune 模型

## 延伸阅读

- Menlo Ventures · State of Gen AI in the Enterprise 2025
- 本站 · [企业 AI 支出结构](../01_市场与资本/企业AI支出结构.md) · [AI Agent 行业现状](Agent行业现状.md) · [垂直 AI 全景](垂直AI全景.md) · [Crossing the Chasm 框架](../../99_方法论/框架_跨越鸿沟.md)
