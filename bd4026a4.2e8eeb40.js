/*! For license information please see bd4026a4.2e8eeb40.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=f(r),d=n,y=p["".concat(i,".").concat(d)]||p[d]||s[d]||a;return r?o.a.createElement(y,c(c({ref:t},l),{},{components:r})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";e.exports=r(115)},115:function(e,t,r){"use strict";var n=r(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=w.prototype;var k=j.prototype=new O;k.constructor=j,n(k,w.prototype),k.isPureReactComponent=!0;var P={current:null},S=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:P.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g,A=[];function R(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function $(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return r(n,e,""===t?"."+T(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+T(o=e[u],u);c+=$(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)c+=$(o=o.value,l=t+T(o,u++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function N(e,t,r){return null==e?0:$(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(x,"$&/")+"/"),N(e,M,t=R(t,a,n,o)),I(t)}var q={current:null};function F(){var e=q.current;if(null===e)throw Error(m(321));return e}var H={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;N(e,D,t=R(null,null,t,r)),I(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(m(143));return e}},t.Component=w,t.Fragment=c,t.Profiler=l,t.PureComponent=j,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=P.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)S.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return F().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,r){return F().useReducer(e,t,r)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},116:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=i(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(u[f]=r[f]);if(n){c=n(r);for(var p=0;p<c.length;p++)a.call(r,c[p])&&(u[c[p]]=r[c[p]])}}return u}},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(2),o=r(6),a=(r(114),r(113)),i={id:"integrating-with-an-api-backend",title:"Integrating with an API Backend",sidebar_label:"Integrating with an API"},c={unversionedId:"integrating-with-an-api-backend",id:"integrating-with-an-api-backend",isDocsHomePage:!1,title:"Integrating with an API Backend",description:"These tutorials will help you to integrate your app with an API backend running on another port,",source:"@site/../docs/integrating-with-an-api-backend.md",slug:"/integrating-with-an-api-backend",permalink:"/docs/integrating-with-an-api-backend",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/integrating-with-an-api-backend.md",version:"current",lastUpdatedBy:"Kanitkorn Sujautra",lastUpdatedAt:1582154047,sidebar_label:"Integrating with an API",sidebar:"docs",previous:{title:"Fetching Data with AJAX Requests",permalink:"/docs/fetching-data-with-ajax-requests"},next:{title:"Title and Meta Tags",permalink:"/docs/title-and-meta-tags"}},u=[{value:"Node",id:"node",children:[]},{value:"Ruby on Rails",id:"ruby-on-rails",children:[]},{value:"API Platform (PHP and Symfony)",id:"api-platform-php-and-symfony",children:[]},{value:"C# (ASP.NET Core)",id:"c-aspnet-core",children:[]}],l={rightToc:u};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"These tutorials will help you to integrate your app with an API backend running on another port,\nusing ",Object(a.b)("inlineCode",{parentName:"p"},"fetch()")," to access it."),Object(a.b)("h2",{id:"node"},"Node"),Object(a.b)("p",null,"Check out ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/"}),"this tutorial"),".\nYou can find the companion GitHub repository ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fullstackreact/food-lookup-demo"}),"here"),"."),Object(a.b)("h2",{id:"ruby-on-rails"},"Ruby on Rails"),Object(a.b)("p",null,"Check out ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/"}),"this tutorial"),".\nYou can find the companion GitHub repository ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fullstackreact/food-lookup-demo-rails"}),"here"),"."),Object(a.b)("h2",{id:"api-platform-php-and-symfony"},"API Platform (PHP and Symfony)"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-platform.com"}),"API Platform")," is a framework designed to build API-driven projects.\nIt allows creating hypermedia and GraphQL APIs in minutes.\nIt is shipped with an official Progressive Web App generator as well as a dynamic administration interface, both built for Create React App.\nCheck out ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-platform.com/docs/distribution"}),"this tutorial"),"."),Object(a.b)("h2",{id:"c-aspnet-core"},"C# (ASP.NET Core)"),Object(a.b)("p",null,"ASP.NET Core has a React project template that uses Create React App. Check out ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react"}),"their documentation"),"."))}f.isMDXComponent=!0}}]);