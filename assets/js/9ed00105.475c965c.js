"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||r;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_position:2,sidebar_label:"Configuration"},a="Configuration your plugins with the Wazo Portal",l={unversionedId:"configuration",id:"configuration",title:"Configuration your plugins with the Wazo Portal",description:"\u26a0\ufe0f This part is still in development process, changes may happen frequently.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/euc-plugins-js-sdk/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/euc-plugins-js-sdk/docs/installation"},next:{title:"Web and Desktop",permalink:"/euc-plugins-js-sdk/docs/web-desktop-application"}},p={},s=[{value:"Manifest file",id:"manifest-file",level:2},{value:"Example of a Manifest file",id:"example-of-a-manifest-file",level:3},{value:"Configuring the manifest URL in Portal",id:"configuring-the-manifest-url-in-portal",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-your-plugins-with-the-wazo-portal"},"Configuration your plugins with the Wazo Portal"),(0,o.kt)("p",null,"\u26a0\ufe0f This part is still in development process, changes may happen frequently."),(0,o.kt)("h2",{id:"manifest-file"},"Manifest file"),(0,o.kt)("p",null,"Using one or multiple manifest file you can customize all the Wazo EUC application."),(0,o.kt)("h3",{id:"example-of-a-manifest-file"},"Example of a Manifest file"),(0,o.kt)("p",null,"You must provide the following information in a manifest file (json format) that will be hosted in your environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "manifestVersion": "0.1",\n  "version": "1.0.0",\n  "id": "my-application-id",\n  "packageName": "com.acme.myapp",\n  "developer": {\n    "name": "My Name",\n    "websiteUrl": "https://website.com/",\n    "privacyUrl": "https://website.com/privacy",\n    "mpnId": "1234567890"\n  },\n  "name": {\n    "short": "App Name",\n    "full": "Full app name"\n  },\n  "description": {\n    "short": "Short description of your app (<= 80 chars)",\n    "full": "Full description of your app (<= 4000 chars)"\n  },\n  "icons": {\n    "outline": "https://fr.m.wikipedia.org/wiki/Fichier:Cat_%28113020%29_-_The_Noun_Project.svg",\n    "color": "https://fr.m.wikipedia.org/wiki/Fichier:Cat_%28113020%29_-_The_Noun_Project.svg"\n  },\n  "staticTabs": [\n    {\n      "entityId": "sms",\n      "context": [\n        "generalTab",\n        "userTab",\n        "phonebookTab"\n      ],\n      "name": "SMS",\n      "contentUrl": "https://my-websit/sms.html"\n    }\n  ],\n  "backgroundScript": "https://my-website/background.js"\n}\n')),(0,o.kt)("h3",{id:"configuring-the-manifest-url-in-portal"},"Configuring the manifest URL in Portal"),(0,o.kt)("p",null,"When connected to your stack in portal go to ",(0,o.kt)("strong",{parentName:"p"},"Settings > Applications > App Configuration"),"."),(0,o.kt)("p",null,"If no application is configured, create a new configuration for your application."),(0,o.kt)("p",null,"In the ",(0,o.kt)("em",{parentName:"p"},"Advanced")," section, add a new key with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest_urls"),"  and value the value of your manifest file(s) URL(s), like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App configuration",src:n(11744).Z,width:"2895",height:"1062"})),(0,o.kt)("p",null,"Now you're all set you can choose to customize the ",(0,o.kt)("a",{parentName:"p",href:"/docs/web-desktop-application"},"Web and Desktop application"),", the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mobile"},"Mobile Application")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/portal"},"Portal")))}u.isMDXComponent=!0},11744:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/app-config-portal-bf2a4d2cc8d405ffaac70f10f5ef9a1c.png"}}]);