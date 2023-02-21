"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[868],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>b});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=d(n),m=i,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(b,o(o({ref:e},s),{},{components:n})):a.createElement(b,o({ref:e},s))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25987:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:3,sidebar_label:"Web and Desktop"},o="Customizing the Web and Desktop application",l={unversionedId:"web-desktop-application",id:"web-desktop-application",title:"Customizing the Web and Desktop application",description:"This part is still in development, changes may occur frequently.",source:"@site/docs/web-desktop-application.md",sourceDirName:".",slug:"/web-desktop-application",permalink:"/euc-plugins-js-sdk/docs/web-desktop-application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-desktop-application.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Web and Desktop"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/euc-plugins-js-sdk/docs/configuration"},next:{title:"Mobile",permalink:"/euc-plugins-js-sdk/docs/mobile"}},p={},d=[{value:"Adding tabs in the main page",id:"adding-tabs-in-the-main-page",level:2},{value:"Adding tabs in the sidebar",id:"adding-tabs-in-the-sidebar",level:2},{value:"Adding tabs for a contact",id:"adding-tabs-for-a-contact",level:2},{value:"Adding tabs in the phonebook",id:"adding-tabs-in-the-phonebook",level:2},{value:"Adding tabs in the setting menu",id:"adding-tabs-in-the-setting-menu",level:2},{value:"Adding a background script",id:"adding-a-background-script",level:2}],s={toc:d};function c(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customizing-the-web-and-desktop-application"},"Customizing the Web and Desktop application"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This part is still in development, changes may occur frequently.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," files should be served using a CORS-enabled http server.")),(0,i.kt)("h2",{id:"adding-tabs-in-the-main-page"},"Adding tabs in the main page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(32726).Z,width:"2682",height:"508"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "generalTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-in-the-sidebar"},"Adding tabs in the sidebar"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration (small)",src:n(98531).Z,width:"736",height:"616"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebarTab")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "sidebarTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html",\n    "icon": "https://example.com/assets/icon.svg"\n  }\n],\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," should be a white ",(0,i.kt)("inlineCode",{parentName:"p"},"svg")," file for better results."),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-for-a-contact"},"Adding tabs for a contact"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(94745).Z,width:"2608",height:"494"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"contactTab")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "contactTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-in-the-phonebook"},"Adding tabs in the phonebook"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(2767).Z,width:"2968",height:"498"})),(0,i.kt)("p",null,"To create a new tab in the main screen, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"phonebookTab")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "my id",\n    "context": [\n      "phonebookTab"\n    ],\n    "name": "My label",\n    "contentUrl": "https://my-websit/content.html"\n  }\n],\n')),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-tabs-in-the-setting-menu"},"Adding tabs in the setting menu"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App configuration",src:n(28805).Z,width:"734",height:"672"})),(0,i.kt)("p",null,"To create a new tab in the settings menu, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"settingsTab")," in your manifest with a ",(0,i.kt)("inlineCode",{parentName:"p"},"generalTab")," ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "settings-tab",\n    "context": [\n      "settingsTab"\n    ],\n    "position": 101,\n    "name": "My settings",\n    "contentUrl": "./tab.html",\n    "icon": "./tab.svg"\n  }\n]\n')),(0,i.kt)("p",null,"You can define the menu item's position using the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," attributes. Existing positions in the application are :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Position"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"100"),(0,i.kt)("td",{parentName:"tr",align:null},"Media Settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},"Notifications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"300"),(0,i.kt)("td",{parentName:"tr",align:null},"Call Forwarding")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"Integrations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"500"),(0,i.kt)("td",{parentName:"tr",align:null},"Connection")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"600"),(0,i.kt)("td",{parentName:"tr",align:null},"Language")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"700"),(0,i.kt)("td",{parentName:"tr",align:null},"Country")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"800"),(0,i.kt)("td",{parentName:"tr",align:null},"Shortcuts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"900:"),(0,i.kt)("td",{parentName:"tr",align:null},"Switchboard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"Divider")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1100"),(0,i.kt)("td",{parentName:"tr",align:null},"Update App")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1200"),(0,i.kt)("td",{parentName:"tr",align:null},"About")))),(0,i.kt)("p",null,"Your menu will be ordered depending on the ",(0,i.kt)("inlineCode",{parentName:"p"},"position")," value."),(0,i.kt)("p",null,"When the user clicks on the tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentUrl")," will be loaded."),(0,i.kt)("h2",{id:"adding-a-background-script"},"Adding a background script"),(0,i.kt)("p",null,"You can add custom code when the user is not using a custom tab. It can be useful to handle incoming calls, or other events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"backgroundScript": "https://my-website/background.js"\n')),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/sdk"},"SDK")," documentation to know how to inject custom code in the application.**"),(0,i.kt)("p",null,"The background script is always running, even when the user is logged out. Please make sure to remove all related background tasks when the ",(0,i.kt)("inlineCode",{parentName:"p"},"onLogout")," listener event is fired."))}c.isMDXComponent=!0},94745:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wda-contact-c2b4df7235dcb29678d1d4e1e12930a2.png"},2767:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wda-phonebook-e12d00b024e05d599b9e7bc6bed13602.png"},28805:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wda-settings-menu-844ea391b92c9c75ef06f0532d08525b.png"},98531:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wda-sidebar-5f5a425b6aaf4d8f30e71df7a6f3e669.png"},32726:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wda-tab-example-d55eee014bf9115ab90c6709fde8b5f3.png"}}]);