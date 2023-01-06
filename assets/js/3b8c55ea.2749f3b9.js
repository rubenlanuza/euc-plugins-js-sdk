"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="Installation",i={unversionedId:"installation",id:"installation",title:"Installation",description:"Let's install the EUC plugins SDK in less than 5 minutes.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/euc-plugins-js-sdk/docs/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Configuration",permalink:"/euc-plugins-js-sdk/docs/configuration"}},s={},p=[{value:"Using a package manager",id:"using-a-package-manager",level:2},{value:"Or with yarn",id:"or-with-yarn",level:3},{value:"Using a Content Delivery Networks (CDN)",id:"using-a-content-delivery-networks-cdn",level:2},{value:"UNPKG",id:"unpkg",level:3},{value:"jsDelivr",id:"jsdelivr",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Let's install the ",(0,a.kt)("strong",{parentName:"p"},"EUC plugins SDK in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"using-a-package-manager"},"Using a package manager"),(0,a.kt)("p",null,"You may install the Wazo JavaScript Software Development Kit to your project one of the following ways:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @wazo/euc-plugins-sdk\n")),(0,a.kt)("h3",{id:"or-with-yarn"},"Or with yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @wazo/euc-plugins-sdk\n")),(0,a.kt)("p",null,"Then"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { app } from '@wazo/euc-plugins-sdk';\n")),(0,a.kt)("h2",{id:"using-a-content-delivery-networks-cdn"},"Using a Content Delivery Networks (CDN)"),(0,a.kt)("p",null,"Alternatively, you may load the Wazo SDK from a CDN. Use one of the following Content Delivery Networks:"),(0,a.kt)("h3",{id:"unpkg"},"UNPKG"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { app } from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/index.mjs';\n")),(0,a.kt)("h3",{id:"jsdelivr"},"jsDelivr"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { app } from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/index.mjs';\n")))}u.isMDXComponent=!0}}]);