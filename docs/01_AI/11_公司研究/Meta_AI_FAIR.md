# Meta AI / FAIR

> 最后更新：2026-04-24
>
> Meta 在 AI 上的身份极其分裂：**FAIR**（Yann LeCun）做长期基础研究、**GenAI 组**（Ahmad Al-Dahle）做 Llama 系列、**Scale AI 并购 + 超级智能组**（2025-06 收购 Scale AI 后 Alexandr Wang 统筹）——三套班子并行，代表 Meta 在 AI 战略上的"全面押注 + 内部摇摆"。

## 一句话定位

Meta 是 **AI 开源生态最大贡献者**（Llama 累计下载 10 亿次+）兼 **全球第二大 AI Capex 投资者**（2025 $70B+），但**仍未找到 AI 与其 Family of Apps 的变现闭环**——AI 是支撑广告 + 推荐算法的底层能力，但**Llama 本身不直接赚钱**。

## 一、公司速览

- **创立 / 总部**：FAIR 2013 年由 Yann LeCun 创立于纽约；GenAI 组 2023 年成立
- **员工**：FAIR ~700 研究员、GenAI 数千人、Scale 并购后超级智能组数百人
- **母公司市值**：Meta Platforms ~$1.5T（2025）
- **AI Capex**：2024 $38B → 2025 $70B+（指引）
- **AI 部门负责人**：Yann LeCun（FAIR 首席科学家）、Ahmad Al-Dahle（GenAI VP）、**Alexandr Wang**（2025-06 并购后统筹超级智能组）

## 二、历史沿革

| 时间 | 里程碑 |
|---|---|
| 2013 | FAIR 成立，LeCun 加入 |
| 2014 | 收购 Oculus（AR/VR 方向，后与 AI 交叉）|
| 2018 | PyTorch 开源，成为业界主流深度学习框架 |
| 2022 | OPT 开源大模型（175B）|
| 2023-02 | **LLaMA 1 泄漏 → 半主动开源**，打开开源大模型时代 |
| 2023-07 | **Llama 2 全面开源**（含商用许可）|
| 2024-04 | Llama 3 发布（8B / 70B / 400B）|
| 2024-07 | Llama 3.1 405B —— 首个开源前沿模型 |
| 2024-09 | Llama 3.2 多模态 |
| 2025-06 | **$14.8B 收购 Scale AI 49% 股份**，Alexandr Wang 任 Meta Chief AI Officer |
| 2025-07 | 成立 **Meta Superintelligence Labs**（MSL），Wang 领导 |
| 2025-Q3 | Llama 4 系列发布（多模态 + MoE）|
| 2025-Q4 | 大规模挖角 OpenAI / Anthropic / Google 人才，$100M+ 签约奖金 |

## 三、业务与产品

### FAIR（研究）
- **长期基础研究**：自监督学习、世界模型、具身智能
- **LeCun 路线**：**I-JEPA / V-JEPA** 世界模型，反对纯自回归 LLM 路径
- **代表成果**：PyTorch、Wav2Vec、DINO、SAM（Segment Anything）、Make-A-Video

### GenAI 组
- **核心产品**：**Llama 系列**（1/2/3/3.1/3.2/4）
- **平台**：
  - **Meta AI Assistant**：嵌入 WhatsApp / Messenger / Instagram / Facebook
  - **Meta AI Studio**：让创作者构建 AI 角色
  - **Imagine / Emu**：图像生成
- **集成**：1 亿+ Meta AI 助手月活（2025）

### 超级智能组（MSL）
- **2025 年新设**
- 由 Alexandr Wang 领导
- 目标：冲击 AGI / 前沿闭源模型
- 组建来源：挖角 + Scale AI 团队 + 原 GenAI 部分

### 广告 / 推荐算法 AI（隐性但最赚钱）
- Reels 推荐 + 广告匹配 CTR
- 2024 以来 AI 驱动广告收入增长 22%+
- **这是 Meta AI 真正的 ROI 来源**

## 四、技术路线

### 开源 Llama 系列
| 版本 | 时间 | 规模 | 亮点 |
|---|---|---|---|
| Llama 1 | 2023-02 | 7B / 13B / 65B | 泄漏开源 |
| Llama 2 | 2023-07 | 7B / 13B / 70B | 商用许可 |
| Llama 3 | 2024-04 | 8B / 70B | 原生多语言改善 |
| Llama 3.1 | 2024-07 | 405B | 首个开源前沿级 |
| Llama 3.2 | 2024-09 | + 视觉模型 | 多模态 |
| Llama 4 | 2025-Q3 | MoE 400B+ | 多模态 + 长上下文 |

