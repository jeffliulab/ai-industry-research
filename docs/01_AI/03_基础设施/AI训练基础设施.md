# AI 训练基础设施：GPU 供需与云厂格局

> 最后更新：2026-04-23
>
> 2024-2026 是 AI 基础设施**超支出（capex）周期**——四大云厂合计 2025 年 AI-related capex 估计 $300B+，人类历史上最贵的短期资本投入。这一章看懂 GPU 供需、云厂格局、供应链瓶颈。

## 一句话结论

**基础设施层在吃走 AI 产业最多的绝对利润**（NVIDIA 毛利 75%+），但这笔 capex 的可持续性存疑——**收入端（$50-80B AI 相关年收入）与支出端（$300B+ 年 capex）差距 4-5x**。

## 三条关键要点

1. **NVIDIA 垄断继续**：数据中心 GPU 市占 90%+，Blackwell (B200) / Rubin 路线图持续压制追赶者
2. **云厂 capex 军备赛**：MS / Google / Meta / Amazon 每家 2025 年 AI-related capex 都 $40-100B
3. **瓶颈从 GPU 转向电力与 HBM**：先进封装 CoWoS、HBM 产能、数据中心电力成为新一轮紧缺

## GPU 市场

### NVIDIA 主导
- **H100 / H200**（Hopper 代）：2023-2024 主力
- **B100 / B200**（Blackwell）：2025 量产
- **Rubin (R100/R200)**：2026 量产，下一代
- **毛利率**：FY2025 Q3 约 **75%+**（历史罕见）

### 挑战者
- **AMD MI300X / MI325X**：第二名，生态在建（ROCm）
- **Google TPU v5p / Ironwood v7**：自用为主，Gemini 训练，Anthropic 部分使用
- **Amazon Trainium 2 / 3**：AWS 自研，Anthropic 战略使用
- **AI 芯片初创**：Cerebras / Groq / Tenstorrent / SambaNova（详见 [AI 芯片初创](AI芯片初创.md)）

### 价格
- H100 采购单价 2024：$30k-40k
- B200 采购单价 2025：$40k-50k
- 年租价（GPU 云）：~$2-4/GPU/hour

## 云厂格局

### 超大云 capex

| 公司 | 2024 capex | 2025 capex 指引 | 主要 AI 项目 |
|---|---|---|---|
| Microsoft | ~$55B | **$80B+** | OpenAI + 自研 Copilot |
| Google | ~$50B | ~$75B | Gemini + TPU |
| Meta | ~$40B | ~$40B | Llama + 自研 MTIA |
| Amazon | ~$75B | **$100B+** | Anthropic + Trainium |

**四家合计 2025 约 $300B**，其中 ~50-60% 归 AI。

### 新世代 GPU 云（"AI neocloud"）
- **CoreWeave**（2024 IPO）：专注 AI 训练云，NVIDIA 战略投资
- **Lambda Labs**：开发者向的 GPU 云
- **Nebius**（原 Yandex 拆分）：欧洲 AI 云
- **Together AI**：开源模型 + 推理云
- **详见** [GPU 云初创](GPU云初创.md)

### 中国
- **阿里云 · 腾讯云 · 百度云 · 华为云**：大模型训练主力
- **昇腾（Ascend） 910B / 910C**：华为 GPU，字节 / 百度等深度使用
- **算力券 + 国家智算中心**：政府主导补贴

## 供应链瓶颈

2024-2026 的**真实短缺**从"GPU"转向：

### HBM（高带宽内存）
- GPU 的高速内存，AI 算力瓶颈
- **SK Hynix**（60%+ 份额）· **Samsung** · **Micron**
- 产能 2024-2026 持续供不应求，年涨价

### 先进封装（CoWoS）
- TSMC 的先进封装工艺，所有高端 AI 芯片都用
- 2024-2025 产能紧张
- NVIDIA 基本锁定 TSMC 大部分 CoWoS 产能

### 数据中心电力
- 单个 100k GPU 集群耗电 50-100 MW（相当于一个小城市）
- 美国北弗吉尼亚、凤凰城、得州成为超级节点
- **2025-03 Microsoft 重启三里岛核电站**给 AI 数据中心供电
- 电力已成为下一轮 capex 的核心瓶颈（详见 [数据中心与电力](数据中心与电力.md)）

### 光模块 / 高速互联
- 大集群需要 800G / 1.6T 光模块
- Coherent · Molex · 中际旭创（中国）· 新易盛

## 用 Wardley Maps 看 AI 基础设施栈

（参考 [Wardley Maps](../../99_方法论/框架_Wardley_Maps.md)）

| 组件 | 演化阶段 |
|---|---|
| 电力 | Commodity |
| 数据中心建筑 | Commodity → 但 AI 定制化拉回 Product |
| HBM / CoWoS | Product → Commodity 进行中 |
| GPU（NVIDIA） | Product |
| AI 加速卡（自研 TPU/Trainium） | Custom-Built → Product |
| 训练框架 | Product |

**演化方向**：GPU 正从 Product 向 Commodity 移动（竞争 + 开源 CUDA 替代）。**关键战略问题**：谁能在 GPU 商品化后保持利润？答案：**专用 cornered resource + 新层的差异化**。

## 用基准率看 capex 可持续性

（参考 [基准率与预期投资](../../99_方法论/框架_基准率.md)）

$300B+ 年 capex 需要至少 $150B+ 年 AI 相关新增收入支撑（按 2 年折旧）。

2025 年实际 AI 相关收入（粗估）：
- OpenAI: ~$12B
- Anthropic: ~$5B
- Microsoft AI: ~$15B
- Google Cloud AI: ~$10B
- Meta（难独立归因）
- 其他：~$15B
- **合计约 $60-80B**

**差距 2-3 倍**。历史上所有基础设施超支出周期（铁路、电信、互联网）最终都会**出清**。**这次不同**的理由只有：应用端收入超速增长 + 推理成本继续暴降。

## 2026 的关键变量

1. **Blackwell 量产能否追上需求** → NVIDIA 利润与客户等待时间
2. **自研芯片份额** → Google TPU / Amazon Trainium / Meta MTIA 是否能抢 15-25% 份额
3. **某个云厂 capex 拐点** → 第一家明显减速的超大云厂会触发估值 re-rating
4. **电力拐点** → 核电重启 / 小型模块核电（SMR）商业化能否跟上

## 延伸阅读

- SemiAnalysis · 多篇 GPU 与 capex 深度分析
- Epoch AI · compute 追踪
- Stanford AI Index 2025 · Economy 章节
- 本站 · [AI 芯片初创](AI芯片初创.md) · [GPU 云初创](GPU云初创.md) · [数据中心与电力](数据中心与电力.md) · [Scaling Laws 框架](../../99_方法论/框架_Scaling_Laws.md)
