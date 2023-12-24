"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7866],{45669:(e,t,o)=>{o.d(t,{Z:()=>a});o(67294);var r=o(68939),i=o(78316),s=o(62896),n=o(85893);const a=function(e){let{collectionViewName:t,collectionViewType:o}=e;return t?(0,n.jsx)(s.Z,{children:t}):"page"===o?(0,n.jsx)(r.FormattedMessage,{id:"database.collectionView.untitledName.untitled",defaultMessage:"Untitled"}):(0,n.jsx)(r.FormattedMessage,{...i.b1[o]})}},93963:(e,t,o)=>{o.d(t,{z:()=>n});o(67294);var r=o(24405),i=o(68939),s=o(85893);function n(e){let{color:t,size:o,style:n}=e;window.__c={n:"StatusDot"};const a=(0,i.useIntl)(),l=(0,r.yK)((e=>({dot:{height:o||8,width:o||8,background:t||e.blueColor,flexShrink:0,borderRadius:"100%",pointerEvents:"none",...n}})),[o,t,n]);return(0,s.jsx)("div",{role:"img","aria-label":a.formatMessage({id:"statusDot.ariaLabel",defaultMessage:"New"}),style:l.dot})}},23160:(e,t,o)=>{o.r(t),o.d(t,{default:()=>oe});o(57658);var r=o(67294),i=o(83355),s=o(480),n=o(86628),a=o(40902),l=o(15145),d=o(41432),c=o(39068),u=o(68626),h=o(55061),p=o(89101),g=o(21202),m=o(6287),v=o(13493),b=o(70279),f=o(33709),y=o(15047),A=o(99108),S=o(97880),O=o(68939),x=o(51757),j=o(1136),M=o(45669),k=o(84076),_=o(63381),T=o(13658),w=o(17022),P=o(90060),R=o(12472),B=o(36081),C=o(22649),I=o(78976),Z=o(74970),V=o(24405),E=(o(92996),o(23867)),F=o(70203),D=o(82990),L=o(19719),N=o(95306),K=o(60682),U=o(14976),W=o(98165),G=o(62385),X=o(92559),Y=o(85893);function q(e){let{activity:t,tabArgs:o,rootStore:i,isLast:a}=e;window.__c={n:"CommentActivityUpdate"};const d=(0,n.VK)((()=>t.getEdits()),[t]),{source:c,tab:u,notification:h}=o;let p=d.filter((e=>{switch(e.type){case"comment-changed":return!1;case"comment-created":case"comment-deleted":return!0;default:(0,S.t1)(e)}}));0===p.length&&0!==d.length&&"updates_sidebar"!==c&&(p=d);const m=p.length>0,v=(0,s.O7)(),b=(0,n.VK)((()=>{const e=i.getRecordStore(i,{table:f.qF,id:t.discussion_id,spaceId:t.space_id});if(e.isDefined())return e}),[t,i]),y=(0,n.VK)((()=>{const e=null==b?void 0:b.getParentPointer();if(e)return x.G.createChildStore(i,e)}),[b,i]),A=(0,n.VK)((()=>Boolean(y&&y.isDefined())),[y]),j=(0,n.VK)((()=>{const e=null==y?void 0:y.getNavigableBlockStore();return(null==e?void 0:e.id)||t.navigable_block_id}),[t,y]),M=x.G.createChildStore(i,{table:g.iU,id:j}),R=(0,n.VK)((()=>M.isDefined()),[M]),B=(0,n.VK)((()=>Boolean(y&&(0,W.fl)((0,W.qA)(y)))),[y]),V=(0,n.VK)((()=>{if(!B||!y)return;const e=y.getModel();return e?e.getRenderUrl({getRecordModel:i.getRecordModel,discussionId:t.discussion_id,pageVisitSource:l.tY.Notification}):void 0}),[B,y,i,t]),E=(0,n.VK)((()=>(0,P.P6)({edits:p,rootStore:i})),[p,i]),F=(0,n.VK)((()=>(0,P.XW)(E)),[E]),D=B,L=(0,r.useCallback)((e=>{if((0,w.dG)({...o,environment:v,activity:t,mightCloseTab:D}),!B&&y&&b){var r;const i=e.target;N.oK({environment:v,discussionStore:b,rect:i.getBoundingClientRect(),blockStore:y,discussionLocation:J({forReplyMenu:!0,source:o.source}),activityId:t.id,notificationId:null===(r=o.notification)||void 0===r?void 0:r.id})}}),[t,B,y,b,v,o,D]),K=(0,r.useCallback)((()=>{(0,w.BE)({...o,environment:v,activity:t,mightCloseTab:D})}),[o,v,t,D]),U=(0,Y.jsx)(I.Z,{titledRecordStore:M,getRecordModel:i.getRecordModel,activity:t,tabArgs:o}),G=(0,n.VK)((()=>(0,P.jC)({recordId:j,recordType:g.iU,tab:u,rootStore:i,environment:v})),[j,u,i,v]),X=v.device.isMobile,q=(0,n.VK)((()=>J({source:c,forReplyMenu:!1})),[c]),H=(0,n.VK)((()=>(0,P.cr)({activity:t,rootStore:i})),[t,i]),Q=null==H?void 0:H.id,ee=null==H?void 0:H.context,te=(0,n.VK)((()=>parseInt(t.end_time)),[t]);return m&&R&&A&&b?(0,Y.jsxs)(Z.ZP,{timestamp:te,header:(0,Y.jsx)("span",{children:(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} commented in {blockName}} other {{authorOrAuthors} commented in {blockName}}}",values:{numberOfAuthors:E.length,authorOrAuthors:F,blockName:U},id:"activity.commentActivity.header"})}),isLast:a,isPrivate:G,rootStore:i,navigableBlockId:j,icon:(0,Y.jsx)(Z.BE,{authors:E}),showSnapshotButton:!1,...(0,w.h9)({notification:h,environment:v,tab:u,activity:t}),children:[(0,Y.jsx)(z,{url:V,onClick:L,discussionId:Q,discussionContext:ee,alwaysHighlightWithBlockBar:!1,rootStore:i,source:c}),(0,Y.jsx)(T.Z,{visible:5,items:p.map(((e,t,o)=>(0,Y.jsx)(k.Z,{onClick:L,href:V,innerStyle:(0,C.OD)({source:c,isMobile:X}),children:(0,Y.jsx)(_.Z,{edit:e,rootStore:i,type:"comment-edit",discussionLocation:q,onReactionClick:K,hideAuthorName:!1})},t)))}),(0,Y.jsx)($,{activity:t,rootStore:i,tabArgs:o})]}):null}function z(e){window.__c={n:"CommentContext"};const{url:t,onClick:o,rootStore:r,source:i,discussionId:a,alwaysHighlightWithBlockBar:l,discussionContext:d}=e,c=0===(0,F.llS)(d).length||l,u=(0,s.O7)(),h=u.device.isMobile,p=(0,V.Fg)(),g=(0,V.yK)((e=>({linkbox:{...(0,C.OD)({source:i,isMobile:h}),display:"flex",alignItems:"center",fontSize:14,...c&&{color:e.mediumTextColor},paddingTop:2,paddingBottom:6,marginBottom:0}})),[h,i,c]),m=(0,n.VK)((()=>(0,U.IY)({environment:u,textValue:d?{value:d,spaceId:r.id}:void 0,parentStore:r,disableHover:!0,disableStyleAnnotations:c,disableInsertedDeletedAnnotations:c,disableDateStyleAnnotations:!1,disabled:!0,highlightDiscussionId:a,theme:p,emojiType:(0,K.e_)(u),katex:u.KatexStore.getKatex(),formulaValueTypes:[]})),[r,u,d,a,p,c]);return d?(0,Y.jsxs)(k.Z,{href:t,onClick:o,innerStyle:g.linkbox,children:[c&&(0,Y.jsx)(X.Z,{}),(0,Y.jsx)("div",{style:D.Z.textOverflowStyle,children:m})]}):null}function $(e){window.__c={n:"CommentActions"};const{activity:t,rootStore:o,tabArgs:i}=e,{source:a,notification:l,tab:d}=i,c=(0,n.VK)((()=>{const e=o.getRecordStore(o,{table:f.qF,id:t.discussion_id,spaceId:t.space_id});if(e.isDefined())return e}),[t,o]),u=(0,s.O7)(),h=u.device.isMobile,p=(0,n.VK)((()=>x.t1.createChildStore(o,{table:f.qF,id:t.discussion_id,spaceId:(0,E.C)(o.pointer.spaceId)})),[t,o]),m=(0,n.VK)((()=>null==c?void 0:c.getParentId()),[c]),v=(0,r.useCallback)((e=>{if(!m)return;const r=x.G.createChildStore(o,{table:g.iU,id:m}),i=e.target,s=null==l?void 0:l.id;N.oK({environment:u,discussionStore:p,rect:i.getBoundingClientRect(),blockStore:r,discussionLocation:J({forReplyMenu:!0,source:a}),activityId:t.id,notificationId:s}),"notifications_tab"===a&&L.gY({environment:u,notificationId:s,alreadyRead:Boolean(null==l?void 0:l.read),activity:t,tab:d})}),[t,p,u,l,m,o,a,d]),b=(0,V.yK)((e=>({container:{paddingLeft:(0,C.c3)({source:a,isMobile:h}),paddingTop:12,paddingBottom:4},actionButton:(0,C.b9)(e)})),[h,a]),y=Boolean(null==l?void 0:l.visited);return c?(0,Y.jsxs)("div",{style:b.container,children:[(0,Y.jsx)(G.Z,{onClick:v,style:b.actionButton,children:(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"Reply",id:"activity.replyButton.label"})}),y&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(H,{}),(0,Y.jsx)(R.D,{tabArgs:i,environment:u,rootStore:o,activity:t})]})]}):null}function H(){return(0,Y.jsx)("div",{style:{width:5,display:"inline-block"}})}function J(e){const{forReplyMenu:t,source:o}=e;if("updates_sidebar"===o)return t?"reply_menu_updates_sidebar":"updates_sidebar";return`${t?"reply_menu_":"updates_menu_"}${L.Jn()}`}const Q=r.memo(q),ee={width:12,height:12,display:"inline-block",verticalAlign:"middle",marginBottom:2,marginRight:4};class te extends i.Z{constructor(){super(...arguments),this.renderBlockEdit=(e,t,o)=>{const{tabArgs:r}=this.props,{source:i}=r;let s=this.getRecordModel({table:g.iU,id:e.block_id});s&&s.type===d.Ti.tableRow&&(s=this.getRecordModel({table:g.iU,id:s.parent_id}));const n=s?s.getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:l.tY.Activity}):p._j.root,a=this.environment.device.isMobile;return"block-deleted"===e.type?e.block_data.block_value.type===d.Ti.page?(0,Y.jsx)(k.Z,{href:n,onClick:()=>(0,w.dG)({...r,environment:this.environment,activity:o}),innerStyle:(0,C.OD)({source:i,isMobile:a}),children:(0,Y.jsx)(_.Z,{edit:e,rootStore:this.props.rootStore})},t):(0,Y.jsx)("div",{style:(0,C.OD)({source:i,isMobile:a}),children:(0,Y.jsx)(_.Z,{edit:e,rootStore:this.props.rootStore})},t):(0,Y.jsx)(k.Z,{href:n,onClick:()=>(0,w.dG)({...r,environment:this.environment,activity:o}),innerStyle:(0,C.OD)({source:i,isMobile:a}),children:(0,Y.jsx)(_.Z,{edit:e,rootStore:this.props.rootStore})},t)}}UNSAFE_willMountOrUpdate(){!function(e,t){if("commented"===e.type){const r=se({table:f.qF,id:e.discussion_id,spaceId:e.space_id},t);if(r.isDefined()){const e=r.getCommentStores();for(const t of e){var o;null===(o=t.getCreatedByStore())||void 0===o||o.load()}}}}(this.props.activity,this.props.rootStore),this.environment.KatexStore.loadIfNeeded((()=>function(e,t){const o=(0,P.cr)({activity:e,rootStore:t});if(!o)return;return o.context}(this.props.activity,this.props.rootStore)))}renderComponent(){const{activity:e,rootStore:t,tabArgs:o,isLast:r}=this.props,i=e.type;if(!a.KN(i))return u.log({level:"error",from:"ActivityUpdate",type:"unsupportedActivityType",data:{message:`Activity type ${i} is not supported for ActivityUpdate`}}),null;switch(i){case"block-edited":return this.renderBlockEditActivity(e);case"collection-row-created":case"collection-row-deleted":return this.renderCollectionRowActivity(e);case"top-level-block-created":case"top-level-block-deleted":return this.renderTopLevelBlockActivity(e);case"permissions-edited":return this.renderPermissionsActivity(e);case"permission-group-edited":return this.renderPermissionGroupActivity(e);case"commented":return(0,Y.jsx)(Q,{activity:e,tabArgs:o,rootStore:t,isLast:r});case"collection-edited":return this.renderCollectionEdited(e);case"collection-view-edited":return this.renderCollectionViewEdited(e);case"collection-property-edited":return this.renderCollectionPropertyEdited(e);case"page-locked":case"page-unlocked":return this.renderPageLockActivity(e);case"page-deleted":case"page-restored":case"page-permanently-deleted":return(0,Y.jsx)(le,{tabArgs:this.props.tabArgs,rootStore:this.props.rootStore,isLast:this.props.isLast,activity:e});default:(0,S.t1)(i)}}renderBlockEditActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i}=t,s=e.getEdits();if(!s.length)return;const n=(0,A.hI)(s).filter((e=>{const{block_value:t}="block-changed"===e.type?e.block_data.after:e.block_data;return t.parent_table!==b.x_}));if(0===n.length)return;const a=this.getBlockStore(n[0].navigable_block_id);if(!a.isDefined())return;const l=(0,P.P6)({edits:n,rootStore:o}),d=(0,P.XW)(l),c=(0,Y.jsx)(I.Z,{titledRecordStore:a,activity:e,tabArgs:t,getRecordModel:o.getRecordModel});return(0,Y.jsxs)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited {pageTitle}} other {{authorOrAuthors} edited {pageTitle}}}",id:"activity.blockEdited.header",values:{numberOfAuthors:l.length,authorOrAuthors:d,pageTitle:c}})}),isLast:this.props.isLast,isPrivate:(0,P.jC)({recordId:a.id,recordType:"block",tab:i,rootStore:o,environment:this.environment}),rootStore:this.props.rootStore,navigableBlockId:a.id,icon:(0,Y.jsx)(Z.BE,{authors:l}),showSnapshotButton:ie(this.props.tabArgs),...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:[(0,Y.jsx)(T.Z,{visible:5,items:n.map(((t,o)=>this.renderBlockEdit(t,o,e)))}),(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})]})}renderCollectionRowActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i}=t,s=e.getEdits();if(!s.length)return;const n=s[0],a=this.getBlockStore(e.collection_row_id);if(!a.isDefined())return;if(!a.getProperties())return;const l=(0,P.P6)({edits:s,rootStore:o}),d=(0,P.XW)(l),c=(0,Y.jsx)(I.Z,{titledRecordStore:a,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),u="collection-row-created"===n.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created {pageTitle}} other {{authorOrAuthors} created {pageTitle}}}",values:{numberOfAuthors:l.length,authorOrAuthors:d,pageTitle:c},id:"activity.collectionRowCreated.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted {pageTitle}} other {{authorOrAuthors} deleted {pageTitle}}}",values:{numberOfAuthors:l.length,authorOrAuthors:d,pageTitle:c},id:"activity.collectionRowDeleted.header"});return(0,Y.jsx)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:u}),isLast:this.props.isLast,isPrivate:(0,P.jC)({recordId:a.id,recordType:"block",tab:i,rootStore:o,environment:this.environment}),rootStore:this.props.rootStore,navigableBlockId:a.id,icon:(0,Y.jsx)(Z.BE,{authors:l}),showSnapshotButton:ie(this.props.tabArgs),...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})})}renderTopLevelBlockActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i}=t,s=e.getEdits();if(!s.length)return;const n=s[0],a=this.getBlockStore(e.top_level_block_id);if(!a.isDefined())return;const l=a.hasSpacePermission(),d=(0,P.P6)({edits:s,rootStore:o}),c=(0,P.XW)(d),u=(0,Y.jsx)(I.Z,{titledRecordStore:a,activity:e,tabArgs:t,getRecordModel:o.getRecordModel});let h;return h=l?"top-level-block-created"===n.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created workspace page {pageTitle}} other {{authorOrAuthors} created workspace page {pageTitle}}}",values:{numberOfAuthors:d.length,authorOrAuthors:c,pageTitle:u},id:"activity.topLevelBlockWorkspaceCreated.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted workspace page {pageTitle}} other {{authorOrAuthors} deleted workspace page {pageTitle}}}",values:{numberOfAuthors:d.length,authorOrAuthors:c,pageTitle:u},id:"activity.topLevelBlockWorkspaceDeleted.header"}):"top-level-block-created"===n.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created private page {pageTitle}} other {{authorOrAuthors} created private page {pageTitle}}}",values:{numberOfAuthors:d.length,authorOrAuthors:c,pageTitle:u},id:"activity.topLevelBlockPrivateCreated.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted private page {pageTitle}} other {{authorOrAuthors} deleted private page {pageTitle}}}",values:{numberOfAuthors:d.length,authorOrAuthors:c,pageTitle:u},id:"activity.topLevelBlockPrivateDeleted.header"}),(0,Y.jsx)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:h}),isLast:this.props.isLast,isPrivate:(0,P.jC)({recordId:a.id,recordType:"block",tab:i,rootStore:o,environment:this.environment}),rootStore:this.props.rootStore,icon:(0,Y.jsx)(Z.BE,{authors:d}),showSnapshotButton:!1,...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i})})}renderPermissionsActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i,source:s}=t,n=e.getEdits();if(!n.length)return;const l=(0,A.hI)(n);if(0===l.length)return;let d,c;const u=l[0];if(u.navigable_block_id){const r=this.getBlockStore(u.navigable_block_id);if(!r.isDefined())return;c=(0,Y.jsx)(I.Z,{titledRecordStore:r,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),d=(0,P.jC)({recordId:r.id,recordType:"block",tab:i,rootStore:o,environment:this.environment})}else{const r=ne(u.space_id,this.props.rootStore);if(!r.isDefined())return;c=(0,Y.jsx)(I.Z,{titledRecordStore:r,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),d=(0,P.jC)({recordId:u.space_id,recordType:"space",tab:i,rootStore:o,environment:this.environment})}const{autojoinEdits:h,inheritanceEdits:p,otherEdits:g}=a.md(l),m=[];h.forEach(((t,s)=>{const n=(0,P.P6)({edits:[t],rootStore:o}),a=(0,P.XW)(n);m.push((0,Y.jsx)(Z.ZP,{timestamp:t.timestamp,header:(0,Y.jsx)("span",{children:(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} joined {pageOrSpaceName}} other {{authorOrAuthors} joined {pageOrSpaceName}}}",values:{numberOfAuthors:n.length,authorOrAuthors:a,pageOrSpaceName:c},id:"activity.permissionsActivity.header"})}),isLast:this.props.isLast,isPrivate:d,rootStore:this.props.rootStore,navigableBlockId:t.navigable_block_id,icon:(0,Y.jsx)(Z.BE,{authors:n}),showSnapshotButton:!1,...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i})},`autojoin-${s}`))}));const v=this.environment.device.isMobile;p.forEach(((n,a)=>{const l=(0,P.P6)({edits:[n],rootStore:o}),u=(0,P.XW)(l);let h;"permission-restriction-created"===n.type?h=(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} restricted access for {pageOrSpaceName}} other {{authorOrAuthors} restricted access for {pageOrSpaceName}}}{inSudoMode, select, true { using administrator privileges} other {}}",values:{numberOfAuthors:l.length,authorOrAuthors:u,pageOrSpaceName:c,inSudoMode:n.inSudoMode},id:"activity.restrictPermissionsForActivity.header"}):"permission-restriction-deleted"===n.type&&(h=(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} restored inherited access for {pageOrSpaceName}} other {{authorOrAuthors} restored inherited access for {pageOrSpaceName}}}{inSudoMode, select, true { using administrator privileges} other {}}",values:{numberOfAuthors:l.length,authorOrAuthors:u,pageOrSpaceName:c,inSudoMode:n.inSudoMode},id:"activity.restorePermissionsForActivity.header"})),m.push((0,Y.jsxs)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:h}),isLast:this.props.isLast,isPrivate:d,rootStore:this.props.rootStore,navigableBlockId:n.navigable_block_id,icon:(0,Y.jsx)(Z.BE,{authors:l}),showSnapshotButton:!1,...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:[(0,Y.jsx)("div",{style:(0,C.OD)({source:s,isMobile:v}),children:(0,Y.jsx)(_.Z,{edit:n,rootStore:this.props.rootStore})}),(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:v,environment:this.environment,rootStore:o})]},`inheritance-${a}`))}));const b=(n,a,l)=>{if(n.length>0){const c=(0,P.P6)({edits:n,rootStore:o});m.push((0,Y.jsxs)(Z.ZP,{timestamp:parseInt(e.end_time),header:l,isLast:this.props.isLast,isPrivate:d,rootStore:this.props.rootStore,navigableBlockId:u.navigable_block_id,icon:(0,Y.jsx)(Z.BE,{authors:c}),showSnapshotButton:!1,...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:[n.map(((e,t,o)=>(0,Y.jsx)("div",{style:(0,C.OD)({source:s,isMobile:v}),children:(0,Y.jsx)(_.Z,{edit:e,rootStore:this.props.rootStore},t)},t))),(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})]},a))}},f=g.filter((e=>!e.inSudoMode));if(f.length>0){const e=(0,P.P6)({edits:f,rootStore:o}),t=(0,P.XW)(e);b(f,"other",(0,Y.jsx)("span",{children:(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} updated permission for {pageOrSpaceName}} other {{authorOrAuthors} updated permission for {pageOrSpaceName}}}",values:{numberOfAuthors:e.length,authorOrAuthors:t,pageOrSpaceName:c},id:"activity.updatedPermissionsForActivity.header"})}))}const y=g.filter((e=>e.inSudoMode));if(y.length>0){const e=(0,P.P6)({edits:y,rootStore:o}),t=(0,P.XW)(e);b(y,"other-sudo",(0,Y.jsx)("span",{children:(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} updated permission for {pageOrSpaceName}} other {{authorOrAuthors} updated permission for {pageOrSpaceName}}} using administrator privileges",values:{numberOfAuthors:e.length,authorOrAuthors:t,pageOrSpaceName:c},id:"activity.updatedPermissionsForActivityInSudoMode.header"})}))}return m}renderPermissionGroupActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i,source:s}=t,n=e.getEdits();if(!n.length)return;const a=(0,A.hI)(n),l=a[0];if(!l)return;const d=ne(l.space_id,this.props.rootStore);if(!d.isDefined())return;const c=(0,w.ME)(d.getModel().getRenderUrl({})),u=(0,Y.jsx)(B.Z,{permissionGroup:(0,h.c_)({activity:e,getRecordValue:this.getRecordValue}),spaceId:e.space_id}),p=(0,P.P6)({edits:a,rootStore:o}),g=this.environment.device.isMobile;return(0,Y.jsxs)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:(0,Y.jsx)(re,{activity:e,authors:p,groupName:u})}),isLast:this.props.isLast,isPrivate:(0,P.jC)({recordId:e.space_id,recordType:"space",tab:i,rootStore:o,environment:this.environment}),rootStore:o,icon:(0,Y.jsx)(Z.BE,{authors:p}),showSnapshotButton:!1,...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:[(0,Y.jsx)(k.Z,{href:c,onClick:()=>(0,w.dG)({...t,environment:this.environment,activity:e}),innerStyle:(0,C.OD)({source:s,isMobile:g}),children:(0,Y.jsx)(_.Z,{edit:l,rootStore:o})}),(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:g,environment:this.environment,rootStore:o})]})}renderCollectionEdited(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i}=t,s=e.getEdits();if(!s.length)return;const n=se({table:m.v,id:e.collection_id,spaceId:e.space_id},this.props.rootStore);if(!n.isDefined())return;const d=s[0];if(!d)return;const c=n.getModel().getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:l.tY.Activity}),u=(0,P.P6)({edits:s,rootStore:o}),h=(0,P.XW)(u),p=(0,Y.jsx)(I.Z,{titledRecordStore:n,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),g="collection-created"===d.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created {collectionTitle}} other {{authorOrAuthors} created {collectionTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,collectionTitle:p},id:"activity.collectionCreated.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited {collectionTitle}} other {{authorOrAuthors} edited {collectionTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,collectionTitle:p},id:"activity.collectionEdited.header"});return(0,Y.jsxs)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:g}),isLast:this.props.isLast,isPrivate:(0,P.jC)({recordId:e.collection_id,recordType:"collection",tab:i,rootStore:o,environment:this.environment}),rootStore:o,navigableBlockId:e.navigable_block_id,icon:(0,Y.jsx)(Z.BE,{authors:u}),showSnapshotButton:ie(this.props.tabArgs),...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:[a.OC(d)&&(0,Y.jsx)(ae,{tabArgs:this.props.tabArgs,rootStore:this.props.rootStore,edit:d,url:c}),(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})]})}renderCollectionViewEdited(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i}=t,s=e.getEdits();if(!s.length)return;const n=se({table:m.v,id:e.collection_id,spaceId:e.space_id},this.props.rootStore);if(!n.isDefined())return;const a=se({table:v.n,id:e.collection_view_id,spaceId:e.space_id},this.props.rootStore);if(!a.isDefined())return;const l=(0,A.hI)(s),d=l[0];if(!d)return;const c=this.renderCollectionViewTitle(a,e),u=(0,Y.jsx)(I.Z,{titledRecordStore:n,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),h=(0,P.P6)({edits:l,rootStore:o}),p=(0,P.XW)(h);let g;return g="collection-view-created"===d.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created view {collectionViewTitle} in {collectionTitle}} other {{authorOrAuthors} created view {collectionViewTitle} in {collectionTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,collectionTitle:u,collectionViewTitle:c},id:"activity.collectionViewCreated.header"}):"collection-view-deleted"===d.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted view {collectionViewTitle} in {collectionTitle}} other {{authorOrAuthors} deleted view {collectionViewTitle} in {collectionTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,collectionTitle:u,collectionViewTitle:c},id:"activity.collectionViewDeleted.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited view {collectionViewTitle} in {collectionTitle}} other {{authorOrAuthors} edited view {collectionViewTitle} in {collectionTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,collectionTitle:u,collectionViewTitle:c},id:"activity.collectionViewEdited.header"}),(0,Y.jsx)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:g}),isLast:this.props.isLast,isPrivate:(0,P.jC)({recordId:e.collection_id,recordType:"collection",tab:i,rootStore:o,environment:this.environment}),rootStore:o,navigableBlockId:e.navigable_block_id,icon:(0,Y.jsx)(Z.BE,{authors:h}),showSnapshotButton:ie(this.props.tabArgs),...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})})}renderCollectionPropertyEdited(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i}=t,s=e.getEdits();if(!s.length)return;const n=(0,A.hI)(s),a=n[0];if(!a)return;const d=se({table:m.v,id:e.collection_id,spaceId:e.space_id},this.props.rootStore);if(!d.isDefined())return;const c=d.getModel().getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:l.tY.Activity}),u="collection-property-changed"===a.type?a.collection_property_data.after:a.collection_property_data,h=(0,P.P6)({edits:n,rootStore:o}),p=(0,P.XW)(h),g=(0,Y.jsx)(I.Z,{titledRecordStore:d,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),v=this.renderCollectionPropertyTitle(u);let b;return b="collection-property-created"===a.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created property {collectionPropertyTitle} in {collectionTitle}} other {{authorOrAuthors} created property {collectionPropertyTitle} in {collectionTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,collectionTitle:g,collectionPropertyTitle:v},id:"activity.collectionPropertyCreated.header"}):"collection-property-deleted"===a.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted property {collectionPropertyTitle} in {collectionTitle}} other {{authorOrAuthors} deleted property {collectionPropertyTitle} in {collectionTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,collectionTitle:g,collectionPropertyTitle:v},id:"activity.collectionPropertyDeleted.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited property {collectionPropertyTitle} in {collectionTitle}} other {{authorOrAuthors} edited property {collectionPropertyTitle} in {collectionTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,collectionTitle:g,collectionPropertyTitle:v},id:"activity.collectionPropertyEdited.header"}),(0,Y.jsxs)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:b}),isLast:this.props.isLast,isPrivate:(0,P.jC)({recordId:e.collection_id,recordType:"collection",tab:i,rootStore:o,environment:this.environment}),rootStore:o,navigableBlockId:e.navigable_block_id,icon:(0,Y.jsx)(Z.BE,{authors:h}),showSnapshotButton:ie(this.props.tabArgs),...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:[(0,Y.jsx)(T.Z,{visible:5,items:n.map((e=>(0,Y.jsx)(de,{tabArgs:this.props.tabArgs,rootStore:this.props.rootStore,edit:e,url:c},e.collection_property_id)))}),(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})]})}renderPageLockActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:i}=t,s=e.getEdits();if(!s.length)return;const n=s[0],a=this.getBlockStore(n.navigable_block_id);if(!a.isDefined())return;const l=(0,P.P6)({edits:s,rootStore:o}),d=(0,P.XW)(l),c=(0,Y.jsx)(I.Z,{titledRecordStore:a,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),u="page-locked"===e.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} locked {blockTitle}} other {{authorOrAuthors} locked {blockTitle}}}",values:{numberOfAuthors:l.length,authorOrAuthors:d,blockTitle:c},id:"activity.pageLocked.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} unlocked {blockTitle}} other {{authorOrAuthors} unlocked {blockTitle}}}",values:{numberOfAuthors:l.length,authorOrAuthors:d,blockTitle:c},id:"activity.pageUnlocked.header"});return(0,Y.jsx)(Z.ZP,{timestamp:parseInt(e.end_time),header:(0,Y.jsx)("span",{children:u}),isPrivate:(0,P.jC)({recordId:a.id,recordType:"block",tab:i,rootStore:o,environment:this.environment}),isLast:this.props.isLast,rootStore:o,navigableBlockId:a.id,icon:(0,Y.jsx)(Z.BE,{authors:l}),showSnapshotButton:!1,...(0,w.h9)({notification:r,activity:e,environment:this.environment,tab:i}),children:(0,Y.jsx)(R.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})})}renderCollectionPropertyTitle(e){const{theme:t}=this;return(0,Y.jsxs)("span",{style:{...C.nP,whiteSpace:"nowrap"},children:[(0,Y.jsx)(c.ZP,{icon:e.icon,type:e.type,size:12,style:ee,theme:t}),e.name]})}renderCollectionViewTitle(e,t){const{tabArgs:o}=this.props;if(!e.isDefined())return;const r=e.getModel().getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:l.tY.Activity}),i=e.getFormat().collection_view_icon,s=e.getType();return(0,Y.jsxs)(k.Z,{href:r,onClick:()=>(0,w.V3)({environment:this.environment,activity:t,...o}),external:!1,innerStyle:{...C.lS,...C.nP},inline:!0,children:[(0,Y.jsx)(j.F,{viewIcon:i,viewType:s,color:"light",style:{display:"inline-block",verticalAlign:"middle",marginRight:4,marginBottom:2},size:12}),(0,Y.jsx)(M.Z,{collectionViewName:e.getName(),collectionViewType:e.getType()})]})}get getRecordValue(){return this.props.rootStore.getRecordValue}get getRecordModel(){return this.props.rootStore.getRecordModel}getBlockStore(e){return x.G.createChildStore(this.props.rootStore,{table:g.iU,id:e})}}te.displayName="ActivityUpdate";const oe=te;function re(e){const{activity:t,authors:o,groupName:r}=e,i=(0,P.XW)(o),s=(0,A.hI)(t.getEdits())[0];return s?"permission-group-created"===s.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created group {groupName}} other {{authorOrAuthors} created group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:(0,Y.jsx)("span",{style:C.nP,children:r})},id:"activity.updatedPermissionGroupCreated.header"}):"permission-group-deleted"===s.type?(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted group {groupName}} other {{authorOrAuthors} deleted group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:(0,Y.jsx)("span",{style:C.nP,children:r})},id:"activity.updatedPermissionGroupDeleted.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited group {groupName}} other {{authorOrAuthors} edited group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:(0,Y.jsx)("span",{style:C.nP,children:r})},id:"activity.updatedPermissionGroupEditedDefault.header"}):(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited group {groupName}} other {{authorOrAuthors} edited group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:(0,Y.jsx)("span",{style:C.nP,children:r})},id:"activity.updatedPermissionGroupEdit.header"})}function ie(e){return"pageUpdatesSidebar"===e.tab}function se(e,t){return t.getRecordStore(t,e)}function ne(e,t){return x.H2.createChildStore(t,{table:y.bx,id:e})}function ae(e){let{edit:t,url:o,tabArgs:r,rootStore:i}=e;window.__c={n:"CollectionDescriptionEditComponent"};const n=(0,s.O7)(),{source:a}=r,l=n.device.isMobile;return(0,Y.jsx)(k.Z,{href:o,innerStyle:(0,C.OD)({source:a,isMobile:l}),children:(0,Y.jsx)(_.Z,{edit:t,rootStore:i})})}function le(e){let{activity:t,tabArgs:o,rootStore:r,isLast:i}=e;window.__c={n:"PageDeleteOrRestoreActivityComponent"};const a=(0,s.O7)(),{notification:l,tab:d}=o,c=(0,n.VK)((()=>t.getEdits()),[t]),u=c[0],h=(0,n.VK)((()=>(0,P.P6)({edits:c,rootStore:r})),[c,r]),p=(0,n.VK)((()=>se({table:g.iU,id:u.navigable_block_id,spaceId:u.space_id},r)),[u,r]),m=(0,n.VK)((()=>p.isDefined()),[p]),v=(0,n.VK)((()=>(0,P.jC)({recordId:p.id,recordType:"block",tab:d,rootStore:r,environment:a})),[p,a,r,d]),b=(0,n.VK)((()=>(0,P.XW)(h)),[h]),f=(0,n.VK)((()=>t.type),[t]),y=(0,n.VK)((()=>t.end_time),[t]);if(!c.length||!u||!m)return null;const A=(0,Y.jsx)(I.Z,{titledRecordStore:p,activity:t,tabArgs:o,getRecordModel:r.getRecordModel});let x;return"page-deleted"===f?x=(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted {blockTitle}} other {{authorOrAuthors} deleted {blockTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:b,blockTitle:A},id:"emailActivity.pageDeleted.header"}):"page-restored"===f?x=(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} restored {blockTitle}} other {{authorOrAuthors} restored {blockTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:b,blockTitle:A},id:"emailActivity.pageRestored.header"}):"page-permanently-deleted"===f?x=(0,Y.jsx)(O.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} permanently deleted {blockTitle}} other {{authorOrAuthors} permanently deleted {blockTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:b,blockTitle:A},id:"emailActivity.pagePermanentlyDeleted.header"}):(0,S.t1)(f),(0,Y.jsx)(Z.ZP,{timestamp:parseInt(y),header:(0,Y.jsx)("span",{children:x}),isPrivate:v,isLast:i,rootStore:r,navigableBlockId:p.id,icon:(0,Y.jsx)(Z.BE,{authors:h}),showSnapshotButton:!1,...(0,w.h9)({notification:l,activity:t,environment:a,tab:d}),children:(0,Y.jsx)(R.Z,{tabArgs:o,activity:t,isMobile:a.device.isMobile,environment:a,rootStore:r})})}function de(e){let{edit:t,url:o,tabArgs:r,rootStore:i}=e;window.__c={n:"CollectionPropertyEditComponent"};const n=(0,s.O7)();if("collection-property-changed"!==t.type)return null;const{source:a}=r,l=n.device.isMobile;return(0,Y.jsx)(k.Z,{href:o,innerStyle:(0,C.OD)({source:a,isMobile:l}),children:(0,Y.jsx)(_.Z,{edit:t,rootStore:i})})}}}]);