!function(){var d=window,v=window.TapfiliateObject||"tap",r=d[v]&&d[v].q||[];if(!d[v]||!d[v].loaded){d[v]=function(t,n,e,o,i,r){var a=d[v][t];if("function"!=typeof a)throw'Function "'+t+'" not supported';a(n,e,o,i,r)},d[v].q=r,d[v].loaded=!0,d[v].baseUrl="https://frstre.com",d[v].baseUrlDepr="https://tapi.tapfiliate.com";var n,h;d[v].Tracking=d[v].Tracking||{},d[v].options=d[v].options||{};var m={},a=!1,s=function(t){var n,e,o,i,r;if(e=[],r=/%20/g,o=function(t,n){n="function"==typeof n?n():null===n?"":n,e[e.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)},t instanceof Array)for(i in t)o(i,t[i]);else for(n in t)f(n,t[n],o);return e.join("&").replace(r,"+")},l=new function(){var s={},l=0,u=[],c=[],p=!1,o=this;return this.addMethod=function(t){if(t.supported())return l++,s[t.key]=t,this},this.init=function(){var t=l;function n(){--t<=0&&(p=!0,function(){for(var t=u.length-1;0<=t;t--)o.read.apply(o,u[t]);for(var n=c.length-1;0<=n;n--)o.write.apply(o,c[n])}())}for(var e in s)"function"==typeof s[e].init?s[e].init(n):n()},this.read=function(t,n,o){if(p){var i=l,r=[],a={};for(var e in s){a[e]=setTimeout(c,2e3);try{s[e].read(t,c)}catch(t){}}}else u.push(arguments);function c(t,n,e){clearTimeout(a[e]),n&&n.constructor===Array?r=r.concat(n):r.push(n),0==--i&&o(null,r)}},this.write=function(t,n,e,o){p||c.push(arguments);var i=l;function r(t,n){0==--i&&"function"==typeof o&&o()}for(var a in s)s[a].write(t,n,e,r)},this.hasMethod=function(t){return void 0!==s[t]},this};t.prototype.supported=function(){return!0};var i=new t("1pCookie");i.read=function(t,n){for(var e=t+"=",o=document.cookie.split(";"),i=[],r=0;r<o.length;r++){var a=o[r].replace(/^\s+|\s+$/g,"");0===a.indexOf(e)&&i.push(a.substring(e.length,a.length))}return"function"==typeof n?n(null,i,this.key):i},i.write=function(t,n,e,o){e=e||{};var i=new Date;i.setTime(i.getTime()+31536e6);var r,a="expires="+i.toGMTString();if(e.cookie_domain)r="."+e.cookie_domain;else try{var c=window.location.href.match(/(?:https?:\/\/)?(?:www\.)?(.*?)\//);r="."+c[c.length-1]}catch(t){}var s=t+"="+n+"; "+a+"; path=/";s+=void 0!==r?"; domain="+r:"",document.cookie=s,o()};var c=new t("localStorage");c.supported=function(){return"undefined"!=typeof localStorage},c.read=function(t,n){n(null,localStorage.getItem(t),this.key)},c.write=function(t,n,e,o){o(null,localStorage.setItem(t,n))},(_.prototype=new t).supported=function(){return"undefined"!=typeof postMessage},_.prototype.handleEvent=function(t){if(t.origin===this.options.url){var n;try{n=JSON.parse(t.data)}catch(t){}n&&n.callback&&this.callbacks[n.callback](n.value)}},_.prototype.init=function(t){var n=document.createElement("IFRAME");n.setAttribute("src",this.options.url+"/?"+this.options.beaconVersion),n.style.width="1px",n.style.height="1px",n.style.display="none",p(window,"message",this);var e=this;p(n,"load",function(){e.beacon=n.contentWindow,t()}),setTimeout(function(){document.body.appendChild(n)},0)},_.prototype.post=function(t){this.beacon.postMessage(t,this.options.url)},_.prototype.read=function(t,n){var e=this;this.callbacks.get=function(t){n(null,t,e.key)};var o={action:"getAll",key:t};this.post(JSON.stringify(o))},_.prototype.write=function(t,n,e,o){this.callbacks.set=function(t){o(null,t)};var i={action:"set",key:t,value:n};this.post(JSON.stringify(i))},d[v].Create=d[v].Create||{},d[v].Create.calls=d[v].Create.calls||[],d[v].Click=d[v].Click||{},d[v].Click.q=d[v].Click.q||[],d[v].Click.calls=d[v].Click.calls||[],d[v].Click.track=function(t,n,e,o){if(window.self===window.top){var i,r,a,c,s;if(null===(e=e||{}).referral_code_param&&void 0===e.referral_code||(i=e.referral_code,r=e.referral_code_param,s=r,a=(c=i)||0===c?c:(s=s||"ref",y()[s])),d[v].Click.calls.push(e),!(t&&n||a))return q("No tracking parameters",e,o);var l=y(),u=null;for(var p in l)"tm_"===p.slice(0,3)&&((u=u||{})[p.slice(3,p.length)]=l[p]);var f={data:{acc:h,aid:t,sid:n,callback:o,options:e,pm:u,ref:document.referrer||null,cup:document.location.href||null,int:m.integration||null}};a&&(f.data.refc=a),d[v].Click.q.push(f),g()}},d[v].Click.flushQueue=function(){d[v].Click.q.reverse();for(var t=d[v].Click.q.length-1;0<=t;t--){var i=d[v].Click.q[t].data,n=w();if(i.aid&&i.sid||i.refc){var e={acc:i.acc,aid:i.aid,sid:i.sid,pm:i.pm,ref:i.ref,cup:i.cup,refc:i.refc,int:i.int};n&&l.hasMethod("3pCookie")&&(e.vids=n),k(d[v].baseUrl+"/event/",e,null,function(t,n){var e=t.response||t.responseText;if(n&&e){var o=JSON.parse(e);if(o.vid)return l.write("tap_vid",o.vid,i.options),b([o.vid]),void("function"==typeof i.callback&&(1==i.options.always_callback?i.callback(null,o):i.callback(o)))}return q("Tracking request failed",i.options,i.callback)})}d[v].Click.q.splice(t,1)}},d[v].Conversion=d[v].Conversion||{},d[v].Conversion.q=d[v].Conversion.q||[],d[v].Conversion.calls=d[v].Conversion.calls||[],d[v].Conversion.flushQueue=function(){d[v].Conversion.q.reverse();for(var t=d[v].Conversion.q.length-1;0<=t;t--){var o=d[v].Conversion.q[t].data,n=d[v].Conversion.q[t].type,e=void 0!==d[v].Conversion.q[t].vid?d[v].Conversion.q[t].vid:w();if(!(o.acc&&e||o.options.attribution_id||o.options.coupons&&o.options.coupons.length||o.options.customer_id))return q("Non-tracked visitor",o.options,o.callback);var i,r=d[v].baseUrlDepr+"/conversions/";if("single"==n)i={acc:o.acc,vid:e,tid:o.tid,tam:o.tam,options:o.options,ct:o.ct,int:o.int};else{if("multi"!=n)return q("Missing request type",o.options,o.callback);i={acc:o.acc,vid:e,tid:o.tid,options:o.options,com:o.com,int:o.int}}k(r,i,"POST",function(t,n){if(!n)return q("Conversion denied",o.options,o.callback);var e;try{e=JSON.parse(t.response)}catch(t){return q("Conversion denied",o.options,o.callback)}"function"==typeof o.callback&&(1==o.options.always_callback?o.callback(null,e):o.callback(e,"success"))}),e&&e.length&&d[v].Conversion.q.splice(t,1)}},d[v].Customer=d[v].Customer||{},d[v].Customer.q=d[v].Customer.q||[],d[v].Customer.calls=d[v].Customer.calls||[],d[v].Customer.flushQueue=function(){d[v].Customer.q.reverse();for(var t=d[v].Customer.q.length-1;0<=t;t--){var o=d[v].Customer.q[t].data,n=void 0!==d[v].Customer.q[t].vid?d[v].Customer.q[t].vid:w();if(!(o.acc&&n||o.options.coupons&&o.options.coupons.length))return q("Non-tracked visitor",o.options,o.callback);k(d[v].baseUrlDepr+"/customers/",{acc:o.acc,vid:n,tid:o.tid,options:o.options,sta:o.sta},"POST",function(t,n){if(!n)return q("Customer denied",o.options,o.callback);var e;try{e=JSON.parse(t.response)}catch(t){return q("Customer denied",o.options,o.callback)}"function"==typeof o.callback&&(1==o.options.always_callback?o.callback(null,e):o.callback(e,"success"))}),n&&n.length&&d[v].Customer.q.splice(t,1)}},d[v].create=function(t,n,e){var o;h=t,m=function(){for(var t={},n=0;n<arguments.length;n+=1)for(var e=arguments[n],o=Object.keys(e),i=0;i<o.length;i+=1)t[o[i]]=e[o[i]];return t}(m,n||{}),o=m,l.hasMethod("1pcookie")||l.addMethod(i),l.hasMethod("localStorage")||l.addMethod(c),o.include_methods&&-1<o.include_methods.indexOf("3p")&&!l.hasMethod("3pCookie")&&l.addMethod(new _("3pCookie",{url:"https://b.frstre.com",beaconVersion:"v1.4"})),l.init(),l.read("tap_vid",{},function(t,n){b(n),g(),"function"==typeof e&&e()}),d[v].Create.calls.push({accountId:t,options:n})},d[v].detect=function(t,n){t=t||{},this.urlParams=y();var e=this.urlParams[t.asset_param||"tap_a"],o=this.urlParams[t.source_param||"tap_s"];d[v].Click.track(e,o,t,n)},d[v].click=function(t,n,e){var o=t||{};n=n||{};var i=o.tap_a||o.asset_id,r=o.tap_s||o.source_id;void 0!==o.referral_code&&(n.referral_code=o.referral_code),d[v].Click.track(i,r,n,e)},d[v].conversion=function(t,n,e,o,i){if(window.self===window.top){var r={type:"single",data:{acc:h,tid:t=t||null,tam:n=void 0!==n?n:null,options:e=e||{},ct:o,callback:i,int:m.integration||null}};d[v].Conversion.q.push(r),g(),d[v].Conversion.calls.push({type:"single",tid:t,tam:n,options:e,ct:o})}};var o=function(t,n,e,o){if(window.self===window.top){var i={data:{acc:h,tid:t=t||null,sta:o,options:n=n||{},callback:e,int:m.integration||null}};d[v].Customer.q.push(i),g(),d[v].Customer.calls.push({tid:t,options:n})}};d[v].customer=function(t,n,e){o(t,n,e,"customer")},d[v].trial=function(t,n,e){o(t,n,e,"trial")},d[v].lead=function(t,n,e){o(t,n,e,"lead")},d[v].transactionMulti=function(t,n,e,o){d[v].conversionMulti(t,n,e,o)},d[v].conversionMulti=function(t,n,e,o){var i={type:"multi",data:{acc:h,tid:t,com:e,options:n=n||{},callback:o,int:m.integration||null}};d[v].Conversion.q.push(i),g(),d[v].Conversion.calls.push({type:"multi",tid:t,options:n,com:e})},d[v].getTrackingId=function(o,i){if(l.hasMethod("3pCookie"))throw"getTrackingId not supported with 3rd party cookies enabled";o=o||{};var r=0;!function e(){setTimeout(function(){if(r++,!C())return e();if(!(200<r)){var t=w(),n=null;t&&(n=t.join("__")),"function"==typeof i&&(1==o.always_callback?i(null,n):i(n))}},100)}()},d[v].detectClick=function(t){d[v].detect({referral_code_param:null},t)},d[v].transaction=function(t,n,e,o,i){d[v].conversion(t,n,e,o,i)};try{a=y().tap_test||i.read("tap_debug").length}catch(t){a=!1}var u=function(){i.write("tap_debug","true",{},function(){});var t=document.createElement("script");t.setAttribute("src","https://script.tapfiliate.com/tapfiliate-debug.js"),t.setAttribute("async",!0),document.body.appendChild(t)};!function(){if(a){var t=!1;function n(){!t&&-1<["interactive","complete"].indexOf(document.readyState)&&(t=!0,u())}return document.addEventListener("readystatechange",n),window.addEventListener("load",n),n()}var e;r.reverse();for(var o=r.length-1;0<=o;o--){var i=r[o][0];"create"===i&&e||(d[v].apply(window,r[o]),r.splice(o,1),"create"===i&&(e=!0))}}()}function p(t,n,e){t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent&&t.attachEvent("on"+n,e)}function f(t,n,e){var o,i,r,a;if(a=/\[\]$/,n instanceof Array)for(i=0,r=n.length;i<r;i++)a.test(t)?e(t,n[i]):f(t+"["+("object"==typeof n[i]?i:"")+"]",n[i],e);else if("object"==typeof n)for(o in n)f(t+"["+o+"]",n[o],e);else e(t,n)}function k(t,n,e,o){(n=function(t){for(var n in t)void 0===t[n]&&delete t[n];return t}(n)).sv="tap-v3"+(l.hasMethod("3pCookie")?"-3p":"");var i=t+"?"+s(n),r="GET"===(e=e||(2083<i.length?"POST":"GET"))?i:t;n="POST"===e?JSON.stringify(n):null;var a=new XMLHttpRequest;if("withCredentials"in a)a.open(e,r,!0);else{if("undefined"==typeof XDomainRequest)return;var c=function(){};(a=new XDomainRequest).onerror=c,a.ontimeout=c,a.onprogress=c,a.onload=function(){"function"==typeof o&&o(a,!0)},a.timeout=9e3,a.open(e,r)}a.onreadystatechange=function(){if(a.readyState<4)return;if(200!==a.status)return void("function"==typeof o&&o(a,!1));4===a.readyState&&"function"==typeof o&&o(a,!0)},a.send(n)}function y(){var t={},n=function(t){return decodeURIComponent(t.replace(/\+/g," "))},e=location.search.substring(1),o=location.hash.substring(1),i=e.split("&");for(var r in i=i.concat(o.split("&")))if(i.hasOwnProperty(r)){var a=i[r].toString().split("=");1<a.length&&(t[n(a[0])]=n(a[1]))}return t}function C(){return n}function g(){C()&&!a&&(d[v].Click.flushQueue(),d[v].Conversion.flushQueue(),d[v].Customer.flushQueue())}function b(t){d[v].vid=t.sort()[0],d[v].vids=t,n=!0}function w(){if(d[v].vids){for(var t=[],n=d[v].vids.length-1;0<=n;n--){var e=d[v].vids[n];e&&-1===t.indexOf(e)&&t.push(e)}if(t.length)return t}}function t(t,n){return this.key=t,this.options=n||{},this.setOption=function(t,n){this.options[t]=n},this}function _(){return this.constructor.apply(this,arguments),this.callbacks={},this}function q(t,n,e){if("function"==typeof e)return 1==n.always_callback?e(t):!0===n.alwaysFireCb?e(null,"error",t):void 0}}()