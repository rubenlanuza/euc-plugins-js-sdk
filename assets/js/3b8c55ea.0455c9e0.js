"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={displayed_sidebar:"installSidebar"},i="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Let's install the Wazo EUC Plugins SDK in less than 5 minutes.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/euc-plugins-js-sdk/docs/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"installSidebar"},sidebar:"installSidebar"},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using a Package Manager",id:"using-a-package-manager",level:2},{value:"Using a Content Delivery Networks (CDN)",id:"using-a-content-delivery-networks-cdn",level:2},{value:"UNPKG",id:"unpkg",level:3},{value:"jsDelivr",id:"jsdelivr",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Let's install the ",(0,r.kt)("strong",{parentName:"p"},"Wazo EUC Plugins SDK in less than 5 minutes"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before starting, we suggest being familiar with the following subjects to ease your experience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HMTL & CSS"),(0,r.kt)("li",{parentName:"ul"},"JSON"),(0,r.kt)("li",{parentName:"ul"},"Javascript language",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"async"),"/",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await")))),(0,r.kt)("li",{parentName:"ul"},"Our ",(0,r.kt)("a",{parentName:"li",href:"https://developers.wazo.io/"},"Developers Center"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"New to web technologies?")," We suggest this guide: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},"Getting started with the web"),".")),(0,r.kt)("h2",{id:"using-a-package-manager"},"Using a Package Manager"),(0,r.kt)("p",null,"You can install our SDK with your favorite package manager in the following ways:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install @wazo/euc-plugins-sdk\n\n# YARN\nyarn add @wazo/euc-plugins-sdk\n")),(0,r.kt)("p",null,"Then import the SDK in any file of your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { App } from '@wazo/euc-plugins-sdk';\nconst app = new App();\n")),(0,r.kt)("h2",{id:"using-a-content-delivery-networks-cdn"},"Using a Content Delivery Networks (CDN)"),(0,r.kt)("p",null,"Alternatively, you can load the Wazo SDK from a CDN. Use one of the following Content Delivery Networks:"),(0,r.kt)("h3",{id:"unpkg"},"UNPKG"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { App } from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';\nimport softphone from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/softphone.js';\n\nconst app = new App();\n")),(0,r.kt)("h3",{id:"jsdelivr"},"jsDelivr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { App } from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';\nimport softphone from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/softphone.js';\n\nconst app = new App();\n")),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"\ud83c\udf89 Good job, you officially installed our SDK. The next step is to decide if you want to ",(0,r.kt)("a",{parentName:"p",href:"./plugins/introduction"},"build a plugin")," to extend our\nproducts or ",(0,r.kt)("a",{parentName:"p",href:"./softphone/introduction"},"integrate a softphone")," in an external system."),(0,r.kt)("p",null,"Enjoy!"))}c.isMDXComponent=!0}}]);