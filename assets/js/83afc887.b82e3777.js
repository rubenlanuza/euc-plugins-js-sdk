"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||b[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={},r=void 0,l={unversionedId:"web-desktop-application",id:"web-desktop-application",title:"web-desktop-application",description:"---",source:"@site/docs/web-desktop-application.md",sourceDirName:".",slug:"/web-desktop-application",permalink:"/euc-plugins-js-sdk/docs/web-desktop-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-desktop-application.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sdk",permalink:"/euc-plugins-js-sdk/docs/sdk"}},s={},d=[{value:"sidebar_label: Web and Desktop",id:"sidebar_label-web-and-desktop",level:2},{value:"Adding tabs in the main page",id:"adding-tabs-in-the-main-page",level:2},{value:"Adding tabs in the sidebar",id:"adding-tabs-in-the-sidebar",level:2},{value:"Adding tabs for a contact",id:"adding-tabs-for-a-contact",level:2},{value:"Adding tabs in the phonebook",id:"adding-tabs-in-the-phonebook",level:2},{value:"Adding a background script",id:"adding-a-background-script",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"**---\nsidebar_position: 3"),(0,i.kt)("h2",{id:"sidebar_label-web-and-desktop"},"sidebar_label: Web and Desktop"),(0,i.kt)("h1",{id:"customizing-the-web-and-desktop-application"},"Customizing the Web and Desktop application"),(0,i.kt)("p",null,"\u26a0\ufe0f This part is still in development process, changes may happen frequently."),(0,i.kt)("h2",{id:"adding-tabs-in-the-main-page"},"Adding tabs in the main page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(2726).Z,width:"2682",height:"508"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n    {\n      "entityId": "my id",\n      "context": [\n        "generalTab"\n      ],\n      "name": "My label",\n      "contentUrl": "https://my-websit/content.html"\n    }\n  ],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-in-the-sidebar"},"Adding tabs in the sidebar"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(8531).Z,width:"736",height:"616"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebarTab")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "sidebarTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html",\n    "icon": "https://example.com/assets/icon.png"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-for-a-contact"},"Adding tabs for a contact"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(4745).Z,width:"2608",height:"494"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"contactTab")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "contactTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-in-the-phonebook"},"Adding tabs in the phonebook"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(2767).Z,width:"2968",height:"498"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"phonebookTab")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "phonebookTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-a-background-script"},"Adding a background script"),(0,i.kt)("p",null,"You can add custom code when the user is not using a custom tab. It can be useful to handle incoming calls, or other events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"backgroundScript": "https://my-website/background.js"\n')),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk"},"SDK")," documentation to know how to inject custom code in the application.**"))}c.isMDXComponent=!0},4745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wda-contact-c2b4df7235dcb29678d1d4e1e12930a2.png"},2767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wda-phonebook-e12d00b024e05d599b9e7bc6bed13602.png"},8531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wda-sidebar-5f5a425b6aaf4d8f30e71df7a6f3e669.png"},2726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wda-tab-example-d55eee014bf9115ab90c6709fde8b5f3.png"}}]);