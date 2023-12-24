"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5116,4931],{33796:(e,t,n)=>{n.r(t),n.d(t,{ConfigureIntegrationModal:()=>O});var i=n(67294),o=n(480),a=n(86628),r=n(24405),s=n(64275),l=n(72126),d=n(149),g=n(9844),c=n(35794),u=n(94826),p=n(68939),m=n(98688),f=n(47307),h=n(64964),b=n(61202),M=n(9377),x=(n(95477),n(33929)),v=n(18514),C=n(4023),w=n(80444),I=n(74021),y=n(26350),j=n(39132),k=n(61061),S=n(73063),Z=n(74194),_=n(85893);const U=(0,p.defineMessages)({toggleSecretVisibility:{id:"integrations.configureIntegrationShowSecret.toggleSecretVisibility",defaultMessage:"Toggle secret visibility"}});function T(e){const{secret:t,onChange:n,submit:o,placeholder:a}=e,[r,s]=i.useState(!1);return(0,_.jsx)(Z.Z,{type:r?"text":"password",value:t,onChange:n,placeholder:a,style:{padding:"4px 8px"},focusInitial:!1,onKeyDown:e=>{"Enter"===e.key&&o()},right:t&&(0,_.jsx)("div",{style:{display:"flex"},children:(0,_.jsx)(S.Z,{icon:r?j.c:k.B,onClick:()=>{s(!r)},ariaLabel:x.default.formatMessage(U.toggleSecretVisibility),isBlue:!0,iconStyle:{height:18,width:18},style:{height:18}})})})}var F=n(64453),N=n(18153),L=n(42922),B=n(68785),P=n(26388),V=n(61753),A=n(92660),K=n(74523),W=n(13490);const D=(0,p.defineMessages)({webhookUrlPlaceholder:{id:"integrations.configureIntegrationModal.webhookUrlInput.placeholder",defaultMessage:"Paste webhook URL"},webhookSecretPlaceholder:{id:"integrations.configureIntegrationModal.webhookSecretInput.placeholder",defaultMessage:"Paste token"},updateButton:{id:"integrations.configureIntegrationModal.submitButton.update",defaultMessage:"Update"},createButton:{id:"integrations.configureIntegrationModal.submitButton.create",defaultMessage:"Connect"},errorOccurred:{id:"integrations.configureIntegrationModal.error.dialog",defaultMessage:"Failed to connect {integration}. Please contact support."},closeModalAriaLabel:{id:"integrations.configureIntegrationModal.closeButtonLabel",defaultMessage:"Close integration configuration modal"}});function O(){window.__c={n:"ConfigureIntegrationModal"};const e=(0,o.O7)(),t=(0,r.yK)((e=>({errorText:{color:e.errorText,fontSize:12},input:{display:"flex",flexDirection:"column",alignItems:"flex-start",width:360},helpInfo:{display:"inline-flex",marginLeft:1}})),[]),n=(0,N.useConnectIntegrationModalStyles)(),j=(0,a.VK)((()=>I.Z.state.open?I.Z.state.integrationId:void 0),[]),k=(0,a.VK)((()=>I.Z.state.open?I.Z.state.webhookSubscriptionId:void 0),[]),U=(0,a.VK)((()=>w.default.state.currentSpaceStore),[]),O=j&&U?y.y2.createChildStore(U,{id:j,table:g.K2}):void 0,z=k&&U?y.n4.createChildStore(U,{id:k,table:c.b,spaceId:U.id}):void 0;(0,i.useEffect)((()=>{const{webhookUrl:e,webhookSecret:t}={webhookUrl:(null==z?void 0:z.getWebhookUrl())||"",webhookSecret:(null==z?void 0:z.getWebhookSecret())||""};E(e),q(t)}),[z]);const[H,E]=i.useState(""),[R,q]=i.useState(""),[Y,$]=i.useState(!1),[G,J]=i.useState(!1),[Q,X]=i.useState(!1),ee=(0,a.VK)((()=>{if(O)return O.getModel()}),[O]),te=(0,u.RW)(j),ne=l.TS({},u.iV,null==te?void 0:te.customization).headers.hmac,ie=(0,a.VK)((()=>null==ee?void 0:ee.getInfo()),[ee]),oe=(0,i.useCallback)((e=>{e&&ie&&(X(!1),f.showErrorMessage(x.default.formatMessage(D.errorOccurred,{integration:ie.developer_name})))}),[ie]),ae=(0,i.useCallback)((async()=>{if(!Q){if(!te||!(0,u.M2)({env:"production",integrationConfig:te,webhookUrlToValidate:H}))return $(!0),void X(!1);if($(!1),ne&&!R)return J(!0),void X(!1);if(X(!0),ee){const t=await M.E({environment:e,integration:ee,webhookUrl:H,webhookSecret:R,webhookSubscriptionId:k,onError:oe,onSuccess:()=>h.oV({label:(0,_.jsx)(p.FormattedMessage,{id:"configureIntegrationModal.snackbar.title",defaultMessage:"Added {integrationName} to your workspace",values:{integrationName:ee.name}})})});if(d.x.isFail(t))return void X(!1);await b.pJ({environment:e}),await m.v({environment:e}),se()}}}),[e,oe,ee,Q,R,ne,k,H,te]),re=(0,i.useCallback)((e=>q(e.target.value)),[]),se=()=>{I.Z.setState({open:!1}),E(""),q(""),$(!1),J(!1),X(!1)};return ee&&te&&U?(0,_.jsx)(A.Z,{innerStyle:n.modal,requireOnline:!0,modalStore:I.Z,onDismiss:se,render:()=>(0,_.jsxs)("div",{style:n.mobileModal,children:[(0,_.jsxs)("div",{style:n.innerModal,children:[(0,_.jsx)(S.Z,{icon:s.D,onClick:se,style:n.cancelButton,hoveredStyle:n.hovered,ariaLabel:x.default.formatMessage(D.closeModalAriaLabel)}),(0,_.jsx)(F.P,{integrationModel:ee,integrationConfig:te,spaceStore:U}),(0,_.jsxs)("div",{style:t.input,children:[(0,_.jsxs)(W.Z,{style:{display:"flex",alignItems:"center",marginTop:40},children:[(0,_.jsx)(p.FormattedMessage,{id:"integrations.configureIntegrationModal.webhookUrlInput",defaultMessage:"Webhook URL"}),(0,_.jsx)(P.Z,{placement:C.u.Bottom,render:e=>(0,_.jsx)(K.Z,{...e,href:(0,v.UY)("guides.publicAPI"),analyticsFrom:"workspace_connections",style:t.helpInfo}),renderTooltip:()=>(0,_.jsx)(p.FormattedMessage,{id:"integrations.configureIntegrationModal.webhookUrlInput.tooltip",defaultMessage:"Enter the webhook URL provided by {integrationName}",values:{integrationName:(null==ie?void 0:ie.developer_name)||"Unknown"}})})]}),(0,_.jsx)(Z.Z,{type:"text",style:{padding:"4px 8px"},value:H,onChange:e=>{E(e.target.value),$(!1)},placeholder:x.default.formatMessage(D.webhookUrlPlaceholder),focusInitial:!0,onKeyDown:async e=>{"Enter"===e.key&&await ae()}}),Y?(0,_.jsx)("div",{style:{marginTop:5,...t.errorText},children:(0,_.jsx)(p.FormattedMessage,{id:"integrations.configureIntegrationModal.invalidUrl",defaultMessage:"Invalid webhook URL"})}):null]}),te.acceptsSecretToken&&(0,_.jsxs)("div",{style:t.input,children:[(0,_.jsxs)(W.Z,{style:{display:"flex",alignItems:"center",marginTop:24},children:[(0,_.jsx)(p.FormattedMessage,{id:"integrations.configureIntegrationModal.webhookSecretInput",defaultMessage:"Token"}),(0,_.jsx)(P.Z,{placement:C.u.Bottom,render:e=>(0,_.jsx)(K.Z,{...e,href:(0,v.UY)("guides.publicAPI"),analyticsFrom:"workspace_connections",style:t.helpInfo}),renderTooltip:()=>(0,_.jsx)(p.FormattedMessage,{id:"integrations.configureIntegrationModal.webhookTokenInput.tooltip",defaultMessage:"Enter the token provided by {integrationName}",values:{integrationName:(null==ie?void 0:ie.developer_name)||"Unknown"}})})]}),(0,_.jsx)(T,{secret:R,onChange:re,submit:ae,placeholder:x.default.formatMessage(D.webhookSecretPlaceholder)}),G?(0,_.jsx)("div",{style:{marginTop:5,...t.errorText},children:(0,_.jsx)(p.FormattedMessage,{id:"integrations.configureIntegrationModal.invalidSecret",defaultMessage:"Webhook secret is required."})}):null]}),(0,_.jsx)(L.Z,{style:n.connect,onClick:ae,disabled:""===H||ne&&""===R,children:Q?(0,_.jsx)(B.Z,{}):(0,_.jsx)("span",{children:k?x.default.formatMessage(D.updateButton):x.default.formatMessage(D.createButton)})})]}),te.website_url&&(0,_.jsx)(V.W,{signupUrl:te.signupUrl??te.website_url})]})}):null}},64453:(e,t,n)=>{n.d(t,{P:()=>h});n(57658),n(67294);var i=n(480),o=n(86628),a=n(24405),r=n(15070),s=n(84169),l=n(82990),d=n(68939),g=n(75018),c=n(73063),u=n(12981),p=n(64369),m=n(23189),f=n(85893);function h(e){window.__c={n:"ConnectIntegrationHeader"};const{integrationModel:t,integrationConfig:n,spaceStore:h}=e,x=(0,a.yK)((e=>({integrationIcon:{width:40,height:40,borderRadius:6,overflow:"hidden"},title:{marginTop:4,fontSize:17,fontWeight:590,lineHeight:"22px"},subTitle:{fontWeight:l.Z.fontWeight.regular,fontSize:l.Z.fontSize.UISmall.desktop,color:e.lightTextColor,lineHeight:"17px",marginTop:6.5}})),[]),v=(0,i.O7)(),C=(0,d.useIntl)(),w=(0,o.VK)((()=>t.getName()||"Unknown"),[t]),I=(0,o.VK)((()=>t.getCapabilities()),[t]),y=(0,o.VK)((()=>t.getInfo().icon),[t]),j=(0,o.VK)((()=>h.getName()),[h]);let k;(0,r.ms)(I)&&I.webhooks?k=(0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationDescriptionDlp",defaultMessage:"Connect to {integrationName} for real-time monitoring and protection of sensitive content.",values:{integrationName:w}}):I.webhooks&&(k=(0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationDescriptionSiem",defaultMessage:"Connect to {integrationName} for real-time monitoring, alerting, and analysis of your workspace event logs.",values:{integrationName:w}}));const S=(0,r.ms)(I);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:x.integrationIcon,children:(0,f.jsx)(u.Z,{style:x.integrationIcon,src:y})}),(0,f.jsxs)(m.Z,{large:!0,style:x.title,children:[(0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationName",defaultMessage:"Connect {integrationName} to Notion",values:{integrationName:w}}),(0,f.jsx)(c.Z,{icon:s.m,ariaLabel:C.formatMessage({defaultMessage:"Workspace connections settings help button, which navigates to the Notion integration gallery",id:"integrations.configureIntegrationModal.helpButton.label"}),onClick:()=>g.navigateToExternalURL({environment:v,url:n.integrationGalleryUrl})})]}),(0,f.jsx)(p.Z,{style:x.subTitle,isMultiline:!0,children:(0,f.jsx)("div",{children:k})}),(0,f.jsx)(p.Z,{style:x.subTitle,isMultiline:!0,children:(0,f.jsxs)("div",{children:[I.webhooks&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationScope.webhooks",defaultMessage:"{integrationName} will be authorized to receive event logs on all activity in {spaceName}.",values:{integrationName:w,spaceName:j}})," "]}),S&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationScope.contentCapabilities",defaultMessage:"{hasPrevious, select, true {For <b>all</b> pages, {integrationName} will also be able to {formattedContentCapabilities}} other {For <b>all</b> pages, {integrationName} will be able to {formattedContentCapabilities}}}.",values:{hasPrevious:I.webhooks,b:e=>(0,f.jsx)("span",{style:{fontWeight:l.Z.fontWeight.semibold},children:e}),integrationName:w,formattedContentCapabilities:b(I)}})," "]}),I.read_user_without_email&&(0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationScope.userCapabilities",defaultMessage:"{hasPrevious, select, true {{integrationName} will also be able to see basic information about all workspace members and guests, including their {formattedUserCapabilities}} other {{integrationName} will be able to see basic information about all workspace members and guests, including their {formattedUserCapabilities}}}.",values:{hasPrevious:I.webhooks||S,b:e=>(0,f.jsx)("span",{style:{fontWeight:l.Z.fontWeight.semibold},children:e}),integrationName:w,formattedUserCapabilities:M(I)}})]})})]})}function b(e){const t=[];return e.read_content&&t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readContent",defaultMessage:"view content"})),e.read_comment&&t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readComment",defaultMessage:"view comments"})),e.update_content&&t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.updateContent",defaultMessage:"edit content"})),e.insert_comment&&t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.updateComment",defaultMessage:"edit comments"})),e.insert_content&&t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.insertContent",defaultMessage:"create content"})),e.insert_comment&&t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.insertComment",defaultMessage:"create comments"})),(0,f.jsx)(d.FormattedList,{value:t,type:"conjunction"})}function M(e){const t=[];return e.read_user_without_email&&(t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readUserNames",defaultMessage:"names"})),t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readUserProfileImages",defaultMessage:"profile images"}))),e.read_user_with_email&&t.push((0,f.jsx)(d.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readUserEmails",defaultMessage:"email addresses"})),(0,f.jsx)(d.FormattedList,{value:t,type:"conjunction"})}},18153:(e,t,n)=>{n.r(t),n.d(t,{ConnectOAuthIntegrationModal:()=>k,useConnectIntegrationModalStyles:()=>S});var i=n(67294),o=n(480),a=n(86628),r=n(24405),s=n(64275),l=n(41980),d=n(9844),g=n(94826),c=n(68939),u=n(50906),p=n(42631),m=n(33929),f=n(80444),h=n(17549),b=n(26350),M=n(64453),x=n(42922),v=n(73063),C=n(26388),w=n(61753),I=n(92660),y=n(85893);const j=(0,c.defineMessages)({createButton:{id:"integrations.connectOAuthIntegrationModal.submitButton.create",defaultMessage:"Connect to {integrationName}"},waiting:{id:"integrations.connectOAuthIntegrationModal.submitButton.waiting",defaultMessage:"Waiting for changes in {integrationName}"},waitingTooltip:{id:"integrations.connectOAuthIntegrationModal.submitButton.waitingTooltip",defaultMessage:"You need to complete some steps in {integrationName} to continue"},closeModalAriaLabel:{id:"integrations.connectOAuthIntegrationModal.closeButtonLabel",defaultMessage:"Close integration installation modal"}});function k(){window.__c={n:"ConnectOAuthIntegrationModal"};const e=(0,o.O7)(),t=S(),n=(0,a.VK)((()=>h.Z.state.open?h.Z.state.integrationId:void 0),[]),r=(0,a.VK)((()=>f.default.state.currentSpaceStore),[]),k=n&&r?b.y2.createChildStore(r,{id:n,table:d.K2}):void 0,[Z,_]=i.useState(!1),U=(0,a.VK)((()=>{if(k)return k.getModel()}),[k]),T=(0,a.VK)((()=>null==U?void 0:U.getInfo()),[U]),F=(0,g.I$)(n);if(!(U&&T&&F&&r&&n))return null;const N=async()=>{Z||(_(!0),await p.$$({environment:e,integration:U,spaceId:r.id,from:"compliance_connected_apps_settings"}),u.IGl(e,{integration_id:n}),L())},L=()=>{h.Z.setState({open:!1}),_(!1)};return(0,y.jsx)(I.Z,{innerStyle:t.modal,requireOnline:!0,modalStore:h.Z,onDismiss:L,render:()=>(0,y.jsxs)("div",{style:t.mobileModal,children:[(0,y.jsxs)("div",{style:t.innerModal,children:[(0,y.jsx)(v.Z,{icon:s.D,onClick:L,style:t.cancelButton,hoveredStyle:t.hovered,ariaLabel:m.default.formatMessage(j.closeModalAriaLabel)}),(0,y.jsx)(M.P,{integrationModel:U,integrationConfig:F,spaceStore:r}),(0,y.jsx)(C.Z,{placement:C.Z.Placement.Top,renderTooltip:()=>(0,y.jsx)(c.FormattedMessage,{...j.waitingTooltip,values:{integrationName:T.developer_name}}),disableTooltip:!Z,render:e=>(0,y.jsx)(x.Z,{style:t.connect,onClick:N,disabled:Z,...e,children:Z?(0,y.jsx)("span",{children:m.default.formatMessage(j.waiting,{integrationName:T.developer_name})}):(0,y.jsxs)("span",{style:t.createButton,children:[m.default.formatMessage(j.createButton,{integrationName:T.developer_name}),(0,l.A)(t.redirectIcon)]})})})]}),F.website_url&&(0,y.jsx)(w.W,{signupUrl:F.signupUrl??F.website_url})]})})}function S(){return(0,r.yK)((e=>({modal:{maxWidth:400,padding:"40px 20px 24px",fontSize:14,textAlign:"center",borderRadius:10},connect:{marginTop:40,padding:"0px 12px",width:360,height:32},innerStyle:{borderRadius:10},mobileModal:{fontSize:14,textAlign:"center"},innerModal:{display:"flex",flexDirection:"column",alignItems:"center"},hovered:{background:e.buttonPressedBackground},cancelButton:{position:"absolute",top:"10px",right:"10px",background:e.buttonHoveredBackground,borderRadius:"100%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},createButton:{display:"flex",alignItems:"center"},redirectIcon:{width:14,height:14,marginLeft:8}})),[])}},61753:(e,t,n)=>{n.d(t,{W:()=>d});n(67294);var i=n(24405),o=n(82990),a=n(68939),r=n(64369),s=n(42402),l=n(85893);function d(e){window.__c={n:"CreateCompliancePartnerAccountPrompt"};const{signupUrl:t}=e,n=(0,i.yK)((e=>({subTitle:{fontWeight:o.Z.fontWeight.regular,fontSize:o.Z.fontSize.UISmall.desktop,color:e.lightTextColor,lineHeight:"17px",marginTop:16}})),[]);return(0,l.jsx)(r.Z,{style:n.subTitle,isMultiline:!0,children:(0,l.jsx)(a.FormattedMessage,{id:"integrations.configureIntegrationModal.partnerAccountPrompt",defaultMessage:"Don't have an account? <partnerAccountLink>Sign up</partnerAccountLink>",values:{partnerAccountLink:e=>(0,l.jsx)(s.Z,{href:t,external:!0,children:e})}})})}},92660:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var i=n(480),o=n(86628),a=n(50506),r=n(53437),s=n(85893);function l(e){window.__c={n:"DefaultPopupOrModal"};const t=(0,i.O7)(),{modalStore:n,render:l}=e,{device:d}=t,g=(0,o.VK)((()=>n.state.open),[n]);return d.isMobile?(0,s.jsx)(r.ZP,{ariaLabel:e.ariaLabel,open:g,popupType:r.ZP.PopupType.SlideUp,origin:e.origin,onDismiss:e.onDismiss,render:l,style:e.style}):(0,s.jsx)(a.Z,{ariaLabel:e.ariaLabel,open:g,preventHideChildrenWhileOpening:!0,render:l,onDismiss:e.onDismiss,style:e.style,innerStyle:e.innerStyle})}},74021:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(49085);class o extends i.default{getInitialState(){return{open:!1}}}const a=new o},17549:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(49085);class o extends i.default{getInitialState(){return{open:!1}}}const a=new o},39132:(e,t,n)=>{n.d(t,{c:()=>a});n(67294);var i=n(45238),o=n(85893);const a=(0,i.I)("eye",{viewBox:"0 0 32 32",svg:(0,o.jsx)("path",{d:"M16.006 25.812c8.863 0 14.994-7.17 14.994-9.406C31 14.16 24.858 7 16.006 7 7.252 7 1 14.16 1 16.406c0 2.236 6.252 9.406 15.006 9.406zm0-3.242a6.194 6.194 0 01-6.197-6.164c-.012-3.452 2.744-6.164 6.197-6.164 3.419 0 6.185 2.711 6.185 6.164 0 3.364-2.766 6.164-6.185 6.164zm0-3.94c1.228 0 2.246-1.007 2.246-2.224 0-1.228-1.018-2.235-2.246-2.235-1.24 0-2.258 1.007-2.258 2.235 0 1.217 1.018 2.224 2.258 2.224z"})})},41980:(e,t,n)=>{n.d(t,{A:()=>a});n(67294);var i=n(45238),o=n(85893);const a=(0,i.I)("redirect",{viewBox:"0 0 13 13.5",svg:(0,o.jsx)("path",{d:"M2.35742 13.2061H10.6357C11.374 13.2061 11.9323 13.0169 12.3105 12.6387C12.6888 12.265 12.8779 11.7135 12.8779 10.9844V2.66504C12.8779 1.93132 12.6888 1.3776 12.3105 1.00391C11.9323 0.630208 11.374 0.443359 10.6357 0.443359H2.35742C1.61914 0.443359 1.06087 0.630208 0.682617 1.00391C0.304362 1.3776 0.115234 1.93132 0.115234 2.66504V10.9844C0.115234 11.7135 0.304362 12.265 0.682617 12.6387C1.06087 13.0169 1.61914 13.2061 2.35742 13.2061ZM2.43945 11.8594C2.12044 11.8594 1.87663 11.7773 1.70801 11.6133C1.54395 11.4492 1.46191 11.2008 1.46191 10.8682V2.77441C1.46191 2.44629 1.54395 2.2002 1.70801 2.03613C1.87663 1.87207 2.12044 1.79004 2.43945 1.79004H10.5537C10.8682 1.79004 11.1097 1.87207 11.2783 2.03613C11.4469 2.2002 11.5312 2.44629 11.5312 2.77441V10.8682C11.5312 11.2008 11.4469 11.4492 11.2783 11.6133C11.1097 11.7773 10.8682 11.8594 10.5537 11.8594H2.43945ZM8.63965 8.5918C8.80827 8.5918 8.94271 8.53483 9.04297 8.4209C9.14779 8.30241 9.2002 8.15202 9.2002 7.96973V4.79785C9.2002 4.55632 9.13867 4.38086 9.01562 4.27148C8.89258 4.16211 8.72396 4.10742 8.50977 4.10742H5.31055C5.12826 4.10742 4.98014 4.15983 4.86621 4.26465C4.75684 4.36491 4.70215 4.49935 4.70215 4.66797C4.70215 4.8457 4.75684 4.9847 4.86621 5.08496C4.98014 5.18522 5.13053 5.23535 5.31738 5.23535H6.47266L7.40918 5.12598L6.39746 6.05566L3.99805 8.45508C3.87044 8.58268 3.80664 8.72624 3.80664 8.88574C3.80664 9.06803 3.86133 9.21387 3.9707 9.32324C4.08464 9.43262 4.22819 9.4873 4.40137 9.4873C4.58366 9.4873 4.73861 9.4235 4.86621 9.2959L7.25879 6.91016L8.1748 5.91211L8.07227 6.88965V7.97656C8.07227 8.16797 8.1224 8.31836 8.22266 8.42773C8.32747 8.53711 8.46647 8.5918 8.63965 8.5918Z",fill:"white"})})}}]);