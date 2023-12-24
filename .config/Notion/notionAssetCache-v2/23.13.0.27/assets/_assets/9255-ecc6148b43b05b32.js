"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9255],{41363:(e,a,t)=>{t.d(a,{BC:()=>We,Bj:()=>$e,Dw:()=>Ve,GZ:()=>Le,IK:()=>De,MR:()=>Qe,OH:()=>aa,Qi:()=>La,TH:()=>Re,YZ:()=>Ge,_p:()=>oa,cO:()=>Ue,fK:()=>Ye,mS:()=>Ke,q6:()=>na,yN:()=>_e});t(30541),t(67294);var n=t(41432),o=t(17397),i=t(6695),s=t(9999),l=t(82477),r=t(70622),c=t(53376),d=t(40745),u=t(75553),g=t(64330),m=t(94491),f=t(82356),M=t(27714),p=t(90199),y=t(62208),v=t(21158),k=t(54855),N=t(84199),b=t(35582),w=t(70663),S=t(18442),P=t(91427),C=t(60291),A=t(82825),h=t(37888),I=t(15157),j=t(72126),F=t(89101),x=t(68939),L=t(54642),D=t(51365),T=t(14871),V=t(42274),_=t(54281),R=t(14900),O=t(31781),Z=t(96802),q=t(96313),J=t(65770),B=t(27153),z=t(72711),E=t(9953),H=t(42858),K=t(24677),U=t(39699),G=t(68422),$=t(61202),W=t(78030),Y=t(93405),Q=t(52275),X=t(72495),ee=t(69872),ae=t(72187),te=t(19037),ne=t(28020),oe=t(52821),ie=t(78316),se=t(33929),le=t(77907),re=t(74948),ce=t(41662),de=t(83960),ue=t(80444),ge=t(21797),me=t(69815),fe=t(8416),Me=t(82763),pe=t(35067),ye=t(29768),ve=t(62967),ke=t(89666),Ne=t(42784),be=t(71247),we=t(34658),Se=t(6471),Pe=t(41670),Ce=t(11732),Ae=t(85893);const he=(0,x.defineMessages)({fixLegacyTransclusion:{id:"action.fixLegacyTransclusion.name",defaultMessage:"Fix legacy transclusion"},newPageInName:{id:"action.newPageIn.name",defaultMessage:"Turn into page in"},insertBelowName:{id:"action.insertBelow.name",defaultMessage:"Insert below"},copyPublicApiObject:{id:"action.copyPublicApiObject",defaultMessage:"Copy API object (Dev)"},copyDirectLinkName:{id:"action.copyDirectLink.name",defaultMessage:"Copy link to original"},openasPageName:{id:"action.openasPage.name",defaultMessage:"Open as page"},copyLinksName:{id:"action.copyLinks.name",defaultMessage:"Copy links to all"},viewOriginalName:{id:"action.viewOriginal.name",defaultMessage:"View original"},downloadName:{id:"action.download.name",defaultMessage:"Download"},replaceName:{id:"action.replace.name",defaultMessage:"Replace"},turnSimpleTableIntoCollection:{id:"action.turnIntoCollection.title",defaultMessage:"Turn into database"},renameName:{id:"action.rename.name",defaultMessage:"Rename"},editPropertyName:{id:"action.editProperty.name",defaultMessage:"Edit property"},clearDateName:{id:"action.clearDate.name",defaultMessage:"Clear date"},turnintoInlineName:{id:"action.turnintoInline.name",defaultMessage:"Turn into inline"},turnintoPageName:{id:"action.turnintoPage.name",defaultMessage:"Turn into page"},turnCollectionIntoSimpleTable:{id:"action.turnintoSimpleTable.name",defaultMessage:"Turn into simple table"},mergewithCSVName:{id:"action.mergewithCSV.name",defaultMessage:"Merge with CSV"},mergewithCSVCaption:{id:"action.mergewithCSV.caption",defaultMessage:"Header row required"},lockDatabaseName:{id:"action.lockDatabaseName.name",defaultMessage:"Lock database"},unlockDatabaseName:{id:"action.unlockDatabaseName.name",defaultMessage:"Unlock database"},lockDatabaseViewsName:{id:"action.lockDatabaseViewsName.name",defaultMessage:"Lock views"},unlockDatabaseViewsName:{id:"action.unlockDatabaseViews.name",defaultMessage:"Unlock views"},lockWikiName:{id:"action.lockWikiName.name",defaultMessage:"Lock wiki"},reloadPreview:{id:"action.reloadPreview",defaultMessage:"Reload preview"},unlockWikiName:{id:"action.unlockWikiName.name",defaultMessage:"Unlock wiki"},turnPreviewIntoMention:{id:"action.turnPreviewIntoMention",defaultMessage:"Turn into mention"},reloadSyncedPage:{id:"action.reloadSyncedPage",defaultMessage:"Sync page"},addtoFavoritesName:{id:"action.addtoFavorites.name",defaultMessage:"Add to Favorites"},configureName:{id:"action.configure.name",defaultMessage:"Configure"},editIconName:{id:"action.editIcon.name",defaultMessage:"Icons"},wrapCodeKeywords:{id:"action.wrapCode.fuzzySearchKeywords",defaultMessage:"Wrap Code"},wrapCodeLabel:{id:"action.wrapCode.label",defaultMessage:"Wrap code"},languageModeName:{id:"action.languageMode.name",defaultMessage:"Set language"},formatCodeLabel:{id:"action.formatCode.label",defaultMessage:"Format code"},workAtNotion:{id:"action.workAtNotion.name",defaultMessage:"Work at Notion"},quoteSizeSection:{id:"action.section.quoteSize",defaultMessage:"Quote size"},quoteSizeDefault:{id:"action.quoteSize.default",defaultMessage:"Default"},quoteSize:{id:"action.quoteSize.name",defaultMessage:"Quote size"},quoteSizeLarge:{id:"action.quoteSize.large",defaultMessage:"Large"},listFormatDefault:{id:"action.listFormat.letters.default",defaultMessage:"Default"},listFormatSection:{id:"action.listFormat.sectionName",defaultMessage:"List format"},listFormat:{id:"action.listFormat.name",defaultMessage:"List format"},listFormatNumbers:{id:"action.listFormat.numbers.name",defaultMessage:"Numbers"},listFormatLetters:{id:"action.listFormat.letters.name",defaultMessage:"Letters"},listFormatRoman:{id:"action.listFormat.letters.roman",defaultMessage:"Roman numerals"},listFormatDisc:{id:"action.listFormat.disc.name",defaultMessage:"Disc"},listFormatCircle:{id:"action.listFormat.circle.name",defaultMessage:"Circle"},listFormatSquare:{id:"action.listFormat.square.name",defaultMessage:"Square"},alignmentName:{id:"action.alignment.name",defaultMessage:"Align"}}),Ie=(0,ve.cN)({key:"fixLegacyTransclusion",displayName:he.fixLegacyTransclusion,analyticsName:he.fixLegacyTransclusion.defaultMessage,svg:C.b,validators:[te.sz,te.U7,...ye.Ay.validators||[]],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;J.YJ({environment:t,store:a[0]})}}),je=(0,ve.MV)({key:"turn into section",displayName:ve.RE.turnIntoName,analyticsName:ve.RE.turnIntoName.defaultMessage,svg:y.z,validators:[te.J5,te.ff(te.fI),te.wF,te.XQ,te.IZ],subActions:()=>[{key:0,title:void 0,render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:Ce.g.actions}]}),Fe=(0,ve.cN)({key:"new page in section",displayName:he.newPageInName,analyticsName:he.newPageInName.defaultMessage,closeParentMenu:!0,svg:k.a,hideFromSlashActionMenu:!0,validators:[te.J5,te.ff(te.fI),te.ff(te.P9("page")),te.XQ,te.wF],render:(e,a,t)=>{const{onFocus:n,onAccept:o}=t;return(0,Ae.jsx)(le.LazyNewPageInMenu,{...e,title:he.newPageInName,blocksToTransform:a.blocks,onFocus:n,onAccept:o?()=>o(Fe,a,void 0):void 0})},action:()=>{}}),xe=(0,ve.cN)({key:"insert below",displayName:he.insertBelowName,analyticsName:he.insertBelowName.defaultMessage,svg:d.M,validators:[te.J5,te.Eo,te.tq],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;U.createAndCommit({userAction:"actionRegistry.insertBelow",environment:t,perform:e=>{H.ZJ({environment:t,blocks:a,transaction:e})}})}}),Le=(0,ve.cN)({key:"copy public API object",displayName:he.copyPublicApiObject,analyticsName:he.copyPublicApiObject.defaultMessage,validators:[te.U7,te.QL("public_api_dev_mode")],closeParentMenu:!1,svg:u.U,action:async e=>{let{environment:a,blocks:t}=e;const n=await L.getPublicApiObject(a,{id:t[0].id});let o;o="success"===n.type?JSON.stringify(n.data,void 0,2):JSON.stringify(n.error,void 0,2),T.RD({environment:a,stringValue:o,copiedMessage:T.tq.copiedApiObjectToClipboard})}}),De=(0,ve.cN)({key:"copy direct link to content housed within block",displayName:he.copyDirectLinkName,analyticsName:he.copyDirectLinkName.defaultMessage,svg:M.N,validators:[te.jl,te.U7,te.ff(te.KJ),te.ff(te.Fx),te.or([te.Cj,te.$H,te.P9(n.Ti.bookmark),te.P9(n.Ti.externalObjectInstance),te.P9(n.Ti.externalObjectInstancePage),te.K5,te.p5])],closeParentMenu:!0,action:(e,a)=>{T.IK({...e,event:a})}}),Te=(0,ve.cN)({key:"open collection as page",displayName:he.openasPageName,analyticsName:he.openasPageName.defaultMessage,svg:v.h,validators:[te.vj,te.ff(te.O4),te.ff(te.LH)],closeParentMenu:!0,action:e=>H.YP(e)}),Ve=(0,ve.cN)({key:"copy links to blocks",displayName:he.copyLinksName,analyticsName:he.copyLinksName.defaultMessage,svg:M.N,validators:[te.jl,te.EC],closeParentMenu:!0,action:(e,a)=>{T.Dw({...e,event:a})}}),_e=(0,ve.cN)({key:"view original",displayName:he.viewOriginalName,analyticsName:he.viewOriginalName.defaultMessage,svg:s.J,validators:[te.U7,te.or([te.Cj,te.xD([te.$H,te.ff(te.KJ)])])],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;O.qL(t,{store:a[0],from:"view_original"})}}),Re=(0,ve.cN)({key:"download source",displayName:he.downloadName,analyticsName:he.downloadName.defaultMessage,svg:g.a,validators:[te.U7,te.or([te.$H,te.Cj]),te.or([te.VB,te.KJ]),te.ff(te.Fx)],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;O.TH({environment:t,store:a[0]})}}),Oe=(0,ve.cN)({key:"replace source",displayName:he.replaceName,analyticsName:he.replaceName.defaultMessage,svg:w.h,validators:[te.J5,te.U7,te.or([te.$H,te.Cj])],closeParentMenu:!0,action:e=>{let{blocks:a}=e;O.x1({store:a[0]})}}),Ze=(0,ve.cN)({key:"turn into collection",displayName:he.turnSimpleTableIntoCollection,analyticsName:he.turnSimpleTableIntoCollection.defaultMessage,svg:y.z,validators:[te.J5,te.ff(te.b4),te._n,te.XQ,te.ff(te.US)],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;return U.createAndCommit({userAction:"actionRegistry.turnSimpleTableIntoCollection",environment:t,perform:e=>{ce.HM.turnIntoCollection({simpleTableStore:a[0],transaction:e}),K.ZH(t),ce.HM.clearSelection()}})}}),qe=[te.J5,te.ff(te.p1),te.AK,te.ff(te.YG),te.ff(te.mq),te.ff(te.ag)];const Je=(0,ve.MV)({key:"edit property",displayName:he.editPropertyName,analyticsName:he.editPropertyName.defaultMessage,svg:N.N,validators:qe,subActions:e=>{let{blocks:a}=e;const t=a[0];if(!t)return[];const n=t.getAssociatedCollectionStore();if(n){const e=n.getSchema(),t=n.getFormat(),o=i.iB(t,e,void 0,i.j5.Collection);if(o.collection_page_properties){o.collection_page_properties.unshift({property:"title"});return[{key:0,title:void 0,render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:j.oA(o.collection_page_properties.map((t=>{const n=e[t.property];if(n&&(0,oe.Sb)({propertySchema:n,property:t.property,blockStores:a,collectionSchema:e}))return function(e){const{property:a,propertySchema:t}=e,n=t.name;return{key:`Edit Property ${n} ${a}`,displayName:n,analyticsName:"Edit property",searchName:n,validators:qe,closeParentMenu:!0,action:(e,n)=>{let{blocks:o,originRect:i,environment:s}=e;"checkbox"===t.type?U.createAndCommit({userAction:"actionRegistry.createEditPropertyAction",environment:s,perform:e=>{D.vO({stores:o,property:a,transaction:e})}}):i&&D.bA({environment:s,store:o[0],additionalStores:o.slice(1),property:a,format:W.C.Page,rect:{...j.Go(i),width:200},preventClearSelection:!0,blockPropertyValueOverlayStore:ne._H(),collectionContextStore:(0,ie.fm)(o[0])})},render:e=>(0,Ae.jsx)(ee.Z,{...e,propertySchema:t,format:ee.Z.DisplayFormat.Name})}}({property:t.property,propertySchema:n})})))}]}}return[]}}),Be=(0,ve.cN)({key:"clear date",displayName:he.clearDateName,analyticsName:he.clearDateName.defaultMessage,svg:A.S,validators:[te.J5,te.ff(te.fI),te.or([te.j2("timeline"),te.j2("calendar")])],closeParentMenu:!0,action:e=>{let{environment:a,blocks:t}=e;const n=(0,ie.fm)(t[0]);if(!n)return;const o=null==n?void 0:n.collectionViewStore();if(!o)return;const i=n.normalizedSchemaStore.state;U.createAndCommit({userAction:"actionRegistry.clearDate",environment:a,perform:e=>{_.k2({stores:t,collectionViewStore:o,schema:i,transaction:e})}})}}),ze=(0,ve.cN)({key:"view collection view inline",displayName:he.turnintoInlineName,analyticsName:he.turnintoInlineName.defaultMessage,svg:y.z,validators:[te.Mg,te.ff(te.O4),te.k5,te.ff(te.b4),te.ff(te.f7),te.IZ],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;return U.createAndCommit({userAction:"actionRegistry.viewCollectionViewInline",environment:t,perform:e=>{G.Cj({environment:t,blocks:a,blockType:"collection_view",transaction:e}),K.ZH(t)}})}}),Ee=(0,ve.cN)({key:"view collection view as page",displayName:he.turnintoPageName,analyticsName:he.turnintoPageName.defaultMessage,svg:y.z,validators:[te.vj,te.ff(te.O4),te.k5,te.ff(te.b4),te.ff(te.fI),te.ff(te.K5)],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;return U.createAndCommit({userAction:"actionRegistry.turnCollectionViewIntoCollectionViewPage",environment:t,perform:e=>{G.Cj({environment:t,blocks:a,blockType:"collection_view_page",transaction:e})}})}}),He=(0,ve.cN)({key:"turn into simple table",displayName:he.turnCollectionIntoSimpleTable,analyticsName:he.turnCollectionIntoSimpleTable.defaultMessage,svg:y.z,validators:[te.vj,te.dM("table"),te.ff(te.O4),te.k5,te.ff(te.b4),te.TK,te.iJ,te.ff(te.K5)],closeParentMenu:!0,action:async e=>{let{blocks:a,environment:t}=e;const n=a[0],o=await ce.g$.getPagesInCollectionForSimpleTableTransform({environment:t,collectionViewBlockStore:n});U.createAndCommit({userAction:"actionRegistry.turnCollectionIntoSimpleTable",environment:t,perform:e=>{ce.HM.turnIntoSimpleTable({environment:t,collectionViewBlockStore:n,pageStores:o,transaction:e}),K.ZH(t),ce.HM.clearSelection()}})}}),Ke=(0,ve.cN)({key:"merge with csv",displayName:he.mergewithCSVName,analyticsName:he.mergewithCSVName.defaultMessage,validators:[te.YG,te.k5,te.Gg,te.YZ,te.ff(te.fI),te.ff(te.JF),te.ff(te.K5)],closeParentMenu:!0,render:e=>(0,Ae.jsx)(Y.Z,{...e,svg:f.l,title:(0,Ae.jsx)(x.FormattedMessage,{...he.mergewithCSVName}),caption:(0,Ae.jsx)(x.FormattedMessage,{...he.mergewithCSVCaption})}),action:e=>{let{blocks:[a],environment:t}=e;R.mS({environment:t,store:a})}}),Ue=(0,ve.cN)({key:"database lock",displayName:he.lockDatabaseName,analyticsName:he.lockDatabaseName.defaultMessage,svg:p.b,validators:[te.YG,te.pl,te.ff(te.f7),te.k5,te.ff(te.p1)],closeParentMenu:!1,action:e=>{let{blocks:a,environment:t}=e;const n=a[0];z.bo({environment:t,store:n,lock:!0})}}),Ge=(0,ve.cN)({key:"database unlock",displayName:he.unlockDatabaseName,analyticsName:he.unlockDatabaseName.defaultMessage,svg:h.U,validators:[te.YG,te.pl,te.ff(te.f7),te.k5,te.p1],closeParentMenu:!1,action:e=>{let{blocks:a,environment:t}=e;const n=a[0];z.bo({environment:t,store:n,lock:!1})}}),$e=(0,ve.cN)({key:"database views lock",displayName:he.lockDatabaseViewsName,analyticsName:he.lockDatabaseViewsName.defaultMessage,svg:p.b,validators:[te.YG,te.ff(te.pl),te.k5,te.ff(te.p1)],closeParentMenu:!1,action:(e,a)=>{let{blocks:t,environment:n}=e;const o=t[0];z.bo({environment:n,store:o,lock:!0})}}),We=(0,ve.cN)({key:"database views unlock",displayName:he.unlockDatabaseViewsName,analyticsName:he.unlockDatabaseViewsName.defaultMessage,svg:h.U,validators:[te.YG,te.ff(te.pl),te.k5,te.p1],closeParentMenu:!1,action:(e,a)=>{let{blocks:t,environment:n}=e;const o=t[0];z.bo({environment:n,store:o,lock:!1})}}),Ye=(0,ve.cN)({key:"wiki lock",displayName:he.lockWikiName,analyticsName:he.lockWikiName.defaultMessage,svg:p.b,validators:[te.YG,te.pl,te.f7,te.k5,te.ff(te.p1)],closeParentMenu:!1,action:e=>{let{blocks:a,environment:t}=e;const n=a[0];z.bo({environment:t,store:n,lock:!0})}}),Qe=(0,ve.cN)({key:"wiki unlock",displayName:he.unlockWikiName,analyticsName:he.unlockWikiName.defaultMessage,svg:h.U,validators:[te.YG,te.pl,te.f7,te.k5,te.p1],closeParentMenu:!1,action:e=>{let{blocks:a,environment:t}=e;const n=a[0];z.bo({environment:t,store:n,lock:!1})}}),Xe=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[te.J5,te.ff(te.fI),te.ff(te.nJ),te.U7,e?te.or([te.ro("external_object_instance"),te.p5]):te.ro("external_object_instance"),te.ff(te.HB)]},ea=(0,ve.cN)({key:"reload link preview",displayName:he.reloadPreview,analyticsName:he.reloadPreview.defaultMessage,svg:C.b,validators:Xe(!1),closeParentMenu:!0,action:e=>{let{environment:a,blocks:t}=e;if(0===t.length)return;const n=t[0];n.isExternalObjectInstanceBlockStore()&&$.qK({environment:a,from:"page_more_menu",store:n,spaceId:n.getSpaceId()})}}),aa=(0,ve.cN)({key:"turn preview into mention",displayName:he.turnPreviewIntoMention,analyticsName:he.turnPreviewIntoMention.defaultMessage,svg:y.z,validators:Xe(!0),closeParentMenu:!0,action:e=>{let{environment:a,blocks:t}=e;0!==t.length&&U.createAndCommit({userAction:"actionRegistry.turnPreviewIntoMention",environment:a,perform:e=>{t[0].isType("alias")?q.az({block:t[0],transaction:e}):$.sz({environment:a,block:t[0],transaction:e})}})}}),ta=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,ve.cN)({key:"add to favorites",displayName:he.addtoFavoritesName,analyticsName:he.addtoFavoritesName.defaultMessage,svg:P.e,validators:[...e,te.jl,te.DF,te.U7,te.ff(te.UI),te.ff(te.xD([te.uq,te.cW]))],closeParentMenu:!0,action:e=>{let{blocks:a,environment:t}=e;const{currentSpaceViewStore:n}=ue.default.state;if(n){const e=a[0];U.createAndCommit({userAction:"actionRegistry.addToFavorites",environment:t,perform:a=>{re.bookmarkPage({spaceViewStore:n,store:e,transaction:a})}})}}})},na=ta([te.tq]),oa=ta(),ia=(0,ve.cN)({key:"reload synced page",displayName:he.reloadSyncedPage,analyticsName:he.reloadSyncedPage.defaultMessage,svg:C.b,validators:[te.J5,te.ff(te.fI),te.ff(te.nJ),te.U7,te.ro("external_object_instance_page")],closeParentMenu:!0,action:e=>{let{environment:a,blocks:t}=e;if(0===t.length)return;const n=t[0];n.isExternalObjectInstancePageBlockStore()&&$.qK({environment:a,from:"page_more_menu",store:n,spaceId:n.getSpaceId(),bypassCache:!0})}}),sa=(0,ve.cN)({key:"configure",displayName:he.configureName,analyticsName:he.configureName.defaultMessage,svg:S.H,validators:[te.J5,te.U7,te.zX],closeParentMenu:!0,action:e=>H.jQ(e)}),la=(0,ve.cN)({key:"edit icon",displayName:he.editIconName,analyticsName:he.editIconName.defaultMessage,svg:m.h,validators:[te.J5,te.ff(te.fI),te.lr],closeParentMenu:!0,action:e=>{let{environment:a,originRect:t,blocks:n}=e;const o=(e,t)=>{n.forEach((t=>{const n=t.getIconStore();n&&U.createAndCommit({userAction:"actionRegistry.editIcon",environment:a,perform:a=>{E.sO({store:n,value:e,transaction:a})}})})),t&&t.keepVisible||B.Z()},i=n.find((e=>e.hasIcon())),s=n.every((e=>e.isType("callout"))),l=[{type:"emoji",title:(0,Ae.jsx)(x.FormattedMessage,{defaultMessage:"Emojis",id:"recordIcon.emojiTab.title"}),onChange:o},{type:"icon",title:(0,Ae.jsx)("div",{style:{display:"flex",gap:4},children:(0,Ae.jsx)(x.FormattedMessage,{defaultMessage:"Icons",id:"recordIcon.iconTab.title"})}),onChange:o}];B.$(a,{recordIconLoggingData:{source:"bulk_block_selection"},originGap:4,originRect:t,popupWidth:ae.FZ,popupHeight:ae.kX,isSmallWidth:!1,title:se.default.getIntl().formatMessage({defaultMessage:"Page icon",id:"recordIcon.emojiModalMenu.title"}),onDelete:i?()=>{n.forEach((e=>{const t=e.getIconStore();t&&U.createAndCommit({userAction:"actionRegistry.editIcon",environment:a,perform:e=>{E.sO({store:t,value:void 0,transaction:e})}})})),B.Z()}:void 0,currentTab:"emoji",isCallout:s,tabs:l,disableClearSelection:!0})}}),ra=(0,ve.wL)({key:"code wrap",displayName:he.wrapCodeKeywords,label:se.default.formatMessage(he.wrapCodeLabel),property:"code_wrap",validators:[te.U7,te.P9("code")],afterAction:(e,a)=>{I.Z.set({userId:a.currentUser.id,key:de.T.localCodeWrapPreferenceKey,value:e})}}),ca=(0,x.defineMessages)({ABAP:{id:"action.languageMode.abap",defaultMessage:"ABAP"},Agda:{id:"action.languageMode.agda",defaultMessage:"Agda"},Arduino:{id:"action.languageMode.arduino",defaultMessage:"Arduino"},Assembly:{id:"action.languageMode.nasm",defaultMessage:"Assembly"},Bash:{id:"action.languageMode.bash",defaultMessage:"Bash"},BASIC:{id:"action.languageMode.basic",defaultMessage:"Basic"},BNF:{id:"action.languageMode.bnf",defaultMessage:"BNF"},C:{id:"action.languageMode.c",defaultMessage:"C"},"C#":{id:"action.languageMode.csharp",defaultMessage:"C#"},"C++":{id:"action.languageMode.cplusplus",defaultMessage:"C++"},Clojure:{id:"action.languageMode.clojure",defaultMessage:"Clojure"},CoffeeScript:{id:"action.languageMode.coffeescript",defaultMessage:"CoffeeScript"},Coq:{id:"action.languageMode.coq",defaultMessage:"Coq"},CSS:{id:"action.languageMode.css",defaultMessage:"CSS"},Dart:{id:"action.languageMode.dart",defaultMessage:"Dart"},Dhall:{id:"action.languageMode.dhall",defaultMessage:"Dhall"},Diff:{id:"action.languageMode.diff",defaultMessage:"Diff"},Docker:{id:"action.languageMode.docker",defaultMessage:"Docker"},EBNF:{id:"action.languageMode.ebnf",defaultMessage:"EBNF"},Elixir:{id:"action.languageMode.elixir",defaultMessage:"Elixir"},Elm:{id:"action.languageMode.elm",defaultMessage:"Elm"},Erlang:{id:"action.languageMode.erlang",defaultMessage:"Erlang"},"F#":{id:"action.languageMode.fsharp",defaultMessage:"F#"},Flow:{id:"action.languageMode.flow",defaultMessage:"Flow"},Fortran:{id:"action.languageMode.fortran",defaultMessage:"Fortran"},Gherkin:{id:"action.languageMode.gherkin",defaultMessage:"Gherkin"},GLSL:{id:"action.languageMode.glsl",defaultMessage:"GLSL"},Go:{id:"action.languageMode.go",defaultMessage:"Go"},GraphQL:{id:"action.languageMode.graphql",defaultMessage:"Graphql"},Groovy:{id:"action.languageMode.groovy",defaultMessage:"Groovy"},Haskell:{id:"action.languageMode.haskell",defaultMessage:"Haskell"},HTML:{id:"action.languageMode.html",defaultMessage:"HTML"},Idris:{id:"action.languageMode.idris",defaultMessage:"Idris"},Java:{id:"action.languageMode.java",defaultMessage:"Java"},JavaScript:{id:"action.languageMode.javascript",defaultMessage:"JavaScript"},JSON:{id:"action.languageMode.json",defaultMessage:"JSON"},Julia:{id:"action.languageMode.julia",defaultMessage:"Julia"},Kotlin:{id:"action.languageMode.kotlin",defaultMessage:"Kotlin"},LaTeX:{id:"action.languageMode.latex",defaultMessage:"LaTeX"},Less:{id:"action.languageMode.less",defaultMessage:"LESS"},Lisp:{id:"action.languageMode.lisp",defaultMessage:"Lisp"},LiveScript:{id:"action.languageMode.livescript",defaultMessage:"LiveScript"},"LLVM IR":{id:"action.languageMode.llvm",defaultMessage:"LLVM IR"},Lua:{id:"action.languageMode.lua",defaultMessage:"Lua"},Makefile:{id:"action.languageMode.makefile",defaultMessage:"Makefile"},Markdown:{id:"action.languageMode.markdown",defaultMessage:"Markdown"},Markup:{id:"action.languageMode.markup",defaultMessage:"Markup"},MATLAB:{id:"action.languageMode.matlab",defaultMessage:"MATLAB"},Mathematica:{id:"action.languageMode.mathematica",defaultMessage:"Mathematica"},Mermaid:{id:"action.languageMode.mermaid",defaultMessage:"Mermaid"},Nix:{id:"action.languageMode.nix",defaultMessage:"Nix"},"Notion Formula":{id:"action.languageMode.notionFormula",defaultMessage:"Notion Formula"},"Objective-C":{id:"action.languageMode.objectiveC",defaultMessage:"Objective-C"},OCaml:{id:"action.languageMode.ocaml",defaultMessage:"OCaml"},Pascal:{id:"action.languageMode.pascal",defaultMessage:"Pascal"},Perl:{id:"action.languageMode.perl",defaultMessage:"Perl"},PHP:{id:"action.languageMode.php",defaultMessage:"PHP"},"Plain Text":{id:"action.languageMode.plaintext",defaultMessage:"Plain Text"},PowerShell:{id:"action.languageMode.powershell",defaultMessage:"Powershell"},Prolog:{id:"action.languageMode.prolog",defaultMessage:"Prolog"},Protobuf:{id:"action.languageMode.protobuf",defaultMessage:"Protobuf"},PureScript:{id:"action.languageMode.purescript",defaultMessage:"PureScript"},Python:{id:"action.languageMode.python",defaultMessage:"Python"},R:{id:"action.languageMode.r",defaultMessage:"R"},Racket:{id:"action.languageMode.racket",defaultMessage:"Racket"},Reason:{id:"action.languageMode.reason",defaultMessage:"Reason"},Ruby:{id:"action.languageMode.ruby",defaultMessage:"Ruby"},Rust:{id:"action.languageMode.rust",defaultMessage:"Rust"},Sass:{id:"action.languageMode.sass",defaultMessage:"Sass"},Scala:{id:"action.languageMode.scala",defaultMessage:"Scala"},Scheme:{id:"action.languageMode.scheme",defaultMessage:"Scheme"},Scss:{id:"action.languageMode.scss",defaultMessage:"SCSS"},Shell:{id:"action.languageMode.shell",defaultMessage:"Shell"},Solidity:{id:"action.languageMode.solidity",defaultMessage:"Solidity"},SQL:{id:"action.languageMode.sql",defaultMessage:"SQL"},Swift:{id:"action.languageMode.swift",defaultMessage:"Swift"},TOML:{id:"action.languageMode.toml",defaultMessage:"TOML"},TypeScript:{id:"action.languageMode.typescript",defaultMessage:"TypeScript"},"VB.Net":{id:"action.languageMode.vbdotnet",defaultMessage:"VB.Net"},Verilog:{id:"action.languageMode.verilog",defaultMessage:"Verilog"},VHDL:{id:"action.languageMode.vhdl",defaultMessage:"VHDL"},"Visual Basic":{id:"action.languageMode.visualbasic",defaultMessage:"Visual Basic"},WebAssembly:{id:"action.languageMode.webassembly",defaultMessage:"WebAssembly"},XML:{id:"action.languageMode.xml",defaultMessage:"XML"},YAML:{id:"action.languageMode.yaml",defaultMessage:"YAML"},"Java/C/C++/C#":{id:"action.languageMode.cstyle",defaultMessage:"Java/C/C++/C#"}}),da=[te.J5,te.ff(te.fI),te.Eo,te.ro("code"),te.ff(te.O4)],ua=(0,ve.$J)({key:"code block languageMode actions",title:he.languageModeName,render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:o.X0.map((e=>(0,ve.cN)({key:`set language ${e} action`,displayName:ca[e],analyticsName:`set language ${e}`,validators:da,closeParentMenu:!0,action:a=>{let{environment:t,blocks:n}=a;I.Z.set({userId:t.currentUser.id,key:de.T.localLanguagePreferenceKey,value:e}),U.createAndCommit({userAction:"actionRegistry.languageModeActions",environment:t,perform:a=>{V.E5({language:e,blocks:n,transaction:a})}})},render:a=>(0,Ae.jsx)(Q.Z,{...a,title:e})})))}),ga=(0,ve.MV)({key:"languageMode section",displayName:he.languageModeName,analyticsName:he.languageModeName.defaultMessage,validators:da,subActions:()=>[ua]}),ma=(0,ve.cN)({key:"format code",displayName:he.formatCodeLabel,closeParentMenu:!0,analyticsName:he.formatCodeLabel.defaultMessage,validators:[te.U7,te.P9("code"),te.Gz],action:async e=>{let{blocks:a,environment:t}=e;const n=a[0];await V.Cn({codeBlock:n,environment:t})}}),fa=(0,ve.cN)({key:"work at notion",analyticsName:he.workAtNotion.defaultMessage,closeParentMenu:!0,displayName:he.workAtNotion,validators:[te.P9("code"),te.vM],action:()=>{window&&window.open(F._j.careers)}}),Ma=[te.J5,te.ff(te.fI),te.ro("quote")];function pa(e){return a=>{I.Z.set({userId:a.environment.currentUser.id,key:de.l.localSizePreferenceKey,value:e}),U.createAndCommit({userAction:"actionRegistry.createQuoteSizeAction",environment:a.environment,perform:t=>{Z.FH({stores:a.blocks,update:{quote_size:e},transaction:t})}})}}const ya=(0,ve.$J)({key:"quote size actions",title:he.quoteSizeSection,render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[(0,ve.cN)({key:"quote size default",displayName:he.quoteSizeDefault,analyticsName:he.quoteSizeDefault.defaultMessage,validators:Ma,closeParentMenu:!0,action:pa(void 0)}),(0,ve.cN)({key:"quote size large",displayName:he.quoteSizeLarge,analyticsName:he.quoteSizeLarge.defaultMessage,validators:Ma,closeParentMenu:!0,action:pa("large")})]}),va=(0,ve.MV)({key:"quote size",displayName:he.quoteSize,analyticsName:he.quoteSize.defaultMessage,svg:b.O,validators:Ma,subActions:()=>[ya]}),ka=[te.J5,te.ff(te.fI),te.ro("numbered_list"),te.J8("numbered_list")],Na=[te.J5,te.ff(te.fI),te.ro("bulleted_list"),te.J8("bulleted_list")],ba=(0,ve.MV)({key:"number format",displayName:he.listFormat,analyticsName:he.listFormat.defaultMessage,svg:N.N,validators:ka,subActions:()=>[Sa]}),wa=e=>a=>{U.createAndCommit({userAction:"actionRegistry.createListFormatAction",environment:a.environment,perform:t=>{Z.FH({stores:a.blocks,update:{list_format:e},transaction:t})}})},Sa=(0,ve.$J)({key:"text color actions",title:he.listFormatSection,render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[(0,ve.cN)({key:"list format default",displayName:he.listFormatDefault,analyticsName:he.listFormatDefault.defaultMessage,validators:ka,closeParentMenu:!0,action:wa(void 0)}),(0,ve.cN)({key:"list format numbers",displayName:he.listFormatNumbers,analyticsName:he.listFormatNumbers.defaultMessage,validators:ka,closeParentMenu:!0,action:wa("numbers")}),(0,ve.cN)({key:"list format letters",displayName:he.listFormatLetters,analyticsName:he.listFormatLetters.defaultMessage,validators:ka,closeParentMenu:!0,action:wa("letters")}),(0,ve.cN)({key:"list format roman numerals",displayName:he.listFormatRoman,analyticsName:he.listFormatRoman.defaultMessage,validators:ka,closeParentMenu:!0,action:wa("roman")})]}),Pa=e=>a=>{U.createAndCommit({userAction:"actionRegistry.createBulletListFormatAction",environment:a.environment,perform:t=>{Z.FH({stores:a.blocks,update:{bullet_list_format:e},transaction:t})}})},Ca=(0,ve.$J)({key:"bullet list format actions",title:he.listFormatSection,render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[(0,ve.cN)({key:"list format default",displayName:he.listFormatDefault,analyticsName:he.listFormatDefault.defaultMessage,validators:Na,closeParentMenu:!0,action:Pa(void 0)}),(0,ve.cN)({key:"list format disc",displayName:he.listFormatDisc,analyticsName:he.listFormatDisc.defaultMessage,validators:Na,closeParentMenu:!0,action:Pa("disc")}),(0,ve.cN)({key:"list format circle",displayName:he.listFormatCircle,analyticsName:he.listFormatCircle.defaultMessage,validators:Na,closeParentMenu:!0,action:Pa("circle")}),(0,ve.cN)({key:"list format square",displayName:he.listFormatSquare,analyticsName:he.listFormatSquare.defaultMessage,validators:Na,closeParentMenu:!0,action:Pa("square")})]}),Aa=(0,ve.MV)({key:"bulleted format",displayName:he.listFormat,analyticsName:he.listFormat.defaultMessage,svg:N.N,validators:Na,subActions:()=>[Ca]}),ha=[te.jl,te.or([te.xD([te.U7,te.Cj,te.k6]),te.xD([te.P9(n.Ti.text),te.QL("text_align")])])],Ia=(0,ve.MV)({key:"alignment",displayName:he.alignmentName,analyticsName:he.alignmentName.defaultMessage,svg:r.$,validators:ha,subActions:()=>[xa]}),ja=e=>a=>{U.createAndCommit({userAction:"actionRegistry.createAlignmentFormatAction",environment:a.environment,perform:t=>{if(a.blocks&&a.blocks.length>0)for(const n of a.blocks)Z.hc({environment:a.environment,store:n,alignment:e,transaction:t})}})},Fa=(0,x.defineMessages)({leftAlign:{id:"action.alignment.left.name",defaultMessage:"Left"},centerAlign:{id:"action.alignment.center.name",defaultMessage:"Center"},rightAlign:{id:"action.alignment.right.name",defaultMessage:"Right"}}),xa=(0,ve.$J)({key:"alignment format actions",title:he.alignmentName,render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[(0,ve.cN)({key:"alignment format left",displayName:Fa.leftAlign,analyticsName:"Align left",validators:ha,closeParentMenu:!0,svg:r.$,action:ja("left")}),(0,ve.cN)({key:"alignment format center",displayName:Fa.centerAlign,analyticsName:"Align center",validators:ha,closeParentMenu:!0,svg:l.L,action:ja("center")}),(0,ve.cN)({key:"alignment format right",displayName:Fa.rightAlign,analyticsName:"Align right",validators:ha,closeParentMenu:!0,svg:c.g,action:ja("right")})]}),La=e=>[Ne.ww,{key:"ai section actions",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[fe.$3,fe._K]},{key:"block menu primary",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[fe.NY,pe.G,...e?[ye.o1,ye.vh]:[ye.Ay],Ie,je,Fe,xe,Le]},{key:"block menu navigation",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[De,Te,we.KB,we.oL,we.sN,we.Jw,Me.H,Me.K,Ve]},{key:"block menu secondary",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[ke.d,_e,Re,Oe,sa,Pe.B,Pe.L9,Ze,Se.$,Se.g,Je,Be,ze,Ee,He,Ke,Ue,Ge,$e,We,Ye,Qe,ea,aa,ia,be.A,oa]},{key:"block menu comment",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[me.U,me.V]},{key:"block menu color",render:e=>(0,Ae.jsx)(X.Z,{...e,topBorder:!0}),actions:[ge.Tr,la]},{key:"code block menu style",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[ra,ga,ma,fa]},{key:"block menu quote",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[va]},{key:"block menu number",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[ba]},{key:"block menu bullet",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[Aa]},{key:"block alignment",render:e=>(0,Ae.jsx)(X.Z,{...e}),actions:[Ia]}]},42784:(e,a,t)=>{t.d(a,{ww:()=>g});t(67294);var n=t(38491),o=t(55863),i=t(1892),s=t(72495),l=t(19037),r=t(62967),c=t(85893);const d=(0,r.cN)({key:"mobile undo",displayName:r.RE.undoName,analyticsName:r.RE.undoName.defaultMessage,svg:o.s,validators:[l.jl,l.Mn,l.ff(l.Eo)],closeParentMenu:!0,action:e=>{let{environment:a}=e;return i.Yw(a)}}),u=(0,r.cN)({key:"mobile redo",displayName:r.RE.redoName,analyticsName:r.RE.redoName.defaultMessage,svg:n.N,validators:[l.Mn,l.ff(l.Eo)],closeParentMenu:!0,action:e=>{let{environment:a}=e;return i.KX(a)}}),g=(0,r.$J)({key:"mobile revision actions",render:e=>(0,c.jsx)(s.Z,{...e}),actions:[d,u]})},69255:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});t(57658);var n=t(67294),o=t(480),i=t(86628),s=t(77657),l=t(62208),r=t(60291),c=t(77420),d=t(97880),u=t(68939),g=t(41363),m=t(39699),f=t(61202),M=t(72899),p=t(81598),y=t(87279),v=t(77907),k=t(30874),N=t(93405),b=t(78140),w=t(32163),S=t(72495),P=t(85893);const C=function(e){window.__c={n:"ExternalObjectInstanceBlockMenu"};const{titleForReloadMenuOption:a,store:t,parentBlockStore:C,onAccept:A,onDismiss:h,extraSecondaryItemKey:I,token:j}=e,F=(0,o.O7)(),{value:x}=(0,v.useDependency)(v.deps.markdownLinkifyIt),{value:L}=(0,v.useDependency)(v.deps.tinyMceMicrosoftWordPasteFilter),{value:D}=(0,v.useDependency)(M.E0),{value:T}=(0,v.useDependency)(p.L6),V=(0,n.useCallback)((e=>{const a={blocks:[t],environment:F,publicEditMode:void 0,lazyDependencies:{markdownLinkifyIt:x,tinyMceMicrosoftWordPasteFilter:L,ai:D,assistant:T}};return{key:e.key,render:(t,n)=>e.render(t,a,{onAccept:A,onFocus:n.onFocus}),action:t=>{let{event:n}=t;return e.action(a,n)}}}),[A,F,t,x,L,D,T]),_=[];(0,i.VK)((()=>{const e=t.getFormat().bot_id,a=k.Z.getBotsAsRecordMap();if(e&&!0===k.Z.state.loaded){const t=a.getValue({table:c.cZ,id:e});if(t&&t.integration_id&&t.integration_id===s.U9)return!1}return!0}),[t])&&_.push({key:0,render:e=>(0,P.jsx)(S.Z,{...e,style:{paddingTop:0,paddingBottom:0}}),items:[{key:"reload external instance object",render:e=>(0,P.jsx)(N.Z,{...e,title:a,svg:r.b}),action:()=>{t&&(t.isExternalObjectInstanceBlockStore()||t.isExternalObjectInstancePageBlockStore())&&f.qK({environment:F,from:"page_more_menu",store:t,spaceId:t.getSpaceId()})}}]});const R=(0,i.VK)((()=>{switch(I){case"preview_to_mention":return[V(g.OH)];case"mention_to_preview":if(!t.isExternalObjectInstanceBlockStore())return[];return[{key:"turn preview into block",render:e=>(0,P.jsx)(N.Z,{...e,title:(0,P.jsx)(u.FormattedMessage,{id:"hoverPreviewOverlay.action.turnPreviewIntoPreview",defaultMessage:"Turn into preview"}),svg:l.z}),action:()=>{C&&j&&m.createAndCommit({userAction:"HoverPreviewOverlay.transformExternalObjectInstanceMentionIntoBlock",environment:F,perform:e=>{f.aV({block:t,parentStore:C,transaction:e,token:j}),e.postSubmitCallbacks.push((e=>{e||null==h||h()}))}})}}];default:(0,d.t1)(I)}}),[I,V,t,C,j,F,h]);return _.push({key:1,render:e=>(0,P.jsx)(S.Z,{...e,style:{paddingTop:0,paddingBottom:0}}),items:[...R,V(g.IK)]}),(0,P.jsx)(b.Z,{menuType:y.og.Popup,children:(0,P.jsx)(w.Z,{type:w.i.Vertical,initialFocus:void 0,onAccept:A,sections:_,style:{paddingTop:3,paddingBottom:3}})})}}}]);