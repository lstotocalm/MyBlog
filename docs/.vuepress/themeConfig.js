const getDocPath = require('./getDocPath')
module.exports = {
  nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Document',
      link: '/document/vue/'
    },
    {
      text: 'Article',
      link: '/document/article/'
    },
    {
      text: '结语',
      link: '/document/funny/'
    },
    {
      text: 'Baidu',
      link: 'https://www.baidu.com'
    },
  ],
  sidebarDepth: 2,
  sidebar: [{
    title: 'Vue',
    collapsable: false,
    children: getDocPath('document/vue')
  }, {
    title: 'vue-router',
    collapsable: false,
    children: getDocPath('document/vue-router')
  }, {
    title: 'Webpack',
    collapsable: false,
    children: getDocPath('document/webpack')
  }, {
    title: 'vue-cli3',
    collapsable: false,
    children: getDocPath('document/vue-cli3')
  }, {
    title: 'h5特性',
    collapsable: false,
    children: getDocPath('document/h5')
  }, {
    title: '原生js',
    collapsable: false,
    children: getDocPath('document/js')
  }, {
    title: 'git讲解',
    collapsable: false,
    children: getDocPath('document/git')
  }, {
    title: '扩展+',
    collapsable: false,
    children: getDocPath('document/other')
  }, {
    title: '其他文章',
    collapsable: false,
    children: getDocPath('document/article')
  }, {
    title: '结语',
    collapsable: false,
    children: getDocPath('document/funny')
  }]
}