# Wardley Maps：技术演化阶段分析

> 最后更新：2026-04-23
>
> Wardley Maps 是 Simon Wardley 在 2005 年前后基于其在 Canonical 的战略经验建立的可视化战略框架。**目前为止唯一一个显式建模"技术演化阶段"的主流战略框架**——对处于剧变中的 AI / 机器人产业尤其适用。

## 核心主张

一张 Wardley Map 是一个二维图：
- **Y 轴 · 价值链**：越靠上越接近用户可见的价值，越靠下越是看不见的基础设施
- **X 轴 · 演化阶段**：Genesis（创新）→ Custom-Built（定制）→ Product/Rental（产品）→ Commodity/Utility（商品/公用事业）

**关键洞察**：**同一个组件在不同演化阶段需要完全不同的管理方式**。初创期（Genesis）需要"Pioneer 开拓者"气质（探索、快速试错），产品期（Product）需要"Settler 定居者"气质（商业化、质量），公用事业期（Commodity）需要"Town Planner 市政规划者"气质（效率、规模）。

混淆这三种气质是企业战略最常见的失败模式。

## 关键概念

### 四个演化阶段
| 阶段 | 特征 | 管理重点 |
|---|---|---|
| **Genesis** | 新颖、不确定、稀有 | 探索、实验、试错 |
| **Custom-Built** | 已知但每次仍需定制 | 协作、咨询式交付 |
| **Product/Rental** | 标准化产品存在 | 市场份额、差异化 |
| **Commodity/Utility** | 几乎无差异、按量计费 | 效率、规模、成本 |

### 三种组织气质
- **Pioneers**：探索未知、容忍 80% 失败
- **Settlers**：把原型打磨成可卖的产品
- **Town Planners**：把产品变成稳定基础设施，驱逐成本

### 气候模式（Climatic Patterns）
Wardley 总结了 30+ 条"气候模式"——无论谁参与、任何技术演化都会发生的规律。例如：
- **Everything evolves**：没有东西停在某个阶段
- **Efficiency 促进 Innovation**：基础设施商品化后，上层创新加速
- **Past Success 制造 Inertia**：越成功越抗拒演化

## 如何应用

1. **定义目标用户的需求**（画图最上方）
2. **向下分解**：每个用户需求依赖哪些组件？递归到基础设施
3. **给每个组件打阶段**：Genesis / Custom / Product / Commodity
4. **识别关键移动**：哪些组件即将跨越阶段？谁会受益，谁会被挤压？
5. **选 gameplay**：例如"open source 化来加速某个竞争组件的商品化"

## 应用到 AI 产业

### 例 1：2026 年 LLM 栈的 Wardley 位置

| 组件 | 阶段 |
|---|---|
| 基础研究论文 | Genesis |
| Agent 框架 | Custom-Built |
| LLM API（GPT / Claude） | Product（向 Commodity 移动中） |
| GPU（NVIDIA H/B 系列） | Product |
| 电力、数据中心 | Commodity |

**战略含义**：
- LLM API 正在快速从 Product 向 Commodity 移动（价格每年降 ~80%）—— 基础模型公司的利润会压缩
- Agent 层还在 Custom-Built —— 先发者可以定义类别（Cursor / Anysphere 已部分占位）
- 真正未被商品化的是**专有数据 + 分销入口**（Google Chrome、Apple Siri）

### 例 2：Meta 开源 Llama 的 Wardley 解释

Meta 不是基础模型公司（盈利中心是广告）。**开源 Llama** 是经典的 "Commoditize Your Complement" 招法——通过商品化 LLM 这个组件，保护自己的上层广告业务：别人不能通过垄断 LLM 来卡 Meta 的脖子。

（详见 [Commoditize Your Complement](框架_CYC.md)）

## 常见误用

1. **把地图当快照**：Wardley Map 的价值在**动态**——箭头标演化方向才是重点，只画静态格局等于 SWOT
2. **组件分阶段错位**：把 GPU 归为 Genesis（错了，是 Product）会导致错配战略
3. **忘记 Inertia**：过去的成功让转型更难，不是更容易
4. **想用一张图覆盖整个公司**：每个业务线应该有自己的 map，强融合只会让图看不懂

## 延伸阅读

- Simon Wardley《Wardley Maps》原书（免费在 Medium 连载）
- [learnwardleymapping.com](https://learnwardleymapping.com)
- 本站 · [Commoditize Your Complement](框架_CYC.md) · [Aggregation Theory](框架_聚合理论.md) · [7 Powers](框架_7_Powers.md)
