"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2523],{14694:(e,t,i)=>{i.d(t,{Z:()=>c});i(67294);var r=i(480),s=i(86628),n=i(24405),o=i(39567),a=i(50659),l=i(85893);function d(){window.__c={n:"AliasIcon"};const e=(0,n.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,l.jsx)("div",{children:(0,o.Y)(e.icon)})}function c(e){var t;window.__c={n:"SidebarItem"};const i=(0,r.O7)(),o=i.device.isMobile,c=(0,s.VK)((()=>{var t,r;if(o)return i.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(r=e.style)||void 0===r?void 0:r.paddingLeft:10)}),[i.WindowSizeStore,o,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),h=(0,n.yK)((t=>({wrapper:{...o?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:c,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,minHeight:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,a.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:o?28:22,height:o?24:18,marginLeft:-3,marginRight:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:4,color:t.mediumTextColor,width:o?26:22,height:o?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!o?"clip":"ellipsis",...e.childrenStyle}})),[o,c,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle]);return(0,l.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:h.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,l.jsx)("div",{style:h.left,children:e.left}),e.icon&&(0,l.jsxs)("div",{style:h.icon,children:[e.icon,e.isAlias&&(0,l.jsx)(d,{})]}),(0,l.jsx)("div",{style:h.children,children:e.children}),e.right&&(0,l.jsx)("div",{style:h.right,children:e.right})]})}},5480:(e,t,i)=>{i.d(t,{Z:()=>ge});var r=i(67294),s=i(83355),n=i(480),o=i(86628),a=i(24405),l=i(97107),d=i(68939),c=i(50906),h=i(42858),u=i(39699),p=i(98742),g=i(36896),m=i(44604),f=i(80444),S=i(64921),b=i(31945),x=i(79954),v=i(14694),y=i(15145),M=i(1800),C=i(35840),Z=i(64994),j=i(54992),w=i(55863),T=i(42973),k=i(21202),I=i(75018),B=i(39865),P=i(95477),L=i(23586),_=i(12457),R=i(43250),F=i(33929),H=i(87279),O=i(18514),V=i(77907),N=i(75822),U=i(74948),A=i(88632),D=i(51757),E=i(72087),K=i(20755),W=i(73063),G=i(68894),q=i(68785),z=i(78140),Y=i(32163),$=i(43765),J=i(40721),X=i(11470),Q=i(43145),ee=i(72495),te=i(30506),ie=i(26388),re=i(83182),se=i(46247),ne=i(66957),oe=i(85893);const ae=(0,d.defineMessages)({filterByPlaceholder:{id:"sidebarTrash.filterBy.placeholder",defaultMessage:"Search pages in trash..."}});class le extends s.Z{constructor(){super(...arguments),this.storeTypes={requestStore:E.Z},this.renderTrashPages=(e,t)=>{const{device:i}=this.environment,s=t?t.results:[],{mainEditorCurrentBlockStore:n}=f.default.state;if(!n)return;const o=s.map((e=>D.G.createChildStore(n,{table:k.iU,id:e}))).filter((e=>e.isDefined()&&!m.Z.state.excludePages.has(e.id))).map((e=>({key:e.id,action:t=>{let{event:r}=t;if("metaKey"in r&&r.metaKey){const t=(0,M.Z)({baseUrl:P.default.domainBaseUrl,pageId:e.id,pageVisitSource:y.tY.SidebarTrash});I.navigateToExternalURL({environment:this.environment,url:t})}else I.navigateToBlock({environment:this.environment,store:e,pageVisitSource:y.tY.SidebarTrash}),g.Z.setState({...g.Z.state,open:!1});i.isMobile&&U.close()},render:t=>(0,oe.jsx)(X.Z,{...t,dontShrinkRight:!0,store:e,right:(0,oe.jsxs)("div",{style:{display:"flex",gap:4},children:[(0,oe.jsx)(ie.Z,{placement:ie.Z.Placement.Bottom,renderTooltip:()=>(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Restore",id:"sidebarTrash.restorePageButton.tooltip"}),render:t=>(0,oe.jsx)(W.Z,{icon:w.s,iconStyle:{width:16,height:16,color:this.theme.mediumIconColor},...t,onClick:()=>this.handleRestoreClick(e),ariaLabel:this.props.intl.formatMessage({defaultMessage:"Restore page",id:"sidebarTrash.restorePageButton.ariaLabel"})})}),(0,oe.jsx)(ie.Z,{placement:ie.Z.Placement.Bottom,renderTooltip:()=>(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Permanently delete page",id:"sidebarTrash.permanentlyDeletePageButton.tooltip"}),render:t=>(0,oe.jsx)(W.Z,{icon:j.p,iconStyle:{width:16,height:16,color:this.theme.mediumIconColor},...t,onClick:()=>this.handleDeleteClick(e),ariaLabel:this.props.intl.formatMessage({defaultMessage:"Permanently delete page",id:"sidebarTrash.permanentlyDeletePageButton.ariaLabel"})})})]})})})));return 0===o.length&&m.Z.state.filter?(0,oe.jsx)(ee.Z,{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:i.isMobile?(0,oe.jsx)($.Z,{title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"No matches",id:"sidebarTrash.mobileFilterBy.noMatchesTitle"})}):(0,oe.jsx)(K.Z,{icon:Z.h,title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"No matches",id:"sidebarTrash.filterBy.noMatchesTitle"}),description:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Try checking for typos",id:"sidebarTrash.filterBy.noMatchesDescription"})})}):0===o.length?(0,oe.jsx)(ee.Z,{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:i.isMobile?(0,oe.jsx)($.Z,{title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"No results",id:"sidebarTrash.mobileFilterBy.noResultsTitle"})}):(0,oe.jsx)(K.Z,{icon:j.p,title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"No results",id:"sidebarTrash.filterBy.noResultsTitle"}),description:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Trashed pages appear here",id:"sidebarTrash.filterBy.noResultsDescription"})})}):(0,oe.jsxs)(r.Fragment,{children:[(0,oe.jsx)(Y.Z,{type:Y.i.Vertical,initialFocus:void 0,sections:[{key:0,items:o,render:e=>(0,oe.jsx)(ee.Z,{...e})}]}),(0,oe.jsx)(_.Z,{show:this.stores.requestStore.state.loading,showDelay:500,showHold:200,render:e=>{if(e)return(0,oe.jsx)("div",{style:{height:44,display:"flex",flex:1,alignItems:"center",justifyContent:"center"},children:(0,oe.jsx)(q.Z,{})})}}),(0,oe.jsx)(Q.Z,{onChange:this.handleScrollOffsetChange})]})},this.handleSwipeLeft=()=>{const e=le.tabs.indexOf(m.Z.state.currentTab)+1,t=le.tabs[e];void 0!==t&&this.changeTab(t)},this.handleSwipeRight=()=>{const e=le.tabs.indexOf(m.Z.state.currentTab)-1,t=le.tabs[e];void 0!==t&&this.changeTab(t)},this.handleTabChange=e=>{const t=le.tabs[e];this.changeTab(t)},this.handleRestoreClick=e=>{const{currentSpaceStore:t}=f.default.state;t&&B.DV({environment:this.environment,block:e,spaceId:e.pointer.spaceId||t.id})},this.handleDeleteClick=e=>{B.Rn({environment:this.environment,blocks:[e]})},this.handleSearchInputChange=e=>{m.Z.setState({...m.Z.state,filter:e.target.value,limit:m.Z.startLimit})},this.handleClose=()=>{const{mobileNative:e}=this.environment,t=()=>{g.Z.setState({...g.Z.state,open:!1})};null!=e&&e.supportsNativeHomeOnPhone()?I.navigateToHomeTab(this.environment,t):t()},this.handleScrollOffsetChange=e=>{const{requestStore:t}=this.stores,{ready:i,loading:r,result:s}=t.state,n=s;e<=m.Z.loadMoreOffset&&n&&i&&!r&&!n.endOfResultsReached&&m.Z.setState({...m.Z.state,limit:m.Z.state.limit+m.Z.limitIncrement})}}UNSAFE_willMount(e){super.UNSAFE_willMount(e),m.Z.setState({...m.Z.state,limit:m.Z.startLimit,excludePages:new Set})}willUnmount(){m.Z.setState({...m.Z.state,filter:""})}renderComponent(){const{mobileNative:e}=this.environment;return null!=e&&e.supportsNativeHomeOnPhone()?this.renderNativeHomeEnabledLayout():this.renderLayout()}renderLayout(){const{device:e}=this.environment;let t;return t=e.isMobile?{menuType:H.og.Modal,title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Trash",id:"sidebarTrash.menu.header"}),left:(0,oe.jsx)(ce,{}),right:(0,oe.jsx)(J.DoneMenuText,{}),onClickRight:this.handleClose,onCancel:this.handleClose,header:this.renderHeaderWithTabs()}:{menuType:H.og.Popup,height:"50vh",width:414,header:this.renderHeaderWithTabs(),footer:(0,oe.jsx)(de,{})},(0,oe.jsx)(te.Z,{onSwipeLeft:this.handleSwipeLeft,onSwipeRight:this.handleSwipeRight,render:e=>(0,oe.jsx)(z.Z,{...t,...e,className:R.TYv,children:this.renderPages()})})}renderNativeHomeEnabledLayout(){const e={menuType:H.og.Modal,title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Trash",id:"sidebarTrash.menu.header"}),left:(0,oe.jsx)(ce,{}),right:(0,oe.jsx)(J.DoneMenuText,{}),onClickRight:this.handleClose,onCancel:this.handleClose,header:this.renderSearchInput()};return(0,oe.jsx)(z.Z,{...e,className:R.TYv,children:this.renderPages()})}renderHeaderWithTabs(){const{device:e}=this.environment,t=m.Z.state.currentTab,i=le.tabs.indexOf(t);return(0,oe.jsxs)(r.Fragment,{children:[(0,oe.jsx)(ne.Z,{tabs:[(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"All pages",id:"sidebarTrash.allPages.tabHeader"},"allPages"),(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"In current page",id:"sidebarTrash.inCurrentPage.tabHeader"},"currentPage"),(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Last edited by me",id:"sidebarTrash.lastEditedByMe.tabHeader"},"lastEditedByMe")],selectedIndex:i,onChange:this.handleTabChange}),(0,oe.jsx)("div",{style:{margin:e.isMobile?0:"10px 0"},children:this.renderSearchInput()})]})}renderSearchInput(){const{device:e}=this.environment;return(0,oe.jsx)(G.ZP,{inputLeft:e.isMobile?(0,oe.jsx)(_.Z,{show:this.stores.requestStore.state.loading,showDelay:500,showHold:200,render:e=>e?(0,oe.jsx)(q.Z,{style:he(this.theme)}):(0,C.R)(he(this.theme))}):void 0,style:{...e.isAndroid&&{borderBottom:"none"}},showClearButton:!0,placeholder:F.default.formatMessage(ae.filterByPlaceholder),focus:!e.isMobile||void 0,value:m.Z.state.filter,onChange:this.handleSearchInputChange})}renderPages(){if(!A.Z.state.online)return(0,oe.jsx)(ee.Z,{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,oe.jsx)(K.Z,{icon:T.i,title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"You're offline",id:"sidebarTrash.goOnline.title"}),description:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Please go online to view the Trash",id:"sidebarTrash.goOnline.description"})})});{const{filter:e,limit:t,currentTab:i}=m.Z.state,r=`${e}:${t}${i}`;return(0,oe.jsx)(L.Z,{requestStore:this.stores.requestStore,request:r,performRequest:e=>async function(e,t){const{currentSpaceStore:i,mainEditorCurrentBlockStore:r,currentUserStore:s}=f.default.state;if(!i||!r||!s)return;const{limit:n,filter:o,currentTab:a}=m.Z.state;let l,d;if("in_current_page"===a)if(r.isCollectionView()){if(!r.isDefined())return;const e=r.getCollectionPointer();if(!e)return;d=e.id}else d=r.id;else"last_edited_by_me"===a&&(l=s.id);const c=await V.deps.searchActions.loader();return await c.searchTrashPages({environment:t,query:o,limit:n,ancestorId:d,spaceId:i.id,editedById:l})}(0,this.environment),render:this.renderTrashPages,debounce:N.vp})}}changeTab(e){m.Z.setState({...m.Z.state,currentTab:e,limit:m.Z.startLimit}),this.stores.requestStore.setState({...this.stores.requestStore.state,result:null}),c.vqh(this.environment,{tab:e})}}function de(){return(0,oe.jsx)(ee.Z,{topBorder:!0,disableDesktopPadding:!1,children:(0,oe.jsx)(re.Z,{title:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Learn about deleting and restoring pages",id:"sidebarTrash.learnMore.prompt"}),href:(0,O.UY)("guides.trash"),analyticsFrom:"trash"})})}function ce(){return(0,oe.jsx)(se.Z,{href:(0,O.UY)("guides.trash"),analyticsFrom:"trash"})}function he(e){return{width:14,height:14,flexGrow:0,flexShrink:0,color:e.lightIconColor}}le.displayName="SidebarTrash",le.tabs=["all_pages","in_current_page","last_edited_by_me"];const ue=(0,d.injectIntl)(le);class pe extends s.Z{constructor(){super(...arguments),this.renderOrigin=e=>{const{onClick:t,...i}=(0,p.Z)(e,{onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave});return(0,oe.jsx)(x.Z,{store:this.clonedStore,canDropOnto:!0,onSelectableDrop:this.handleDrop,analyticsName:"sidebar_trash",shouldShowDropZone:!0,children:(0,oe.jsx)(S.Z,{...i,style:this.props.buttonStyle,onClick:t||this.handleClick,mobileFeedback:this.props.isMobile,children:(0,oe.jsx)(v.Z,{left:(0,oe.jsx)(fe,{}),style:{...g.Z.state.open&&{background:this.theme.buttonHoveredBackground}},disableMobileBorder:!0,children:(0,oe.jsx)(d.FormattedMessage,{defaultMessage:"Trash",id:"sidebarTrashButton.text"})})})})},this.handleClick=e=>{m.Z.setState({...m.Z.state,currentTab:"all_pages"}),c.YFJ(this.environment)},this.handleDrop=e=>{const{droppedStores:t,duplicate:i}=e;i||u.createAndCommit({userAction:"SidebarTrashButton.handleDrop",environment:this.environment,perform:e=>{h.Cl({environment:this.environment,blocks:t,transaction:e})}})}}UNSAFE_willMount(e){super.UNSAFE_willMount(e),this.clonedStore=e.store.clone()}renderComponent(){const{device:e,mobileNative:t}=this.environment,i=(null==t?void 0:t.supportsNativeHomeOnPhone())||!1;return(0,oe.jsx)(b.ZP,{popupType:e.isMobile?b.Z4.SlideUp:b.Z4.Popup,hidesMobileNativeBottomBar:i,preventSlideUpTransition:i,buttonPopupStore:g.Z,alignmentToOrigin:b.vR.Start,placementToOrigin:b.pO.Right,originGap:0,onClick:this.handleClick,isFullWidthOnMobile:!0,render:()=>(0,oe.jsx)(me,{}),preventScaleTransition:!0,renderOrigin:this.renderOrigin})}}pe.displayName="SidebarTrashButton";const ge=pe;function me(){window.__c={n:"SidebarTrashComponent"};const{currentSpaceStore:e}=(0,o.VK)((()=>f.default.state),[]);return e?(0,oe.jsx)(ue,{spaceStore:e}):null}function fe(){window.__c={n:"IconComponent"};const e=(0,a.Fg)(),t=(0,n.O7)(),{device:i}=t,r=e.mediumIconColor;return i.isMobile?(0,l.w)({fill:r,height:16}):(0,l.w)({fill:r,width:14})}},73499:(e,t,i)=>{i(67294),i(480),i(24405),i(43906),i(68939),i(75018),i(95477),i(4023),i(64921),i(26388),i(14694),i(85893)},27556:(e,t,i)=>{i.d(t,{Ke:()=>r.LazyOutlinerViewAllButton,k4:()=>s,uO:()=>n,vJ:()=>r.LazyOutlinerViewAllPopup});var r=i(77907);const s=30,n=20},50659:(e,t,i)=>{i.d(t,{G$:()=>s,MF:()=>n,Z3:()=>r});function r(e){let{isMobile:t}=e;return{...!t&&{borderRadius:3}}}function s(e){let{isMobile:t}=e;return t?{}:{...r({isMobile:t}),marginLeft:4,marginRight:4,width:"calc(100% - 8px)"}}function n(){return{paddingLeft:10,paddingRight:10}}},27068:(e,t,i)=>{i.d(t,{K_:()=>a,N8:()=>l,nJ:()=>o});var r=i(39699),s=i(37181),n=i(80444);function o(e){const{currentUserSettingsStore:t}=n.default.state;t&&r.createAndCommit({userAction:"SidebarPersonalHomeButton.markAsSeen",environment:e,perform:e=>{s.d2({userSettingsStore:t,transaction:e,data:{seen_personal_home:!0}})}})}function a(e){const{environment:t,tipType:i,completed:o}=e,{currentUserSettingsStore:a}=n.default.state;if(!a)return;const l=a.getPersonalHomeTipsSettings(),d={...l,progress_data:{...l.progress_data,[i]:{completed:o}}};r.createAndCommit({userAction:"TipsHomePanel.updateProgress",environment:t,perform:e=>{s.d2({userSettingsStore:a,transaction:e,data:{personal_home_tips_settings:d}})}})}function l(e){const{environment:t,hide:i}=e,{currentUserSettingsStore:o}=n.default.state;if(!o)return;const a={...o.getPersonalHomeTipsSettings(),hide_completed:i};r.createAndCommit({userAction:"TipsHomePanel.hideCompleted",environment:t,perform:e=>{s.d2({userSettingsStore:o,transaction:e,data:{personal_home_tips_settings:a}})}})}},46770:(e,t,i)=>{i.d(t,{Z:()=>Z});var r=i(67294),s=i(480),n=i(86628),o=i(24405),a=i(15145),l=i(56996),d=i(82990),c=i(68939),h=i(58261),u=i(84076),p=i(74420),g=i(26388),m=i(14694),f=i(50659),S=i(27068),b=i(30806),x=i(94841),v=i(4023),y=i(80444),M=i(85893);function C(e){let{}=e;window.__c={n:"SidebarPersonalHomeButton"};const t=(0,s.O7)(),{isMobile:i}=(0,s.Fy)(),C=(0,n.VK)((()=>{const{currentSpaceViewStore:e}=y.default.state;if(e)return x.Al(e)}),[]),Z=(0,n.VK)((()=>{const e=y.default.state.mainEditorCurrentBlockStore;return!!e&&x.Kj(e.id)}),[]),j=(0,n.VK)((()=>x.pr(t)),[t]),w=(0,r.useCallback)((()=>{(0,S.nJ)(t),(0,b.$X)({environment:t,from:"sidebar"})}),[t]),T=(0,o.yK)((e=>({tooltip:{width:200},shortcutLabel:{color:e.mediumInvertedTextColor},sidebarItem:{...(0,f.G$)({isMobile:i}),...Z&&{fontWeight:d.Z.fontWeight.semibold,background:e.sidebarItemSelectedBackground,color:e.regularTextColor}},icon:{fill:Z?e.regularTextColor:e.mediumIconColor,width:20,height:20}})),[i,Z]),k=(0,n.VK)((()=>{var e;return null==C||null===(e=C.getModel())||void 0===e?void 0:e.getRenderUrl({getRecordModel:null==C?void 0:C.getRecordModel,pageVisitSource:a.tY.SidebarHome})}),[C]);return k?(0,M.jsx)(g.Z,{renderTooltip:()=>(0,M.jsxs)("div",{style:T.tooltip,children:[(0,M.jsx)("div",{children:(0,M.jsx)(c.FormattedMessage,{id:"sidebarPersonalHomeButton.tooltip",defaultMessage:"View recent pages and more"})}),(0,M.jsx)(h.Z,{style:T.shortcutLabel,name:"openHome"})]}),originGap:6,textWrap:!0,placement:v.u.Right,render:e=>(0,M.jsx)(u.Z,{...e,style:T.sidebarItem,href:k,onClick:w,children:(0,M.jsx)(m.Z,{left:(0,l.z)(T.icon),right:j&&(0,M.jsx)(p.Z,{}),disableMobileBorder:!0,children:(0,M.jsx)(c.FormattedMessage,{id:"sidebarPersonalHomeButton.label",defaultMessage:"Home"})})})}):null}const Z=r.memo(C)},52344:(e,t,i)=>{i.d(t,{u:()=>f});var r=i(67294),s=i(480),n=i(86628),o=i(72126),a=i(69246),l=i(150),d=i(79131),c=i(28020);var h=i(80444),u=i(73292),p=i(77999),g=i(29165),m=i(85893);function f(e){let{teams:t,reorderable:i,onNavigate:f,id:S}=e;window.__c={n:"TeamOutlinerList"};const b=(0,s.O7)(),x=function(){const e=(0,s.O7)();return(0,n.VK)((()=>(0,c.k_)(e).state),[e])}(),{currentSpaceViewStore:v,currentSpaceStore:y}=(0,n.VK)((()=>{const{currentSpaceViewStore:e,currentSpaceStore:t}=h.default.state;return{currentSpaceViewStore:e,currentSpaceStore:t}}),[]),M=(0,n.VK)((()=>t.map((e=>e.id))),[t]),C=(0,n.VK)((()=>o.KX(t,"id")),[t]),[Z,j]=(0,r.useState)({});(0,r.useEffect)((()=>{(null==y?void 0:y.id)&&j((e=>u.oO({teamIds:M,oldState:e,spaceId:y.id,userId:b.currentUser.id})))}),[null==y?void 0:y.id,b.currentUser.id,M]);const w=(0,n.VK)((()=>{const e=p.default.state.initialTeamStoreId;return M.find((t=>t===e))??o.Ps(M)}),[M]);return v&&x?(0,m.jsx)(d.ZP,{id:S,direction:"vertical",keys:M,disabled:!i,renderKey:e=>Z[e]&&(0,m.jsx)(g.O,{shouldPersistToggleState:!0,teamStore:C[e],sidebarState:x,isLastTeam:o.Z$(M)===e,teamOutlinerType:a.kg,customToggleStore:Z[e],onNavigate:f,sidebarTourStep:w===e?"prebuilt_templates":void 0},e),onDrop:(e,t)=>{l.Ct({environment:b,currentSpaceViewStore:v,orderedTeamIds:e,userAction:"SidebarOutliner.SidebarOutliner",isExplicitUserAction:!0,dropArgs:t})}}):(0,m.jsx)(m.Fragment,{})}},22709:(e,t,i)=>{i.d(t,{_S:()=>D,ZP:()=>K});i(67294);var r=i(83355),s=i(49085),n=i(80503),o=i(68939),a=i(14720),l=i(50906),d=i(65452),c=i(64921),h=i(31945),u=i(39849),p=i(92955),g=i(480),m=i(86628),f=i(24405),S=i(37240),b=i(82990),x=i(38755),v=i(56496),y=i(31278),M=i(14694),C=i(46783),Z=i(85893);const j=function(e){window.__c={n:"SidebarPlaceholderItem"};const{showIcon:t}=e,i=(0,f.Fg)(),r=(0,f.yK)((e=>{const i=Math.ceil(60),r=Math.floor(85),s=`${Math.floor(Math.random()*(r-i+1))+i}%`;return{placeholderPageStyle:{height:28,display:"flex",alignItems:"center",width:"100%",padding:t?"0 15px":"0 0px"},placeholderTextWrapStyle:{flexGrow:1,marginLeft:t?10:0,height:28,display:"flex",alignItems:"center"},placeholderTextStyle:{height:4,background:e.buttonHoveredBackground,width:s}}}),[t]);return(0,Z.jsxs)("div",{style:r.placeholderPageStyle,children:[t&&(0,C.w)({width:16,height:16,fill:i.buttonHoveredBackground}),(0,Z.jsx)("div",{style:r.placeholderTextWrapStyle,children:(0,Z.jsx)("div",{style:r.placeholderTextStyle})})]})},w={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};class T extends r.Z{UNSAFE_willMountOrUpdate(){"store"===this.props.type&&this.props.spaceStore.getValue()}renderComponent(){const{device:e}=this.environment,{props:t}=this,{activeUserEmailAddress:i,isMobile:r,style:s,showExpand:n}=t,o="store"===t.type?(0,x.rn)(this.environment,t.spaceStore):t.spaceName;return(0,Z.jsxs)(M.Z,{style:{overflow:"hidden",...r&&{fontSize:14,padding:0,marginRight:12},...!r&&{paddingLeft:10,paddingRight:10},...s||{}},left:o?(0,Z.jsx)(P,{title:o,icon:"store"===t.type?void 0:t.spaceIcon,isMobile:r,spaceStore:"store"===t.type?t.spaceStore:void 0}):(0,Z.jsx)(I,{}),disableMobileBorder:!0,children:[!o&&(0,Z.jsx)(B,{}),o&&(0,Z.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:i?"space-between":"start"},className:"notranslate",children:[(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginRight:6,marginTop:e.isAndroid?3:0,...w},children:[(0,Z.jsx)("div",{style:{color:this.theme.regularTextColor,fontWeight:b.Z.fontWeight.medium,...w},children:o}),(0,Z.jsx)("div",{style:{color:this.theme.mediumTextColor,fontSize:11,lineHeight:"12px",fontWeight:b.Z.fontWeight.regular,...w},children:i})]}),n&&(0,Z.jsx)("div",{style:{flexGrow:0,flexShrink:0,width:10,height:10,fill:this.theme.mediumIconColor},children:(0,S.s)()})]})]})}}T.displayName="SidebarSpaceName";const k=T;function I(){return(0,Z.jsx)("div",{style:{opacity:.25},children:(0,Z.jsx)(v.Z,{size:20,title:void 0})})}function B(){return(0,Z.jsx)(j,{showIcon:!1})}function P(e){let{title:t,icon:i,isMobile:r,spaceStore:s}=e;window.__c={n:"RecordIconComponent"};const n=(0,f.Fg)(),o=(0,g.O7)(),a=(0,m.VK)((()=>s?(0,x.Wd)(o,s):i?{icon:i,pointer:{table:"space",id:"undefined"}}:void 0),[s,o,i]),l=(0,m.VK)((()=>s?(0,x.rn)(o,s):t),[s,o,t]);return(0,Z.jsx)(y.Z,{disabled:!0,icon:a,isEmptyPage:!1,title:l,size:r?24:22,style:{marginTop:1,color:n.regularTextColor,fontWeight:b.Z.fontWeight.medium}})}var L=i(29538),_=i(43250),R=i(80444),F=i(30278),H=i(85974),O=i(28517),V=i(19034),N=i(97852),U=i(78861);const A={display:"flex",alignItems:"center",minWidth:0,height:"100%",width:"100%"};let D=function(e){return e[e.Regular=0]="Regular",e[e.DesktopMac=1]="DesktopMac",e[e.Mobile=2]="Mobile",e}({});class E extends r.Z{constructor(){super(...arguments),this.sidebarSwitcherIsHovered=s.default.createValue(!1),this.storeTypes={loginStore:H.Z,loginPermissionsStore:F.Z},this.height={[D.Regular]:n.Aj-8,[D.DesktopMac]:n.br,[D.Mobile]:"auto"},this.handleClick=()=>{N.Z.setState({...N.Z.state,open:!0}),l.air(this.environment),U.Z.getUserIds(this.environment).forEach((e=>{U.Z.getSpaceViewStores(this.environment,e).forEach((t=>{const i=t.getSpaceId();i&&(d.h({environment:this.environment,spaceId:i,userId:e}),O.I({environment:this.environment,spaceId:i,userId:e}))}))}))}}renderComponent(){const{device:e}=this.environment,{shouldShowUnexpandButton:t}=this.props,{currentSpaceStore:i,currentUserStore:r}=R.default.state,s=U.Z.getUserIds(this.environment);if(!i||!r)return;const n=s.length>1?r.getEmail():void 0,o=V.Z.getUnreadMentionsCountForOtherSpaces(),l=Boolean(this.props.disabled),d=this.stores;return(0,Z.jsx)(h.ZP,{popupType:e.isMobile?h.Z4.SlideUp:h.Z4.Popup,buttonPopupStore:N.Z,renderOrigin:()=>{return(0,Z.jsxs)(c.Z,{style:{...A,height:this.height[this.props.format],marginLeft:4,marginRight:4,marginTop:e.isMobile?0:4,width:"calc(100% - 8px)",borderRadius:4,marginBottom:n?e.isMobile?0:8:0,padding:0,...this.props.buttonStyle},mobileFeedback:e.isMobile,onClick:this.handleClick,disabled:l,className:_.rli,hovered:this.sidebarSwitcherIsHovered.state,ignoreLocalHoverState:!0,onMouseEnter:()=>this.sidebarSwitcherIsHovered.setState(!0),onMouseLeave:()=>this.sidebarSwitcherIsHovered.setState(!1),children:[(0,Z.jsx)(k,{isMobile:(r=this.props.format,r===D.Mobile),spaceStore:i,activeUserEmailAddress:n,showExpand:!l,type:"store",style:{marginLeft:0}}),(0,Z.jsxs)("div",{className:_.JiD,style:{display:"flex",alignItems:"center",height:"100%",marginLeft:"auto",marginRight:o?0:12},children:[t&&(0,Z.jsx)(L.V,{}),(0,Z.jsx)(p.Z,{type:"otherSpaces",color:u.Z.Color.Red,style:{marginLeft:10,marginRight:10}})]})]});var r},originGap:0,disableMutationObserver:!0,forceInitialInbound:!0,style:e.isMobile?{}:{width:320,overflow:"hidden"},render:e=>(0,Z.jsx)(a.Rv,{parent:e,redirectURL:this.props.redirectURL,disableLoginLink:this.props.disableLoginLink,onSpaceClick:this.props.onSpaceClick,loginStore:d.loginStore,loginPermissionsStore:d.loginPermissionsStore})})}}E.displayName="SidebarSwitcherMultiAccount",E.Format=D;const K=(0,o.injectIntl)(E)},30278:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(49085);class s extends r.default{getInitialState(){return{contacts:!1}}}const n=s},43906:(e,t,i)=>{i(67294);var r=i(45238),s=i(85893);(0,r.I)("gift",{viewBox:"0 0 14 14",svg:(0,s.jsx)("path",{d:"M7.95789 3.54464C8.00247 3.30845 8.16614 2.97748 8.48043 2.66319C8.84104 2.30258 9.38851 1.92751 9.87755 1.74943C10.1088 1.66523 10.237 1.65112 10.2972 1.65266C10.6256 1.99575 10.8618 2.39413 10.9488 2.70912C10.9917 2.86422 10.9849 2.94927 10.9797 2.97718L10.9792 2.98003C10.9777 2.9894 10.9767 2.99539 10.9553 3.01675C10.5461 3.42596 10.0755 3.57832 9.4321 3.60836C9.09223 3.62423 8.7328 3.60413 8.31688 3.57258C8.25969 3.56824 8.20022 3.56356 8.13892 3.55874L7.95789 3.54464ZM6.97082 2.14136C7.10128 1.95114 7.25234 1.76996 7.41977 1.60253C8.39608 0.626221 10.3325 -0.434439 11.3089 0.541871C12.2852 1.51818 12.9923 3.10109 12.016 4.07741C11.4993 4.59409 10.9264 4.86563 10.3362 4.99913H14V7.99913H13H8V5.05253C7.65076 5.02523 7.31443 4.99913 7.00006 4.99913C6.99017 4.98924 6.98043 4.9793 6.97082 4.96932C6.96122 4.9793 6.95148 4.98924 6.94159 4.99913C6.64476 4.99913 6.32836 5.0224 6 5.04797V7.99913H1H0V4.99913H3.60548C3.01529 4.86563 2.44237 4.59409 1.92569 4.07741C0.949377 3.10109 1.65648 1.51818 2.6328 0.541871C3.60911 -0.434439 5.54557 0.626221 6.52188 1.60253C6.68931 1.76996 6.84037 1.95114 6.97082 2.14136ZM10.3411 1.66021C10.3418 1.65908 10.3348 1.65588 10.3179 1.65399C10.3319 1.6604 10.3404 1.66134 10.3411 1.66021ZM1 8.99913V13.9991H6V8.99913H1ZM8 8.99913V13.9991H13V8.99913H8ZM5.46122 2.66319C5.77551 2.97748 5.93918 3.30845 5.98376 3.54464L5.80273 3.55874C5.74143 3.56356 5.68196 3.56824 5.62477 3.57258C5.20886 3.60413 4.84942 3.62423 4.50955 3.60836C3.86611 3.57832 3.39557 3.42596 2.98635 3.01675C2.965 2.99539 2.96399 2.9894 2.96241 2.98003L2.96191 2.97718C2.95674 2.94927 2.94998 2.86422 2.99284 2.70912C3.07987 2.39413 3.31602 1.99575 3.64441 1.65266C3.70469 1.65112 3.83287 1.66523 4.0641 1.74943C4.55314 1.92751 5.10061 2.30258 5.46122 2.66319ZM3.60056 1.66021C3.59983 1.65908 3.60685 1.65588 3.6238 1.65399C3.60977 1.6604 3.60129 1.66134 3.60056 1.66021Z"})})}}]);