(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[717],{65574:(e,t,n)=>{if("undefined"!=typeof window){const{softphone:e}=n(56965),t=n(35017).default,a=function(t){void 0===t&&(t=r),e.init({server:r,width:400}),e.onIFrameLoaded=()=>{document.getElementById("iframe-loaded-event").innerText="Softphone iframe is loaded"},e.onAuthenticated=e=>{document.getElementById("authenticated-event").innerText=`User authenticated, token: ${e.token}`},e.onLoggedOut=()=>{document.getElementById("logout-event").innerText="User logged out"},e.onCallIncoming=e=>{document.getElementById("call-incoming-event").innerText=`Incoming call from ${e.displayName}, number: ${e.number}`},e.onCallLocallyAnswered=e=>{document.getElementById("call-locally-answered-event").innerText=`Call answered here, number: ${e.number}`},e.onCallEstablished=e=>{document.getElementById("call-established-event").innerText=`Call answered, number: ${e.number}`},e.onOutgoingCallMade=e=>{document.getElementById("call-outgoing-event").innerText=`Call created here, number: ${e.number}`},e.onCallRejected=e=>{document.getElementById("call-rejected-event").innerText=`Call rejected here, number: ${e.number}`},e.onCallEnded=e=>{document.getElementById("call-ended-event").innerText=`Call ended, duration: ${(e.endTime-e.answerTime)/1e3}s`},e.onCardSaved=e=>{document.getElementById("card-saved-event").innerHTML=`Client: ${e.clientId.label}<br /> title: ${e.title}<br /> note: ${e.note}`},e.onCardCanceled=()=>{document.getElementById("card-canceled-event").innerHTML="Card canceled \ud83d\ude41"},e.onDisplayLinkedOption=e=>{document.getElementById("display-linked-option-event").innerHTML=`Selected identified: ${e}`},e.onWazoContactSearch=e=>{document.getElementById("wazo-search-contact-event").innerHTML=`Searching for: ${e}`},e.onAgentLoggedIn=()=>{document.getElementById("agent-logged-in-event").innerHTML="Agent logged in !"},e.onLanguageChanged=e=>{document.getElementById("language-changed-event").innerHTML=`Language changed: ${e} !`},e.onCallHeld=()=>{document.getElementById("call-held-event").innerHTML="Current call is held \u23f8\ufe0f"},e.onCallResumed=()=>{document.getElementById("call-resumed-event").innerHTML="Current call is resumed \u25b6\ufe0f\ufe0f"},e.onCallMuted=()=>{document.getElementById("call-muted-event").innerHTML="Current call is muted \ud83e\udd10"},e.onCallUnMuted=()=>{document.getElementById("call-unmuted-event").innerHTML="Current call is un-muted \ud83d\udd0a"},e.onDtmfSent=e=>{document.getElementById("call-dtmf-event").innerHTML=`DTMF sent: ${e}`},e.onDirectTransfer=e=>{document.getElementById("call-direct-transfer-event").innerHTML=`Call directly transferred to: ${e}`},e.onCreateIndirectTransfer=e=>{document.getElementById("call-indirect-transfer-event").innerHTML=`Indirect transfer created to: ${e}`},e.onIndirectCallMade=e=>{document.getElementById("call-indirect-transfer-made-event").innerHTML=`Indirect transfer answered from: ${e.number}`},e.onCancelIndirectTransfer=()=>{document.getElementById("call-indirect-transfer-cancel-event").innerHTML="Indirect transfer canceled"},e.onConfirmIndirectTransfer=()=>{document.getElementById("call-indirect-transfer-confirm-event").innerHTML="Indirect transfer confirmed"},e.onStartRecording=()=>{document.getElementById("call-start-record-event").innerHTML="Current call recorded"},e.onStopRecording=()=>{document.getElementById("call-stop-record-event").innerHTML="Current record stopped"},e.onCallLogCreated=e=>{document.getElementById("call-log-event").innerHTML=`A new call log was created, its duration: ${e.duration}`},e.onWebsocketMessage=e=>{document.getElementById("websocket-event").innerHTML=`A new websocket message was received: ${JSON.stringify(e)}`},e.on("show",(()=>{n.style.display="block",a.style.display="none"})),e.on("hide",(()=>{n.style.display="none",a.style.display="block"}));const n=document.createElement("button");n.id="minimize-button",n.innerHTML="X",e.wrapper.appendChild(n);const a=document.createElement("button");a.id="maximize-button",a.innerHTML="Show Softphone",e.wrapper.appendChild(a),n.addEventListener("click",e.hide.bind(e)),a.addEventListener("click",e.show.bind(e))},l=function(t,n){void 0===t&&(t={right:"auto",top:"auto",left:0,bottom:0}),void 0===n&&(n=null),e.updateCss(t),e.show(),n&&e.configureServer(n)};n.g.initButtons=()=>{a(),document.querySelector("#display-softphone").addEventListener("click",(t=>{t.preventDefault(),e.show()})),document.querySelector("#hide-softphone").addEventListener("click",(t=>{t.preventDefault(),e.hide()})),document.querySelector("#move-right").addEventListener("click",(e=>{e.preventDefault(),l({bottom:0,left:"auto",right:0})})),document.querySelector("#login-form").addEventListener("submit",(async n=>{n.preventDefault();const a=document.querySelector("#login").value,s=document.querySelector("#password").value,o=document.querySelector("#server").value;localStorage.setItem("softphone-server",o),r=o,l(null,o),t.Auth.init("softphone-example"),t.Auth.setHost(o);try{const n=await t.Auth.logIn(a,s);e.loginWithToken(n.token,n.refreshToken)}catch(n){}})),document.querySelector("#call-start-ten").addEventListener("click",(t=>{t.preventDefault(),s||l(),e.makeCall("*10")})),document.querySelector("#parse-links").addEventListener("click",(t=>{t.preventDefault(),s||l(),e.removeParsedLinksEvent(),e.onLinkEnabled=e=>{e.style.color="red"},e.parseLinks()})),document.querySelector("#inject-css").addEventListener("click",(t=>{t.preventDefault(),s||l(),e.injectCss("\n        a button.MuiFab-circular {\n          background-color: green !important;\n        }\n      ")})),document.querySelector("#customize-appearance").addEventListener("click",(t=>{t.preventDefault(),s||l(),e.customizeAppearance({colors:{primary:"#d06c2b",button:"#4b2bd7",secondary:"#29877c"}},{en:{call:{searchInWazo:"Type a number here !"},user:{login:"My login button"}}},{logo:"http://localhost:3000/examples/softphone/assets/logo.png"}),e.show()})),document.querySelector("#update-form-value").addEventListener("click",(t=>{t.preventDefault(),e.setCardValue("title","My new title !")})),document.querySelector("#add-form").addEventListener("click",(t=>{t.preventDefault(),s||l(),e.setFormSchema({type:"object",required:["subject","title"],properties:{subject:{type:"string",enum:["Support","Greetings","Want to talk to Bob"],title:"Subject"},title:{type:"string",title:"Title"},note:{type:"string",title:"Note"}}},{note:{"ui:widget":"textarea"}})})),document.querySelector("#advanced-form").addEventListener("click",(t=>{t.preventDefault(),s||l(),e.setFormSchema({type:"object",required:["title","clientId"],properties:{clientId:{type:"object",title:"Client id",triggerDisplay:!0,createForm:{optionLabel:"%firstname% %lastname%",schema:{type:"object",required:["phone"],properties:{firstname:{type:"string",title:"Firstname"},lastname:{type:"string",title:"Lastname"},phone:{type:"string",title:"Phone"}}},uiSchema:{}}},title:{type:"string",title:"Title"},note:{type:"string",title:"Note"}}},{note:{"ui:widget":"textarea"},clientId:{"ui:field":"autocomplete"}}),e.onOptionsResults("clientId",[{label:"Alice",id:1},{label:"Bob",id:2},{label:"Charlies",id:3}]),e.onSearchOptions=(t,n)=>{e.onOptionsResults(t,[{label:"Charles",id:4},{label:"David",id:5},{label:"Henry",id:6}])}}))},n.g.removeSoftphone=()=>{e.remove()};let r="undefined"!=typeof localStorage&&localStorage.getItem("softphone-server")||"my-server",s=!1;a()}},54503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));n(65574);const r={sidebar_position:9,sidebar_label:"Softphone Examples"},s="Softphone Examples",o={unversionedId:"softphone-examples",id:"softphone-examples",title:"Softphone Examples",description:"Displaying the softphone",source:"@site/docs/softphone-examples.md",sourceDirName:".",slug:"/softphone-examples",permalink:"/euc-plugins-js-sdk/docs/softphone-examples",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/softphone-examples.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Softphone Examples"},sidebar:"tutorialSidebar",previous:{title:"Plugins Examples",permalink:"/euc-plugins-js-sdk/docs/plugin-examples"}},i={},c=[{value:"Displaying the softphone",id:"displaying-the-softphone",level:2},{value:"Hiding the softphone",id:"hiding-the-softphone",level:2},{value:"Minimize / restore the softphone",id:"minimize--restore-the-softphone",level:2},{value:"Move it right",id:"move-it-right",level:2},{value:"Login directly from a token",id:"login-directly-from-a-token",level:2},{value:"Making a call",id:"making-a-call",level:2},{value:"Parsing link on the page",id:"parsing-link-on-the-page",level:2},{value:"Injecting CSS in the Softphone",id:"injecting-css-in-the-softphone",level:2},{value:"Changing the appearance of the Softphone",id:"changing-the-appearance-of-the-softphone",level:2},{value:"Adding a card form",id:"adding-a-card-form",level:2},{value:"Changing the value in the form",id:"changing-the-value-in-the-form",level:2},{value:"Advanced card form",id:"advanced-card-form",level:2},{value:"Events",id:"events",level:2},{value:"Iframe loaded",id:"iframe-loaded",level:3},{value:"User authenticated",id:"user-authenticated",level:3},{value:"User logged out",id:"user-logged-out",level:3},{value:"Call incoming",id:"call-incoming",level:3},{value:"Call answered locally",id:"call-answered-locally",level:3},{value:"Call established",id:"call-established",level:3},{value:"Call created locally",id:"call-created-locally",level:3},{value:"Call rejected locally",id:"call-rejected-locally",level:3},{value:"Call ended",id:"call-ended",level:3},{value:"User saved the call form",id:"user-saved-the-call-form",level:3},{value:"User cancels the call form",id:"user-cancels-the-call-form",level:3},{value:"User select a value in the select field of the call form",id:"user-select-a-value-in-the-select-field-of-the-call-form",level:3},{value:"User select search for a contact",id:"user-select-search-for-a-contact",level:3},{value:"User logs in as an agent",id:"user-logs-in-as-an-agent",level:3},{value:"User logs out as an agent",id:"user-logs-out-as-an-agent",level:3},{value:"User pauses the agent",id:"user-pauses-the-agent",level:3},{value:"User resumes the agent",id:"user-resumes-the-agent",level:3},{value:"User changes the language",id:"user-changes-the-language",level:3},{value:"Current call is held",id:"current-call-is-held",level:3},{value:"Current call is resumed",id:"current-call-is-resumed",level:3},{value:"Current call is muted",id:"current-call-is-muted",level:3},{value:"Current call is un-muted",id:"current-call-is-un-muted",level:3},{value:"When the user send a DTMF in the current call",id:"when-the-user-send-a-dtmf-in-the-current-call",level:3},{value:"When the user transfers directly the current call",id:"when-the-user-transfers-directly-the-current-call",level:3},{value:"When the user creates an indirect transfer",id:"when-the-user-creates-an-indirect-transfer",level:3},{value:"When the indirect transfer call is created",id:"when-the-indirect-transfer-call-is-created",level:3},{value:"When the user cancels an indirect transfer",id:"when-the-user-cancels-an-indirect-transfer",level:3},{value:"When the user confirms an indirect transfer",id:"when-the-user-confirms-an-indirect-transfer",level:3},{value:"When the user records the current call",id:"when-the-user-records-the-current-call",level:3},{value:"When the user stops the record of the current call",id:"when-the-user-stops-the-record-of-the-current-call",level:3},{value:"When the user receives a call log",id:"when-the-user-receives-a-call-log",level:3},{value:"When the user receive a message from the Wazo&#39;s Websocket",id:"when-the-user-receive-a-message-from-the-wazos-websocket",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"softphone-examples"},"Softphone Examples"),(0,l.kt)("h2",{id:"displaying-the-softphone"},"Displaying the softphone"),(0,l.kt)("p",null,"Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"./installation"},"Installation page")," for information on how to import the Softphone SDK."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.show();\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"display-softphone"},"\ud83d\ude80 Display the Softphone"),(0,l.kt)("h2",{id:"hiding-the-softphone"},"Hiding the softphone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.hide();\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"hide-softphone"},"\ud83d\ude48 Hide it"),(0,l.kt)("h2",{id:"minimize--restore-the-softphone"},"Minimize / restore the softphone"),(0,l.kt)("p",null,"You can minimize and restore the softphone the way you would any regular window by adding your buttons to the wrapper element, which will allow to position your buttons relative to the iframe. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const minimizeButton = document.createElement('button');\nminimizeButton.addEventListener('click', softphone.hide.bind(softphone));\nsoftphone.wrapper.appendChild(minimizeButton);\n\nconst maximizeButton = document.createElement('button');\nminimizeButton.addEventListener('click', softphone.show.bind(softphone));\nsoftphone.wrapper.appendChild(minimizeButton);\n")),(0,l.kt)("h2",{id:"move-it-right"},"Move it right"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.init({\n  server: 'my-server',\n  width: 400,\n  iframeCss: {\n    position: 'fixed',\n    right: 0,\n    top: '80px',\n  },\n});\nsoftphone.show();\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"move-right"},"\ud83d\udc49 This way"),(0,l.kt)("h2",{id:"login-directly-from-a-token"},"Login directly from a token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const login = document.querySelector('#login').value;\nconst password = document.querySelector('#password').value;\nconst server = document.querySelector('#server').value;\n\nWazo.Auth.init('softphone-example');\nWazo.Auth.setHost(server);\nconst session = await Wazo.Auth.logIn(login, password);\n\nsoftphone.loginWithToken(session.token, session.refreshToken);\n")),(0,l.kt)("form",{id:"login-form"},(0,l.kt)("input",{type:"text",id:"login",placeholder:"Login"}),(0,l.kt)("input",{type:"password",id:"password",placeholder:"Password"}),(0,l.kt)("input",{type:"text",id:"server",placeholder:"Server"}),(0,l.kt)("button",{className:"button button--secondary button--md",type:"submit"},"\ud83d\udd11 Login")),(0,l.kt)("h2",{id:"making-a-call"},"Making a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.makeCall('*10');\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"call-start-ten"},"\u260e\ufe0f Call *10"),(0,l.kt)("h2",{id:"parsing-link-on-the-page"},"Parsing link on the page"),(0,l.kt)("p",null,"We can parse links contains ",(0,l.kt)("inlineCode",{parentName:"p"},"tel://")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"callto://")," on the current page."),(0,l.kt)("a",{className:"call-link",href:"tel://*10"},"This is a like to call *10"),(0,l.kt)("p",null,"Link are already parsed when we authenticate, so we have to call ",(0,l.kt)("inlineCode",{parentName:"p"},"removeParsedLinksEvent")," to be able to parse them again."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onLinkEnabled = (link => {\n  link.style.color = 'red';\n});\n\n// We have to remove the previous parsing of the links\nsoftphone.removeParsedLinksEvent();\nsoftphone.parseLinks();\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"parse-links"},"\ud83d\udd17 Parse call links on this page"),(0,l.kt)("h2",{id:"injecting-css-in-the-softphone"},"Injecting CSS in the Softphone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.injectCss(`\na button {\n  background-color: green !important;\n}\n`);\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"inject-css"},"\u2728 Make the dialer button green"),(0,l.kt)("h2",{id:"changing-the-appearance-of-the-softphone"},"Changing the appearance of the Softphone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.customizeAppearance({\n  colors: {\n    primary: '#d06c2b',\n    button: '#4b2bd7',\n    secondary: '#29877c',\n  },\n}, {\n  // Translation\n  // Set `debug: true` to know where to change translations, like below:\n  en: {\n    call: {\n      searchInWazo: 'Type a number here !',\n    },\n    user: {\n      login: 'My login button', // will be displayed as `user:login` in the button when settings `debug: true` in the init() method\n    },\n  },\n}, {\n  // Assets\n  logo: 'my-logo.png',\n});\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"customize-appearance"},"\ud83c\udf08 Customize the Softphone"),(0,l.kt)("h2",{id:"adding-a-card-form"},"Adding a card form"),(0,l.kt)("p",null,"We can add form so the user can fill some information during a call, it uses the ",(0,l.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form/docs/"},"React Json schema form")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.setFormSchema({\n  type: 'object',\n  required: ['title', 'phone'],\n  properties: {\n    subject: [\"Support\", \"Greetings\", \"Whant to talk to Bob\"],\n    title: { type: 'string', title: 'Title' },\n    note: { type: 'string', title: 'Note' },\n  },\n}, {\n  note: { 'ui:widget': 'textarea' },\n});\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"add-form"},"\ud83d\udcdd Add a form during the call"),(0,l.kt)("h2",{id:"changing-the-value-in-the-form"},"Changing the value in the form"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.setCardValue('title', 'My new title !');\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"update-form-value"},"\u2600\ufe0f Update the call form value"),(0,l.kt)("h2",{id:"advanced-card-form"},"Advanced card form"),(0,l.kt)("p",null,"We can add a new field to select the client and allow creating new one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.setFormSchema({\n  type: 'object',\n  required: ['title', 'clientId'],\n  properties: {\n    clientId: {\n      type: 'object',\n      title: 'Client id',\n      // triggers the `onDisplayLinkedOption` event when changing the value\n      triggerDisplay: true,\n      // createForm is another JSON schema the description the add option form.\n      createForm: {\n        optionLabel: '%firstname% %lastname%',\n        schema: {\n          type: 'object',\n          required: ['phone'],\n          properties: {\n            firstname: { type: 'string', title: 'Firstname' },\n            lastname: { type: 'string', title: 'Lastname' },\n            phone: { type: 'string', title: 'Phone' },\n          }\n        },\n        uiSchema: {}\n      },\n    },\n    title: { type: 'string', title: 'Title' },\n    note: { type: 'string', title: 'Note' },\n  },\n}, {\n  note: { 'ui:widget': 'textarea' },\n  clientId :{ 'ui:field': 'autocomplete'},\n});\n\n// Add select values\nsoftphone.onOptionsResults('clientId',  [{ label: 'Alice', id: 1 }, { label: 'Bob', id: 2 }, { label: 'Charlies', id: 3 }]);\n\nsoftphone.onSearchOptions = (fieldId, query) => {\n  // Call you API here with `query`\n  // const results = await fetchClient();\n  const results = [{ label: 'Charles', id: 4}, { label: 'David', id: 5 }, { label: 'Henry', id: 6 }];\n  softphone.onOptionsResults(fieldId, results);\n};\n")),(0,l.kt)("a",{className:"try-it button button--secondary button--lg",id:"advanced-form"},"\ud83d\udc4c Raise up the form game !"),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"iframe-loaded"},"Iframe loaded"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onIFrameLoaded = () => {\n  document.getElementById('iframe-loaded-event').innerText = 'Softphone iframe is loaded';\n}\n")),(0,l.kt)("div",{className:"event-container",id:"iframe-loaded-event"},"\u23f0 Will react when the iframe is loaded"),(0,l.kt)("h3",{id:"user-authenticated"},"User authenticated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onAuthenticated = session => {\n  document.getElementById('authenticated-event').innerText = `User authenticated, token: ${session.token}`;\n}\n")),(0,l.kt)("div",{className:"event-container",id:"authenticated-event"},"\u23f0 Will react when the user logs in"),(0,l.kt)("h3",{id:"user-logged-out"},"User logged out"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onLoggedOut = () => {\n  document.getElementById('logout-event').innerText = 'Current user logged out';\n}\n")),(0,l.kt)("div",{className:"event-container",id:"logout-event"},"\u23f0 Will react when the user logs out"),(0,l.kt)("h3",{id:"call-incoming"},"Call incoming"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallIncoming = call => {\n  document.getElementById('call-incoming-event').innerText = `Incoming call from ${call.displayName}, number: ${call.number}`\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-incoming-event"},"\u23f0 Will react on incoming calls"),(0,l.kt)("h3",{id:"call-answered-locally"},"Call answered locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallLocallyAnswered = call => {\n  document.getElementById('call-locally-answered-event').innerText = `Call answered here, number: ${call.number}`\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-locally-answered-event"},"\u23f0 Will react on call answered by the user"),(0,l.kt)("h3",{id:"call-established"},"Call established"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallEstablished = call => {\n  document.getElementById('call-established-event').innerText = `Call answered, number: ${call.number}`\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-established-event"},"\u23f0 Will react on call answered"),(0,l.kt)("h3",{id:"call-created-locally"},"Call created locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onOutgoingCallMade = call => {\n  document.getElementById('call-outgoing-event').innerText = `Call created here, number: ${call.number}`\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-outgoing-event"},"\u23f0 Will react on call created locally"),(0,l.kt)("h3",{id:"call-rejected-locally"},"Call rejected locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallRejected = call => {\n  document.getElementById('call-rejected-event').innerText = `Call rejected here, number: ${call.number}`\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-rejected-event"},"\u23f0 Will react on call rejected locally"),(0,l.kt)("h3",{id:"call-ended"},"Call ended"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallEnded = call => {\n  document.getElementById('call-ended-event').innerText = `Call ended, duration: ${(call.endTime - call.answerTime) / 1000}s`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-ended-event"},"\u23f0 Will react on call ended"),(0,l.kt)("h3",{id:"user-saved-the-call-form"},"User saved the call form"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCardSaved = card => {\n  document.getElementById('card-saved-event').innerHTML = `Client: ${card.clientId.label}<br /> title: ${card.title}<br /> note: ${card.note}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"card-saved-event"},"\u23f0 Will react when the form is saved by the user"),(0,l.kt)("h3",{id:"user-cancels-the-call-form"},"User cancels the call form"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCardCanceled = () => {\n  document.getElementById('card-canceled-event').innerHTML = 'Card canceled \ud83d\ude41';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"card-canceled-event"},"\u23f0 Will react when the form is canceled by the user"),(0,l.kt)("h3",{id:"user-select-a-value-in-the-select-field-of-the-call-form"},"User select a value in the select field of the call form"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onDisplayLinkedOption = optionId => {\n  document.getElementById('display-linked-option-event').innerHTML = `Selected identified: ${optionId}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"display-linked-option-event"},"\u23f0 Will react when the user choose a value in a select field of the call form"),(0,l.kt)("h3",{id:"user-select-search-for-a-contact"},"User select search for a contact"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onWazoContactSearch = query => {\n  document.getElementById('wazo-search-contact-event').innerHTML = `Searching for: ${query}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"wazo-search-contact-event"},"\u23f0 Will react when the user searches for a contact"),(0,l.kt)("h3",{id:"user-logs-in-as-an-agent"},"User logs in as an agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onAgentLoggedIn = () => {\n  document.getElementById('agent-logged-in-event').innerHTML = 'Agent logged in !';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"agent-logged-in-event"},"\u23f0 Will react when the user logs as an agent"),(0,l.kt)("h3",{id:"user-logs-out-as-an-agent"},"User logs out as an agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onAgentLoggedOut = () => {\n  document.getElementById('agent-logged-out-event').innerHTML = 'Agent logged out !';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"agent-logged-out-event"},"\u23f0 Will react when the user logs out as an agent"),(0,l.kt)("h3",{id:"user-pauses-the-agent"},"User pauses the agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onAgentPaused = () => {\n  document.getElementById('agent-paused-event').innerHTML = 'Agent paused !';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"agent-paused-event"},"\u23f0 Will react when the user pauses the agent"),(0,l.kt)("h3",{id:"user-resumes-the-agent"},"User resumes the agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onAgentResumed = () => {\n  document.getElementById('agent-resumed-event').innerHTML = 'Agent resumed !';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"agent-resumed-event"},"\u23f0 Will react when the user pauses the agent"),(0,l.kt)("h3",{id:"user-changes-the-language"},"User changes the language"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onLanguageChanged = language => {\n  document.getElementById('language-changed-event').innerHTML = `Language changed: ${language}!`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"language-changed-event"},"\u23f0 Will react when the user changes the language"),(0,l.kt)("h3",{id:"current-call-is-held"},"Current call is held"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallHeld = () => {\n  document.getElementById('call-held-event').innerHTML = 'Current call is held \u23f8\ufe0f';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-held-event"},"\u23f0 Will react when the current call is held"),(0,l.kt)("h3",{id:"current-call-is-resumed"},"Current call is resumed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallResumed = () => {\n  document.getElementById('call-resumed-event').innerHTML = 'Current call is resumed \u25b6\ufe0f\ufe0f';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-resumed-event"},"\u23f0 Will react when the current call is resumed"),(0,l.kt)("h3",{id:"current-call-is-muted"},"Current call is muted"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallMuted = () => {\n  document.getElementById('call-muted-event').innerHTML = 'Current call is muted \ud83e\udd10';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-muted-event"},"\u23f0 Will react when the current is muted"),(0,l.kt)("h3",{id:"current-call-is-un-muted"},"Current call is un-muted"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallUnMuted = () => {\n  document.getElementById('call-unmuted-event').innerHTML = 'Current call is un-muted \ud83d\udd0a';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-unmuted-event"},"\u23f0 Will react when the current is un-muted"),(0,l.kt)("h3",{id:"when-the-user-send-a-dtmf-in-the-current-call"},"When the user send a DTMF in the current call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onDtmfSent = tone => {\n  document.getElementById('call-dtmf-event').innerHTML = `DTMF sent: ${tone}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-dtmf-event"},"\u23f0 Will react when a DTMF is sent in the current call"),(0,l.kt)("h3",{id:"when-the-user-transfers-directly-the-current-call"},"When the user transfers directly the current call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onDirectTransfer = number => {\n  document.getElementById('call-direct-transfer-event').innerHTML = `Call directly transfered to: ${number}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-direct-transfer-event"},"\u23f0 Will react when the current call is transferred"),(0,l.kt)("h3",{id:"when-the-user-creates-an-indirect-transfer"},"When the user creates an indirect transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCreateIndirectTransfer = number => {\n  document.getElementById('call-indirect-transfer-event').innerHTML = `Indirect transfer created to: ${number}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-indirect-transfer-event"},"\u23f0 Will react when the user creates an indirect transfer"),(0,l.kt)("h3",{id:"when-the-indirect-transfer-call-is-created"},"When the indirect transfer call is created"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onIndirectCallMade = call => {\n  document.getElementById('call-indirect-transfer-made-event').innerHTML = `Indirect transfer answered from: ${call.number}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-indirect-transfer-made-event"},"\u23f0 Will react when the user creates an indirect transfer"),(0,l.kt)("h3",{id:"when-the-user-cancels-an-indirect-transfer"},"When the user cancels an indirect transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCancelIndirectTransfer = () => {\n  document.getElementById('call-indirect-transfer-cancel-event').innerHTML = 'Indirect transfer canceled';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-indirect-transfer-cancel-event"},"\u23f0 Will react when the user cancels an indirect transfer"),(0,l.kt)("h3",{id:"when-the-user-confirms-an-indirect-transfer"},"When the user confirms an indirect transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onConfirmIndirectTransfer = () => {\n  document.getElementById('call-indirect-transfer-confirm-event').innerHTML = 'Indirect transfer confirmed';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-indirect-transfer-confirm-event"},"\u23f0 Will react when the user confirms an indirect transfer"),(0,l.kt)("h3",{id:"when-the-user-records-the-current-call"},"When the user records the current call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onStartRecording = () => {\n  document.getElementById('call-start-record-event').innerHTML = 'Current call recorded';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-start-record-event"},"\u23f0 Will react when the user records the current call"),(0,l.kt)("h3",{id:"when-the-user-stops-the-record-of-the-current-call"},"When the user stops the record of the current call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onStopRecording = () => {\n  document.getElementById('call-stop-record-event').innerHTML = 'Current record stopped';\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-stop-record-event"},"\u23f0 Will react when the user stops the record of the current call"),(0,l.kt)("h3",{id:"when-the-user-receives-a-call-log"},"When the user receives a call log"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onCallLogCreated = callLog => {\n  document.getElementById('call-log-event').innerHTML = `A new call log was created, its duration: ${callLog.duration}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"call-log-event"},"\u23f0 Will react when the user receives a call log"),(0,l.kt)("h3",{id:"when-the-user-receive-a-message-from-the-wazos-websocket"},"When the user receive a message from the Wazo's Websocket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"softphone.onWebsocketMessage = (message) => {\n  document.getElementById('websocket-event').innerHTML = `A new websocket message was received: ${JSON.stringify(message)}`;\n};\n")),(0,l.kt)("div",{className:"event-container",id:"websocket-event"},"\u23f0 Will react when the user receives a websocket message"))}u.isMDXComponent=!0},46700:(e,t,n)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=46700},52361:()=>{},94616:()=>{}}]);