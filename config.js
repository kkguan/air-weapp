docute.init({
  // tocVisibleDepth: 3,
  repo: 'https://github.com/AlanZou007/air-weapp',
  // twitter: 'rem_rin_rin',
  // 'edit-link': 'https://github.com/egoist/docute/b÷lob/master/docs/',
  landing: 'landing.html',
  toc:  './menu.md',
  nav:[
    {
      title:'Home',
      path:'/'
    },
    {
      title:'基础',
      path:'/base/icon',
      // source:'/base/icon.md'
    },
    {
      title:'视图',
      path:'/view/topTips',
      // source:'/view/topTips.md'
    },
    {
      title:'布局',
      path:'/layout/panel',
      // source:'/layout/panel.md'
    }
  ],
  // announcement(route) {
    //  const info = { type: 'success' }
    //  if (/\/zh-.+$/.test(route.path)) {
    //    info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">捐赠!</a> 通过 Patron 或者一次性捐赠支持 Docute 的开发。'
    //  } else {
    //    info.html = '<a style="margin-right:10px;" class="docute-button docute-button-mini docute-button-success" href="https://github.com/egoist/donate" target="_blank">Donate!</a> Support Docute development by becoming a patron or one-time donation.'
    //  }
    //  return info
  //  },
   plugins: [
    // the docsearch variable is provided by docsearch plugin
    docsearch({
      appId: '',
      apiKey: '',
      indexName: '',
      tags: ['english', 'zh-Hans', 'zh-Hant', 'ja'],
      url: 'https://alanzou007.github.io/air-weapp'
    })
  ],
  // icons: [
  //   {
  //     label: '关注我的微博',
  //     svgId: 'i-weibo',
  //     svgClass: 'weibo-icon',
  //     link: 'http://weibo.com/zengxinyu'
  //   }
  // ],
})
