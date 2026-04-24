# Cohere

> 最后更新：2026-04-24
>
> Cohere 是 2019 年由 Transformer 论文 "Attention is All You Need" 合著者 Aidan Gomez（当年 Google Brain 实习生，与 Ashish Vaswani 等共同署名）、Ivan Zhang、Nick Frosst 在多伦多创立。**唯一"企业专注"的前沿 AI 公司**——不做 C 端产品，只做企业 API + RAG + 加拿大主权。

## 一句话定位

Cohere 是 **"不做 ChatGPT 的 Anthropic"**：明确放弃 C 端，专注企业 API / RAG / 搜索 / 金融医疗垂直，与 Oracle、Fujitsu、SAP 等企业软件巨头深度合作。估值 $5.5B（2024），在前沿能力上被 OpenAI / Anthropic / DeepSeek 抛开，但在企业定制上有独特生存空间。

## 一、公司速览

- **创立**：2019
- **总部**：多伦多（加拿大）
- **创始人**：
  - **Aidan Gomez**（CEO，Transformer 论文合著者）
  - **Ivan Zhang**（CTO）
  - **Nick Frosst**（联合创始人，Geoffrey Hinton 学生）
- **员工**：~450（2025 末）
- **估值**：**$5.5B**（2024-07，D 轮 $500M）
- **主要投资方**：Inovia Capital、NVIDIA、Oracle、Salesforce、PSP Investments、Cisco

## 二、历史沿革

| 时间 | 里程碑 |
|---|---|
| 2019 | 成立 |
| 2021 | A 轮 $40M（Tiger Global 领投）|
| 2022 | B 轮 $125M |
| 2023-05 | **Command 模型发布**，C 轮 $270M（估值 $2.2B）|
| 2023-12 | **Cohere for AI** 研究实验室分拆（独立运行）|
| 2024-04 | **Command R / R+ 发布** —— RAG 专注模型 |
| 2024-07 | D 轮 $500M，估值 $5.5B |
| 2024-09 | **Aya 101** 开源多语言模型（101 种语言）|
| 2024-12 | 与 Oracle 深度集成（OCI Generative AI）|
| 2025-Q1 | Command A / Command R7B 发布 |
| 2025-Q3 | 加拿大主权 AI 合同（$240M 加元）|
| 2025-Q4 | Cohere North（企业 Agent 平台）|

## 三、业务与产品

### 模型产品
| 模型 | 定位 |
|---|---|
| **Command R+** | 旗舰 RAG 优化大模型 |
| Command R | 中等规模 |
| Command R7B | 小模型 |
| **Embed** | 文本嵌入模型（业界领先）|
| **Rerank** | 检索重排序 |
| **Aya** | 开源多语言（Cohere for AI）|

### 产品
- **Cohere Platform**：企业 API 门户
- **Cohere North**：企业 Agent 平台（2025-Q4）
- **主权 AI 部署**：加拿大、日本 / Fujitsu、英国政府等

### 目标客户
- **金融**：Notion / Oracle / RBC / TD / Bank of Montreal
- **医疗**：部分美国医院系统
- **政府**：加拿大联邦 + 省政府、英国 / 阿联酋政府
- **大型企业**：Oracle ERP + Cohere 深度集成

## 四、技术路线

### RAG 专优化
- **Command R / R+ 是业界第一款 "RAG-first" 大模型**
- 原生支持 multi-hop 检索
- 引用 (citation) 生成能力出色

### Embed + Rerank
- 企业搜索必备组件
- 100+ 语言支持
- 比 OpenAI Embedding 更灵活

### 多语言路线
- **Aya 101** 支持 101 种语言（重点低资源语言）
- 重视非英语企业客户
- Cohere for AI 与学术界合作开源

### 不追求前沿
- 明确不争 GPT / Claude 前沿能力
- 专注 企业 RAG / Embed / Rerank / 多语言 场景

## 五、商业模式

### 收入来源
| 来源 | 2025 估算 |
|---|---|
| 企业 API（直销）| ~$60M |
| Oracle / Fujitsu 渠道 | ~$40M |
| 主权 AI 合同 | ~$30M |
| **2025 总 ARR** | **~$130-150M** |

### 定价
- Command R+ API：输入 $2.5/M tokens，输出 $10/M tokens（对标 GPT-4）
- Embed：$0.1/M tokens
- 企业大单：$100k-5M ACV

### 单位经济
- 推理成本相对高（与 OpenAI / Anthropic 类似规模）
- 企业客户签约周期长，LTV 高
- 毛利 70%+（企业 SaaS 典型）

## 六、竞争与壁垒

### 对标
- vs **OpenAI 企业版**：OpenAI ChatGPT 品牌更强 → Cohere 走"不是 ChatGPT" 路线
- vs **Anthropic Claude for Enterprise**：都面向企业，Anthropic 技术领先但 Cohere 更深入 RAG
- vs **Mistral**：相似"非美前沿"定位，Cohere 更聚焦企业 / 加拿大
- vs **IBM Watson**：传统玩家，Cohere 是新一代

### 壁垒
- **Aidan Gomez 创始人 brand**（Transformer 合著者）
- **Oracle 深度整合**（ERP 捆绑，sticky）
- **加拿大主权 AI brand**
- **企业销售能力**（比纯技术公司强）

### 弱点
- **前沿能力差距**：GPT / Claude 有代际领先
- **品牌知名度低**：C 端几乎无认知
- **规模增速慢**：$150M ARR 对比 OpenAI / Anthropic 的 $4B+

## 七、关键风险

- **前沿能力持续落后**：若基础模型落后 2 代以上，RAG 优势也难守
- **Oracle 关系变化**：Oracle 若自研基础模型，Cohere 失去最大渠道
- **加拿大政治依赖**：特鲁多政府更替后主权 AI 合同不确定
- **员工流失**：顶级研究员被 OpenAI / Anthropic 挖角
- **估值持续不涨**：$5.5B 维持两年，员工 option 吸引力下降

## 八、我的判断

> **我的看法**：
>
> 1. **Cohere 是"小而美"企业 AI 的可行样本**——但 ceiling 有限，不会成为下一个 OpenAI
> 2. **Command R+ RAG 定位很聪明**：避开前沿军备竞赛，深挖企业真实需求
> 3. **终局大概率是 IPO 成 $10B 级企业 AI 公司**，不会做到 $100B 级
> 4. **Oracle 整合是双刃剑**：稳定客户但失去独立性
> 5. **"非美前沿" brand** 在加拿大 / 欧洲 / 中东有溢价，但无法走向中国 / 印度 / 美国政府市场
>
> **我可能错在哪里**：
> - 被 Oracle 或 Salesforce 战略收购（类似 Scale / Meta）
> - 加拿大政府主权 AI 投入放大 10 倍，成为北美主权 AI 旗舰
> - Agent 方向突破，Cohere North 成为企业 Agent 平台标杆

## 九、信息源

- Cohere 官方博客（cohere.com）
- Aidan Gomez 访谈 · Latent Space
- Cohere for AI 开源项目
- 本站 · [顶级实验室概览](../09_人才与实验室/顶级实验室概览.md) · [企业 Agent 落地模式](../../09_AI智能体/04_企业Agent/企业Agent落地模式.md) · [Anthropic](Anthropic.md)
