"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[503],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=i,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return t?a.createElement(d,r(r({ref:n},u),{},{components:t})):a.createElement(d,r({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},12614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const o={displayed_sidebar:"pluginsSidebar",pagination_next:"plugins/translation"},r="Plugins Configuration",l={unversionedId:"plugins/configuration",id:"plugins/configuration",title:"Plugins Configuration",description:"This part is still in the development process, changes may happen frequently to the schema.",source:"@site/docs/plugins/configuration.md",sourceDirName:"plugins",slug:"/plugins/configuration",permalink:"/euc-plugins-js-sdk/docs/plugins/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/configuration.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"pluginsSidebar",pagination_next:"plugins/translation"},sidebar:"pluginsSidebar",next:{title:"Translation Support",permalink:"/euc-plugins-js-sdk/docs/plugins/translation"}},s={},p=[{value:"Manifest File",id:"manifest-file",level:2},{value:"Example of a Manifest File",id:"example-of-a-manifest-file",level:3},{value:"Enabling your Plugin",id:"enabling-your-plugin",level:2},{value:"Translation Support",id:"translation-support",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugins-configuration"},"Plugins Configuration"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This part is still in the development process, changes may happen frequently to the schema.")),(0,i.kt)("h2",{id:"manifest-file"},"Manifest File"),(0,i.kt)("p",null,"This file describes how your plugin is integrated into a Wazo Product. Using one or multiple manifest files you can\ncustomize all the Wazo E-UC Products (Web, Desktop, Portal and Mobile)."),(0,i.kt)("h3",{id:"example-of-a-manifest-file"},"Example of a Manifest File"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," files should be served using a CORS-enabled HTTP server.")),(0,i.kt)("p",null,"You must provide the following information in a manifest file (json format) that will be hosted in your environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "manifestVersion": "0.1",\n  "version": "1.0.0",\n  "id": "my-application-id",\n  "packageName": "com.acme.myapp",\n  "developer": {\n    "name": "My Name",\n    "websiteUrl": "https://website.com/",\n    "privacyUrl": "https://website.com/privacy",\n  },\n  "localizationInfo": {\n    "defaultLanguageTag": "en",\n    "additionalLanguages": [\n      {\n        "languageTag": "fr",\n        "file": "fr.json"\n      }\n    ]\n  },\n  "name": {\n    "short": "App Name",\n    "full": "Full app name"\n  },\n  "description": {\n    "short": "Short description of your app (<= 80 chars)",\n    "full": "Full description of your app (<= 4000 chars)"\n  },\n  "icons": {\n    "outline": "https://fr.m.wikipedia.org/wiki/Fichier:Cat_%28113020%29_-_The_Noun_Project.svg",\n    "color": "https://fr.m.wikipedia.org/wiki/Fichier:Cat_%28113020%29_-_The_Noun_Project.svg"\n  },\n  "staticTabs": [\n    {\n      "entityId": "sms",\n      "context": [\n        "generalTab",\n        "userTab",\n        "phonebookTab"\n      ],\n      "name": "SMS",\n      "contentUrl": "https://my-websit/sms.html"\n    }\n  ],\n  "backgroundScript": "https://my-website/background.js"\n}\n')),(0,i.kt)("h2",{id:"enabling-your-plugin"},"Enabling your Plugin"),(0,i.kt)("p",null,"For development or production environment, the process is the same. See our deployment section on how to deploy each type of application."),(0,i.kt)("p",null,"After that you'll be ready to customize the ",(0,i.kt)("a",{parentName:"p",href:"./web-desktop-application"},"Web and Desktop application"),", the ",(0,i.kt)("a",{parentName:"p",href:"./mobile"},"Mobile Application")," or ",(0,i.kt)("a",{parentName:"p",href:"./portal"},"Portal")),(0,i.kt)("h2",{id:"translation-support"},"Translation Support"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"localizationInfo")," you can add other ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," files containing translations for a specific language."),(0,i.kt)("p",null,"In your main ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"localizationInfo": {\n  "defaultLanguageTag": "en",\n  "additionalLanguages": [\n    {\n      "languageTag": "fr",\n      "file": "fr.json"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," path can be relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," path or absolute."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fr.json")," file will look like this :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/teams/v1.5/MicrosoftTeams.Localization.schema.json",\n  "manifestVersion": "0.1",\n  "staticTabs[0].name": "Texto"\n}\n')),(0,i.kt)("p",null,"You can create an entry with the JSON path to every ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," elements, here we change the ",(0,i.kt)("inlineCode",{parentName:"p"},"staticTabs[0].name")," element.\nSo if we have in our ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," file :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "sms",\n    "context": ["generalTab"],\n    "name": "SMS",\n    "contentUrl": "./general.html"\n  }\n],\n')),(0,i.kt)("p",null,"The value ",(0,i.kt)("inlineCode",{parentName:"p"},"SMS")," will be translated to ",(0,i.kt)("inlineCode",{parentName:"p"},"Texto")," when the user changes locale to ",(0,i.kt)("inlineCode",{parentName:"p"},"fr"),"."),(0,i.kt)("p",null,"Currently supported locales are : ",(0,i.kt)("inlineCode",{parentName:"p"},"en")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fr"),"."))}c.isMDXComponent=!0}}]);