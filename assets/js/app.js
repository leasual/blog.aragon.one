"use strict";

/**
 * Valine comment
 */

var config = {
    Valine: {
       appId: 'z4wAFeN4qah3MXHXWK4OaBAO-gzGzoHsz',
       appKey: 'XPlx8K4Pc9UME6TDQCe3uw7O',
       notify:false, 
       verify:false
    },
}

$(document).ready(function () {
   //   Valine配置
   new Valine({
       av: AV,
       el: '#vcomments',
       appId: config.Valine.appId,
       appKey: config.Valine.appKey,
       placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
       notify: config.Valine.notify,
       verify: config.Valine.verify,
       avatar: 'monsterid',
   })
   // ghost 搜索配置
   // new GhostSearch({
   //     host: [location.protocol, '//', location.host].join(''),
   //     version: 'v3',
   //     key: config.GhostApi,
   //     url: [location.protocol, '//', location.host].join(''),
   //     trigger: 'focus',
   //     defaultValue: '',
   //     options: {
   //         keys: ['title', 'published_at', 'url']
   //     },
   //     api: {
   //         parameters: {
   //             fields: ['title', 'published_at', 'url']
   //         }
   //     },
   //     template: function (results) {
   //         const time = parseTime(new Date(results.published_at), '{y}-{m}-{d}');
   //         return '' +
   //             '<a href="' + results.url + '" class="ghost-search-item">' +
   //             '<h2>' + results.title + '</h2>' +
   //             '<span>发布日期：' + time + '</span>' +
   //             '</a>';
   //     },
   //     on: {
   //         afterDisplay: function (result) {
   //             const mate = $('.search-meta');
   //             let text = mate.attr('data-no-results-text');
   //             text = text.replace('[results]', result.total);
   //             mate.text(text).show();
   //         }
   //     }
   // });
   // 首页诗词
   $.ajax({
       type: 'get',
       url: 'https://v1.alapi.cn/api/shici',
       dataType: "json",
       success: function (response) {
           var text_content = response.data.content;
           $('#index_shici').text(text_content)
       }
   });
})
