function loadCSS(e,t,n,r){"use strict";function u(){var t;for(var r=0;r<o.length;r++){if(o[r].href&&o[r].href.indexOf(e)>-1){t=true}}if(t){i.media=n||"all"}else{setTimeout(u)}}var i=window.document.createElement("link");var s=t||window.document.getElementsByTagName("script")[0];var o=window.document.styleSheets;i.rel="stylesheet";i.href=e;i.media="only x";i.onload=r||function(){};s.parentNode.insertBefore(i,s);u();return i};
var supportsWoff2=function(t){if(!("FontFace"in t))return!1;var a=new t.FontFace("t",'url("data:application/font-woff2,") format("woff2")',{});return a.load()["catch"](function(){}),"loading"==a.status}(this);