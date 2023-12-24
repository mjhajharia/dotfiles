"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6715],{37834:(e,t,i)=>{i.d(t,{FF:()=>f,U4:()=>h,gs:()=>v,jN:()=>u,xx:()=>x,zb:()=>b});i(67294);var o=i(23867),n=i(82990),a=i(68939),s=i(77080),r=i(46096),l=i(50906),d=i(54642),c=i(47307),m=i(92625),g=i(85893);const p=(0,a.defineMessages)({restoringPreviousVersion:{id:"historyModalActions.restoringPreviousVersion.loadingMessage",defaultMessage:"Restoring…"}});function u(e){const{environment:t,from:i,...o}=e;l.ya1(t,i),r.Z.setState({...o,open:!0,size:50})}const f=()=>{const e=r.Z.state;e.open&&r.Z.setState({...e,size:e.size+20})},h=function(){r.Z.setState({open:!1})};function v(e){const{environment:t,snapshot:i,nextFutureSnapshot:o}=e;l.qDg(t,i);const n=r.Z.state;n.open&&r.Z.setState({...n,snapshot:i,nextFutureSnapshot:o,openSnapshotNearTimestamp:void 0})}function b(){const e=r.Z.state;e.open&&r.Z.setState({...e,snapshot:void 0,nextFutureSnapshot:void 0})}async function x(e){if(!r.Z.state.open)return;if(!r.Z.state.snapshot)return;const t="restore_collection",i=r.Z.state.pageHasCollection,u=s.default.checkGate("snapshot_optional_collection_rollback_enabled")&&i?[{key:t,text:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Also restore databases on this page",id:"historyModal.confirmDialog.selectOption.collection"}),description:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"All database pages will be restored to the previous version, which may impact other users or database views.",id:"historyModal.confirmDialog.selectOption.collection.description"})}]:void 0,{accept:f,selectionResult:v}=await c.confirmUserActionV2({message:(0,g.jsx)("div",{style:{fontWeight:n.Z.fontWeight.semibold,fontSize:"medium"},children:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Restore to this version?",id:"historyModal.confirmDialog.description"})}),acceptLabel:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Restore",id:"historyModal.confirmDialog.restoreButton.label"}),selectionItems:u});if(!f)return;l.R9m(e,r.Z.state.snapshot),m.j({message:p.restoringPreviousVersion});const b=await d.restoreSnapshot(e,{block:{id:r.Z.state.blockStore.id,spaceId:(0,o.C)(r.Z.state.blockStore.pointer.spaceId)},timestamp:r.Z.state.snapshot.timestamp,shouldRestoreCollection:(null==v?void 0:v.restore_collection)??!1}).next();b.value.error&&c.showErrorMessage(b.value.error.message),m.x(),h()}},67706:(e,t,i)=>{i.d(t,{Z:()=>l});i(67294);var o=i(24405),n=i(82990),a=i(53437),s=i(26388),r=i(85893);function l(e){let{text:t,tooltipText:i,icon:l}=e;window.__c={n:"InlineTextWithIconTooltip"};const d=(0,o.yK)((e=>({icon:{height:"1em",width:"1em",marginRight:"0.25em",fill:e.mediumIconColor,marginBottom:"0.1em"},tooltip:{background:e.contentBackground,boxShadow:e.lightBoxShadow},container:{display:"flex",alignItems:"center",fontWeight:n.Z.fontWeight.regular,color:e.mediumTextColor,fontSize:n.Z.fontSize.UISmall.desktop,textAlign:"center"},text:{display:"inline"}})),[]);return(0,r.jsx)(s.Z,{style:d.tooltip,render:e=>(0,r.jsx)("div",{style:d.text,...e,children:t}),renderTooltip:()=>(0,r.jsxs)("div",{style:d.container,children:[l(d.icon),(0,r.jsx)("div",{children:i})]}),alignment:a.ZP.Alignment.Start,placement:a.ZP.Placement.Bottom})}},37444:(e,t,i)=>{i.d(t,{IX:()=>j,MY:()=>R,ZP:()=>K,_E:()=>F,hn:()=>D,zF:()=>N});var o=i(67294),n=i(480),a=i(86628),s=i(24405),r=i(69651),l=i(8504),d=i(21202),c=i(82990),m=i(54642),g=i(17659),p=i(37834),u=i(39699),f=i(43250),h=i(12534),v=i(33929),b=i(16402),x=i(26350),y=i(4761),M=i(11066),k=i(73063),C=i(26388),S=i(67706),w=i(30573),Z=i(32469),A=i(93963),I=i(85893);const j=24,R=4,L=28+j+12;function _(e){window.__c={n:"InboxNotificationSection"};const{notification:t,prominentTitleLink:i,children:r,rootStore:l,icon:d,isPrivate:c,onArchiveClicked:p,onUnarchiveClicked:v,onMarkAsReadClicked:b,onMarkAsUnreadClicked:x,onNotificationBodyClicked:k,navigableBlockId:C,url:S,showSnapshotButton:w,timestamp:j,header:_,isLast:N,clickLoggingData:F}=e,D=(0,n.O7)(),K=(0,n.Fy)(),[V,z]=(0,o.useState)(!1),[W,P]=(0,o.useState)(!1),H=(0,a.VK)((()=>"mentions"===y.ZP.state.currentTab),[]),O=!t||t.read,G=K.isMobile,E=(0,a.VK)((()=>{const e=D.WindowSizeStore.state;return{left:e.paddingLeftCSS,right:e.paddingRightCSS}}),[D.WindowSizeStore]),J=(0,s.yK)((e=>({article:{display:"flex",flexDirection:"column"},mainClickTargetButton:{borderRadius:6,paddingTop:16-R,paddingBottom:16-R,paddingLeft:G?E.left:0,paddingRight:G?E.right:0,margin:R,opacity:O?.7:1},headerAndAvatar:{display:"flex",paddingLeft:12-R,paddingRight:24-R,gap:12,maxWidth:"100%"},avatarAndStatusDot:{display:"flex",gap:8,alignItems:"center",height:"fit-content"},statusDotSpacer:{width:8,flexShrink:0},privatePageBadge:{marginTop:1,marginBottom:4,marginLeft:8},children:{paddingLeft:L-R,paddingRight:16-R},divider:{width:`calc(100% - ${L-R}px)`,height:1,backgroundColor:e.stroke.deemphasized,alignSelf:"end"}})),[O,E,G]),$=(0,o.useCallback)((e=>{if(!t||t.read)return;if(W)return;const i={notification_page_id:C,notification_type:null==t?void 0:t.type};(0,h.ZP)({event:e,context:h.Af.NotificationClick,callback:()=>{k({...i,...F}),"commented"!==t.type||t.read||m.setNotificationsStatus(D,{spaceId:t.space_id,notificationIds:[t.id],read:!0}),u.createAndCommit({userAction:"ActivityNotificationSection.handleMarkAsRead",environment:D,perform:e=>{g.$h({notification:t,rootStore:l,transaction:e,read:!0})}})}})}),[D,W,t,C,k,F,l]),Q=(0,o.useCallback)((()=>z(!0)),[]),q=(0,o.useCallback)((()=>z(!1)),[]),X=(0,o.useId)();return(0,I.jsxs)("article",{style:J.article,onMouseOver:Q,onMouseLeave:q,onClick:$,"aria-labelledby":X,tabIndex:0,children:[(0,I.jsx)(T,{notification:t,rootStore:l,isMobile:G,isHovered:V,onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),onArchiveClicked:p,onUnarchiveClicked:v,onMarkAsReadClicked:b,onMarkAsUnreadClicked:x}),(0,I.jsxs)(M.Z,{href:S,style:J.mainClickTargetButton,disabled:!Boolean(S),children:[(0,I.jsxs)("div",{style:J.headerAndAvatar,children:[(0,I.jsxs)("div",{className:f.FoE,style:J.avatarAndStatusDot,children:[H&&!O?(0,I.jsx)(A.z,{size:8}):(0,I.jsx)("div",{style:J.statusDotSpacer}),d]}),(0,I.jsx)(B,{timestamp:j,header:_,prominentTitleLink:i,hasChildren:Boolean(r),titleAriaId:X,isNotificationRead:O}),w&&C&&(0,I.jsx)(U,{timestamp:j,navigableBlockId:C,rootStore:l}),c&&!t&&(0,I.jsx)(Z.Z,{style:J.privatePageBadge})]}),r&&(0,I.jsx)("div",{style:J.children,className:f.nU_,children:r})]}),!N&&(0,I.jsx)("div",{style:J.divider})]})}const N=16,F=9;function T(e){window.__c={n:"InboxActions"};const{notification:t,rootStore:i,isMobile:o,isHovered:n,onArchiveClicked:a,onUnarchiveClicked:r,onMarkAsReadClicked:l,onMarkAsUnreadClicked:d,onMouseEnter:c,onMouseLeave:m}=e,g=(0,s.yK)((()=>({container:{display:"flex",alignItems:"flex-start",position:"relative"},body:{transition:"opacity 100ms ease-out",opacity:o||n?1:0,position:"absolute",right:o?F:N,top:9,zIndex:1}})),[o,n]);return t?(0,I.jsx)("div",{style:g.container,onMouseEnter:c,onMouseLeave:m,children:(0,I.jsx)("div",{style:g.body,children:(0,I.jsx)(w.Z,{notification:t,rootStore:i,onArchiveClicked:a,onUnarchiveClicked:r,onMarkAsReadClicked:l,onMarkAsUnreadClicked:d,useInboxRedesign:!0})})}):null}function B(e){window.__c={n:"Header"};const{timestamp:t,prominentTitleLink:i,header:o,hasChildren:a,titleAriaId:l,isNotificationRead:d}=e,m=(0,n.Fy)().isMobile,g=(0,b.IS)(t,{useUltraCompactFormat:!0}),p=(0,b.uy)(t),u=(0,s.yK)((e=>({container:{display:"flex",flexDirection:"column",width:"100%"},containerMobile:{display:"flex"},headerMobile:{fontSize:14,minWidth:0},header:{display:"inline-grid",gridAutoFlow:"column",justifyContent:"space-between",fontSize:14,minWidth:0},headlineMobile:{display:"inline",fontWeight:d?c.Z.fontWeight.regular:c.Z.fontWeight.medium,whiteSpace:"pre-wrap",wordBreak:"break-word"},headline:{flexShrink:2,fontWeight:d?c.Z.fontWeight.regular:c.Z.fontWeight.medium,whiteSpace:"pre-wrap",wordBreak:"break-word"},title:{fontSize:14,marginTop:4,marginBottom:a?8:4},time:{display:"flex",fontSize:12,color:e.lightTextColor,whiteSpace:"nowrap",...m&&{display:"inline"},paddingLeft:6,marginTop:2}})),[a,m,d]);return(0,I.jsxs)("div",{style:m?u.containerMobile:u.container,children:[(0,I.jsxs)("div",{style:m?u.headerMobile:u.header,children:[(0,I.jsx)("div",{style:m?u.headlineMobile:u.headline,className:f.NFf,id:l,children:o}),(0,I.jsx)("div",{style:u.time,className:f.CZG,children:(0,I.jsx)(S.Z,{text:g,tooltipText:p,icon:r.C})})]}),m&&(0,I.jsx)("div",{style:{width:96,flexShrink:0}}),i&&(0,I.jsx)("div",{style:u.title,children:i})]})}function U(e){window.__c={n:"SnapshotButton"};const{timestamp:t,navigableBlockId:i,rootStore:o}=e,a=(0,n.O7)();if(t<new Date("2018-10-26").getTime())return null;const s=v.default.getIntl().formatMessage({defaultMessage:"View version for this update",id:"activitySection.viewVersionForUpdate.tooltip"}),r=()=>{const e=x.G.createChildStore(o,{table:d.iU,id:i});p.jN({environment:a,blockStore:e,openSnapshotNearTimestamp:t.toString(),from:"activity"})};return(0,I.jsx)(C.Z,{renderTooltip:()=>s,render:e=>(0,I.jsx)(k.Z,{ariaLabel:s,onClick:r,icon:l.J,...e})})}function D(e){window.__c={n:"InboxIconCircleWrapper"};const{children:t}=e,i=(0,s.yK)((e=>({container:{borderRadius:"100%",display:"flex",flexShrink:0,justifyContent:"center",alignItems:"center",height:j,width:j,backgroundColor:"light"===e.mode?"rgb(244,244,244)":e.tint.regular},icon:{height:16,width:16,fill:e.icon.secondary}})),[]);return(0,I.jsx)("div",{style:i.container,children:t})}const K=o.memo(_)},22649:(e,t,i)=>{i.d(t,{OD:()=>l,TL:()=>m,_W:()=>c,b9:()=>g,c3:()=>d,e9:()=>s,lS:()=>a,nP:()=>r});var o=i(82990);const n={userSelect:"text",WebkitUserSelect:"text"},a={padding:1,...n},s={display:"inline-flex",marginRight:2,verticalAlign:"text-top"},r={fontWeight:o.Z.fontWeight.semibold};function l(e){return{padding:0,paddingLeft:d(e),paddingRight:16,paddingBottom:3,...n}}function d(e){const{source:t,isMobile:i}=e;return"notifications_tab"===t?52+(i?3:2):52}function c(e){return{height:26,paddingLeft:8,paddingRight:8,color:e.mediumTextColor}}function m(e){return{display:"inline",whiteSpace:"normal",marginRight:e?3:0,wordBreak:"break-word",...r}}function g(e){return{boxShadow:e.plainButtonBoxShadow,height:26,paddingLeft:8,paddingRight:8,fontWeight:500,color:e.regularTextColor}}},30573:(e,t,i)=>{i.d(t,{Z:()=>V});var o=i(67294),n=i(480),a=i(86628),s=i(24405),r=i(52867),l=i(90334),d=i(5686),c=i(8843),m=i(70753),g=i(61248),p=i(55863),u=i(55061),f=i(21202),h=i(82990),v=i(68939),b=i(62967),x=i(19719),y=i(54642),M=i(17659),k=i(39699),C=i(12534),S=i(87279),w=i(98742),Z=i(24764),A=i(57538),I=i(77080),j=i(26350),R=i(48019),L=i(31945),_=i(73063),N=i(78140),F=i(72495),T=i(26388),B=i(64369),U=i(85893);const D=(0,v.defineMessages)({changePageNotificationSettings:{defaultMessage:"Change page notification settings",id:"inboxActionsMenu.notificationSettings.tooltipMessage"},markUnread:{defaultMessage:"Mark this notification as unread",id:"inboxActionsMenu.markNotificationAsUnread.tooltipMessage"},markRead:{defaultMessage:"Mark this notification as read",id:"inboxActionsMenu.markNotificationAsRead.tooltipMessage"},archive:{defaultMessage:"Archive this notification",id:"inboxActionsMenu.handleArchive.tooltipMessage"},unarchive:{defaultMessage:"Unarchive",id:"inboxActionsMenu.handleUnarchive.tooltipMessage"}});function K(e){window.__c={n:"InboxActionsMenu"};const{notification:t,rootStore:i,onArchiveClicked:K,onUnarchiveClicked:V,onMarkAsReadClicked:z,onMarkAsUnreadClicked:W,useInboxRedesign:P}=e,H=(0,n.O7)(),O=(0,n.Fy)(),G=(0,v.useIntl)(),E=(0,a.VK)((()=>!!t&&(0,u.$2)(t.type)),[t]),J=(0,a.VK)((()=>{const e=null==t?void 0:t.navigable_block_id;if(e)return j.G.createChildStore(i,{table:f.iU,id:e})}),[i,t]),$=(0,a.VK)((()=>null==J?void 0:J.getFollowSettingsKey()),[J]),Q=(0,a.VK)((()=>{if(!$)return[];if(!J)return[];const e="inbox";return I.default.checkGate("property_updates_notifications")?Z.CA({followSettingsKey:$,environment:H,blockStore:J,from:e}):Z.Zk({followSettingsKey:$,environment:H,blockStore:J,from:e})}),[$,H,J]),q=(0,a.VK)((()=>E&&Q.length>0),[E,Q]),[X,Y]=(0,o.useState)(!1),ee=(0,o.useCallback)((e=>{t&&(0,C.ZP)({event:e,context:C.Af.NotificationClick,callback:()=>{if(K(),P&&"commented"===t.type){Y(!0);return(async()=>{try{await y.setNotificationsStatus(H,{spaceId:t.space_id,notificationIds:[t.id],archived:!0})}finally{Y(!1)}})(),void(t.read||M.Jl("mentions",t.space_id,(e=>Math.max(e-1,0))))}k.createAndCommit({userAction:"InboxActionsMenu.handleArchive",environment:H,perform:e=>{M.aZ({notification:t,rootStore:i,transaction:e})}})}})}),[H,t,K,i,P]),te=(0,o.useCallback)((e=>{t&&(0,C.ZP)({event:e,context:C.Af.NotificationClick,callback:()=>{V(),P&&"commented"===t.type?y.setNotificationsStatus(H,{spaceId:t.space_id,notificationIds:[t.id],archived:!1}):k.createAndCommit({userAction:"Activity.handleUnarchive",environment:H,perform:e=>{M.E1({notificationId:t.id,visited:!1,rootStore:i,transaction:e})}})}})}),[H,t,V,i,P]),ie=(0,o.useCallback)((e=>{t&&(0,C.ZP)({event:e,context:C.Af.NotificationClick,callback:()=>{t.read?W():z(),P&&"commented"===t.type&&y.setNotificationsStatus(H,{spaceId:t.space_id,notificationIds:[t.id],read:!t.read}),k.createAndCommit({userAction:"InboxActionsMenu.toggleNotificationReadStatus",environment:H,perform:e=>{M.$h({notification:t,rootStore:i,transaction:e,read:!t.read})}})}})}),[H,t,z,W,i,P]),oe=(0,o.useCallback)((()=>{$&&J&&t&&x.Z8({environment:H,notificationId:t.id,pageId:J.pointer.id,isCurrentlyFollowing:(0,A.Z)($).following,from:"inbox"})}),[H,J,$,t]),ne=(0,s.yK)((e=>({container:{...P?{display:"flex",height:"min-content",borderWidth:1,borderStyle:"solid",borderColor:e.stroke.regular,background:e.buttonGroupBackground,borderRadius:6,padding:2}:{display:"flex",height:"min-content",background:e.buttonGroupBackground,boxShadow:e.lightBoxShadow,borderRadius:4,padding:2}},button:{...P&&{height:O.isMobile?30:26,width:O.isMobile?30:26}},inboxIconBase:{fill:e.icon.secondary,stroke:e.icon.secondary,strokeOpacity:1,strokeWidth:.25},iconStyle:{fill:e.mediumIconColor,padding:2},readIcon:{width:O.isMobile?21:19,height:O.isMobile?22:20},archiveIcon:{width:O.isMobile?24:23,height:O.isMobile?24:23},ellipsisIcon:{width:O.isMobile?24:23,height:O.isMobile?24:23},headerLabel:{paddingLeft:16,paddingRight:16,paddingTop:10,fontWeight:h.Z.fontWeight.semibold}})),[O,P]);return t?P&&t.visited?(0,U.jsx)("div",{style:ne.container,children:(0,U.jsx)(T.Z,{renderTooltip:()=>G.formatMessage(D.unarchive),render:e=>(0,U.jsx)(_.Z,{ariaLabel:G.formatMessage(D.unarchive),style:ne.button,icon:p.s,iconStyle:{...ne.iconStyle,...ne.inboxIconBase},onClick:te,...e})})}):(0,U.jsxs)("div",{style:ne.container,children:[(0,U.jsx)(T.Z,{renderTooltip:()=>G.formatMessage(t.read?D.markUnread:D.markRead),render:e=>(0,U.jsx)(_.Z,{ariaLabel:G.formatMessage(t.read?D.markUnread:D.markRead),style:ne.button,icon:P?t.read?c.h:d.J:t.read?g.F:m.F,iconStyle:{...ne.iconStyle,...ne.readIcon,...P&&{...t.read?{height:17,width:17}:{height:16,width:16},...ne.inboxIconBase}},onClick:ie,...e})}),(0,U.jsx)(T.Z,{renderTooltip:()=>G.formatMessage(D.archive),render:e=>(0,U.jsx)(_.Z,{ariaLabel:G.formatMessage(D.archive),style:ne.button,icon:r.H,iconStyle:{...ne.iconStyle,...ne.archiveIcon,...P&&{height:18,width:18,...ne.inboxIconBase}},disabled:X,onClick:ee,...e})}),q&&(0,U.jsx)(T.Z,{renderTooltip:()=>(0,U.jsx)(v.FormattedMessage,{...D.changePageNotificationSettings}),render:e=>(0,U.jsx)(L.ZP,{popupType:O.isMobile?L.Z4.SlideUp:L.Z4.Popup,alignmentToOrigin:L.vR.Start,placementToOrigin:L.pO.Bottom,render:e=>(0,U.jsx)(N.Z,{menuType:S.og.Popup,minWidth:290,maxHeight:"50vh",maxWidth:O.isMobile?"100vw":void 0,header:(0,U.jsx)(B.Z,{style:ne.headerLabel,isSmall:!0,isSecondaryColor:!0,children:(0,U.jsx)(v.FormattedMessage,{id:"UpdateSidebarTabUpdatesHeader.pageNotificationSettings.label",defaultMessage:"Page notification settings"})}),children:(0,U.jsx)(R.Z,{context:{blocks:[],environment:H,publicEditMode:void 0},sections:[(0,b.$J)({key:"in-app-notifications-section",render:e=>(0,U.jsx)(F.Z,{...e}),actions:Q.map((e=>e.action))})],initialFocus:void 0,onAccept:()=>e.close()})}),renderOrigin:t=>(0,U.jsx)(_.Z,{ariaLabel:G.formatMessage(D.changePageNotificationSettings),style:ne.button,icon:l.O,iconStyle:{...ne.iconStyle,...ne.archiveIcon,...P&&{height:18,width:18,...ne.inboxIconBase}},...e,...(0,w.Z)(t,{onClick:()=>oe()})})})})]}):null}const V=o.memo(K)},24764:(e,t,i)=>{i.d(t,{t0:()=>k,Zk:()=>y,CA:()=>x});i(67294);var o=i(92996),n=i(98519),a=i(97880),s=i(68939),r=i(62967),l=i(57883),d=i(50906),c=i(9953),m=i(39699);function g(e){const{environment:t,key:i,selectedKey:o,following:n,followSettings:a,navigableBlockId:s,userId:r,spaceId:g,from:p}=e;m.createAndCommit({userAction:"UpdateSidebarFollowControl.setFollowing",environment:e.environment,canUndo:!1,perform:t=>{c.Ue({environment:e.environment,table:l.t0,args:{following:n,followSettings:a,navigableBlockId:s,userId:r,spaceId:g},inMemoryRecordCache:e.environment.defaultRecordCache.inMemoryRecordCache,transaction:t})}}),n?d.RJe(t,{from:"page_updates"}):d.ubm(t,{from:"page_updates"}),o!==i&&d.kLN(t,{from:p,navigableBlockId:s,oldSetting:o,newSetting:i})}var p=i(64964),u=i(93405),f=i(64369),h=i(80444),v=i(57538),b=i(85893);function x(e){const{followSettingsKey:t,environment:i,blockStore:n,from:a}=e,r=M({key:"none",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.repliesAndMentions.label",defaultMessage:"Replies and @mentions"}),environment:i,blockStore:n,from:a}),l=M({key:"comments",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.allComments.label",defaultMessage:"All comments"}),environment:i,blockStore:n,from:a}),d=M({key:"all",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.allUpdates.label",defaultMessage:"All updates"}),caption:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.simpleAllUpdates.caption",defaultMessage:"All comments and property changes"}),environment:i,blockStore:n,from:a}),c=n.getAssociatedCollectionStore();if(!c)return[l,r];const m=c.getDatabaseType();if(m===o.iS){return[d,M({key:"important",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.importantUpdatesTasks.label",defaultMessage:"Important updates"}),caption:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.importantUpdatesTasks.caption",defaultMessage:"All comments and changes to Status, Assignee, or Due Date"}),environment:i,blockStore:n,from:a}),r]}if(m===o.wW){return[d,M({key:"important",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.importantUpdatesProjects.label",defaultMessage:"Important updates"}),caption:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.importantUpdatesProjects.caption",defaultMessage:"All comments and changes to Status or Date"}),environment:i,blockStore:n,from:a}),r]}return[d,M({key:"comments",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.onlyCommentsAllComments.label",defaultMessage:"All comments"}),environment:i,blockStore:n,from:a}),r]}function y(e){const{followSettingsKey:t,environment:i,blockStore:o,from:n}=e;return[M({key:"important",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"inAppNotificationsFollowingOptionsHelpers.allComments.label",defaultMessage:"All comments"}),caption:(0,b.jsx)(s.FormattedMessage,{id:"inAppNotificationsFollowingOptionsHelpers.allComments.caption",defaultMessage:"Notified of all comments and @mentions"}),environment:i,blockStore:o,from:n}),M({key:"none",selectedKey:t,title:(0,b.jsx)(s.FormattedMessage,{id:"inAppNotificationsFollowingOptionsHelpers.mentionsAndReplies.label",defaultMessage:"Replies and @mentions"}),caption:(0,b.jsx)(s.FormattedMessage,{id:"inAppNotificationsFollowingOptionsHelpers.mentionsAndReplies.caption",defaultMessage:"Notified of comment replies and @mentions"}),environment:i,blockStore:o,from:n})]}function M(e){const{key:t,title:i,caption:o,selectedKey:a,environment:s,blockStore:l,from:d}=e,c=k({key:t,userSelectedKey:a}),m={icon:{width:14,height:14},rightWrapper:o?{alignSelf:"flex-start",paddingTop:2}:{}};return{action:(0,r.cN)({key:t,displayName:void 0,analyticsName:t,validators:[],closeParentMenu:!0,action:()=>{const{currentUserRootStore:e}=h.default.state;if(e){const{following:i,followSettings:o}=(0,v.Z)(t),n=e.id,r=l.id,c=l.getSpaceId();g({environment:s,following:i,followSettings:o,navigableBlockId:r,spaceId:c,userId:n,from:d,key:t,selectedKey:a}),"inbox"!==d&&"more_menu"!==d||p.d4({item:{label:C(t)},undoFunc:()=>{const{following:e,followSettings:i}=(0,v.Z)(a);g({environment:s,following:e,followSettings:i,navigableBlockId:r,spaceId:c,userId:n,from:d,key:t,selectedKey:a})}})}},render:e=>(0,b.jsx)(u.Z,{...e,title:(0,b.jsx)(f.Z,{children:i}),caption:o,shouldWrapCaption:!0,right:c?(0,n.k)(m.icon):(0,b.jsx)("div",{style:m.icon}),rightStyle:m.right})}),title:i,isSelectedOption:c}}function k(e){const{key:t,userSelectedKey:i}=e;return"important"===i||"comments"===i?"important"===t||"comments"===t:t===i}function C(e){switch(e){case"none":return(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.subscribedRepliesAndMentionsSuccess.snackbarMessage",defaultMessage:"Subscribed to replies and @mentions"});case"comments":return(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.subscribedAllCommentsSuccess.snackbarMessage",defaultMessage:"Subscribed to all comments"});case"important":return(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.subscribedImportantUpdatesSuccess.snackbarMessage",defaultMessage:"Subscribed to important updates"});case"all":return(0,b.jsx)(s.FormattedMessage,{id:"GetNotifiedDropdown.subscribedAllUpdatesSuccess.snackbarMessage",defaultMessage:"Subscribed to all updates"});default:(0,a.t1)(e)}}},57538:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(57883),n=i(97880);function a(e){switch(e){case"all":return{following:!0,followSettings:(0,o.yI)({explicitly_set_by_user:!0})};case"important":return{following:!0,followSettings:(0,o.GC)({explicitly_set_by_user:!0})};case"comments":return{following:!0,followSettings:(0,o.r$)({explicitly_set_by_user:!0})};case"none":return{following:!1,followSettings:(0,o.vU)({explicitly_set_by_user:!0})};default:(0,n.t1)(e)}}},46096:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(49085);class n extends o.default{getInitialState(){return{open:!1}}}const a=new n},52867:(e,t,i)=>{i.d(t,{H:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("archive",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M4.083 14.585h7.499c1.347 0 2.064-.697 2.064-2.037V5.739c.664-.11 1.019-.608 1.019-1.34V3.36c0-.834-.458-1.36-1.299-1.36H2.3C1.499 2 1 2.526 1 3.36V4.4c0 .73.355 1.23 1.019 1.34v6.808c0 1.347.717 2.037 2.064 2.037zM2.579 4.728c-.342 0-.478-.144-.478-.486v-.724c0-.342.136-.486.478-.486h10.514c.342 0 .472.144.472.486v.724c0 .342-.13.486-.472.486H2.579zm1.49 8.825c-.615 0-.95-.335-.95-.95V5.76h9.427v6.842c0 .616-.342.95-.95.95H4.069zM5.58 8.515h4.512c.287 0 .492-.199.492-.5v-.218c0-.3-.205-.492-.492-.492H5.58c-.287 0-.485.191-.485.492v.219c0 .3.198.499.485.499z"})})},90334:(e,t,i)=>{i.d(t,{O:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("ellipsis",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M2.887 9.014c.273 0 .52-.064.738-.192.219-.132.394-.307.526-.526.133-.219.199-.46.199-.725 0-.405-.142-.747-.424-1.025a1.41 1.41 0 00-1.04-.417c-.264 0-.505.066-.724.198a1.412 1.412 0 00-.718 1.244c0 .265.064.506.192.725.132.219.307.394.526.526.219.128.46.192.725.192zm5.113 0a1.412 1.412 0 001.244-.718c.132-.219.198-.46.198-.725 0-.405-.14-.747-.423-1.025A1.386 1.386 0 008 6.129c-.264 0-.506.066-.725.198a1.412 1.412 0 00-.718 1.244c0 .265.064.506.192.725.132.219.308.394.526.526.22.128.46.192.725.192zm5.106 0c.265 0 .506-.064.725-.192.219-.132.394-.307.526-.526.133-.219.199-.46.199-.725 0-.405-.142-.747-.424-1.025a1.394 1.394 0 00-1.026-.417 1.474 1.474 0 00-1.265.718c-.127.218-.19.46-.19.724 0 .265.063.506.19.725.133.219.308.394.527.526.223.128.47.192.738.192z"})})},5686:(e,t,i)=>{i.d(t,{J:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("mailOpen",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M2.88965 15.9277C2.17415 15.9277 1.63639 15.75 1.27637 15.3945C0.920898 15.0436 0.743164 14.515 0.743164 13.8086V7.00684C0.743164 6.76074 0.756836 6.54427 0.78418 6.35742C0.816081 6.17057 0.863932 6.00423 0.927734 5.8584C0.996094 5.71257 1.08496 5.57812 1.19434 5.45508C1.30371 5.32747 1.43815 5.19987 1.59766 5.07227L6.88184 0.916016C7.12793 0.715495 7.36035 0.558268 7.5791 0.444336C7.80241 0.325846 8.03939 0.266602 8.29004 0.266602C8.54069 0.266602 8.77539 0.325846 8.99414 0.444336C9.21745 0.558268 9.45215 0.715495 9.69824 0.916016L14.9824 5.07227C15.1419 5.19987 15.2764 5.32747 15.3857 5.45508C15.4951 5.57812 15.5817 5.71257 15.6455 5.8584C15.7139 6.00423 15.7617 6.17057 15.7891 6.35742C15.821 6.54427 15.8369 6.76074 15.8369 7.00684V13.8086C15.8369 14.515 15.6569 15.0436 15.2969 15.3945C14.9414 15.75 14.4059 15.9277 13.6904 15.9277H2.88965ZM2.84863 14.8818H13.7314C14.0687 14.8818 14.3285 14.7907 14.5107 14.6084C14.6976 14.4307 14.791 14.1641 14.791 13.8086V6.82227C14.791 6.6582 14.7751 6.51921 14.7432 6.40527C14.7113 6.29134 14.6611 6.19108 14.5928 6.10449C14.529 6.01335 14.4424 5.92448 14.333 5.83789L9.11035 1.76367C8.94173 1.63607 8.80046 1.53809 8.68652 1.46973C8.57259 1.39681 8.44043 1.36035 8.29004 1.36035C8.13965 1.36035 8.00749 1.39681 7.89355 1.46973C7.77962 1.53809 7.63835 1.63607 7.46973 1.76367L2.24707 5.83789C2.1377 5.92448 2.04883 6.01335 1.98047 6.10449C1.91667 6.19108 1.86882 6.29134 1.83691 6.40527C1.80501 6.51921 1.78906 6.6582 1.78906 6.82227V13.8086C1.78906 14.1641 1.88021 14.4307 2.0625 14.6084C2.24479 14.7907 2.50684 14.8818 2.84863 14.8818ZM1.51562 14.6357L6.88184 9.37207C7.11882 9.13509 7.35352 8.96419 7.58594 8.85938C7.82292 8.75456 8.06217 8.70215 8.30371 8.70215C8.54525 8.70215 8.78223 8.75456 9.01465 8.85938C9.24707 8.96419 9.48405 9.13509 9.72559 9.37207L15.085 14.6357L14.374 15.3467L9.13086 10.1787C8.98047 10.0283 8.83691 9.92122 8.7002 9.85742C8.56803 9.78906 8.43587 9.75488 8.30371 9.75488C8.16699 9.75488 8.03027 9.78906 7.89355 9.85742C7.76139 9.92122 7.6224 10.0283 7.47656 10.1787L2.2334 15.3467L1.51562 14.6357ZM5.81543 10.6094L1.5498 6.3916L2.26074 5.68066L6.5332 9.90527L5.81543 10.6094ZM10.0742 9.90527L14.3398 5.68066L15.0508 6.3916L10.7852 10.6094L10.0742 9.90527Z"})})},8843:(e,t,i)=>{i.d(t,{h:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("mailRound",{viewBox:"0 0 17 12",svg:(0,n.jsx)("path",{d:"M3.09961 11.9639H14.1055C15.3359 11.9639 16.0469 11.2529 16.0469 9.84473V2.29785C16.0469 0.896484 15.3291 0.185547 13.9004 0.185547H2.89453C1.66406 0.185547 0.953125 0.889648 0.953125 2.29785V9.84473C0.953125 11.2598 1.6709 11.9639 3.09961 11.9639ZM7.68652 6.41992L2.52539 1.32715C2.67578 1.26562 2.85352 1.23145 3.05859 1.23145H13.9414C14.1533 1.23145 14.3379 1.26562 14.4883 1.33398L9.34082 6.41992C9.04688 6.71387 8.78027 6.84375 8.51367 6.84375C8.24023 6.84375 7.97363 6.70703 7.68652 6.41992ZM1.99902 9.84473V2.29785C1.99902 2.24316 1.99902 2.27051 1.99902 2.22266L5.92969 6.08496L2.00586 9.96094C1.99902 9.92676 1.99902 9.88574 1.99902 9.84473ZM15.001 2.30469V9.85156C15.001 9.87891 15.001 9.91309 15.001 9.94043L11.0977 6.08496L15.001 2.24316C15.001 2.30469 15.001 2.30469 15.001 2.30469ZM3.05859 10.918C2.86719 10.918 2.70312 10.8906 2.55957 10.8291L6.64746 6.78906L7.0918 7.22656C7.57031 7.69824 8.02832 7.89648 8.51367 7.89648C8.99219 7.89648 9.45703 7.69824 9.93555 7.22656L10.3799 6.78906L14.4609 10.8223C14.3105 10.8906 14.1396 10.918 13.9414 10.918H3.05859Z"})})},70753:(e,t,i)=>{i.d(t,{F:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("notificationRead",{viewBox:"0 0 18 18",svg:(0,n.jsx)("path",{d:"M3.066 17.998h11.846c2.05 0 3.066-1.016 3.066-3.027V3.047c0-2.012-1.015-3.027-3.066-3.027H3.066C1.026.02 0 1.025 0 3.047V14.97c0 2.021 1.025 3.027 3.066 3.027Zm.02-1.572c-.977 0-1.514-.518-1.514-1.533V3.125c0-1.016.537-1.533 1.514-1.533h11.807c.966 0 1.513.517 1.513 1.533v11.768c0 1.015-.547 1.533-1.513 1.533Zm4.844-2.793c.322 0 .595-.156.79-.46l4.464-7.02c.117-.196.234-.41.234-.626 0-.44-.39-.722-.791-.722-.254 0-.498.156-.684.44l-4.052 6.503-1.924-2.49c-.235-.313-.45-.39-.713-.39a.759.759 0 0 0-.762.77c0 .216.088.42.225.606l2.383 2.93c.244.322.507.459.83.459Z"})})},61248:(e,t,i)=>{i.d(t,{F:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("notificationUnread",{viewBox:"0 0 20 21.5",svg:(0,n.jsx)("path",{d:"M0 14.521c0 1.67.146 3.057 1.143 4.053.996.996 2.402 1.153 4.062 1.153h7.588c1.67 0 3.076-.157 4.072-1.153s1.143-2.383 1.143-4.053v-6.65c-.43.147-.899.225-1.387.205-.068.02-.117.02-.185.03v6.68c0 1.015-.127 2.05-.723 2.646-.586.586-1.64.722-2.647.722H4.941c-1.005 0-2.06-.136-2.656-.722-.586-.596-.713-1.631-.713-2.647V6.768c0-1.026.127-2.08.713-2.666.596-.596 1.66-.723 2.686-.723h6.738c0-.068.01-.127.02-.186-.02-.488.058-.957.205-1.386H5.186c-1.641 0-3.047.156-4.043 1.152C.146 3.955 0 5.352 0 6.982Zm16.426-7.744c1.846 0 3.379-1.533 3.379-3.388C19.805 1.533 18.27 0 16.425 0a3.403 3.403 0 0 0-3.388 3.389 3.403 3.403 0 0 0 3.389 3.388Z"})})},8504:(e,t,i)=>{i.d(t,{J:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("versionHistoryThick",{viewBox:"0 0 14 14",svg:(0,n.jsx)("path",{d:"M0 7C0 3.136 3.129 0 6.993 0C10.864 0 14 3.136 14 7C14 10.864 10.864 14 6.993 14C3.129 14 0 10.864 0 7ZM1.4 7C1.4 10.094 3.906 12.6 7 12.6C10.094 12.6 12.6 10.094 12.6 7C12.6 3.906 10.094 1.4 7 1.4C3.906 1.4 1.4 3.906 1.4 7ZM6.3 3.5H7.35V7.175L10.5 9.044L9.975 9.905L6.3 7.7V3.5Z"})})},70693:(e,t,i)=>{i.d(t,{mb:()=>r,nK:()=>l,pe:()=>d});var o=i(40506),n=i(7057),a=i(53877),s=i(42875);function r(e){const{dateTime:t,intl:i,shortenDateAndRange:o}=e,s=a.OQ.toPersistedDate(t.valueOf());return n.ZV({value:s,allowRelativeDates:!0,intl:i,shortenDateAndRange:o,displayInUserTimezone:!0})}function l(e){const{dateTime:t,intl:i,userTimeZone:o,displayInUserTimezone:s,alwaysIncludeTimezone:r}=e,l=a.OQ.toPersistedDateTime(t.valueOf(),t.zoneName);return n.ZV({value:l,allowRelativeDates:!0,intl:i,userTimeZone:o,displayInUserTimezone:s,alwaysIncludeTimezone:r})}function d(e){const{luxonRange:t,intl:i}=e,r=a.OQ.toPersistedDateRange(t),l=n.ZV({value:r,allowRelativeDates:!1,shortenDateAndRange:!0,intl:i,displayInUserTimezone:!0}),d=t.end.setZone((0,s.r)()),c=n.mr({start_time:d.toFormat(o.jK),humanReadable:!1,intl:i});return i.formatMessage({id:"verification.timeRange",defaultMessage:"{formattedDateRange} at {formattedEndTime}"},{formattedDateRange:l,formattedEndTime:c})}}}]);