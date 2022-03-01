#!/usr/bin/env pwsh

$sote_home_dir = "D:\Projects\AlexLiu\sote-home"
$target_dir = "D:\Projects\AlexLiu\AlexSOTe.github.io"

echo "【进入 $($sote_home_dir) 目录】"
cd $sote_home_dir

echo "【打包...】"
npm run build:prod

echo "【进入打包后的 dist 文件夹】"
cd dist

echo "【复制到桌面】"
Copy-Item -Path "$($sote_home_dir)\dist\*" -Recurse -Destination "$($target_dir)\" -Force

echo "【进入 AlexSOTe.github.io 文件夹】"
cd $target_dir

echo "【git commit】"
git add .
git commit -m "deploy"

echo "【git push】"
git push -f

echo "【部署完成】"

cd $sote_home_dir
