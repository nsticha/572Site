"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52297],{61201:function(e,t,r){var n,i,a,o;r.d(t,{Gi:function(){return a},Nf:function(){return n},i1:function(){return i},vN:function(){return o}}),function(e){e.published="smversionpublished",e.draft="smversiondraft"}(n||(n={})),function(e){e.publishedDate="smpublisheddate",e.firstPublishedDate="smfirstpublisheddate"}(i||(i={})),function(e){e.Image="image",e.Video="video",e.ImageOrVideo="image-or-video",e.Audio="audio",e.Embed="embed",e.Map="map",e.WebMap="webmap",e.ExpressMap="expressmap",e.ThematicMap="thematic-map",e.ReadyToUseMap="ready-to-use-map",e.GuidedTour="tour",e.Gallery="gallery",e.Sidecar="sidecar",e.Swipe="swipe",e.Timeline="timeline",e.Custom="custom",e.Globe="globe",e.Terrain="terrain",e.ImageEditor="imageEditor",e.Viewer3D="viewer3D",e.Charting="charting",e.ExpressMapping="expressMapping",e.BinVisualization="binVisualization",e.Template="template",e.File="file-item"}(a||(a={})),function(e){e[e.Full=1920]="Full",e[e.Wide=1200]="Wide",e[e.Standard=820]="Standard"}(o||(o={}))},52297:function(e,t,r){r.d(t,{gi:function(){return _},wz:function(){return C},Vx:function(){return S},S$:function(){return Z},j5:function(){return I},Az:function(){return E},mA:function(){return x}});var n=r(98788),i=r(47842),a=r(45680),o=r(52322),s=(r(2784),r(42670)),u=r(99698),c=r(56038),d=r(58650),l=r(42841),m=r(39858),p=r(81192),h=r(44141),f=r(83708),y=function(e){return window.performance.getEntriesByType("resource").filter((function(t){return"string"===typeof e?t.name===e:e.test(t.name)}))},v=r(84117),g=r(60120),b=r(48773),w=r(70865),T=r(24084),Z=function(e){var t=e.typeKeywords;return t.indexOf(c.P.draft)>=0||t.indexOf("status:draft")>=0||(0,d.ZX)({typeKeywords:t})?c.P.draft:t.indexOf(c.P.published)>=0||t.indexOf("status:published")>=0||e.origin?c.P.published:(t.indexOf(c.P.unpublishedChanges)>=0||t.indexOf("status:unpublished-changes")>=0)&&c.P.unpublishedChanges},S=function(){var e=(0,n.Z)((function(e){var t;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(0,d.LZ)({isFavorite:!0,itemId:e.id,authManager:e.authManager,owner:e.owner})];case 1:return r.sent(),e.toast.add({type:"success",title:(0,o.jsx)(s.Z,{id:"itemUtils.addFavoriteSuccess.".concat(e.itemType)})}),[3,3];case 2:throw t=r.sent(),e.toast.add({type:"error",title:(0,o.jsx)(s.Z,{id:"builder.common.sorry"}),details:(0,o.jsx)(s.Z,{id:"itemUtils.errorFavoriting.".concat(e.itemType)})}),new Error(t);case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)((function(e){var t;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(0,d.LZ)({isFavorite:!1,itemId:e.id,authManager:e.authManager,owner:e.owner})];case 1:return r.sent(),e.toast.add({type:"success",title:(0,o.jsx)(s.Z,{id:"itemUtils.removeFavoriteSuccess.".concat(e.itemType)})}),[3,3];case 2:throw t=r.sent(),e.toast.add({type:"error",title:(0,o.jsx)(s.Z,{id:"builder.common.sorry"}),details:(0,o.jsx)(s.Z,{id:"itemUtils.errorUnfavoriting.".concat(e.itemType)})}),new Error(t);case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,n.Z)((function(e){var t,r,n,c,d;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:r=(t={},(0,i.Z)(t,g.o.Story,(0,o.jsx)(s.Z,{id:"itemUtils.deleteStorySuccess"})),(0,i.Z)(t,g.o.Collection,(0,o.jsx)(s.Z,{id:"itemUtils.deleteCollectionSuccess"})),(0,i.Z)(t,g.o.Theme,(0,o.jsx)(s.Z,{id:"itemUtils.deleteThemeSuccess"})),t)[e.type],c=(n={},(0,i.Z)(n,g.o.Story,(0,o.jsx)(s.Z,{id:"itemUtils.errorDeletingStory"})),(0,i.Z)(n,g.o.Collection,(0,o.jsx)(s.Z,{id:"itemUtils.errorDeletingCollection"})),(0,i.Z)(n,g.o.Theme,(0,o.jsx)(s.Z,{id:"itemUtils.errorDeletingTheme"})),n)[e.type],a.label=1;case 1:return a.trys.push([1,3,,4]),[4,(0,u.cl)({authentication:e.authManager,id:e.id})];case 2:return a.sent(),e.toast.add({type:"success",title:r}),[3,4];case 3:throw d=a.sent(),e.toast.add({type:"error",title:(0,o.jsx)(s.Z,{id:"builder.common.sorry"}),details:c}),new Error(d);case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)((function(e){var t,r,n,i,o;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,(0,m.uX)(e.authManager)];case 1:return t=a.sent(),[4,(0,b.mI)(e.config.BASE_URL)];case 2:return r=a.sent(),[4,e.authManager.getUser()];case 3:return n=a.sent(),[4,(0,u.fC)({authentication:e.authManager,params:{thumbnail:r},item:(0,b.rV)(e.itemType,e.config,t,n.orgId)})];case 4:return i=a.sent(),o=function(){switch(e.itemType){case g.o.Story:return(0,b.U_)({firstName:n.firstName,lastName:n.lastName,webmap:e.webmap,webscene:e.webscene,template:e.template,theme:e.theme,baseThemeId:e.baseThemeId,title:e.title,shouldIncludeAuthorCard:e.featureDecisions.canUseAuthorCard,coverType:e.config.INCLUDED_STORY_COVERS[0]});case g.o.Collection:return(0,b.$U)({baseThemeId:e.baseThemeId,title:e.title,theme:e.theme,firstName:n.firstName,lastName:n.lastName});case g.o.Theme:return function(e){var t=e.baseThemeId,r=(0,T.w8)(t).defaultBaseVariables,n=(0,w.Z)({},r);return delete n.colorRamps,{baseThemeId:t,variables:n}}({baseThemeId:e.baseThemeId});default:return{}}}(),e.itemType===g.o.Story&&e.theme?[4,(0,u.bV)({originItemId:e.theme,destinationItemId:i.id,relationshipType:p.t4,authentication:e.authManager})]:[3,6];case 5:a.sent(),l.Z.trackEvent(l.Z.Category.Theme,l.Z.Action.Theme_AddRelationshipTheme2Story),a.label=6;case 6:return[4,(0,u.zJ)({authentication:e.authManager,id:i.id,name:"draft.json",resource:(0,h.ds)(o),owner:e.authManager.username,private:!0})];case 7:return a.sent(),e.itemType===g.o.Story&&function(e){switch(e.itemType){case g.o.Story:var t={sidecar:l.Z.Name.QuickStartTemplate_Sidecar,"guided-tour":l.Z.Name.QuickStartTemplate_GuidedTour,explorer:l.Z.Name.QuickStartTemplate_Explorer},r=e.templateForStory?t[e.templateForStory]:l.Z.Name.QuickStartTemplate_Default;r&&l.Z.trackEvent(l.Z.Category.Story,l.Z.Action.Story_CreateNewStory,r),e.hasThemeForStory&&l.Z.trackEvent(l.Z.Category.Story,l.Z.Action.Story_CreateNewStoryWithTheme);break;case g.o.Collection:l.Z.trackEvent(l.Z.Category.Collection,l.Z.Action.Collection_CreateCollection);break;case g.o.Theme:l.Z.trackEvent(l.Z.Category.Theme,l.Z.Action.Theme_CreateNewTheme)}}({itemType:e.itemType,templateForStory:e.template,hasThemeForStory:!!e.theme}),[2,i]}}))}));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.storyUrl;return(0,e.getUrlFromRouteDef)({route:"report-abuse",storyUrl:(0,f.w3)(t||window.location.href,["play","speed","cover","header"])})},E=function(e){var t=e.itemId,r=e.portalHost,n=e.authManager;try{var i=y(new RegExp("sharing/rest/content/items/".concat(t,"/data"))),a=window.performance.now(),o=i.reduce((function(e,t){var r=a-t.startTime;return Math.min(r,e)}),1/0);if(0===i.length||isFinite(o)&&o>9999){var s=function(){return(0,u.m_)(t,{authentication:n,portal:(0,v.Zl)(r,n)})};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:3e3}):setTimeout(s,3e3)}}catch(c){}}},48773:function(e,t,r){r.d(t,{$U:function(){return w},PR:function(){return T},U_:function(){return b},Zr:function(){return Z},mI:function(){return S},rV:function(){return v}});var n=r(98788),i=r(47842),a=r(70865),o=r(50930),s=r(45680),u=r(45292),c=r(56038),d=r(81192),l=r(16202),m=r(26015),p=r(61201),h=r(60120),f=r(79563),y=r(86993),v=function(e,t,r,n){var i=(0,o.Z)(t.NEW_ITEM_TYPEKEYWORDS).concat([c.P.draft,"".concat(p.Nf.draft,":").concat(t.APP_VERSION)]);e===h.o.Collection&&i.push(d.fp),r&&i.push(m.nt),n&&t.ESRI_MARKETING_ANALYTICS&&t.ESRI_MARKETING_ANALYTICS.orgIds.includes(n)&&i.push(m.hH);var a=e===h.o.Theme?d.j3:d.Cs;return{title:(0,y.bH)({type:e}),tags:[""],typeKeywords:i,type:a,properties:(0,l.MM)({thumbnail:["default"]},"replace")}},g=function(e,t){return e&&t&&"undefined"!==e&&"undefined"!==t?"".concat(e," ").concat(t):""},b=function(e){var t,r,n=(0,u.vx)(),o=(0,u.vx)(),s=(0,u.vx)(),c=(0,u.S3)(),d={root:n,nodes:(r={},(0,i.Z)(r,n,{type:"story",data:{storyTheme:c},config:(0,a.Z)({coverDate:"first-published"},e.shouldIncludeAuthorCard?{isShowingAuthorCard:!0}:{}),children:[o,s]}),(0,i.Z)(r,o,{type:"storycover",data:{type:e.coverType,title:null!==(t=e.title)&&void 0!==t?t:"",summary:"",byline:g(e.firstName,e.lastName),titlePanelPosition:"start"}}),(0,i.Z)(r,s,{type:"navigation",data:{links:[]},config:{isHidden:!0}}),r),resources:(0,i.Z)({},c,{type:"story-theme",data:(0,a.Z)({themeId:e.baseThemeId,themeBaseVariableOverrides:{}},e.theme&&{themeItemId:e.theme})})},l=d.nodes[n].children;if(!l)throw new Error("new story created with no children block");if("string"===typeof e.webmap){var m="r-".concat(e.webmap),p=(0,u.vx)();d.resources[m]={type:"webmap",data:{itemId:e.webmap,itemType:"Web Map",type:"default"}},l.push(p),d.nodes[p]={type:"webmap",data:{map:m}}}if("string"===typeof e.webscene){var h="r-".concat(e.webscene),f=(0,u.vx)();d.resources[h]={type:"webmap",data:{itemId:e.webscene,itemType:"Web Scene",type:"default"}},l.push(f),d.nodes[f]={type:"webmap",data:{map:h}}}(0,y.cI)(e.template)&&x(e.template,s,d);var v=(0,u.vx)();return l.push(v),d.nodes[v]={type:"credits"},d},w=function(e){var t,r,n=(0,u.vx)(),o=(0,u.vx)(),s=(0,u.vx)(),c=(0,u.vx)(),d=(0,u.S3)(),l={type:"story-theme",data:(0,a.Z)({themeId:e.baseThemeId,themeBaseVariableOverrides:{}},e.theme&&{themeItemId:e.theme})};return{root:n,nodes:(r={},(0,i.Z)(r,n,{type:"collection",data:{storyTheme:d},children:[o]}),(0,i.Z)(r,o,{type:"collection-ui",data:{items:[]},children:[s,c]}),(0,i.Z)(r,s,{type:"collection-cover",data:{title:null!==(t=e.title)&&void 0!==t?t:"",summary:"",byline:g(e.firstName,e.lastName),type:"tiles"}}),(0,i.Z)(r,c,{type:"collection-nav",data:{type:"compact"}}),r),resources:(0,i.Z)({},d,l)}},T=function(e){return!e||/^(StoryMap|StoryMapCollection|Theme) \d{10,15}$/.test(e)},Z=function(e){return"".concat(e).concat(f.x)},S=function(){var e=(0,n.Z)((function(e){var t;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return t="".concat(location.origin).concat(Z(e)),[4,fetch(t)];case 1:return[4,r.sent().blob()];case 2:return[2,r.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),x=function(e,t,r){if(!r.nodes[r.root].children)throw new Error("Could not insert template nodes, root node does not have children.");var n=(0,u.vx)(),i=r.nodes[r.root].children.indexOf(t)+1;if(r.nodes[r.root].children.splice(i,0,n),e.startsWith("sidecar")){var a=(0,u.vx)();r.nodes[n]={type:"immersive",data:{type:"sidecar",subtype:"sidecar-floating"===e?"floating-panel":"docked-panel",narrativePanelPosition:"start",narrativePanelSize:"small"},children:[a]};var o=(0,u.vx)();r.nodes[a]={type:"immersive-slide",data:{transition:"fade"},children:[o]},r.nodes[o]={type:"immersive-narrative-panel",data:{panelStyle:"themed",position:"start",size:"small"}}}else if(e.startsWith("guided-tour")||e.startsWith("explorer")){var s=e.startsWith("guided-tour");r.nodes[n]={type:"tour",data:{type:s?"guided-tour":"explorer",subtype:s?"guided-tour-media"===e?"media-focused":"map-focused":"explorer-grid"===e?"grid":"list"}}}}},79563:function(e,t,r){r.d(t,{B:function(){return n},x:function(){return i}});var n=["sidecar","sidecar-floating","sidecar-docked","guided-tour","guided-tour-media","guided-tour-map","explorer","explorer-grid","explorer-list"],i="/static/images/item-default-thumbnails/item.jpg"},86993:function(e,t,r){r.d(t,{HL:function(){return d},KZ:function(){return m},bH:function(){return c},cI:function(){return l}});var n=r(98788),i=r(47842),a=r(45680),o=r(81192),s=r(79563),u=r(60120),c=function(e){var t,r=e.type,n=e.dateStamp,a="number"===typeof n?n:(null===n||void 0===n?void 0:n.getTime())||Date.now(),o=1e3*Math.round(a/1e3);return"".concat((t={},(0,i.Z)(t,u.o.Collection,"StoryMapCollection"),(0,i.Z)(t,u.o.Story,"StoryMap"),(0,i.Z)(t,u.o.Theme,"Theme"),t)[r]," ").concat(o)},d=function(e){var t,r=e.type,n=e.typeKeywords;return r===o.Cs&&(null===n||void 0===n?void 0:n.includes(o.fp))?u.o.Collection:(t={},(0,i.Z)(t,o.Cs,u.o.Story),(0,i.Z)(t,o.j3,u.o.Theme),t)[r]},l=function(e){return!!e&&s.B.includes(e)},m=function(){var e=(0,n.Z)((function(e,t){var r,n,i,o,s,u,c,d;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,null===t||void 0===t?void 0:t.getUser()];case 1:if(null===(r=a.sent())||void 0===r?void 0:r.groups){n=!0,i=!1,o=void 0;try{for(s=r.groups[Symbol.iterator]();!(n=(u=s.next()).done);n=!0)if((c=u.value).capabilities.includes("updateitemcontrol")&&(null===(d=e.groups)||void 0===d?void 0:d.includes(c.id)))return[2,!0]}catch(l){i=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}return[2,!1]}}))}));return function(t,r){return e.apply(this,arguments)}}()},44141:function(e,t,r){r.d(t,{Hy:function(){return o},OP:function(){return i},ds:function(){return a},mD:function(){return s},mb:function(){return u}});var n=r(53857),i=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:512,r=e.split(",")[0].split(":")[1].split(";")[0],n=atob(e.split(",")[1]),i=[],a=0;a<n.length;a+=t){for(var o=n.slice(a,a+t),s=new Array(o.length),u=0;u<o.length;u++)s[u]=o.charCodeAt(u);var c=new Uint8Array(s);i.push(c)}var d=new Blob(i,{type:r});return d},a=function(e){return new Blob([JSON.stringify(e)],{type:"application/json"})},o=function(e,t){var r="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),n=document.createElement("a");n.setAttribute("href",r),n.setAttribute("download",t+".json"),document.body.appendChild(n),n.click(),n.remove()},s=function(e,t){if(e&&!(e.lastIndexOf(".")<=0)){var r=null===t||void 0===t?void 0:t.split("/")[0],n=e.toLowerCase().split(".").pop();return"audio"===r&&"mp3"!==n&&"mpeg"!==n&&"wav"!==n&&"x-wav"===(n=null===t||void 0===t?void 0:t.slice(t.indexOf("/")+1))&&(n="wav"),n}},u=function(e){return e<5e5?n.VG.Common_Size_XSmall:e<1e6?n.VG.Common_Size_Small:e<5e6?n.VG.Common_Size_Medium:e<1e7?n.VG.Common_Size_Large:e<2e7?n.VG.Common_Size_XLarge:n.VG.Common_Size_XXLarge}}}]);