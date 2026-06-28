# CLAUDE.md — ai-industry-research

## 这个仓库是什么

**jeffliulab.com 的「AI 行业研究」内容仓**（git submodule，收在主站 `content/open-notes/ai-industry-research`）。
内容只在 **https://jeffliulab.com/ai-industry-research** 展示：AI 产业、公司与市场研究。

> **2026-06 起 mkdocs 已退役**：本仓不再是 mkdocs 站点，GitHub Pages 已关停（`jeffliulab.github.io/ai-industry-research` 现在只是 3 秒跳转到主站的静态页，由 `.github/workflows/deploy.yml` 发布）。
> **导航事实源 = `notebook.config.json`**（不是 mkdocs.yml —— 已删）。`docs/` 放 Markdown 正文。

## 怎么加 / 改笔记

- **改已有 `.md`**：直接改，主站每日同步后自动生效（不动 config）。
- **加一篇 `.md`**：建 `docs/<path>.md`，**同时**在 `notebook.config.json` 对应分类 `items` 加 `{"title": "...", "titleEn": "...", "slug": "<path 去 .md>"}`；整目录可用 `autoListDir`。
- **非文章文件**：放进 `notebook.config.json` 顶层 `ignore` 前缀，或命名 `index.md` / `NOTE_GUIDE.md`，否则会被列为 ORPHAN 告警。
- **提交前**在主站仓跑 `npm run check:notebook-config`（DANGLING 阻断、ORPHAN 告警）。

> 完整作者指南见主站仓 **`docs/笔记维护.md`**；schema 见主站 `src/lib/notebook-config.ts`。

## i18n

本仓中文为主（基本无 `.en.md`）。导航英文标题由 `notebook.config.json` 的 `titleEn` 提供（缺省回退中文）。

## 目录结构

`docs/` 下中文/数字前缀顶层（`01_AI`、`02_人形机器人` 等），目录深度上限 3 级。作者方法论见 `行业研究标准方法.md`、`DEV_LOG.md`。
