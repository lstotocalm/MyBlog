const themeConfig = require('./themeConfig.js')
module.exports = {
  title: '你想要力量吗！',
  description: '走过路过，不要错过！！！',
  port: 9090,
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  // dest: './docs/.vuepress/dist',
  // 只支持’常青树‘浏览器
  evergreen: true,
  themeConfig: themeConfig
}