# Hamilton Helmer 7 Powers：护城河七种

> 最后更新：2026-04-23
>
> Hamilton Helmer 2016 年出版《7 Powers: The Foundations of Business Strategy》。这本书是判断"**护城河到底真不真、耐不耐**"最严谨的工具——每种 Power 必须同时有 Benefit（经济利益）和 Barrier（对手无法 / 不愿匹配的障碍）。

## 核心主张

大部分讲"moat"的文章都在列特征清单（品牌好、规模大、技术强）。Helmer 的贡献是：**这些只是 benefit；真正的 Power 必须还有 barrier**——否则对手会在短期内匹配，利润溢价消失。

**Power = Benefit × Barrier**。两者缺一不可。

## 七种 Power

Helmer 把 Power 分为三类，按进入门槛：

### Origination Power（少数公司能抢到）
1. **Counter-Positioning**：新业务模式反噬在位者（在位者要跟进等于自我毁灭）
2. **Cornered Resource**：独占的稀缺资源（专利、独家合同、特殊人才、政府特许）

### Takeoff Power（规模起来后自然产生）
3. **Scale Economies**：规模越大，单位成本越低（对手无法在不亏钱的前提下匹配价格）
4. **Network Economies**：用户越多，每个用户价值越高（"这只有 5 个人用"的产品再便宜也不用）
5. **Switching Costs**：切换太贵（数据迁移、流程重写、培训成本）

### Stability Power（成熟期维持）
6. **Branding**：品牌溢价让同等产品能卖更贵（爱马仕、苹果）
7. **Process Power**：多年沉淀的复杂运营流程（TSMC 的良率、丰田精益生产）

## 如何应用

对一家公司，逐条问：
1. 这条 Power 的 **Benefit** 是什么？（具体、可测量：毛利率 +X%、获客成本 -Y%）
2. **Barrier** 是什么？对手为什么没做 / 不能做 / 不想做？
3. 这条 Power **还能保持多久**？什么会削弱它？

**只有同时过 2、3 两关的才是真 Power。** 其他都是"暂时领先"。

## 应用到 AI 产业

### 例 1：OpenAI 的七种 Power 检查（2026 初）

| Power | 成立吗？ |
|---|---|
| Counter-Positioning | ✅ 对 Google 有（Google 的核心广告业务会被生成式答案冲击） |
| Cornered Resource | 🟡 部分（Microsoft Azure 独占、一流人才池）但**在流失**（Leopold / Ilya 离开）|
| Scale Economies | 🟡 训练规模优势，但推理正在商品化 |
| Network Economies | ⚠️ **ChatGPT 并无真正网络效应**——一个人用得多不让另一个人用得好 |
| Switching Costs | 🟡 API 客户可以换（很多同时用 Claude+GPT）|
| Branding | ✅ "AI = ChatGPT" 等同于"搜索 = Google" |
| Process Power | 🟡 训练基础设施 + 安全 / 审核积累 |

**结论**：OpenAI 的护城河**最强的是 Branding**，**最被高估的是 Network Economies**。$500B 估值要靠 Cornered Resource（人才）+ Brand 保住，但两个都在边缘侵蚀。

### 例 2：NVIDIA 的 Power

- **Scale Economies**：✅ TSMC 最大客户，先进制程优先权
- **Cornered Resource**：✅ CUDA 生态 + 开发者心智 + 库（cuDNN / NCCL 等）
- **Process Power**：✅ 十年 GPU 工程经验
- **Switching Costs**：✅ CUDA 代码迁移到 AMD ROCm 困难

4 条 Power 同时成立，解释了为什么 NVIDIA 毛利率 75%+ 还在提升。唯一风险是**政策 Power 被地缘反噬**（美国出口管制也是一把双刃剑）。

## 常见误用

1. **把 benefit 当 Power**：某公司增长快 ≠ 有 Power。要问"为什么对手不能复制这个增长"
2. **忽视 Barrier 衰减**：Cornered Resource 有年限（专利到期、人才跳槽）
3. **夸大 Network Economies**：**真正的 network effect 很稀缺**——社交 / 双边市场 / 协议网络才算，SaaS 工具"用户越多越好用"通常是数据效应或品牌效应
4. **混淆 Scale 和 Size**：规模大不等于 scale economies。如果单位成本随规模不变或上升，没这条 Power

## 延伸阅读

- Hamilton Helmer《7 Powers》原书
- [7 Powers Reading Club · Lenny's Newsletter](https://www.lennysnewsletter.com/p/business-strategy-with-hamilton-helmer)
- 本站 · [Commoditize Your Complement](框架_CYC.md) · [Wardley Maps](框架_Wardley_Maps.md) · [VRIO](框架_VRIO.md)
