(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9380],{81346:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>R});s(57658),s(67294);var o=s(83355),a=s(1302),n=s(32739),i=s(70203),r=s(68939),c=s(47839),l=s(98104),d=s(95477),u=s(87279),p=s(68056),m=s(89224),g=s(758),h=s(81212),f=s(45214),b=s(24666),y=s(93405),k=s(52275),v=s(1743),M=s(78140),x=s(32163),j=s(53437),N=s(72495),A=s(85893);class _ extends o.Z{UNSAFE_willMount(){c.electronApi&&c.electronApi.contextMenu&&c.electronApi.contextMenu.addListener(I)}willUnmount(){c.electronApi&&c.electronApi.contextMenu&&c.electronApi.contextMenu.removeListener(I)}renderComponent(){const{menuInfo:e,open:t}=f.Z.state,{device:s}=this.environment,{x:o,y:i}=function(e){const t=c.getCurrentZoom();return{x:e?e.x/t:0,y:e?e.y/t:0}}(e),l=new DOMRect(o,i,0,0),p=e?function(e,t){const s=[],o=function(e,t){const s="SpellCheckStore"in t&&t.SpellCheckStore,o=[];if(T(e)&&s&&s.isEnabled()){const t=s.getCorrections(e);for(const e of t)o.push({key:e,action:()=>{c.electronApi&&c.electronApi.replaceMisspelling&&c.electronApi.replaceMisspelling(e)},render:t=>(0,A.jsx)(k.Z,{...t,title:e})})}return o}(e,t);if(o.length>0){const e=s.length>0;s.push({key:"spellingCorrectionItems",items:o,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const a=function(e,t){const s="SpellCheckStore"in t&&t.SpellCheckStore,o=[];T(e)&&s&&s.isEnabled()&&!(0,g.x)(s)&&o.push({key:"learn-spelling",action:()=>{s.addToDictionary(e.misspelledWord)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Add to dictionary",id:"desktop.spellcheckMenuItem.addToDictionary.title"})})});T(e)&&s&&s.isEnabled()&&o.push({key:"disable",action:()=>{s.setEnabled(!1)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Disable spell check",id:"desktop.spellcheckMenuItem.disableSpellcheck.title"})})});return o}(e,t);if(a.length>0){const e=s.length>0;s.push({key:"disableSpellCheckItems",items:a,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const i=function(e){const t=[];e.selectionText&&e.selectionText.length>0&&t.push({key:"google",action:()=>{if(c.electronApi){const t=`https://www.google.com/search?q=${encodeURIComponent(e.selectionText.trim())}`;c.electronApi.openExternalUrl(t)}},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Search with Google",id:"desktop.searchMenuItem.searchWithGoogle.title"})})});return t}(e);if(i.length>0){const e=s.length>0;s.push({key:"searchItems",items:i,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const l=function(e){const t=[];e.linkURL&&e.linkURL.length>0&&(e.linkURL.startsWith("mailto:")?t.push({key:"copy-email",action:()=>{c.electronApi&&c.electronApi.copyText&&c.electronApi&&c.electronApi.copyText(e.linkText)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy email address",id:"desktop.rightClickMenu.copyEmailAddress"})})}):t.push({key:"copy-link",action:()=>{c.electronApi&&c.electronApi.copyText&&c.electronApi&&c.electronApi.copyText(n.b({url:e.linkURL,domainBaseUrl:d.default.domainBaseUrl,protocol:d.default.protocol}))},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy link",id:"desktop.rightClickMenu.copyLink"})})}),t.push({key:"open-link",action:()=>{c.electronApi&&c.electronApi.openExternalUrl(n.b({url:e.linkURL,domainBaseUrl:d.default.domainBaseUrl,protocol:d.default.protocol}))},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Open link in browser",id:"desktop.rightClickMenu.openLinkInBrowser"})})}));return t}(e);if(l.length>0){const e=s.length>0;s.push({key:"linkMenuItems",items:l,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const u=function(e){const t=[];e.hasImageContents&&e.srcURL&&e.srcURL.length>0&&(t.push({key:"copy-image",action:()=>{c.electronApi&&c.electronApi.copyImage&&c.electronApi.copyImage(e.srcURL)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy image",id:"desktop.rightClickMenu.copyImage"})})}),t.push({key:"copy-image-address",action:()=>{c.electronApi&&c.electronApi.copyText&&c.electronApi.copyText(n.b({url:e.srcURL,domainBaseUrl:d.default.domainBaseUrl,protocol:d.default.protocol}))},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy image address",id:"desktop.rightClickMenu.copyImageAddress"})})}));return t}(e);if(u.length>0){const e=s.length>0;s.push({key:"imageMenuItems",items:u,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const p=function(e){const t=[];E(e)&&(e.editFlags.canCut&&t.push({key:"cut",action:()=>{c.electronApi&&c.electronApi.cut&&c.electronApi.cut()},render:e=>(0,A.jsx)(y.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Cut",id:"desktop.textEditingMenuItem.cutAction.title"}),shortcut:"cut"})}),e.editFlags.canCopy&&t.push({key:"copy",action:()=>{c.electronApi&&c.electronApi.copy&&c.electronApi.copy()},render:e=>(0,A.jsx)(y.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Copy",id:"desktop.textEditingMenuItem.copyAction.title"}),shortcut:"copy"})}),e.editFlags.canPaste&&t.push({key:"paste",action:()=>{c.electronApi&&c.electronApi.paste&&c.electronApi.paste()},render:e=>(0,A.jsx)(y.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Paste",id:"desktop.textEditingMenuItem.pasteAction.title"}),shortcut:"paste"})}));return t}(e);if(p.length>0){const e=s.length>0;s.push({key:"textEditingItems",items:p,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}const m=function(e,t){const s="SpellCheckStore"in t&&t.SpellCheckStore,o=[];E(e)&&s&&!s.isEnabled()&&o.push({key:"enable",action:()=>{s.setEnabled(!0)},render:e=>(0,A.jsx)(k.Z,{...e,title:(0,A.jsx)(r.FormattedMessage,{defaultMessage:"Enable spell check",id:"desktop.spellcheckMenuItem.enableSpellcheck.title"})})});return o}(e,t);if(m.length>0){const e=s.length>0;s.push({key:"enableSpellCheckItems",items:m,render:t=>(0,A.jsx)(N.Z,{...t,topBorder:e})})}return s}(e,this.environment):[],b=document.activeElement,_=m.get();let R=null,I=null;(b instanceof HTMLInputElement||b instanceof HTMLTextAreaElement)&&(R=b.selectionStart,I=b.selectionEnd);for(const n of p)for(const e of n.items){const t=e.action;e.action=e=>{b.focus(),b instanceof HTMLInputElement||b instanceof HTMLTextAreaElement?(b.selectionStart=R,b.selectionEnd=I):_&&m.set(_,s),a.default.afterNextFlush((()=>{t(e)}))}}return(0,A.jsx)(j.ZP,{open:t&&p.length>0,popupType:j.ZP.PopupType.Popup,originRect:l,render:()=>(0,A.jsx)(v.Z,{capture:!0,allowEsc:!0,children:(0,A.jsx)(M.Z,{menuType:u.og.Popup,children:(0,A.jsx)(x.Z,{type:x.i.Vertical,sections:p,initialFocus:void 0,onAccept:q})})}),onDismiss:q,overlayContainerStore:h.Z})}}_.displayName="ElectronContextMenu";const R=_;function E(e){return e.isEditable||e.inputFieldType&&"none"!==e.inputFieldType}function T(e){return E(e)&&e.misspelledWord&&e.misspelledWord.length>0}function I(e,t){if(e.preventDefault(),t.misspelledWord){const e=b.default.state,s="editing"===e.mode&&(0,p.QY)(e.multiSelection);if(s&&s.selection.startIndex===s.selection.endIndex){const e=i.Oqk({textValue:s.store.getValue()||[],substring:t.misspelledWord,ignoreCase:!1}),o=s.selection.startIndex,a=i.PEL(e,o);a&&l.Z5({store:s.store,selection:a})}}f.Z.setState({open:!0,menuInfo:t})}function q(){f.Z.setState({...f.Z.state,open:!1})}},758:(e,t,s)=>{"use strict";s.d(t,{P:()=>d,x:()=>l});var o=s(27117),a=s.n(o),n=s(72126),i=s(54153),r=s(47839);const c="spellcheckEnabled";function l(e){return e instanceof d}class d{constructor(e){this.langCache=new(a())(100),this.enabled=void 0,this.currentInputElement=void 0,this.handleSelectionChange=()=>{if(this.enabled){const e=this.getInputElement();e&&e!==this.currentInputElement?(this.currentInputElement=e,this.handleDetectLanguageChange(e)):e&&this.handleDetectLanguageChangeThrottled(e)}},this.handleDetectLanguageChange=e=>{const t=e.textContent;if(t){let e=this.detectLanguages(t);void 0!==e&&(e=e.map((e=>navigator.language.startsWith(e)?navigator.language:e))),this.setLanguages(e)}},this.handleDetectLanguageChangeThrottled=n.P2(this.handleDetectLanguageChange,500),this.currentLanguages=void 0;const t=i.Z.get(c);this.setEnabled(void 0===t||t);const{isMac:s}=e.device;!s&&r.electronApi&&r.electronApi.loadSpellcheck&&(r.electronApi.loadSpellcheck(),document.addEventListener("selectionchange",this.handleSelectionChange))}setEnabled(e){this.enabled=e,i.Z.set(c,e),r.electronApi&&r.electronApi.setSpellCheckerLanguages&&(e?r.electronApi.setSpellCheckerLanguages(this.getLanguages()):r.electronApi.setSpellCheckerLanguages([]))}isEnabled(){return this.enabled}detectLanguages(e){let t;return this.langCache.cache[e]?(t=this.langCache.get(e),t):(r.electronApi&&r.electronApi.cld&&r.electronApi.cld.detect(e,((e,s)=>{s&&s.reliable&&s.languages&&(t=s.languages.map((e=>e.code)))})),this.langCache.set(e,t),t)}getCorrections(e){return e.dictionarySuggestions}setLanguages(e){n.Xy(this.currentLanguages,e)||(this.currentLanguages=e,r.electronApi&&r.electronApi.setSpellCheckerLanguages&&r.electronApi.setSpellCheckerLanguages(e||[]))}getInputElement(){const e=document.activeElement;if(e instanceof HTMLElement&&("input"===e.tagName||"true"===e.contentEditable))return e}getLanguages(){return navigator.languages.filter((e=>e.includes("-")))}}},81212:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});const o=new(s(61364).Z)},45214:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var o=s(49085);class a extends o.default{getInitialState(){return{open:!1}}}const n=new a},60951:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Notification:()=>y});var o=s(40902),a=s(66897),n=s(99036),i=s(38297),r=s(72126),c=s(59753),l=s(55061),d=s(82883),u=s(58129),p=s(13493),m=s(70279),g=s(19889),h=s(70203),f=s(97880),b=s(64002);function y(e){const{activity:t,getRecordValue:s,baseURL:y,userTimeZone:v,pageVisitSource:M,intl:x,useSimplifiedEmailSubjectForGrouping:j,isMobilePush:N,isMobilePushNotificationReplyActionEnabled:A}=e,_=c.om.fromGetRecordValueFn(s),R=(0,l.P6)({...e}),E=(0,l.XW)(R,x),T=(0,l.Qs)(R),I=(0,l.xS)(R),q=(0,l.oP)({...e,intl:x}),Z=(0,l.sn)({...e,intl:x}),C=(0,l.iR)({...e,intl:x}),S=(0,l.rn)({...e,intl:x});switch(t.type){case"top-level-block-created":return{subject:x.formatMessage(l.qJ.topLevelBlockCreated,{userName:E,targetName:q,spaceName:S})};case"top-level-block-deleted":return{subject:x.formatMessage(l.qJ.topLevelBlockDeleted,{userName:E,targetName:q,spaceName:S})};case"collection-row-created":return{subject:x.formatMessage(l.qJ.collectionRowCreated,{userName:E,targetName:q,collectionName:C})};case"collection-row-deleted":return{subject:x.formatMessage(l.qJ.collectionRowDeleted,{userName:E,targetName:q,collectionName:C})};case"block-edited":{let a;const c=t.getEdits();if(c.length){const t=c[0];if("block-changed"===t.type){const c=t.block_data.after.block_value,d=(0,i.ky)({block:c,getRecordValue:s});if("page"===c.type&&d){const i=t.block_schema||n.Kc(x),c=o.OS({before:t.block_data.before.block_value,after:t.block_data.after.block_value,schema:i}).filter((e=>{const t=i[e];return t&&"formula"!==t.type})).map((o=>{const a=i[o],n=a?a.name:void 0,r=(0,l.v4)({intl:x,property:o,schema:i,block:t.block_data.after.block_value,getRecordValue:s,userTimeZone:e.userTimeZone,baseURL:e.baseURL})||x.formatMessage(l.qJ.emptyBlockEditedProperty);return x.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:n,propertyValue:r})})),d=o.B9({before:t.block_data.before.block_value,after:t.block_data.after.block_value}),u=r.oA(d.map((e=>{const o=(0,l._u)({formatProperty:e,intl:x}),a=(0,l.W9)({formatProperty:e,intl:x,block:t.block_data.after.block_value,getRecordValue:s});if(o&&a)return x.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:o,propertyValue:a})})));a=x.formatList(c.concat(u),{type:"conjunction",style:"narrow"})}else a=(0,l._2)({intl:x,blockValue:c,getRecordValue:s,baseURL:y,userTimeZone:v})}else if("block-created"===t.type){const e=t.block_data.block_value;a=(0,l._2)({intl:x,blockValue:e,getRecordValue:s,baseURL:y,userTimeZone:v})}else if("block-deleted"===t.type){const e=t.block_data.block_value,o=(0,l._2)({intl:x,blockValue:e,getRecordValue:s,baseURL:y,userTimeZone:v});a=x.formatMessage(l.qJ.blockDeletedEditBody,{renderedBlock:o})}}return{subject:j?k(q,x):x.formatMessage(l.qJ.blockEditedNotification,{userName:E,blockName:q}),body:a}}case"block-property-edited":const J={subject:j?k(q,x):x.formatMessage(l.qJ.blockPropertyEditedNotification,{userName:E,blockName:q}),body:void 0},L=t.getEdits();if(L.length){const t=L[0],o=Object.entries(t.property_updates).filter((e=>{let[s,o]=e;const a=t.filtered_block_schema[s];return a&&!["formula","created_by","created_time"].includes(a.type)})).map((o=>{var a;let[n,i]=o;const r=t.filtered_block_schema[n],c=r?r.name:void 0,d=(0,l.Wy)({intl:x,propertySchema:r,textValue:(null===(a=i.after)||void 0===a?void 0:a.value)??[],getRecordValue:s,userTimeZone:e.userTimeZone,baseURL:e.baseURL})||x.formatMessage(l.qJ.emptyBlockEditedProperty);return x.formatMessage(l.qJ.propertyNameAndValueEdited,{propertyName:c,propertyValue:d})}));J.body=x.formatList(o,{type:"conjunction",style:"narrow"})}return N?{subject:x.formatMessage(l.qJ.mobileBlockPropertyEditedNotification,{userName:E}),subtitle:q,body:J.body,senderUserId:T,senderProfilePhoto:I,conversationIdentifier:Z}:J;case"permissions-edited":return{subject:x.formatMessage(l.qJ.userEditedPermissionsFor,{userName:E,targetName:q}),body:(0,l.gt)({intl:x,activity:t,getRecordValue:s,pageVisitSource:M,userTimeZone:e.userTimeZone})};case"user-mentioned":{const o=(0,l.kU)({intl:x,getRecordValue:s,baseURL:y,userTimeZone:e.userTimeZone,blockId:t.mentioned_block_id,property:t.mentioned_property});return N?{subject:x.formatMessage(l.qJ.mobileUserMentionedIn,{userName:E}),subtitle:q,body:o,senderUserId:T,senderProfilePhoto:I,conversationIdentifier:Z}:{subject:j?k(q,x):x.formatMessage(l.qJ.userMentionedIn,{userName:E,targetName:q}),body:o}}case"commented":{let o,a,n;const i=t.getEdits();if(i.length){const t=i[0];if(a=t.comment_id,n=t.discussion_id,"comment-created"===t.type){const a=s({table:m.x_,id:t.comment_id,spaceId:t.space_id}),n=t.comment_data||a;n&&(o=(0,d.X)({intl:x,textValue:n.text,getRecordModel:_,userTimeZone:e.userTimeZone}))}else if("comment-changed"===t.type)o=(0,d.X)({intl:x,textValue:t.comment_data.after.text,getRecordModel:_,userTimeZone:e.userTimeZone});else{const a=s({table:m.x_,id:t.comment_id,spaceId:t.space_id}),n=t.comment_data||a;if(n){const t=(0,d.X)({intl:x,textValue:n.text,getRecordModel:_,userTimeZone:e.userTimeZone});o=x.formatMessage(l.qJ.userDeletedComment,{commentText:t})}}}return N?{subject:x.formatMessage(l.qJ.mobileUserCommentedSubject,{userName:E}),subtitle:q,body:o,senderUserId:T,senderProfilePhoto:I,conversationIdentifier:Z,categoryIdentifier:A?"comment_notification_category":void 0,commentId:a,discussionId:n}:{subject:j?k(q,x):x.formatMessage(l.qJ.userCommentedSubject,{userName:E,targetName:q}),body:o}}case"user-invited":const U=(0,b.pE)(q),w=U.length>0?U:x.formatMessage(l.qJ.defaultPageName);if(t.permission_group_id)return{subject:x.formatMessage(l.qJ.userAddedToSpace,{userName:E,workspaceName:w})};return{subject:0===R.filter(a.uC).length?x.formatMessage(l.qJ.userInvitedToSpaceByBot,{workspaceName:w}):x.formatMessage(l.qJ.userInvitedToSpace,{userName:E,workspaceName:w})};case"collection-edited":{let e,s=x.formatMessage(l.qJ.userEditedCollectionSubject,{userName:E,collectionName:q});const a=t.getEdits();if(a.length){const t=a[0];if("collection-changed"===t.type&&t.collection_data){const a=t.collection_data.after?t.collection_data.after.description:void 0,n=t.collection_data.before?t.collection_data.before.description:void 0;n&&!a?s=x.formatMessage(l.qJ.collectionDescriptionDeleted,{userName:E,collectionName:q}):!n&&a?(s=x.formatMessage(l.qJ.collectionDescriptionCreated,{userName:E,collectionName:q}),e=h.Jcv(a)):n&&a&&o.Dn(n,a)&&(e=h.Jcv(a))}else if("collection-created"===t.type&&t.collection_data){const o=t.collection_data.description;o&&(s=x.formatMessage(l.qJ.userCreatedCollectionSubject,{userName:E,collectionName:q}),e=h.Jcv(o))}}return{subject:s,body:e}}case"collection-view-edited":const V=e.getRecordValue({table:p.n,id:t.collection_view_id,spaceId:t.space_id}),P=V&&V.name||x.formatMessage(l.qJ.untitledCollectionView);return{subject:x.formatMessage(l.qJ.collectionViewEditedSubject,{userName:E,collectionViewName:P,collectionName:q})};case"collection-property-edited":const D=t.getEdits(),F=D.length&&D[0],B=F&&("collection-property-changed"===F.type?F.collection_property_data.after.name:F.collection_property_data.name)||x.formatMessage(l.qJ.collectionPropertyEditedUnknown);return t.collection_property_id,{subject:x.formatMessage(l.qJ.collectionPropertyEditedSubject,{userName:E,propertyType:B,collectionName:q})};case"reminder":return{subject:x.formatMessage(l.qJ.reminderSubject,{pageName:q}),body:(0,l.kU)({getRecordValue:s,baseURL:y,userTimeZone:e.userTimeZone,blockId:t.reminder_block_id,property:t.reminder_property,intl:x})};case"permission-group-edited":return{subject:(0,l.pF)({activity:t,intl:x,userName:E,targetName:q})};case"page-locked":case"page-unlocked":return{subject:"page-locked"===t.type?x.formatMessage(l.qJ.pageLockedActivity,{userName:E,pageName:q}):x.formatMessage(l.qJ.pageUnlockedActivity,{userName:E,pageName:q})};case"email-edited":return{subject:x.formatMessage(l.qJ.emailEditedActivity,{userName:E})};case"access-requested":{const e=_({id:t.getAccessRequestId(),table:u.J8,spaceId:t.getSpaceId()});if(!e||e.isPageAccessRequest())return{subject:x.formatMessage(l.qJ.accessRequestedSubject,{userName:E,pageName:q})};if(e.isGuestInviteRequest())return{subject:x.formatMessage(l.qJ.guestInviteRequestedSubject,{userName:E,workspaceName:q})};if(e.isSpaceMembershipRequest()||e.isTeamMembershipRequest())return{subject:x.formatMessage(l.qJ.membershipRequestedSubject,{userName:E,workspaceName:q})};(0,f.t1)(e);break}case"access-request-resolved":{const e=_({id:t.getAccessRequestId(),table:u.J8,spaceId:t.getSpaceId()}),s=t.getEdits()[0].requested_for,o=s?_(s):void 0,a=null!=o&&o.isUser()?o.getEmail():x.formatMessage({defaultMessage:"a guest",id:"pushNotification.accessRequestResolved.invalidGuest"});return{subject:x.formatMessage("approved"===(null==e?void 0:e.status)?l.qJ.accessRequestResolvedApprovedSubject:l.qJ.accessRequestResolvedRejectedSubject,{guestEmail:a,pageName:q})}}case"page-deleted":return{subject:x.formatMessage(l.qJ.pageDeletedActivity,{userName:E})};case"page-restored":return{subject:x.formatMessage(l.qJ.pageRestoredActivity,{userName:E})};case"page-permanently-deleted":return{subject:x.formatMessage(l.qJ.pagePermanentlyDeletedActivity,{userName:E})};case"team-membership-edited":return{subject:x.formatMessage(l.qJ.userInvitedToTeam,{userName:E,teamName:q})};case"private-content-transferred":const O=t.getEdits(),W=O.length&&O[0].from_user_id;if(!W)return{subject:x.formatMessage({defaultMessage:"{author} transferred private content to you: {pageName}",id:"pushNotification.privateContentTransferred.noFromUserName"},{author:E,pageName:q})};const G=s({table:g.KJ,id:W});return{subject:x.formatMessage(l.qJ.privateContentTransferred,{author:E,pageName:q,fromUserName:G&&c.kk.fromValue(g.KJ,G).getFullName(x)})};case"permission-group-mentioned":const z=(0,l.Bg)({spaceId:t.space_id,permissionGroupId:t.mentioned_group_id,getRecordValue:e.getRecordValue}),Q=(0,l.jQ)(x,z);return{subject:j?k(q,x):x.formatMessage(l.qJ.permissionGroupMentionedIn,{userName:E,targetName:q,groupName:Q}),body:(0,l.kU)({intl:x,getRecordValue:s,baseURL:y,userTimeZone:e.userTimeZone,blockId:t.navigable_block_id,property:t.mentioned_property})};case"verification-expired":return{subject:x.formatMessage(l.qJ.verificationExpired,{pageName:q})};case"import-completed":const H=t.getEdits()[0],K="failed"===H.import_status?l.qJ.importFailed:l.qJ.importSuccessful;return{subject:x.formatMessage(K,{importSource:H.import_source})};case"export-completed":return{subject:x.formatMessage(l.qJ.exportCompleted)}}}function k(e,t){return t.formatMessage({defaultMessage:"New activity in {pageTitle}",id:"emailActivity.pageActivity.simplifiedSubjectLine"},{pageTitle:e})}},70693:(e,t,s)=>{"use strict";s.d(t,{mb:()=>r,nK:()=>c,pe:()=>l});var o=s(40506),a=s(7057),n=s(53877),i=s(42875);function r(e){const{dateTime:t,intl:s,shortenDateAndRange:o}=e,i=n.OQ.toPersistedDate(t.valueOf());return a.ZV({value:i,allowRelativeDates:!0,intl:s,shortenDateAndRange:o,displayInUserTimezone:!0})}function c(e){const{dateTime:t,intl:s,userTimeZone:o,displayInUserTimezone:i,alwaysIncludeTimezone:r}=e,c=n.OQ.toPersistedDateTime(t.valueOf(),t.zoneName);return a.ZV({value:c,allowRelativeDates:!0,intl:s,userTimeZone:o,displayInUserTimezone:i,alwaysIncludeTimezone:r})}function l(e){const{luxonRange:t,intl:s}=e,r=n.OQ.toPersistedDateRange(t),c=a.ZV({value:r,allowRelativeDates:!1,shortenDateAndRange:!0,intl:s,displayInUserTimezone:!0}),l=t.end.setZone((0,i.r)()),d=a.mr({start_time:l.toFormat(o.jK),humanReadable:!1,intl:s});return s.formatMessage({id:"verification.timeRange",defaultMessage:"{formattedDateRange} at {formattedEndTime}"},{formattedDateRange:c,formattedEndTime:d})}},27117:(e,t,s)=>{var o=s(17187),a=s(35717);function n(e){if(!(this instanceof n))return new n(e);"number"==typeof e&&(e={max:e}),e||(e={}),o.EventEmitter.call(this),this.cache={},this.head=this.tail=null,this.length=0,this.max=e.max||1e3,this.maxAge=e.maxAge||0}e.exports=n,a(n,o.EventEmitter),Object.defineProperty(n.prototype,"keys",{get:function(){return Object.keys(this.cache)}}),n.prototype.clear=function(){this.cache={},this.head=this.tail=null,this.length=0},n.prototype.remove=function(e){if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){var t=this.cache[e];return delete this.cache[e],this._unlink(e,t.prev,t.next),t.value}},n.prototype._unlink=function(e,t,s){this.length--,0===this.length?this.head=this.tail=null:this.head===e?(this.head=t,this.cache[this.head].next=null):this.tail===e?(this.tail=s,this.cache[this.tail].prev=null):(this.cache[t].next=s,this.cache[s].prev=t)},n.prototype.peek=function(e){if(this.cache.hasOwnProperty(e)){var t=this.cache[e];if(this._checkAge(e,t))return t.value}},n.prototype.set=function(e,t){var s;if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){if((s=this.cache[e]).value=t,this.maxAge&&(s.modified=Date.now()),e===this.head)return t;this._unlink(e,s.prev,s.next)}else s={value:t,modified:0,next:null,prev:null},this.maxAge&&(s.modified=Date.now()),this.cache[e]=s,this.length===this.max&&this.evict();return this.length++,s.next=null,s.prev=this.head,this.head&&(this.cache[this.head].next=e),this.head=e,this.tail||(this.tail=e),t},n.prototype._checkAge=function(e,t){return!(this.maxAge&&Date.now()-t.modified>this.maxAge)||(this.remove(e),this.emit("evict",{key:e,value:t.value}),!1)},n.prototype.get=function(e){if("string"!=typeof e&&(e=""+e),this.cache.hasOwnProperty(e)){var t=this.cache[e];if(this._checkAge(e,t))return this.head!==e&&(e===this.tail?(this.tail=t.next,this.cache[this.tail].prev=null):this.cache[t.prev].next=t.next,this.cache[t.next].prev=t.prev,this.cache[this.head].next=e,t.prev=this.head,t.next=null,this.head=e),t.value}},n.prototype.evict=function(){if(this.tail){var e=this.tail,t=this.remove(this.tail);this.emit("evict",{key:e,value:t})}}}}]);