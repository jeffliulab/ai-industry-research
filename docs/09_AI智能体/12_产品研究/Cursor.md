# Cursor

> 最后更新：2026-04-24
>
> Cursor 是 Anysphere（2022 年成立）的旗舰产品——基于 **VS Code fork** 的 AI 原生 IDE。2024 年初 ARR $1M，到 2025 年中 ~$500M，**18 个月增长 500x**，是 AI 应用层最快增长案例。2025-06 估值 $9.5B，挑战 GitHub Copilot 在开发者市场的地位。

## 一、产品定位

Cursor 是 **"给开发者的 AI 原生 IDE"**——不是在 VS Code 上加插件（Copilot 模式），而是把整个编辑器重构围绕 AI 交互：**Tab 补全 + Cmd-K 编辑 + Cmd-L Chat + Composer 多文件 Agent + Background Agent**。目标用户：专业开发者（70% 付费转化）、高级工程师。

## 二、核心能力与架构

### 核心能力
- **智能 Tab 补全**：多行 + 上下文感知
- **Cmd-K**：行内指令编辑
- **Cmd-L Chat**：侧边栏对话
- **Composer**：多文件 Agent（2024-08 推出）
- **Background Agent**：后台运行的 Agent（2025 推出）
- **Codebase Understanding**：对整个仓库索引 + embedding
- **@Codebase / @File / @Docs**：上下文 mention

### 模型层（不自研）
- 调用 **Claude 3.5 / 4 Opus**（主力）
- **GPT-4o / GPT-5**
- **Gemini 2.5 Pro**
- **DeepSeek V3 / R1**（2025 加入）
- 用户可选模型

### 差异化工程
- **Shadow Workspace**：后台运行测试 / lint
- **Cursor Prediction**：预测下一步编辑
- **PR Creation**：自动生成 PR 描述

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2022 | Anysphere 成立 |
| 2023-Q3 | Cursor 首发（基础 AI 编辑器）|
| 2024-04 | Cursor Tab（超强补全）|
| 2024-08 | **Composer 多文件 Agent** |
| 2024-10 | **C 轮融资 $60M**，估值 $400M |
| 2025-01 | Cursor Agent（iterate 能力）|
| 2025-04 | **$105M D 轮，估值 $2.5B** |
| 2025-06 | **$500M E 轮，估值 $9.5B** |
| 2025-Q3 | Background Agent |
| 2025-Q4 | Cursor Enterprise（合规 / 审计）|

## 四、定价与商业化

### 订阅
| 层级 | 月费 | 配额 |
|---|---|---|
| **Hobby** | $0 | 2000 补全 + 50 Premium requests |
| **Pro** | $20 | 无限补全 + 500 Premium + Fast Agent |
| **Business** | $40/seat | 团队功能 + SSO |
| **Enterprise** | $自定义 | SOC2 + 私有部署 |

### 指标
- **ARR**：2025 Q3 ~$500M（从 $1M 增长 500x）
- **付费用户**：~200 万
- **企业客户**：5000+（含 Fortune 500 半数）

## 五、用户反馈

### HN / Reddit 共识
- **2024-2025 最佳编程 AI IDE**
- **Tab 预测能力** 被称为"revolutionary"
- **Composer 多文件 Agent** 是关键 sticky 功能
- **Claude 3.5 Sonnet + Cursor = 最佳组合**

### 正面反馈
- **从 VS Code 无缝迁移**
- **"比 GitHub Copilot 好 10 倍"** 常见评价
- **大仓库理解能力强**（@Codebase）

### 批评
- **依赖模型 API**：Claude / OpenAI 不提供 → Cursor 无法运行
- **Background Agent 不稳定**
- **企业版成熟度** 不如 GitHub Copilot
- **Claude Code 崛起**：2025-02 后 Cursor 优势被挑战

### 竞争威胁
- **Claude Code**：Anthropic 自家 Agent 工具
- **Windsurf**：Codeium 出品，类似 fork VS Code
- **GitHub Copilot Next Edit Suggestions**：微软反击
- **Meta 尝试收购**（2025-09 报道称 $30B 出价未遂）

## 六、竞品对比

| 维度 | Cursor | Claude Code | Windsurf | GitHub Copilot |
|---|---|---|---|---|
| 形态 | VS Code fork | CLI + Ext | VS Code fork | Ext |
| Tab 补全 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Agent | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 大仓库 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 模型选择 | 多模型 | Claude | 多模型 | GPT+Claude |
| 价格 | $20/月 | $20-200/月 | $15/月 | $10-19/月 |
| 企业版 | 良好 | 良好 | 良好 | 最成熟 |
| 开发者口碑 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## 七、使用笔记

### 最适合
1. **专业开发者**的日常工作流
2. **中大型仓库**理解（@Codebase）
3. **多文件重构**（Composer）
4. **熟悉 VS Code** 的用户（零迁移成本）
5. **需要选择多模型** 的团队

### 不太适合
- **完全 CLI workflow**：Claude Code 更适合
- **免费用户**：Pro $20/月门槛
- **数据敏感无法上云**：Enterprise 本地化成熟度一般

### 工作流典型
```
Cmd-K: "refactor this function to use async/await"
→ 行内编辑，Accept / Reject

Cmd-L: "how does auth flow work in this codebase?"
→ @Codebase 检索 + 回答

Composer: "add a dark mode toggle across Settings pages"
→ 多文件规划 + 逐文件修改 + Review
```

## 八、信息源

- Cursor 官方（cursor.com）
- Anysphere 融资公告（TechCrunch）
- Michael Truell 访谈 · Lex Fridman / Latent Space
- HN · Cursor 讨论帖
- 本站 · [Anysphere 公司研究](../11_公司研究/Anysphere.md) · [Claude Code 产品研究](Claude_Code.md) · [Windsurf 产品研究](Windsurf.md) · [AI Coding 产品格局](../../05_AI互联网/02_产品品类/AI_Coding产品格局.md)
