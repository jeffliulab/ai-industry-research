# Bolt.new（StackBlitz）

> 最后更新：2026-04-24
>
> Bolt.new 是 **StackBlitz 2024-10 发布的 AI 全栈应用生成器**——**爆火级产品**：发布 **4 周内 ARR 突破 $4M，4 个月 $20M+**，**创 AI 应用层最快增长纪录之一**。优势是 StackBlitz **在浏览器里跑 Node.js / WebContainers 技术 10 年积累**——**让 AI 在浏览器里生成 + 预览 + 部署全栈应用**。

## 一、产品定位

Bolt.new 是 **"AI + 浏览器内运行"独有组合**——用户无需本地环境，浏览器里输入自然语言 → 直接出现一个 **可运行的全栈 Web App**。目标用户：**创业者、PM、设计师、非专业开发者**。与 Replit / Lovable / v0 同赛道，**差异化是 StackBlitz WebContainers 技术**。

## 二、核心能力与架构

### 核心能力
- **文字 → 全栈应用**（前端 + 后端 + 数据库）
- **浏览器内运行 + 预览**（不需本地 npm install）
- **Multi-turn 迭代对话**
- **部署**：一键 Netlify / Vercel
- **导出代码**：GitHub / 本地下载
- **Mobile-ready**：移动端也能用

### 底层
- **模型**：Claude 3.5 / 4 Sonnet（主力）
- **浏览器运行时**：**WebContainers**（StackBlitz 2021 技术，运行 Node.js 在浏览器里）
- **StackBlitz Core**：Monaco 编辑器 + 文件系统
- **Agent Orchestration**：自研

### StackBlitz 背景
- 2017 年成立
- 2021 发布 WebContainers 技术（技术壁垒）
- 2023-2024 拓展到 AI

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2017 | StackBlitz 成立 |
| 2021 | **WebContainers 发布**（浏览器跑 Node.js，技术积累）|
| 2024-10 | **Bolt.new 发布** |
| 2024-11 | ARR 破 $4M（4 周）|
| 2025-02 | ARR $20M（4 个月）|
| 2025-05 | **ARR 突破 $40M**，$150M 融资估值 $1B |
| 2025-Q4 | Bolt.diy（开源版本）|
| 2026-Q1 | Bolt for Teams（企业版）|

## 四、定价与商业化

### 订阅
| 层级 | 月费 | Token 预算 |
|---|---|---|
| Free | $0 | 有限 |
| Pro | $20 | 10M tokens |
| Pro 50 | $50 | 25M tokens |
| Pro 100 | $100 | 50M tokens |
| Pro 200 | $200 | 110M tokens |
| Teams | $30/seat | 团队 |

### 2025 ARR 增长
- 2024-10 发布 → 4 周 $4M
- 2025-02 → $20M
- 2025-05 → **$40M**
- 2025-Q4 估计 → $60-80M
- **2025 年增长 20x+ 是 AI 应用层传奇**

### 估值
- 2025-05 Series B $150M，估值 $1B
- 独角兽级

## 五、用户反馈

### 正面
- **"最快看到应用运行"**：浏览器内无延迟
- **Mobile 体验好**：iPhone 上也能用
- **Template + 示例多**
- **价格亲民**

### 批评
- **Token 用得快**：复杂任务一下烧完 10M tokens
- **不如 Replit 部署一体化**（Bolt 导出 Netlify / Vercel，不是原生）
- **代码质量**普通
- **数据库复杂时撞墙**

### 社交反馈
- 2024-Q4 Twitter / YouTube 爆火
- "No-Code 创业者" 社区的首选
- 大量 1-person 创业者用它做 MVP

## 六、竞品对比

| 维度 | Bolt.new | v0 | Lovable | Replit Agent |
|---|---|---|---|---|
| 浏览器运行 | ⭐⭐⭐⭐⭐（WebContainers）| ⭐⭐（preview）| ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 全栈 | ⭐⭐⭐⭐ | ⭐⭐（新加）| ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 部署 | ⭐⭐⭐（导出）| ⭐⭐⭐⭐（Vercel）| ⭐⭐⭐⭐（Lovable host）| ⭐⭐⭐⭐⭐（Replit host）|
| UI 质量 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐（shadcn）| ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Mobile | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| 价格 | 免费 + $20 起 | $20 起 | 免费 + 付费 | $20 起 |
| 2025 ARR | $40M+ | ~$80M | ~$50M | ~$150M |

## 七、使用笔记

### 最适合
1. **创业者快速原型**
2. **PM 验证想法**
3. **移动端编辑**（StackBlitz 强）
4. **不想安装环境**的用户
5. **Workshop / 教学演示**

### 不太适合
- **专业生产项目**（代码质量 / 架构不够）
- **大型应用**（Token 不够烧）
- **深度定制后端逻辑**
- **离线工作**（完全在线）

### 典型 session
```
"Create a habit tracking app with SQLite, 
  Google login, and a simple dashboard"
→ Bolt: [生成 React + Express + SQLite]
         [WebContainers 里直接跑]
         [预览 URL]
→ 用户："加个每周统计图表"
→ Bolt: [迭代] → 完成
→ "Deploy" → Netlify 一键部署
```

## 八、信息源

- Bolt.new 官方（bolt.new）
- StackBlitz Blog
- TechCrunch · Bolt.new 2025-05 融资报道
- Eric Simons（StackBlitz CEO）访谈
- 本站 · [v0](v0.md) · [Lovable](Lovable.md) · [Replit Agent](Replit_Agent.md)
