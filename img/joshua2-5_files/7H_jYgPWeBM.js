if (self.CavalryLogger) { CavalryLogger.start_js(["VfB\/\/"]); }

__d("XReactComposerListAttachmentBootstrapController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/react_composer/list/bootstrap/",{composer_id:{type:"String",required:true},composer_type:{type:"Enum",required:true,enumType:1},target_id:{type:"String",required:true}})}),null);
__d("ReactComposerListLazyAttachment.react",["ActorURI","Bootloader","React","ReactComposerAttachmentType","ReactComposerBootloaderPropTypes","ReactComposerLoadableAttachmentBodyMixin","XReactComposerListAttachmentBootstrapController"],(function a(b,c,d,e,f,g){var h=c("React").PropTypes,i=c("React").createClass({displayName:"ReactComposerListLazyAttachment",mixins:[c("ReactComposerLoadableAttachmentBodyMixin")],statics:{attachmentID:c("ReactComposerAttachmentType").LIST},propTypes:{selected:h.bool,bootload:h.func,bootloader:c("ReactComposerBootloaderPropTypes")},bootload:function j(k){if(this.props.bootload)this.props.bootload(k);else if(this.props.bootloader&&this.props.bootloader.listAttachment)this.props.bootloader.listAttachment(k);else c("Bootloader").loadModules(["ReactComposerListAttachmentContainer.react","ReactComposerListPostButtonContainer.react"],k,"ReactComposerListLazyAttachment.react")},getBootstrapURI:function j(){return c("ActorURI").create(c("XReactComposerListAttachmentBootstrapController").getURIBuilder().setString("composer_id",this.context.composerID).setEnum("composer_type",this.context.composerType).setString("target_id",this.context.targetID).getURI(),this.context.actorID)}});f.exports=i}),null);
__d("ReactComposerSproutsLiveVideoSelector.react",["ix","fbt","React","ReactComposerAttachmentType","ReactComposerLoggingName","ReactComposerSproutsSelector.react","fbglyph"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.defaultProps={onSelected:function r(){}},n}l.prototype.render=function(){return c("React").createElement(c("ReactComposerSproutsSelector.react"),{attachmentID:c("ReactComposerAttachmentType").LIVE_VIDEO,loggingName:c("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR,icon:h("123206"),label:i._("Live Video"),onSelected:this.props.onSelected,dataTestID:"react-composer-live-video-selector-react"})};f.exports=l}),null);
__d("ReactComposerSproutsLiveVideoDialogSelector.react",["Arbiter","Bootloader","React","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerConfig","ReactComposerContextConfig","ReactComposerEvents","ReactComposerLoggingName","ReactComposerSproutsLiveVideoSelector.react"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.$ReactComposerSproutsLiveVideoDialogSelector1=function(){c("ReactComposerAttachmentActions").selectAttachment(this.props.contextConfig.composerID,c("ReactComposerAttachmentType").LIVE_VIDEO,true,c("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR);setTimeout(function(){return c("Arbiter").inform(c("ReactComposerEvents").ACTIVATE_ATTACHMENT+this.props.contextConfig.composerID)}.bind(this),0);c("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(p){return p.startPreviewUI(this.props.contextConfig,this.props.config)}.bind(this),"ReactComposerSproutsLiveVideoDialogSelector.react")}.bind(this),l}j.prototype.render=function(){return c("React").createElement(c("ReactComposerSproutsLiveVideoSelector.react"),{onSelected:this.$ReactComposerSproutsLiveVideoDialogSelector1})};f.exports=j}),null);
__d("ReactComposerSproutsPostToGroupsSelector.react",["ix","cx","fbt","React","ReactComposerGroupSelectorTabContainerGatedModule","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("ReactComposerGroupSelectorTabContainerGatedModule").module;k=babelHelpers.inherits(n,c("React").Component);l=k&&k.prototype;n.prototype.render=function(){if(m){var o=j._("Post to Group"),p=h("123072");return c("React").createElement("span",{key:"group_selector",className:"_sg1"},c("React").createElement(m,{label:o,icon:p}))}return null};function n(){k.apply(this,arguments)}f.exports=n}),null);
__d("ReactFeedSproutsComposerX.react",["cx","Arbiter","BootloadedComponent.react","Bootloader","JSResource","LitestandComposer","React","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerAudienceSelectorLazyAttachmentGatedModule","ReactComposerAudienceSelectorNextButtonContainerGatedModule","ReactComposerBodyContainer.react","ReactComposerContextProviderMixin","ReactComposerEvents","ReactComposerFeedMediaPostButtonContainer.react","ReactComposerFeedPostButtonContainer.react","ReactComposerGroupSearchTypeaheadContainerGatedModule","ReactComposerGroupSelectorTabContainerGatedModule","ReactComposerHeaderContainer.react","ReactComposerListLazyAttachment.react","ReactComposerLiveVideoLazyAttachment.react","ReactComposerLiveVideoPreviewButton.react","ReactComposerLoggingName","ReactComposerSproutsMediaSelector.react","ReactComposerMediaEagerAttachment.react","ReactComposerPlaceListLazyAttachment.react","ReactComposerQAndALazyAttachment.react","ReactComposerSharingSpacesSelectorAttachmentGatedModule","ReactComposerSproutsAlbumSelector.react","ReactComposerSproutsLiveVideoDialogSelector.react","ReactComposerSproutsPostToGroupsSelector.react","ReactComposerSproutsQAndASelector.react","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerStatusEagerAttachment.react","ReactComposerTaggerActions","ReactComposerTaggerType","ReactComposerWithSprouts.react","ReactComposerVisualPollLazyAttachment.react","ifRequired"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("ReactComposerAudienceSelectorLazyAttachmentGatedModule").module,l=c("ReactComposerAudienceSelectorNextButtonContainerGatedModule").module,m=c("ReactComposerGroupSearchTypeaheadContainerGatedModule").module,n=c("ReactComposerGroupSelectorTabContainerGatedModule").module,o=c("ReactComposerSharingSpacesSelectorAttachmentGatedModule").module;i=babelHelpers.inherits(p,c("React").Component);j=i&&i.prototype;p.prototype.getChildContext=function(){"use strict";return c("ReactComposerContextProviderMixin").staticGetChildContext(this.props)};p.prototype.componentDidMount=function(){"use strict";__p&&__p();c("LitestandComposer").initComposer(this.props.contextConfig.composerID);var q=this.props.prefillConfig;if(q&&q.selectedAttachment){c("ReactComposerAttachmentActions").selectAttachment(this.props.contextConfig.composerID,q.selectedAttachment,q.shouldActivateSelectedAttachment,q.loggingName,null,q.proxiedAttachmentID);if(q.shouldActivateSelectedAttachment)c("Arbiter").inform(c("ReactComposerEvents").ACTIVATE_ATTACHMENT+this.props.contextConfig.composerID)}if(q&&q.selectedTagger)c("ReactComposerTaggerActions").selectTagger(this.props.contextConfig.composerID,c("ReactComposerLoggingName").OTHERS,q.selectedTagger)};p.prototype.render=function(){"use strict";var q=this.props.prefillConfig,r=this.$ReactFeedSproutsComposerX1(),s=r[0],t=r[1];return c("React").createElement(c("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:c("ReactComposerAttachmentType").STATUS,innerProps:{className:"_5n2b",loggingConfig:this.props.config.loggingConfig,sproutsConfig:this.props.config.sproutsConfig,promotedSprout:this.props.config.sproutsPromotionConfig?this.props.config.sproutsPromotionConfig.sprout:null},expandOnInit:q&&q.expandSproutsOnInit},c("React").createElement(c("ReactComposerHeaderContainer.react"),this.props,s),this.$ReactFeedSproutsComposerX2(),this.$ReactFeedSproutsComposerX3(),c("React").createElement(c("ReactComposerBodyContainer.react"),{expanded:this.props.config.showExpandedComposer},t))};p.prototype.$ReactFeedSproutsComposerX4=function(){"use strict";__p&&__p();var q=this.props.config.attachmentsConfig,r=[];if(q[c("ReactComposerAttachmentType").STATUS].enabled){var s=[];if(!q[c("ReactComposerAttachmentType").LIVE_VIDEO].enabled)s.push(c("ReactComposerAttachmentType").LIVE_VIDEO);r.push(c("React").createElement(c("ReactComposerSproutsStatusAndMediaSelector.react"),{key:c("ReactComposerLoggingName").STATUS_TAB_SELECTOR,alternativeAttachmentIDs:s,label:q[c("ReactComposerAttachmentType").STATUS].defaultTabTitle,statusOnly:this.props.contextConfig.gks&&this.props.contextConfig.gks.photoTab}));if(n)r.push(c("React").createElement(c("ReactComposerSproutsPostToGroupsSelector.react"),{key:c("ReactComposerLoggingName").GROUP_SELECTOR}))}if(this.props.contextConfig.gks&&this.props.contextConfig.gks.photoTab)r.push(c("React").createElement(c("ReactComposerSproutsMediaSelector.react"),{key:c("ReactComposerLoggingName").MEDIA_TAB_SELECTOR,config:this.props.config}));var t=this.props.contextConfig.gks&&this.props.contextConfig.gks.hideAlbumTab;if(q[c("ReactComposerAttachmentType").ALBUM].enabled&&!t){var u=this.props.contextConfig.gks&&this.props.contextConfig.gks.albumTabUsesSelector;r.push(c("React").createElement(c("ReactComposerSproutsAlbumSelector.react"),{key:c("ReactComposerLoggingName").ALBUM,config:this.props.config,useCollectionSelector:u}))}if(q[c("ReactComposerAttachmentType").LIVE_VIDEO].enabled)r.push(c("React").createElement(c("ReactComposerSproutsLiveVideoDialogSelector.react"),{key:c("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR,contextConfig:this.props.contextConfig,config:this.props.config}));if(q[c("ReactComposerAttachmentType").QANDA].enabled)r.push(c("React").createElement(c("ReactComposerSproutsQAndASelector.react"),{key:c("ReactComposerLoggingName").QANDA_TAB_SELECTOR}));return r};p.prototype.$ReactFeedSproutsComposerX1=function(){"use strict";__p&&__p();var q=this.$ReactFeedSproutsComposerX4(),r=[];r.push(this.$ReactFeedSproutsComposerX5());r.push(this.$ReactFeedSproutsComposerX6());r.push(this.$ReactFeedSproutsComposerX7());var s=this.$ReactFeedSproutsComposerX8();if(s)r.push(s);var t=this.$ReactFeedSproutsComposerX9();if(t)r.push(t);var u=this.$ReactFeedSproutsComposerX10();if(u)r.push(u);var v=this.$ReactFeedSproutsComposerX11();if(v)r.push(v);var w=this.$ReactFeedSproutsComposerX12();if(w)r.push(w);var x=this.$ReactFeedSproutsComposerX13();if(x)r.push(x);r.push();return[q,r]};p.prototype.$ReactFeedSproutsComposerX5=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").STATUS,r=this.props.config.attachmentsConfig[c("ReactComposerAttachmentType").STATUS].placeholderText;return c("React").createElement(c("ReactComposerStatusEagerAttachment.react"),{key:"status",config:this.props.config,prefillConfig:this.props.prefillConfig,selected:q,postButtonModule:l?l:c("ReactComposerFeedPostButtonContainer.react"),placeholder:r})};p.prototype.$ReactFeedSproutsComposerX6=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").MEDIA;return c("React").createElement(c("ReactComposerMediaEagerAttachment.react"),{key:"media",config:this.props.config,postButtonModule:l?l:c("ReactComposerFeedMediaPostButtonContainer.react"),selected:q})};p.prototype.$ReactFeedSproutsComposerX11=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").LIST;return c("ReactComposerListLazyAttachment.react")?c("React").createElement(c("ReactComposerListLazyAttachment.react"),{key:c("ReactComposerAttachmentType").LIST,config:this.props.config,selected:q}):null};p.prototype.$ReactFeedSproutsComposerX10=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").VISUAL_POLL;return c("ReactComposerVisualPollLazyAttachment.react")?c("React").createElement(c("ReactComposerVisualPollLazyAttachment.react"),{key:c("ReactComposerAttachmentType").VISUAL_POLL,config:this.props.config,selected:q}):null};p.prototype.$ReactFeedSproutsComposerX7=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").LIVE_VIDEO;return c("React").createElement(c("ReactComposerLiveVideoLazyAttachment.react"),{key:"live_video",config:this.props.config,postButtonModule:c("ReactComposerLiveVideoPreviewButton.react"),selected:q})};p.prototype.$ReactFeedSproutsComposerX9=function(){"use strict";if(!this.props.config.attachmentsConfig[c("ReactComposerAttachmentType").QANDA].enabled)return null;return c("React").createElement(c("ReactComposerQAndALazyAttachment.react"),{key:"qanda",config:this.props.config})};p.prototype.$ReactFeedSproutsComposerX12=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").AUDIENCE_SELECTOR;return k?c("React").createElement(k,{key:"audience_selector",config:this.props.config,selected:q}):null};p.prototype.$ReactFeedSproutsComposerX13=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").SHARING_SPACES_SELECTOR;if(q)c("ifRequired")("ReactComposerCollectionsStore",function(r){r.loadCollections(this.props.contextConfig.composerID)}.bind(this));return o?c("React").createElement(o,{config:this.props.config,key:"sharingSpacesSelectorAttachment",selected:q}):null};p.prototype.$ReactFeedSproutsComposerX8=function(){"use strict";var q=this.$ReactFeedSproutsComposerX14()===c("ReactComposerAttachmentType").PLACE_LIST;return c("ReactComposerPlaceListLazyAttachment.react")?c("React").createElement(c("ReactComposerPlaceListLazyAttachment.react"),{key:c("ReactComposerAttachmentType").PLACE_LIST,config:this.props.config,bootload:function r(s){return c("Bootloader").loadModules(["ReactFeedComposerPlaceListAttachmentContainer.react","ReactComposerPlaceListPostButtonContainer.react"],s,"ReactFeedSproutsComposerX.react")},selected:q}):null};p.prototype.$ReactFeedSproutsComposerX2=function(){"use strict";return m?c("React").createElement(m,null):null};p.prototype.$ReactFeedSproutsComposerX3=function(){"use strict";var q=this.props.config.taggersConfig;if(q&&q[c("ReactComposerTaggerType").FUN_FACT]&&q[c("ReactComposerTaggerType").FUN_FACT].enabled){var r=q[c("ReactComposerTaggerType").FUN_FACT];return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("ReactComposerFunFactSinglePromptTaggerContainer.react").__setRef("ReactFeedSproutsComposerX.react"),bootloadPlaceholder:c("React").createElement("div",null),pinnedPromptID:this.props.contextConfig.extraConfig&&this.props.contextConfig.extraConfig.funFactPromptID,showAskFriendTab:r.singlePromptWithAsk})}return null};p.prototype.$ReactFeedSproutsComposerX14=function(){"use strict";var q=this.props.prefillConfig;return q&&q.selectedAttachment?q.selectedAttachment:c("ReactComposerAttachmentType").STATUS};function p(){"use strict";i.apply(this,arguments)}p.childContextTypes=c("ReactComposerContextProviderMixin").childContextTypes;f.exports=p}),null);
__d("ReactFeedSproutsComposerXBootloader",["csx","Arbiter","AsyncRequest","Bootloader","CSS","DOM","Event","PUWMethods","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerEvents","ReactComposerInit","ReactComposerLoggingName","ReactComposerPrefillUtils","ReactComposerPromptsStore","ReactComposerTaggerActions","ReactComposerTaggerType","ReactFeedSproutsComposerX.react","ReactInputSelection","Run","SubscriptionsHandler","XReactComposerLoggingODSController","$","ge","getActiveElement","ifRequired"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=void 0,j={_inputDOMs:[],_fileInputSubscriptions:c("SubscriptionsHandler"),_prefillSubscription:null,bootload:function k(l,m){var n=c("$")("feedx_sprouts_container"),o=c("DOM").find(n,"._559p"),p=c("CSS").hasClass(o,"async_saving");if(p){i=new(c("SubscriptionsHandler"))();i.addSubscriptions(c("Event").listen(o,"success",function(){this._bootloadImpl(l,n,m)}.bind(this)),c("Event").listen(o,"error",function(){this._bootloadImpl(l,n,m)}.bind(this)))}else this._bootloadImpl(l,n,m);c("Run").onLeave(this._cleanup.bind(this))},_bootloadImpl:function k(l,m,n){__p&&__p();n.config.audienceXHP=this._getXHPToReactNode(m,"._ej0");var o=c("DOM").scry(m,"._16ve")[0],p=this._handlePendingMediaUploads(l,m,n,o),q=this._determineActiveAttachment(m,p),r=false;c("ifRequired")("ReactFeedSproutsComposerXBody",function(t){__p&&__p();var u=t.getDroppedFiles();if(u.length>0){r=true;var v=t.getDroppedAsset3DFile();if(v){q=c("ReactComposerAttachmentType").STATUS;c("ReactComposerTaggerActions").setTaggerData(l,c("ReactComposerLoggingName").ASSET_3D,c("ReactComposerTaggerType").ASSET_3D,{file:v})}else{q=c("ReactComposerAttachmentType").MEDIA;this._uploadExistingFiles(u,l,n)}t.clearDroppedFiles()}t.setOnFilesDropCallback(function(){c("ReactComposerAttachmentActions").selectAttachment(l,c("ReactComposerAttachmentType").MEDIA,true,c("ReactComposerLoggingName").MEDIA_SPROUT);this._uploadExistingFiles(t.getDroppedFiles(),l,n);t.clearDroppedFiles()}.bind(this))}.bind(this));var s=o.getAttribute("data-selected-sprout-id");n.prefillConfig=Object.assign(n.prefillConfig,this._appendPrefillConfig(m,l,q,q==c("ReactComposerAttachmentType").SHARING_SPACES_SELECTOR?c("ReactComposerAttachmentType").STATUS:null,s,r));if(n.prefillConfig){this._prefillSubscription=c("Arbiter").subscribeOnce(c("ReactComposerEvents").SET_PREFILL_DATA+l,function(){this._initComposer(n,m,l)}.bind(this));c("ReactComposerPrefillUtils").prefill(l,n.prefillConfig)}else this._initComposer(n,m,l)},_handlePendingMediaUploads:function k(l,m,n,o){__p&&__p();var p=false,q=n.contextConfig.gks.photoTab?c("DOM").scry(m,'input[name="composer_photo[]"]'):c("DOM").scry(o,'input[name="composer_photo[]"]');this._subscriptions=new(c("SubscriptionsHandler"))();q.forEach(function(r){__p&&__p();if(r){this._inputDOMs.push(r);this._subscriptions.addSubscriptions(c("Event").listen(r,"change",function(s){var r=s.target;if(r.files&&r.files.length>0){this._uploadExistingFiles(r.files,l,n);c("ReactComposerAttachmentActions").selectAttachment(l,c("ReactComposerAttachmentType").MEDIA,true,c("ReactComposerLoggingName").MEDIA_SPROUT)}}.bind(this)));if(r.files&&r.files.length>0){p=true;this._uploadExistingFiles(r.files,l,n)}}}.bind(this));return p},_determineActiveAttachment:function k(l,m){if(c("CSS").matchesSelector(c("DOM").find(l,"._1cx1"),"._2-q9"))return c("ReactComposerAttachmentType").SHARING_SPACES_SELECTOR;if(m)return c("ReactComposerAttachmentType").MEDIA;var n=c("DOM").scry(l,"._5qtn")[0];if(n&&n.getAttribute("data-attachment-type")===c("ReactComposerAttachmentType").LIVE_VIDEO)return c("ReactComposerAttachmentType").LIVE_VIDEO;return c("ReactComposerAttachmentType").STATUS},_initComposer:function k(l,m,n){c("ReactComposerInit").init(c("ReactFeedSproutsComposerX.react"),l,m);var o=c("XReactComposerLoggingODSController").getURIBuilder().setString("event","bootload_done").setEnum("composer_type",l.contextConfig.composerType).getURI();new(c("AsyncRequest"))(o).send();i&&i.release();c("Arbiter").inform("ReactFeedComposerXBootloader/bootload/"+n,l)},_appendPrefillConfig:function k(l,m){var n=arguments.length<=2||arguments[2]===undefined?c("ReactComposerAttachmentType").STATUS:arguments[2],o=arguments.length<=3||arguments[3]===undefined?null:arguments[3],p=arguments.length<=4||arguments[4]===undefined?null:arguments[4],q=arguments.length<=5||arguments[5]===undefined?false:arguments[5],r=c("DOM").find(l,"._3en1"),s=c("getActiveElement")()==r||c("CSS").hasClass(c("DOM").find(l,".focus_target"),"child_was_focused"),t=c("ge")("pagelet_composer")||c("ge")("content")||document,u=c("DOM").scry(t,"._1b3n").length!=0,v=c("CSS").matchesSelector(c("DOM").find(l,"._1cx1"),"._4qr4"),w={text:r.value},x=c("ReactComposerPromptsStore").getMinutiaeData(m),y=p;return{mentionsInput:{textWithEntities:w,selection:c("ReactInputSelection").getSelection(r)},selectedAttachment:q||u?n:undefined,shouldActivateSelectedAttachment:q||(s||!!x)&&!y,proxiedAttachmentID:o,taggersData:x,selectedTagger:y,expandSproutsOnInit:v}},_getXHPToReactNode:function k(l,m){var n=c("DOM").scry(l,m);if(n.length===0)return null;var o=n[0],p=o.cloneNode(true);o.parentNode.replaceChild(p,o);return o},_uploadExistingFiles:function k(l,m,n){var o=n.config.attachmentsConfig[c("ReactComposerAttachmentType").MEDIA];c("Bootloader").loadModules(["ReactComposerMediaUtils","ReactComposerPhotoUploader"],function(p,q){p.uploadPhotosOrVideo(m,Array.prototype.slice.call(l),new q(n.contextConfig,o.photoLimit,{disableFaceRecognition:o.disableFaceboxTagger}),n.config.targetData.targetSupportsMultiplePhotos,c("PUWMethods").FILE_SELECTOR,n.config.targetData.targetSupportsMultiMedia,o)},"ReactFeedSproutsComposerXBootloader")},_cleanup:function k(){this._subscriptions.release();for(var l=0;l<this._inputDOMs.length;l++)delete this._inputDOMs[l];delete this._inputDOMs;this._inputDOMs=[];this._prefillSubscription&&this._prefillSubscription.unsubscribe();this._prefillSubscription=null;c("ifRequired")("ReactFeedSproutsComposerXBody",function(m){m.cleanup()})}};f.exports=j}),null);