#!/bin/bash

echo "🚀 开始部署 WeathersPro 营销网站..."

# 初始化 Git
echo "📦 初始化 Git 仓库..."
git init

# 添加所有文件
echo "📁 添加文件..."
git add .

# 创建提交
echo "💾 创建提交..."
git commit -m "Initial commit: WeathersPro marketing website with real app screenshots"

# 添加远程仓库
echo "🔗 连接到 GitHub..."
git remote add origin https://github.com/WeiProduct/Weather.git

# 设置主分支
git branch -M main

# 推送到 GitHub
echo "⬆️ 推送到 GitHub..."
git push -u origin main

echo "✅ 部署完成！"
echo ""
echo "📋 下一步："
echo "1. 访问: https://github.com/WeiProduct/Weather/settings/pages"
echo "2. 设置 Source: Deploy from a branch"
echo "3. 选择 Branch: main, Folder: / (root)"
echo "4. 保存后等待 2-5 分钟"
echo "5. 访问: https://weiproduct.github.io/Weather/"