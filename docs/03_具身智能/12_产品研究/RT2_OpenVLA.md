# RT-2 / OpenVLA

> 最后更新：2026-04-24
>
> RT-2（Google DeepMind 2023-07）和 OpenVLA（Stanford / Toyota Research 2024-06）是 **机器人 VLA（Vision-Language-Action）的学术奠基之作**——**第一批把 LLM 风格 VLM 与机器人动作直接对齐的模型**。RT-2 是 Google 未开源里程碑，**OpenVLA 开源后成为学术 baseline**。

## 一、产品定位

RT-2 / OpenVLA = **"VLA 学术开山之作"** —— 证明 **VLM 微调 + 机器人动作 token = VLA** 这条路线可行。**π0、GR00T、Helix 等都是其延续**。**OpenVLA 开源让全球研究可复现**。

## 二、核心能力与架构

### RT-2（Google DeepMind，2023-07，未开源）
- 基于 PaLI-X / PaLM-E 改造
- **动作作为 text tokens**（离散化）
- 论文声名远播但无代码

### OpenVLA（Stanford / TRI，2024-06，**开源**）
- **7B 参数**，基于 Llama 2 + DINOv2 + SigLIP
- **Open X-Embodiment 数据**（97 万 episodes）
- **完全开源 + 可 fine-tune**

## 三、版本与路线图

| 时间 | 版本 |
|---|---|
| 2022-10 | RT-1（开源）|
| 2023-07 | **RT-2 发布（未开源）** |
| 2024-06 | **OpenVLA 开源** |
| 2024-Q4 | OpenVLA-0.5（改进）|
| 2025 | 生态延续（π0 / GR00T 接棒）|

## 四、定价与商业化

- **全部免费 / 开源**
- 学术研究用为主
- Google 未商业化 RT-2

## 五、用户反馈

- **"VLA 第一代开源 baseline"** —— 学术广泛使用
- Hugging Face 下载上百万
- 批：**性能已被 π0 / GR00T N1 超越**，但历史意义大

## 六、竞品对比

| 维度 | RT-2 | OpenVLA | π0 | GR00T N1 |
|---|---|---|---|---|
| 开源 | ❌ | ✅ | 部分 | ✅ |
| 参数 | 55B | 7B | 3.3B | 2B |
| 数据 | RT-1 + Web | Open X-Embodiment | 7 机器人 68 任务 | 多来源 |
| 时代 | 2023 | 2024 | 2024-2025 | 2025 |
| 主要用户 | Google 内部 | 学术 baseline | 研究 + 工业 | 开源生态 |

## 七、使用笔记

- OpenVLA 适合**学习 VLA 的第一站**
- RT-2 论文是**教科书级 reference**
- 2026 实用首选 π0 / GR00T N1

## 八、信息源

- DeepMind · RT-2 论文（arxiv 2307.15818）
- Stanford · OpenVLA 论文（arxiv 2406.09246）
- GitHub · openvla/openvla
- 本站 · [π0](π0.md) · [GR00T](GR00T.md) · [RDT](RDT.md)
