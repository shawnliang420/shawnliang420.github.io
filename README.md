# 学术主页：上线与维护

这个文件夹就是整个网站，没有任何构建步骤，浏览器直接打开 `index.html` 就能看。

```
index.html   页面骨架 + 样式 + 渲染逻辑（一般不用碰）
config.js    所有文字内容：简介、News、Research、论文、图廊、合作者、页脚口号
admin.html   配置页：表单填写 → 预览 → 下载新的 config.js
figures/     论文图（png），config.js 里按相对路径引用
photo/       头像 portrait_web.jpg（4:5，1000×1250）
```

## 零、用终端推送（推荐，已配 SSH 的话）

```bash
cd 这个文件夹
bash publish.sh "first version"
```

以后每次改完内容：`bash publish.sh "add a paper"`。脚本会自动初始化 git、忽略 4 MB 原图、提交并推送到 `git@github.com:shawnliang420/shawnliang420.github.io.git`。
推送后到仓库 **Settings → Pages**，Source 选 **Deploy from a branch**，Branch 选 `main` / `/ (root)`，保存一次即可（只需做一次）。

如果推送时报 `Permission denied (publickey)`，说明这台电脑还没配 GitHub 的 SSH 密钥：运行 `ssh-keygen -t ed25519 -C "你的邮箱"` 一路回车，再 `cat ~/.ssh/id_ed25519.pub` 把输出粘到 GitHub → Settings → SSH and GPG keys → New SSH key，然后重新运行脚本。不想折腾密钥就用下面第一节的网页上传。

## 一、第一次上线（网页上传方式）

1. 登录 GitHub，新建仓库，名字必须是 **`shawnliang420.github.io`**，选 Public，其余默认。
2. 进入仓库，点 **Add file → Upload files**，把本文件夹里的全部内容（`index.html`、`admin.html`、`config.js`、`figures/`、`photo/`）拖进去，写一句 commit 说明，点 **Commit changes**。文件夹可以整个拖，GitHub 会保留目录结构。
3. 仓库 **Settings → Pages**，Build and deployment 选 **Deploy from a branch**，Branch 选 `main`、目录选 `/ (root)`，Save。
4. 等一两分钟，访问 **https://shawnliang420.github.io** 即可。

`README.md` 传不传都行；`photo/portrait.jpg` 原图 4 MB，网站只用 `portrait_web.jpg`，原图可以不传。

## 二、以后改内容

1. 本地双击 `admin.html`（它读的是同目录下的 `config.js`）。
2. 左侧栏切换区块。News、Publications、Selected figures、Collaborators 都是同一套列表逻辑：**默认只列出网站上会显示的前 N 条**（N 在"网站显示前 N 条"里改），其余收在"管理其它"里；点"添加"会插到最前面并自动展开；每条默认折叠成一行，点开才编辑；每条都有上移 / 下移 / 删除。旧条目不用删，把 N 调小它们就不再显示，以后想放出来再调回去。
3. 点 **预览**，会新开一个窗口看到改后的效果（预览走浏览器本地存储，不会改动任何文件）。
4. 满意后点 **下载 config.js**，得到一份新的 `config.js`。
5. 到 GitHub 仓库里替换它：打开仓库中的 `config.js` → 右上角铅笔图标 → 全选删掉 → 把新文件内容粘进去 → Commit changes。或者用 **Upload files** 直接把新文件拖进去覆盖。
6. 一两分钟后网站更新。

也可以跳过配置页，直接在 GitHub 网页里编辑 `config.js`，它就是一段可读的 JSON。

## 三、换图、换头像

- 新论文图放进 `figures/`，命名随意（建议 `fig-论文短名-序号.png`），然后在配置页对应位置填 `figures/xxx.png`。图廊和论文缩略图都用白底 png，页面会把白底融进底色。
- 头像替换 `photo/portrait_web.jpg`，保持 4:5 竖版即可（页面会按上部 20% 对齐裁切）。
- 不再用的图从 `figures/` 删掉，仓库保持干净。

## 四、几点说明

- `admin.html` 上传后别人也能打开，但它只是个表单，不含任何密钥，也改不了你的网站；不想公开就不上传，只在本地用。
- 简介和 News 文本里可以用 `**两个星号**` 加粗一句话。
- 论文作者一栏用英文逗号分隔，和"名字"一致的作者会自动加粗。
- 想换域名：仓库根目录加一个 `CNAME` 文件写域名，DNS 加 CNAME 记录指向 `shawnliang420.github.io`。
