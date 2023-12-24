"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[889],{89845:(e,t,i)=>{i.d(t,{Z:()=>f});i(67294);var n=i(83355),r=i(13991),o=i(8848),s=i(7057),a=i(53877),l=i(42875),d=i(36700),c=i(63143),h=i(68939),u=i(26388),p=i(85893);class m extends n.Z{constructor(){super(...arguments),this.reminderTimer=void 0}UNSAFE_willMountOrUpdate(){this.createReminderTimer()}willUnmount(){this.clearReminderTimer()}createReminderTimer(){const e=this.props.value;if(!e)return;const t=a.KR(e,(0,l.r)());if(!t)return;const i=t.valueOf(),n=i-Date.now();n<0||n>c.A0||this.reminderTimer&&this.reminderTimer.timestamp===i||(this.reminderTimer&&clearTimeout(this.reminderTimer.timer),this.reminderTimer={timestamp:i,timer:setTimeout(this.enqueueForceUpdate,n)})}clearReminderTimer(){this.reminderTimer&&(clearTimeout(this.reminderTimer.timer),this.reminderTimer=void 0)}renderComponent(){const{value:e,withComma:t}=this.props;if(!e)return;const i=a.NK(e,(0,l.r)(),r.SP);let n;if(e.reminder){const t=a.Nm(e,(0,l.r)());n=t?{color:this.theme.errorText}:{color:o.ZP.blue}}const c=(0,p.jsxs)(p.Fragment,{children:[(0,s.ZV)({value:e,date_format:this.props.dateFormat,time_format:this.props.timeFormat,userTimeZone:(0,l.r)(),allowRelativeDates:!0,intl:this.props.intl,shortenDateAndRange:this.props.shortenDateAndRange,displayInUserTimezone:this.props.displayInUserTimezone}),e.reminder&&(0,d.m)({display:"inline-block",width:"1em",marginLeft:6,marginRight:2,paddingBottom:4,verticalAlign:"middle"}),t?", ":null]});return this.props.disableTooltip?(0,p.jsx)("div",{style:{...this.props.style,...n},children:c}):(0,p.jsx)(u.Z,{renderTooltip:()=>(0,p.jsxs)(p.Fragment,{children:[this.props.tooltipHeader,(0,p.jsxs)("div",{style:g(this.theme,this.props.tooltipHeader),children:[v(i.start),i.end?` → ${v(i.end)}`:""]})]}),render:e=>(0,p.jsx)("div",{style:{...this.props.style,...n},...e,children:c}),placement:this.props.tooltipPlacement})}}m.displayName="DateBox";const f=(0,h.injectIntl)(m);function v(e){return(0,s.ZW)(e,"medium_with_time")}function g(e,t){return t?{color:e.mediumInvertedTextColor}:{}}},13658:(e,t,i)=>{i.d(t,{Z:()=>d});i(67294);var n=i(83355),r=i(49085),o=i(68939),s=i(64921),a=i(85893);class l extends n.Z{constructor(){super(...arguments),this.storeTypes={open:r.default.createClass(!1)},this.handleOpen=()=>{this.stores.open.setState(!0)}}renderComponent(){return this.stores.open.state||this.props.items.length<=this.props.visible?(0,a.jsx)("div",{children:this.props.items}):(0,a.jsxs)("div",{children:[this.props.items.slice(0,this.props.visible),(0,a.jsx)(s.Z,{onClick:this.handleOpen,style:(e=this.theme,{display:"flex",alignItems:"center",height:28,fontSize:12,color:e.lightTextColor,padding:0,paddingLeft:52,paddingRight:16}),children:(0,a.jsx)(o.FormattedMessage,{defaultMessage:"View {moreCount} more",id:"activity.viewMoreButton.label",values:{moreCount:this.props.items.length-this.props.visible}})})]});var e}}l.displayName="ViewMore";const d=l},92559:(e,t,i)=>{i.d(t,{Z:()=>s});i(67294);var n=i(24405),r=i(8848),o=i(85893);function s(){window.__c={n:"BlockHighlighterBar"};const e=(0,n.yK)((()=>({blockContext:{flexShrink:0,display:"flex",width:3,borderRadius:4,marginLeft:2,marginRight:8,minHeight:24,background:r.DB}})),[]);return(0,o.jsx)("div",{style:e.blockContext})}},12472:(e,t,i)=>{i.d(t,{D:()=>u,Z:()=>h});i(67294);var n=i(24405),r=i(68939),o=i(19719),s=i(17659),a=i(39699),l=i(62385),d=i(22649),c=i(85893);function h(e){var t;window.__c={n:"NotificationActions"};const{isMobile:i,environment:r,rootStore:o,activity:s,tabArgs:a}=e,{source:l}=a,h=Boolean(null===(t=a.notification)||void 0===t?void 0:t.visited),p=(0,n.yK)((()=>({container:{paddingLeft:(0,d.c3)({source:l,isMobile:i})-8,paddingTop:4}})),[i,l]);return h?(0,c.jsx)("div",{style:p.container,children:(0,c.jsx)(u,{tabArgs:a,environment:r,rootStore:o,activity:s})}):null}function u(e){window.__c={n:"UnarchiveButton"};const{tabArgs:t,environment:i,rootStore:h,activity:u}=e,{notification:p,tab:m}=t,f=(0,n.yK)((e=>({secondaryButton:(0,d._W)(e)})),[]);return Boolean(null==p?void 0:p.visited)?(0,c.jsx)(l.Z,{onClick:()=>{p&&(a.createAndCommit({userAction:"Activity.handleUnarchive",environment:i,perform:e=>{s.E1({notificationId:p.id,visited:!1,rootStore:h,transaction:e})}}),o.F5({environment:i,activity:u,tab:m,notificationId:p.id,alreadyRead:p.read}))},style:f.secondaryButton,children:(0,c.jsx)(r.FormattedMessage,{defaultMessage:"Unarchive",id:"activity.actions.unarchiveButton.label"})}):null}},36081:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(67294),r=i(24405),o=i(97880),s=i(68939),a=i(31278),l=i(22649),d=i(85893);function c(e){let t,i,{permissionGroup:c,spaceId:h}=e;window.__c={n:"PermissionGroupTitle"},c?(t=c.icon,i=c.name||(0,d.jsx)(s.FormattedMessage,{defaultMessage:"Untitled group",id:"activity.permissionGroupTitles.untitledGroup"})):i=(0,d.jsx)(s.FormattedMessage,{defaultMessage:"Deleted group",id:"activity.permissionGroupTitles.deletedGroup"});const u=void 0!==t,p=(0,r.yK)((()=>({title:(0,l.TL)(u)})),[u]),m=(0,n.useMemo)((()=>(0,o.$K)(t)?{icon:t,pointer:{table:"space",id:h}}:void 0),[t,h]);return(0,d.jsxs)("span",{children:[m&&(0,d.jsx)(a.Z,{disabled:!0,icon:m,isEmptyPage:!1,size:18,style:l.e9}),(0,d.jsx)("span",{style:p.title,children:i})]})}const h=n.memo(c)},78976:(e,t,i)=>{i.d(t,{Z:()=>T});var n=i(67294),r=i(480),o=i(86628),s=i(24405),a=i(15145),l=i(1800),d=i(86517),c=i(21202),h=i(6287),u=i(15047),p=i(29369),m=i(97880),f=i(68939),v=i(62820),g=i(9867),x=i(84076),y=i(31278),C=i(76798),b=i(64369),j=i(17022),S=i(22649),w=i(85893);function M(e){window.__c={n:"Title"};const{titledRecordStore:t,getRecordModel:i,activity:M,tabArgs:T,permissionRole:A,shouldRenderEmpty:Z}=e,k=(0,o.VK)((()=>t.getModel()),[t]),I=(0,r.O7)(),L=(0,f.useIntl)(),B=(0,o.VK)((()=>null==k?void 0:k.getRenderIcon({getRecordModel:i})),[k,i]),R=(0,s.yK)((()=>({container:A?{...S.lS,display:"flex",alignItems:"center"}:S.lS,icon:S.e9,recordTitle:(0,S.TL)(void 0!==B),role:{marginLeft:4,padding:0},titleAndRole:{display:"flex",flexFlow:"row",padding:1}})),[B,A]),_=(0,n.useCallback)((()=>{const e=t.table;switch(e){case c.iU:case h.v:case u.bx:(0,j.V3)({environment:I,activity:M,...T});break;case p.e0:(0,j.dG)({environment:I,activity:M,...T}),g.hI({environment:I,teamStore:t,shouldScroll:!0}),v.Z.setState({...v.Z.state,open:!1});break;default:(0,m.t1)(e)}}),[M,I,T,t]),U=(0,o.VK)((()=>k&&k.table!==p.e0?k.getRenderUrl({getRecordModel:i,pageVisitSource:a.tY.Notification}):Z&&t.table===c.iU?(0,l.Z)({pageId:t.id,pageVisitSource:a.tY.LinkInPage}):void 0),[k,i,Z,t.table,t.id]);if(!k&&!Z)return null;const V=A?(0,w.jsxs)("div",{style:R.titleAndRole,children:[(0,w.jsx)(C.Z,{store:t,style:R.recordTitle}),(0,w.jsx)(b.Z,{style:R.role,isSecondaryColor:!0,children:`(${L.formatMessage((0,d.kD)(A,c.iU)).toLocaleLowerCase()})`})]}):(0,w.jsx)(C.Z,{store:t,style:R.recordTitle});return(0,w.jsxs)(x.Z,{href:U,onClick:_,external:!1,innerStyle:R.container,inline:!0,children:[(B||Z)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y.Z,{disabled:!0,icon:B,isEmptyPage:!1,size:18,style:R.icon}),(0,w.jsx)("span",{children:" "})]}),V]})}const T=n.memo(M)},74970:(e,t,i)=>{i.d(t,{BE:()=>U,Hy:()=>P,ZP:()=>N,_c:()=>F,hZ:()=>V,of:()=>O});i(67294);var n=i(83355),r=i(480),o=i(53150),s=i(24405),a=i(49085),l=i(8848),d=i(36700),c=i(69651),h=i(30134),u=i(82356),p=i(94308),m=i(8504),f=i(21202),v=i(97880),g=i(37834),x=i(43250),y=i(33929),C=i(16402),b=i(51757),j=i(73063),S=i(86176),w=i(26388),M=i(70301),T=i(45653),A=i(67706),Z=i(32469),k=i(37444),I=i(85893);const L={fontSize:14,lineHeight:1.4,flexGrow:1,minWidth:0};class B extends n.Z{constructor(){super(...arguments),this.titleAriaId=(0,o.Z)(),this.storeTypes={hovered:a.default.createClass(!1),hoveredOverInboxActionsMenu:a.default.createClass(!1)},this.handleMouseOver=()=>{this.stores.hovered.setState(!0)},this.handleMouseLeave=()=>{this.stores.hovered.setState(!1)},this.handleOpenSnapshot=()=>{if(this.props.navigableBlockId){const e=b.G.createChildStore(this.props.rootStore,{table:f.iU,id:this.props.navigableBlockId});g.jN({environment:this.environment,blockStore:e,openSnapshotNearTimestamp:this.props.timestamp.toString(),from:"activity"})}}}renderComponent(){const{children:e}=this.props;return(0,I.jsxs)("article",{onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,"aria-labelledby":this.titleAriaId,tabIndex:0,children:[(0,I.jsxs)("div",{style:{...B.wrapStyle,paddingBottom:e?12:8,paddingLeft:this.environment.device.isMobile?this.environment.WindowSizeStore.state.paddingLeftCSS:0,paddingRight:this.environment.device.isMobile?this.environment.WindowSizeStore.state.paddingRightCSS:0},children:[(0,I.jsxs)("div",{style:{display:"flex",paddingLeft:16,paddingRight:16},children:[(0,I.jsxs)("div",{className:x.FoE,style:{display:"flex",alignItems:"flex-start",position:"relative"},children:[(0,I.jsx)("div",{style:{marginRight:4}}),this.props.icon]}),this.renderHeader(),this.renderSnapshotButton(),(0,I.jsx)(H,{isPrivate:this.props.isPrivate})]}),e&&(0,I.jsx)(D,{children:this.props.children})]}),(0,I.jsx)(G,{isLast:this.props.isLast})]})}renderHeader(){const{timestamp:e,header:t}=this.props,i=(0,C.IS)(e),n=(0,C.uy)(e);return(0,I.jsxs)("div",{style:L,children:[(0,I.jsx)("div",{id:this.titleAriaId,className:x.NFf,children:t}),(0,I.jsxs)("div",{style:{display:"flex",marginTop:4,marginBottom:this.props.children?8:4},children:[(0,I.jsx)("div",{style:(r=this.theme,{fontSize:12,color:r.lightTextColor,whiteSpace:"nowrap"}),className:x.CZG,children:(0,I.jsx)(A.Z,{text:i,tooltipText:n,icon:c.C})}),this.props.navigableBlockId&&this.props.rootStore&&(0,I.jsx)(S.Z,{isLink:!0,innerStyle:z(this.theme),store:b.G.createChildStore(this.props.rootStore,{table:f.iU,id:this.props.navigableBlockId}),left:(0,I.jsx)("div",{style:K(this.theme),children:"·"}),onClick:this.props.onBacklinkClicked})]})]});var r}renderSnapshotButton(){if(!this.props.showSnapshotButton)return;if(this.props.timestamp<new Date("2018-10-26").getTime())return;const e=y.default.getIntl().formatMessage({defaultMessage:"View version for this update",id:"activitySection.viewVersionForUpdate.tooltip"});return this.props.navigableBlockId?(0,I.jsx)(w.Z,{renderTooltip:()=>e,render:t=>(0,I.jsx)(j.Z,{ariaLabel:e,onClick:this.handleOpenSnapshot,icon:m.J,...t})}):void 0}}B.displayName="ActivityUpdateSection",B.wrapStyle={paddingTop:12};const R={marginTop:2,marginRight:8,flexShrink:0};function _(e){let{actor:t,environment:i}=e;const n=i.currentUser.id===t.id;return Number(t.isBot())+Number(n)}function U(e){window.__c={n:"AuthorIcon"};const{authors:t,style:i,showAvatarShadow:n}=e,o=(0,r.O7)(),s=t.sort(((e,t)=>_({actor:e,environment:o})-_({actor:t,environment:o})))[0],a=k.IX,l={...R,...i};return s?s.isBot()?(0,I.jsx)(M.Z,{botValue:s,style:l,size:a}):s.isUser()?(0,I.jsx)(T.Z,{userValue:s,style:l,size:a,avatarShouldShowShadow:n??!0}):s.isAgent()?null:void(0,v.t1)(s):null}function V(){return(0,I.jsx)("div",{style:{display:"flex",backgroundColor:l.ZP.red,height:28,width:28,borderRadius:"100%",...R},children:(0,d.m)({height:16,width:16,fill:l.ZP.white,marginLeft:6,marginTop:5})})}function O(){return(0,I.jsx)("div",{style:{height:25,width:25,...R},children:(0,p.f)({height:25,width:25})})}function P(){return(0,I.jsx)("div",{style:{height:25,width:25,...R},children:(0,h.c)({height:25,width:25})})}function F(){return(0,I.jsx)("div",{style:{height:25,width:25,...R},children:(0,u.l)({height:25,width:25})})}const N=B;function H(e){let{isPrivate:t}=e;return t?(0,I.jsx)(Z.Z,{style:{marginTop:1,marginBottom:4,marginLeft:8}}):null}function D(e){let{children:t}=e;return(0,I.jsx)("div",{className:x.nU_,children:t})}function E(e){return{borderBottom:`1px solid ${e.regularDividerColor}`}}function z(e){return{fontSize:12,color:e.lightTextColor}}function K(e){return{fontSize:12,color:e.lightTextColor,marginLeft:4,marginRight:4}}function G(e){let{isLast:t}=e;window.__c={n:"DividerComponent"};const i=(0,s.Fg)();return t?null:(0,I.jsx)("div",{style:E(i)})}},17022:(e,t,i)=>{i.d(t,{BE:()=>p,JJ:()=>v,ME:()=>c,V3:()=>u,dG:()=>h,h9:()=>f});var n=i(15145),r=i(82813),o=i(64002),s=i(50906),a=i(19719),l=i(24215),d=i(4761);function c(e){return(0,o.SK)(e,{[n.$X]:n.tY.Notification})}function h(e){const t=e.mightCloseTab??!0;m({target:"body",...e,mightCloseTab:t})}function u(e){const t=e.mightCloseTab??!0;m({target:"title",...e,mightCloseTab:t})}function p(e){m({target:"add_reaction",...e,mightCloseTab:!1})}function m(e){const{target:t,environment:i,activity:n,notification:o,source:c,tab:h,mightCloseTab:u}=e,p="notifications_tab"===c?d.ZP.state.sessionId:void 0,m="notifications_tab"===c?d.ZP.isFilteredToUnreadOnly():void 0;s.CgP(i,{target:t,activity_id:n.id,notification_id:null==o?void 0:o.id,sessionId:p,is_filtered:m,tab:h}),u&&a.pw({environment:i,target:t}),o&&r.e((0,l.mc)(i),{alreadyRead:o.read,notificationId:o.id,activityId:o.activity_id,from:t,sessionId:p})}function f(e){const{notification:t,activity:i,environment:n,tab:r}=e,o={environment:n,activity:i,notificationId:null==t?void 0:t.id,alreadyRead:Boolean(null==t?void 0:t.read),tab:r};return{onBacklinkClicked:e=>a.EQ({...o,backlinkPageId:e}),onNotificationFrameClicked:()=>a.ix(o),...v({notification:t,activity:i,environment:n,tab:r})}}function v(e){const{notification:t,activity:i,environment:n,tab:r}=e,o={environment:n,activity:i,notificationId:null==t?void 0:t.id,alreadyRead:Boolean(null==t?void 0:t.read),tab:r};return{onArchiveClicked:()=>a._b(o),onUnarchiveClicked:()=>a.F5(o),onMarkAsReadClicked:()=>a.cC(o),onMarkAsUnreadClicked:()=>a.u_(o),onNotificationBodyClicked:e=>a._H({...o,otherArgs:e??{}})}}},90060:(e,t,i)=>{i.d(t,{uA:()=>D,XW:()=>H,P6:()=>N,cr:()=>K,jC:()=>z,N8:()=>E});var n=i(66897),r=i(67294),o=i(68939),s=(i(41892),i(8848)),a=i(7057),l=(i(30134),i(82356),i(94308),i(24211)),d=(i(54368),i(77420)),c=i(19889),h=(i(97880),i(82990)),u=i(15145),p=i(76725),m=i(72126),f=i(59753),v=i(63306),g=i(64002),x=i(85893);const y=function(e){const t={display:e.inline?"inline":"block",color:s.ZP.inherit,textDecoration:"none",cursor:"pointer",...e.style},{href:i}=e;return(0,x.jsx)("a",{href:(0,g.Nm)({str:i,allowNoProtocol:!0}),style:t,className:"notion-email-button-hover",onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,children:e.children})};function C(e){let{getRecordValue:t,blockId:i,userTimeZone:n,baseUrl:r,left:s,right:a}=e;window.__c={n:"RecordPath"};const l=function(e,t,i,n,r){const o=v.uJ({table:"block",id:t},e),s=f.om.fromGetRecordValueFn(e);return m.nn(o.reverse()).map((e=>{const t=f.kk.fromBlock(e),o=t.getRenderTitle({getRecordModel:s,userTimeZone:n,intl:i})||i.formatMessage({id:"recordPath.untitledBlock.placeholder",defaultMessage:"Untitled"}),a=t.getRenderUrl({getRecordModel:s,pageVisitSource:u.tY.Email});return(0,x.jsx)(y,{href:`${r}${a}`,style:{display:"inline-block",maxWidth:120,verticalAlign:"top",...h.Z.textOverflowStyle},children:o},e.id)}))}(t,i,(0,o.useIntl)(),n,r);return l.length>0?(0,x.jsxs)("div",{children:[s,(0,p.Z)(l,(e=>(0,x.jsx)("span",{style:{paddingLeft:4,paddingRight:4},children:"/"},`slash:${e}`))),a]}):null}const b=r.memo(C);i(43593),i(17755),i(58102);const j={fontSize:14,lineHeight:1.4};class S extends r.PureComponent{constructor(){super(...arguments),this.theme=(0,s.gh)({theme:"light"})}render(){const{children:e}=this.props;return(0,x.jsxs)("table",{style:{paddingTop:12,paddingBottom:e?0:8,borderSpacing:0,width:"100%",borderCollapse:"separate"},children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{style:{verticalAlign:"top",width:34,minWidth:34,paddingTop:2},children:this.props.icon}),(0,x.jsx)("td",{children:(0,x.jsx)(I,{timestamp:this.props.timestamp,header:this.props.header,intl:this.props.intl,userTimeZone:this.props.userTimeZone,children:this.props.children,navigableBlockId:this.props.navigableBlockId,getRecordValue:this.props.getRecordValue,baseUrl:this.props.baseUrl,theme:this.props.theme})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{}),(0,x.jsx)("td",{style:{maxWidth:400},children:e&&(0,x.jsx)(A,{children:this.props.children})})]}),(0,x.jsx)(T,{isLast:this.props.isLast,theme:this.props.theme})]})}}const w={fontWeight:h.Z.fontWeight.semibold};(0,o.injectIntl)(S);function M(e){return{borderBottom:`1px solid ${e.regularDividerColor}`,marginBottom:4}}function T(e){let{isLast:t,theme:i}=e;return t?null:(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:2,children:(0,x.jsx)("div",{style:M(i)})})})}function A(e){let{children:t}=e;return(0,x.jsx)("div",{children:t})}function Z(e){return{fontSize:12,color:e.lightTextColor,whiteSpace:"nowrap"}}function k(e){return{color:e.lightTextColor,marginLeft:4,marginRight:4}}function I(e){let{timestamp:t,header:i,intl:n,userTimeZone:r,children:o,navigableBlockId:s,getRecordValue:d,baseUrl:c,theme:h}=e;const u=(0,a.Yx)(Math.min(t,Date.now()),"medium_with_time",(0,l.E2)(n),r);return(0,x.jsxs)("div",{style:j,children:[(0,x.jsx)("div",{children:i}),(0,x.jsx)("table",{style:{...Z(h),marginTop:4,marginBottom:o?8:4,borderSpacing:0},children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:u}),(0,x.jsx)("td",{children:s&&(0,x.jsx)(b,{getRecordValue:d,blockId:s,baseUrl:c,left:(0,x.jsx)("span",{style:k(h),children:"·"}),userTimeZone:r})})]})})]})}var L=i(21202),B=i(6287),R=i(33709),_=i(15047),U=i(70203),V=i(33929),O=i(67669),P=i(80444),F=i(51757);function N(e){const{edits:t,rootStore:i}=e,n=m.sv(t.flatMap((e=>e.authors||[])),m.Xy);return m.oA(n.map((e=>D(e,i))))}function H(e,t){const{currentUserStore:i}=P.default.state,r=null==i?void 0:i.id;return function(e,t,i,r){const s=t.find((e=>e.id===i)),a=t.map((t=>(0,n.$4)(e,t))),l={...w,...r};if(1===t.length)return s?(0,x.jsx)("span",{children:(0,x.jsx)(o.FormattedMessage,{defaultMessage:"You",id:"activitySection.authorPhrase.forOneAuthorCurrentUser.label",values:{b:e=>(0,x.jsx)("span",{style:l,children:e})}})}):(0,x.jsx)("span",{children:(0,x.jsx)(o.FormattedMessage,{defaultMessage:"<b>{author}</b>",id:"activitySection.authorPhrase.forOneAuthor.label",values:{author:a[0],b:e=>(0,x.jsx)("span",{style:l,children:e})}})});if(2===t.length){if(s){const i=t.filter((e=>e!==s)).map((t=>(0,n.$4)(e,t)));return(0,x.jsx)("span",{children:(0,x.jsx)(o.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and you",id:"activitySection.authorPhrase.forTwoAuthorsCurrentUser.label",values:{firstAuthor:i[0],b:e=>(0,x.jsx)("span",{style:l,children:e})}})})}return(0,x.jsx)("span",{children:(0,x.jsx)(o.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and <b>{secondAuthor}</b>",id:"activitySection.authorPhrase.forTwoAuthors.label",values:{firstAuthor:a[0],secondAuthor:a[1],b:e=>(0,x.jsx)("span",{style:l,children:e})}})})}if(a.length>2){if(s){const i=t.filter((e=>e!==s)).map((t=>(0,n.$4)(e,t))),r=(0,x.jsx)(o.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, =0 {<b>{firstAuthor}</b>, <b>{secondAuthor}</b> and you} one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthorsCurrentUser.label",values:{numberOfOtherAuthors:i.length-2,firstAuthor:i[0],secondAuthor:i[1],b:e=>(0,x.jsx)("span",{style:l,children:e})}});return(0,x.jsx)("span",{children:r})}{const e=(0,x.jsx)(o.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthors.label",values:{numberOfOtherAuthors:a.length-2,firstAuthor:a[0],secondAuthor:a[1],b:e=>(0,x.jsx)("span",{style:l,children:e})}});return(0,x.jsx)("span",{children:e})}}return(0,x.jsx)("span",{style:l,children:(0,x.jsx)(o.FormattedMessage,{defaultMessage:"Nobody",id:"activitySection.authorPhrase.forNoAuthors.label"})})}(V.default.getIntl(),e,r,t)}function D(e,t){if(e.table===c.KJ){const i=E(e.id,t);if(i)return(0,n.dp)(i)}else{const i=function(e,t){return(0,F.Kv)(t,{table:d.cZ,id:e}).getValue()}(e.id,t);if(i)return(0,n.D$)(i)}}function E(e,t){return F.U6.createChildStore(t,{table:c.KJ,id:e}).getValue()}function z(e){const{tab:t,recordId:i,recordType:n,rootStore:r,environment:o}=e;if("all"===t){if(!i)return!1;let e;return e="block"===n?F.G.createChildStore(r,{table:L.iU,id:i}):"collection"===n?F.NW.createChildStore(r,{table:B.v,id:i}):F.H2.createChildStore(r,{table:_.bx,id:i}),(0,O.yi)(o,e)}return!1}function K(e){const{activity:t,rootStore:i}=e;if("commented"!==t.type)return;const n=i.getRecordModel({table:R.qF,id:t.discussion_id,spaceId:t.space_id});if(!n)return;const r=n.getContext();if(!r)return;const o=(0,U.VP_)(r,(e=>!(0,U.xw5)(e)||(0,U.h19)(e)===n.id));return{id:n.id,context:o}}},19255:(e,t,i)=>{i.d(t,{Mg:()=>u});i(30541),i(57658),i(21703);var n=i(67266),r=i.n(n),o=i(5242),s=i.n(o),a=i(15095),l=i(72126),d=i(70203),c=i(97880);let h=function(e){return e[e.removed=-1]="removed",e[e.added=1]="added",e[e.same=0]="same",e}({});function u(e){const{before:t,after:i,isIncompleteAfter:n,insertCursor:o}=e,u={count:0,encoding:{},decoding:{},annotationEncoding:{},annotationDecoding:{}},p=e=>{const t=u.encoding[e];if(t)return t;{const t=String.fromCharCode(u.count);return u.count++,u.encoding[e]=t,u.decoding[t]=e,t}},m=e=>{const t=r()(e),i=u.annotationEncoding[t];if(i)return i;{const i=String.fromCharCode(u.count);return u.count++,u.annotationEncoding[t]=i,u.annotationDecoding[i]=e,i}},f=e=>l.xH(d.lzi(e).map((e=>{const t=a.p4(e[0]).map(p);if(d.km_(e)){const i=d.hDy(e),n=d.I$B(i);n&&(t[0]=m({type:"mention",value:n}),i.forEach((e=>{d.ZAl(e)||d.kuv(e)||d.QVC(e)||(t.unshift(m({type:"start",value:e})),t.push(m({type:"end",value:e})))})))}else if(d.YrK(e)){const i=d.hDy(e),n=d.Ap(i);if(n){t[0]=m({type:"equation",value:n});for(const e of i)d.ZAl(e)||d.kuv(e)||d.QVC(e)||(t.unshift(m({type:"start",value:e})),t.push(m({type:"end",value:e})))}}else if(d.AJd(e)){d.hDy(e).forEach((e=>{t.unshift(m({type:"start",value:e})),t.push(m({type:"end",value:e}))}))}return t}))).join("");if(u.count>65535)throw new Error("This string has way too many different characters.");const v=function(e,t){const i=new(s())({timeout:2,editCost:6}),n=i.main(t,e);return i.cleanupSemantic(n),n}(f(i),f(t)),g=[];let x=[],y=0;const C=n?l.qr(v,(e=>0===e[0]||1===e[0])):0;let b=!1;return v.forEach((e=>{let[t,i]=e;i.split("").forEach((e=>{if(u.decoding[e]){const i=u.decoding[e];t===h.added?g.push([i,[...x,["+"]]]):t===h.removed&&(!n||y<=C)?g.push([i,[...x,["-"]]]):(n&&o&&!b&&y===C+1&&(b=!0,g.push(["",[["tc"]]])),g.push([i,x]))}else{const i=u.annotationDecoding[e];if(t===h.added)if("mention"===i.type)g.push([d.qyI,[...x,["+"],i.value]]);else if("start"===i.type)x=[...x,i.value];else if("end"===i.type)x=x.filter((e=>!l.Xy(e,i.value)));else if("equation"===i.type){const e=d.xey(i.value),t=d.qZ6(e,[...x,["+"]]);g.push(t)}else(0,c.t1)(i);else if(t===h.removed){if("mention"===i.type)g.push([d.qyI,[...x,["-"],i.value]]);else if("equation"===i.type){const e=d.xey(i.value),t=d.qZ6(e,[...x,["-"]]);g.push(t)}}else if(t===h.same)if("mention"===i.type)g.push([d.qyI,[...x,i.value]]);else if("start"===i.type)x=[...x,i.value];else if("end"===i.type)x=x.filter((e=>!l.Xy(e,i.value)));else if("equation"===i.type){const e=d.xey(i.value),t=d.qZ6(e,x);g.push(t)}else(0,c.t1)(i)}})),n&&(y+=1)})),d.Zxt(g)}},32566:(e,t,i)=>{i.d(t,{k:()=>o});i(67294);var n=i(45238),r=i(85893);const o=(0,n.I)("arrowRightSmaller",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M15.383 8.352a.877.877 0 01-.274.64l-5.156 5.14a.864.864 0 01-.617.266.831.831 0 01-.602-.234.795.795 0 01-.234-.586c0-.12.02-.232.063-.336a.912.912 0 01.187-.273l1.75-1.766 2.914-2.656.274.5-2.711.156H1.484c-.26 0-.471-.078-.632-.234a.851.851 0 01-.235-.617c0-.256.078-.461.235-.618a.856.856 0 01.632-.242h9.493l2.71.164-.273.508L10.5 5.5 8.75 3.727a.946.946 0 01-.188-.266.917.917 0 01-.062-.344c0-.234.078-.43.234-.586a.831.831 0 01.602-.234.79.79 0 01.328.07c.104.047.203.117.297.211l5.148 5.133a.877.877 0 01.274.64z"})})},30134:(e,t,i)=>{i.d(t,{c:()=>o});i(67294);var n=i(45238),r=i(85893);const o=(0,n.I)("export",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M3.0625 15.8174C2.32422 15.8174 1.76595 15.6305 1.3877 15.2568C1.00944 14.8831 0.820312 14.3294 0.820312 13.5957V6.86914C0.820312 6.13997 1.00944 5.58854 1.3877 5.21484C1.76595 4.83659 2.32422 4.64746 3.0625 4.64746H4.92871V5.99414H3.14453C2.82552 5.99414 2.58171 6.07845 2.41309 6.24707C2.24902 6.41113 2.16699 6.65951 2.16699 6.99219V13.4795C2.16699 13.8122 2.24902 14.0605 2.41309 14.2246C2.58171 14.3932 2.82552 14.4775 3.14453 14.4775H10.8486C11.1631 14.4775 11.4046 14.3932 11.5732 14.2246C11.7464 14.0605 11.833 13.8122 11.833 13.4795V6.99219C11.833 6.65951 11.7464 6.41113 11.5732 6.24707C11.4046 6.07845 11.1631 5.99414 10.8486 5.99414H9.07812V4.64746H10.9375C11.6758 4.64746 12.234 4.83659 12.6123 5.21484C12.9906 5.58854 13.1797 6.13997 13.1797 6.86914V13.5957C13.1797 14.3249 12.9906 14.8763 12.6123 15.25C12.234 15.6283 11.6758 15.8174 10.9375 15.8174H3.0625ZM7 11.3877C6.91797 11.3877 6.83822 11.374 6.76074 11.3467C6.68327 11.3148 6.60124 11.2578 6.51465 11.1758L4.21777 8.96094C4.10384 8.84245 4.04688 8.70801 4.04688 8.55762C4.04688 8.39811 4.09928 8.26823 4.2041 8.16797C4.31348 8.06771 4.44792 8.01758 4.60742 8.01758C4.7806 8.01758 4.92188 8.0791 5.03125 8.20215L5.98828 9.2207L6.43262 9.71973L6.36426 8.70117V1.61914C6.36426 1.45052 6.42578 1.30469 6.54883 1.18164C6.67643 1.05859 6.82682 0.99707 7 0.99707C7.17318 0.99707 7.32129 1.05859 7.44434 1.18164C7.57194 1.30469 7.63574 1.45052 7.63574 1.61914V8.70117L7.56738 9.71973L8.00488 9.2207L8.96191 8.20215C9.07585 8.0791 9.21712 8.01758 9.38574 8.01758C9.54069 8.01758 9.67285 8.06771 9.78223 8.16797C9.89616 8.26823 9.95312 8.39811 9.95312 8.55762C9.95312 8.70801 9.89388 8.84245 9.77539 8.96094L7.47852 11.1758C7.39648 11.2578 7.31673 11.3148 7.23926 11.3467C7.16178 11.374 7.08203 11.3877 7 11.3877Z"})})},82356:(e,t,i)=>{i.d(t,{l:()=>o});i(67294);var n=i(45238),r=i(85893);const o=(0,n.I)("import",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M13.291 14.5723C13.291 14.1484 12.9902 13.834 12.5732 13.834H8.06836C8.24609 13.8203 8.42383 13.7314 8.56055 13.5947L13.0586 9.08301C13.2158 8.91895 13.291 8.74121 13.291 8.54297C13.291 8.12598 12.9902 7.81836 12.5801 7.81836C12.3682 7.81836 12.1836 7.90039 12.0469 8.03711L10.4951 9.56836L8.69043 11.585L8.75195 10.1084V1.61133C8.75195 1.16016 8.44434 0.852539 8 0.852539C7.5625 0.852539 7.25488 1.16016 7.25488 1.61133V10.1084L7.30957 11.5781L5.50488 9.56836L3.95312 8.03711C3.82324 7.90039 3.63184 7.81836 3.42676 7.81836C3.0166 7.81836 2.70898 8.12598 2.70898 8.54297C2.70898 8.74121 2.78418 8.91895 2.94141 9.08301L7.44629 13.5947C7.58301 13.7314 7.75391 13.8203 7.93848 13.834H3.44043C3.0166 13.834 2.70898 14.1484 2.70898 14.5723C2.70898 14.9893 3.0166 15.3037 3.44043 15.3037H12.5732C12.9902 15.3037 13.291 14.9893 13.291 14.5723Z"})})},22686:(e,t,i)=>{i.d(t,{f:()=>o});i(67294);var n=i(45238),r=i(85893);const o=(0,n.I)("person",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,i)=>{i.d(t,{X:()=>o});i(67294);var n=i(45238),r=i(85893);const o=(0,n.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,r.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,r.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},44295:(e,t,i)=>{i.d(t,{I:()=>o});i(67294);var n=i(45238),r=i(85893);const o=(0,n.I)("random",{viewBox:"0 0 14 14",svg:(0,r.jsx)("path",{d:"M9.45002,6.2999567 C8.87013,6.2999567 8.40002,5.8298565 8.40002,5.24995625 C8.40002,4.670056 8.87013,4.1999558 9.45002,4.1999558 C10.0299,4.1999558 10.5,4.670056 10.5,5.24995625 C10.5,5.8298565 10.0299,6.2999567 9.45002,6.2999567 Z M4.55,6.2999567 C3.9701,6.2999567 3.5,5.8298565 3.5,5.24995625 C3.5,4.670056 3.9701,4.1999558 4.55,4.1999558 C5.1299,4.1999558 5.6,4.670056 5.6,5.24995625 C5.6,5.8298565 5.1299,6.2999567 4.55,6.2999567 Z M6.993,0 C10.864,0 14,3.13600534 14,7.000007 C14,10.8639987 10.864,14 6.993,14 C3.129,14 0,10.8639987 0,7.000007 C0,3.13600534 3.129,0 6.993,0 Z M7,12.5999994 C10.094,12.5999994 12.6,10.0939983 12.6,7.000007 C12.6,3.90600567 10.094,1.4000046 7,1.4000046 C3.906,1.4000046 1.4,3.90600567 1.4,7.000007 C1.4,10.0939983 3.906,12.5999994 7,12.5999994 Z M7,10.8499986 C5.369,10.8499986 3.976,9.83499821 3.416,8.4000076 L4.585,8.4000076 C5.075,9.23299796 5.964,9.7999982 7,9.7999982 C8.036,9.7999982 8.932,9.23299796 9.415,8.4000076 L10.584,8.4000076 C10.024,9.83499821 8.631,10.8499986 7,10.8499986 Z"})})}}]);