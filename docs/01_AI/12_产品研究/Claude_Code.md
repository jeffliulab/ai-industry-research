# Claude Code

> 最后更新：2026-04-24
>
> Claude Code 是 Anthropic 2025-02 发布的 **Agent-native 命令行编程工具**——与 Cursor / Copilot 的"IDE 插件 + 补全"路线不同，Claude Code 直接在终端 / VS Code 扩展 / Web 运行**多步自主 Agent**（读文件、改代码、运行测试、修 bug）。上线半年内在开发者社区获得巨大好评，**定义了"Agent IDE"的新产品类别**。

## 一、产品定位

Claude Code 是 **"Coding 的 Agent，不是 Autocomplete"** ——目标是让工程师**"委派任务"** 而不是"逐行交互"：
- 你说"帮我修这个 bug"→ Claude Code 读代码、修代码、跑测试、iterate 直到通过
- 不是 Cursor 那种交互式 autocomplete，而是**自主工作流**

差异化：**Anthropic 自家模型 + Agent 原生设计 + Terminal / VS Code 多入口**。

## 二、核心能力与架构

### 核心能力
- **多步 Agent 执行**：读文件 → 规划 → 编辑 → 运行 → 验证
- **Shell 命令执行**：真实运行命令（有权限控制）
- **文件操作**：Read / Write / Edit / Glob / Grep 工具原生
- **Git 操作**：commit / push / PR 自动化
- **Subagent 系统**：调度多个 agent（general-purpose、Explore 等）
- **Hook 系统**：自定义事件响应
- **Slash Commands / Skills**：可扩展命令库
- **1M 上下文 + Memory**：长对话 + 项目记忆

### 底层
- **Claude Opus 4 / Sonnet 4** 模型
- **Extended Thinking** 用于复杂规划
- **Tool Use** 原生
- **MCP 协议**（Model Context Protocol）接入外部工具

### 运行形态
- **CLI**：`claude` 命令
- **VS Code / JetBrains 扩展**
- **Web 界面**：claude.ai/code
- **移动端**（2025-Q4）

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2025-02 | **Claude Code 首发**（CLI only）|
| 2025-04 | VS Code 扩展 |
| 2025-06 | Web 界面 + Projects |
| 2025-08 | Skills / Hooks 生态开放 |
| 2025-10 | Memory + 1M 上下文 |
| 2025-12 | **Claude Code 2.0**：Opus 4 + Extended Thinking |
| 2026-Q1 | 移动端 + 远程执行环境 |

## 四、定价与商业化

### 订阅方式
- **Claude Pro**（$20/月）：基础访问
- **Claude Max**（$100-200/月）：更高配额 + Opus
- **Team / Enterprise**：企业版

### 使用量限制
- Pro：每 5 小时约 40-80 条消息
- Max：几乎无限制
- Token usage 限制取决于模型

### 商业影响
- **2025 年 Claude Code 驱动 Anthropic ARR 从 $4B → $6B+**
- 开发者订阅大量涌入 Max 档（$100/月）

## 五、用户反馈

### HN / Reddit 热度
- **2025 HN "Show HN" 多次顶帖**
- Reddit r/ClaudeAI 80% 内容关于 Claude Code
- **"用过就回不去 Cursor"** 是常见评价

### 正面反馈
- **Agent 执行完整任务**能力远超 Cursor
- **1M 上下文** 处理整个 codebase
- **Subagent 系统**让复杂任务可分解
- **Hook + Skill 生态**极灵活

### 批评
- **CLI 体验有学习曲线**
- **成本较高**：Opus 4 调用贵
- **偶尔"卡住"**：Agent 陷入循环
- **VS Code 扩展起步晚**

## 六、竞品对比

| 维度 | Claude Code | Cursor | Windsurf | GitHub Copilot |
|---|---|---|---|---|
| 底层模型 | Claude 4 | Multi (GPT/Claude/Gemini) | Multi | GPT + Claude |
| 交互模式 | Agent 优先 | IDE 补全 + Agent | IDE 补全 + Agent | 补全为主 |
| 运行环境 | CLI + VS Code + Web | VS Code fork | VS Code fork | VS Code / JetBrains |
| 自主性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 上下文 | 1M | 100K-200K | 100K-200K | 32K-128K |
| 价格 | $20-200/月 | $20/月 | $15/月 | $10-19/月 |
| 企业版 | 成熟 | 成熟 | 成熟 | 最成熟 |

## 七、使用笔记

### 最适合
1. **复杂重构 / 跨文件修改**
2. **Agent 式任务委派**（"修这个 issue"）
3. **数据分析 / 脚本自动化**
4. **新项目搭建**（Initial scaffolding + iteration）
5. **CI/CD 集成**（作为自动化 Agent）

### 不太适合
- **纯行内补全**：Cursor / Copilot 更快
- **在线编辑需求低**（如快速修个小 bug）
- **严控成本的学习用户**

### 工作流典型
```
$ claude
> 帮我在 src/api/users.ts 添加一个 DELETE endpoint
  并且加上 Zod validation 和单元测试，跑通测试

[Claude Code 会：]
1. Read src/api/users.ts 和相关文件
2. Edit 添加新 endpoint
3. Write 新的 validation schema
4. Write 新的测试
5. Bash npm test
6. 如失败 → Edit 修复 → 再次测试
7. Bash git commit
```

## 八、信息源

- Anthropic Claude Code 官方文档（docs.anthropic.com/claude-code）
- Claude Code GitHub（持续 release notes）
- HN · Claude Code 讨论帖（2025 多次上榜）
- Reddit r/ClaudeAI
- 本站 · [Anthropic 公司研究](../11_公司研究/Anthropic.md) · [Cursor 产品研究](Cursor.md) · [AI Coding 产品格局](../../05_AI互联网/02_产品品类/AI_Coding产品格局.md)
