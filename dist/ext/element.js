!function(){"use strict";var e=function(e){return"function"==typeof e};Object.assign;function t(e,t){void 0===t&&(t="#ffb3cc"),console.log("%c  "+e,"color: "+t+"; font-weight: bold;")}function o(e,t){void 0===t&&(t=function(){}),$.ajax({type:"GET",dataType:"script",cache:!0,url:e,success:function(){t()}})}function a(){return $(window).width()>768?"pc":"phone"}var n=window.opts||window.acOptions||{};function i(e,t,o){void 0===e&&(e={}),void 0===t&&(t={}),void 0===o&&(o={});var a=Object.assign({},e,o);return Object.assign({},a,t)}function r(e){return i({name:"reacg",color:"#FFB3CC",title:"",avatar:"https://api.uomg.com/api/rand.avatar",favicon:"",contentSize:"mid",headerBackground:"https://api.uomg.com/api/rand.avatar",log:!0},n.theme,e)}var s=function(){var e;(e=$("#loading")).length&&e.fadeOut(300),function(){if(r().log)for(var e=0,o=[{str:"# # # # # # # # # # # # # # # # # # # # # # # #",color:"#1e90ff"},{str:"# 🔮 Awescnb: awesome cnblog!",color:"#eb4d4b"},{str:"# 👌 使用 awescnb 安装、构建、分享皮肤",color:"#a29bfe"},{str:"# 📑 文档:https://www.yuque.com/awescnb",color:"#fd79a8"},{str:"# 🐧 Group:541802647(活跃)",color:"#55efc4"},{str:"# 📌 Gitee:https://gitee.com/guangzan/awescnb",color:"#7ed6df"},{str:"# 🌏 GitHub:https://github.com/awescnb/awescnb",color:"#f368e0"},{str:"# # # # # # # # # # # # # # # # # # # # # # # #",color:"#1e90ff"}];e<o.length;e++){var a=o[e];t(a.str,a.color)}}()};window.skinName,window.visitorUserId,window.currentBlogId,window.currentBlogApp;var l=$("#user_icon").attr("src");var c=function(){""!==l&&$("#blogLogo").attr("src",l)};function d(){$("code.language-runCode").each((function(){window.eval($(this).text()),$(this).parent("pre").remove()})),$("#sideBarMain").toggleClass("sidebar-hide"),$((function(){window.isLogined?$("#navigator").append('<div class="islogin"><a href="javascript:logout()">退出</a></div>'):$("#navigator").append('<div class="islogin"><a href="https://account.cnblogs.com/signin">登录</a></div>'),$(".float-btn li,#blog_nav_newpost,.diggit,#btn_comment_submit").addClass("mdui-ripple"),$(".nav a").click((function(){document.body.clientWidth<=1200&&$("#sideBarMain").toggleClass("sidebar-show")})),$("a[href*=\\#],area[href*=\\#]").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){var t=e.offset().top;return $("html,body").animate({scrollTop:t},500),!1}}}))}))}var u=function(){$(document).scroll((function(){var e=parseInt($(window).scrollTop())+$(window).height(),t=$("#sideBarMain").outerHeight(),o=$("#mainContent").outerHeight();o>t&&(e>=t&&e<o?$("#sideBarMain").addClass("sidebar-fixed"):$("#sideBarMain").removeClass("sidebar-fixed")),$(window).scrollTop()<$("#header").outerHeight()&&$("#sideBarMain").removeClass("sidebar-fixed")})),d()};window.currentBlogApp;function f(){return!!$("#post_detail").length}function m(){return $("#post_detail").length?"post":$(".day").length?"index":$("#taglist_main").length?"tag":$(".entrylistPosttitle").length?"list":$("#myposts").length?"tag":void 0}var p=function(){f()&&($('#cnblogs_post_body a[href^="http"]').each((function(){$(this).attr("target","_blank")})),$("table").each((function(){$(this).css("cssText","width:100%!important;display:table;"),$(this).wrapAll('<div class="tablebox"></div>'),$(".tablebox").css("overflow","auto")})))};function h(){$("html,body").finish().animate({scrollTop:"0px"},500)}function g(){$("#sideBarMain").toggleClass("sidebar-show"),$("#sideBarMain>div:not(#sidebar_scroller)").show(),$("#sidebar_scroller").hide()}function b(){$("#sideBarMain>*:not(#sidebar_scroller)").show(),$("#main").toggleClass("main-hide"),$("#sidebar_scroller").hide()}var v=function(){f()||b(),$("#home").append('<div class="float-btn"><ul>\n            <li class="btn-top"><a></a></li>\n            <li class="btn-sidebar"><a></a></li>\n            <li class="btn-main"><a></a></li>\n            </ul></div>'),$(".btn-top").click(h),$(".btn-sidebar").click(g),$(".btn-main").click(b)};function y(){$("#sidebar_scroller").show(),$("#main").toggleClass("main-hide"),$("#sideBarMain").toggleClass("sidebar-show"),$("#sideBarMain>div:not(#sidebar_scroller)").hide()}var w=function(){var e;f()&&((e=$("#cnblogs_post_body :header:eq(0)")).length>0&&($(".btn-sidebar").before('<li class="btn-content"><a></a></li>'),$(".btn-content a").click(y),e.attr("offset","1"),$("#sideBarMain").prepend('<div id="sidebar_scroller" class="sidebar-block"><h3 class="catListTitle">导航目录</h3><ul class="nav"></ul></div>'),$("#cnblogs_post_body :header").each((function(t){var o=$(this);if(o.attr("id","scroller-"+t),o[0].tagName>e[0].tagName)o.attr("offset",parseInt(e.attr("offset"))+1);else if(o[0].tagName<e[0].tagName){var a=parseInt(o[0].tagName.substring(1)),n=parseInt(e[0].tagName.substring(1)),i=parseInt(e.attr("offset"))-(n-a);i<1&&(i=1),o.attr("offset",i)}else o.attr("offset",e.attr("offset"));$("#sidebar_scroller ul").append('<li class="scroller-offset'+o.attr("offset")+'"><a href="#scroller-'+t+'">'+o.text()+"</a></li>"),e=o})),$(window).scroll((function(){var e=$("#sidebar_scroller").find(".active"),t=e.prevAll().length+1,o=e.outerHeight();$(".nav").scrollTop(t*o-14)}))),o("https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js",(function(){$("body").scrollspy()})))};function x(){new window.OwO({logo:'<i class="fa fa-smile-o" aria-hidden="true"></i>',container:document.getElementsByClassName("OwO")[0],target:document.getElementById("tbCommentBody"),api:"https://cdn.jsdelivr.net/gh/gshang2018/home/gshang.owo.json",position:"up",width:"100%",maxHeight:"250px"})}function j(){f()&&($(".commentbox_footer").before('<div class="OwO"><div class="OwO-logo"><i class="fa fa-smile-o" aria-hidden="true"></i></div></div>'),$(".OwO").click((function(){})),o("https://guangzan.gitee.io/imagehost/awescnb/js/owo.min.js",x))}function _(){f()&&window.Notiflix.Notify.Success("已生成博文目录，点击右下角图标查看")}function M(){for(var e=0;e<=$("pre").length;e++)$("pre").eq(e).wrapAll('<div class="copyItem"></div>'),$(".copyItem").css("position","relative"),$("pre").eq(e).before('<div class="clipboard-button" id="copy_btn_'+e+' " data-clipboard-target="#copy_target_'+e+'"title="复制"></div>'),$("pre").eq(e).attr("id","copy_target_"+e);var t=new ClipboardJS(".clipboard-button");t.on("success",(function(e){e.trigger.innerHTML="成功",setTimeout((function(){e.trigger.innerHTML=""}),2e3),e.clearSelection()})),t.on("error",(function(e){e.trigger.innerHTML="失败",setTimeout((function(){e.trigger.innerHTML=""}),2e3),e.clearSelection()}))}var k=function(){f()&&o("https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js",M)};function C(){$(".cnblogs-markdown img").each((function(){var e=document.createElement("a");$(e).attr("data-fancybox","gallery"),$(e).attr("href",$(this).attr("src")),$(this).wrap(e)}))}var T=function(){f()&&o("https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.js",C)};var B={chitose:"live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json",epsilon2_1:"live2d-widget-model-chitose/assets/chitose.model.json","haru-01":"live2d-widget-model-haru/01/assets/haru01.model.json","haru-02":"live2d-widget-model-haru/02/assets/haru02.model.json",hijiki:"live2d-widget-model-hijiki/assets/hijiki.model.json",tororo:"live2d-widget-model-tororo/assets/tororo.model.json",ryoufuku:"misaki/ryoufuku.model.json",seifuku:"misaki/seifuku.model.json",shifuku:"misaki/shifuku.model.json",vert_classic:"vert_classic/vert_classic.model.json",vert_normal:"vert_normal/vert_normal.model.json",vert_swimwear:"vert_swimwear/vert_swimwear.model.json","小埋":"小埋/13.json","伊芙加登":"伊芙加登/14.json","玉藻前":"玉藻前/16.json"},z="https://cdn.jsdelivr.net/gh/github923665892/awesCnb-live2dModels",I="1.7";function O(e){var t="random"===e?B[function(e){var t,o=0;for(var a in e)Math.random()<1/++o&&(t=a);return t}(B)]:B[e],a=z+"@"+I+"/"+t;o("https://guangzan.gitee.io/imagehost/awescnb/js/live2d.min.js",(function(){loadlive2d("model",a)}))}function A(e){var t={colors:["#eb125f","#6eff8a","#6386ff","#f9f383"],size:30,maxCount:30};this.params=Object.assign({},t,e),e.colors.length||(this.params.colors=t.colors)}function F(e){var t=Math.random()>.5,o=Math.random()>.5,a=parseInt(160*Math.random()),n=parseInt(160*Math.random());t&&(a*=-1),o&&(n*=-1);var i="translate3d("+a+"px,"+n+"px, 0) scale(0)";e.style.webkitTransform=i,e.style.MozTransform=i,e.style.msTransform=i,e.style.OTransform=i,e.style.transform=i}function E(e){setTimeout((function(){for(var t=0;t<e.length;t++)document.body.removeChild(e[t])}),1e3)}A.prototype.fly=function(e,t,o,a){a||(a=300);var n=[],i=document.createDocumentFragment(),r=this.params.maxCount;o&&(r*=o);for(var s,l=0,c=0;c<r;c++){var d=parseInt(c/this.params.maxCount),u=document.createElement("i");u.className="color-ball ball-loop-"+d;Math.random();Math.random()>.5&&-1;Math.random();Math.random()>.5&&-1,u.style.left=e+"px",u.style.top=t+"px",u.style.width=this.params.size+"px",u.style.height=this.params.size+"px",u.style.position="fixed",u.style.borderRadius="1000px",u.style.boxSizing="border-box",u.style.zIndex=9999,u.style.opacity=0,0===d&&(u.style.opacity=1),u.style.transform="translate3d(0px, 0px, 0px) scale(1)",u.style.transition="transform 0.7s "+d*a/1e3+"s ease-out",u.style.backgroundColor=(s=this.params.colors)[Math.floor(Math.random()*s.length)],i.appendChild(u),n.push(u),d!==l&&(!function(e){setTimeout((function(){for(var t=document.getElementsByClassName("ball-loop-"+e),o=0;o<t.length;o++)t[o].style.opacity=1;e===l&&E(n)}),e*a+30)}(d),l=d)}document.body.appendChild(i),!o&&E(n),setTimeout((function(){for(var e=0;e<n.length;e++)F(n[e])}),10)};function N(e,t){if(e){if(/^rgb\(/.test(e))return e;if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))return e;var o=parseInt("0x"+e.slice(1,3)),a=parseInt("0x"+e.slice(3,5)),n=parseInt("0x"+e.slice(5,7));return t?"rgba("+o+","+a+","+n+","+t+")":"rgb("+o+","+a+","+n+")"}}function S(e){return"random"===e?function(e){var t="";if("rgba"===e)t="rgba("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+",0.6)";else if("16"===e)t="#"+Math.floor(16777215*Math.random()).toString(16);else{var o=e||["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#CC0273"];t=o[Math.floor(Math.random()*o.length)]}return t}("rgba"):e}var H=(s(),{createTheme:function(){var t={theme:null,config:{globalProperties:{}},plugins:[],modules:{}},o=new Set,a=t.theme={_context:t,version:"3.0",get config(){return t.config},set config(e){},use:function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return o.has(t)||(t&&e(t.install)?(o.add(t),t.install.apply(t,[a].concat(i))):e(t)&&(o.add(t),t.apply(void 0,[a].concat(i)))),a},module:function(){}};return a}}).createTheme();c(),u(),p(),T(),k(),v(),w(),j(),o("https://guangzan.gitee.io/imagehost/awescnb/js/notiflix-2.1.3.min.js",_),H.use((function(e,t,o){var r=function(e){return i({enable:!1,value:"",opacity:.85,repeat:!1},n.bodyBackground,e)}(t),s=r.enable,l=r.opacity,c=r.value,d=r.repeat;if(s){!function(e,t){var o=new RegExp("http").test(e)?"img":"color";"color"===o&&$("body").css("background-color",""+e),"img"===o&&($("body").css("background-image","url("+e+")"),t||($("body").css({"background-repeat":"no-repeat","background-size":"100% 100%","background-attachment":"fixed"}),"phone"===a()&&$("body").css("background-size","cover")))}(c,d);!function(e,t){$(t).css("opacity",""+e)}(l,Object.assign({},{opacitySelector:"#main,#navigator"},o).opacitySelector)}})).use((function(e,t){var o=function(e){return i({enable:!1,page:"all",agent:"pc",model:"haru-01",width:150,height:200,position:"left",gap:"default"},n.live2d,e)}(t),r=o.enable,s=o.page,l=o.agent,c=o.model,d=o.position,u=o.gap,f=o.width,p=o.height;r&&(s!==m()&&"all"!==s||l!==a()&&"all"!==l||(!function(e,t,o){var a='<canvas id="model" style="position:fixed;'+e+':0;bottom:0;z-index:30;pointer-events: none;" width="'+t+'"height="'+o+'" ></canvas>';$("body").append(a)}(d,f,p),function(e,t){"default"!==t&&$("#model").css(e,t)}(d,u),O(c)))})).use((function(e,t){var r,s=function(e){return i({enable:!0,page:"all",agent:"pc",autoplay:!1,volume:.4,lrc:{enable:!1,type:1,color:""},audio:[{name:"404 not found",artist:"REOL",url:"https://guangzan.gitee.io/imagehost/awescnb/music/demo4.mp3",cover:"https://guangzan.gitee.io/imagehost/awescnb/music/demo.jpg",lrc:""}]},n.musicPlayer,e)}(t),l=s.enable,c=s.page,d=s.agent,u=s.autoplay,f=s.audio,p=s.volume,h=s.lrc;l&&(c!==m()&&"all"!==c||d!==a()&&"all"!==d||(r="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css",$("head").append("<link>"),$("head").children(":last").attr({rel:"stylesheet",type:"text/css",href:r}),o("https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js",(function(){!function(e,t,o,a){$("body").append('<div id="player" class="aplayer music-APlayer"></div>');var n=new APlayer({container:document.getElementById("player"),fixed:!0,preload:"auto",autoplay:e,volume:o,lrcType:a.enable?a.type:null,audio:t});window.onbeforeunload=function(){var e=n.audio.currentTime;localStorage.audioTime=e},window.onload=function(){n.seek(localStorage.audioTime?Number(localStorage.audioTime):0)},e&&$(".aplayer-lrc").show(),a.enable&&(n.on("play",(function(){$(".aplayer-lrc").show()})),n.on("pause",(function(){$(".aplayer-lrc").hide()}))),a.enable&&""!==a.color&&$(".aplayer-lrc").css("color",a.color)}(u,f,p,h)}))))})).use((function(e,t){var o=function(e){return i({enable:!1,colors:[],size:30,maxCount:10},n.click,e)}(t);o.enable&&function(e){var t=new A({colors:e.colors,size:e.size,maxCount:e.maxCount});$("body").click((function(e){t.fly(e.clientX,e.clientY)}))}(o)})).use((function(e,t){var o=r(t),a=o.title,n=o.favicon;!function(e){""!==e&&(document.title=e)}(a),function(e){if(""!==e){var t=document.getElementById("favicon");null===t?$("title").after('<link id="favicon" rel="shortcut icon" href="'+e+'" type="image/svg+xml">'):t.href=e}}(n)})).use((function(e,t){!function(e){var t=S(e),o=N(t,.85),a=N(t,.4),n=N(t,.2);$("head").append('<style class="themeColor">:root{\n            --themeColor: '+t+";\n            --theme-primary-8: "+o+";\n            --theme-primary-4: "+a+";\n            --theme-primary-2: "+n+";\n        </style>")}(r(t).color)}))}();