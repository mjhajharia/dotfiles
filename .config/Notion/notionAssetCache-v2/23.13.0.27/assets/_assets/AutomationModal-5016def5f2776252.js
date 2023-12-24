"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5645],{10644:(e,t,n)=>{n.r(t),n.d(t,{AutomationModal:()=>k});var o=n(67294),i=n(480),a=n(86628),r=n(24405),c=n(63362),l=n(82990),s=n(68939),d=n(42922),u=n(1743),m=n(50506),f=n(89728),p=n(31278),x=n(65187),g=n(17809),h=n(63474),b=n(80444),y=n(58454),w=n(51757),S=n(85893);const j=(0,s.defineMessages)({confirmationDialogAriaLabel:{defaultMessage:"Confirmation",id:"automations.ConfirmationDialog.ariaLabel"}});function k(){window.__c={n:"AutomationModal"};const e=(0,a.VK)((()=>y.Z.state),[]),t=(0,i.Fy)(),n=(0,a.VK)((()=>t.isPhone),[t]),l=(0,r.yK)((e=>({innerStyle:{padding:24,width:n?"calc(100% - 20px)":320}})),[n]),s=(0,h.D)(),d=(0,a.VK)((()=>{var e;return null===(e=b.default.state.currentSpaceViewStore)||void 0===e?void 0:e.getSpaceId()}),[]),u=(0,o.useCallback)((e=>{y.Z.setState({open:!1,result:e});const t=y.Z.state;(0,c.W5)(s,{automation_id:t.open&&t.recordStore instanceof w.Mz?t.recordStore.id:void 0,option:e})}),[s]),f=(0,o.useCallback)((()=>u("cancel")),[u]),p=function(){const e=(0,a.VK)((()=>y.Z.state),[]),[t,n]=(0,o.useReducer)(((e,t)=>e+1),1),i=(0,o.useRef)(void 0);return(0,o.useEffect)((()=>{e.open&&e.format!==i.current&&(n(void 0),i.current=e.format)}),[e,i]),t}();return(0,S.jsx)(m.Z,{open:e.open,keepFocus:!0,innerStyle:l.innerStyle,disableAnimation:!0,onDismiss:f,render:()=>e.open&&d&&(0,S.jsx)(v,{id:`${p}`,modalState:e,onDismiss:u},`${p}`)})}function v(e){window.__c={n:"OpenAutomationModal"};const{id:t,modalState:n,onDismiss:i}=e,{icon:a}=n.format,c=(0,s.useIntl)(),m=(0,o.useRef)(null);(0,o.useEffect)((()=>{null!==m.current&&m.current.focus()}),[]);const h=(0,r.yK)((e=>({wrap:{display:"flex",flexDirection:"column"},buttonWrap:{display:"flex",flexDirection:"column",gap:10,marginTop:10},textWrap:{whiteSpace:"pre-wrap",wordBreak:"break-word",textAlign:"center",fontWeight:l.Z.fontWeight.medium,marginTop:10,marginBottom:10,display:"flex",flexDirection:"column",alignItems:"center"},icon:{marginBottom:10},cancelButton:{justifyContent:"center"}})),[]),{store:b}=(0,g.Cl)({initialValue:n.format.text,onChange:()=>{}}),y=[(0,S.jsx)(d.Z,{isLarge:!0,onClick:()=>i("continue"),ref:m,children:n.format.continueButtonText},"continue"),(0,S.jsx)(f.Z,{isLarge:!0,onClick:()=>i("cancel"),isLightGray:!0,style:h.cancelButton,children:n.format.cancelButtonText},"cancel")],w=`automation-modal-dialog-${t}`;return(0,S.jsx)(u.Z,{capture:!0,allowEsc:!0,children:(0,S.jsxs)("div",{"aria-modal":"true","aria-label":c.formatMessage(j.confirmationDialogAriaLabel),"aria-describedby":w,role:"dialog",style:h.wrap,children:[(0,S.jsxs)("div",{style:h.textWrap,children:[a&&(0,S.jsx)("div",{style:h.icon,children:(0,S.jsx)(p.Z,{size:50,icon:{icon:a,pointer:n.recordStore.pointer},disabled:!0,isEmptyPage:!1,bucket:"public",onChange:()=>{}})}),(0,S.jsx)("div",{id:w,children:(0,S.jsx)(x.Z,{disabled:!0,store:b,parentStore:n.recordStore})})]}),(0,S.jsx)("div",{style:h.buttonWrap,children:y})]})})}}}]);