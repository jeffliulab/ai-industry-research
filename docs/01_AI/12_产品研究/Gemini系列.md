# Gemini 系列（Ultra / Pro / Flash / Nano）

> 最后更新：2026-04-24
>
> Gemini 是 Google DeepMind 2023-12 发布的**原生多模态大模型家族**——Ultra / Pro / Flash / Nano 四层模型矩阵，对标 ChatGPT + Claude。2024-2025 Gemini 2 / 2.5 系列持续迭代，**2M tokens 超长上下文**和**原生视觉 / 音频 / 视频理解**是最大差异化。Google 在 2025 已把 Gemini 集成到 Search、Workspace、Android、Chrome。

## 一、产品定位

Gemini 是 **"Google 全家桶的 AI 引擎"**——不只是独立产品，而是**Google Search / Gmail / Docs / YouTube / Android 等所有场景的 AI 底座**。独立 Gemini App 对标 ChatGPT，但真正战场是 Google 10 亿级用户生态中的 AI 渗透。

## 二、核心能力与架构

### 家族成员
| 模型 | 定位 |
|---|---|
| **Gemini Ultra / 2 Pro / 2.5 Pro** | 旗舰 |
| **Gemini Flash / 2 Flash / 2.5 Flash** | 平衡速度 / 成本 |
| **Gemini Nano** | 端侧（Android / Chrome）|
| **Gemini Deep Think** | 推理模式（类似 o1）|

### 原生多模态架构
- **视频理解**：直接输入视频文件
- **音频理解**：直接输入音频
- **图像理解**：高分辨率 + 空间推理
- **代码**：单独优化

### 2M tokens 上下文
- 从 Gemini 1.5 Pro 起 100 万 → Gemini 2.5 Pro 200 万
- 实际可以输入整本书 + 长视频字幕
- 但"长上下文质量递减"问题仍存在

## 三、版本与路线图

| 时间 | 版本 | 亮点 |
|---|---|---|
| 2023-12 | **Gemini 1.0 家族** | 首次发布 |
| 2024-02 | **Gemini 1.5 Pro** | 100 万 tokens |
| 2024-05 | Gemini Flash（低成本）|
| 2024-08 | Gemini Live（语音对话）|
| 2024-12 | **Gemini 2.0 Flash** | 原生多模态 + Agent |
| 2025-03 | **Gemini 2.5 Pro** | 200 万 tokens、推理 |
| 2025-Q3 | Gemini 2.5 Deep Think | o3 对标 |
| 2025-Q4 | Gemini Robotics（机器人）|
| 2026-Q1 | 持续迭代 |

## 四、定价与商业化

### Gemini App（消费者）
| 层级 | 月费 |
|---|---|
| **Free** | $0 |
| **Gemini Advanced / AI Premium** | $19.99 |
| **Gemini AI Pro + Workspace** | 企业版，多档 |

### API（开发者）
| 模型 | 输入 / 1M | 输出 / 1M |
|---|---|---|
| Gemini 2.5 Pro | $1.25 | $10 |
| Gemini 2.5 Flash | $0.075 | $0.30 |
| Gemini Flash Lite | $0.02 | $0.08 |

**价格优势**：Gemini 2.5 Flash 比 GPT-4o 便宜 5-10x

### 2025 指标
- Gemini App MAU：~3 亿
- 嵌入 Google Search / Workspace：数十亿用户触达
- Google Cloud AI ARR：~$10B+（含 Gemini API）

## 五、用户反馈

### 开发者反馈
- **"2M 长上下文改变了文档任务"**：整个代码库塞进去分析
- **价格极低**：Flash 系列成本杀手
- **Agent / Tool Use 成熟度不如 Claude / GPT**
- **Deep Think 推理力被低估**

### 消费者反馈
- **Gemini App 不如 ChatGPT 流畅**：UI 设计落后
- **Gemini in Google Search / Gmail 有好评**："AI Overviews" 渐入佳境
- **Pixel 上 Gemini Nano + Live** 是 Android 差异化

### 批评
- **2024-02 人物图像生成灾难**（"过度多样化"事件）
- **历史上 Bard 首发翻车**，品牌恢复过程长
- **Google 战略多头**：AI Overviews / Gemini / AI Studio / Vertex AI 用户混淆

## 六、竞品对比

| 维度 | Gemini 2.5 Pro | GPT-5 | Claude Opus 4 | DeepSeek V3 |
|---|---|---|---|---|
| 长上下文 | ⭐⭐⭐⭐⭐（2M）| ⭐⭐⭐⭐（1M）| ⭐⭐⭐（200K）| ⭐⭐（128K）|
| 多模态 | ⭐⭐⭐⭐⭐（原生）| ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| 推理 | ⭐⭐⭐⭐（Deep Think）| ⭐⭐⭐⭐⭐（o3）| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐（R1）|
| 编程 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 价格 | 中 | 高 | 高 | 极低 |
| 分发 | ⭐⭐⭐⭐⭐（Google 生态）| ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐（开源 + 低价）|

## 七、使用笔记

### Gemini 最适合
1. **长文档 / 长视频分析**（2M tokens 独一无二）
2. **低成本高量任务**（Flash 系列）
3. **Android / Chrome 集成**（Nano 端侧）
4. **科研 / 学术用途**（AlphaFold + NotebookLM 生态）

### 不太适合
- **严肃编程**：Claude / GPT 更强
- **C 端对话品牌偏好**：ChatGPT 用户不愿切
- **Agent 生产环境**：成熟度落后 Claude Computer Use

## 八、信息源

- Google DeepMind 官方（deepmind.google/gemini）
- Demis Hassabis 访谈 · Lex Fridman
- Google I/O 2024 / 2025 大会
- ahrefs · Gemini App 流量
- 本站 · [Google DeepMind 公司研究](../11_公司研究/Google_DeepMind.md) · [Notebook LM 产品研究](Notebook_LM.md) · [大模型路线对比](../02_技术前沿/大模型路线对比.md)
