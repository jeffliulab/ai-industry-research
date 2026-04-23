# AI Agent 行业现状与路线分歧

> 最后更新：2026-04-23
>
> 2024 年 Agent 是 AI 产业的流行词；2025 年开始**从 demo 走向实际产品**；2026 年要回答一个关键问题——Agent 能不能从**"小时级任务"**跨越到**"工作日级任务"**。

## 一句话结论

Agent 当前正处于 **pre-chasm** 阶段（借 [Crossing the Chasm](../../99_方法论/框架_跨越鸿沟.md) 框架）——有 Early Adopter 热情但**完整解决方案不足**，主流企业采用仍需 12-24 个月。

## 三条关键要点

1. **通用 Agent vs 垂直 Agent 路线分歧**：前者追求"通用助手"（ChatGPT Agent / Claude Computer Use），后者在特定垂直（Harvey 法律 / Devin 编程 / Abridge 医疗）做深
2. **成功率依然是硬门槛**：通用 Agent 在多步任务的零样本成功率仍 <30%（OSWorld / BEHAVIOR）
3. **Coding Agent 跑得最快**：因为有天然评判信号（代码是否跑起来），已进入企业 Early Majority

## 什么算 Agent

Agent = LLM + 工具调用 + 任务分解 + 自我纠错循环。

最简定义（OpenAI 2024）：
> Agent = LLM 系统能够**无需人类持续干预**完成跨多步骤、可能跨工具 / 跨系统的目标

区别：
- **Chatbot**：一次 input → 一次 output
- **Copilot**：建议下一步，人工决策
- **Agent**：自主执行多步骤，人工事后 review

## 行业格局

### 通用 Agent

| 产品 | 公司 | 状态 |
|---|---|---|
| **ChatGPT Agent**（原 Operator） | OpenAI | 2025-Q1 Pro 订阅开放 |
| **Claude Computer Use** | Anthropic | 2024-10 预览，2025-Q2 稳定 |
| **Gemini with Agent capabilities** | Google | Workspace 集成 |
| **Manus** | 中国 Monica AI | 2025 爆火，能力争议 |
| **Devin** | Cognition Labs | 2024 轰动，2025 回归理性 |

### 垂直 Agent（按场景）

**编程**（最成熟）
- Cursor / Claude Code / Windsurf / GitHub Copilot / 字节 Trae
- 详见 [AI Coding 产品格局](../../05_AI互联网/02_产品品类/AI_Coding产品格局.md)

**法律 / 合规**
- Harvey AI（2024 估值 $3B）
- Thomson Reuters CoCounsel
- Hebbia（投行、尽调）

**医疗**
- Abridge（临床文书）
- Nabla / OpenEvidence
- Epic AI copilot

**销售 / 客服**
- Sierra（Bret Taylor 创立）
- Ada / Forethought
- 蚂蚁"支小宝"等中国银行客服

**招聘 / HR**
- Mercor（标注用人才市场）
- Fetcher / Paradox

## 路线分歧

### 路线 A · 自底向上（通用 Agent）
**代表**：ChatGPT Agent / Claude Computer Use

**思路**：做通用的"操作系统级 Agent"，能用任何软件、完成任何任务

**挑战**：
- 成功率低（每步 95% 成功 → 20 步串联只有 36% 成功）
- 安全与权限问题大
- UI 交互（从"聊天"到"代替用户操作"）用户接受度未验证

### 路线 B · 自顶向下（垂直 Agent）
**代表**：Harvey、Abridge、Sierra

**思路**：选一个窄垂直，做到完整解决方案（whole product）

**优势**：
- 可以针对场景做护栏（评估函数、审核流程）
- 客户付费意愿清晰（替代人工成本）
- 完整解决方案包括集成、合规、培训

**挑战**：
- 市场规模有限
- 被通用 Agent 追赶的风险

### 路线 C · Agentic Coding（独特第三条）
**代表**：Claude Code / Cursor / Devin

**思路**：编程有天然评判信号（代码跑不跑）—— 先在编程赛道积累 Agent 能力，再扩张

**跑得最快的原因**：RL 训练信号清晰、用户容忍度高（程序员能自己 debug）

## Benchmark 状态（2025 年末）

| Benchmark | 测什么 | 最佳成绩 |
|---|---|---|
| **SWE-bench Verified** | 代码修 bug | ~70% (Claude Sonnet 4.5) |
| **OSWorld** | 通用桌面 Agent | ~30-40% |
| **BEHAVIOR-1k** | 家庭长时程 | <20% |
| **METR** | 分钟级 → 小时级任务 | 小时级开始可行 |
| **GAIA** | 多模态 Agent | ~50% |

**核心 gap**：**长时程（hours → days）× 零样本 × 高成功率**——三个维度同时满足仍是研究问题。

## 用 BCG Advantage Matrix 看 Agent 格局

（参考 [BCG Advantage Matrix](../../99_方法论/框架_BCG_Advantage.md)）

- **通用 Agent** → **Volume 象限**（规模经济 + 底层模型控制 = 头部 3-4 家）
- **垂直 Agent** → **Specialization 象限**（各场景深耕）
- **Agent 咨询 / 集成** → **Fragmentation 象限**（本地化）

**战略含义**：如果你是 startup，不要做通用 Agent（Volume 跑不赢 OpenAI/Anthropic）——选一个垂直死磕。

## 2026 的关键变量

1. **长时程任务成功率**：能不能从"小时级 30%"跳到"工作日级 60%"？
2. **ChatGPT Agent 的月活**：OpenAI 把通用 Agent 集成到 ChatGPT 后的消费级扩散
3. **企业 deployment**：大银行 / 大律所 / 保险公司开始大规模部署垂直 Agent
4. **Agent 安全事故**：第一起公开的"Agent 造成重大损失"事件会塑造监管
5. **Agent → Agent 协议**：MCP（Anthropic）/ OpenAI Assistants API / Google A2A 的协议战

## 延伸阅读

- Anthropic · Computer Use 技术博客
- OpenAI · Operator 发布文档
- The Information · AI Agent beat
- 本站 · [AI Coding 产品格局](../../05_AI互联网/02_产品品类/AI_Coding产品格局.md) · [垂直 AI 全景](垂直AI全景.md) · [Crossing the Chasm 框架](../../99_方法论/框架_跨越鸿沟.md)
