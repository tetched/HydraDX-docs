(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(95)),c=n(96),i={id:"polkadotjs_apps_local",title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 HydraDX"},p={unversionedId:"polkadotjs_apps_local",id:"polkadotjs_apps_local",isDocsHomePage:!1,title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 HydraDX",description:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Polkadot/apps \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 HydraDX. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u043e\u0440\u0442\u0443 9944, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u0431-\u0441\u043e\u043a\u0435\u0442\u044b RPC.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/polkadotjs_apps_local.md",slug:"/polkadotjs_apps_local",permalink:"/ru/polkadotjs_apps_local",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_local.md",version:"current",sidebar:"sidebar",previous:{title:"Request a Treasury Tip",permalink:"/ru/tip_request"},next:{title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043d\u043e\u0434\u0435",permalink:"/ru/polkadotjs_apps_public"}},l=[{value:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Polkadot/apps",id:"accessing-your-local-node-using-polkadotapps",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Polkadot/apps \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 HydraDX. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u043e\u0440\u0442\u0443 ",Object(o.b)("inlineCode",{parentName:"p"},"9944"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u0431-\u0441\u043e\u043a\u0435\u0442\u044b RPC."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u0443\u0437\u0435\u043b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430, \u043c\u044b \u043d\u0430\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0432\u0430\u043c \u0437\u0430\u043d\u0435\u0441\u0442\u0438 \u0432 \u0447\u0435\u0440\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0440\u0442 ",Object(o.b)("inlineCode",{parentName:"p"},"9944")," \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439. \u042d\u0442\u043e\u0442 \u043f\u043e\u0440\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0442\u0440\u0435\u0442\u044c\u0438\u043c\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u0434\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0437\u043b\u0430, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0440\u0435\u0437\u043a\u043e\u043c\u0443 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044e \u0438 \u043d\u0435\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0439 \u043f\u043e\u0442\u0435\u0440\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432. \u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0440\u0442 ",Object(o.b)("inlineCode",{parentName:"p"},"9944")," \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0443\u0437\u043b\u0443 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u0443\u0437\u0435\u043b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0432\u0430\u0448\u0435\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438."))),Object(o.b)("h3",{id:"accessing-your-local-node-using-polkadotapps"},"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Polkadot/apps"),Object(o.b)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0432\u043e\u0435\u043c\u0443 \u0443\u0437\u043b\u0443, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 ",Object(o.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," \u0438 \u0449\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043b\u0435\u0432\u043e\u043c \u0443\u0433\u043b\u0443, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0435\u0442\u044c."),Object(o.b)("div",null,Object(o.b)("img",{src:Object(c.a)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),Object(o.b)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u0435\u043d\u044e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",Object(o.b)("strong",{parentName:"p"},"Development")," \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",Object(o.b)("strong",{parentName:"p"},"Local node"),"."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(c.a)("/polkadotjs-apps/local-1.png")})),Object(o.b)("p",null,"\u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 IP-\u0430\u0434\u0440\u0435\u0441 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Switch")),", \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0437\u0435\u043b."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(c.a)("/polkadotjs-apps/local-2.png")})),Object(o.b)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043a \u0441\u0432\u043e\u0435\u043c\u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 \u0438 \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u043d\u0438\u043c."))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(16),a=n(97);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,i=void 0!==c&&c,p=o.absolute,l=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},97:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);