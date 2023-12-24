"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9956,7509],{13005:(e,t,n)=>{n.d(t,{ZP:()=>Z,j9:()=>b,nJ:()=>j});var o=n(67294),r=n(480),i=n(86628),l=n(24405),s=n(80721),c=n(64275),a=n(12392),d=n(82990),u=n(5149),h=n(12534),p=n(87279),v=n(13273),f=n(25130),w=n(58421),x=n(64921),C=n(73063),g=n(36488),m=n(3386),y=n(78140),S=n(40721),k=n(85893);const j=290,b=400;function L(e){let{children:t,title:n,settingsStackLength:o,handleClose:r,handleBackArrowClick:i,hideDesktopHeader:a}=e;window.__c={n:"CollectionSettingsMenuHeader"};const u=(0,l.yK)((e=>({hiddenDesktopHeaderDiv:{height:6},nonHiddenDesktopHeaderDiv:{display:"flex",alignItems:"center",padding:"14px 16px 6px 16px",height:42},arrowButon:{marginRight:8,marginLeft:-2,height:22},arrowIcon:{width:16,height:16},title:{flexGrow:1,fontWeight:d.Z.fontWeight.semibold,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},closeButton:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"100%",background:e.buttonHoveredBackground,width:18,height:18,flexShrink:0},closeButtonHover:{background:e.buttonPressedBackground},closeIcon:{width:14,fill:e.mediumTextColor}})),[]);return(0,k.jsxs)(k.Fragment,{children:[a&&(0,k.jsx)("div",{style:u.hiddenDesktopHeaderDiv}),!a&&(0,k.jsxs)("div",{style:u.nonHiddenDesktopHeaderDiv,children:[o>1&&(0,k.jsx)(C.Z,{icon:s.W,style:u.arrowButon,iconStyle:u.arrowIcon,onClick:i}),(0,k.jsx)("span",{style:u.title,children:n}),(0,k.jsx)(x.Z,{onClick:r,style:u.closeButton,hoveredStyle:u.closeButtonHover,children:(0,c.D)(u.closeIcon)})]}),t]})}const Z=function(e){let{children:t,footer:n,header:l,unconstrainedWidth:s,desktopWidth:c,title:d,collectionSettingsStore:x,fullHeight:b,hideDesktopHeader:Z,menuScrollerStyle:D,handleBackArrowClick:B,handleClose:A}=e;window.__c={n:"CollectionSettingsMenu"};const R=(0,r.Fy)(),{currentTab:H,settingsStackLength:I}=(0,i.VK)((()=>{const e=x.state;return{currentTab:(0,w.n)(x),settingsStackLength:e.stack.length}}),[x]),M=(0,o.useCallback)((()=>{B?B():u.z$({collectionSettingsStore:x})}),[B,x]),T=(0,o.useCallback)((e=>{A?A(e):(0,h.ZP)({event:e,context:h.Af.CollectionSettingsClick,callback:()=>{u.E3({collectionSettingsStore:x})}})}),[A,x]),P=(0,o.useCallback)((e=>{(0,v.jM)(e.target)||(0,v.al)(e.target)||T(e)}),[T]),{MenuArrowKeysProvider:z,context:_}=(0,f.ZP)();if(!H)return null;let K;if(R.isMobile)K={menuType:p.og.Modal,title:d,left:I>1&&(0,k.jsx)(C.Z,{icon:a.S,onClick:M}),right:(0,k.jsx)(S.DoneMenuText,{}),onClickRight:T,scrollerStyle:{...D}};else{const e=s||c?void 0:j;K={menuType:p.og.Popup,minWidth:j,width:c,maxHeight:b?"calc(100% - 16px)":"50vh",...e&&{maxWidth:e},onClickOutside:P,scrollerStyle:{flexGrow:0,...D},header:(0,k.jsx)(L,{settingsStackLength:I,handleClose:T,handleBackArrowClick:M,hideDesktopHeader:Z,title:d,children:l}),footer:n}}const E=(0,k.jsxs)(k.Fragment,{children:[R.isMobile&&l,t,R.isMobile&&n]});return b?(0,k.jsx)(z,{value:_,children:(0,k.jsx)(m.Z,{capture:!0,onUp:_.onKeyDown,onDown:_.onKeyDown,children:(0,k.jsx)(y.Z,{...K,children:E})})}):(0,k.jsx)(g.Z,{capture:!0,allowMobileAutoScroll:!0,allowEsc:!0,allowMenuList:!0,render:e=>(0,k.jsx)(z,{value:_,children:(0,k.jsx)(m.Z,{capture:!0,onUp:_.onKeyDown,onDown:_.onKeyDown,children:(0,k.jsx)(y.Z,{...K,...e,children:E})})})})}},97820:(e,t,n)=>{n.d(t,{Z:()=>f});n(67294);var o=n(83355),r=n(480),i=n(86628),l=n(99036),s=n(39068),c=n(82990),a=n(19124),d=n(61766),u=n(76836),h=n(85893);const p={display:"flex",alignItems:"center",lineHeight:"120%",minWidth:0};class v extends o.Z{constructor(){super(...arguments),this.storeTypes={buttonPopupStore:d.Z}}renderComponent(){const{device:e}=this.environment,{propertySchema:t,showIcon:n,hideName:o,showBadge:r,style:i}=this.props,l=e.isMobile?16:14;return(0,h.jsxs)("div",{style:{...p,fontSize:l,...i},children:[n&&(0,h.jsx)("div",{style:w(this.props.hideName,this.props.iconStyle),children:this.renderIcon()}),!o&&(0,h.jsx)("div",{style:{...c.Z.textOverflowStyle},children:t.name}),r&&(0,h.jsx)(x,{propertySchema:this.props.propertySchema})]})}renderIcon(){const{device:e}=this.environment,{propertySchema:t}=this.props,{theme:n}=this,o=e.isMobile?18:16;return(0,h.jsx)(s.ZP,{type:t.type,icon:t.icon,size:this.props.iconSize||o,theme:n,style:this.props.iconStyle})}}v.displayName="Property";const f=v;function w(e,t){return{marginRight:e?void 0:6,...t}}function x(e){let{propertySchema:t}=e;window.__c={n:"Badge"};const n=(0,r.O7)();return(0,i.VK)((()=>(0,a.Zt)(n)&&l.qQ(t)&&l.q3(t)&&("text"===t.type||(0,a.KZ)())),[n,t])?(0,h.jsx)(u.Z,{}):null}},68641:(e,t,n)=>{n.d(t,{HV:()=>r,WY:()=>l,jI:()=>i,vw:()=>s});n(21703);var o=n(6695);let r=function(e){return e[e.ViewSettings=0]="ViewSettings",e[e.FilterBar=1]="FilterBar",e[e.TopbarFilterPopup=2]="TopbarFilterPopup",e[e.TopbarSortPopup=3]="TopbarSortPopup",e[e.ViewBlock=4]="ViewBlock",e}({});function i(e){const{timelineViewTab:t,collectionContextStore:n}=e,r=l({collectionContextStore:n}),i=s({collectionContextStore:n});return"timeline"===r?"timeline"===t?"timeline_properties":i?"timeline_table_properties":void 0:(0,o.oz)(l({collectionContextStore:n}))}function l(e){var t;const{collectionContextStore:n}=e,o=null===(t=n.collectionViewStore())||void 0===t?void 0:t.getType();if(!o)throw new Error("View type was not defined.");return o}function s(e){const{collectionContextStore:t}=e,n=t.normalizedFormatStore.state;return Boolean(n.timeline_show_table)}},25130:(e,t,n)=>{n.d(t,{ZP:()=>d,nq:()=>a,o$:()=>c});var o=n(67294),r=n(55010);const i=(0,o.createContext)({menuItemRefs:{current:new Set},activeRef:void 0,setActiveRef:()=>{},onKeyDown:()=>{}});function l(e){const t=new Map(Array.from(e).filter((e=>e.current)).map((e=>[e.current,e])));return{sortedElements:Array.from(t.keys()).sort(r.Z),nodeToRef:t}}function s(){return(0,o.useContext)(i)}function c(){const{menuItemRefs:e,activeRef:t,setActiveRef:n}=s(),r=(0,o.useRef)(null),i=(0,o.useCallback)((o=>{var i,l;function s(){t||n(r),null==o||o.removeEventListener("focus",s)}(r.current&&(null==o||o.removeEventListener("focus",s)),o)&&(0===(null===(l=e.current)||void 0===l?void 0:l.size)&&o.addEventListener("focus",s));r.current=o,null===(i=e.current)||void 0===i||i.add(r)}),[e,r,t,n]);return(0,o.useEffect)((()=>{const t=e.current;return()=>{null==t||t.delete(r)}}),[e]),(0,o.useEffect)((()=>{const o=e.current;return()=>{if(null===(null==t?void 0:t.current)&&t===r&&o){const{sortedElements:e,nodeToRef:t}=l(o),r=e[0];r&&t.has(r)&&n(t.get(r))}}}),[t,n,e]),[i,r]}function a(e){const{activeRef:t}=s();return t===e||void 0===t}const d=function(){let{direction:e="vertical"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,o.useRef)(new Set),[n,r]=(0,o.useState)(void 0),s=(0,o.useCallback)((o=>{let{code:i}=o;if("vertical"===e&&!["ArrowUp","ArrowDown"].includes(i)||"horizontal"===e&&!["ArrowLeft","ArrowRight"].includes(i))return;const{nodeToRef:s,sortedElements:c}=l(t.current),a=c.findIndex((e=>e===(null==n?void 0:n.current)));let d;if("vertical"===e&&"ArrowDown"===i||"horizontal"===e&&"ArrowRight"===i?d=a+1>=t.current.size?0:a+1:("vertical"===e&&"ArrowUp"===i||"horizontal"===e&&"ArrowLeft"===i)&&(d=a-1<0?t.current.size-1:a-1),void 0!==d){const e=c[d];e&&(r(s.get(e)),e.focus())}}),[n,e]);return{MenuArrowKeysProvider:i.Provider,context:{menuItemRefs:t,activeRef:n,setActiveRef:r,onKeyDown:s}}}},80721:(e,t,n)=>{n.d(t,{W:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.I)("arrowLeftThick",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M1.54004 8.05762C1.54004 8.2627 1.62891 8.46094 1.78613 8.61133L6.29102 13.1162C6.45508 13.2734 6.63965 13.3486 6.82422 13.3486C7.25488 13.3486 7.5625 13.041 7.5625 12.6309C7.5625 12.4189 7.48047 12.2344 7.34375 12.1045L5.8125 10.5527L3.78906 8.70703L5.38867 8.80273H13.7012C14.1455 8.80273 14.46 8.49512 14.46 8.05762C14.46 7.61328 14.1455 7.3125 13.7012 7.3125H5.38867L3.7959 7.4082L5.8125 5.5625L7.34375 4.01074C7.48047 3.87402 7.5625 3.68945 7.5625 3.47754C7.5625 3.06738 7.25488 2.7666 6.82422 2.7666C6.63965 2.7666 6.45508 2.83496 6.27734 3.00586L1.78613 7.50391C1.62891 7.64746 1.54004 7.85254 1.54004 8.05762Z"})})},72787:(e,t,n)=>{n.d(t,{Y:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.I)("chevronDownThin",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M8.004 12a.72.72 0 00.54-.237l6.238-6.487A.735.735 0 0015 4.753c0-.426-.314-.753-.733-.753a.76.76 0 00-.524.213l-5.739 5.955-5.747-5.955A.73.73 0 001.733 4C1.314 4 1 4.327 1 4.753c0 .204.08.384.218.531l6.238 6.479a.751.751 0 00.548.237z"})})},12392:(e,t,n)=>{n.d(t,{S:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.I)("historyBack",{viewBox:"0 0 14 14",svg:(0,r.jsx)("polygon",{points:"2.85893 7.74676 8.05608 12.9439 7 14 0.528042 7.52804 0 7 0.528042 6.47196 7 0 8.05608 1.05608 2.85893 6.25324 14 6.25324 14 7.74676"})})},27714:(e,t,n)=>{n.d(t,{N:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.I)("link",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"})})}}]);