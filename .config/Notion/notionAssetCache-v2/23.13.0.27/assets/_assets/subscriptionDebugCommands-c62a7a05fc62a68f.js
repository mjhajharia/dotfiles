"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5126],{80671:(e,n,t)=>{t.d(n,{Cl:()=>f,Kj:()=>g,jw:()=>S,k2:()=>p,v5:()=>l});t(21703);var o=t(72126),a=t(4615),r=t(19889),i=t(896),s=t(12139),c=t(50906),d=t(80444),u=t(51757),m=t(63423);function p(){m.Z.setState({open:!0,stage:"limit_reached",addOnUpgradeId:(0,a.ZP)(),tax:0})}function l(){m.Z.setState({open:!1})}function f(e){const n=m.Z.state;n.open&&m.Z.setState({...n,stage:"confirm_purchase",coupon:e&&!(0,i.$v)(e)?e:void 0})}function g(){m.Z.setState({open:!0,stage:"cancel_plan",addOnUpgradeId:(0,a.ZP)(),tax:0})}async function S(e){const{environment:n,spaceStore:t,from:a}=e,i=function(){var e;const n=null===(e=d.default.state.currentSpaceStore)||void 0===e?void 0:e.getAdminIds();if(!n||0===n.length)throw new Error("No admins found in the current space");return(0,o.UP)(n)}(),m=t.getName(),p=u.U6.createChildStore(t,{table:r.KJ,id:i});await p.load();const l=p.getEmail();l?c.bfr(n,{admin_id:i,admin_email:l,space_name:m,from:a}):s.IE(new Error("Could not get email for admin in sendMemberRequestForAddOn"))}},59025:(e,n,t)=>{t.r(n),t.d(n,{SubscriptionDebugCommands:()=>s});var o=t(480),a=t(92595),r=t(80444),i=t(80671);function s(){window.__c={n:"SubscriptionDebugCommands"};const e=(0,o.O7)();return(0,a.exposeDebugValue)("subscriptions",{sendMemberRequestForAddOn:()=>{const n=r.default.state.currentSpaceStore;n&&i.jw({environment:e,spaceStore:n,from:"ai_limit_in_app"})}}),null}}}]);