"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1499],{3553:(e,t,o)=>{o.d(t,{Z:()=>be});var n=o(67294),i=o(73935),s=o(83355),r=o(18466),l=o(1302),a=o(86628),c=o(24405),d=o(8848),u=o(72126),h=o(14900),p=o(99553),m=o(52989),b=o(24677),f=o(98104),v=o(39699),g=o(84064),S=o(43250),C=o(12534),w=o(39500),k=o(16339),A=o(41662),M=o(69784),x=o(50628),y=o(27724),T=o(4827),R=o(86486),Z=o(23063),j=o(9612),I=o(51454),E=o(28020),B=o(73744),D=o(17504),_=o(77546),O=o(439),H=o(38755),P=o(95802),F=o(480),L=o(47453),N=o(68939),z=o(50906),V=o(42858),U=o(84084),G=o(28314),K=o(65598),W=o(64921),J=o(26388),q=o(65200),Y=o(85893);const X=(0,N.defineMessages)({ariaLabelApple:{id:"block.selectableAddMenu.ariaLabel.apple",defaultMessage:"Click to add below. Option-click to add a block above"},ariaLabelWindows:{id:"block.selectableAddMenu.ariaLabel.windows",defaultMessage:"Click to add below. Alt-click to add a block above"}});class $ extends s.Z{constructor(){super(...arguments),this.handleClick=()=>{const{environment:e}=this,{store:t}=this.props,o=G.lF.state.option,n=P.C.findSelectablesFromStore(t).find((e=>Boolean(e.props.onInsertRowBelow)));o?n&&n.props.onInsertRowAbove?v.createAndCommit({userAction:"SelectableAddMenu.handleClick.onInsertRowBelow",environment:e,perform:e=>{n.props.onInsertRowAbove&&n.props.onInsertRowAbove({transaction:e})}}):v.createAndCommit({environment:e,userAction:"SelectableAddMenu.handleClick.addAbove",perform:o=>{V.uE({environment:e,blocks:[t],transaction:o})}}):K.PF(t)?U.hb({environment:e,blockStore:t}):n&&n.props.onInsertRowBelow?v.createAndCommit({userAction:"SelectableAddMenu.handleClick.onInsertRowBelow",environment:e,perform:e=>{n.props.onInsertRowBelow&&n.props.onInsertRowBelow({transaction:e})}}):v.createAndCommit({environment:e,userAction:"SelectableAddMenu.handleClick.addBelow",perform:o=>{V.ZJ({environment:e,blocks:[t],transaction:o})}}),z.eT_(this.environment),R.default.reset()}}renderComponent(){const{device:e}=this.environment;if(!e.isPhone)return(0,Y.jsx)(J.Z,{placement:J.Z.Placement.Bottom,delayThreshold:300,renderTooltip:()=>(0,Y.jsx)(te,{}),render:e=>(0,Y.jsx)(W.Z,{disallowTabbing:!0,onClick:this.handleClick,style:ee(this.props.offsetTop,this.props.store,this.environment,this.theme),ariaLabel:this.props.intl.formatMessage(this.environment.device.isApple?X.ariaLabelApple:X.ariaLabelWindows),...e,children:(0,L.R)({width:16})})})}}$.displayName="SelectableAddMenu";const Q=(0,N.injectIntl)($);function ee(e,t,o,n){const i=(0,O.zt)(e,t),s=(0,O.tx)(o,26+q.Z.width,t);return{display:"flex",alignItems:"center",justifyContent:"center",fill:n.lightIconColor,position:"absolute",top:i,left:-s,width:24,height:24,borderRadius:4,pointerEvents:"auto",cursor:"-webkit-grab"}}function te(){window.__c={n:"TooltipComponent"};const e=(0,c.Fg)(),t=(0,F.O7)(),o={color:e.mediumInvertedTextColor};return(0,Y.jsxs)("div",{style:{textAlign:"center"},children:[(0,Y.jsx)(N.FormattedMessage,{defaultMessage:"Click <mediumcolor>to add below</mediumcolor>",id:"block.selectableAddMenu.tooltip.addBlockBelow",values:{mediumcolor:e=>(0,Y.jsx)("span",{style:o,children:e})}}),(0,Y.jsx)("div",{children:t.device.isApple?(0,Y.jsx)(N.FormattedMessage,{defaultMessage:"Option-click <mediumcolor>to add above</mediumcolor>",id:"block.selectableAddMenu.tooltip.addAbove",values:{mediumcolor:e=>(0,Y.jsx)("span",{style:o,children:e})}}):(0,Y.jsx)(N.FormattedMessage,{defaultMessage:"Alt-click <mediumcolor>to add a block above</mediumcolor>",id:"block.selectableAddMenu.tooltip.addAbove.windows",values:{mediumcolor:e=>(0,Y.jsx)("span",{style:o,children:e})}})})]})}var oe=o(95855),ne=o(18821),ie=o(73063);const se=function(e){window.__c={n:"SelectableCommentMenu"};const t=(0,F.O7)(),o=(0,F.Fy)(),{mediumInvertedTextColor:i}=(0,c.Fg)(),s=(0,N.useIntl)(),{store:r,shouldOffsetLeft:l}=e,d=(0,a.VK)((()=>l?(0,O.tx)(t,26+q.Z.width,r):32),[t,r,l]),u=(0,n.useCallback)((()=>{ne.yw({environment:t,blockStore:r})}),[t,r]);return o.isMobile?null:(0,Y.jsx)("div",{style:re(e.offsetTop,d),onMouseDown:C.$0,children:(0,Y.jsx)(J.Z,{placement:J.Z.Placement.Bottom,delayThreshold:300,renderTooltip:()=>(0,Y.jsx)(N.FormattedMessage,{defaultMessage:"Click <invertedcolor>to add a comment</invertedcolor>",id:"selectableCommentMenu.addCommentPrompt.tooltip",values:{invertedcolor:e=>(0,Y.jsx)("span",{style:{color:i},children:e})}}),render:e=>(0,Y.jsx)(ie.Z,{ariaLabel:s.formatMessage({id:"selectableCommentMenu.iconButton",defaultMessage:"Comment"}),disallowTabbing:!0,icon:oe.z,onClick:u,isLightIconColor:!0,...e})})})};function re(e,t){return{position:"absolute",top:e,left:-t}}class le extends s.Z{constructor(){super(...arguments),this.verticalScrollableAncestor=void 0,this.horizontalScrollableAncestor=void 0,this.isCommentMenu=!1,this.showHoverMenu=!1,this.disableHoverMenuDrag=!1,this.targetSelectableStore=this.createComputedStore((()=>{const{target:e}=this.props;return P.C.findSelectablesFromStore(e).find((e=>Boolean(e.props.shouldShowHoverMenu||e.props.shouldShowCommentMenu)))})),this.targetRectStore=this.createComputedStore((()=>{var e;return null===(e=this.targetSelectableStore.state)||void 0===e||null===(e=e.getNode())||void 0===e?void 0:e.getBoundingClientRect()})),this.handleScroll=()=>{this.targetRectStore.enqueueRecompute()}}UNSAFE_willMount(e){super.UNSAFE_willMount(e);const t=this.targetSelectableStore.state;if(!t)return;this.isCommentMenu=Boolean(t.props.shouldShowCommentMenu),this.showHoverMenu=Boolean(t.props.shouldShowHoverMenu);const o=t.getNode();o&&(this.verticalScrollableAncestor=(0,_.VW)(o),this.verticalScrollableAncestor&&(0,B.lj)(this.verticalScrollableAncestor,"scroll",this.handleScroll),this.horizontalScrollableAncestor=(0,_.xH)(o),this.horizontalScrollableAncestor&&this.horizontalScrollableAncestor!==this.verticalScrollableAncestor&&(0,B.lj)(this.horizontalScrollableAncestor,"scroll",this.handleScroll),this.handleScroll())}willUnmount(){super.willUnmount(),this.verticalScrollableAncestor&&(0,B.ZV)(this.verticalScrollableAncestor,"scroll",this.handleScroll),this.horizontalScrollableAncestor&&(0,B.ZV)(this.horizontalScrollableAncestor,"scroll",this.handleScroll)}renderComponent(){var e;const{target:t,container:o}=this.props,n=o?o.getBoundingClientRect():void 0,i=this.targetRectStore.state,s=i?i.top-(n?n.top:0):void 0,r=i?i.left-(n?n.left:0):void 0,l=(0,H.Fn)(this.environment),a="editor"===this.props.target.getRole()||"read_and_write"===this.props.target.getRole()||"edit"===(null===(e=this.pageContext)||void 0===e||null===(e=e.publicEditModeStore.state)||void 0===e?void 0:e.permission),c="external_object_instance_page"===t.getType(),d=!!this.pageContext&&(0,E.qG)(this.pageContext.pageStore.id);return(0,D.Z)((e=>{var o;return(0,Y.jsxs)("div",{style:{position:"absolute",left:r,top:s,zIndex:I.Mo},...e,children:[this.isCommentMenu&&!t.isNavigableAncestorLocked()&&(0,Y.jsx)(se,{store:t,offsetTop:(0,O.oJ)(t),shouldOffsetLeft:this.showHoverMenu||l}),this.showHoverMenu&&(0,Y.jsx)(q.Z,{store:t,offsetTop:(0,O.oJ)(t),disableDrag:this.disableHoverMenuDrag,isWorkspaceAdmin:l,hasEditorPermissions:a}),(!t.isNavigableAncestorLocked()||"collection"===(null===(o=t.getParentStore())||void 0===o?void 0:o.table))&&!this.isCommentMenu&&a&&!c&&!d&&(0,Y.jsx)(Q,{store:t,offsetTop:(0,O.oJ)(t)})]})}))}}le.displayName="SelectableHoverMenuOverlayItem";const ae=le,ce={position:"absolute",top:0,left:0};class de extends s.Z{constructor(){super(...arguments),this.container=void 0,this.targetStore=this.createComputedStore((()=>{const e=R.default.state;if(e.isOpen&&e.container===this.props.selectableContainer)return e.currentStore})),this.handleContainerMount=e=>{e&&(this.container=e)}}renderComponent(){return(0,Y.jsx)("div",{style:ce,ref:this.handleContainerMount,children:(0,Y.jsx)(j.Z,{render:()=>u.oA([this.renderCurrentTarget()])})})}renderCurrentTarget(){const e=this.targetStore.state;if(e)return(0,Y.jsx)(Z.Z,{isVisible:!0,animationStyle:{opacity:1},enterAnimationStyle:{opacity:1},exitAnimationStyle:{opacity:0},render:()=>(0,Y.jsx)(ae,{container:this.container,target:e})},e.id)}}de.displayName="SelectableHoverMenuOverlay";const ue=de;class he extends s.Z{constructor(){super(...arguments),this.observer=void 0,this.handleMouseDown=e=>{const{device:t}=this.environment;this.props.disableRectangularSelection||(t.isPhone?(0,C.ZP)({event:e,context:C.Af.EditorMouseDown,callback:()=>{b.ZH(this.environment),h.wG(),A.HM.clearSelection()}}):(0,C.ZP)({event:e,context:C.Af.EditorMouseDown,callback:()=>{1!==e.button&&(e.preventDefault(),m.AI({environment:this.environment,target:e.target,startX:e.clientX,startY:e.clientY,showSelectionRect:!0,preventSelectStores:[],allowVerticalEdgeScroll:!0,allowHorizontalEdgeScroll:!1}))}}))},this.handleClick=e=>{(function(e){return x.Z.hasBeenUpdatedSince(e.timeStamp)})(e)||this.props.store.canEdit()&&(0,C.ZP)({event:e,context:C.Af.EditorClick,callback:()=>{var t;if(null!==(t=y.default.getDefaultContainerFromTarget(e.target))&&void 0!==t&&t.isPeekRenderer()||p.E5(this.environment),!w.X9()&&!this.props.disableEditNearestBlock){const{clientX:t,clientY:o,target:n}=e;l.default.afterNextFlush((()=>{v.createAndCommit({userAction:"SelectableContainer.click",environment:this.environment,perform:e=>f.jh(this.environment,{x:t,y:o,target:n instanceof Element?n:void 0},e)})}))}}})},this.shouldRenderRectangularSelectionRectStore=this.createComputedStore((()=>Boolean(M.default.state.isActive&&M.default.state.defaultContainer===this)))}get registries(){return[k.Z]}didMount(){if(super.didMount(),this.props.isDefaultContainer){const e=this.props.isRootContainer?u.G0([this],y.default.state.defaultContainerStack||[]):u.G0(y.default.state.defaultContainerStack||[],[this]);y.default.setState({...y.default.state,defaultContainerStack:e,pivot:void 0,anchor:void 0,anchorContainer:void 0})}if(this.props.droppable){const e=this.props.isRootContainer?u.G0([this],y.default.state.droppableContainerStack||[]):u.G0(y.default.state.droppableContainerStack||[],[this]);y.default.setState({...y.default.state,droppableContainerStack:e})}b.Jy();const e=i.findDOMNode(this);e&&(this.observer=new MutationObserver(pe),this.observer.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}willUnmount(){if(super.willUnmount(),this.props.isDefaultContainer){const e=u.zu(y.default.state.defaultContainerStack||[],this);y.default.setState({...y.default.state,defaultContainerStack:e,pivot:void 0,anchor:void 0,anchorContainer:void 0})}if(this.props.droppable){const e=u.zu(y.default.state.droppableContainerStack||[],this);y.default.setState({...y.default.state,droppableContainerStack:e})}this.observer&&this.observer.disconnect()}renderComponent(){var e;const{render:t}=this.props;return(0,Y.jsx)(g.ld,{value:{selectableContainer:this,closestSelectable:null===(e=this.context.selectable)||void 0===e?void 0:e.closestSelectable},children:(0,Y.jsx)(T.Z,{open:this.shouldRenderRectangularSelectionRectStore.state,origin:t({selectableEvents:{onMouseDown:this.handleMouseDown,onClick:this.handleClick},selectableHoverMenuOverlay:(0,Y.jsx)(ue,{selectableContainer:this})}),children:(0,Y.jsx)(me,{isDefaultContainer:this.props.isDefaultContainer})})})}isPeekRenderer(){return this.props.isPeekRenderer}}he.displayName="SelectableContainer",he.contextTypes={...g.Tf,...s.w};const pe=e=>{let t=!0;if(e.length<=10){const{selectableElementRectMap:o}=r.Z.withListenerIgnored((()=>x.Z.getState()));t=e.some((e=>function(e,t){const o=t.target instanceof Element?t.target:t.target.parentElement;if(!o)return!0;const n=o.closest(`.${S.euV}`);if(!n)return!0;const i=e.get(n);if(!i)return!0;const s=n.getBoundingClientRect();return!(i.x===s.x&&i.y===s.y&&i.width===s.width&&i.height===s.height)}(o,e)))}t&&b.Ch()};function me(e){window.__c={n:"RectangularSelectionRect"};const{isDefaultContainer:t}=e,{currentRect:o,isActive:n,showSelectionRect:i}=(0,a.VK)((()=>M.default.state.isActive?M.default.state:{currentRect:void 0,isActive:!1,showSelectionRect:!1}),[]),s=(0,c.yK)((()=>({selection:{position:"absolute",pointerEvents:"none",backgroundColor:d.ZP.blueWithAlpha(.14),border:"1px solid transparent",left:null==o?void 0:o.left,top:null==o?void 0:o.top,width:o?o.right-o.left:0,height:o?o.bottom-o.top:0}})),[o]);return n&&i&&t?(0,Y.jsx)("div",{style:s.selection}):null}const be=he},65200:(e,t,o)=>{o.d(t,{Z:()=>w});var n=o(67294),i=o(480),s=o(86628),r=o(24405),l=o(50906),a=o(24677),c=o(439),d=o(77907),u=o(69454),h=o(86486),p=o(31945),m=o(50478),b=o(53437),f=o(79954),v=o(85893);const g=m.C$,S=m.GN;function C(e){window.__c={n:"SelectableHoverMenu"};const{store:t,disableDrag:o,hasEditorPermissions:C,isWorkspaceAdmin:w,offsetTop:k}=e,A=!o,M=(0,i.O7)(),x=(0,i.MO)(),y=(0,n.useRef)(null),T=g,R=S,Z=(0,s.VK)((()=>(0,c.zt)(k,t)),[k,t]),j=(0,s.VK)((()=>(0,c.tx)(M,T+2,t)),[M,T,t]),I=(0,r.yK)((()=>({div:{position:"absolute",top:Z,left:-j,width:T,height:R,pointerEvents:"auto",cursor:A?"-webkit-grab":void 0},popup:{width:265,overflow:"hidden"}})),[A,j,Z,R,T]),[E,B]=(0,n.useState)(""),D=(0,s.VK)((()=>{const e=h.default.state;return e.isOpen&&e.menuIsOpen&&e.currentStore===t}),[t]);(0,n.useEffect)((()=>()=>{D&&h.default.reset()}),[]);const _=(0,n.useCallback)((()=>{const e=h.default.state,o=u.Z.state;if(e.isOpen){B(""),x&&o.phase===u.i.shown?u.Z.onHide((()=>h.default.setState({...e,menuIsOpen:!0}))):h.default.setState({...e,menuIsOpen:!0}),a.Ys({environment:M,store:t});const n=t.getType();n&&l.YMV(M,{blockType:n})}}),[M,x,t]),O=(0,n.useCallback)((()=>h.default.reset()),[]),H=(0,s.VK)((()=>t.isNavigableAncestorLocked()),[t]);return x?null:(0,v.jsx)("div",{style:I.div,ref:y,children:(0,v.jsx)(b.ZP,{popupType:x?p.Z4.SlideUp:p.Z4.Popup,open:D,placementToOrigin:p.pO.Left,alignmentToOrigin:p.vR.Center,onDismiss:O,originGap:5,forceInitialInbound:!0,style:I.popup,render:()=>(0,v.jsx)(d.LazySelectableHoverMenuPopup,{hasEditorPermissions:C,isWorkspaceAdmin:w,store:t,onDismiss:O,containerRef:y,query:E,setQuery:B}),origin:(0,v.jsx)(f.Z,{store:t,isHoverMenu:!0,canDrag:A,canSelect:!1,analyticsName:"selection_menu",disableForceTouch:!0,disableHorizontalDragEdgeScroll:!0,children:(0,v.jsx)(m.ZP,{width:T,height:R,disallowTabbing:!0,onClick:_,disableDrag:!A||!C||H})}),trapFocus:D})})}C.width=g,C.height=S;const w=C},98321:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(67294);const i=function(e,t){if(e.ref&&t.ref){const o=t.ref;t.ref=t=>{e.ref(t),o(t)}}return n.cloneElement(e,t)}},439:(e,t,o)=>{o.d(t,{oJ:()=>p,tx:()=>u,zt:()=>h});var n=o(49271),i=o(41432),s=o(92650),r=o(16472),l=o(41662),a=o(26136),c=o(30912),d=o(98165);function u(e,t,o){if(o.isQuoteBlockChild())return t+r.nr+r.NE+n.ZD.paddingLeft;if(o.isTransclusionType()||o.isInsideTransclusion()||"ai_block"===o.getType()||o.isInsideAiBlock())return t+4;if(o.getType()===i.Ti.table){const n=l.g$.getNumberOfUnresolvedComments({simpleTableStore:o,environment:e,includeInline:!(0,s.fg)(e,o)}),i=o.isImmediateColumnChild();return 0!==n||i?t+8:t}const u=d.qA(o).filter((e=>e instanceof a.zq&&e.isType("duplicate_blocks"))).length;return u>0?t+c.pZ*u:t}function h(e,t){return t.isTransclusionType()?e+5:"ai_block"===t.getType()?t.hasContent()?e+9:e+15:t.getType()===i.Ti.button?e+3:e}function p(e){const t=e.getType(),o=e.getNavigableAncestorFormat(),n=Boolean(o.page_small_text);return t===i.Ti.divider?-6:t===i.Ti.header?n?7:10:t===i.Ti.subHeader?n?4:6:t===i.Ti.collectionView?8:t===i.Ti.table?14:3}}}]);