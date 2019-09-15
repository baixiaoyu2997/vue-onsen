# 介绍
以`vue-cli+onsenui+cordova`为基础做的仿豆瓣应用v2.0，[查看v1版本请点此处](https://github.com/baixiaoyu2997/vue-onsen/tree/v1)

## 开发
1. `yarn`安装包之后，进入`web`目录再次执行`yarn`，本项目是以cordova目录和前端项目····分开的形式进行开发。
2. 项目根目录下执行`npm run dev`进行开发
3. 项目根目录下执行`npm run prepare`,执行web项目打包+`cordova prepare`
4. 定位插件cordova-plugin-baidumaplocation v4.0.2中还存在bug，需要将`platforms/android/app/src/com/aruistar`复制到 `platforms/android/app/src/main/java/com`目录下
5. 集成actions,提交自动部署gh-pages
## 注意
1. 因为定位插件只支持android和ios，所以在浏览器开发中无法进行定位
1. 定位服务需要申请自己的密钥