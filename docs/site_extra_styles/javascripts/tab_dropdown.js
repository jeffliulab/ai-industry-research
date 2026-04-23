// 顶部标签页悬停下拉预览菜单（支持二级→三级子菜单，三级带链接）
// 此文件由 hooks/generate_dropdown.py 自动生成，请勿手动编辑
// 如需修改 UI 逻辑，请编辑 hooks/tab_dropdown.tpl.js
(function () {
  var tabData = {"AI": [{"name": "行业研究", "path": "", "pages": [["2026 AI 行业格局", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E8%A1%8C%E4%B8%9A%E6%A0%BC%E5%B1%802026/"], ["中国大模型六小虎", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E4%B8%AD%E5%9B%BD%E5%85%AD%E5%B0%8F%E8%99%8E/"], ["AI 商业化：订阅 · API · Token 经济", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E5%95%86%E4%B8%9A%E5%8C%96%E6%A8%A1%E5%BC%8F/"], ["大模型路线：Dense · MoE · Reasoning", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%BA%BF%E5%AF%B9%E6%AF%94/"], ["推理模型专题：从 o1 到 R1 到 Claude 4", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B%E4%B8%93%E9%A2%98/"], ["多模态进展：文生图 · 视频 · 语音", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E5%A4%9A%E6%A8%A1%E6%80%81%E6%A8%A1%E5%9E%8B%E8%BF%9B%E5%B1%95/"], ["AI 训练基础设施：GPU 供需与云厂格局", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E8%AE%AD%E7%BB%83%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/"], ["开源 vs 闭源：生态格局演变", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E5%BC%80%E6%BA%90vs%E9%97%AD%E6%BA%90/"], ["AI Agent 行业现状与路线分歧", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/Agent%E8%A1%8C%E4%B8%9A%E7%8E%B0%E7%8A%B6/"], ["AI 安全与对齐研究产业化", "01_AI/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E5%AE%89%E5%85%A8%E4%B8%8E%E5%AF%B9%E9%BD%90/"]]}, {"name": "公司调研", "path": "", "pages": [["Anthropic", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Anthropic/"], ["OpenAI", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/OpenAI/"], ["Google DeepMind", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Google_DeepMind/"], ["Meta AI / FAIR", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Meta_AI_FAIR/"], ["xAI", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/xAI/"], ["Mistral AI", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Mistral/"], ["Cohere", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Cohere/"], ["Perplexity", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Perplexity/"], ["Cursor（Anysphere）", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Anysphere/"], ["Harvey AI", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Harvey/"], ["Glean", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Glean/"], ["DeepSeek", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/DeepSeek/"], ["Moonshot 月之暗面", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Moonshot/"], ["智谱 AI", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E6%99%BA%E8%B0%B1AI/"], ["MiniMax", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/MiniMax/"], ["阿里通义", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E9%98%BF%E9%87%8C%E9%80%9A%E4%B9%89/"], ["字节豆包 / Seed", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E5%AD%97%E8%8A%82Seed/"], ["百川智能", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E7%99%BE%E5%B7%9D%E6%99%BA%E8%83%BD/"], ["阶跃星辰", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E9%98%B6%E8%B7%83%E6%98%9F%E8%BE%B0/"], ["腾讯混元", "01_AI/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E8%85%BE%E8%AE%AF%E6%B7%B7%E5%85%83/"]]}, {"name": "产品调研", "path": "", "pages": [["Claude 家族", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Claude%E5%AE%B6%E6%97%8F/"], ["ChatGPT 与 Codex", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/ChatGPT/"], ["Gemini 系列", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Gemini%E7%B3%BB%E5%88%97/"], ["DeepSeek V3 / R1", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/DeepSeek_V3_R1/"], ["Qwen 系列", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Qwen%E7%B3%BB%E5%88%97/"], ["Claude Code", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Claude_Code/"], ["Cursor", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Cursor/"], ["Windsurf", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Windsurf/"], ["v0", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/v0/"], ["Notebook LM", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Notebook_LM/"], ["Sora", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Sora/"], ["Runway", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Runway/"], ["Midjourney", "01_AI/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Midjourney/"]]}], "机器人": [{"name": "行业研究", "path": "", "pages": [["2026 人形机器人格局", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E4%BA%BA%E5%BD%A2%E6%A0%BC%E5%B1%802026/"], ["三类机器人市场：工业 · 协作 · 服务", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E4%B8%89%E7%B1%BB%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B8%82%E5%9C%BA/"], ["中美人形机器人产业对比", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E4%B8%AD%E7%BE%8E%E4%BA%A7%E4%B8%9A%E5%AF%B9%E6%AF%94/"], ["核心零部件：减速器 · 丝杠 · 电机", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E6%A0%B8%E5%BF%83%E9%9B%B6%E9%83%A8%E4%BB%B6/"], ["量产的关键瓶颈", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E9%87%8F%E4%BA%A7%E7%93%B6%E9%A2%88/"], ["机器人基础模型 RFM 趋势", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/RFM%E8%B6%8B%E5%8A%BF/"], ["数据飞轮：从采集到训练", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E6%95%B0%E6%8D%AE%E9%A3%9E%E8%BD%AE/"]]}, {"name": "公司调研", "path": "", "pages": [["Tesla Optimus", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Tesla_Optimus/"], ["Figure AI", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Figure/"], ["Boston Dynamics", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Boston_Dynamics/"], ["Agility Robotics", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Agility/"], ["1X Technologies", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/1X/"], ["Apptronik", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Apptronik/"], ["Sanctuary AI", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Sanctuary/"], ["宇树科技", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E5%AE%87%E6%A0%91/"], ["智元机器人", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E6%99%BA%E5%85%83/"], ["优必选", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E4%BC%98%E5%BF%85%E9%80%89/"], ["傅利叶", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E5%82%85%E5%88%A9%E5%8F%B6/"], ["星动纪元", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E6%98%9F%E5%8A%A8%E7%BA%AA%E5%85%83/"], ["乐聚机器人", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E4%B9%90%E8%81%9A/"]]}, {"name": "产品调研", "path": "", "pages": [["Optimus 系列", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Optimus/"], ["Figure 02 / 03", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Figure_02_03/"], ["Unitree G1 / H1", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Unitree_G1_H1/"], ["Atlas Electric", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Atlas_Electric/"], ["1X NEO", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/NEO/"]]}], "具身智能": [{"name": "行业研究", "path": "", "pages": [["技术路线：VLA · VLM · World Model", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E6%8A%80%E6%9C%AF%E8%B7%AF%E7%BA%BF/"], ["评测基准", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E8%AF%84%E6%B5%8B%E5%9F%BA%E5%87%86/"], ["Scaling Law 讨论", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/Scaling_Law%E8%AE%A8%E8%AE%BA/"], ["数据采集：遥操作 · 仿真 · 真机", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86/"], ["Sim2Real 与仿真平台：Isaac · MuJoCo · Genesis", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/Sim2Real%E4%B8%8E%E4%BB%BF%E7%9C%9F%E5%B9%B3%E5%8F%B0/"]]}, {"name": "公司调研", "path": "", "pages": [["Physical Intelligence（π）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Physical_Intelligence/"], ["Skild AI", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Skild/"], ["Covariant", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Covariant/"], ["Wayve", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Wayve/"], ["银河通用 Galbot", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E9%93%B6%E6%B2%B3%E9%80%9A%E7%94%A8/"], ["千寻智能", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E5%8D%83%E5%AF%BB%E6%99%BA%E8%83%BD/"], ["穹彻智能", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD/"]]}, {"name": "产品调研", "path": "", "pages": [["π0 / π0.5", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/%CF%800/"], ["Helix（Figure）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Helix/"], ["GR00T（NVIDIA）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/GR00T/"], ["RT-2 / OpenVLA", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/RT2_OpenVLA/"], ["RDT（清华）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/RDT/"]]}], "AI 金融": [{"name": "行业研究", "path": "", "pages": [["金融 AI 六类场景落地", "04_AI%E9%87%91%E8%9E%8D/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E9%87%91%E8%9E%8D%E8%90%BD%E5%9C%B0%E5%85%A8%E6%99%AF/"], ["大模型在投研的应用", "04_AI%E9%87%91%E8%9E%8D/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E6%8A%95%E7%A0%94%E5%BA%94%E7%94%A8%E7%8E%B0%E7%8A%B6/"], ["AI 在银行 · 保险 · 券商的差异化落地", "04_AI%E9%87%91%E8%9E%8D/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E9%93%B6%E4%BF%9D%E8%AF%81%E5%B7%AE%E5%BC%82%E5%8C%96/"], ["AI 量化 vs 传统量化", "04_AI%E9%87%91%E8%9E%8D/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E9%87%8F%E5%8C%96/"], ["Agent 在金融流程自动化的应用", "04_AI%E9%87%91%E8%9E%8D/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/Agent%E5%9C%A8%E9%87%91%E8%9E%8D/"], ["金融大模型的监管与合规", "04_AI%E9%87%91%E8%9E%8D/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E9%87%91%E8%9E%8D%E7%9B%91%E7%AE%A1%E5%90%88%E8%A7%84/"]]}, {"name": "公司调研", "path": "", "pages": [["BlackRock Aladdin AI", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/BlackRock/"], ["JPMorgan COIN / IndexGPT", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/JPMorgan/"], ["Renaissance · Two Sigma · Bridgewater", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Renaissance_Two_Sigma_Bridgewater/"], ["Bloomberg 与 BloombergGPT", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Bloomberg/"], ["AlphaSense", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/AlphaSense/"], ["Kensho（S&P）", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Kensho/"], ["同花顺 · 恒生电子", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E5%90%8C%E8%8A%B1%E9%A1%BA_%E6%81%92%E7%94%9F%E7%94%B5%E5%AD%90/"], ["蚂蚁 支小宝 / 百灵", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/%E8%9A%82%E8%9A%81/"], ["Stripe AI 与 Ramp", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Stripe%E4%B8%8ERamp/"], ["DeepSeek 在金融的应用案例", "04_AI%E9%87%91%E8%9E%8D/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/DeepSeek%E9%87%91%E8%9E%8D%E5%BA%94%E7%94%A8/"]]}, {"name": "产品调研", "path": "", "pages": [["BloombergGPT", "04_AI%E9%87%91%E8%9E%8D/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/BloombergGPT/"], ["Claude for Financial Analysis", "04_AI%E9%87%91%E8%9E%8D/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Claude_for_Financial_Analysis/"], ["IndexGPT（JPM）", "04_AI%E9%87%91%E8%9E%8D/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/IndexGPT/"], ["Aladdin Copilot", "04_AI%E9%87%91%E8%9E%8D/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Aladdin_Copilot/"], ["AlphaSense 产品拆解", "04_AI%E9%87%91%E8%9E%8D/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/AlphaSense%E4%BA%A7%E5%93%81/"]]}], "AI 互联网": [{"name": "行业研究", "path": "", "pages": [["生成式搜索革命：Perplexity · SearchGPT · AI Overviews", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E7%94%9F%E6%88%90%E5%BC%8F%E6%90%9C%E7%B4%A2%E9%9D%A9%E5%91%BD/"], ["AI 浏览器崛起：Comet · Arc · Dia", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B4%9B%E8%B5%B7/"], ["AI Coding 产品格局", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI_Coding%E4%BA%A7%E5%93%81%E6%A0%BC%E5%B1%80/"], ["AI 原生社交与陪伴", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E5%8E%9F%E7%94%9F%E7%A4%BE%E4%BA%A4/"], ["广告 vs 订阅：AI 产品商业模式", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/AI%E4%BA%A7%E5%93%81%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F/"], ["中国 AI 应用层大战：豆包 · Kimi · 元宝 · 通义", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6/%E4%B8%AD%E5%9B%BDAI%E5%BA%94%E7%94%A8%E5%B1%82%E5%A4%A7%E6%88%98/"]]}, {"name": "公司调研", "path": "", "pages": [["Perplexity", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Perplexity/"], ["The Browser Company（Arc / Dia）", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/The_Browser_Company/"], ["Anysphere（Cursor）", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Anysphere/"], ["Vercel（v0）", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Vercel/"], ["Replit", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Replit/"], ["Lovable", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Lovable/"], ["Bolt.new", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Bolt/"], ["Character.AI", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/Character/"]]}, {"name": "产品调研", "path": "", "pages": [["Perplexity Pro 与 Comet 浏览器", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Perplexity_Pro/"], ["Arc Search / Dia", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Arc_Search_Dia/"], ["Google AI Overviews", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Google_AI_Overviews/"], ["Microsoft Copilot Pages", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Copilot_Pages/"], ["ChatGPT 作为互联网入口的演变", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/ChatGPT%E4%BD%9C%E4%B8%BA%E5%85%A5%E5%8F%A3/"], ["Kimi 探索版", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94/Kimi%E6%8E%A2%E7%B4%A2%E7%89%88/"]]}], "方法论": [{"name": "基石", "path": "", "pages": [["如何做一次公司调研", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E5%A6%82%E4%BD%95%E5%81%9A%E4%B8%80%E6%AC%A1%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/"], ["产品调研模板", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94%E6%A8%A1%E6%9D%BF/"], ["行业研究框架：SCP · 波特五力 · 价值链", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6%E6%A1%86%E6%9E%B6/"]]}, {"name": "信息源与工具", "path": "", "pages": [["一手信息源清单：财报 · 招股书 · 访谈 · 播客", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E4%B8%80%E6%89%8B%E4%BF%A1%E6%81%AF%E6%BA%90%E6%B8%85%E5%8D%95/"], ["常用行业数据源：Gartner · IDC · 艾瑞", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E8%A1%8C%E4%B8%9A%E6%95%B0%E6%8D%AE%E6%BA%90/"], ["用 AI 辅助行业研究的工作流", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E7%94%A8AI%E8%BE%85%E5%8A%A9%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81/"]]}], "关于": [{"name": "关于本站", "path": "%E5%85%B3%E4%BA%8E%E6%9C%AC%E7%AB%99/", "pages": []}, {"name": "更新日志", "path": "%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/", "pages": []}]};

  if (typeof tabData === "undefined") return;

  function getBase() {
    if (typeof __md_scope !== "undefined" && __md_scope.pathname) {
      return __md_scope.pathname.endsWith("/") ? __md_scope.pathname : __md_scope.pathname + "/";
    }
    var path = new URL(".", window.location.href).pathname;
    return path.endsWith("/") ? path : path + "/";
  }

  var currentDropdown = null;
  var currentTab = null;
  var currentSubMenu = null;

  function hideAll() {
    if (currentSubMenu) { currentSubMenu.remove(); currentSubMenu = null; }
    if (currentDropdown) { currentDropdown.remove(); currentDropdown = null; currentTab = null; }
  }

  function hideSubMenu() {
    if (currentSubMenu) { currentSubMenu.remove(); currentSubMenu = null; }
  }

  function showSubMenu(itemEl, pages, base, parentRect) {
    hideSubMenu();
    var sub = document.createElement("div");
    sub.className = "tab-dropdown tab-submenu";
    pages.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "tab-dropdown__item";
      a.textContent = p[0];
      a.href = base + p[1];
      sub.appendChild(a);
    });
    var itemRect = itemEl.getBoundingClientRect();
    sub.style.position = "fixed";
    sub.style.top = itemRect.top + "px";
    sub.style.left = parentRect.right + 2 + "px";
    document.body.appendChild(sub);
    currentSubMenu = sub;
  }

  function show(link, sections) {
    if (currentTab === link) return;
    hideAll();
    currentTab = link;
    var base = getBase();
    var rect = link.getBoundingClientRect();
    var el = document.createElement("div");
    el.className = "tab-dropdown";
    sections.forEach(function (sec) {
      var a = document.createElement("a");
      a.className = "tab-dropdown__item";
      a.textContent = sec.name;
      a.href = sec.path ? base + sec.path : (link.getAttribute("href") || link.href);
      if (sec.pages && sec.pages.length > 0) {
        a.classList.add("has-submenu");
        a.addEventListener("mouseenter", function () {
          showSubMenu(a, sec.pages, base, el.getBoundingClientRect());
        });
      } else {
        a.addEventListener("mouseenter", hideSubMenu);
      }
      el.appendChild(a);
    });
    el.style.position = "fixed";
    el.style.top = rect.bottom + "px";
    el.style.left = rect.left + rect.width / 2 + "px";
    el.style.transform = "translateX(-50%)";
    document.body.appendChild(el);
    currentDropdown = el;
  }

  function init() {
    var tabsBar = document.querySelector(".md-tabs");
    if (!tabsBar || tabsBar.getAttribute("data-dd")) return;
    tabsBar.setAttribute("data-dd", "1");

    document.querySelectorAll(".md-tabs__link").forEach(function (link) {
      var text = link.textContent.trim();
      var sections = tabData[text];
      if (!sections) return;
      link.addEventListener("mouseenter", function () { show(link, sections); });
    });

    document.addEventListener("mousemove", function (e) {
      if (!currentDropdown) return;
      var tbr = document.querySelector(".md-tabs").getBoundingClientRect();
      var ddr = currentDropdown.getBoundingClientRect();
      var inTabs = e.clientY >= tbr.top && e.clientY <= tbr.bottom + 4
                   && e.clientX >= tbr.left && e.clientX <= tbr.right;
      var inDd = e.clientY >= ddr.top - 4 && e.clientY <= ddr.bottom
                 && e.clientX >= ddr.left && e.clientX <= ddr.right;
      var inSub = false;
      if (currentSubMenu) {
        var sr = currentSubMenu.getBoundingClientRect();
        inSub = e.clientY >= sr.top && e.clientY <= sr.bottom
                && e.clientX >= sr.left - 4 && e.clientX <= sr.right;
      }
      if (!inTabs && !inDd && !inSub) hideAll();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () { init(); });
  }
})();
