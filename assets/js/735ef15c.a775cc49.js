"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[0],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_position:5,sidebar_label:"Portal"},l="Customizing the Portal (coming soon)",r={unversionedId:"portal",id:"portal",title:"Customizing the Portal (coming soon)",description:"\u26a0\ufe0f This part is still in development process, the customization is not available for now.",source:"@site/docs/portal.md",sourceDirName:".",slug:"/portal",permalink:"/euc-plugins-js-sdk/docs/portal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Portal"},sidebar:"tutorialSidebar",previous:{title:"Mobile",permalink:"/euc-plugins-js-sdk/docs/mobile"},next:{title:"Softphone",permalink:"/euc-plugins-js-sdk/docs/softphone"}},s={},p=[{value:"Adding tabs in the main page",id:"adding-tabs-in-the-main-page",level:2},{value:"Adding tabs in the main page of the PBX section",id:"adding-tabs-in-the-main-page-of-the-pbx-section",level:2},{value:"Adding tabs in a form",id:"adding-tabs-in-a-form",level:2},{value:"Adding page in an existing menu of the PBX section",id:"adding-page-in-an-existing-menu-of-the-pbx-section",level:2},{value:"Adding you onw menu to display custom page",id:"adding-you-onw-menu-to-display-custom-page",level:2},{value:"Adding you onw section in the global settings page",id:"adding-you-onw-section-in-the-global-settings-page",level:2},{value:"Adding a background script",id:"adding-a-background-script",level:2}],c={toc:p};function d(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customizing-the-portal-coming-soon"},"Customizing the Portal (coming soon)"),(0,i.kt)("p",null,"\u26a0\ufe0f This part is still in development process, the customization is not available for now."),(0,i.kt)("h2",{id:"adding-tabs-in-the-main-page"},"Adding tabs in the main page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration (small)",src:t(7611).Z,width:"1318",height:"558"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "generalTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-in-the-main-page-of-the-pbx-section"},"Adding tabs in the main page of the PBX section"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration (small",src:t(6615).Z,width:"1644",height:"566"})),(0,i.kt)("p",null,"To create a new tab in the PBX main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalPbxTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "generalPbxTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-in-a-form"},"Adding tabs in a form"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:t(8903).Z,width:"2838",height:"1118"})),(0,i.kt)("p",null,"To create a new tab in the PBX main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"pbx.*")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "pbx.users"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," key can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"pbx.*")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," is : ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lines"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"devices"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ring-groups"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"voicemails"),", ..."),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-page-in-an-existing-menu-of-the-pbx-section"},"Adding page in an existing menu of the PBX section"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration (small",src:t(8462).Z,width:"1642",height:"910"})),(0,i.kt)("p",null,"To create a new page the PBX menu, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"pbxMenu")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "pbxMenu"\n    ],\n    "name": "My label",\n    "parent": "common.layout.pbxMenu.userManagement",\n    "contentUrl": "https://my-website.com/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," key can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"common.layout.pbxMenu.*")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," is : ",(0,i.kt)("inlineCode",{parentName:"p"},"globalSettings"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"userManagement"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"callManagement"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"callCenter"),",",(0,i.kt)("inlineCode",{parentName:"p"},"reporting"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"soundsAndGreetings"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"settings"),"."),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-you-onw-menu-to-display-custom-page"},"Adding you onw menu to display custom page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration (small",src:t(7869).Z,width:"1016",height:"1558"})),(0,i.kt)("p",null,"To create a new menu in the PBX section, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"pbxMenu")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "custom-child",\n    "context": [\n      "pbxMenu"\n    ],\n    "name": "New child",\n    "parent": "New menu",\n    "parentIcon": "AccountBalance",\n    "contentUrl": "http://example.com/stats-stack.html"\n  },\n  {\n    "entityId": "custom-child2",\n    "context": [\n      "pbxMenu"\n    ],\n    "name": "New child 2",\n    "parent": "New menu",\n    "parentIcon": "AccountBalance",\n    "contentUrl": "http://example.com/stats-stack.html"\n  },\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-you-onw-section-in-the-global-settings-page"},"Adding you onw section in the global settings page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration (small",src:t(364).Z,width:"2844",height:"1648"})),(0,i.kt)("p",null,"To create a new menu in the PBX section, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"globalSettings")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "global-settings",\n    "context": [\n      "globalSettings"\n    ],\n    "name": "Custom global",\n    "icon": "BrightnessHigh",\n    "contentUrl": "http://localhost:3002/portal/global.html"\n  }\n],\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," should be in the ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/material-icons/"},"Material UI icon")," list."),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-a-background-script"},"Adding a background script"),(0,i.kt)("p",null,"You can add custom code when the user is not using a custom tab. It can be useful to handle custom events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "backgroundScript": "https://my-website/background.js"\n')),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk"},"SDK")," documentation to know how to inject custom code in the application."))}d.isMDXComponent=!0},8462:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/portal-existing-menu-6e30886f62471de5a2c77cae8cecafd9.png"},7611:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/portal-home-tab-e5a13bba7119e25bbc123a8a7012b668.png"},8903:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/portal-pbx-form-a382528a169716974cc47c625e644562.png"},364:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/portal-pbx-global-settings-93827211728ff5be45cff35b300ba22d.png"},6615:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/portal-pbx-home-tab-2332b02d66b9889b39a55b7cedf6a7e9.png"},7869:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/portal-pbx-own-menu-adec3bc7259ff621cdee26b4280ffb2e.png"}}]);