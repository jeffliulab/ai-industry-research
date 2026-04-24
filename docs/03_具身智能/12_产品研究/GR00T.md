# GR00T（NVIDIA）

> 最后更新：2026-04-24
>
> GR00T 是 **NVIDIA 2024-03 GTC 发布的通用人形机器人基础模型项目**——由 **Jim Fan** 领导。目标是 **"NVIDIA Robotics 的 CUDA"**：开源 + NVIDIA 硬件生态 + 全栈工具链（仿真 Isaac、训练 Project Groot、部署 Jetson Thor）。**2025-03 GR00T N1**（2B 参数）正式开源。

## 一、产品定位

GR00T = **"NVIDIA 的机器人 CUDA 野心"** —— NVIDIA 不做机器人硬件，但**让所有机器人公司都用 NVIDIA 工具链 + GR00T 模型**。2025-03 **GR00T N1 开源 + Isaac GR00T Lab**让业界有了开源 VLA baseline。

## 二、核心能力与架构

### GR00T N1（2025-03，2B 参数）
- **VLA 模型**：视觉 + 语言 + 动作
- **Dual-system**（类似 Figure Helix）
- **开源**：Apache 2.0

### GR00T-Dreams（2025-Q3）
- 视频 + 仿真数据生成
- 用 World Model 合成训练数据

### 全栈工具链
- **Isaac Sim / Isaac Lab**：仿真
- **Isaac GR00T Lab**：训练 pipeline
- **Jetson Thor**：边缘部署 chip
- **Cosmos World Model**（2025-01）

## 三、版本与路线图

| 时间 | 版本 |
|---|---|
| 2024-03 | GR00T Project 发布 |
| 2024-11 | Jetson Thor 芯片 |
| 2025-01 | Cosmos World Model |
| **2025-03** | **GR00T N1 开源** |
| 2025-Q3 | GR00T-Dreams |
| 2026 | N2 / 扩展 |

## 四、定价与商业化

- **模型开源**
- **NVIDIA 靠硬件 + 云 (DGX Cloud)盈利**
- 类似 CUDA 战略：commoditize 模型 → 卖算力

## 五、用户反馈

- **"机器人界的 Llama + Stable Diffusion"**
- 开源生态广泛使用
- 批：**不如 π0 精度 + 不如 Gemini Robotics 多模态**

## 六、竞品对比

| 维度 | GR00T N1 | π0 | Helix | Gemini Robotics |
|---|---|---|---|---|
| 开源 | ✅ | 部分 | ❌ | ❌ |
| 参数 | 2B | 3.3B | 未公开 | 大 |
| 生态 | NVIDIA 全栈 | 学术 + LeRobot | Figure 专有 | Google 生态 |
| 商业 | 硬件 / 云盈利 | 模型授权 | 硬件内置 | Google 产品 |

## 七、使用笔记

- **最适合**：想快速 prototype 的研究者 / 小公司
- **NVIDIA 硬件依赖** 但软件开源

## 八、信息源

- NVIDIA GTC 2024 / 2025 keynote
- GR00T GitHub
- Jim Fan 博客 / Twitter
- 本站 · [π0](π0.md) · [RT2_OpenVLA](RT2_OpenVLA.md)
