# AI 商业化模式：订阅 · API · Token 经济

> 最后更新：2026-04-24
>
> 大模型公司到底**怎么赚钱**？2022-2026 年经历了多次商业模式试验——从 ChatGPT 首发的 $20 订阅、到 API 价格战、到推理 token 经济、再到 Agent 按任务付费。本文拆解当前五种主要商业模式的真实经济学。

## 一句话结论

**订阅仍是消费端现金牛**（ChatGPT 占 OpenAI 40%+ 收入），但 AI 产品独特之处在于**推理有真实边际成本**——这打破了传统 SaaS 的零成本假设，使得"免费 + 广告"的互联网聚合模式在 AI 时代不完全适用（详见 [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md)）。

## 三条关键要点

1. **Token 价格年降 80%**（GPT-4 API 从 2023 Q1 $30/M 降到 2026 初 ~$2.5/M），但推理量涨得更快，API 收入整体上升
2. **订阅呈哑铃分布**：$20 Plus 级（消费）和 $200 Pro 级（专业用户）共存，ChatGPT Pro 拉开 SaaS 订阅价格上限
3. **企业合同是 B2B 压舱石**：Anthropic 60%+ 收入来自企业，ACV 中位数从 2024 的 $50k 涨到 2025 末 ~$100k+

## 五种主要商业模式

### 模式 1 · 订阅（Subscription）

**代表**：ChatGPT Plus / Pro · Claude Pro · Perplexity Pro · Cursor Pro · Kimi Pro

**定价分层**（2026 初）：
- **大众端** $10-20/月（ChatGPT Plus、Claude Pro）
- **专业端** $100-200/月（ChatGPT Pro、Claude Max）
- **团队** $25-50/seat/月
- **企业** 议价

**关键数据**：
- OpenAI ChatGPT 订阅 ARR 估计 $5B+（2025 年，Plus + Pro 合计）
- ChatGPT Pro（$200/月）订阅用户估计 100 万级 → 年入 $200M+
- **Pro 级订阅**是行业首次把消费订阅价拉到 $200/月这个档位

### 模式 2 · API / 按 Token 付费

**代表**：OpenAI API · Anthropic API · Gemini API · DeepSeek API · 开源推理云

**典型定价**（2026 初）：
| 模型档位 | Input per M tokens | Output per M tokens |
|---|---|---|
| Claude Haiku 4 | $0.25 | $1.25 |
| Claude Sonnet 4 | $3 | $15 |
| Claude Opus 4 | $15 | $75 |
| GPT-5 mini | $0.5 | $2 |
| GPT-5 | $3 | $12 |
| Gemini 2.5 Flash | $0.3 | $1.5 |
| **DeepSeek V3** | **$0.27** | **$1.1** |

**DeepSeek R1 开源冲击**：2025-01 后全行业 API 价格被迫再降 40-60%。

**演化规律**：
- 每次新一代模型发布，上一代降价 30-50%
- 推理优化（FP8、MLA、推测解码）持续压缩成本
- **年降 80%+** 是过去 3 年的稳定 trend

### 模式 3 · 企业合同（Enterprise）

**代表**：Anthropic Enterprise · OpenAI Enterprise · Azure OpenAI · Harvey · Glean

**特征**：
- ACV（年合同价）$50k-$5M+
- 典型包含：SSO、审计日志、数据主权、专属容量、定制化
- 销售周期 3-12 个月

**头部玩家收入结构**（公开估算）：
- **Anthropic**：Enterprise 占 60%+
- **OpenAI**：企业 + Azure 分销占 30-35%
- **Claude for Financial Analysis** / **Harvey**：垂直 Enterprise 是增长最快的细分

### 模式 4 · 广告 / 交易佣金（实验中）

**代表**：Perplexity Sponsored Questions · Google AI Overviews（间接继承搜索广告）· Perplexity Shopping

