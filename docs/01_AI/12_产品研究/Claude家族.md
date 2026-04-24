# Claude 家族（Opus / Sonnet / Haiku）

> 最后更新：2026-04-24
>
> Claude 家族是 Anthropic 在 2024-03 发布的三层模型矩阵：**Opus（旗舰）/ Sonnet（主流）/ Haiku（轻量）**，灵感来自诗歌格式（Haiku 17 音、Sonnet 14 行、Opus 最大）。2024-2025 Claude 在编程能力 + 安全对齐上建立明确领先，**企业市场份额从 12% 飙升至 40%**（Menlo Ventures 2025），是 OpenAI 最强对手。

## 一、产品定位

Claude 家族是 **"对企业友好 + 对齐严谨 + 编程极强"** 的前沿大模型家族——对标 ChatGPT 但更专注 **"Enterprise-first + Agent-ready"**。Claude.ai 网页版 + API + Claude Code + 各种 IDE 插件形成生态。

## 二、核心能力与架构

### Claude 3.5 Sonnet（2024-06）
- **编程能力 SOTA**：HumanEval 93%、SWE-bench 49%
- **Artifacts 功能**：边写代码边预览
- **Vision**：多模态理解

### Claude 3.5 Opus（2024-10，后为 Opus 4）
- 旗舰级推理
- 长文档处理 200K tokens

### Claude Extended Thinking（2024-10）
- 推理模型模式
- 类似 o1，但 Anthropic 保留更多 "thinking" transparency

### Claude 3.5 Haiku（2024-11）
- 最快响应
- 最低成本
- 适合嵌入式应用

### Claude Opus 4 / Sonnet 4（2025-Q3）
- **Extended Thinking 内置**
- **Memory / 状态管理原生**
- **Computer Use**（操作浏览器 / 桌面）
- **Artifacts 2.0**：交互式代码 + 数据分析

## 三、版本与路线图

| 时间 | 版本 | 亮点 |
|---|---|---|
| 2023-03 | Claude 1 | 首版，Constitutional AI |
| 2023-07 | Claude 2 | 100K 长上下文 |
| 2024-03 | **Claude 3 家族（Opus / Sonnet / Haiku）** | 三层矩阵 |
| 2024-06 | **Claude 3.5 Sonnet** | SWE-bench SOTA |
| 2024-10 | Claude 3.5 Sonnet V2 + Haiku 3.5 + **Computer Use** | Agent 能力 |
| 2025-02 | **Claude 3.7 Sonnet** | Extended Thinking |
| 2025-Q3 | **Claude Opus 4 / Sonnet 4** | 旗舰新代 |
| 2026-Q1 | Claude Opus 4.5 / Sonnet 4.5 | 最新 |

## 四、定价与商业化

### API 定价（2025 末）
| 模型 | 输入 / 1M tokens | 输出 / 1M tokens |
|---|---|---|
| Claude Opus 4 | $15 | $75 |
| Claude Sonnet 4 | $3 | $15 |
| Claude Haiku 4 | $0.80 | $4 |

### 消费产品
- **Claude.ai 免费**
- **Claude Pro**：$20/月（无限对话 + Opus 访问）
- **Claude Max**：$100-200/月（高级 Agent、企业级）
- **Claude Team / Enterprise**：$25-60/seat/月

### Anthropic 2025 ARR
- **$4B+**（估算，来自 Claude 家族）
- 主要来自 API（70%）+ 企业（25%）+ 消费订阅（5%）

## 五、用户反馈

### 开发者 Reddit / HN 共识
- **"Claude 3.5 Sonnet 是 2024-2025 最好的编程模型"**
- Claude Code 深度使用者大量涌现
- Artifacts 功能被称为"改变游戏规则"

### 企业采购反馈
- **Anthropic 企业份额从 12% → 40%**（Menlo Ventures 2025）
- 企业偏爱"不失控"的对齐
- SOC2、HIPAA、GDPR 合规好

### 批评声
- 部分用户认为 Claude"过度对齐" 到不愿回答某些问题
- 上下文窗口（200K）比 Gemini（2M）小
- C 端用户数仍远低于 ChatGPT

## 六、竞品对比

| 维度 | Claude 4 Opus | GPT-5 | Gemini 2.5 Pro | DeepSeek V3 |
|---|---|---|---|---|
| 编程 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 推理（Extended）| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐（o3）| ⭐⭐⭐⭐ | ⭐⭐⭐⭐（R1）|
| 长上下文 | 200K | 1M | 2M | 128K |
| 多模态 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Agent / Tool Use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 安全 / 对齐 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 价格 | 高 | 高 | 中 | 极低 |
| C 端 | 弱 | 最强（ChatGPT）| 中 | 免费但弱 |

## 七、使用笔记

### Claude 最适合的场景
1. **编程 / Coding**：Cursor、Claude Code、Windsurf 大多首选
2. **长文档分析**：法律合同、论文审查
3. **企业 Agent**：API + Tool Use 组合
4. **内容写作**：风格细腻，不如 GPT "标准化"

### 不太合适的场景
- **Real-time 多模态**：Gemini Live 更好
- **图像生成**：Claude 不做生成（只理解）
- **极低延迟 API**：GPT / 开源更快

## 八、信息源

- Anthropic 官方 · claude.ai
- Anthropic API Docs
- Menlo Ventures 2025 State of Gen AI
- Reddit r/ClaudeAI、HN、LMSYS Arena
- 本站 · [Anthropic 公司研究](../11_公司研究/Anthropic.md) · [ChatGPT 产品研究](ChatGPT.md) · [大模型路线对比](../02_技术前沿/大模型路线对比.md) · [Claude Code 产品研究](../../09_AI智能体/12_产品研究/Claude_Code.md)
