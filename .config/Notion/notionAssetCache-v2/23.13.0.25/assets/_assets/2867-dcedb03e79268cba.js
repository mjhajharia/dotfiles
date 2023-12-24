"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2867],{51774:(e,t,o)=>{o.d(t,{P:()=>s});o(67294);var r=o(77907),i=o(13005),n=o(68785),l=o(85893);function s(e){return(0,l.jsx)(r.LazyCollectionSettings,{...e,renderLoading:t=>(0,l.jsx)(i.ZP,{collectionSettingsStore:e.collectionSettingsStore,collectionContextStore:e.collectionContextStore,fullHeight:e.fullHeight,hideDesktopHeader:e.hideDesktopHeader,children:t&&(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",overflow:"hidden"},children:(0,l.jsx)(n.Z,{})})})})}},80559:(e,t,o)=>{o.d(t,{Q:()=>_,Z:()=>F});o(67294);var r=o(83355),i=o(99036),n=o(80951),l=o(72126),s=o(68939),a=o(5149),d=o(14900),p=o(24677),c=o(98104),u=o(66890),h=o(68641),y=o(43224),g=o(78316),m=o(19124),x=o(98742),P=o(39500),f=o(77907),v=o(22294),S=o(85526),b=o(90199),C=o(82990),k=o(31278),j=o(76798),w=o(26388),Z=o(85893);class M extends r.Z{constructor(){super(...arguments),this.renderParentCollectionLockedTooltip=()=>{const{store:e}=this.props,t=e.getIcon(),{propertyName:o}=this.props;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{children:o}),(0,Z.jsxs)("div",{style:{display:"flex",alignItems:"start"},children:[(0,Z.jsx)("div",{style:{paddingTop:4,paddingRight:6},children:(0,b.b)({width:12,fill:this.theme.regularInvertedTextColor})}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(s.FormattedMessage,{defaultMessage:"Page properties are locked",id:"database.editProperty.databaseLocked.tooltipPart1"})}),(0,Z.jsx)("div",{style:{color:this.theme.mediumInvertedTextColor},children:(0,Z.jsx)(s.FormattedMessage,{defaultMessage:"Please go to {recordIconAndTitle} to unlock",id:"database.editProperty.databaseLocked.tooltipPart2",values:{recordIconAndTitle:(0,Z.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:C.Z.fontWeight.bold},children:[t&&(0,Z.jsx)(k.Z,{disabled:!0,icon:t,isEmptyPage:!1,size:12,style:{marginRight:4,display:"inline-block"}}),(0,Z.jsx)(j.Z,{store:e,style:{display:"inline"}})]})}})})]})]})]})}}renderComponent(){return(0,Z.jsx)(w.Z,{renderTooltip:this.renderParentCollectionLockedTooltip,disableTooltip:Boolean(this.props.disableTooltip),delayThreshold:300,render:e=>this.props.render(e),placement:w.Z.Placement.Left})}}M.displayName="CollectionLockTooltip";const I=M;var T=o(51774),A=o(23063),B=o(64921),R=o(50478),O=o(53437),H=o(97820);class _ extends r.Z{constructor(){super(...arguments),this.popupContainer=null,this.renderOrigin=e=>{const{property:t,schema:o,disabled:r,locked:i,canConfigureCollection:n}=this.props,{collectionContextStore:s}=this.context,a=o[t];if(!a)return;const d=null==s?void 0:s.collectionStore();if(!d||!s)return;const p={onClick:s.permissionScopes.state.canConfigureBlock?this.handleClick:l.yR};return g.p1(d)?(0,Z.jsx)(I,{propertyName:a.name,disableTooltip:i||!d.canEditCollection(),render:l=>(0,Z.jsx)(V,{hideIcon:Boolean(this.props.hideIcon),schema:o,property:t,disabled:r,locked:i,canConfigureCollection:n,events:(0,x.Z)(e,(0,x.Z)(p,l)),propertyNameAriaId:this.props.propertyNameAriaId}),store:d}):(0,Z.jsx)(V,{hideIcon:Boolean(this.props.hideIcon),schema:o,property:t,disabled:r,locked:i,canConfigureCollection:n,events:(0,x.Z)(p,e),propertyNameAriaId:this.props.propertyNameAriaId})},this.renderPopup=()=>{const{collectionContextStore:e}=this.context,t=null==e?void 0:e.settingsStore;if(e&&t)return(0,Z.jsx)(Z.Fragment,{children:t.state.open?(0,Z.jsx)(T.P,{context:h.HV.TopbarFilterPopup,collectionContextStore:e,collectionSettingsStore:t,hideDesktopHeader:!0}):(0,Z.jsx)(f.LazyPagePropertiesRowNameMenu,{...this.props,popupContainer:this.popupContainer})})},this.handleMouseMove=()=>{S.Z.setState({...S.Z.state,hoveredProperty:this.props.property})},this.handleMouseLeave=()=>{S.Z.setState({...S.Z.state,hoveredProperty:void 0})},this.handleDragHandleClick=e=>{const{property:t,isInPeekRenderer:o}=this.props;P.X9()||S.Z.setState({...S.Z.state,openProperty:{property:t,isInPeekRenderer:o}})},this.handleClick=()=>{c.ZH(this.environment),p.ZH(this.environment),d.wG();const{property:e,isInPeekRenderer:t}=this.props;S.Z.setState({...S.Z.state,openProperty:{property:e,isInPeekRenderer:t}})}}renderComponent(){const{property:e,schema:t,disabled:o,locked:r,canConfigureCollection:l,isInPeekRenderer:d,origin:p,hideDragHandle:c,blockStore:u}=this.props,h=t[e],{device:x}=this.environment;if(!h)return;const{collectionContextStore:P}=this.context,f=null==P?void 0:P.collectionStore();if(!f||!P)return;const b=S.Z.state.hoveredProperty===e&&!v.Z.state.isKeyboardMode&&!c,{openProperty:C}=S.Z.state;return(0,Z.jsx)(w.Z,{renderTooltip:t=>{const o=(0,i.qQ)(h)&&("text"===h.type||(0,m.KZ)())&&(0,i.q3)(h),r=(0,n.KK)(u.getModel(),f.getModel(),e);return(0,Z.jsxs)("div",{...t,style:y.F,children:[(0,Z.jsx)("div",{children:h.name}),void 0!==(null==h?void 0:h.description)&&h.description.length>0?(0,Z.jsx)("div",{style:{color:this.theme.mediumInvertedTextColor},children:h.description}):null,o&&o.auto_update_on_edit&&(0,Z.jsx)("div",{style:{color:this.theme.mediumInvertedTextColor},children:(0,Z.jsx)(s.FormattedMessage,{defaultMessage:"Auto-updated by AI",id:"database.tableHeaderCell.tooltipAiAutofillDescription"})}),r&&(0,Z.jsx)("div",{style:{color:this.theme.mediumInvertedTextColor},children:(0,Z.jsx)(s.FormattedMessage,{defaultMessage:"Auto-updated by Notion Calendar",id:"database.tableHeaderCell.tooltipNotionCalendarDescription"})})]})},delayThreshold:800,placement:w.Z.Placement.Left,disableTooltip:g.p1(f),render:t=>(0,Z.jsxs)("div",{style:L(this.environment,this.theme,this.props.style),onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,children:[!x.isMobile&&!o&&!(r||!l)&&!c&&(0,Z.jsx)(A.Z,{isVisible:!0,animationStyle:{opacity:b?1:0},enterAnimationStyle:{opacity:0},exitAnimationStyle:{opacity:0},render:()=>(0,Z.jsx)("div",{style:{width:R.C$+4,marginLeft:-(R.C$+4),...this.props.dragHandleStyle},onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,children:(0,Z.jsx)(R.ZP,{role:"cell",disallowTabbing:!0,onClick:this.handleDragHandleClick})})}),(0,Z.jsx)(O.ZP,{style:this.props.popupStyle,popupType:x.isMobile?O.kQ.SlideUp:O.kQ.Popup,originGap:1,alignmentToOrigin:O.ZP.Alignment.Start,render:this.renderPopup,open:Boolean(C&&C.property===e&&C.isInPeekRenderer===d),onDismiss:()=>{S.Z.setState({...S.Z.state,openProperty:void 0});const e=P.settingsStore;a.E3({collectionSettingsStore:e})},origin:p??this.renderOrigin(t),ref:e=>{this.popupContainer=e}})]},e)})}}function V(e){const{schema:t,property:o,disabled:r,locked:i,canConfigureCollection:n,events:l}=e,s=t[o];return s?(0,Z.jsx)(B.Z,{role:"cell",id:e.propertyNameAriaId,style:{display:"flex",alignItems:"center",height:"100%",width:"100%",borderRadius:4,padding:"0 6px"},disabled:r||i||!n,...l,children:(0,Z.jsx)(H.Z,{propertySchema:s,showIcon:!e.hideIcon,showBadge:!0,style:{fontSize:14},property:o})}):null}_.displayName="PagePropertiesRowName",_.contextTypes={...r.w,...u.xm};const F=(0,s.injectIntl)(_);function L(e,t,o){const{device:r}=e;return{display:"flex",alignItems:"center",height:34,width:r.isMobile?120:160,flex:"none",color:t.mediumTextColor,...o}}},41883:(e,t,o)=>{o.d(t,{Z:()=>B});var r=o(67294),i=o(480),n=o(72126),l=o(68939),s=o(96802),a=o(39699),d=o(79131),p=o(87167),c=o(1302),u=o(99036),h=o(51365),y=o(66890),g=o(78030),m=o(80559),x=o(86628),P=o(24405),f=o(80951),v=o(42875),S=o(47453),b=o(33929),C=o(1018),k=o(85526),j=o(97039),w=o(52275),Z=o(85893);function M(e){window.__c={n:"PagePropertiesRowValue"};const{property:t,store:o,disabled:n,canConfigureCollection:s,onTab:a,onUntab:d,schema:p,blockPropertyValueOverlayStore:c,collectionStore:u}=e,m=(0,i.O7)(),{device:M,currentUser:I}=m,T=(0,P.Fg)(),A=(0,y.Y$)(),B=p[t],R=(0,P.yK)((()=>({propertyOuter:{display:"flex",alignItems:"left",marginLeft:4,height:"100%",flex:"auto",flexDirection:"column",minWidth:0},property:{display:"flex",alignItems:"center",marginLeft:4,height:"100%",flex:"auto",minWidth:0},addPageButton:{fontSize:14,minHeight:C.wI,color:T.lightTextColor,background:void 0,boxShadow:void 0}})),[T.lightTextColor]),O=(0,r.useCallback)((()=>{k.Z.setState({...k.Z.state,hoveredProperty:e.property})}),[e.property]),H=(0,r.useCallback)((()=>{k.Z.setState({...k.Z.state,hoveredProperty:void 0})}),[]),_=(0,r.useCallback)((()=>{h.bA({environment:m,blockPropertyValueOverlayStore:c,store:o,property:t,format:g.C.Page,collectionContextStore:A})}),[m,c,o,t,A]),V=(0,x.VK)((()=>M.isMobile&&!n&&"relation"===(null==B?void 0:B.type)&&o.isDefined()&&!f.wV({block:o.getModel(),property:t,schema:p,getRecordModel:o.getRecordModel,userId:I.id,userTimeZone:(0,v.r)(),intl:b.default.getIntl()})),[I.id,M.isMobile,n,t,B,p,o]);return(0,Z.jsxs)("div",{role:"cell",style:R.propertyOuter,children:[(0,Z.jsx)("div",{style:R.property,onMouseMove:O,onMouseLeave:H,children:(0,Z.jsx)(j.Z,{store:o,property:t,locked:!s,disabled:n,format:g.C.Page,onTab:a,onUntab:d,tableWrap:!1,blockPropertyValueOverlayStore:c,onOpenProperty:_,showRelationTooltip:!0,collectionStore:u})},t),V&&(0,Z.jsx)(w.Z,{focused:!1,icon:(0,S.R)({width:14,fill:T.lightIconColor}),buttonStyle:{marginRight:0,width:"calc(100% - 4px)"},style:R.addPageButton,title:(0,Z.jsx)(l.FormattedMessage,{id:"pagePropertyRowValue.addRelationButtonMessage",defaultMessage:"Add page"}),onClick:_})]})}const I=r.memo(M);function T(e){window.__c={n:"PagePropertyRow"};const{schema:t,format:o,store:l,collectionStore:s,disabled:a,locked:d,blockPropertyValueOverlayStore:u,isInPeekRenderer:x,property:P,mergedProperties:f,dragHandleStyle:v,hideDragHandle:S,disablePropertyName:b}=e,C=(0,r.useId)(),k=(0,i.O7)(),j=(0,y.Y$)(),w=(0,p.v)(s),M=(0,r.useCallback)((()=>{const e=u.state;if(!e.isOpen)return;const o=f,r=o.findIndex((t=>t.property===e.property)),i=o.find(((e,o)=>o>r&&A(t,e.property)))||o.find(((e,o)=>A(t,e.property)));i&&c.default.afterNextFlush((()=>{h.bA({environment:k,blockPropertyValueOverlayStore:u,store:l,property:i.property,format:g.C.Page,collectionContextStore:j})})),h.xv({environment:k,blockPropertyValueOverlayStore:u})}),[u,j,k,f,t,l]),T=(0,r.useCallback)((()=>{const e=u.state;if(!e.isOpen)return;const o=f,r=o.findIndex((t=>t.property===e.property)),i=n.dF(o,((e,o)=>o<r&&A(t,e.property)))||n.dF(o,((e,o)=>A(t,e.property)));i&&c.default.afterNextFlush((()=>{h.bA({environment:k,blockPropertyValueOverlayStore:u,store:l,property:i.property,format:g.C.Page,collectionContextStore:j})})),h.xv({environment:k,blockPropertyValueOverlayStore:u})}),[u,j,k,f,t,l]);return(0,Z.jsxs)("div",{role:"row","aria-labelledby":C,style:{display:"flex",paddingBottom:4,width:"100%"},children:[(0,Z.jsx)(m.Z,{schema:t,format:o,property:P,collectionStore:s,disabled:Boolean(a||b),locked:d,canConfigureCollection:w,isInPeekRenderer:x,dragHandleStyle:v,hideDragHandle:S,propertyNameAriaId:C,blockStore:l}),(0,Z.jsx)(I,{schema:t,property:P,store:l,collectionStore:s,disabled:a||d,canConfigureCollection:w,onTab:M,onUntab:T,blockPropertyValueOverlayStore:u})]},P)}function A(e,t){const o=e[t];return Boolean(o&&!u.uk.includes(o.type))}function B(e){window.__c={n:"PageProperties"};const{disabled:t,locked:o,collectionStore:c,format:u,mergedProperties:h,showHiddenProperties:y,hideDragHandle:g}=e,m=(0,i.O7)(),x=(0,l.useIntl)(),P=h,f=(0,p.v)(c),v=(0,r.useMemo)((()=>P.filter((e=>"section"!==e.visibility&&(!!y||"hide"!==e.visibility&&!("hide_if_empty"===e.visibility&&!e.hasValue)))).map((e=>e.property))),[P,y]),S=(0,r.useCallback)((e=>{const t=u.collection_page_properties||[],o=[...n.oA(e.map((e=>t.find((t=>t.property===e))))),...t.filter((t=>!e.includes(t.property)))];a.createAndCommit({userAction:"PageProperties.handleReorder",environment:m,perform:e=>{s.FH({stores:[c],update:{collection_page_properties:o},transaction:e})}})}),[c,m,u.collection_page_properties]),b=x.formatMessage({id:"pageProperties.tableLabel",defaultMessage:"Page properties"});return t||o||!f||g?(0,Z.jsx)("div",{role:"table","aria-label":b,style:d.yA,children:v.map(((t,o)=>(0,Z.jsx)("div",{children:(0,Z.jsx)(T,{...e,property:t})},o)))}):(0,Z.jsx)(d.ZP,{role:"table","aria-label":b,direction:"vertical",keys:v,renderKey:t=>(0,Z.jsx)(T,{...e,property:t}),onDrop:S})}},12867:(e,t,o)=>{o.d(t,{Uv:()=>T,ZP:()=>A});var r=o(67294),i=o(480),n=o(86628),l=o(24405),s=o(56666),a=o(47453),d=o(68939),p=o(16956),c=o(5149),u=o(66890),h=o(68641),y=o(98742),g=o(61766),m=o(97039),x=o(78030),P=o(51774),f=o(23063),v=o(64921),S=o(31945),b=o(1743),C=o(53437),k=o(26388),j=o(80559),w=o(87167),Z=o(41883),M=o(65091),I=o(85893);const T=130;function A(e){window.__c={n:"PagePropertiesCompact"};const{store:t,collectionStore:o,blockPropertyValueOverlayStore:s,compactProperties:a,disabled:d,locked:p,format:c,isInPeekRenderer:h,hiddenProperties:y,rowLength:P}=e,v=(0,n.VK)((()=>o.getSchema()),[o]),[S,b]=(0,r.useState)(!1),C=(0,w.v)(o),k=(0,i.Fy)(),Z=(0,n.qz)(void 0,g.Z),M=(0,u.Y$)(),T=(0,l.yK)((()=>({PagePropertiesCompactRow:{display:a.length>P?"grid":"flex",justifyContent:"flex-start",gridTemplateColumns:`repeat(${P}, 1fr)`,columnGap:10,rowGap:4,marginTop:2,marginBottom:6}})),[a.length,P]),A=(0,r.useCallback)((()=>{b(!0)}),[]),R=(0,r.useCallback)((()=>{b(!1)}),[]);return(0,I.jsx)("div",{style:T.PagePropertiesCompactRow,onMouseEnter:A,onMouseLeave:R,children:a.map(((e,r)=>{const i=r===a.length-1;return(0,I.jsxs)("span",{style:{flexShrink:1,display:i?"flex":void 0},children:[(0,I.jsxs)("span",{style:{flex:1,overflow:"hidden"},children:[(0,I.jsx)(j.Z,{schema:v,format:c,hideIcon:!0,hideDragHandle:!0,property:e.property,blockStore:t,collectionStore:o,disabled:d,locked:p,canConfigureCollection:C,isInPeekRenderer:h,style:{height:24,width:"100%"}}),(0,I.jsx)(m.Z,{store:t,collectionStore:o,blockPropertyValueOverlayStore:s,property:e.property,format:x.C.CompactPage,disabled:d,locked:p,tableWrap:!1})]}),i&&(0,I.jsx)(f.Z,{isVisible:S||k.isMobile,enterAnimationStyle:{opacity:0},animationStyle:{opacity:1,marginLeft:"auto"},exitAnimationStyle:{opacity:0},render:()=>(0,I.jsx)(B,{onClose:R,hiddenProperties:y,canConfigureCollection:C,store:t,collectionStore:o,collectionContextStore:M,blockPropertyValueOverlayStore:s,disabled:d,locked:p,isInPeekRenderer:h,format:c,buttonPopupStore:Z})})]},e.property)}))})}const B=r.memo((e=>{window.__c={n:"CompactPropertyActionButton"};const{hiddenProperties:t,canConfigureCollection:o,collectionStore:u,isInPeekRenderer:g,buttonPopupStore:m,collectionContextStore:x,hideDragHandle:f,overflowButtonWrapperStyle:j,overflowButtonStyle:w}=e,T=(0,i.Fy)(),A=(0,i.O7)(),B=(0,n.VK)((()=>u.getSchema()),[u]),R=(0,l.yK)((e=>({overflowIcon:{width:16,height:16,fill:e.mediumIconColor},pagePropertiesOverflow:{width:"100%",fontSize:14,padding:f?"10px":"10px 10px 10px 28px",maxHeight:500,overflowY:"scroll"},overflowButtonWrapper:{display:"flex",alignItems:"center",paddingBottom:8,...j},overflowButton:{display:"flex",width:32,height:32,borderRadius:4,justifyContent:"center",alignItems:"center",...w}})),[f,j,w]),O=(0,r.useCallback)((()=>{p.fH({environment:A,collectionContextStore:x,collectionStore:u,isInPeekRenderer:g,onCloseMenu:()=>{m.setState({open:!1})}})}),[A,x,u,g,m]);return t.length?(0,I.jsx)(S.ZP,{onClose:e.onClose,popupWrapStyle:{width:500},buttonPopupStore:m,popupType:T.isMobile?C.kQ.SlideUp:C.kQ.Popup,render:()=>(0,I.jsx)(b.Z,{capture:!0,children:(0,I.jsxs)("div",{style:R.pagePropertiesOverflow,children:[(0,I.jsx)(Z.Z,{showHiddenProperties:!0,schema:B,mergedProperties:t,format:e.format,store:e.store,collectionStore:e.collectionStore,disabled:e.disabled,locked:e.locked,blockPropertyValueOverlayStore:e.blockPropertyValueOverlayStore,isInPeekRenderer:e.isInPeekRenderer,hideDragHandle:f}),o&&(0,I.jsx)(M.le,{collectionStore:u,isInPeekRenderer:g})]})}),renderOrigin:e=>(0,I.jsx)("div",{style:R.overflowButtonWrapper,children:(0,I.jsx)(k.Z,{renderTooltip:()=>(0,I.jsx)(d.FormattedMessage,{defaultMessage:"{num, plural, one {1 more property} other {{num} more properties}}",id:"database.pageProperties.compact.showMoreTooltip",values:{num:t.length}}),placement:k.Z.Placement.Bottom,render:t=>(0,I.jsx)(v.Z,{style:R.overflowButton,mobileFeedback:T.isMobile,...(0,y.Z)(e,t),children:(0,s.o)(R.overflowIcon)})})})}):o?(0,I.jsx)("div",{style:R.overflowButtonWrapper,children:(0,I.jsx)(k.Z,{renderTooltip:()=>(0,I.jsx)(d.FormattedMessage,{defaultMessage:"Add a property",id:"database.pageProperties.compact.addPropertyButtonTitle"}),placement:k.Z.Placement.Bottom,render:t=>(0,I.jsx)(S.ZP,{popupType:A.device.isMobile?C.kQ.SlideUp:C.kQ.Popup,onClose:e.onClose,buttonPopupStore:m,originGap:1,alignmentToOrigin:S.vR.Start,render:()=>(0,I.jsx)(P.P,{context:h.HV.TopbarFilterPopup,collectionContextStore:x,collectionSettingsStore:x.settingsStore,hideDesktopHeader:!0}),onClick:O,onDismiss:()=>{const e=x.settingsStore;c.E3({collectionSettingsStore:e})},renderOrigin:e=>(0,I.jsx)(v.Z,{style:R.overflowButton,mobileFeedback:T.isMobile,...(0,y.Z)(e,t),children:(0,a.R)(R.overflowIcon)})})})}):null}))},65091:(e,t,o)=>{o.d(t,{ZP:()=>b,le:()=>C});o(57658);var r=o(67294),i=o(480),n=o(86628),l=o(24405),s=o(72787),a=o(47453),d=o(68939),p=o(16956),c=o(5149),u=o(66890),h=o(68641),y=o(61766),g=o(85526),m=o(51774),x=o(64921),P=o(31945),f=o(53437),v=o(87167),S=o(85893);function b(e){window.__c={n:"PagePropertyActions"};const{locked:t,disabled:o,collectionStore:r,mergedProperties:i,schema:l,isCompact:s}=e,a=(0,n.VK)((()=>g.Z.state.forceShowProperties),[]),d=Z(i,l,s),p=(0,v.v)(r),c=[];return(a||0===d)&&(!t&&!o&&p)&&c.push((0,S.jsx)(C,{...e},"add-property")),d>0&&(a?c.push((0,S.jsx)(j,{mergedProperties:i,schema:l,isCompact:s},"hide-properties")):c.push((0,S.jsx)(k,{mergedProperties:i,schema:l,isCompact:s},"show-more"))),(0,S.jsx)(S.Fragment,{children:c})}function C(e){window.__c={n:"AddPropertyButton"};const{collectionStore:t,isInPeekRenderer:o}=e,l=(0,u.Y$)(),s=(0,i.O7)(),g=(0,n.qz)(void 0,y.Z),v=w(),b=(0,n.VK)((()=>l.settingsStore.state.open),[l.settingsStore]);(0,r.useEffect)((()=>{b||g.setState({...g.state,open:!1})}),[g,b]);const C=(0,r.useCallback)((()=>{p.fH({environment:s,collectionContextStore:l,collectionStore:t,isInPeekRenderer:o,onCloseMenu:()=>{g.setState({open:!1})}})}),[g,l,t,s,o]);return(0,S.jsx)("div",{style:{display:"flex"},children:(0,S.jsx)(P.ZP,{popupType:s.device.isMobile?f.kQ.SlideUp:f.kQ.Popup,buttonPopupStore:g,originGap:1,alignmentToOrigin:P.vR.Start,render:()=>(0,S.jsx)(m.P,{context:h.HV.TopbarFilterPopup,collectionContextStore:l,collectionSettingsStore:l.settingsStore,hideDesktopHeader:!0}),onClick:C,onClose:()=>{const e=l.settingsStore;c.E3({collectionSettingsStore:e})},renderOrigin:t=>(0,S.jsxs)(x.Z,{style:{...v.AddOrTogglePropertyButtonStyle,...e.style},...t,children:[(0,a.R)(v.ActionPropertyButtonIconStyle),(0,S.jsx)("div",{style:v.AddPropertyButtonTitleStyle,children:(0,S.jsx)(d.FormattedMessage,{defaultMessage:"Add a property",id:"database.pageProperties.addPropertyButtonTitle"})})]})})})}function k(e){window.__c={n:"ShowMoreButton"};const{mergedProperties:t,schema:o,isCompact:i}=e,n=w(),l=Z(t,o,i),a=(0,r.useCallback)((()=>{g.Z.setState({...g.Z.state,forceShowProperties:!0})}),[]);return(0,S.jsx)("div",{style:{display:"flex"},children:(0,S.jsxs)(x.Z,{style:{...n.AddOrTogglePropertyButtonStyle,...e.style},onClick:a,children:[(0,s.Y)(n.ActionPropertyButtonIconStyle),(0,S.jsx)("div",{style:n.AddPropertyButtonTitleStyle,children:(0,S.jsx)(d.FormattedMessage,{defaultMessage:"{num, plural, one {1 more property} other {{num} more properties}}",id:"database.pageProperties.showMorePropertyTitle",values:{num:l}})})]},"show-more")})}function j(e){window.__c={n:"HidePropertiesButton"};const{mergedProperties:t,schema:o,isCompact:i}=e,n=Z(t,o,i),l=w(e.style),a=(0,r.useCallback)((()=>{g.Z.setState({...g.Z.state,forceShowProperties:!1})}),[]);return(0,S.jsx)("div",{style:{display:"flex"},children:(0,S.jsxs)(x.Z,{style:{...l.AddOrTogglePropertyButtonStyle,...e.style},onClick:a,children:[(0,s.Y)({...l.ActionPropertyButtonIconStyle,transform:"rotate(180deg)"}),(0,S.jsx)("div",{style:l.AddPropertyButtonTitleStyle,children:(0,S.jsx)(d.FormattedMessage,{defaultMessage:"{num, plural, one {Hide 1 property} other {Hide {num} properties}}",id:"database.pageProperties.hidePropertyTitle",values:{num:n}})})]},"hide-properties")})}function w(e){const t=(0,i.O7)();return(0,l.yK)((o=>{const{device:r}=t;return{AddOrTogglePropertyButtonStyle:{display:"flex",alignItems:"center",color:o.lightTextColor,borderRadius:4,paddingLeft:6,paddingRight:6,height:34,width:r.isMobile?"100%":"auto",...e},ActionPropertyButtonIconStyle:{width:16,height:16,marginRight:9,marginTop:1,fill:o.lightIconColor},AddPropertyButtonTitleStyle:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0,lineHeight:"16px"}}}),[t,e])}function Z(e,t,o){return(0,r.useMemo)((()=>e.filter((e=>"hide"===e.visibility||"hide_if_empty"===e.visibility&&!e.hasValue)).length),[e])}},87167:(e,t,o)=>{o.d(t,{v:()=>n});var r=o(86628),i=o(78316);function n(e){return(0,r.VK)((()=>i.eD({collectionStore:e,collectionViewBlockStore:e.getParentBlockStore(),checkNavigableAncestorLocked:!1})),[e])}}}]);