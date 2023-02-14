"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[699],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),h=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=h(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=h(t),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return t?o.createElement(f,r(r({ref:n},p),{},{components:t})):o.createElement(f,r({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var h=2;h<l;h++)r[h]=t[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var o=t(87462),a=(t(67294),t(3905));const l={sidebar_position:6,sidebar_label:"Softphone"},r="Softphone integration",i={unversionedId:"softphone",id:"softphone",title:"Softphone integration",description:"This SDK allows you to easily embed and customize a Wazo Softphone in your application.",source:"@site/docs/softphone.md",sourceDirName:".",slug:"/softphone",permalink:"/euc-plugins-js-sdk/docs/softphone",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/softphone.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Softphone"},sidebar:"tutorialSidebar",previous:{title:"Portal",permalink:"/euc-plugins-js-sdk/docs/portal"},next:{title:"EUC Plugins SDK",permalink:"/euc-plugins-js-sdk/docs/sdk"}},s={},h=[{value:"Methods",id:"methods",level:2},{value:"Login the user directly",id:"login-the-user-directly",level:3},{value:"Making a call",id:"making-a-call",level:3},{value:"Showing / hidding the softphone",id:"showing--hidding-the-softphone",level:3},{value:"Removing the softphone from the page",id:"removing-the-softphone-from-the-page",level:3},{value:"Parsing links on the page",id:"parsing-links-on-the-page",level:3},{value:"Remove the event of parsed links",id:"remove-the-event-of-parsed-links",level:3},{value:"Customizing page style",id:"customizing-page-style",level:3},{value:"Override appearance",id:"override-appearance",level:3},{value:"Customizing card form",id:"customizing-card-form",level:3},{value:"Auto complete",id:"auto-complete",level:3},{value:"Sending search results to the softphone:",id:"sending-search-results-to-the-softphone",level:3},{value:"Updating card value:",id:"updating-card-value",level:3},{value:"Callbacks / Events",id:"callbacks--events",level:2},{value:"Examples",id:"examples",level:2},{value:"Displaying a browser notification for incoming calls",id:"displaying-a-browser-notification-for-incoming-calls",level:3},{value:"Make an API call from the WAZO SDK",id:"make-an-api-call-from-the-wazo-sdk",level:3},{value:"A note about autoplay",id:"a-note-about-autoplay",level:2}],p={toc:h};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"softphone-integration"},"Softphone integration"),(0,a.kt)("p",null,"This SDK allows you to easily embed and customize a Wazo Softphone in your application.\nIf you have a CRM that requires a click-to-call feature, redirecting the user to the customer information when answering a call, ... this softphone will fit your needs."),(0,a.kt)("p",null,"To be able to integrate Wazo softphone in any web page, you can add :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { softphone } from '@wazo/euc-plugins-sdk';\n\nsoftphone.init({ \n  url?: string, //  Url of the softphone to be loaded in the iframe (optional, default to https://softphone.wazo.io).\n  width?: number, // Width (in px) of the softphone (optional, default to 500).\n  height?: number, // Height (in px) of the softphone (optional, default to 600).\n  server: string, // Stack host where the softphone should connect user.\n  port?: number, // Stack port where the softphone should connect user  (optional, default to 443).\n  language?: string, // Softphone language (optional).\n  wrapUpDuration?: number, // How long (in seconds) should the softphone display the card after the call (optional, default to 0).\n  // When the user changes anything on the card, this timeout is canceled\n  enableAgent?: boolean, // display the agent tab in the tab bar (defaults to true).\n  tenantId?: string, // Tenant id used for LDAP connection (optional)\n  debug?: boolean, // Set to `true` to display wording customization labels (default to false)\n  disableAutoLogin?: boolean, // Disable the autologin mechanism inside the softphone (useful when used with `loginWithToken`)\n  iframeCss?: IframeCss, // Customize the CSS of the iframe itself, default to `{ left: 0, bottom : 0 }`\n});\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"login-the-user-directly"},"Login the user directly"),(0,a.kt)("p",null,"Useful when you already have the user token (and refreshToken) and you don't want your user to login again."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.loginWithToken(token: string, refreshToken?: string);\n")),(0,a.kt)("h3",{id:"making-a-call"},"Making a call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.makeCall(number);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Number to call through the softphone")),(0,a.kt)("h3",{id:"showing--hidding-the-softphone"},"Showing / hidding the softphone"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.toggleSoftphoneDisplay();\nsoftphone.displaySoftphone();\nsoftphone.hideSoftphone();\n")),(0,a.kt)("h3",{id:"removing-the-softphone-from-the-page"},"Removing the softphone from the page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.removeSoftphone();\n")),(0,a.kt)("h3",{id:"parsing-links-on-the-page"},"Parsing links on the page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.parseLinks();\n")),(0,a.kt)("h3",{id:"remove-the-event-of-parsed-links"},"Remove the event of parsed links"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.removeParsedLinksEvent();\n")),(0,a.kt)("p",null,"Each link with a ",(0,a.kt)("inlineCode",{parentName:"p"},'href="tel:"')," or  ",(0,a.kt)("inlineCode",{parentName:"p"},'href="callto:"')," will make a call through the softphone."),(0,a.kt)("h3",{id:"customizing-page-style"},"Customizing page style"),(0,a.kt)("p",null,"You can inspect the iframe with your dev tool console to figure out how to override styles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.injectCss(`\n  # Reduce dialer number font size\n  .keypad-number, .keypad-number::placeholder {\n    font-size: 20px;\n  }\n`);\n")),(0,a.kt)("h3",{id:"override-appearance"},"Override appearance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.customizeAppearance({\n  colors: {\n    // Theme, default values :\n    primary: '#203890',\n    button: '#292C87',\n    black: '#000',\n    white: '#fff',\n    greenButton: '#7ed865',\n    greenButtonHover: '#6ebf5a',\n    redButton: '#FA5846',\n    redButtonHover: '#FF604F',\n    buttonText: '#fff',\n    error: '#E80539',\n    secondary: '#203890',\n    grey: '#8A95A0',\n    secondGrey: '#eee',\n    headerColor: '#888',\n    avatar: '#bdbdbd',\n    divider: 'rgba(0, 0, 0, 0.12)',\n    placeholder: 'rgba(22, 44, 66, 0.5)',\n    hovered: '#6181F4',\n  },\n  metrics: {\n    spacing: {\n      tiny: 5,\n      small: 10,\n      medium: 15,\n      large: 20,\n      larger: 25,\n      big: 30,\n      huge: 40,\n      gigantic: 50,\n    },\n    icons: {\n      xsmall: 12,\n      smaller: 15,\n      small: 19,\n      mediumSmall: 25,\n      medium: 30,\n      large: 40,\n      huge: 42,\n    },\n    breakpoint: {\n      xs: 0,\n      sm: 600,\n      md: 960,\n      lg: 1280,\n      xl: 1920,\n    },\n    borderRadius: 5,\n    card: {\n      activity: {\n        height: 57,\n      },\n      phonebookContact: {\n        height: 58,\n      },\n      search: {\n        height: 35,\n      },\n    },\n    navigation: 60,\n    sidebar: 315,\n    search: 359,\n    lineStatus: 16,\n    dialer: {\n      key: 30,\n      description: 15,\n    },\n    infoBanner: 43,\n    infoBannerSmall: 26,\n  },\n}, {\n  // Translation\n  // Set `debug: true` to know where to change translations, like below:\n  en: {\n    user: {\n      login: 'My login button', // will be displayed as `user:login` in the button when settings `debug: true` in the init() method\n    },\n  },\n}, {\n  // Assets\n  // logo: [url to your logo],\n});\n")),(0,a.kt)("h3",{id:"customizing-card-form"},"Customizing card form"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema")," to customize the card form with ",(0,a.kt)("inlineCode",{parentName:"p"},"softphone.setFormSchema(schema, uiSchema)"),",\nthe Softphone uses ",(0,a.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/docs/"},"React Json schema form")," internally to display card form :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.setFormSchema({\n  type: 'object',\n  required: ['title', 'phone'],\n  properties: {\n    title: { type: 'string', title: 'Title' },\n    phone: { type: 'string', title: 'Phone' },\n    note: { type: 'string', title: 'Note' },\n  },\n}, {\n  note: { 'ui:widget': 'textarea' },\n});\n")),(0,a.kt)("h3",{id:"auto-complete"},"Auto complete"),(0,a.kt)("p",null,"We can use an ",(0,a.kt)("inlineCode",{parentName:"p"},"autocomplete")," widget to search on fields in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  note :{ 'ui:widget': 'textarea'},\n  clientId :{ 'ui:field': 'autocomplete'},\n};\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," field, we can customize if we want to display a ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," button :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"clientId: {\n  type: 'object',\n  title: 'Client id',\n  // triggers the `onDisplayLinkedOption` event when changing the value\n  triggerDisplay: true,\n  // createForm is another JSON schema the description the add option form.\n  createForm: {\n    optionLabel: '%firstname% %lastname%',\n    schema: {\n      type: 'object',\n      required: ['phone'],\n      properties: {\n        firstname: { type: 'string', title: 'Firstname' },\n        lastname: { type: 'string', title: 'Lastname' },\n        phone: { type: 'string', title: 'Phone' },\n      }\n    },\n    uiSchema: {}\n  },\n}\n")),(0,a.kt)("h3",{id:"sending-search-results-to-the-softphone"},"Sending search results to the softphone:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// `results` should have a `label` field, like: const result = [{ label: 'Alice', id: 1 }];\nsoftphone.onOptionsResults(fieldId, results);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onOptionsResults")," is used to populate Autocomplete fields"),(0,a.kt)("h3",{id:"updating-card-value"},"Updating card value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.setCardValue(field, value);\n")),(0,a.kt)("h2",{id:"callbacks--events"},"Callbacks / Events"),(0,a.kt)("p",null,"You can listen to softphone callback, with :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onLinkEnabled = (link: HTMLLinkElement) => {\n  // link is `<a>` html tag in the page with a href=\"tel:xx\" (or callto:xxx) being processed\n  // You can make change here, like adding className, etc ...\n};\n\nsoftphone.onCallIncoming = (call: Call) => {\n  // Invoked when a call is incoming in the softphone\n  // You can make action here like redirecting to the contact page (by using `call.number).\n};\n\nsoftphone.onCallLocallyAnswered = (call: Call) => {\n  // Invoked when the user accepts the call locally\n};\n\nsoftphone.onCallEstablished = (call: Call) => {\n  // Invoked when the call is up\n};\n\nsoftphone.onOutgoingCallMade = (call: Call) => {\n  // Invoked when the user makes a call\n};\n\nsoftphone.onCallRejected = (call: Call) => {\n  // Invoked when the user rejects an incoming call\n};\n\nsoftphone.onCallEnded = (call: Call, card: Card, direction: string) => {\n  // Invoked when the call is ended\n};\n\nsoftphone.onCardSaved = (card: Card) => {\n  // Invoked when the user save the card at the end of the call\n};\n\nsoftphone.onCardCanceled = () => {\n  // Invoked when the user discards the card\n};\n\nsoftphone.onSearchOptions = (fieldId: string, query: string) => {\n  // Invoked when the user is searching from an Autocomplete field in the card form\n  // We need to call `onOptionsResults` here to send results to the softphone\n};\n\nsoftphone.onDisplayLinkedOption = (optionId: string) => {\n  // Invoked when the user is selecting a value in a Autocomplete widget\n  // useful to display this entity in your application\n};\n\nsoftphone.onWazoContactSearch = (query: string) => {\n  // Invoked when the user is searching from contact page\n};\n\nsoftphone.onAgentLoggedIn = () => {\n  // Invoked when the agent logs in\n};\n\nsoftphone.onAgentLoggedOut = () => {\n  // Invoked when the agent logs out\n};\n\nsoftphone.onAgentPaused = () => {\n  // Invoked when the agent is paused\n};\n\nsoftphone.onAgentResumed = () => {\n  // Invoked when the agent is resumed\n};\n\nsoftphone.onLanguageChanged = (language: string) => {\n  // Invoked when the user changed the softphone language\n};\n\nsoftphone.onCallHeld = () => {\n  // Invoked when the current call is held\n};\n\nsoftphone.onCallResumed = () => {\n  // Invoked when the current call is resumed\n};\n\nsoftphone.onCallMuted = () => {\n  // Invoked when the current call is muted\n};\n\nsoftphone.onCallUnMuted = () => {\n  // Invoked when the current call is un muted\n};\n\nsoftphone.onDtmfSent = (tone: string) => {\n  // Invoked when the user is sending a DTMF in the current call\n};\n\nsoftphone.onDirectTransfer = (number: string) => {\n  // Invoked when the user is transfers the current call directly\n};\n\nsoftphone.onCreateIndirectTransfer = (number: string) => {\n  // Invoked when the user initiates an indirect transfer for the current call\n};\n\nsoftphone.onCancelIndirectTransfer = () => {\n  // Invoked when the user cancels the current indirect transfer\n};\n\nsoftphone.onConfirmIndirectTransfer = () => {\n  // Invoked when the user confirms the current indirect transfer\n};\n\nsoftphone.onIndirectCallMade = (call: Call) => {\n  // Invoked when the current indirect transfer is made\n};\n\nsoftphone.onIndirectTransferDone = (call: Call) => {\n  // Invoked when the current indirect transfer is over\n};\n\nsoftphone.onStartRecording = () => {\n  // Invoked when the user records the current call\n};\n\nsoftphone.onStopRecording = () => {\n  // Invoked when the user stops recording the current call\n};\n\nsoftphone.onCallLogCreated = (callLog: CallLog) => {\n  // Invoked when the user receive a new call log.\n};\n\nsoftphone.onWebsocketMessage = (message: Object) => {\n  // Invoked when the a Wazo websocket message is received in the softphone\n};\n\nsoftphone.onAuthenticated = (session: WDASession) => {\n  // Invoked when the user is authenticated in the softphone\n};\n\nsoftphone.onLoggedOut = () => {\n  // Invoked when the user is is logged out in the softphone\n};\n\nsoftphone.onIFrameLoaded = () => {\n  // Invoked when the iframe is loaded\n};\n\n// Prefill form select\nSoftphone.optionsFetched('myField', [\n  { label: 'Foo', id: 'test' },\n  { label: 'Bar', id: '123' },\n]);\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"displaying-a-browser-notification-for-incoming-calls"},"Displaying a browser notification for incoming calls"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { softphone } from '@wazo/euc-plugins-sdk';\n\n// Ask for notification permission if not yet granted\nif (Notification.permission !== 'granted') {\n  Notification.requestPermission();\n}\n\nsoftphone.init({\n  url: 'http://localhost:3000',\n  server: 'my-stack.io',\n});\n\nsoftphone.onCallIncoming = call => {\n  new Notification(`Call incoming from ${call.displayName}`);\n};\n")),(0,a.kt)("h3",{id:"make-an-api-call-from-the-wazo-sdk"},"Make an API call from the WAZO SDK"),(0,a.kt)("p",null,"Listing user call logs on login."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { softphone } from '@wazo/euc-plugins-sdk';\nimport Wazo from '@wazo/sdk/lib/simple';\n\nconst server = 'my-stack.com';\n\nsoftphone.init({\n  url: 'http://localhost:3000',\n  server,\n});\n\nsoftphone.onCallIncoming = call => {\n  new Notification(`Call incoming from ${call.displayName}`);\n};\n\nsoftphone.onAuthenticated = async session => {\n  Wazo.Auth.setHost(server);\n  Wazo.Auth.setApiToken(session.token);\n  \n  const callLogs = await Wazo.api.callLogd.listCallLogs();\n};\n")),(0,a.kt)("h2",{id:"a-note-about-autoplay"},"A note about autoplay"),(0,a.kt)("p",null,"When the softphone is loaded and the user hasn't made any interaction with the page, we can fall into the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/autoplay"},"Autoplay restriction")," of chrome."),(0,a.kt)("p",null,"Even if the softphone uses ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/autoplay/#iframe-delegation"},"iframe delegation"),", we need to have a user interaction before being able to play the ringtone sound for incoming call."))}c.isMDXComponent=!0}}]);