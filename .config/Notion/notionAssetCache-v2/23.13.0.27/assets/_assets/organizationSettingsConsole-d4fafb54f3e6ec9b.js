"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3207],{14694:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var i=n(480),o=n(86628),r=n(24405),a=n(39567),s=n(50659),l=n(85893);function d(){window.__c={n:"AliasIcon"};const e=(0,r.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,l.jsx)("div",{children:(0,a.Y)(e.icon)})}function c(e){var t;window.__c={n:"SidebarItem"};const n=(0,i.O7)(),a=n.device.isMobile,c=(0,o.VK)((()=>{var t,i;if(a)return n.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(i=e.style)||void 0===i?void 0:i.paddingLeft:10)}),[n.WindowSizeStore,a,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),u=(0,r.yK)((t=>({wrapper:{...a?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:c,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,minHeight:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,s.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:a?28:22,height:a?24:18,marginLeft:-3,marginRight:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:4,color:t.mediumTextColor,width:a?26:22,height:a?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!a?"clip":"ellipsis",...e.childrenStyle}})),[a,c,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle]);return(0,l.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:u.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,l.jsx)("div",{style:u.left,children:e.left}),e.icon&&(0,l.jsxs)("div",{style:u.icon,children:[e.icon,e.isAlias&&(0,l.jsx)(d,{})]}),(0,l.jsx)("div",{style:u.children,children:e.children}),e.right&&(0,l.jsx)("div",{style:u.right,children:e.right})]})}},79921:(e,t,n)=>{n.d(t,{v:()=>r});n(67294);var i=n(24405),o=n(85893);function r(e){let{left:t,right:n}=e;window.__c={n:"ConsoleContainer"};const r=(0,i.yK)((e=>({grid:{display:"grid",gridTemplateColumns:"250px 1fr"},leftColumnFixed:{position:"relative"},rightColumn:{position:"relative",background:e.contentBackground}})),[]);return(0,o.jsxs)("div",{style:r.grid,children:[(0,o.jsx)("div",{style:r.leftColumnFixed,children:t}),(0,o.jsx)("div",{style:r.rightColumn,children:n})]})}},18509:(e,t,n)=>{n.r(t),n.d(t,{OrganizationSettingsConsole:()=>p,OrganizationSettingsConsoleImpl:()=>f});var i=n(67294),o=n(480),r=n(86628),a=n(80444),s=n(79921),l=n(61149),d=n(12066),c=n(75018),u=n(8879),m=n(86631),g=n(85893);function h(e){let{organizationId:t,currentUserStore:n,selectedTabName:r}=e;window.__c={n:"OrganizationSidebar"};const a=(0,o.O7)(),s=(0,i.useMemo)((()=>d.cZ.filter((e=>(0,u.eT[e.name])({environment:a,currentUserStore:n,organizationId:t})))),[n,a,t]),h=(0,i.useMemo)((()=>s.map((e=>({id:e.name,name:u.ow[e.name].tab.name,icon:u.ow[e.name].tab.icon,isSelected:r===e.name,onClick:()=>{c.navigate({environment:a,url:(0,l.a5)({organizationId:t,tabRoute:e})})}})))),[a,s,r,t]);return(0,g.jsx)(m.Z,{items:h})}function f(e){let{organizationId:t,tabName:n,properties:i,params:l}=e;window.__c={n:"OrganizationSettingsConsoleImpl"};const d=(0,o.O7)(),c=(0,r.VK)((()=>a.default.state.currentUserStore),[]);if(!t)return null;if(!n)return null;const m=u.ow[n];return(0,u.eT[n])({environment:d,currentUserStore:c,organizationId:t})?(0,g.jsx)(s.v,{left:(0,g.jsx)(h,{organizationId:t,currentUserStore:c,selectedTabName:n}),right:m.scene({properties:i,queryParams:l,organizationId:t})}):null}const p=(0,n(73150).b)(f)},86631:(e,t,n)=>{n.d(t,{Z:()=>d});n(67294);var i=n(24405),o=n(82990),r=n(50659),a=n(11066),s=n(14694),l=n(85893);function d(e){let{items:t}=e;window.__c={n:"BaseSidebar"};const n=(0,i.yK)((e=>({container:{background:e.sidebarBackground,boxShadow:e.sidebarBoxShadow,paddingBlock:4,width:"100%",height:"100vh",display:"flex",flexDirection:"column",gap:2},itemButton:{fontWeight:o.Z.fontWeight.medium,color:e.regularTextColor,...(0,r.G$)({isMobile:!1})},itemIcon:{fill:e.mediumIconColor,width:18},selectedItemIcon:{fill:e.regularIconColor,width:18},selectedItemButton:{background:e.buttonHoveredBackground},sidebarItemContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}})),[]);return(0,l.jsx)("div",{style:n.container,children:t.map((e=>{const t=e.isSelected?{...n.itemButton,...n.selectedItemButton}:n.itemButton,i=e.isSelected?n.selectedItemIcon:n.itemIcon;return(0,l.jsx)(a.Z,{style:t,children:(0,l.jsx)(s.Z,{style:n.sidebarItemContainer,left:e.icon(i),onClick:e.onClick,children:e.name})},e.id)}))})}},8879:(e,t,n)=>{n.d(t,{eT:()=>f,ow:()=>p,QV:()=>x,GF:()=>b});n(67294);var i=n(18442),o=n(62397),r=n(56996),a=n(26774),s=n(68939),l=n(480),d=n(4615),c=n(61149),u=n(12066),m=n(75018),g=n(85893);function h(e){window.__c={n:"OrganizationHomeScene"};const t=(0,l.O7)();return(0,g.jsxs)("div",{children:["Home",(0,g.jsx)("button",{onClick:()=>{m.navigate({environment:t,url:(0,c.zh)({workspaceId:(0,d.ZP)(),tabRoute:u.Gu})})},children:"Go to workspace"})]})}const f={home:e=>{let{environment:t,currentUserStore:n,organizationId:i}=e;return!0},security:e=>{let{environment:t,currentUserStore:n,organizationId:i}=e;return!0},people:e=>{let{environment:t,currentUserStore:n,organizationId:i}=e;return!0}},p={home:{tab:{icon:r.z,name:(0,g.jsx)(s.FormattedMessage,{id:"settingsConsole.organization.tabNames.home",defaultMessage:"Home"})},scene:e=>(0,g.jsx)(h,{...e})},security:{tab:{icon:o.I,name:(0,g.jsx)(s.FormattedMessage,{id:"settingsConsole.organization.tabNames.security",defaultMessage:"Security"})},scene:e=>(0,g.jsx)("div",{children:"security"})},people:{tab:{icon:a.O,name:(0,g.jsx)(s.FormattedMessage,{id:"settingsConsole.organization.tabNames.people",defaultMessage:"People"})},scene:e=>(0,g.jsx)("div",{children:"people"})}},x={members:e=>{let{environment:t,currentUserStore:n,workspaceId:i}=e;return!0},security:e=>{let{environment:t,currentUserStore:n,workspaceId:i}=e;return!0}},b={members:{tab:{icon:a.O,name:(0,g.jsx)(s.FormattedMessage,{id:"settingsConsole.workspace.tabNames.members",defaultMessage:"Members"})},scene:e=>(0,g.jsx)("div",{children:"members"})},security:{tab:{icon:i.H,name:(0,g.jsx)(s.FormattedMessage,{id:"settingsConsole.workspace.tabNames.security",defaultMessage:"Settings"})},scene:e=>(0,g.jsx)("div",{children:"security"})}}},73150:(e,t,n)=>{n.d(t,{b:()=>c});var i=n(67294),o=n(480),r=n(86628),a=n(89101),s=n(75018),l=n(77080),d=n(85893);function c(e){return t=>{const n=(0,o.O7)(),c=(0,r.VK)((()=>l.default.checkGate("admin_console_enabled")),[]);return(0,i.useEffect)((()=>{c||s.navigate({environment:n,url:a._j.root})}),[n,c]),c?(0,d.jsx)(e,{...t}):null}}},50659:(e,t,n)=>{n.d(t,{G$:()=>o,MF:()=>r,Z3:()=>i});function i(e){let{isMobile:t}=e;return{...!t&&{borderRadius:3}}}function o(e){let{isMobile:t}=e;return t?{}:{...i({isMobile:t}),marginLeft:4,marginRight:4,width:"calc(100% - 8px)"}}function r(){return{paddingLeft:10,paddingRight:10}}},62397:(e,t,n)=>{n.d(t,{I:()=>r});n(67294);var i=n(45238),o=n(85893);const r=(0,i.I)("settingsSecurity",{viewBox:"0 0 11 20",svg:(0,o.jsx)("path",{d:"M4.92129 19.3231C5.26719 19.627 5.74092 19.6649 6.07178 19.3383L8.38779 16.9913C8.71865 16.6571 8.70361 16.1558 8.38027 15.8292L7.2749 14.7127L8.92168 13.0569C9.2375 12.7379 9.22998 12.229 8.90664 11.8948L7.41026 10.3757C9.44805 9.35026 10.5985 7.64127 10.5985 5.62847C10.5985 2.78016 8.32012 0.486328 5.49277 0.486328C2.66543 0.486328 0.394531 2.77257 0.394531 5.62847C0.394531 7.67166 1.54502 9.50217 3.37979 10.3301V17.4622C3.37979 17.7357 3.4625 18.0471 3.69561 18.2446L4.92129 19.3231ZM5.49277 17.9863L4.68066 17.166V9.34266C2.95869 8.9629 1.73301 7.4438 1.73301 5.62847C1.73301 3.53972 3.40986 1.84592 5.49277 1.84592C7.57569 1.84592 9.24502 3.53212 9.24502 5.62847C9.24502 7.42101 8.01181 8.96289 6.13194 9.38824V11.0289L7.57569 12.4872L6.03418 14.0214V15.3887L7.04931 16.3989L5.49277 17.9863ZM5.49277 5.67405C6.23721 5.67405 6.83877 5.06641 6.83877 4.32205C6.83877 3.5777 6.23721 2.97005 5.49277 2.97005C4.74834 2.97005 4.1543 3.5701 4.1543 4.32205C4.1543 5.06641 4.75586 5.67405 5.49277 5.67405Z"})})}}]);