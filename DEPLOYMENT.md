# 📦 GitHub Pages 部署指南

本项目已配置为自动部署到 GitHub Pages。

## 🚀 部署步骤

### 1. 在 GitHub 上配置 Pages

1. 进入你的 GitHub 仓库：`https://github.com/minyujiaricc-boop/Axiom-web`
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 部分，选择 **GitHub Actions**

### 2. （可选）配置 API Key

如果你的应用需要 Gemini API Key：

1. 在仓库页面点击 **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. 添加：
   - Name: `GEMINI_API_KEY`
   - Value: 你的 Gemini API Key

⚠️ **注意**：由于这是前端应用，API Key 会暴露在浏览器中。建议：
- 使用受限的 API Key（限制域名和配额）
- 或者考虑添加后端代理来保护 API Key

### 3. 推送代码触发部署

```bash
# 进入项目目录
cd /Users/minyujia/Documents/Projects/Axiom-web

# 添加所有更改
git add .

# 提交更改
git commit -m "配置 GitHub Pages 部署"

# 推送到 GitHub
git push origin main
```

### 4. 查看部署状态

1. 在仓库页面点击 **Actions** 标签
2. 查看最新的工作流运行状态
3. 部署成功后，你的网站将可以在以下地址访问：
   - `https://minyujiaricc-boop.github.io/Axiom-web/`

## 🔄 自动部署

配置完成后，每次推送到 `main` 分支都会自动触发部署：

1. GitHub Actions 会自动构建项目
2. 构建完成后自动部署到 GitHub Pages
3. 通常需要 2-5 分钟完成整个流程

## 🛠️ 本地测试构建

在推送前，你可以本地测试构建：

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 📝 已配置的文件

- ✅ `vite.config.ts` - 已添加 `base: '/Axiom-web/'` 配置
- ✅ `.github/workflows/deploy.yml` - GitHub Actions 自动部署工作流

## 🌐 访问地址

部署成功后的网站地址：
- **主网站**: https://minyujiaricc-boop.github.io/Axiom-web/

## ❓ 常见问题

### Q: 页面显示 404 错误？
A: 确保在 GitHub 仓库的 Settings → Pages 中选择了 **GitHub Actions** 作为 Source。

### Q: CSS/JS 文件无法加载？
A: 检查 `vite.config.ts` 中的 `base` 路径是否正确设置为 `/Axiom-web/`。

### Q: 如何使用自定义域名？
A: 在仓库根目录创建 `public/CNAME` 文件，内容为你的自定义域名，然后在域名 DNS 设置中添加 CNAME 记录。

## 📚 相关文档

- [GitHub Pages 官方文档](https://docs.github.com/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions 文档](https://docs.github.com/actions)
