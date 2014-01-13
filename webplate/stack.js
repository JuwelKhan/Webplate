/**
 * engine.js
 *
 * Author:        	Chris Humboldt
 * Last Edited:   	9 January 2014
 * Edited By:   	Chris Humboldt
 */// ---------- Yepnope
(function(e,t,n){function r(e){return!e||e=="loaded"||e=="complete"||e=="uninitialized"}function i(e,n,i,s,u,a){var f=t.createElement("script"),l,p;s=s||P.errorTimeout;f.src=e;for(p in i)f.setAttribute(p,i[p]);n=a?o:n||m;f.onreadystatechange=f.onload=function(){if(!l&&r(f.readyState)){l=1;n();f.onload=f.onreadystatechange=null}};c(function(){if(!l){l=1;n(1)}},s);A();u?f.onload():h.parentNode.insertBefore(f,h)}function s(e,n,r,i,s,u){var a=t.createElement("link"),f,l;i=i||P.errorTimeout;n=u?o:n||m;a.href=e;a.rel="stylesheet";a.type="text/css";for(l in r)a.setAttribute(l,r[l]);if(!s){A();h.parentNode.insertBefore(a,h);c(n,0)}}function o(){var e=d.shift();v=1;if(e)if(e.t)c(function(){(e["t"]=="c"?P.injectCss:P.injectJs)(e.s,0,e.a,e.x,e.e,1)},0);else{e();o()}else v=0}function u(e,n,i,s,u,a,f){function l(t){if(!m&&r(p.readyState)){w.r=m=1;!v&&o();if(t){e!="img"&&c(function(){b.removeChild(p)},50);for(var i in M[n])M[n].hasOwnProperty(i)&&M[n][i].onload();p.onload=p.onreadystatechange=null}}}f=f||P.errorTimeout;var p=t.createElement(e),m=0,g=0,w={t:i,s:n,e:u,a:a,x:f};if(M[n]===1){g=1;M[n]=[]}if(e=="object"){p.data=n;p.setAttribute("type","text/css")}else{p.src=n;p.type=e}p.width=p.height="0";p.onerror=p.onload=p.onreadystatechange=function(){l.call(this,g)};d.splice(s,0,w);if(e!="img")if(g||M[n]===2){A();b.insertBefore(p,y?null:h);c(l,f)}else M[n].push(p)}function a(e,t,n,r,i){v=0;t=t||"j";if(k(e))u(t=="c"?T:x,e,t,this.i++,n,r,i);else{d.splice(this.i++,0,e);d.length==1&&o()}return this}function f(){var e=P;e.loader={load:a,i:0};return e}var l=t.documentElement,c=e.setTimeout,h=t.getElementsByTagName("script")[0],p={}.toString,d=[],v=0,m=function(){},g="MozAppearance"in l.style,y=g&&!!t.createRange().compareNode,b=y?l:h.parentNode,w=e.opera&&p.call(e.opera)=="[object Opera]",E=!!t.attachEvent&&!w,S="webkitAppearance"in l.style&&!("async"in t.createElement("script")),x=g?"object":E||S?"script":"img",T=E?"script":S?"img":x,N=Array.isArray||function(e){return p.call(e)=="[object Array]"},C=function(e){return Object(e)===e},k=function(e){return typeof e=="string"},L=function(e){return p.call(e)=="[object Function]"},A=function(){if(!h||!h.parentNode)h=t.getElementsByTagName("script")[0]},O=[],M={},_={timeout:function(e,t){t.length&&(e.timeout=t[0]);return e}},D,P;P=function(e){function t(e){var t=e.split("!"),n=O.length,r=t.pop(),i=t.length,s={url:r,origUrl:r,prefixes:t},o,u,a;for(u=0;u<i;u++){a=t[u].split("=");o=_[a.shift()];o&&(s=o(s,a))}for(u=0;u<n;u++)s=O[u](s);return s}function r(e){var t=e.split("?")[0];return t.substr(t.lastIndexOf(".")+1)}function i(e,i,s,o,u){var a=t(e),l=a.autoCallback,c=r(a.url);if(a.bypass)return;i&&(i=L(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]);if(a.instead)return a.instead(e,i,s,o,u);M[a.url]&&a.reexecute!==!0?a.noexec=!0:M[a.url]=1;e&&s.load(a.url,a.forceCSS||!a.forceJS&&"css"==r(a["url"])?"c":n,a.noexec,a.attrs,a.timeout);(L(i)||L(l))&&s.load(function(){f();i&&i(a.origUrl,u,o);l&&l(a.origUrl,u,o);M[a.url]=2})}function s(e,t){function n(e,n){if(""!==e&&!e)!n&&f();else if(k(e)){n||(u=function(){var e=[].slice.call(arguments);a.apply(this,e);f()});i(e,u,t,0,r)}else if(C(e)){l=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}();for(c in e)if(e.hasOwnProperty(c)){!n&&!--l&&(L(u)?u=function(){var e=[].slice.call(arguments);a.apply(this,e);f()}:u[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t);f()}}(a[c]));i(e[c],u,t,c,r)}}}var r=!!e.test,s=r?e.yep:e.nope,o=e.load||e.both,u=e.callback||m,a=u,f=e.complete||m,l,c;n(s,!!o||!!e.complete);o&&n(o);!o&&!!e.complete&&n("")}var o,u,a=this.yepnope.loader;if(k(e))i(e,0,a,0);else if(N(e))for(o=0;o<e.length;o++){u=e[o];k(u)?i(u,0,a,0):N(u)?P(u):C(u)&&s(u,a)}else C(e)&&s(e,a)};P.addPrefix=function(e,t){_[e]=t};P.addFilter=function(e){O.push(e)};P.errorTimeout=1e4;if(t.readyState==null&&t.addEventListener){t.readyState="loading";t.addEventListener("DOMContentLoaded",D=function(){t.removeEventListener("DOMContentLoaded",D,0);t.readyState="complete"},0)}e.yepnope=f();e.yepnope.executeStack=o;e.yepnope.injectJs=i;e.yepnope.injectCss=s})(this,document);(function(e){e.addPrefix("css",function(e){e.forceCSS=!0;return e})})(this.yepnope);yepnope.addPrefix("less",function(e){e.forceCSS=!0;e.attrs={rel:"stylesheet",type:"text/less"};return e});(function(e,t,n){yepnope.injectCss=function(e,t,n,r,i,s){var o=document.createElement("link"),u=function(){if(!l){l=1;o.removeAttribute("id");setTimeout(t,0)}},a="yn"+ +(new Date),f,l,c;t=s?yepnope.executeStack:t||function(){};r=r||yepnope.errorTimeout;o.href=e;o.rel="stylesheet";o.type="text/css";o.id=a;for(c in n)o.setAttribute(c,n[c]);if(!i){f=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];f.parentNode.insertBefore(o,f);o.onload=u;function h(){try{var e=document.styleSheets;for(var t=0,n=e.length;t<n;t++)if(e[t].ownerNode.id==a&&e[t].cssRules.length)return u();throw new Error}catch(r){setTimeout(h,20)}}h()}}})(this,this.document);var $crt_script=document.getElementById("webplate-stack"),$crt_script_src=$crt_script.getAttribute("src").replace("webplate/stack.js",""),$root=$crt_script_src,$js_path=$root+"webplate/core/js/",$css_path=$root+"webplate/core/css/",$less_path=$root+"webplate/core/less/",$icomoon_path=$root+"webplate/project/icomoon/",$js_project_path=$root+"webplate/project/js/",$css_project_path=$root+"webplate/project/css/",$less_project_path=$root+"webplate/project/less/",$is_less=!1,$ar_project_js=[],$ar_core_css=[$css_path+"webplate.css",$icomoon_path+"style.css"],$ar_project_css=[];yepnope([{load:$js_path+"min/web-imports.min.js",complete:function(){$("body").wrapInner('<div class="webplate" />');$(".webplate").wrapInner('<div class="webplate-shifter" />');$(".webplate-shifter").wrapInner('<div class="webplate-content" />');$(".webplate-content").wrapInner('<div class="webplate-inner" />');$(".is-fixed").appendTo("body");$.web_navigation();$.web_window_type();$.web_forms();$.web_load_plugins($js_path)}},{load:$ar_core_css,complete:function(){$project_css=$("body").data("project-css");if($project_css&&$project_css.length>0){$split_project_css=$project_css.split(",");$.each($split_project_css,function(e,t){t=jQuery.trim(t);$extension=$.web_get_extension(t);if($extension=="css")$ar_project_css.push($css_project_path+t);else if($extension=="less"){$ar_project_css.push("less!"+$less_project_path+t);$ar_project_css.push($js_path+"min/web-less.min.js")}});yepnope({load:$ar_project_css,complete:function(){$("body").show();$.web_buttons()}})}else{$("body").show();$.web_buttons()}$project_js=$("body").data("project-js");if($project_js&&$project_js.length>0){$split_project_js=$project_js.split(",");$.each($split_project_js,function(e,t){t=jQuery.trim(t);$extension=$.web_get_extension(t);$extension=="js"&&$ar_project_js.push($js_project_path+t)});yepnope({load:$ar_project_js})}}}]);