### LeCun 的世界模型路线
- **反对"纯 Scaling LLM = AGI"**
- 主张：AI 需要理解物理世界（predict next frame 比 predict next token 更根本）
- **I-JEPA**（图像）、**V-JEPA**（视频）、**JEPA-2**
- 与 GenAI 组 LLM 路线**存在内部张力**

### MSL 闭源路线（2025 新）
- Alexandr Wang 主张 Meta 需要**前沿闭源能力**
- 2025 挖来 OpenAI / Anthropic 等顶级研究者
- 传言 Llama 5 可能**部分闭源**（仅对重点企业客户开放）

## 五、商业模式

Meta AI 的商业化复杂：

### 直接商业化（弱）
- Llama 自身**不收费**
- Meta AI Assistant 免费
- 没有独立 AI 订阅

### 间接商业化（强，但难拆分）
| 路径 | 贡献 |
|---|---|
| 广告 CTR 提升 | AI 推荐 + 广告匹配 → 2024-2025 广告收入 +20%+ |
| Reels 留存 | 推荐算法 AI → DAU 稳定在 3.3B+ |
| WhatsApp 商用 | AI 客服 / Agent 新变现点 |
| 开源生态 | Llama 被下载 10 亿次+ → 软实力 → 吸引开发者生态 |

### 用 [Commoditize Your Complement 框架](../../99_方法论/框架_CYC.md) 解释
- **Meta 的 A**：广告 + Family of Apps
- **AI 大模型是 complement**：Meta **开源 Llama 降低 AI 成本** → AI 成为商品 → Meta 的 A（社交流量 + 广告）更有价值
- **Counter-positioning**：OpenAI / Anthropic 靠卖 API 赚钱——Meta 开源把它们的商业模式 commoditize 掉

## 六、竞争与壁垒

### 对标
- vs **OpenAI / Anthropic**：Meta 开源 vs 对手闭源，商业模式完全不同
- vs **Google DeepMind**：都是大厂内生 AI + 大规模投入 + 自研 TPU / MTIA
- vs **xAI**：同样"富豪 CEO 驱动"大量算力投入

### 护城河
- **用户规模**：3.3B 日活，AI 助手直接分发到全球
- **Capex 能力**：$70B+/年，少数玩家之一
- **开源品牌**：Llama 已是开源生态事实标准
- **基础设施**：自研 MTIA 芯片 + 自营数据中心

### 弱点
- **ChatGPT / Claude 级产品缺位**：Meta AI 助手未形成独立类别
- **前沿能力差距**：Llama 4 对比 GPT-5 / Claude Opus 4 仍有差距
- **组织分裂**：FAIR / GenAI / MSL 三条线未充分协同

## 七、关键风险

- **LeCun vs MSL 内部路线冲突**：世界模型 vs Scaling LLM 争论会长期化
- **Llama 5 闭源化风险**：若真闭源，开源生态会反弹，Meta 品牌受损
- **Scale AI 并购整合**：$14.8B 并购能否真正提升前沿能力
- **欧盟监管**：EU AI Act + DSA 双重压力
- **广告市场回落**：如果广告收入增速放缓，AI Capex ROI 被质疑

## 八、我的判断

> **我的看法**：
>
> 1. **Meta 是 AI 开源的最大受益者**——广告收入增速 + Llama 生态影响力，双赢
> 2. **Llama 5 部分闭源概率 60%+**：MSL 路线 + 投入规模要求变现，纯开源不可持续
> 3. **LeCun 的世界模型会在 2027-2028 开花**：目前被低估，但具身智能 / Agent 路径会验证其价值
> 4. **Meta AI 助手作为 ChatGPT 替代** 很难——Meta 品牌 + 隐私担忧让用户天然不信任
> 5. **真正的 AI ROI 在广告 + 推荐**，MSL 更多是"防御性投入"（不让 OpenAI 独大）
>
> **我可能错在哪里**：
> - Llama 5 保持完全开源（理想化路径）
> - MSL 做出 GPT-5 级别模型，Meta 变成前沿闭源玩家
> - Meta AI 助手借助 WhatsApp / Instagram 用户量反超 ChatGPT

## 九、信息源

- Meta Platforms 10-K 2024
- Ahmad Al-Dahle / Alexandr Wang 公开访谈
- FAIR 博客 · ai.meta.com
- The Information · Meta AI 内部报道
- 本站 · [顶级实验室概览](../09_人才与实验室/顶级实验室概览.md) · [Claude 家族](../12_产品研究/Claude家族.md) · [AI 人才流动地图](../09_人才与实验室/AI人才流动地图.md) · [CYC 框架](../../99_方法论/框架_CYC.md)
