
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# git
git add .
git commit -m 'deploy'
git push origin master

# 生成静态文件
yarn build

# 发布到服务器    
scp -r ./docs/.vuepress/dist/ root@39.108.166.202:/home/project/Blog

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -