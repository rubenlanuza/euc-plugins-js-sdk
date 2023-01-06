"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:4,sidebar_label:"Mobile"},o="Customizing the Mobile application",l={unversionedId:"mobile",id:"mobile",title:"Customizing the Mobile application",description:"\u26a0\ufe0f This part is still in development process, changes may happen frequently.",source:"@site/docs/mobile.md",sourceDirName:".",slug:"/mobile",permalink:"/euc-plugins-js-sdk/docs/mobile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mobile.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Mobile"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/euc-plugins-js-sdk/docs/configuration"},next:{title:"Portal",permalink:"/euc-plugins-js-sdk/docs/portal"}},c={},s=[{value:"Adding tabs in the main page",id:"adding-tabs-in-the-main-page",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customizing-the-mobile-application"},"Customizing the Mobile application"),(0,i.kt)("p",null,"\u26a0\ufe0f This part is still in development process, changes may happen frequently."),(0,i.kt)("h2",{id:"adding-tabs-in-the-main-page"},"Adding tabs in the main page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(6914).Z,width:"1170",height:"2532"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(7841).Z,width:"1170",height:"2532"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "mobileIcon": "chatbox-ellipses-outline",\n    "context": [\n      "generalTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mobileIcon")," should be one of the ",(0,i.kt)("a",{parentName:"p",href:"https://ionic.io/ionicons"},"Ionic icons")," values (Android only)."),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk"},"SDK")," documentation to know how to inject custom code in the application."))}u.isMDXComponent=!0},6914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mobile-tab1-67694288488178ebbf83beadddc825ba.png"},7841:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mobile-tab2-a4f4e617c8b98b5ddb4ef65aa13edfc4.png"}}]);