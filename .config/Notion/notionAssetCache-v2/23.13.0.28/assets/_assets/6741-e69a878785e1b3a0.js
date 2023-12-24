"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6741],{68500:(e,t,r)=>{r.d(t,{Z:()=>N});r(67294);var s=r(83355),o=r(66897),n=r(14714),a=r(99036),i=r(75e3),l=r(72126),u=r(4615),d=r(96367),p=r(21202),c=r(6287),h=r(97880),g=r(68939),m=r(47307),y=r(66890),f=r(23586),x=r(92658),v=r(87279),S=r(77907),b=r(75822),M=r(886),j=r(29798),C=r(26136),Z=r(42922),w=r(52275),I=r(36488),R=r(74194),V=r(68894),F=r(78140),G=r(32163),P=r(43765),k=r(11470),T=r(72495),_=r(86765),B=r(97680),L=r(85893);class E extends s.Z{constructor(){super(...arguments),this.storeTypes={inputStore:x.Z,menuListStore:j.Z,collectionContextStore:M.Z},this.handleTextInputChange=e=>{const{inputStore:t,menuListStore:r}=this.stores;t.setState({...t.state,inputValue:e.target.value}),r.setState({...r.state,focus:{section:0,indexLocal:0,indexGlobal:0}})},this.handleTextInputKeydown=e=>{if(13===e.keyCode)this.acceptTextInputValue();else if(27===e.keyCode){var t,r;null===(t=(r=this.props).onClose)||void 0===t||t.call(r)}},this.handleMenuClickRight=()=>{this.acceptTextInputValue()},this.handleClickSubmitButton=()=>{this.acceptTextInputValue()}}UNSAFE_willMount(e){var t;super.UNSAFE_willMount(e);const{inputStore:r}=this.stores,{groupFormat:s}=this.props;s&&("select"===s.value.type||"multi_select"===s.value.type)&&s.value.value?r.setState({...r.state,inputValue:s.value.value}):s&&(0,n.R7)(s.value)&&"exact"===(null===(t=s.value.value)||void 0===t?void 0:t.type)&&r.setState({...r.state,inputValue:s.value.value.value})}renderComponent(){const{groupFormat:e,onClose:t}=this.props;let r;var s;return r=this.environment.device.isPhone?{menuType:v.og.Modal,title:e?(0,L.jsx)(g.FormattedMessage,{defaultMessage:"Rename group",id:"codeBlock.databaseEditGroupMenu.renameGroupTitle"}):(0,L.jsx)(g.FormattedMessage,{defaultMessage:"Add a group",id:"codeBlock.databaseEditGroupMenu.addGroupTitle"}),left:(0,L.jsx)(g.FormattedMessage,{defaultMessage:"Cancel",id:"codeBlock.databaseEditGroupMenu.cancelButton.label"}),right:(0,L.jsx)(g.FormattedMessage,{defaultMessage:"Done",id:"codeBlock.databaseEditGroupMenu.doneButton.label"}),onClickRight:this.handleMenuClickRight,onClickLeft:t}:{menuType:v.og.Popup,width:(s=this.props.groupBy,"select"===s.type||"multi_select"===s.type||(0,n.HB)(s.type)?300:240),maxHeight:"50vh"},(0,L.jsx)(I.Z,{capture:!0,render:e=>(0,L.jsx)(F.Z,{...r,...e,children:this.renderMenuInner()})})}renderMenuInner(){const{groupBy:e,schema:t}=this.props;if(t[e.property])return"select"===e.type||"multi_select"===e.type?this.renderTextInput():"person"===e.type?this.renderPersonValue():"relation"===e.type?this.renderRelationValue():(0,n.HB)(e.type)?this.renderTextInput():void("number"!==e.type&&"status"!==e.type&&"date"!==e.type&&"formula"!==e.type&&"checkbox"!==e.type&&"created_time"!==e.type&&"last_edited_time"!==e.type&&"created_by"!==e.type&&"last_edited_by"!==e.type&&"last_visited_time"!==e.type&&"location"!==e.type&&(0,h.t1)(e.type))}renderTextInput(){const{intl:e,groupFormat:t}=this.props,{inputValue:r}=this.stores.inputStore.state,s=t?e.formatMessage({id:"database.collectionEditGroupMenu.renameGroupLabel.placeholder",defaultMessage:"Rename group"}):e.formatMessage({id:"database.collectionEditGroupMenu.newGroupLabel.placeholder",defaultMessage:"New group"});return this.environment.device.isPhone?(0,L.jsx)(T.Z,{children:(0,L.jsx)(V.ZP,{value:r,focus:!0,selectAll:!0,showClearButton:!1,focusInitial:!0,placeholder:s,onChange:this.handleTextInputChange,onKeyDown:this.handleTextInputKeydown})}):(0,L.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"8px 10px",width:"100%",background:this.theme.inputBackground},children:[(0,L.jsx)(R.Z,{value:r,focus:!0,selectAll:!0,focusInitial:!0,placeholder:s,onChange:this.handleTextInputChange,onKeyDown:this.handleTextInputKeydown,format:R.B.Transparent}),(0,L.jsxs)(Z.Z,{onClick:this.handleClickSubmitButton,children:[(0,L.jsx)(g.FormattedMessage,{defaultMessage:"Done",id:"database.collectionEditGroupMenu.submitButton.label"}),(0,i.U)({height:14,width:14,fill:"currentColor",marginLeft:6,marginTop:2})]})]})}renderPersonValue(){const{currentGroups:e,intl:t}=this.props,{inputValue:r}=this.stores.inputStore.state;return(0,L.jsx)(f.Z,{request:r,performRequest:e=>async function(e,t){const r=await S.deps.searchActions.loader();return(await r.searchVisibleSpaceUsers({environment:t,query:e,membersOnly:!1})).slice(0,20)}(e,this.environment),debounce:b.vp,render:(s,a,i)=>{a||(a=[]);const u=l.oA(a.map((t=>({key:t.id,render:e=>(0,L.jsx)(B.Z,{actor:(0,o.dp)(t),...e}),action:()=>{const{onChange:r,groupFormat:s}=this.props,o={type:"person",value:{table:"notion_user",id:t.id}};var a,i;s&&l.Xy(o,s.value)?null===(a=(i=this.props).onClose)||void 0===a||a.call(i):e.some((e=>(0,n.we)(o,e.value)))?m.showErrorMessage((0,L.jsx)(W,{})):r({newGroupValue:o})}}))));let d;return d=i&&a&&0===u.length?(0,L.jsx)(T.Z,{children:(0,L.jsx)(P.Z,{title:(0,L.jsx)(g.FormattedMessage,{defaultMessage:"No results",id:"database.noPersonSearchResults.message"})})}):(0,L.jsx)(G.Z,{type:G.i.Vertical,initialFocus:0,sections:[{key:0,render:e=>(0,L.jsx)(T.Z,{...e}),items:u}],store:this.stores.menuListStore}),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(T.Z,{children:(0,L.jsx)(V.ZP,{value:r,focus:!0,placeholder:t.formatMessage({defaultMessage:"Search for a person…",id:"database.searchPerson.placeholder"}),onChange:e=>{this.stores.inputStore.setState({...this.stores.inputStore.state,inputValue:e.target.value}),this.stores.menuListStore.setState({...this.stores.menuListStore.state,focus:{section:0,indexLocal:0,indexGlobal:0}})}})}),d]})}})}getCreateNewPageMenuListItem(){const{parentStore:e,schema:t,groupBy:r}=this.props,{inputValue:s}=this.stores.inputStore.state,o=t[r.property];if(!o||"relation"!==o.type)return null;const n=a.j0(o);if(!n)return null;const i=C.NW.createChildStore(e,n);return i.isDefined()&&s.length>0?{key:"new-page",render:e=>(0,L.jsx)(w.Z,{title:(0,L.jsx)(_.Z,{targetCollectionStore:i,title:s}),...e}),action:()=>{const{onChange:e}=this.props,t={table:p.iU,id:(0,u.ZP)(),spaceId:i.getSpaceId()};e({newGroupValue:{type:"relation",value:t},newPage:{id:t.id,spaceId:t.spaceId,name:s}})}}:null}getMenuListItemsForRelatedRecords(e,t){var r;const{currentGroups:s,parentStore:o}=this.props,a=null===(r=this.context.collectionContextStore)||void 0===r?void 0:r.relativeVariableStore.state,i=a&&a[t.id],u=(e,r)=>{const s=C.NW.createChildStore(o,t);if(!s.isDefined())return;const n=s.getFormat().app_config_uri;return n&&r?e.formatMessage(d.qB[n][r].messageDescriptor):void 0};return e.map((e=>{const t=C.G.createChildStore(o,e);if(t.isTemplate())return;const r=i?(0,d.P8)(t.id,i):void 0;return{key:t.id,render:e=>(0,L.jsx)(k.Z,{store:t,titlePrefix:u(this.props.intl,r),...e}),action:()=>{const{onChange:t,groupFormat:o}=this.props;let a={type:"relation",value:e};var i,u;(r&&(a={type:"relation",value:{type:"relative",value:{type:"builtin",variable:r}}}),o&&l.Xy(a,o.value))?null===(i=(u=this.props).onClose)||void 0===i||i.call(u):s.some((e=>(0,n.we)(a,e.value)))?m.showErrorMessage((0,L.jsx)(W,{})):t({newGroupValue:a})}}}))}renderRelationValue(){const{intl:e,parentStore:t,schema:r,groupBy:s}=this.props,{inputValue:o}=this.stores.inputStore.state,n=r[s.property];if(!n||"relation"!==n.type)return;const i=a.j0(n);if(!i)return;return C.NW.createChildStore(t,i).isDefined()?(0,L.jsx)(f.Z,{request:o,performRequest:e=>async function(e,t,r,s,o){const n=r[t.property];if(!n||!(0,a.p_)(n))return;const i=n.collection_pointer;if(!i)return;const l=C.NW.createChildStore(s,{table:c.v,id:i.id});if(await l.load(),!l.isDefined())return;const u=l.getSpaceId(),d=await S.deps.searchActions.loader();return(await d.searchPagesInCollection({environment:o,query:e,collectionId:i.id,spaceId:u,excludeTemplates:!0,source:"collection_group_value",limit:20,includePublicPagesWithoutExplicitAccess:!1,boostRecentlyViewedPages:!1})).results.map((e=>({table:p.iU,id:e,spaceId:u})))}(e,this.props.groupBy,this.props.schema,this.props.parentStore,this.environment),debounce:b.vp,render:(t,r,s)=>{r||(r=[]);const n=l.oA([...this.getMenuListItemsForRelatedRecords(r,i),this.getCreateNewPageMenuListItem()]);let a;return a=s&&r&&0===n.length?(0,L.jsx)(T.Z,{children:(0,L.jsx)(P.Z,{title:(0,L.jsx)(g.FormattedMessage,{defaultMessage:"No results",id:"database.noRelationSearchResults.message"})})}):(0,L.jsx)(G.Z,{type:G.i.Vertical,initialFocus:0,sections:[{key:0,render:e=>(0,L.jsx)(T.Z,{...e}),items:n}],store:this.stores.menuListStore}),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(T.Z,{children:(0,L.jsx)(V.ZP,{value:o,focus:!0,placeholder:e.formatMessage({defaultMessage:"Type to search...",id:"database.searchRelation.placeholder"}),onChange:e=>{this.stores.inputStore.setState({...this.stores.inputStore.state,inputValue:e.target.value}),this.stores.menuListStore.setState({...this.stores.menuListStore.state,focus:{section:0,indexLocal:0,indexGlobal:0}})}})}),a]})}}):void 0}acceptTextInputValue(){const{onChange:e,currentGroups:t,groupBy:r,groupFormat:s}=this.props,{inputStore:o}=this.stores,a=o.state.inputValue.trim().replace(/,/g,"");let i;var u,d,p,c,h,g;("select"===r.type||"multi_select"===r.type?i={type:r.type,value:a}:(0,n.aB)(r)&&(i={type:r.type,value:{type:"exact",value:a}}),i)?a?s&&l.Xy(i,s.value)?null===(u=(d=this.props).onClose)||void 0===u||u.call(d):t.some((e=>i&&(0,n.we)(i,e.value)))?m.showErrorMessage((0,L.jsx)(W,{})):e({newGroupValue:i}):null===(p=(c=this.props).onClose)||void 0===p||p.call(c):null===(h=(g=this.props).onClose)||void 0===h||h.call(g)}}E.displayName="CollectionEditGroupMenu",E.contextTypes={...s.w,...y.xm};const N=(0,g.injectIntl)(E);function W(){return(0,L.jsx)(g.FormattedMessage,{defaultMessage:"Group already exists.",id:"database.groupExistsAlreadyError.message"})}},26055:(e,t,r)=>{r.d(t,{Z:()=>U});r(67294);var s=r(83355),o=r(66897),n=r(15145),a=r(14714),i=r(99036),l=r(80951),u=r(84619),d=r(7057),p=r(53877),c=r(42875),h=r(89767),g=r(32056),m=r(96367),y=r(97880),f=r(82990),x=r(68939),v=r(5149),S=r(16732),b=r(26991),M=r(92996),j=r(29376);var C=r(78316),Z=r(84210),w=r(33929),I=r(80444),R=r(61766),V=r(26136),F=r(68500),G=r(97180),P=r(64921),k=r(31945),T=r(60458),_=r(84076),B=r(31278),L=r(76798),E=r(26388),N=r(92864),W=r(10009),D=r(22084),A=r(85893);class O extends s.Z{constructor(){super(...arguments),this.storeTypes={buttonPopupStore:R.Z},this.renderEditPopup=()=>{const{schema:e,currentGroups:t,groupBy:r,groupFormat:s}=this.props,o=this.groupParentStore.state;if(o)return(0,A.jsx)(F.Z,{groupFormat:s,groupBy:r,currentGroups:t,schema:e,onChange:e=>{var t,r;this.stores.buttonPopupStore.reset(),null===(t=(r=this.props).onChange)||void 0===t||t.call(r,e)},onClose:()=>{var e,t;this.stores.buttonPopupStore.reset(),null===(e=(t=this.props).onClose)||void 0===e||e.call(t)},parentStore:o})},this.groupParentStore=this.createComputedStore((()=>{const{collectionContextStore:e,groupFormat:t}=this.props,r=e.groupsStore.getGroupState(t);return null==r?void 0:r.groupUiParentStore})),this.getRelatedCollectionAppConfigUri=this.createComputedStore((()=>{const{schema:e,groupFormat:t}=this.props,r=this.groupParentStore.state,s=e[t.property];if(s&&(0,i.p_)(s)&&r)return(0,j.ke)(s,r)}))}renderGroupType(e,t){return"select"===e.type||"multi_select"===e.type?this.renderSelectValue():"status"===e.type?(0,A.jsx)(H,{groupFormat:this.props.groupFormat,schema:this.props.schema}):(0,a.pd)(e.type)?this.renderPersonValue(e):"relation"===e.type?this.renderRelationValue(e):"location"===e.type?this.renderLocationValue(e):(0,a.A1)(e.type)?(0,A.jsx)($,{style:this.props.style,groupValue:e}):(0,a.HB)(e.type)?this.renderTextValue(e):"number"===e.type?(0,A.jsx)(J,{style:this.props.style,groupValue:e,propertySchema:"number"===t.type?t:void 0}):"checkbox"===e.type?(0,A.jsx)(X,{style:this.props.style,groupValue:e}):void(0,y.t1)(e.type)}renderComponent(){const{groupFormat:e,schema:t}=this.props,r=e.value,s=void 0===r.value,o=t[e.property];if(o){if(s)return this.renderEmptyGroupLabel();if("formula"===r.type){if("formula"!==r.type)return;const e=r.value;if(!e)return;return this.renderGroupType(e,o)}return this.renderGroupType(r,o)}}renderEmptyGroupLabel(){const{groupFormat:e,schema:t,isHiddenGroup:r,collectionContextStore:s}=this.props,o=t[e.property],n=s.collectionStore(),a=this.groupParentStore.state;if(!o)return;const{name:l}=o;let u=!1;return null!=n&&n.isDefined()&&(0,i.p_)(o)&&a&&(u=function(e){const{collectionStore:t,property:r,propertySchema:s,parentStore:o}=e;let n=!1;if(null!=t&&t.isDefined()){const e=t.getPropertyMapping();n=(null==e?void 0:e[M.Es.TaskToSprintRelation])===r}return(0,j.ke)(s,o)===M.p$||n}({collectionStore:n,property:e.property,propertySchema:o,parentStore:a})),u?(0,A.jsx)(Y,{style:this.props.style,uncategorizedIconStyle:this.props.uncategorizedIconStyle,isHiddenGroup:r,formattedLabelMessage:(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Backlog (No {name})",values:{name:l},id:"database.sprintDatabaseView.uncategorizedGroupLabel"})}):(0,A.jsx)(Y,{style:this.props.style,uncategorizedIconStyle:this.props.uncategorizedIconStyle,isHiddenGroup:r,formattedLabelMessage:(0,A.jsx)(x.FormattedMessage,{defaultMessage:"No {name}",values:{name:l},id:"database.boardView.uncategorizedColumnTitle"})})}renderSelectValue(){var e;const{groupFormat:t,schema:r}=this.props,s=r[t.property];if(!s||!i.cu(s))return;const o=t.value;if(null===(e=s.options)||void 0===e||!e.length||void 0===o.value||o.type!==s.type)return;const n=(0,l.i7)(s.options,o.value);return n?(0,A.jsx)(k.ZP,{render:this.renderEditPopup,disabled:this.props.disabled,buttonPopupStore:this.stores.buttonPopupStore,popupType:this.environment.device.isMobile?k.Z4.SlideUp:k.Z4.Popup,originGap:4,renderOrigin:e=>(0,A.jsx)(P.Z,{style:{...ee,...this.props.style},disabled:this.props.disabled,...e,children:(0,A.jsx)(D.a,{format:u.lo.Medium,isSingle:!0,value:n.value,color:n.color,showRemoveButton:!1})})}):void 0}renderPersonValue(e){if(!(0,a.q6)(e))return;const{value:t}=e;if(!t)return;const r=this.groupParentStore.state;if(!r)return;const s=(0,o.Hl)({pointer:t,getRecordValue:r.getRecordValue});return s.asActor?(0,A.jsx)(k.ZP,{render:this.renderEditPopup,disabled:this.props.disabled,buttonPopupStore:this.stores.buttonPopupStore,popupType:this.environment.device.isMobile?k.Z4.SlideUp:k.Z4.Popup,originGap:4,renderOrigin:e=>(0,A.jsx)(P.Z,{style:{...ee,...this.props.style},disabled:this.props.disabled,...e,children:(0,A.jsx)(N.ZP,{format:N.ZP.Format.Medium,actor:s,showRemoveButton:!1,isSingle:!0,disableAvatarTooltip:this.props.isHiddenGroup,shouldShrink:!0})})}):void 0}renderLocationValue(e){const t=this.groupParentStore.state;if("location"!==e.type)return;if(!e.value)return;if(!t)return;const r=V.NW.createChildStore(t,e.value);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(B.Z,{disabled:!0,icon:r.getIcon(),size:20,isEmptyPage:!1,style:{marginTop:2,marginRight:6}}),(0,A.jsx)(L.Z,{store:r,underline:!0,style:{fontWeight:f.Z.fontWeight.medium}})]})}renderRelationValue(e){const{schema:t,groupFormat:r,collectionContextStore:s}=this.props,o=this.groupParentStore.state;if(!o)return;if("relation"!==e.type)return;const l=t[r.property];if(!l||"relation"!==l.type)return;const u=i.j0(l);if(!u)return;const d=V.NW.createChildStore(o,u);if(d.isDefined()&&e.value){if((0,a.t2)(e.value)){var p;const t=this.getRelatedCollectionAppConfigUri.state;if(!t)return;let r;const a=e.value.value.variable;"current"===a?r=w.default.formatMessage(S.sY.tasksCurrentSprintV2ViewNamePrefix):"next"===a?r=w.default.formatMessage(S.sY.tasksNextSprintV2ViewNamePrefix):"last"===a?r=w.default.formatMessage(S.sY.tasksLastSprintV2ViewNamePrefix):(0,y.t1)(a);const i=null===(p=m.qB[t])||void 0===p?void 0:p[a];if(null!=d&&d.isDefined()){const e=(0,b.As)(s,a,u,d);if(!e)return(0,A.jsx)("div",{style:{fontWeight:f.Z.fontWeight.medium},children:(0,A.jsx)(x.FormattedMessage,{...null==i?void 0:i.messageDescriptor})});const{mainEditorCurrentBlockStore:t}=I.default.state,l=C.mb({store:e,mainEditorCurrentBlockStore:t,collectionContextStore:s})??(0,Z.ZP)({store:e,pageVisitSource:n.tY.LinkInPage});if(e)return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:{fontWeight:f.Z.fontWeight.medium,marginBottom:.25},children:[r,":"]}),(0,A.jsx)(_.Z,{style:{...this.props.style,marginLeft:1},innerStyle:{...ee},href:l,onClick:()=>{v.E3({collectionSettingsStore:s.settingsStore})},children:(0,A.jsx)(W.Z,{format:N.ZP.Format.Medium,blockId:e.id,isSingle:!0,shouldShrink:!0,parentStore:o})})]})}return(0,A.jsx)("div",{style:{fontWeight:f.Z.fontWeight.medium,marginBottom:.25},children:(0,A.jsx)(x.FormattedMessage,{...null==i?void 0:i.messageDescriptor})})}if((0,a.RA)(e.value)){const t=V.G.createChildStore(o,e.value),{mainEditorCurrentBlockStore:r}=I.default.state,a=C.mb({store:t,mainEditorCurrentBlockStore:r,collectionContextStore:s})??(0,Z.ZP)({store:t,pageVisitSource:n.tY.LinkInPage});return(0,A.jsx)(_.Z,{style:this.props.style,innerStyle:{...ee},href:a,onClick:()=>{v.E3({collectionSettingsStore:s.settingsStore})},children:(0,A.jsx)(W.Z,{format:N.ZP.Format.Medium,blockId:e.value.id,isSingle:!0,shouldShrink:!0,parentStore:o})})}}}renderTextValue(e){if((0,a.R7)(e)&&void 0!==e.value){const t=(0,A.jsx)(q,{value:e.value});return"exact"===e.value.type?(0,A.jsx)(k.ZP,{render:this.renderEditPopup,disabled:this.props.disabled,buttonPopupStore:this.stores.buttonPopupStore,popupType:this.environment.device.isMobile?k.Z4.SlideUp:k.Z4.Popup,originGap:4,renderOrigin:e=>(0,A.jsx)(P.Z,{style:{...O.selectStyle,...f.Z.textOverflowStyle,...this.props.style},disabled:this.props.disabled,...e,children:t})}):(0,A.jsx)("div",{style:O.selectStyle,children:t})}}}O.displayName="CollectionGroupValue",O.selectStyle={overflow:"hidden",padding:3,borderRadius:4,fontWeight:f.Z.fontWeight.medium};const U=(0,x.injectIntl)(O);function Y(e){const{isHiddenGroup:t}=e;return t?(0,A.jsx)(z,{...e,tooltipEvents:void 0}):(0,A.jsx)(E.Z,{renderTooltip:()=>(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Any items with an empty <b>{name}</b> property will go here. This group cannot be removed.",values:{name:null,b:e=>(0,A.jsx)("span",{style:{fontWeight:f.Z.fontWeight.semibold},children:e})},id:"database.boardView.uncategorizedColumnTooltip"}),style:{width:240},textWrap:!0,render:t=>(0,A.jsx)(z,{...e,tooltipEvents:t})})}function z(e){const t={display:"flex",alignItems:"center",fontSize:14,lineHeight:1.2,paddingLeft:2,paddingRight:4,whiteSpace:"nowrap",overflow:"hidden",fontWeight:f.Z.fontWeight.medium},{style:r,uncategorizedIconStyle:s,tooltipEvents:o,formattedLabelMessage:n}=e;return(0,A.jsxs)("div",{style:{...t,paddingLeft:0,...r},...o,children:[(0,h.R)({width:14,marginLeft:6,marginRight:6,...s}),(0,A.jsx)("span",{style:{...f.Z.textOverflowStyle},children:n})]})}function q(e){let{value:t}=e;return"other"===t.type?(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Other",id:"database.collectionGroupValue.textGroup.other"}):"alphabet_prefix"===t.type||"exact"===t.type?(0,A.jsx)(A.Fragment,{children:t.value}):void(0,y.t1)(t)}function H(e){let{groupFormat:t,schema:r}=e;const s=r[t.property];if(!s||"status"!==s.type)return null;const o=t.value;if(o.type!==s.type)return null;const{value:n}=o;if(!n)return null;const a=s.options??[],i=s.groups??[];if("by_group"===n.type){const e=i.find((e=>e.name===n.group));return e?(0,A.jsx)(G.r_,{group:e,style:{fontWeight:500},showIcon:!0,showColor:!0}):null}if("by_option"===n.type){const e=(0,l.i7)(a,n.option),t=e&&i.find((t=>{var r;return null===(r=t.optionIds)||void 0===r?void 0:r.includes(e.id)}));return e?(0,A.jsx)("span",{style:{fontWeight:500,lineHeight:"normal",overflow:"hidden"},children:(0,A.jsx)(D.F,{format:u.lo.Medium,isSingle:!0,value:e.value,color:e.color,showRemoveButton:!1,groupColor:null==t?void 0:t.color})}):null}(0,y.t1)(n)}function K(e){let{value:t}=e;window.__c={n:"DateGroupValue"};const r=(0,x.useIntl)();if("today"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Today",id:"database.collectionGroupValue.dateGroup.today"});if("yesterday"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Yesterday",id:"database.collectionGroupValue.dateGroup.yesterday"});if("last_7_days"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Last 7 days",id:"database.collectionGroupValue.dateGroup.last7Days"});if("last_30_days"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Last 30 days",id:"database.collectionGroupValue.dateGroup.last_30Days"});if("tomorrow"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Tomorrow",id:"database.collectionGroupValue.dateGroup.tomorrow"});if("next_7_days"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Next 7 days",id:"database.collectionGroupValue.dateGroup.next7Days"});if("next_30_days"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Next 30 days",id:"database.collectionGroupValue.dateGroup.next30Days"});if("day"===t.type){const e=(0,p.NK)(t.range,(0,c.r)(),r.locale);return(0,A.jsx)(A.Fragment,{children:(0,d.ZW)(e.start,"medium")})}if("week"===t.type){const e=(0,p.NK)(t.range,(0,c.r)(),r.locale),s=(0,d.ZW)(e.start,"month_short"),o=(0,d.ZW)(e.start,"day"),n=e.start.year,a=(0,d.ZW)(e.end,"month_short"),i=(0,d.ZW)(e.end,"day"),l=e.end.year;return n!==l?(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Week of {startMonth} {startDay} {startYear} - {endMonth} {endDay} {endYear}",id:"database.collectionGroupValue.dateGroup.week.differingStartAndEndYear",values:{startMonth:s,startDay:o,endMonth:a,endDay:i,startYear:n,endYear:l}}):s!==a?(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Week of {startMonth} {startDay} - {endMonth} {endDay} {startYear}",id:"database.collectionGroupValue.dateGroup.week.differingStartAndEndMonth",values:{startMonth:s,startDay:o,endMonth:a,endDay:i,startYear:n}}):(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Week of {startMonth} {startDay}-{endDay} {startYear}",id:"database.collectionGroupValue.dateGroup.week.sameStartAndEndMonth",values:{startMonth:s,startDay:o,endDay:i,startYear:n}})}if("month"===t.type){const e=(0,p.NK)(t.range,(0,c.r)(),r.locale);return(0,A.jsx)(A.Fragment,{children:(0,d.ZW)(e.start,"month_year_short")})}if("year"===t.type){const e=(0,p.NK)(t.range,(0,c.r)(),r.locale);return(0,A.jsx)(A.Fragment,{children:e.start.year.toString()})}(0,y.t1)(t)}function Q(e){let{value:t,format:r}=e;window.__c={n:"NumberGroupValue"};const s=(0,x.useIntl)();if("out_of_range"===t.type)return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"Out of range",id:"database.collectionGroupValue.numberGroup.outOfRange"});if("range"===t.type){const e=g.uf(t.start,r,s),o=g.uf(t.end,r,s);return(0,A.jsx)(x.FormattedMessage,{defaultMessage:"{start} to {end}",id:"database.collectionGroupValue.numberGroup.range",values:{start:e,end:o}})}(0,y.t1)(t)}function X(e){let{groupValue:t,style:r}=e;if("checkbox"!==t.type)return null;return(0,A.jsx)("div",{style:{padding:3,paddingRight:6,...r},children:(0,A.jsx)(T.Z,{checked:t.value,size:14,disabled:!0})})}function $(e){let{groupValue:t,style:r}=e;return(0,a.Mc)(t)&&t.value?(0,A.jsx)("div",{style:{...ee,...f.Z.textOverflowStyle,...r},children:(0,A.jsx)(K,{value:t.value})}):null}function J(e){let{groupValue:t,propertySchema:r,style:s}=e;if("number"!==t.type||!t.value)return null;const o=(null==r?void 0:r.number_format)||g.dk;return(0,A.jsx)("div",{style:{...ee,...s},children:(0,A.jsx)(Q,{value:t.value,format:o})})}const ee={overflow:"hidden",padding:3,paddingRight:6,borderRadius:4,fontWeight:f.Z.fontWeight.medium}},75498:(e,t,r)=>{r.d(t,{Z:()=>c});var s=r(83355),o=r(1302),n=r(49085),a=r(28155),i=r(72126),l=r(71644),u=r(97880),d=r(14900);class p extends s.Z{constructor(){super(...arguments),this.reducerId=this.props.id,this.instanceId=(0,l.ZP)(),this.localResultStoreChangeIsQueued=!1,this.storeTypes={resultStore:n.default.createClass(void 0)},this.handleLocalResultStoreChange=()=>{this.localResultStoreChangeIsQueued||(this.localResultStoreChangeIsQueued=!0,o.default.afterNextFlush(this.dequeueLocalResultStoreChange))},this.dequeueLocalResultStoreChange=()=>{const{resultStore:e}=this.stores;if(this.localResultStoreChangeIsQueued=!1,!this.componentIsMounted)return;const t=this.getCurrentResult();i.Xy(t,e.state)||e.setState(t)}}UNSAFE_willMount(e){const{collectionContextStore:t}=e;t.remoteResult.addListener(this.handleLocalResultStoreChange),t.localResultStore.addListener(this.handleLocalResultStoreChange),this.updateReducer(e),this.handleLocalResultStoreChange()}UNSAFE_willUpdate(e){this.updateReducer(e)}willUnmount(){super.willUnmount();const{collectionContextStore:e,groupsPointer:t}=this.props;d.$D({reducerId:this.reducerId,instanceId:this.instanceId,reducer:void 0,collectionContextStore:e,groupsPointer:t}),e.remoteResult.removeListener(this.handleLocalResultStoreChange),e.localResultStore.removeListener(this.handleLocalResultStoreChange)}renderComponent(){const{render:e}=this.props;if(e)return e(this.stores.resultStore)}updateReducer(e){const{reducer:t,collectionContextStore:r,groupsPointer:s}=e;d.$D({reducerId:this.reducerId,instanceId:this.instanceId,reducer:t,collectionContextStore:r,groupsPointer:s})}getCurrentResult(){const{collectionContextStore:e}=this.props,t=e.localResultStore.state,r=e.remoteResult.state,s=t&&"reducer"===t.type?t.reducerResults[this.reducerId]:void 0,o=r&&"reducer"===r.type?r.reducerResults[this.reducerId]:void 0;return this.getResultFromLocalAndRemote(s,o)}getResultFromLocalAndRemote(e,t){const{collectionContextStore:r,reducer:s}=this.props,o=r.reducers.state,n=r.remoteResult.state;if(r.isClientModeEnabled.state)return e;if("aggregation"===s.type||"groups"===s.type){if(null!=n&&n.reducerResults[this.reducerId])return n.reducerResults[this.reducerId];return Boolean(n&&"reducer"===n.type&&i.sE(n.reducerResults,((e,t)=>{const r=o[t];return Boolean(r&&"results"===r.reducer.type&&!r.reducer.searchQuery&&"results"===e.type&&e.hasMore&&i.Xy(s.filter,r.reducer.filter))})))?e:t}if("results"===s.type){var l;const s=r.wasCreatedThisSession.state,o=Boolean(n&&"reducer"===n.type&&n.reducerResults[this.reducerId]),i=(0,a.nx)(null===(l=r.collectionViewStore())||void 0===l?void 0:l.getCollectionSource());if((o||s)&&!i&&e&&"results"===e.type){return{...e,hasMore:t&&"results"===t.type?t.hasMore:e.hasMore}}return t}throw(0,u.t1)(s)}}p.displayName="CollectionReducerRequest";const c=p},86765:(e,t,r)=>{r.d(t,{Z:()=>p});r(67294);var s=r(480),o=r(86628),n=r(24405),a=r(68939),i=r(1018),l=r(31278),u=r(76798),d=r(85893);const p=(0,a.injectIntl)((function(e){window.__c={n:"RelationCreateItemText"};const{title:t,targetCollectionStore:r}=e,p=(0,s.Fy)(),c=(0,o.VK)((()=>r.getIcon()),[r]),h=(0,n.yK)((e=>({medium:{color:e.mediumTextColor},dbName:{display:"flex",alignItems:"center",marginLeft:4},title:{marginLeft:i.Qi*(p.isRetina?.5:1)}})),[p.isRetina]),g=t?(0,d.jsxs)("span",{children:[" ",t," "]}):(0,d.jsx)("span",{children:" "}),m=(0,d.jsxs)("div",{style:h.dbName,children:[(0,d.jsx)(l.Z,{disabled:!0,icon:c,isEmptyPage:!1,size:p.isMobile?24:20}),(0,d.jsx)(u.Z,{store:r,style:h.title})]});return(0,d.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,d.jsx)(a.FormattedMessage,{id:"database.searchRelation.createNewPageFooter",defaultMessage:"<medium>New</medium> {pageName} <medium> in</medium> {databaseNameWithIcon}",values:{medium:e=>(0,d.jsx)("span",{style:h.medium,children:e}),pageName:g,databaseNameWithIcon:m}})})}))},97680:(e,t,r)=>{r.d(t,{Z:()=>h});r(67294);var s=r(480),o=r(66897),n=r(97880),a=r(68939),i=r(98742),l=r(52275),u=r(26388),d=r(70301),p=r(45653),c=r(85893);const h=function(e){window.__c={n:"UserMenuItem"};const{actor:t,userTitle:r,useEmailAsTooltip:h,tooltip:g,tooltipPlacement:m}=e,y=(0,s.O7)(),f=(0,a.useIntl)(),x=t.asActor&&t.isUser()?t.email:void 0,v=h&&x?x:g,S=y.device.isMobile?24:20;let b;return(0,o.YU)(t)?b=(0,c.jsx)(d.Z,{botValue:null==t?void 0:t.asActor,size:S}):(0,o.$S)(t)?b=(0,c.jsx)(p.Z,{userValue:null==t?void 0:t.asActor,size:S}):(0,o.Iq)(t)?b=(0,c.jsx)(p.Z,{userValue:void 0,size:S}):(0,n.t1)(t),(0,c.jsx)(u.Z,{placement:m??u.Z.Placement.Bottom,alignment:u.Z.Alignment.Start,textWrap:!0,render:s=>(0,c.jsx)(l.Z,{...(0,i.Z)(s,e),icon:b,title:r??(0,o.$4)(f,t),className:"notranslate"}),disableTooltip:!v,renderTooltip:()=>v})}},65089:(e,t,r)=>{r.d(t,{FF:()=>a,Yy:()=>l,bZ:()=>i});r(67294);var s=r(68939),o=r(88492),n=r(85893);function a(e){let{origin:t}=e;return(0,n.jsx)(o.r,{origin:t,placementToOrigin:"bottom",style:{minWidth:240},tutorialId:"sprints-onboarding",tutorialStepId:"current-sprint-view-tooltip",header:(0,n.jsx)(s.FormattedMessage,{id:"SprintsBoardOnboardingTooltip.SprintBoardView.header",defaultMessage:"Manage the current sprint"}),content:(0,n.jsx)(s.FormattedMessage,{id:"SprintsBoardOnboardingTooltip.SprintBoardView.content",defaultMessage:"Add tasks and update task status as your team makes progress during the sprint."})})}function i(e){let{origin:t}=e;return(0,n.jsx)(o.r,{origin:t,placementToOrigin:"bottom",tutorialId:"sprints-onboarding",tutorialStepId:"sprint-task-tooltip",header:(0,n.jsx)(s.FormattedMessage,{id:"SprintsBoardOnboardingTooltip.SprintBoardItem.header",defaultMessage:"Change tasks status"}),content:(0,n.jsx)(s.FormattedMessage,{id:"SprintsBoardOnboardingTooltip.SprintBoardItem.content",defaultMessage:'Drag this task to "In progress".'})})}function l(e){let{origin:t}=e;return(0,n.jsx)(o.r,{origin:t,placementToOrigin:"bottom",style:{minWidth:240},tutorialId:"sprints-onboarding",tutorialStepId:"complete-sprint-button-tooltip",header:(0,n.jsx)(s.FormattedMessage,{id:"SprintsBoardOnboardingTooltip.CompleteSprintButton.header",defaultMessage:"Complete this sprint"}),content:(0,n.jsx)(s.FormattedMessage,{id:"SprintsBoardOnboardingTooltip.CompleteSprintButton.content",defaultMessage:"Click the button when you're done with this sprint."})})}},57145:(e,t,r)=>{r.d(t,{_:()=>n});var s=r(67294);const o=new Map;function n(e){const t=!o.get(e),r=(0,s.useRef)(t);return r.current&&o.set(e,!0),(0,s.useEffect)((()=>()=>{r.current&&o.set(e,!1)}),[e]),r.current}}}]);