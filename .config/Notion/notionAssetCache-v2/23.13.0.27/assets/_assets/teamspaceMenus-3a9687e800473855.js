"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6860],{17224:(e,a,t)=>{t.d(a,{$4:()=>n,GZ:()=>c,dw:()=>r});var o=t(24215),d=t(50906);async function c(e,a){await o.j(e,"manage_teams_filter_click",a)}function r(e,a){o.j(e,"manage_teams_sort",a)}function n(e,a){d.YP3(e,"duplicate_team",a)}},54814:(e,a,t)=>{t.d(a,{nc:()=>s,rG:()=>n});t(57658);var o=t(6287),d=t(98165),c=t(51757),r=t(54642);async function n(e){let{environment:a,spaceId:t,databaseType:d,parentStore:n}=e;if(!t)return;const s=await r.getTypedDatabases(a,{spaceId:t,databaseType:d});return"success"===s.type?s.data.result.map((e=>c.NW.createChildStore(n,{table:o.v,id:e.collectionId}))):void 0}async function s(e){let{environment:a,spaceId:t,databaseTypes:o,parentStore:c,teamId:r}=e;const s=[];return await Promise.all(o.map((async e=>{await async function(e){let{environment:a,spaceId:t,databaseType:o,parentStore:c,teamId:r}=e;const s=await n({spaceId:t,environment:a,databaseType:o,parentStore:c});if(!s)return!1;for(const n of s){const e=d.VP(n);if(e&&e.id===r)return!0}return!1}({environment:a,spaceId:t,databaseType:e,parentStore:c,teamId:r})&&s.push(e)}))),s}},73657:(e,a,t)=>{t.d(a,{Z:()=>c});t(67294);var o=t(28992),d=t(85893);const c=function(e){return(0,d.jsx)(o.Z,{...e,style:{background:"none",borderBottom:"none",boxShadow:"",marginTop:2,marginBottom:6,paddingTop:4,paddingBottom:4,minHeight:"none",...e.style}})}},46611:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});t(67294);var o=t(480),d=t(86628),c=t(24405),r=t(15145),n=t(68939),s=t(75018),i=t(73744),f=t(87279),m=t(73657),b=t(78140),p=t(32163),I=t(11470),l=t(72495),v=t(82990),u=t(50906),g=t(3418),w=t(73343),P=t(86232),R=t(74016),S=t(76798),B=t(85893);function C(e){window.__c={n:"TeamMenuHeader"};const{teamStore:a}=e,t=(0,o.O7)(),r=(0,d.VK)((()=>a.getUserIdsInTeam().length),[a]),s=function(){const e=(0,o.O7)();return(0,c.yK)((a=>({headerWrap:{display:"flex",marginLeft:12,marginRight:12,alignItems:"center",...e.device.isMobile&&{paddingTop:12,paddingBottom:8}},teamNameContainer:{marginRight:10,flexGrow:1,flexShrink:0,lineHeight:"1em"},teamName:{fontSize:12,fontWeight:v.Z.fontWeight.semibold,maxWidth:180,marginRight:4,alignSelf:"center",...v.Z.textOverflowStyle},teamNameAndSettings:{display:"flex"},icon:{marginRight:10,marginTop:2},memberCount:{fontSize:12,color:a.lightTextColor}})),[e])}();return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)("div",{style:s.headerWrap,children:[(0,B.jsx)(R.p,{disabled:!0,store:a,size:28,style:s.icon}),(0,B.jsxs)("div",{style:s.teamNameContainer,children:[(0,B.jsxs)("div",{style:s.teamNameAndSettings,children:[(0,B.jsx)(S.Z,{store:a,style:s.teamName}),(0,B.jsx)(w.OutlinerTeamOverflow,{teamStore:a,onPopupClick:()=>{g.Z.addNamedPopup("team_more_actions"),u.QkQ(t,{store:a,from:"team_menu_header"})},onPopupClose:()=>{g.Z.removeNamedPopup("team_more_actions")},from:"team_menu_header",hideJoin:!0})]}),(0,B.jsx)("div",{style:s.memberCount,children:(0,B.jsx)(n.FormattedMessage,{defaultMessage:"{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}}",values:{numberOfMembers:r},id:"teamMenuHeader.teamMemberCount"})})]}),(0,B.jsx)(P.M,{teamStore:a,from:"team_breadcrumb_popup",navigateToTeamHomeOnJoin:!1})]})})}function h(e){window.__c={n:"TeamBreadcrumbPopup"};const{teamStore:a,parent:t}=e,v=(0,o.O7)(),u=(0,d.VK)((()=>a.getTeamPagesStores().filter((e=>e.canRead()&&e.isNavigableBlock()))),[a]),g=function(){const e=(0,o.O7)();return(0,c.yK)((a=>({morePagesCaption:e.device.isMobile?{}:{marginTop:0,marginBottom:0}})),[e])}();return(0,B.jsx)(b.Z,{menuType:v.device.isMobile?f.og.ActionSheet:f.og.Popup,minWidth:280,header:(0,B.jsx)(l.Z,{extraTopPadding:!0,children:(0,B.jsx)(C,{teamStore:a})}),children:(0,B.jsx)(p.Z,{type:p.i.Vertical,initialFocus:void 0,sections:[{key:"pages",items:u.slice(0,7).map((e=>({key:e.id,render:a=>(0,B.jsx)(I.Z,{store:e,hidePath:!0,...a}),action:a=>{const o=i.DJ(a.event);s.navigateToBlock({environment:v,store:e,openInNew:o,pageVisitSource:r.tY.Breadcrumb}),o||t.close()}}))),render:e=>(0,B.jsxs)(l.Z,{...e,children:[e.children,u.length>7&&(0,B.jsx)(m.Z,{style:g.morePagesCaption,caption:(0,B.jsx)(n.FormattedMessage,{defaultMessage:"{numberOfMorePages} more…",values:{numberOfMorePages:u.length-7},id:"TeamBreadcrumbPopup.morePages"})})]})}]})})}},73466:(e,a,t)=>{t.d(a,{Cm:()=>h,HD:()=>x,Sq:()=>T,VG:()=>M,tW:()=>y});t(21703);var o=t(76837),d=t(68626),c=t(42875),r=t(4615),n=t(29369),s=t(27095),i=t(73314),f=t(70203),m=t(50906),b=t(17224),p=t(54642),I=t(11302),l=t(86282),v=t(39699),u=t(33929),g=t(21115),w=t(95697),P=t(55838),R=t(80444),S=t(51757),B=t(66214),C=t(9867);async function h(e){let{environment:a,name:t,description:o,icon:d,accessLevel:c,isDefault:r,flowId:s,createTeamHome:i,teamPermissionRole:f,spacePermissionRole:b,members:I,settings:l}=e;const{currentSpaceStore:v}=R.default.getState();if(!v)throw new Error("currentSpaceStore does not exist");const u=v.id,g=await p.createTeam(a,{spaceId:u,name:t,description:o,icon:d,isDefault:r,accessLevel:c,teamPermissionRole:f,spacePermissionRole:b,members:I,settings:l});if("failed"===g.type)return void(0,C.Xy)(g);const{teamId:w}=g.data,P=S.zX.createChildStore(v,{table:n.e0,id:w,spaceId:u});return await P.load(),i&&await j({environment:a,teamStore:P}),m.o_A(a,{store:P,flowId:s}),P}function M(e){var a;let{environment:t,page:o}=e;const d=(0,r.ZP)(),c=(null===(a=o.getParentPointer())||void 0===a?void 0:a.table)!==n.e0?"page_to_team_nested":"page_to_team";m.krX(t,{from:c,flowId:d}),B.Z.setState({open:!0,pageStore:o,flowId:d})}async function T(e){var a;let{environment:t,page:o,flowId:d,intl:r}=e;const{accessLevel:s,spacePermissionRole:i,teamPermissionRole:m,members:b}=(0,w.Pr)(o),p=(o.isDefined()?o.getModel().getRenderTitle({intl:r,userTimeZone:(0,c.r)(),getRecordModel:o.getRecordModel}):void 0)??f.QaF(o.getTitleValue()),l=await h({environment:t,name:p,icon:null===(a=o.getIcon())||void 0===a?void 0:a.icon,accessLevel:s,isDefault:!1,description:"",flowId:d,createTeamHome:!1,teamPermissionRole:m,spacePermissionRole:i,members:b});if(!l)return;const{currentSpaceViewStore:u}=R.default.state;u&&(v.createAndCommit({userAction:"teamActions.movePageToCreatedTeam",environment:t,perform:e=>{I.at({environment:t,currentSpaceViewStore:u,transaction:e,teamStore:l,action:"move",value:{type:n.e0,id:l.id},targets:[o],location:{type:"append"}})}}),(0,C.RF)({environment:t,teamId:l.id,tab:P.a.Members,from:"create_team_from_page"}),await new Promise((e=>setTimeout((()=>(0,C.JX)({teamStore:l,environment:t})),100))))}async function x(e){let{environment:a,name:t,description:o,icon:d,flowId:c,trackCreateTeamComplete:r}=e;const{currentSpaceStore:s}=R.default.getState();if(!s)throw new Error("currentSpaceStore does not exist");const i=s.id;if(!i)return;const f=await p.enableTeams(a,{spaceId:i,defaultTeamName:t,defaultTeamIcon:d,defaultTeamDescription:o});if("failed"===f.type)return void(0,C.Xy)(f);const{teamId:b}=f.data,I=S.zX.createChildStore(s,{table:n.e0,id:b,spaceId:i});return await I.load(),await j({environment:a,teamStore:I}),m.NOz(a,{spaceId:i,store:I,flowId:c}),r&&b&&m.o_A(a,{store:I,flowId:c}),I}async function y(e){var a;let{environment:t,teamStore:d,from:c,buttonPopupStore:n}=e;if(!t.currentUser.id)return!1;const s=(0,r.ZP)(),i=d.isDefault(),f=d.getTeamAccessLevel();if(i)return!1;const m=d.getName(),p=await h({environment:t,name:(0,o.nM)(m||""),description:"",icon:d.getRawIcon(),accessLevel:f,isDefault:i,createTeamHome:!0,teamPermissionRole:null===(a=d.getTeamPermission())||void 0===a?void 0:a.role,spacePermissionRole:d.getSpacePermissionRole(),members:[],settings:d.getSettings(),flowId:s});return!!p&&(b.$4(t,{store:p,from:c}),(0,C.hI)({environment:t,teamStore:p,shouldScroll:!0}),(0,C.RF)({environment:t,teamId:p.id,tab:P.a.General,from:"duplicate_team",buttonPopupStore:n}),new Promise((e=>setTimeout(e,500))).then((()=>{(0,g.Ke)(m)})),!0)}async function j(e){const{environment:a,teamStore:t}=e,o=R.default.state.currentSpaceStore,c=R.default.state.currentSpaceViewStore;if(!o||!c)return d.log({level:"error",from:"teamActions",type:"createHomepageOnTeamCreation-SpaceOrSpaceViewStoreError"}),!1;const r=(n=u.default.getIntl(),(0,i.G)(s.bZ.teamsHomepage,n));var n;return!!(await l.rC({environment:a,item:r,isPrivate:!1,spaceStore:o,spaceViewStore:c,useMinimalTemplates:!1,type:"inTeam",teamStore:t,from:"homepage_team",appendOrPrepend:"prepend",isOnboarding:!1}))||(d.log({level:"error",from:"teamActions",type:"createHomepageOnTeamCreation-PageNotCreated"}),!1)}},66214:(e,a,t)=>{t.d(a,{Z:()=>c});var o=t(49085);class d extends o.default{getInitialState(){return{open:!1}}}const c=new d},85397:(e,a,t)=>{t.d(a,{a:()=>c});t(67294);var o=t(45238),d=t(85893);const c=(0,o.I)("addPerson",{viewBox:"0 0 16 16",svg:(0,d.jsx)("path",{d:"M9.48242 7.91211C10.8076 7.91211 11.8352 6.77783 11.8352 5.35718C11.8352 4.00391 10.7908 2.84717 9.48242 2.84717C8.17407 2.84717 7.12964 4.00952 7.13525 5.36279C7.14087 6.77783 8.16284 7.91211 9.48242 7.91211ZM9.48242 8.87231C8.7356 8.87231 8.04492 8.99585 7.44409 9.22046C8.23022 9.95044 8.72437 10.9836 8.72437 12.1235C8.72437 12.511 8.66821 12.8872 8.55591 13.2466H12.8684C13.969 13.2466 14.3171 12.8479 14.3171 12.2302C14.3171 10.804 12.3967 8.87231 9.48242 8.87231ZM4.74316 15.1895C6.42212 15.1895 7.80347 13.7969 7.80347 12.1235C7.80347 10.4558 6.42212 9.06885 4.74316 9.06885C3.06982 9.06885 1.68286 10.4558 1.68286 12.1235C1.68286 13.7969 3.06982 15.1895 4.74316 15.1895ZM4.74316 14.1675C4.41187 14.1675 4.18726 13.9429 4.18726 13.6172V12.6907H3.27197C2.94629 12.6907 2.72168 12.4661 2.71606 12.1292C2.71045 11.7979 2.93506 11.5732 3.27197 11.5732H4.18726V10.6636C4.18726 10.3379 4.41187 10.1133 4.74316 10.1077C5.08008 10.1021 5.30469 10.3267 5.30469 10.6636V11.5732H6.22559C6.55127 11.5732 6.77588 11.7979 6.77588 12.1292C6.77588 12.4661 6.55127 12.6907 6.22559 12.6907H5.30469V13.6172C5.30469 13.9429 5.08008 14.1675 4.74316 14.1675Z"})})},52867:(e,a,t)=>{t.d(a,{H:()=>c});t(67294);var o=t(45238),d=t(85893);const c=(0,o.I)("archive",{viewBox:"0 0 16 16",svg:(0,d.jsx)("path",{d:"M4.083 14.585h7.499c1.347 0 2.064-.697 2.064-2.037V5.739c.664-.11 1.019-.608 1.019-1.34V3.36c0-.834-.458-1.36-1.299-1.36H2.3C1.499 2 1 2.526 1 3.36V4.4c0 .73.355 1.23 1.019 1.34v6.808c0 1.347.717 2.037 2.064 2.037zM2.579 4.728c-.342 0-.478-.144-.478-.486v-.724c0-.342.136-.486.478-.486h10.514c.342 0 .472.144.472.486v.724c0 .342-.13.486-.472.486H2.579zm1.49 8.825c-.615 0-.95-.335-.95-.95V5.76h9.427v6.842c0 .616-.342.95-.95.95H4.069zM5.58 8.515h4.512c.287 0 .492-.199.492-.5v-.218c0-.3-.205-.492-.492-.492H5.58c-.287 0-.485.191-.485.492v.219c0 .3.198.499.485.499z"})})},9767:(e,a,t)=>{t.d(a,{s:()=>c});t(67294);var o=t(45238),d=t(85893);const c=(0,o.I)("docBadgePlus",{viewBox:"0 0 16 16",svg:(0,d.jsx)("path",{d:"M3.719 8.066c.105-.018.21-.03.316-.04a2.6 2.6 0 01.653 0c.11.01.22.022.33.04V2.509c0-.303.078-.538.237-.705.158-.167.397-.25.718-.25h2.808v3.612c0 .47.114.821.343 1.054.233.233.584.35 1.055.35h3.553v5.721c0 .303-.08.536-.238.699-.158.163-.397.244-.718.244H8.57c-.04.233-.1.457-.184.672-.08.22-.18.429-.304.627h4.8c.707 0 1.24-.185 1.601-.554.36-.365.54-.901.54-1.609V6.392a4.83 4.83 0 00-.052-.778 1.721 1.721 0 00-.204-.587 2.456 2.456 0 00-.436-.56L10.877.953a2.373 2.373 0 00-.54-.428A1.72 1.72 0 009.763.32a3.897 3.897 0 00-.725-.06H5.861c-.708 0-1.241.185-1.602.554-.36.365-.54.9-.54 1.608v5.643zM9.922 5.04V1.731l3.632 3.698h-3.25c-.136 0-.235-.03-.297-.092-.057-.062-.085-.16-.085-.297zM4.372 15.74c.456 0 .89-.09 1.298-.27.413-.176.775-.42 1.087-.732a3.36 3.36 0 00.739-1.088 3.2 3.2 0 00.27-1.305c0-.466-.09-.903-.27-1.312a3.432 3.432 0 00-1.813-1.82 3.284 3.284 0 00-1.312-.263c-.466 0-.903.088-1.312.264a3.38 3.38 0 00-1.08.738 3.433 3.433 0 00-.732 1.081c-.18.409-.27.846-.27 1.312 0 .466.09.903.27 1.312.175.409.42.769.731 1.08a3.38 3.38 0 001.081.74c.41.175.846.263 1.312.263zm0-1.246a.446.446 0 01-.33-.125.45.45 0 01-.119-.323v-1.253H2.671a.437.437 0 01-.323-.125.424.424 0 01-.126-.323c0-.136.042-.244.126-.323a.437.437 0 01.323-.125h1.252v-1.253c0-.132.04-.24.119-.323a.446.446 0 01.33-.125c.135 0 .243.042.322.125a.437.437 0 01.125.323v1.253h1.253c.132 0 .24.041.323.125.083.08.125.187.125.323a.424.424 0 01-.125.323.437.437 0 01-.323.125H4.819v1.253c0 .132-.041.24-.125.323a.424.424 0 01-.323.125z"})})},19981:(e,a,t)=>{t.d(a,{V:()=>c});t(67294);var o=t(45238),d=t(85893);const c=(0,o.I)("handWave",{viewBox:"0 0 14 15",svg:(0,d.jsx)("path",{d:"M12.223 12.396c.888-.893 1.406-1.886 1.551-2.98.15-1.098-.08-2.288-.69-3.568l-1.552-3.275a2.264 2.264 0 00-.417-.594 1.28 1.28 0 00-.95-.404c-.36 0-.677.135-.95.404a1.211 1.211 0 00-.335.628c-.05.247-.023.502.082.766l.383.91c.013.031.011.056-.007.074-.023.019-.048.016-.075-.006L5.537.625C5.232.32 4.897.167 4.532.167c-.36-.005-.688.144-.984.444a1.115 1.115 0 00-.219.308 1.13 1.13 0 00-.096.349c-.291-.2-.59-.288-.895-.26-.3.023-.574.157-.82.403a1.278 1.278 0 00-.397.827c-.023.306.057.6.24.882a.876.876 0 00-.602.287c-.278.274-.415.584-.41.93.004.346.148.66.43.943l.458.458a.877.877 0 00-.348.09 1.115 1.115 0 00-.308.218 1.32 1.32 0 00-.37.615 1.29 1.29 0 00.021.684 1.6 1.6 0 00.397.635l4.231 4.232c.78.775 1.6 1.294 2.461 1.559.866.264 1.72.28 2.564.047.843-.232 1.622-.706 2.338-1.421zm-.841-.793c-.579.58-1.197.957-1.853 1.135-.651.178-1.317.15-1.996-.082-.674-.228-1.335-.663-1.982-1.305L1.497 7.297a.452.452 0 01-.143-.308.38.38 0 01.13-.3.403.403 0 01.3-.137c.119 0 .223.045.315.136l2.495 2.489a.45.45 0 00.355.15.476.476 0 00.342-.15.478.478 0 00.164-.349.461.461 0 00-.15-.362l-3.733-3.74a.446.446 0 01-.143-.3.38.38 0 01.13-.301.425.425 0 01.307-.137.45.45 0 01.315.137l3.48 3.486c.104.1.225.148.361.144a.476.476 0 00.342-.15c.1-.1.153-.22.157-.356a.47.47 0 00-.143-.362L2.283 2.799a.477.477 0 01-.143-.315.41.41 0 01.136-.307.39.39 0 01.301-.123c.119.004.223.05.315.136l4.04 4.034a.434.434 0 00.348.15.5.5 0 00.349-.15c.1-.1.153-.22.157-.356a.46.46 0 00-.137-.355L4.218 2.08a.425.425 0 01-.137-.308c0-.113.041-.216.123-.307a.41.41 0 01.308-.123c.114 0 .218.045.314.136L9.64 6.292c.136.141.282.212.437.212a.577.577 0 00.403-.178.71.71 0 00.192-.342c.032-.136.011-.298-.062-.485L9.748 3.25a.52.52 0 01-.014-.37.42.42 0 01.22-.232.362.362 0 01.32 0c.1.05.185.149.253.294l1.586 3.377c.52 1.121.702 2.108.547 2.96-.155.853-.58 1.627-1.278 2.325z"})})},3577:(e,a,t)=>{t.d(a,{J:()=>c});t(67294);var o=t(45238),d=t(85893);const c=(0,o.I)("personAdmin",{viewBox:"0 0 15 16",svg:(0,d.jsx)("path",{d:"M6.082 7.215a2.71 2.71 0 001.504-.438c.451-.296.811-.69 1.08-1.182a3.352 3.352 0 00.403-1.634 3.21 3.21 0 00-.403-1.6 3.059 3.059 0 00-1.08-1.141A2.776 2.776 0 006.082.796c-.547 0-1.048.143-1.504.43a3.153 3.153 0 00-1.087 1.156 3.195 3.195 0 00-.403 1.593 3.39 3.39 0 00.41 1.627c.269.487.629.88 1.08 1.175a2.71 2.71 0 001.504.438zm0-1.19c-.314 0-.606-.088-.875-.266a1.974 1.974 0 01-.636-.738 2.247 2.247 0 01-.239-1.046c0-.379.08-.718.24-1.019.159-.3.37-.538.635-.71.264-.179.556-.267.875-.267.319 0 .61.086.875.26.264.172.476.41.636.71.16.296.239.634.239 1.012 0 .387-.08.738-.24 1.053-.159.31-.37.556-.635.738a1.508 1.508 0 01-.875.273zm-4.266 7.54h5.948a3.113 3.113 0 01-.082-.752v-.43H1.59c-.082 0-.141-.014-.178-.041-.032-.027-.048-.073-.048-.137 0-.26.105-.56.315-.902.21-.342.512-.673.909-.992.4-.323.893-.59 1.476-.8.588-.213 1.26-.32 2.017-.32a5.648 5.648 0 011.92.328c.17-.42.466-.732.89-.937a6.605 6.605 0 00-1.313-.417 6.856 6.856 0 00-1.497-.157c-.92 0-1.75.139-2.488.417-.739.273-1.372.631-1.9 1.073-.525.442-.928.918-1.21 1.429-.279.51-.418.998-.418 1.463 0 .784.584 1.175 1.75 1.175zm6.843-.731c0 .438.091.804.274 1.1.182.297.469.58.861.848.392.274.907.588 1.545.944a.6.6 0 00.294.082.62.62 0 00.335-.082c.638-.36 1.153-.675 1.545-.944.392-.269.679-.551.861-.847.182-.297.274-.664.274-1.101v-2.468a.979.979 0 00-.137-.54c-.087-.141-.24-.26-.458-.355a17.47 17.47 0 00-.417-.15c-.182-.069-.38-.14-.595-.213-.21-.077-.403-.145-.581-.205a13.002 13.002 0 01-.403-.15 1.263 1.263 0 00-.417-.055c-.146 0-.292.028-.438.082-.077.028-.205.07-.383.13l-.574.198c-.205.073-.399.144-.58.212-.183.064-.32.114-.411.15-.219.096-.374.215-.465.356a1.02 1.02 0 00-.13.54v2.468zm2.598 1.326a.601.601 0 01-.212-.04.416.416 0 01-.178-.124l-1.155-1.244a.671.671 0 01-.096-.178.492.492 0 01-.034-.178c0-.145.048-.264.144-.355a.492.492 0 01.341-.13.485.485 0 01.363.15l.793.869 1.613-2.229a.484.484 0 01.41-.219c.132 0 .246.048.342.144.1.091.15.205.15.342 0 .04-.009.086-.027.136a.463.463 0 01-.075.15l-1.983 2.722c-.086.123-.218.184-.396.184z"})})},15028:(e,a,t)=>{t.d(a,{a:()=>c});t(67294);var o=t(45238),d=t(85893);const c=(0,o.I)("restore",{viewBox:"0 0 18 15",svg:(0,d.jsx)("path",{d:"M8.61427 3.17871C8.292 3.17871 8.02833 3.43506 8.02833 3.75732L8.02833 7.84424C8.02833 8.0127 8.0796 8.15918 8.20411 8.32031L10.0132 10.708C10.2549 11.0229 10.5918 11.0742 10.8921 10.8691C11.1631 10.6787 11.1851 10.3345 10.9653 10.0342L8.52638 6.74561L9.19288 8.79639L9.19288 3.75732C9.19288 3.43506 8.93654 3.17871 8.61427 3.17871ZM8.89259 0C5.28907 0 2.22755 2.62939 1.56105 6.05713L0.521008 6.05713C-0.00633599 6.05713-0.138172 6.41602 0.147473 6.82617L1.7881 9.15527C2.0298 9.49219 2.38136 9.48486 2.61573 9.15527L4.25636 6.81885C4.53468 6.41602 4.40284 6.05713 3.88282 6.05713L2.82814 6.05713C3.45802 3.28857 5.91896 1.25244 8.89259 1.25244C10.98 1.25977 12.811 2.26318 13.9317 3.82324C14.1514 4.12354 14.5029 4.21875 14.8032 4.02832C15.1035 3.85254 15.1841 3.44971 14.9351 3.12744C13.5435 1.25977 11.3609 0 8.89259 0ZM8.89259 14.9414C12.4961 14.9414 15.5576 12.3047 16.2241 8.88428L17.2568 8.88428C17.7842 8.88428 17.9234 8.52539 17.6304 8.11523L15.9971 5.78613C15.7554 5.44922 15.4038 5.45654 15.1694 5.78613L13.5288 8.12256C13.2432 8.52539 13.3823 8.88428 13.9024 8.88428L14.9644 8.88428C14.3272 11.6455 11.8589 13.6963 8.89259 13.6963C6.80519 13.689 4.97413 12.6782 3.85353 11.1182C3.62648 10.8179 3.28224 10.7227 2.97462 10.9058C2.68165 11.0889 2.60109 11.4917 2.85011 11.814C4.24171 13.6816 6.42433 14.9414 8.89259 14.9414Z"})})},5108:(e,a,t)=>{t.d(a,{n:()=>c});t(67294);var o=t(45238),d=t(85893);const c=(0,o.I)("settingsMembers",{viewBox:"0 0 20 20",svg:(0,d.jsx)("path",{d:"M13.726 9.989c1.725 0 3.123-1.585 3.123-3.536 0-1.92-1.39-3.453-3.123-3.453-1.712 0-3.124 1.556-3.124 3.468.008 1.943 1.405 3.52 3.123 3.52zm-8.264.171c1.504 0 2.716-1.392 2.716-3.111 0-1.675-1.212-3.03-2.716-3.03-1.49 0-2.724 1.378-2.717 3.037 0 1.72 1.22 3.104 2.717 3.104zm8.264-1.474c-.985 0-1.819-.967-1.819-2.225 0-1.213.827-2.159 1.819-2.159.998 0 1.818.93 1.818 2.151 0 1.25-.827 2.233-1.819 2.233zm-8.264.186c-.806 0-1.49-.803-1.49-1.816 0-.967.677-1.756 1.49-1.756.827 0 1.497.774 1.497 1.749 0 1.02-.684 1.823-1.497 1.823zM1.54 17h5.54c-.392-.238-.656-.782-.606-1.273H1.476c-.136 0-.193-.067-.193-.193 0-1.705 1.911-3.327 4.172-3.327.798 0 1.597.208 2.21.566.242-.365.542-.678.934-.946-.906-.58-2.032-.893-3.144-.893C2.438 10.934 0 13.182 0 15.653 0 16.546.513 17 1.54 17zm7.743 0h8.885C19.4 17 20 16.59 20 15.712c0-2.046-2.453-4.77-6.274-4.77-3.822 0-6.275 2.724-6.275 4.77 0 .879.599 1.288 1.832 1.288zm-.228-1.303c-.164 0-.228-.059-.228-.193 0-1.139 1.761-3.26 4.899-3.26 3.137 0 4.898 2.121 4.898 3.26 0 .134-.064.194-.235.194H9.055z"})})},27095:(e,a,t)=>{t.d(a,{S$:()=>i,bZ:()=>f});t(72126);var o=t(88779),d=t(98251);const c={sources:{"en-US":{previewRootId:"e950a58c-0d6f-42c3-8225-9e7adc5d4182",rootId:"e950a58c-0d6f-42c3-8225-9e7adc5d4182",spaceId:o.BP}},nameMessage:d.sY.getStartedPage},r={sources:{"en-US":{previewRootId:"89ba9061-3275-4d76-966f-11691fdfd72f",rootId:"89ba9061-3275-4d76-966f-11691fdfd72f",spaceId:o.BP},"ko-KR":{previewRootId:"0eb824c6-f768-47bc-9204-d94dbb912c6e",rootId:"0eb824c6-f768-47bc-9204-d94dbb912c6e",spaceId:o.BP},"ja-JP":{previewRootId:"09f3541c-8edb-4603-9bc3-02bd22cd7836",rootId:"09f3541c-8edb-4603-9bc3-02bd22cd7836",spaceId:o.BP},"fr-FR":{previewRootId:"b13cc3bd-a0a3-4b61-b482-63051d7804b5",rootId:"b13cc3bd-a0a3-4b61-b482-63051d7804b5",spaceId:o.BP},"de-DE":{previewRootId:"b2b10be2-1b2f-4a48-a453-532657bd8e92",rootId:"b2b10be2-1b2f-4a48-a453-532657bd8e92",spaceId:o.BP},"es-ES":{previewRootId:"a00ebb82-58f2-4b40-89ee-a65be3befabf",rootId:"a00ebb82-58f2-4b40-89ee-a65be3befabf",spaceId:o.BP},"es-LA":{previewRootId:"6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",rootId:"6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",spaceId:o.BP},"pt-BR":{previewRootId:"50a76940-a26e-443a-b752-1412855e6ad7",rootId:"50a76940-a26e-443a-b752-1412855e6ad7",spaceId:o.BP}},nameMessage:d.sY.getStartedPage},n={sources:{"en-US":{previewRootId:"30fa18a6-609e-4f5b-af3d-31906c46fe23",rootId:"30fa18a6-609e-4f5b-af3d-31906c46fe23",spaceId:o.BP},"ko-KR":{previewRootId:"3afd60d5-3ce7-431a-b812-2c836b7596a3",rootId:"3afd60d5-3ce7-431a-b812-2c836b7596a3",spaceId:o.BP},"ja-JP":{previewRootId:"dd2f1d05-d4ef-48a0-899c-10fe0346a447",rootId:"dd2f1d05-d4ef-48a0-899c-10fe0346a447",spaceId:o.BP},"fr-FR":{previewRootId:"ac411712-ee48-4589-828d-b4e5827efc17",rootId:"ac411712-ee48-4589-828d-b4e5827efc17",spaceId:o.BP},"de-DE":{previewRootId:"0c5be7d7-cfcf-417b-824a-1a280254a58e",rootId:"0c5be7d7-cfcf-417b-824a-1a280254a58e",spaceId:o.BP},"es-ES":{previewRootId:"35c18cd6-99a8-47f3-91ee-40dbfec922fa",rootId:"35c18cd6-99a8-47f3-91ee-40dbfec922fa",spaceId:o.BP},"es-LA":{previewRootId:"017372b2-9d34-4118-ad13-9b8e15c30ebd",rootId:"017372b2-9d34-4118-ad13-9b8e15c30ebd",spaceId:o.BP},"pt-BR":{previewRootId:"035cfcde-4292-4905-82b2-6517e58a28b9",rootId:"035cfcde-4292-4905-82b2-6517e58a28b9",spaceId:o.BP}},nameMessage:d.sY.getStartedPage},s={sources:{"en-US":{previewRootId:"bfe1c963-57ad-4ed2-a9f9-65a3e65f61fd",rootId:"bfe1c963-57ad-4ed2-a9f9-65a3e65f61fd",spaceId:o.BP}},nameMessage:d.sY.learnNotionThreeSteps},i={desktopPersonal:r,desktopTeamCreate:n,desktopTeamJoin:{sources:{"en-US":{previewRootId:"bd0b93b9-a0e9-4582-a164-98acdc7a5b45",rootId:"bd0b93b9-a0e9-4582-a164-98acdc7a5b45",spaceId:o.BP},"ko-KR":{previewRootId:"ecdfe65a-28ee-46d2-a82b-99573e3dd63d",rootId:"ecdfe65a-28ee-46d2-a82b-99573e3dd63d",spaceId:o.BP},"ja-JP":{previewRootId:"56dd4a06-5073-46d2-8aca-8e37d90e5610",rootId:"56dd4a06-5073-46d2-8aca-8e37d90e5610",spaceId:o.BP},"fr-FR":{previewRootId:"1f8febec-2e84-4be2-a67d-7b5165845a4b",rootId:"1f8febec-2e84-4be2-a67d-7b5165845a4b",spaceId:o.BP},"de-DE":{previewRootId:"ee67a0e4-8343-4dd6-9636-9504cae6c573",rootId:"ee67a0e4-8343-4dd6-9636-9504cae6c573",spaceId:o.BP},"es-ES":{previewRootId:"eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",rootId:"eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",spaceId:o.BP},"es-LA":{previewRootId:"56ba9c1f-2a28-4d05-910c-e89fb051327d",rootId:"56ba9c1f-2a28-4d05-910c-e89fb051327d",spaceId:o.BP},"pt-BR":{previewRootId:"07ffa801-adfb-41f3-809b-87f69ae9e9cd",rootId:"07ffa801-adfb-41f3-809b-87f69ae9e9cd",spaceId:o.BP}},nameMessage:d.sY.getStartedPage},mobile:{sources:{"en-US":{previewRootId:"27fa9add-6ec7-433a-88c9-58279f5055c3",rootId:"27fa9add-6ec7-433a-88c9-58279f5055c3",spaceId:o.BP},"ko-KR":{previewRootId:"24c31e38-d546-423f-b3cb-a0533e711d02",rootId:"24c31e38-d546-423f-b3cb-a0533e711d02",spaceId:o.BP},"ja-JP":{previewRootId:"6e87073b-2877-44d1-9df7-2dd266bb35e3",rootId:"6e87073b-2877-44d1-9df7-2dd266bb35e3",spaceId:o.BP},"fr-FR":{previewRootId:"d6367cec-2e43-4558-882d-fb9a00545fef",rootId:"d6367cec-2e43-4558-882d-fb9a00545fef",spaceId:o.BP},"de-DE":{previewRootId:"172fd543-704b-489a-8d2e-7d1255f51bef",rootId:"172fd543-704b-489a-8d2e-7d1255f51bef",spaceId:o.BP},"es-ES":{previewRootId:"8f27f9ff-57f2-4c07-ad65-55c7f7f7501f",rootId:"8f27f9ff-57f2-4c07-ad65-55c7f7f7501f",spaceId:o.BP},"es-LA":{previewRootId:"24f220ca-372b-4003-8e74-13291220c778",rootId:"24f220ca-372b-4003-8e74-13291220c778",spaceId:o.BP},"pt-BR":{previewRootId:"e16c2241-0f08-4946-908e-c5e6612b0a8c",rootId:"e16c2241-0f08-4946-908e-c5e6612b0a8c",spaceId:o.BP}},nameMessage:d.sY.getStartedPageMobile},evernote:{sources:{"en-US":{previewRootId:"2e568628-70b1-4f35-934e-81ea4263d0e8",rootId:"2e568628-70b1-4f35-934e-81ea4263d0e8",spaceId:o.BP},"ko-KR":{previewRootId:"3d8c8d33-f904-41f7-a3ff-b6272c633079",rootId:"3d8c8d33-f904-41f7-a3ff-b6272c633079",spaceId:o.BP},"ja-JP":{previewRootId:"9aefc3b4-f172-4917-b1c7-495c26ec37f9",rootId:"9aefc3b4-f172-4917-b1c7-495c26ec37f9",spaceId:o.BP},"fr-FR":{previewRootId:"4453c56e-831c-4203-83fc-9736e276b7dc",rootId:"4453c56e-831c-4203-83fc-9736e276b7dc",spaceId:o.BP},"de-DE":{previewRootId:"6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",rootId:"6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",spaceId:o.BP},"es-ES":{previewRootId:"95dafcd5-6243-4838-bea1-8e19b0596f6f",rootId:"95dafcd5-6243-4838-bea1-8e19b0596f6f",spaceId:o.BP},"es-LA":{previewRootId:"34d8ae09-8161-49ec-ae2d-c188c477bb90",rootId:"34d8ae09-8161-49ec-ae2d-c188c477bb90",spaceId:o.BP},"pt-BR":{previewRootId:"cb2a5d30-074f-4c07-97b5-61147e0ea504",rootId:"cb2a5d30-074f-4c07-97b5-61147e0ea504",spaceId:o.BP}},nameMessage:d.sY.getStartedPageEvernote},web:c,learnNotionThreeSteps:s},f={teamsHomepage:{emoji:"🏠",nameMessage:d.sY.teamsHomepage,sources:{"en-US":{previewRootId:"4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",rootId:"4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",spaceId:o.BP},"ko-KR":{previewRootId:"82be252e-5184-44cd-a91b-a7d6ffdefac6",rootId:"82be252e-5184-44cd-a91b-a7d6ffdefac6",spaceId:o.BP},"ja-JP":{previewRootId:"bea8efd0-61d7-495b-a255-5c1f40753cf7",rootId:"bea8efd0-61d7-495b-a255-5c1f40753cf7",spaceId:o.BP},"fr-FR":{previewRootId:"12a6eaa5-30f7-419b-aee7-1be2dbc7278c",rootId:"12a6eaa5-30f7-419b-aee7-1be2dbc7278c",spaceId:o.BP},"de-DE":{previewRootId:"75db54d0-46ad-43b1-8ef0-7556ce0e9069",rootId:"75db54d0-46ad-43b1-8ef0-7556ce0e9069",spaceId:o.BP},"es-ES":{previewRootId:"9ac64262-cad7-44f3-bfae-96dabec9e770",rootId:"9ac64262-cad7-44f3-bfae-96dabec9e770",spaceId:o.BP},"es-LA":{previewRootId:"5b51de44-604b-4a96-b421-9f3e3cf470d2",rootId:"5b51de44-604b-4a96-b421-9f3e3cf470d2",spaceId:o.BP},"pt-BR":{previewRootId:"b9626438-4451-441c-9608-35ab50e3b182",rootId:"b9626438-4451-441c-9608-35ab50e3b182",spaceId:o.BP}}}}}}]);