**核心挑战**：
- AI 答案 UI 没有传统"10 条蓝色链接"那种天然广告位
- CPM 估计只能做到传统搜索广告的 30-50%
- **Perplexity 2025 广告收入估计 <$30M**（相对 Google 搜索 $265B 基数，微不足道）

详见 [Perplexity 公司研究](../11_公司研究/Perplexity.md)。

### 模式 5 · 推理时按任务付费（Agent 时代新模式）

**代表**：ChatGPT Pro (o1-pro 推理) · Deep Research · Agent 按完成任务收费的新 SaaS

**逻辑**：
- 用户不按 token 付费，按"**完成的任务**"付费
- 例：Sierra 按成功服务的工单收费
- **把不稳定的推理成本转嫁给 AI 公司，让付费逻辑更易被客户接受**

这是 2025-2026 出现的新模式，仍在探索。

## 用 [Aggregation Theory](../../99_方法论/框架_聚合理论.md) 看 AI 商业模式

Ben Thompson 2024 年的核心观察：**AI 打破了"零边际成本"假设**。

| 互联网时代 | AI 时代 |
|---|---|
| 服务一个用户成本 ~0 | 每次推理真金白银 |
| 广告能 scale 到 billions | 推理成本限制了"免费扩张" |
| 聚合者（Google / Meta）吃走利润 | 基础模型公司卡在中游（毛利负）|

**推论**：AI 产品可能需要**混合模式**（订阅 + 广告 + 交易 + API）—— 单一变现路径吃不饱。

## 用 [Smiling Curve](../../99_方法论/框架_聚合理论.md) 看利润分布

2026 年 AI 产业真实毛利分布：

| 环节 | 典型毛利率 |
|---|---|
| GPU（NVIDIA） | **75%+** |
| 云厂 AI 服务 | ~30-40% |
| **基础模型** | **接近 0 或负** |
| AI 应用（Cursor / Perplexity） | **70%+** |

**反常观察**：按传统 Smiling Curve，基础模型（中游）应该是薄利的。实际确实薄利，**但**应用层（下游）也在卷推理成本，最终可能被基础模型公司的定价权反向挤压。

## 2026 的关键变量

1. **ChatGPT Pro 用户数**：1M → 3M？直接决定 OpenAI 盈利时间表
2. **Token 价格能否继续年降 50%+**：决定 Agent 商业化天花板
3. **Perplexity / AI 搜索的广告收入规模化**：能否达到 $1B ARR
4. **企业 Agent 按任务付费能否成主流**
5. **推理成本的硬件 / 算法优化速度**：MLA、FP8、推测解码的边际贡献

## 我的判断

> **我的看法**：
>
> 1. **订阅 + 企业合同** 长期会是 AI 头部公司（Anthropic、OpenAI）的主力，广告**难以复刻 Google 规模**（边际成本限制）
> 2. **API 价格战会持续**，最终只有 3-5 家能在基础模型层保持利润
> 3. **Agent 按任务付费**是未来 3 年最值得观察的新模式——如果成立，会重塑 SaaS 定价
> 4. **应用层的 70%+ 毛利** 不可持续—— Coding Agent / 搜索 AI 会被基础模型公司垂直整合
>
> **我可能错在哪里**：
> - DeepSeek / 开源模型让 API 价格降到接近零，应用层反而能获得更大毛利空间
> - Apple Intelligence / Microsoft Copilot 这种预装付费模式可能出人意料成功
> - AI 硬件设备（未来版 Humane / Rabbit）建立新的预装订阅渠道

## 延伸阅读

- Menlo Ventures · State of Generative AI in the Enterprise 2025（企业支出深度）
- The Information · OpenAI / Anthropic 收入报道
- Ben Thompson · [Aggregators' AI Risk](https://stratechery.com/2024/aggregators-ai-risk/)
- 本站 · [AI 行业格局 2026](AI行业格局2026.md) · [AI 融资与估值全景](AI融资估值全景.md) · [企业 AI 支出结构](企业AI支出结构.md) · [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md)
