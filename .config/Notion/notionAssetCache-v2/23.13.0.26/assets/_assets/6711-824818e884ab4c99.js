"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6711],{39849:(e,t,n)=>{n.d(t,{Z:()=>d});n(67294);var r=n(83355),i=n(8848),o=n(82990),s=n(85893);let a=function(e){return e[e.Red=0]="Red",e[e.Gray=1]="Gray",e}({});class l extends r.Z{renderComponent(){const{count:e}=this.props,t=this.props.color===a.Red;if(e&&!(e<=0))return(0,s.jsx)("div",{style:{...l.style,...this.props.style,...e>99&&{width:void 0,padding:2},background:t?this.theme.redBadgeBackground:this.theme.lightIconColor},children:(0,s.jsx)(c,{count:this.props.count,numberStyle:this.props.numberStyle})})}}l.displayName="MentionsBadge",l.Color=a,l.style={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,fontSize:10,textAlign:"center",fontWeight:o.Z.fontWeight.semibold,borderRadius:4,color:i.ZP.white,position:"static",marginLeft:6,WebkitFontSmoothing:"auto"};const d=l;function c(e){let{count:t,numberStyle:n}=e;return t?1===t?(0,s.jsx)("span",{style:{marginLeft:-.5,...n},children:"1"}):t>99?(0,s.jsx)("span",{style:{letterSpacing:-.5,...n},children:"99+"}):t>9?(0,s.jsx)("span",{style:{letterSpacing:-.5,marginLeft:-.5,...n},children:t}):(0,s.jsx)("span",{style:{...n},children:t}):null}},29538:(e,t,n)=>{n.d(t,{C:()=>V,V:()=>f});n(67294);var r=n(480),i=n(86628),o=n(24405),s=n(97439),a=n(68939),l=n(28020),d=n(43250),c=n(34700),C=n(74948),u=n(38676),p=n(24042),h=n(45325),g=n(23063),b=n(73063),x=n(58261),S=n(26388),y=n(85893);function f(e){let{}=e;window.__c={n:"TopbarSidebarUnexpandButton"};const t=(0,r.O7)(),n=(0,r.Fy)(),o=(0,a.useIntl)(),d=(0,i.VK)((()=>!u.sidebarMouseEnteredStore.state),[]),c=(0,i.VK)((()=>p.Z.state.isShowingTabBar||!1),[]),g=(0,i.VK)((()=>l.tu.state),[]),b=o.formatMessage({defaultMessage:"Close sidebar",id:"sidebarUnexpandButton.closeSidebar.tooltip"});return(0,y.jsx)(V,{shouldHide:n.isElectronMac&&g||c||d,icon:s.D,caption:b,onClick:()=>{C.setExpand({environment:t,isExpanded:!1,from:"topbar_sidebar_unexpand_button"}),h.default.isOpen()&&C.close()},keyboardShortcutName:"toggleSidebar",isElectron:n.isElectron})}function V(e){window.__c={n:"TopbarUnexpandButton"};const t=(0,r.Fy)(),n=(0,o.yK)((e=>({keyboardShortcut:{color:e.mediumInvertedTextColor}})),[]),i=e.isElectron&&!e.shouldHide?1:0,s=e.shouldHide?0:1,a=e.keyboardShortcutName;return(0,y.jsx)(S.Z,{disableTooltip:e.shouldHide,renderTooltip:()=>(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{children:e.caption}),a&&(0,y.jsx)(x.Z,{style:n.keyboardShortcut,name:a})]}),originGap:6,render:n=>(0,y.jsx)(g.Z,{isVisible:!0,animationStyle:{opacity:s},enterAnimationStyle:{opacity:i},render:()=>(0,y.jsx)(b.Z,{ariaLabel:e.caption,disabled:e.shouldHide,icon:e.icon,style:{...(0,c.X)({noDrag:t.isElectronMac}),position:"relative",marginLeft:10,...t.isMobile&&{height:"100%"},...e.style},iconStyle:{width:16,height:16},mobileFeedback:t.isMobile,onClick:e.onClick,className:d.Mfh,...n})})})}},5846:(e,t,n)=>{n.d(t,{k:()=>g});var r=n(67294),i=n(86628),o=n(24405),s=n(45010),a=n(34859),l=n(80444),d=n(56638),c=n(88923),C=n(53336),u=n(3553),p=n(37712),h=n(85893);function g(e){let{children:t,scrollerStore:n,scrollerStyle:g}=e;window.__c={n:"SidebarOutlinerScrollContainer"};const b=(0,i.VK)((()=>l.default.state.currentSpaceStore),[]),x=(0,i.VK)((()=>l.default.state.currentSpaceViewStore),[]),S=(0,i.VK)((()=>c.default.isCenterPeekOpen()||d.Z.state.open),[]),y=(0,o.yK)((()=>({scroller:{paddingTop:6,paddingBottom:20,...g}})),[g]),f=(0,r.useCallback)((e=>{s.Z.SidebarScroller=e}),[]);return b&&x?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.A,{scrollerStore:n}),(0,h.jsx)(u.Z,{store:b,droppable:!0,disableRectangularSelection:!0,disableEditNearestBlock:!0,disable:S,render:e=>{let{selectableEvents:r}=e;return(0,h.jsx)(C.Z,{type:a.Z.Y,store:n,style:y.scroller,ref:f,...r,children:t},x.id)}})]}):null}},37712:(e,t,n)=>{n.d(t,{A:()=>s});n(67294);var r=n(86628),i=n(24405),o=n(85893);function s(e){let{scrollerStore:t}=e;window.__c={n:"SidebarScrollToTopBorder"};const n=(0,r.VK)((()=>0===t.state.scrollTop),[t]),s=(0,i.yK)((e=>({border:{width:"100%",boxShadow:n?"0 0 0 transparent":`0 1px 0 ${e.regularDividerColor}`,transition:"box-shadow 300ms",height:2,marginTop:-2,zIndex:99}})),[n]);return(0,o.jsx)("div",{style:s.border})}},34700:(e,t,n)=>{function r(e){return"drag"in e&&e.drag?{WebkitAppRegion:"drag"}:"noDrag"in e&&e.noDrag?{WebkitAppRegion:"no-drag"}:{}}n.d(t,{X:()=>r})},88373:(e,t,n)=>{n.d(t,{t:()=>g});n(67294);var r=n(480),i=n(86628),o=n(24405),s=n(80503),a=n(23063),l=n(29538),d=n(43250),c=n(34700),C=n(61436),u=n(24042),p=n(24646),h=n(85893);function g(e){let{isExpanded:t}=e;window.__c={n:"SidebarDesktopOnlyTopBar"};const[{isFullScreen:n}]=(0,i.AF)(C.Z),[{isShowingTabBar:g}]=(0,i.AF)(u.Z),{device:b}=(0,r.O7)(),x=b.isElectronMac,S=function(e){let{isElectronMac:t,isShowingTabBar:n}=e;return(0,o.yK)((()=>({container:{...(0,c.X)({drag:t&&!n}),display:"flex",justifyContent:"flex-end",alignItems:"center",paddingRight:11}})),[t,n])}({isElectronMac:x,isShowingTabBar:g});if(!(0,p.U8)({isElectronMac:x,isExpanded:t,isFullScreenDesktop:n}))return null;const y=(0,p.wE)({isElectronMac:x,isExpanded:t,isFullScreenDesktop:n,isShowingTabBar:g});return(0,h.jsx)(a.Z,{animationStyle:{height:y?s.br:0},render:()=>(0,h.jsx)("div",{style:S.container,children:(0,h.jsx)("div",{className:d.JiD,children:(0,h.jsx)(l.V,{})})}),isVisible:!0})}},61436:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(49085),i=n(47839);class o extends r.default{getInitialState(){return{isFullScreen:!1}}constructor(){super(),this.updateFromElectronState=()=>{const e=i.fullscreen.get();void 0!==e&&this.setState({isFullScreen:e})},i.fullscreen.addListener(this.updateFromElectronState),this.updateFromElectronState()}}const s=new o},56638:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(49085);class i extends r.default{getInitialState(){return{open:!1}}}const o=new i},3338:(e,t,n)=>{n.d(t,{p:()=>o});n(67294);var r=n(45238),i=n(85893);const o=(0,r.I)("circleCheck",{viewBox:"0 0 12 12",svg:(0,i.jsx)("path",{d:"M6.09277 11.1855C8.88574 11.1855 11.1855 8.88574 11.1855 6.09277C11.1855 3.30469 8.88086 1 6.08789 1C3.2998 1 1 3.30469 1 6.09277C1 8.88574 3.2998 11.1855 6.09277 11.1855ZM6.09277 10.0674C3.89062 10.0674 2.12305 8.29492 2.12305 6.09277C2.12305 3.89062 3.88574 2.11816 6.08789 2.11816C8.29492 2.11816 10.0625 3.89062 10.0674 6.09277C10.0723 8.29492 8.29492 10.0674 6.09277 10.0674ZM5.57031 8.41699C5.75586 8.41699 5.92188 8.31934 6.0293 8.15332L8.17773 4.81836C8.24609 4.71094 8.2998 4.58887 8.2998 4.47656C8.2998 4.21289 8.07031 4.03711 7.82129 4.03711C7.66016 4.03711 7.51855 4.125 7.41113 4.30078L5.55566 7.2793L4.68652 6.19043C4.56934 6.03906 4.44727 5.98047 4.2959 5.98047C4.03711 5.98047 3.82715 6.18555 3.82715 6.44922C3.82715 6.57129 3.87598 6.68359 3.96387 6.7959L5.0918 8.1582C5.22852 8.3291 5.37988 8.41699 5.57031 8.41699Z"})})},75071:(e,t,n)=>{n.d(t,{f:()=>o});n(67294);var r=n(45238),i=n(85893);const o=(0,r.I)("plusThick",{viewBox:"0 0 14 14",svg:(0,i.jsx)("path",{d:"M2 7.16357C2 7.59692 2.36011 7.95093 2.78735 7.95093H6.37622V11.5398C6.37622 11.9731 6.73022 12.3271 7.16357 12.3271C7.59692 12.3271 7.95093 11.9731 7.95093 11.5398V7.95093H11.5398C11.9731 7.95093 12.3271 7.59692 12.3271 7.16357C12.3271 6.73022 11.9731 6.37622 11.5398 6.37622H7.95093V2.78735C7.95093 2.36011 7.59692 2 7.16357 2C6.73022 2 6.37622 2.36011 6.37622 2.78735V6.37622H2.78735C2.36011 6.37622 2 6.73022 2 7.16357Z"})})},12079:(e,t,n)=>{n.d(t,{S:()=>o});n(67294);var r=n(45238),i=n(85893);const o=(0,r.I)("sidebarTeamspaces",{viewBox:"0 0 20 20",svg:(0,i.jsx)("path",{d:"M12.2399 16.1387V14.8555H14.9378C15.0316 14.8555 15.1019 14.832 15.1488 14.7852C15.1957 14.7383 15.2191 14.668 15.2191 14.5742V7.93555C15.2191 7.83789 15.1957 7.76562 15.1488 7.71875C15.1019 7.67188 15.0316 7.64844 14.9378 7.64844H12.6559V6.36523H15.2718C15.6585 6.36523 15.9593 6.48438 16.1742 6.72266C16.3929 6.95703 16.5023 7.28125 16.5023 7.69531V14.8086C16.5023 15.2227 16.3929 15.5469 16.1742 15.7812C15.9593 16.0195 15.6585 16.1387 15.2718 16.1387H12.2399ZM3.49774 14.8086V4.74219C3.49774 4.32812 3.60712 4.00391 3.82587 3.76953C4.04462 3.53125 4.34735 3.41211 4.73407 3.41211H12.1345C12.5212 3.41211 12.822 3.53125 13.0368 3.76953C13.2556 4.00391 13.3649 4.32812 13.3649 4.74219V14.8086C13.3649 15.2227 13.2556 15.5469 13.0368 15.7812C12.822 16.0195 12.5212 16.1387 12.1345 16.1387H4.73407C4.34735 16.1387 4.04462 16.0195 3.82587 15.7812C3.60712 15.5469 3.49774 15.2227 3.49774 14.8086ZM4.78094 14.5742C4.78094 14.668 4.80438 14.7383 4.85126 14.7852C4.89813 14.832 4.96844 14.8555 5.06219 14.8555H11.8005C11.8942 14.8555 11.9645 14.832 12.0114 14.7852C12.0583 14.7383 12.0817 14.668 12.0817 14.5742V4.97656C12.0817 4.88281 12.0583 4.8125 12.0114 4.76562C11.9645 4.71875 11.8942 4.69531 11.8005 4.69531H5.06219C4.96844 4.69531 4.89813 4.71875 4.85126 4.76562C4.80438 4.8125 4.78094 4.88281 4.78094 4.97656V14.5742ZM6.30438 15.4766V13.1797C6.30438 12.9297 6.36493 12.7422 6.48602 12.6172C6.60712 12.4883 6.7829 12.4238 7.01337 12.4238H9.8493C10.0876 12.4238 10.2653 12.4883 10.3825 12.6172C10.5036 12.7422 10.5641 12.9297 10.5641 13.1797V15.4766H9.58563V13.543C9.58563 13.4219 9.52704 13.3613 9.40985 13.3613H7.45868C7.34149 13.3613 7.2829 13.4219 7.2829 13.543V15.4766H6.30438ZM6.5329 7.20312C6.38446 7.20312 6.31024 7.12695 6.31024 6.97461V5.90234C6.31024 5.74609 6.38446 5.66797 6.5329 5.66797H7.63446C7.79071 5.66797 7.86884 5.74609 7.86884 5.90234V6.97461C7.86884 7.12695 7.79071 7.20312 7.63446 7.20312H6.5329ZM9.23407 7.20312C9.08173 7.20312 9.00555 7.12695 9.00555 6.97461V5.90234C9.00555 5.74609 9.08173 5.66797 9.23407 5.66797H10.3298C10.4821 5.66797 10.5583 5.74609 10.5583 5.90234V6.97461C10.5583 7.12695 10.4821 7.20312 10.3298 7.20312H9.23407ZM6.5329 9.40039C6.38446 9.40039 6.31024 9.32227 6.31024 9.16602V8.09375C6.31024 7.9375 6.38446 7.85938 6.5329 7.85938H7.63446C7.79071 7.85938 7.86884 7.9375 7.86884 8.09375V9.16602C7.86884 9.32227 7.79071 9.40039 7.63446 9.40039H6.5329ZM9.23407 9.40039C9.08173 9.40039 9.00555 9.32227 9.00555 9.16602V8.09375C9.00555 7.9375 9.08173 7.85938 9.23407 7.85938H10.3298C10.4821 7.85938 10.5583 7.9375 10.5583 8.09375V9.16602C10.5583 9.32227 10.4821 9.40039 10.3298 9.40039H9.23407ZM6.5329 11.5918C6.38446 11.5918 6.31024 11.5137 6.31024 11.3574V10.2852C6.31024 10.1289 6.38446 10.0508 6.5329 10.0508H7.63446C7.79071 10.0508 7.86884 10.1289 7.86884 10.2852V11.3574C7.86884 11.5137 7.79071 11.5918 7.63446 11.5918H6.5329ZM9.23407 11.5918C9.08173 11.5918 9.00555 11.5137 9.00555 11.3574V10.2852C9.00555 10.1289 9.08173 10.0508 9.23407 10.0508H10.3298C10.4821 10.0508 10.5583 10.1289 10.5583 10.2852V11.3574C10.5583 11.5137 10.4821 11.5918 10.3298 11.5918H9.23407Z"})})},46783:(e,t,n)=>{n.d(t,{w:()=>o});n(67294);var r=n(45238),i=n(85893);const o=(0,r.I)("templates",{viewBox:"0 0 20 20",svg:(0,i.jsxs)("g",{children:[(0,i.jsx)("path",{d:"M6.39733 5.67853C5.89764 5.50234 5.36002 5.40649 4.8 5.40649C2.14904 5.40649 0 7.55432 0 10.2038C0 12.8533 2.14904 15.0011 4.8 15.0011C6.52165 15.0011 8.0316 14.0952 8.87867 12.7343L5.26487 12.0975L6.39733 5.67853Z"}),(0,i.jsx)("path",{d:"M17.3126 3.66609L7.85843 2L6.19141 11.4489L10.6545 12.2354L14.3998 5.81854L16.3449 9.15116L17.3126 3.66609Z"}),(0,i.jsx)("path",{d:"M8.80078 17L14.4008 7.4054L20.0008 17H8.80078Z"})]})})},80503:(e,t,n)=>{n.d(t,{Aj:()=>i,R6:()=>s,TT:()=>r,br:()=>o,u3:()=>a});const r=52,i=45,o=37;function s(e){return e?o:i}function a(e){return 2*s(e)}}}]);