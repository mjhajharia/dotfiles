"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3e3],{6191:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});n(67294);var s=n(69343),a=n(40782),r=n(83355),i=n(49085),l=n(72141),o=(n(15047),n(29369)),d=(n(64684),n(97880)),c=n(74487);const p=c.object({required:{id:c.string(),isBot:c.boolean()},optional:{email:c.string(),parent_table:c.string()}}),u=c.object({required:{parentId:c.string(),parentTable:c.string()},optional:{}}),h=c.object({required:{id:c.string(),table:c.string(),title:c.string()},optional:{}}),b=c.object({required:{id:c.string(),table:c.literal("space")},optional:{name:c.string(),plan_type:c.string()}}),m=c.object({required:{time:c.string(),type:c.string(),authors:c.array(p)},optional:{pageId:c.string(),blockId:c.string()}}),g=c.object({required:{type:c.literals(...l.UF)},optional:{role:c.literals(...l.Av),id:c.string(),name:c.string()}}),x=c.object({required:{before:g,after:g},optional:{}}),j=c.object({required:{id:c.string(),time:c.string(),type:c.string(),authors:c.array(p),edits:c.array(m)},optional:{page:h,addedPermissions:c.array(g),removedPermissions:c.array(g),changedPermissions:c.array(x)}}),f=c.object({required:{id:c.string(),name:c.string(),isDefault:c.boolean(),accessLevel:c.literals(...o.bx),isArchived:c.boolean()},optional:{}});var y=n(75553),v=n(21158),C=n(72126),k=n(99405),_=n(36054),L=n(14871),P=n(73063),w=n(50506),S=n(85893);const $={scheme:"dirtysea",author:"Kahlil (Kal) Hodgson",base00:"unset",base01:"#d0dad0",base02:"#d0d0d0",base03:"#707070",base04:"#202020",base05:"#000000",base06:"#f8f8f8",base07:"#c4d9c4",base08:"#840000",base09:"#006565",base0A:"#755B00",base0B:"#730073",base0C:"#755B00",base0D:"#007300",base0E:"#000090",base0F:"#755B00"},B={scheme:"OneDark",author:"Lalit Magant (http://github.com/tilal6991)",base00:"unset",base01:"#353b45",base02:"#3e4451",base03:"#545862",base04:"#565c64",base05:"#abb2bf",base06:"#b6bdca",base07:"#c8ccd4",base08:"#e06c75",base09:"#d19a66",base0A:"#e5c07b",base0B:"#98c379",base0C:"#56b6c2",base0D:"#61afef",base0E:"#c678dd",base0F:"#be5046"};function T(e){let{table:t,id:n}=e,s=t;return"user"===s&&(s="notion_user"),k._O.includes(s)?(0,S.jsx)("a",{style:{cursor:"pointer",textDecoration:"none",paddingLeft:6},href:`/__admin/${s}/${n}`,children:"🔗"}):null}const A=e=>{let{data:t}=e;return(0,_.P9)(g,t)?{expanded:!1,element:(0,S.jsx)("span",{children:(0,S.jsx)("span",{style:{fontSize:16},children:R({type:t.type,name:t.name,role:t.role})})})}:null};function R(e){let t,{type:n,name:s,role:a,endRole:r}=e;switch(n){case"deleted_permission":t="Permanently deleted";break;case"restricted_permission":t="Restricted";break;case"user_permission":t="User";break;case"bot_permission":t="Bot";break;case"group_permission":t="Group";break;case"team_permission":case"explicit_team_permission":t="Teamspace";break;case"team_owner_permission":case"explicit_team_owner_permission":t="Teamspace Owners";break;case"explicit_team_guest_permission":t="Teamspace Guests";break;case"space_permission":t="Space";break;case"public_permission":t="Public";break;case"exclusive_user_permission":t="User (Exclusive)";break;default:(0,d.t1)(n)}const i=Boolean(s),l=`[${t}]`;let o;a&&r?o=`${a} -> ${r}`:a&&(o=a);const c=Boolean(o);return i&&c?(0,S.jsx)("span",{children:`${l}: ${s} - ${o}`}):i?(0,S.jsx)("span",{children:`${l}: ${s}`}):c?(0,S.jsx)("span",{children:`${l}: ${o}`}):(0,S.jsx)("span",{children:l})}const q=[e=>{let{data:t}=e;return(0,_.P9)(u,t)?{expanded:!1,element:(0,S.jsxs)("span",{children:[t.parentTable," ",t.parentId,(0,S.jsx)(T,{table:t.parentTable,id:t.parentId})]})}:null},e=>{let{data:t}=e;return(0,_.P9)(b,t)?{expanded:!1,element:(0,S.jsxs)("span",{children:[t.name||t.id,(0,S.jsx)(T,{table:"space",id:t.id})]})}:null},e=>{let t,{data:n}=e;if(!(0,_.P9)(p,n))return null;if(n.isBot){t=`${"name"in n?n.name:"UNNAMED"}, ${n.id} (bot)`}else t=n.email;return{expanded:!1,element:(0,S.jsxs)("span",{children:[t,(0,S.jsx)(T,{table:n.parent_table||"notion_user",id:n.id})]})}},e=>{let{data:t}=e;return(0,_.P9)(h,t)?{expanded:!1,element:(0,S.jsxs)("span",{children:[t.title,(0,S.jsx)(T,{table:t.table||"block",id:t.id})]})}:null},e=>{let{data:t}=e;return(0,_.P9)(f,t)?{expanded:!1,element:(0,S.jsxs)("span",{children:[t.name,(0,S.jsx)(T,{table:o.e0,id:t.id})]})}:null},e=>{var t;let{data:n}=e;if(!(0,_.P9)(j,n))return null;const s=n.authors&&0!==n.authors.length?1===n.authors.length?n.authors[0].email:`${n.authors.length} users`:"an unknown user",a=(null===(t=n.page)||void 0===t?void 0:t.title)??"Unknown page";return{expanded:!1,element:(0,S.jsxs)("span",{children:[(0,S.jsxs)("span",{style:{fontSize:16},children:[n.time,": ",(0,S.jsx)("b",{children:n.type})," on page ",(0,S.jsx)("b",{children:a})," by"," ",(0,S.jsx)("b",{children:s})]}),(0,S.jsx)(T,{table:"activity",id:n.id})]})}},e=>{let{data:t}=e;if(!(0,_.P9)(m,t))return null;const n=t.authors&&0!==t.authors.length?1===t.authors.length?t.authors[0].email:`${t.authors.length} users`:"an unknown user";return{expanded:!1,element:(0,S.jsx)("span",{children:(0,S.jsxs)("span",{style:{fontSize:16},children:[t.time,": ",(0,S.jsx)("b",{children:t.type})," by ",(0,S.jsx)("b",{children:n})]})})}},e=>{let{data:t}=e;return(0,_.P9)(x,t)?{expanded:!1,element:(0,S.jsx)("span",{children:(0,S.jsx)("span",{style:{fontSize:16},children:R({type:t.before.type,name:t.before.name,role:t.before.role,endRole:t.after.role})})})}:null},A,e=>{let{data:t,keyPath:n}=e;return(0,_.P9)(c.array(g),t)&&1===t.length?A({data:t[0],keyPath:n}):null},e=>{let{data:t}=e;return Array.isArray(t)?t.some((e=>C.Kn(e)))||t.length>10?null:0===t.length?{element:(0,S.jsx)("span",{children:"[]"}),expanded:!1}:{element:(0,S.jsx)("span",{children:t.join(", ")}),expanded:!1}:null},e=>{let{data:t,keyPath:n}=e;if("billing"===n[0]){const e=t;return e.isSubscribed?{element:(0,S.jsxs)("span",{children:["isSubscribed=true ",e.planType]}),expanded:!0}:{element:(0,S.jsx)("span",{children:"isSubscribed=false"}),expanded:!1}}return null}];function I(e){return e.length>50?`${e.substr(0,49)}...`:e}class O extends r.Z{constructor(){super(...arguments),this.storeTypes={modalOpen:i.default.createClass(!1)},this.customCollapsedRenderers=[...this.props.customCollapsedRenderers||[],...q]}renderComponent(){var e=this;const{data:t,defaultCollapsed:n,showCopyButton:r,showModalButton:i,jsonTreeRef:l,maxLinkValueLength:o}=this.props,d=r||i;return(0,S.jsxs)("div",{style:{position:"relative",width:"100%",backgroundColor:N(this.environment).base00},children:[(0,S.jsx)("div",{style:{marginRight:d?30:void 0},children:(0,S.jsx)(s.L,{ref:l,data:t,hideRoot:!0,invertTheme:!1,theme:{extend:N(this.environment),tree:{marginTop:0,marginBottom:0,marginLeft:0,paddingTop:0,userSelect:"auto"}},getItemString:(e,t,n,s,a)=>{for(const r of this.customCollapsedRenderers){const e=r({data:t,keyPath:a});if(e)return e.element}return(0,S.jsxs)("span",{children:[n," ",s]})},shouldExpandNode:(e,t,s)=>{for(const a of this.customCollapsedRenderers){const s=a({data:t,keyPath:e});if(s)return s.expanded??!n}return!n},valueRenderer:function(t,n){for(var s=arguments.length,a=new Array(s>2?s-2:0),r=2;r<s;r++)a[r-2]=arguments[r];function i(){const e=a[0].toString();var t;if("id"===e)return(0,S.jsx)(T,{id:n,table:null===(t=a[1])||void 0===t?void 0:t.toString()});if(e.endsWith("_id")||e.endsWith("Id")){const t=e.replace("_id","").replace("Id","");return(0,S.jsx)(T,{id:n,table:t})}return null}const l=i();return null!=n&&n.toString().startsWith("http")?(0,S.jsx)("a",{style:{cursor:"pointer"},href:n,children:o&&t.length>o?`${t.substring(0,o/2)}[...]${t.substring(t.length-o/2)}`:n}):(0,S.jsxs)("span",{children:[(0,S.jsx)("span",{onClick:()=>D(n,e.environment),children:null!=n?n.toString():"null"})," ",l]})}})}),r&&(0,S.jsx)(P.Z,{caption:"small"===r?void 0:"Copy JSON",style:{position:"absolute",top:2,right:2,padding:2,width:"small"===r?14:void 0,height:"small"===r?14:void 0},iconStyle:{width:"small"===r?10:20,height:"small"===r?10:20},icon:y.U,onClick:e=>{L.Pm(this.environment,t),(0,a.Am)(`Copied ${I(JSON.stringify(t))} to clipboard`),e.stopPropagation()}}),(0,S.jsx)(w.Z,{open:this.stores.modalOpen.state,innerStyle:{maxHeight:"90vh",maxWidth:"90vw",height:"90vh",width:"90vw",overflow:"scroll"},onDismiss:()=>{this.stores.modalOpen.setState(!1)},render:()=>(0,S.jsx)(O,{...this.props,defaultCollapsed:!1,showModalButton:!1})}),i&&(0,S.jsx)(P.Z,{style:{position:"absolute",top:2,right:16,padding:2,height:14,width:14},iconStyle:{width:10,height:10},icon:v.h,onClick:()=>{this.stores.modalOpen.setState(!0)}})]})}}function D(e,t){L.Pm(t,e),(0,a.Am)(`Copied ${I(e)} to clipboard`)}function N(e){return"dark"===e.ThemeStore.state.mode?B:$}O.displayName="AdminReactJson"},21158:(e,t,n)=>{n.d(t,{h:()=>r});n(67294);var s=n(45238),a=n(85893);const r=(0,s.I)("openAsPage",{viewBox:"0 0 16 16",svg:(0,a.jsx)("path",{d:"M3.22605 12.855C3.36623 12.9952 3.55957 13.0822 3.77226 13.0725L8.83802 13.0338C9.04103 13.0338 9.24405 12.9468 9.36973 12.8212C9.67425 12.5166 9.65975 12.1058 9.36973 11.8157C9.21988 11.6659 9.05553 11.6079 8.86702 11.6127L6.79818 11.6417L5.26105 11.7577L6.39215 10.7136L10.7087 6.39712L11.7528 5.26603L11.6319 6.80799L11.6029 8.87683C11.6029 9.06051 11.6561 9.22969 11.8059 9.37954C12.096 9.66956 12.5117 9.67923 12.8162 9.3747C12.9419 9.24902 13.0289 9.04601 13.024 8.84782L13.0675 3.77723C13.0724 3.56938 12.9902 3.3712 12.85 3.23102C12.7098 3.09084 12.5165 3.0135 12.3038 3.0135L7.23805 3.06184C7.03987 3.05701 6.83685 3.14401 6.71117 3.26969C6.40665 3.57422 6.41631 3.98992 6.70634 4.27994C6.85618 4.42979 7.02536 4.48296 7.20905 4.48296L9.27789 4.45396L10.8198 4.33311L9.68392 5.37237L5.36739 9.6889L4.32814 10.8248L4.44415 9.28769L4.47315 7.21886C4.47799 7.03034 4.41998 6.86599 4.27013 6.71615C3.98011 6.42612 3.56924 6.41162 3.26472 6.71615C3.13904 6.84182 3.05203 7.04484 3.05203 7.24786L3.00853 12.3088C3.0037 12.5263 3.08587 12.7148 3.22605 12.855Z"})})}}]);