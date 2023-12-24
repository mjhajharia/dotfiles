"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1890],{48298:(e,s,t)=>{t.d(s,{Vy:()=>k,YN:()=>w,kj:()=>R,kn:()=>y,mY:()=>j,yW:()=>C});t(57658);var o=t(59753),i=t(72141),a=t(58129),r=t(21202),n=t(15047),l=t(19889),d=t(97880),c=t(50906),p=t(54642),u=t(76464),m=t(9953),g=t(39699),b=t(15010),f=t(33954),h=t(33929),_=t(26136),v=t(98905),M=t(34583),x=t(47307);const y=async e=>{const{environment:s,store:t,accessRequestStore:o,forActor:i,status:a,from:r,onResolveComplete:n}=e,d=s.currentUser.id;if(c.VMx(s,{status:a,user_count:1,from:r,request_type:"member"}),"approved"===a){const e={type:"existingUser",value:i,spaceRole:"read_and_write"};if(!(await u.n_({environment:s,store:t,inviteTargets:[e],inviteRole:"read_and_write",isOnboarding:!1,invite:{inviteOrigin:"membership_request"}})).success)return void(null==n||n(!1))}g.createAndCommit({userAction:"GrantAccessActivityAction.handleGrantAccess",environment:s,perform:e=>{m.sW({store:o,transaction:e,data:{granted_time:Date.now(),granted_by_table:l.KJ,granted_by_id:d,resolved_time:Date.now(),resolved_by_table:l.KJ,resolved_by_id:d,status:a}})}}),c.O8I(s,{status:a,request_id:o.id,from:r,for_actor_id:i.id,space_role:t.getRole()}),null==n||n(!0)},w=async e=>{const{environment:s,store:t,status:o,requests:i,onResolveComplete:a}=e,r=s.currentUser.id;if(c.VMx(s,{status:o,user_count:i.length,from:e.from,request_type:"member"}),"approved"===o){const e=i.map((e=>({type:"existingUser",value:e.forActor,spaceRole:"read_and_write"})));if(!(await u.n_({environment:s,store:t,inviteTargets:e,inviteRole:"read_and_write",isOnboarding:!1,invite:{inviteOrigin:"membership_request"}})).success)return void(null==a||a(!1))}g.createAndCommit({userAction:"accessRequestActions.resolveMembershipRequests",environment:s,perform:e=>{i.map((s=>{const t=s.accessRequestStore;m.sW({store:t,transaction:e,data:{granted_time:Date.now(),granted_by_table:l.KJ,granted_by_id:r,resolved_time:Date.now(),resolved_by_table:l.KJ,resolved_by_id:r,status:o}})}))}}),null==a||a(!0)};async function C(e){const{environment:s,status:t,accessRequest:o,onResolveComplete:i,from:a,forActor:r}=e;if(!o.isGuestInviteRequest())return;const n=await p.resolveAccessRequest(s,{accessRequestId:o.id,status:t,spaceId:o.getParentId()});if("failed"===n.type)return null==i||i(!1),void x.showErrorMessage((0,f.wf)(h.default.getIntl(),n));null==i||i(!0),await M.bi(s);const l=o.getAttributes().permission_records_and_roles[0].role,d=o.getAttributes().permission_records_and_roles[0].id;var u;"approved"===t&&c.jBu(s,{role:l,is_space:!1,invite_targets:[{type:"existingUser",value:{id:r.id,version:0,email:r.getEmail()},spaceRole:"none"}],is_onboarding:!1,invite_origin:"guest_invite_request",permission_items:[{type:"user_permission",role:l,user_id:r.id}],invite_message_length:(null===(u=o.getAttributes().invite_message)||void 0===u?void 0:u.length)??0,domainType:(0,b.JF)()});c.CgF(s,{status:t,request_id:o.id,for_actor_id:o.getForActorId(),created_by_id:o.getCreatedById(),requested_page_id:d,requested_role:l,from:a})}async function j(e){const{environment:s,status:t,requests:i,onResolveComplete:a,from:r}=e;c.VMx(s,{status:t,user_count:i.length,from:r,request_type:"guest"});const n=[],l=[];await Promise.all(i.map((e=>{const{accessRequest:i,forActor:a}=e,d=o.kk.fromAccessRequest(i),c=o.kk.fromUser(a);return C({environment:s,status:t,accessRequest:d,onResolveComplete:e=>{e?n.push(c):l.push(c)},forActor:c,from:r})}))),null==a||a(n,l)}async function R(e){if(v.Z.reset(),!e.canAdmin)return;const{environment:s,spaceId:t}=e,o=await p.getUnreadAccessRequestCount(s,{parentTable:n.bx,parentId:t,size:1});"success"===o.type&&v.Z.setState({spaceId:t,count:o.data.count})}async function k(e,s){var t;const n=new Set(null===(t=e.getModel())||void 0===t?void 0:t.getMemberIds()),c=new Map,p=function(e){const s=new Map;for(const i of e){var t;const e=o.kk.fromAccessRequest(i.accessRequest),a=q(e);if(!(0,d.$K)(a))continue;const r=null===(t=s.get(a))||void 0===t?void 0:t.accessRequest;r&&r.created_time>e.getCreatedTime()||s.set(a,i)}return Array.from(s.values())}(s.map((s=>{const t=(0,_.Kv)(e,{table:a.J8,id:s}),o=t.getValue();if(o)return{accessRequest:o,accessRequestStore:t}})).filter(d.$K));return await Promise.all(p.map((async s=>{let{accessRequest:t,accessRequestStore:a}=s;if(t.for_actor_table!==l.KJ||t.created_by_table!==l.KJ)return;const p=(0,_.Kv)(e,{table:t.for_actor_table,id:t.for_actor_id});await p.load();const u=p.getValue();if(!u)return;const m=(0,_.Kv)(e,{table:t.created_by_table,id:t.created_by_id});await m.load();const g=m.getValue();if(!g)return;const b=o.kk.fromAccessRequest(t);b.isGuestInviteRequest()&&!function(e){let{spaceStore:s,accessRequest:t,spaceMemberIds:o}=e;if(o.has(t.for_actor_id))return!1;const a=t.getAttributes().permission_records_and_roles[0].id,n=t.getForActorId(),l=_.G.createChildStore(s,{id:a,spaceId:s.id,table:r.iU});if(!l||l.getPermissionItems().some((e=>(0,i.jg)(e)&&e.user_id===n&&(0,i.YX)(e.role))))return!1;return!0}({accessRequest:b,spaceMemberIds:n,spaceStore:e})||function(e){const{accessRequest:s,requests:t,createdByValue:i,forActorValue:a,accessRequestStore:r}=e,n=o.kk.fromAccessRequest(s),l=function(e){if(e.isGuestInviteRequest()){const s=e.getAttributes().permission_records_and_roles[0];return`guest_invite_${e.getForActorId()}:${s.id}:${s.role}`}if(e.isSpaceMembershipRequest())return`space_membership_${e.getForActorId()}`;if(e.isTeamMembershipRequest())return;if(e.isPageAccessRequest())return;(0,d.t1)(e)}(n);if(!(0,d.$K)(l))return;if(t.has(l)){const e=t.get(l);if(!e)return;s.created_time>e.latestRequestTime?t.set(l,{...e,createdByActorsWithReason:[{actor:i,reason:s.message},...e.createdByActorsWithReason],accessRequest:s,accessRequestStore:r,latestRequestTime:s.created_time}):t.set(l,{...e,createdByActorsWithReason:[...e.createdByActorsWithReason,{actor:i,reason:s.message}]})}else t.set(l,{forActor:a,createdByActorsWithReason:[{actor:i,reason:s.message}],accessRequest:s,accessRequestStore:r,latestRequestTime:s.created_time,requestType:n.isGuestInviteRequest()?"guest":"member"})}({requests:c,accessRequest:t,createdByValue:g,forActorValue:u,accessRequestStore:a})}))),Array.from(c.values())}function q(e){if(e.isGuestInviteRequest()){const s=e.getAttributes().permission_records_and_roles[0];return`guest_invite_${e.getForActorId()}:${s.id}:${e.getCreatedById()}`}if(e.isSpaceMembershipRequest())return`space_membership_${e.getForActorId()}:${e.getCreatedById()}}`;e.isTeamMembershipRequest()||e.isPageAccessRequest()||(0,d.t1)(e)}},15025:(e,s,t)=>{t.d(s,{VR:()=>p,ac:()=>c,zq:()=>d});t(67294);var o=t(24405),i=t(13148),a=t(98519),r=t(68939),n=t(85893);function l(e){window.__c={n:"CapabilityItem"};const{enabled:s,labelIfEnabled:t,labelIfDisabled:i}=e,a=(0,o.yK)((e=>({container:{color:s?e.mediumTextColor:e.lightTextColor}})),[s]);return(0,n.jsxs)("div",{style:a.container,children:[u(s)," ",s?t:i]})}function d(e){const s="none"!==e;return[(0,n.jsx)(l,{enabled:s&&e.read_content,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedAccess.readContent.enabled",defaultMessage:"Can read content."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.readContent.disabled",defaultMessage:"Cannot read content."})},"read_content"),(0,n.jsx)(l,{enabled:s&&e.insert_content,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.insertContent.enabled",defaultMessage:"Can insert content."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.insertContent.disabled",defaultMessage:"Cannot insert content."})},"insert_content"),(0,n.jsx)(l,{enabled:s&&e.update_content,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.updateContent.enabled",defaultMessage:"Can update content."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.updateContent.disabled",defaultMessage:"Cannot update content."})},"update_content"),(0,n.jsx)(l,{enabled:s&&e.insert_comment,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.insertComment.enabled",defaultMessage:"Can comment."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.insertComment.disabled",defaultMessage:"Cannot comment."})},"insert_comment"),(0,n.jsx)(l,{enabled:s&&e.read_comment,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.readComment.enabled",defaultMessage:"Can read comments."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.readComment.disabled",defaultMessage:"Cannot read comments."})},"read_comment")]}function c(e){return[(0,n.jsx)(l,{enabled:e.read_user_without_email,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUsers.enabled",defaultMessage:"Can view users."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUsers.disabled",defaultMessage:"Cannot view users."})},"read_user_without_email"),(0,n.jsx)(l,{enabled:e.read_user_with_email,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUserEmailAddresses.enabled",defaultMessage:"Can view user email addresses."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUserEmailAddresses.disabled",defaultMessage:"Cannot view user email addresses."})},"read_user_with_email")]}function p(e){return[(0,n.jsx)(l,{enabled:e.link_preview,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.linkPreview.enabled",defaultMessage:"Can preview links."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.linkPreview.disabled",defaultMessage:"Cannot preview links."})},"link_preview"),(0,n.jsx)(l,{enabled:e.synced_database,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.syncedDatabase.enabled",defaultMessage:"Can sync databases."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.syncedDatabase.disabled",defaultMessage:"Cannot sync databases."})},"synced_database")]}function u(e){const s={width:12,display:"inline",verticalAlign:"middle"};return e?(0,a.k)(s):(0,i.U)(s)}},84015:(e,s,t)=>{t.d(s,{_:()=>d});t(67294);var o=t(480),i=t(86517),a=t(68939),r=t(15025),n=t(28992),l=t(85893);function d(e){window.__c={n:"CumulativeBotBlockRoleTooltip"};const{role:s}=e,t=(0,a.useIntl)(),{device:d}=(0,o.O7)(),c=(0,r.zq)(s);return(0,l.jsx)(n.Z,{...e,title:t.formatMessage((0,i.Gx)(s,void 0).label),shouldWrapCaption:!0,style:d.isMobile?{padding:"12px 4px"}:{padding:4,marginTop:2,marginBottom:2},captionStyle:{marginTop:4},caption:(0,l.jsx)("div",{children:c})})}},33241:(e,s,t)=>{t.d(s,{M:()=>m,d:()=>u});t(67294);var o=t(24405),i=t(8848),a=t(82855),r=t(86517),n=t(15047),l=t(97880),d=t(68939),c=t(89728),p=t(85893);function u(e){let{role:s,events:t,disabled:i,buttonStyle:r,buttonContents:n,icon:l,table:u,isRemovable:g,isCurrentUser:b}=e;window.__c={n:"PermissionRoleButton"};const f=(0,o.yK)((e=>({button:{marginRight:8,...r},icon:{width:10,marginLeft:4,fill:e.lightIconColor}})),[r]),h=l||!i&&a.E;return(0,p.jsxs)(c.Z,{...t,disabled:i,style:f.button,children:[n||(0,p.jsx)("span",{className:"notranslate",children:(0,p.jsx)(d.FormattedMessage,{...m(s,u,g,b).label})}),h&&h(f.icon)]})}function m(e,s,t,o){if("access"===e)return{label:r.mq.canAccessLabel};if("limited"===e)return{label:r.mq.limitedAccessLabel};if((0,r.oF)(e))return(0,r.Gx)(e,s);switch(e){case"editor":return s===n.bx?{label:r.mq.workspaceOwnerLabel,caption:r.mq.workspaceOwnerCaption}:{label:r.mq.fullAccessLabel,caption:r.mq.fullAccessCaption};case"membership_admin":return s===n.bx?{label:r.mq.membershipAdminLabel,caption:r.mq.membershipAdminCaption}:{label:r.mq.canEditLabel,caption:r.mq.canEditCaption};case"read_and_write":return s===n.bx?{label:r.mq.memberLabel,caption:r.mq.memberCaption}:{label:r.mq.canEditLabel,caption:r.mq.canEditCaption};case"content_only_editor":return{label:r.mq.canEditContentLabel,caption:r.mq.canEditContentCaption};case"reader":return{label:r.mq.canReadLabel,caption:r.mq.canReadCaption};case"comment_only":return{label:r.mq.canCommentLabel,caption:r.mq.canCommentCaption};case"none":return t?s===n.bx?o?{label:r.mq.leaveWorkspaceLabel,style:{color:i.ZP.red}}:{label:r.mq.removeFromWorkspaceLabel,style:{color:i.ZP.red}}:{label:r.mq.removeWorkspaceLabel,style:{color:i.ZP.red}}:{label:r.mq.noAccessLabel,style:{color:i.ZP.red}};default:(0,l.t1)(e)}}},7567:(e,s,t)=>{t.d(s,{ZP:()=>$});t(57658),t(67294);var o=t(83355),i=t(480),a=t(86628),r=t(24405),n=t(41892),l=t(36591),d=t(86517),c=t(72141),p=t(15047),u=t(47425),m=t(97880),g=t(68939),b=t(50906),f=t(47307),h=t(95477),_=t(43250),v=t(33929),M=t(87279),x=t(98742),y=t(67669),w=t(18514),C=t(61766),j=t(31194),R=t(44041),k=t(54669),q=t(70060),A=t(88893),T=t(35057),F=t(52275),I=t(31945),P=t(78140),S=t(28992),B=t(32163),U=t(74136),Z=t(72495),W=t(26388),D=t(64369),E=t(84015),O=t(42402),L=t(33241),N=t(60442),K=t(85893);const G=(0,g.defineMessages)({fullAccessTeamGuestsDisabledMessage:{id:"permissionRoleSelect.teamGuestPermissionItem.disabledPermissionitem.tooltip",defaultMessage:"Teamspace guests can't have full access."}});class V extends o.Z{constructor(){super(...arguments),this.storeTypes={buttonPopupStore:C.Z}}renderComponent(){const{device:e}=this.environment,s=!!this.props.isUserPermission,t=function(e,s,t,o,i,a){if(i&&i.length>0)return i;const r=[];"explicit_team_guest_permission"===e?r.push({role:"editor",disabledInfo:{isDisabled:!0,disabledMessage:v.default.formatMessage(G.fullAccessTeamGuestsDisabledMessage)}}):"bot_permission"!==e&&r.push({role:"editor"});"space"===s&&(0,y.U7)()&&r.push({role:"membership_admin"});r.push({role:"read_and_write"}),"collection_view"!==a&&"collection_view_page"!==a||"bot_permission"===e&&"content_only_editor"!==t||r.push({role:"content_only_editor"});s!==p.bx&&("bot_permission"!==e&&r.push({role:"comment_only"}),"bot_permission"===e&&"reader"!==t||r.push({role:"reader"}));o||r.push({role:"none"});return r}(this.props.type,this.props.table,this.props.role,this.props.isInvite,this.props.availableRoleItems,this.props.blockType);return(0,K.jsx)(I.ZP,{onClick:e=>{e.stopPropagation(),this.props.onClick&&this.props.onClick()},popupType:e.isMobile?I.Z4.SlideUp:I.Z4.Popup,buttonPopupStore:this.stores.buttonPopupStore,renderOrigin:e=>this.props.origin?this.props.origin:this.props.isMenuItem?(0,K.jsx)(F.Z,{...e,title:(0,K.jsx)(g.FormattedMessage,{...(0,L.M)(this.props.role,this.props.table,z(this.props.type,this.props.isRemovableOverride),s).label}),focused:!1,showExtensionArrow:!0}):(0,K.jsx)(L.d,{role:this.props.role,events:e,disabled:this.props.disabled,buttonContents:this.props.buttonContents,buttonStyle:this.props.buttonStyle,table:this.props.table,isRemovable:z(this.props.type,this.props.isRemovableOverride),isCurrentUser:s}),placementToOrigin:this.props.placementToOrigin?this.props.placementToOrigin:j.Iw.Bottom,alignmentToOrigin:this.props.alignmentToOrigin,render:s=>{const o=this.props.role;let i,a;return i=(0,d.oF)(o)?[{key:"mixed_role_section",render:e=>(0,K.jsx)(Z.Z,{...e,topBorder:!1}),items:[{key:"mixed_role_description",render:()=>(0,K.jsx)(E._,{role:o}),action:()=>{}}]},{key:"bot_capabilities_warning",render:e=>(0,K.jsx)(Z.Z,{...e,topBorder:!0}),items:[{key:"warning_details",render:e=>(0,K.jsx)(S.Z,{...e,shouldWrapCaption:!0,caption:"Integration permissions cannot be changed on a page. You can manage integrations in settings."}),action:()=>{}}]},{key:"remove_bot",render:e=>(0,K.jsx)(Z.Z,{...e,topBorder:!0}),items:[{key:"none",render:e=>this.getItem({role:"none"},e.focused,e),action:()=>{Y("none",this.props.table,this.props.role,this.props.type,this.props.upgradeButtonName,this.environment,t,this.props.onChange,this.props.onUpgradeButtonClick,this.props.isUserPermission,this.props.onRemoveMemberClick),s.close()}}]}]:[{key:"roles",render:e=>(0,K.jsx)(Z.Z,{...e,topBorder:0!==e.index}),items:t.map((e=>({key:e.role,render:s=>this.getItem(e,s.focused,s),action:()=>{Y(e.role,this.props.table,this.props.role,this.props.type,this.props.upgradeButtonName,this.environment,t,this.props.onChange,this.props.onUpgradeButtonClick,this.props.isUserPermission,this.props.onRemoveMemberClick),s.close()}})))}],a=e.isMobile?{menuType:M.og.Modal,title:(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.mobile.title",defaultMessage:"Select role"}),right:(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.mobile.doneButton.label",defaultMessage:"Done"}),onClickRight:s.close}:{menuType:M.og.Popup,width:264},(0,K.jsxs)(P.Z,{className:_.a6i,header:this.props.header,footer:this.props.footer,...a,children:[(0,K.jsx)(B.Z,{type:B.i.Vertical,initialFocus:void 0,sections:i}),this.props.showPermissionOverrideWarning&&(0,K.jsx)(Q,{})]})}})}getItem(e,s,t){const o=!!this.props.isUserPermission,{label:i,caption:a}=(0,L.M)(e.role,this.props.table,z(this.props.type,this.props.isRemovableOverride),o);return(0,K.jsx)(H,{role:this.props.role,upgradeButtonName:this.props.upgradeButtonName,onUpgradeButtonClick:this.props.onUpgradeButtonClick,label:i,caption:a,focused:s,props:t,disabledMessage:J(e.role,this.props.table,this.props.type),availableRole:e})}}V.displayName="PermissionRoleSelect";const $=V;function J(e,s,t){const o=(0,T.zt)();if((0,u.QM)(o)){if((s===p.bx?c.RN(e):c.J5(e)&&!c.zz(e))&&"public_permission"!==t&&"bot_permission"!==t)return s===p.bx?(0,K.jsx)(N.Z,{imageURL:n.Z.images.tooltips.upsells.spaceReadAndWritePng,imageWidth:240,imageHeight:100,caption:(0,K.jsx)(g.FormattedMessage,{defaultMessage:"Members cannot change workspace settings or invite new members.",id:"permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.caption"}),title:(0,K.jsx)(g.FormattedMessage,{defaultMessage:"Upgrade to add non-admin members",id:"permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.title"})}):(0,K.jsx)(N.Z,{imageURL:n.Z.images.tooltips.upsells.userReadAndWritePng,imageWidth:240,imageHeight:100,caption:(0,K.jsx)(g.FormattedMessage,{defaultMessage:"Users with edit access can edit a page but not share it with others.",id:"permissionRoleSelect.userReadAndWriteUpgradeTooltip.caption"}),title:(0,K.jsx)(g.FormattedMessage,{defaultMessage:"Upgrade to add editors",id:"permissionRoleSelect.userReadAndWriteUpgradeTooltip.title"})})}return!1}function z(e,s){if(void 0!==s)return s;switch(e){case"user_permission":case"bot_permission":case"group_permission":return!0;case"space_permission":case"explicit_team_permission":case"team_permission":case"team_owner_permission":case"explicit_team_owner_permission":case"explicit_team_guest_permission":case"public_permission":case"exclusive_user_permission":return!1;default:(0,m.t1)(e)}}async function Y(e,s,t,o,i,a,r,n,l,c,u){if(t===e)return;const m=()=>{n&&n(e)};if(b.Mv5({newRole:e,availableRoles:r}),J(e,s,o)&&!h.default.isAdminMode)R.y(a,{from:i,for:A.M9(a)||"plus"}),l&&l();else if(function(e,s,t){return t&&(0,d.nl)(s,e)===s&&"none"===e}(e,t,c))f.showDialog({showCancel:!0,keepFocus:!1,message:s===p.bx?(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeSelfFromWorkspace.confirmationMessage",defaultMessage:"Are you sure you want to remove your own access? You will lose access to the workspace, and any private pages will be lost."}):(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeSelfFromPage.confirmationMessage",defaultMessage:"Are you sure you want to remove your own access?"}),items:[{label:(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeSelfButton.label",defaultMessage:"Remove"}),color:"red",onAccept:m}]});else if(function(e,s,t){return t&&(0,d.nl)(s,e)===s}(e,t,c))f.showDialog({showCancel:!0,keepFocus:!1,message:(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.downgradePermissionsModal.downgradeSelfFromWorkspaceOrPage.confirmationMessage",defaultMessage:"Are you sure you want to downgrade your own access?"}),items:[{label:(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.downgradePermissionsModal.downgradeSelfButton.label",defaultMessage:"Downgrade"}),color:"red",onAccept:m}]});else if(function(e,s){return s===p.bx&&"none"===e}(e,s))if(u)u();else{await async function(e){const{message:s}=e;return new Promise((e=>{f.showDialog({showCancel:!0,keepFocus:!1,handleCancel:()=>e(!1),message:s,items:[{label:(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserButton.label",defaultMessage:"Remove"}),color:"red",onAccept:()=>e(!0)}]})}))}({message:(_=!0,_&&(0,T.wP)()?(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.enterprise.confirmationMessage",defaultMessage:"If you remove this member, they will lose workspace access. After their removal, you may transfer their private pages to another member. <transferpagelink>Learn more</transferpagelink>.",values:{transferpagelink:e=>(0,K.jsx)(O.Z,{href:(0,w.UY)("guides.transferContent"),external:!0,children:e})}}):_?(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.confirmationMessage",defaultMessage:"Are you sure you want to remove this person? They will lose access to the workspace, and any private pages will be lost."}):(0,K.jsx)(g.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserFromPage.confirmationMessage",defaultMessage:"Are you sure you want to remove this person?"}))})&&m()}else m();var _}function H(e){window.__c={n:"ItemComponent"};const{role:s,upgradeButtonName:t,onUpgradeButtonClick:o}=e,n=(0,r.Fg)(),d=(0,i.O7)(),{device:c}=d,{onClick:p,key:u,...m}=e.props,b=e.availableRole.disabledInfo,f=(0,a.VK)((()=>d.device.isMobile&&q.bQ()),[d]),h=Boolean(e.disabledMessage),_=(0,a.VK)((()=>h&&A.M9(d)),[d,h]),v=h&&!f;return b&&b.isDisabled?(0,K.jsx)(W.Z,{delayThreshold:0,renderTooltip:e=>(0,K.jsx)("div",{...e,children:b.disabledMessage}),placement:W.Z.Placement.Right,textWrap:!0,render:t=>(0,K.jsx)(F.Z,{...t,focused:e.focused,disabled:!0,disabledFeedback:!0,right:s===e.availableRole.role?(0,K.jsx)("div",{style:{width:c.isMobile?16:14},children:(0,l.e)()}):void 0,title:(0,K.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,K.jsx)("div",{style:{...e.style,marginRight:e.disabledMessage?6:0},children:(0,K.jsx)(g.FormattedMessage,{...e.label})})}),caption:e.caption&&(0,K.jsx)("span",{style:{color:n.mediumTextColor},children:(0,K.jsx)(g.FormattedMessage,{...e.caption})}),shouldWrapCaption:!0})}):(0,K.jsx)(k.Z,{requireUpgradeToTier:_,analyticsName:t,renderUpgradeTooltip:()=>e.disabledMessage,tooltipPlacement:W.Z.Placement.Left,onClick:p,onUpgradeClick:o,render:(t,o)=>{const{focused:i,...a}=(0,x.Z)(m,t);return(0,K.jsx)(F.Z,{...a,focused:i||e.focused,right:s===e.availableRole.role?(0,K.jsx)("div",{style:{width:c.isMobile?16:14},children:(0,l.e)()}):void 0,title:(0,K.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,K.jsx)("div",{style:{...e.style,marginRight:e.disabledMessage?6:0},children:(0,K.jsx)(g.FormattedMessage,{...e.label})}),o,e.availableRole.tag&&(0,K.jsx)(U.Z,{desktopStyle:{marginLeft:7},children:e.availableRole.tag})]}),caption:e.caption&&(0,K.jsx)("span",{style:{color:n.mediumTextColor},children:(0,K.jsx)(g.FormattedMessage,{...e.caption})}),shouldWrapCaption:!0,disabled:v})}},u)}function Q(){window.__c={n:"PermissionOverrideLabelComponent"};const e=(0,r.Fg)(),s=(0,i.O7)(),{device:t}=s;return(0,K.jsx)(D.Z,{style:{padding:12,backgroundColor:e.sidebarSecondaryBackground,boxShadow:`0 -1px 0 ${e.regularDividerColor}`,marginTop:t.isMobile?28:1},isMultiline:!0,isSmall:!0,children:(0,K.jsx)(g.FormattedMessage,{id:"permissionRoleSelect.overrideMessage.caption",defaultMessage:"You’ll override permissions from the parent page if you change this role."})})}},93963:(e,s,t)=>{t.d(s,{z:()=>r});t(67294);var o=t(24405),i=t(68939),a=t(85893);function r(e){let{color:s,size:t,style:r}=e;window.__c={n:"StatusDot"};const n=(0,i.useIntl)(),l=(0,o.yK)((e=>({dot:{height:t||8,width:t||8,background:s||e.blueColor,flexShrink:0,borderRadius:"100%",pointerEvents:"none",...r}})),[t,s,r]);return(0,a.jsx)("div",{role:"img","aria-label":n.formatMessage({id:"statusDot.ariaLabel",defaultMessage:"New"}),style:l.dot})}},98905:(e,s,t)=>{t.d(s,{Z:()=>a});var o=t(49085);class i extends o.default{getInitialState(){return{count:0}}}const a=new i},91694:(e,s,t)=>{t.d(s,{Z:()=>f});t(67294);var o=t(83355),i=t(8848),a=t(47425),r=t(97880),n=t(82990),l=t(68939),d=t(74136),c=t(26388),p=t(44041),u=t(70060),m=t(32856),g=t(85893);class b extends o.Z{constructor(){super(...arguments),this.handleClick=e=>{p.y(this.environment,{from:this.props.analyticsName,for:this.props.subscriptionTier}),this.props.onClick&&this.props.onClick(e)}}renderComponent(){const{device:e}=this.environment;if(e.isIOS&&e.isNative)return;let s;return"personal"===this.props.subscriptionTier?s=(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Personal Pro",id:"upgradeButton.personal.text"}):(0,a.eR)(this.props.subscriptionTier)?s=(0,g.jsx)(m.D,{experimentId:"upsell_colors",groups:{control:(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Plus",id:"upgradeButton.plus.text"}),on:(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Plus ↗",id:"upgradeButton.plus.textWithArrow"})}}):(0,a.NG)(this.props.subscriptionTier)?s=(0,g.jsx)(m.D,{experimentId:"upsell_colors",groups:{control:(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Business",id:"upgradeButton.business.text"}),on:(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Business ↗",id:"upgradeButton.business.textWithArrow"})}}):(0,a.wP)(this.props.subscriptionTier)?s=(0,g.jsx)(m.D,{experimentId:"upsell_colors",groups:{control:(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Enterprise",id:"upgradeButton.enterprise.text"}),on:(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Enterprise ↗",id:"upgradeButton.enterprise.textWithArrow"})}}):(0,r.t1)(this.props.subscriptionTier),e.isMobile?(0,g.jsx)(d.Z,{mobileStyle:this.props.mobileStyle,children:s}):(0,g.jsx)(c.Z,{delayThreshold:120,placement:c.Z.Placement.Bottom,renderTooltip:()=>(0,g.jsxs)("div",{style:{maxWidth:500},children:[(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Upgrade to use this feature.",id:"upgradeButton.upgrade.tooltip"}),(0,g.jsx)("br",{}),(0,g.jsx)(l.FormattedMessage,{defaultMessage:"Click to learn more.",id:"upgradeButton.learnMore.tooltip"})]}),originGap:6,render:e=>(0,g.jsx)(d.Z,{desktopStyle:this.props.desktopStyle,innerStyle:h(this.props.subscriptionTier,this.theme),onClick:this.handleClick,...e,children:s})})}}b.displayName="UpsellButton";const f=b;function h(e,s){if(!(0,u.R$)())return{};switch(e){case"plus":case"business":case"enterprise":return{color:s.blueColor,background:"light"===s.mode?i.ZP.diffBackground:"rgba(35, 131, 226, 0.2)",fontWeight:n.Z.fontWeight.medium};default:return{}}}},54669:(e,s,t)=>{t.d(s,{Z:()=>d});t(67294);var o=t(480),i=t(26388),a=t(98742),r=t(44041),n=t(91694),l=t(85893);const d=function(e){window.__c={n:"UpsellGate"};const s=(0,o.O7)(),{render:t,requireUpgradeToTier:d,analyticsName:c,renderUpgradeTooltip:p,onUpgradeClick:u,alwaysAllowClick:m,tooltipPlacement:g,upgradeButtonDesktopStyle:b,upgradeButtonMobileStyle:f}=e;let h,{onClick:_,renderTooltip:v}=e;return d&&(h=(0,l.jsx)(n.Z,{subscriptionTier:d,analyticsName:c,desktopStyle:{display:"inline-block",pointerEvents:"none",...b},mobileStyle:{display:"inline-block",pointerEvents:"none",...f}}),m||(_=e=>{r.y(s,{from:c,for:d}),u&&u(e)},v=p)),(0,l.jsx)(i.Z,{renderTooltip:v||(()=>null),render:e=>t((0,a.Z)(e,{onClick:_}),h),disableTooltip:!v,placement:g})}}}]);