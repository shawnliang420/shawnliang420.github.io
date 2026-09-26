#!/usr/bin/env bash
# 把当前文件夹推到 GitHub Pages 仓库。第一次运行会初始化 git；以后每次运行就是提交 + 推送。
# 用法：在终端里 cd 到这个文件夹，然后  bash publish.sh "改了什么"
set -e
cd "$(dirname "$0")"
REMOTE="git@github.com:shawnliang420/shawnliang420.github.io.git"
MSG="${1:-Update site $(date '+%Y-%m-%d %H:%M')}"

if [ ! -d .git ]; then
  git init
  git branch -M main
  git remote add origin "$REMOTE"
  printf '.DS_Store\nphoto/portrait.jpg\n' > .gitignore   # 原图 4 MB 不上传，网站只用 portrait_web.jpg
fi

git add -A
git commit -m "$MSG" || echo "没有改动，跳过提交"
# 第一次推送若远端已有 README 之类的初始提交，用 --force 覆盖（这是你自己的新仓库，安全）
git push -u origin main || git push -u origin main --force
echo "已推送。1–2 分钟后访问 https://shawnliang420.github.io"
