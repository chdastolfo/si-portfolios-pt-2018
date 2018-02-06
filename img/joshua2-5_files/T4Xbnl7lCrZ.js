if (self.CavalryLogger) { CavalryLogger.start_js(["+U8qt"]); }

__d("TimelineAppSectionConstants",[],(function a(b,c,d,e,f,g){f.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",likes_recent:null,info_all:"about",music_my_music:"music",music_favs:"music",music_playlists:"music",books_read:"books",books_favorite:"books",books_want:"books",recent_places:null,fitness_overview:"fitness",places_want:null,info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",music_radio:"music",info_history:null,recent_games:"games",products_want:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",video_movies_watch:"movies",video_tv_shows_watch:"tv",music_saved:"music",video_movies_want:"movies",video_tv_shows_want:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",friends_suggested:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",likes_sports:null,fitness_report:null,groups_member:"groups",music_heavy_rotation:"music",photos_album:"photos",likes_restaurants:"likes",likes_clothing:null,info_insights:null,apps_used:"games",games_play:"games",games_apps_saved:null,video_movies_suggestions:null,video_tv_shows_suggestions:null,books_suggestions:null,saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",places_saved:"map",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",sports_activities:null,saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",place_visits_by_place_tag:null,places_cities:"map",place_visits_by_city:null,topic_visit_counts:"map",place_visits_by_topic:null,place_visit_stories:null,places_map:"map",likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",places_cities_desktop:"map",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",photos_all_expanded:"photos",videos_by_user:"videos",videos_user_tagged:"videos",friends_map:"friends",videos_user_all:"videos",saved_posts:"saved",saved_photo_posts:"saved",saved_products:"saved",at_work_hr_info:null,friends_with_unseen_posts:"friends",groups_mutual:"groups",saved_profiles:"saved",work_followers:"friends",work_following:"friends",saved_messages:"saved",saved_lists:"saved",saved_fundraisers:"saved",video_playlists:"videos",saved_jobs:"saved",lists:"lists",list_contents:"lists",saved_group_posts:"saved",saved_offers:"saved",tasks_created:"tasks",tasks_assigned:"tasks",fun_fact_answers:"did_you_know",sharing_spaces:"post_sets",sharing_spaces_user_space:"post_sets",saved_asset3ds:"saved",sharing_spaces_user_space_followers:"post_sets",instant_games_spotlight:null,unknown_do_not_use_this:null,followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",apps:"games",videos_by:"videos",videos_of:"videos",post_set:"post_sets",post_set_followers:"post_sets"}}}),null);
__d("DoublyLinkedListMap",["idx"],(function a(b,c,d,e,f,g){__p&&__p();function h(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0}h.prototype.get=function(i){var j;"use strict";var k=(j=this._nodes[i])!=null?j.data:j;return k?k:null};h.prototype.getIndex=function(i){"use strict";var j=this._head;for(var k=0;j;j=j.next,k++)if(j.key===i)return k;return null};h.prototype._insert=function(i,j,k,l){"use strict";__p&&__p();if(k&&!this._nodes[k])k=null;var m=void 0;if(k&&this._nodes[k])m=this._nodes[k];else m=l?this._head:this._tail;var n={data:j,key:i,next:null,prev:null};if(m){this.remove(i);if(l){n.prev=m.prev;m.prev&&(m.prev.next=n);m.prev=n;n.next=m}else{n.next=m.next;m.next&&(m.next.prev=n);m.next=n;n.prev=m}}if(n.prev===null)this._head=n;if(n.next===null)this._tail=n;this._nodes[i]=n;this._nodeCount++;return this};h.prototype.insertBefore=function(i,j,k){"use strict";return this._insert(i,j,k,true)};h.prototype.insertAfter=function(i,j,k){"use strict";return this._insert(i,j,k,false)};h.prototype.prepend=function(i,j){"use strict";return this.insertBefore(i,j,this._head&&this._head.key)};h.prototype.append=function(i,j){"use strict";return this.insertAfter(i,j,this._tail&&this._tail.key)};h.prototype.remove=function(i){"use strict";__p&&__p();var j=this._nodes[i];if(j){var k=j.next,l=j.prev;k&&(k.prev=l);l&&(l.next=k);this._head===j&&(this._head=k);this._tail===j&&(this._tail=l);delete this._nodes[i];this._nodeCount--}return this};h.prototype.find=function(i){"use strict";for(var j=this._head;j;j=j.next)if(i(j.data))return j.key;return null};h.prototype.reduce=function(i,j){"use strict";for(var k=this._head;k;k=k.next)j=i(k.data,j);return j};h.prototype.exists=function(i){"use strict";return!!this._nodes[i]};h.prototype.isEmpty=function(){"use strict";return!this._head};h.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0};h.prototype.map=function(i){"use strict";for(var j=this._head;j;j=j.next)i(j.data)};h.prototype.getCount=function(){"use strict";return this._nodeCount};h.prototype.getHead=function(){var i;"use strict";return(i=this._head)!=null?i.data:i};h.prototype.getTail=function(){var i;"use strict";return(i=this._tail)!=null?i.data:i};h.prototype.getNext=function(i){var j;"use strict";return(j=this._nodes[i])!=null?(j=j.next)!=null?j.data:j:j};h.prototype.getPrev=function(i){var j;"use strict";return(j=this._nodes[i])!=null?(j=j.prev)!=null?j.data:j:j};f.exports=h}),null);
__d("ProfileOverviewSection",["CallbackDependencyManager","DOMScroll","DoublyLinkedListMap","TidyArbiterMixin","ge"],(function a(b,c,d,e,f,g){__p&&__p();var h=null,i=new(c("CallbackDependencyManager"))(),j={};function k(l,m,n){"use strict";__p&&__p();this.id=l;this.label=n;this.nodeID=m;this._isLoaded=false;this._parentSection=null;this.childSections=new(c("DoublyLinkedListMap"))();j[l]=this;setTimeout(function(){return i.satisfyPersistentDependency(l)},0)}k.prototype.reset=function(){"use strict";this.childSections.map(function(l){return l.reset()})};k.prototype.appendSection=function(l){"use strict";this.childSections.append(l.id,l);l._parentSection=this};k.prototype.freeze=function(){"use strict";this.freezeChildren()};k.prototype.freezeChildren=function(){"use strict";var l=this.childSections.getHead();while(l){!l.isActive()&&l.freeze();l=l.getNext()}};k.prototype.getParent=function(){"use strict";return this._parentSection};k.prototype.getChildren=function(){"use strict";return this.childSections};k.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id)};k.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id)};k.prototype.isActive=function(){"use strict";var l=this;while(l){if(l.id===h)return true;l=l._parentSection}return false};k.prototype.isLoaded=function(){"use strict";return this._isLoaded};k.prototype.setIsLoaded=function(l){"use strict";this._isLoaded=l;return this};k.prototype.scrollTo=function(){"use strict";if(!c("ge")(this.nodeID))return;c("DOMScroll").scrollTo(this.getNode(),true,false,false,0,c("DOMScroll").scrollTo.bind(this).bind(null,this.getNode(),0))};k.prototype.thaw=function(){"use strict";this.thawChildren()};k.prototype.thawChildren=function(){"use strict";var l=this.childSections.getHead();while(l){l.thaw();l=l.getNext()}};k.prototype.getNode=function(){"use strict";throw new Error("This function needs to be implemented in children.")};k.callWithSection=function(l,m){"use strict";i.registerCallback(function(){m(j[l])},[l])};k.setActiveSectionID=function(l){"use strict";h=l};k.resetGlobalState=function(){"use strict";h=null;i=new(c("CallbackDependencyManager"))();j={}};Object.assign(k,c("TidyArbiterMixin"));f.exports=k}),null);
__d("TimelineDrag",["ArbiterMixin","Event","Locale","Style","Vector","mixin"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("mixin")(c("ArbiterMixin")));i=h&&h.prototype;function j(k,l,m){"use strict";__p&&__p();i.constructor.call(this);m=m||{};this._listenOn=m.listenOn;this._offsetInput=l;this._defaultOffset=m.default_offset;this._killClicks=m.killClicks;this._vertical=true;this._RTLXSwitch=false;this.setPicture(k,m)}j.prototype.setPicture=function(k,l){"use strict";__p&&__p();if(!k)return false;l=l||{};this._picture=k;this._defaultOffset=l.default_offset;if(l.offsetInput)this._offsetInput=l.offsetInput;if(l.vertical!==undefined)this._vertical=l.vertical;if(l.height)this._containerHeight=l.height;if(l.width)this._containerWidth=l.width;if(this._vertical){this._offsetType="top";this._eventCoord="y"}else{this._RTLXSwitch=c("Locale").isRTL();this._offsetType="left";this._eventCoord="x"}if(this._picture.complete)this._initialLoad();else this._loadListener=c("Event").listen(this._picture,"load",function(){this._loadListener.remove();this._loadListener=null;this._initialLoad()}.bind(this))};j.prototype.destroy=function(){"use strict";this._stopDrag();this._saveOffset();this._mousedown&&this._mousedown.remove();this._mousedown=null;this._onclick&&this._onclick.remove();this._onclick=null;this._loadListener&&this._loadListener.remove();this._loadListener=null};j.prototype._initialLoad=function(){"use strict";__p&&__p();var k=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=c("Event").listen(k,"mousedown",this._onMouseDown.bind(this));if(this._vertical)this._maxOffset=this._containerHeight-this._picture.offsetHeight;else this._maxOffset=this._containerWidth-this._picture.offsetWidth;if(this._defaultOffset!==undefined)this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;if(this._killClicks)this._onclick=c("Event").listen(k,"click",this._onClick.bind(this));this._saveOffset()};j.prototype._onClick=function(event){"use strict";event.kill()};j.prototype._onMouseDown=function(event){"use strict";var k=parseInt(c("Style").get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=k-c("Vector").getEventPosition(event)[this._eventCoord];this._startDrag();event.kill()};j.prototype._startDrag=function(){"use strict";if(!this._dragStarted){this.inform("startdrag",this);this._dragTokens=[c("Event").listen(document.documentElement,"mouseup",this._onMouseUp.bind(this)),c("Event").listen(document.documentElement,"mousemove",this._onMouseMove.bind(this))];this._dragStarted=true}};j.prototype._saveOffset=function(){"use strict";var k=parseInt(c("Style").get(this._picture,this._offsetType),10);if(this._RTLXSwitch)this._offsetInput.value=k+this._containerWidth-this._picture.offsetWidth;else this._offsetInput.value=k};j.prototype._stopDrag=function(){"use strict";if(this._dragStarted){this.inform("stopdrag",this);this._dragStarted=false;this._dragTokens.forEach(function(k){k.remove()});this._saveOffset()}};j.prototype._onMouseUp=function(event){"use strict";this._stopDrag();event.kill()};j.prototype._setOffset=function(k){"use strict";if(this._RTLXSwitch)k=Math.max(0,Math.min(k,-this._maxOffset));else k=Math.min(0,Math.max(k,this._maxOffset));c("Style").set(this._picture,this._offsetType,k+"px")};j.prototype._onMouseMove=function(event){"use strict";this._setOffset(this._pictureStartDragOffset+c("Vector").getEventPosition(event)[this._eventCoord]);event.kill()};f.exports=j}),null);
__d("TimelineCover",["cx","fbt","Arbiter","Button","CSS","Dialog","DOM","DOMScroll","Event","FileInputUploader","Focus","HTML","PageTransitions","Parent","ReloadPage","Run","Style","TimelineDrag","$","ge","setImmediate","tidyEvent"],(function a(b,c,d,e,f,g,h,i){__p&&__p();function j(k,l,m){"use strict";__p&&__p();this.root=c("$")("fbProfileCover");if(typeof l==="object"){this._coverHeight=l.cover_height;this._coverWidth=l.cover_width;this.previewing=l.previewing;this._isLegacy=false}else{this._isLegacy=true;this._coverHeight=l;this.previewing=m}this._parentSection=c("Parent").byClass(this.root,"fbTimelineSection");this.cover=c("DOM").find(this.root,".cover");j.instance=this;this.editing=false;c("Run").onBeforeUnload(this.onBeforeUnload.bind(this));if(!this._parentSection)this._parentSection=c("Parent").byClass(this.root,"fbEventHeader");if(this.previewing)c("setImmediate")(function(){this.editMode();this.updateCoverImage(this.previewing)}.bind(this))}j.prototype.showLoadingIndicator=function(){"use strict";var k=c("ge")("fbCoverImageContainer");if(k)c("CSS").addClass(k,"opaquedLoading")};j.prototype.hideLoadingIndicator=function(){"use strict";var k=c("ge")("fbCoverImageContainer");if(k)c("CSS").removeClass(k,"opaquedLoading")};j.prototype.onBeforeUnload=function(){"use strict";if(this.isInEditMode())return i._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.")};j.prototype.isCoverImageVerticalFlow=function(k){"use strict";if(k===null||k===undefined)return true;return!k.style.height};j.prototype.editMode=function(){"use strict";__p&&__p();var k=c("DOM").find(this.root,"button.saveButton");c("Button").setEnabled(c("DOM").find(this.root,"button.cancelButton"),true);c("Button").setEnabled(k,true);this.hideLoadingIndicator();this._coverImage=c("DOM").scry(this.root,".coverImage")[0];if(this._coverImage){var l=c("DOM").scry(this._coverImage,".coverWrap")[0];if(l){var m=c("DOM").scry(l,".coverPhotoImg")[0];this._originalIsVertical=this.isCoverImageVerticalFlow(m);this._originalOffset=c("Style").get(m,this._originalIsVertical?"top":"left")}}c("CSS").addClass(this._parentSection,"fbEditCover");c("DOMScroll").scrollTo(this.root);if(this.previewing){c("DOM").remove(this._coverImage);c("CSS").show(this._coverImage)}if(this._coverImage){var n=c("DOM").scry(this._coverImage,".coverPhotoImg")[0];if(n)this._createDragger()}this.editing=true;c("Focus").set(k);c("Arbiter").inform("CoverPhotoEdit",{sender:this,state:"open"})};j.prototype._exitEditMode=function(){"use strict";__p&&__p();if(this._timelineDrag){this._timelineDrag.destroy();this._timelineDrag=null}c("DOM").find(this.root,"input.hiddenPhotoID").value=null;c("Button").setEnabled(c("DOM").find(this.root,"button.cancelButton"),false);c("Button").setEnabled(c("DOM").find(this.root,"button.saveButton"),false);c("CSS").removeClass(this._parentSection,"fbEditCover");this.hideLoadingIndicator();this.previewing=false;c("Arbiter").inform("CoverPhotoEdit",{sender:this,state:"closed"});this.editing=false};j.prototype._createDragger=function(k){"use strict";__p&&__p();var l=void 0,m=void 0;if(this._isLegacy){l=c("DOM").find(this.root,"input.photoOffsetInput");this._originalIsVertical=true}else{m=k===undefined?this._originalIsVertical:k;l=m?c("DOM").find(this.root,"input.photoOffsetYInput"):c("DOM").find(this.root,"input.photoOffsetXInput")}this._timelineDrag=new(c("TimelineDrag"))(c("DOM").scry(this.root,".coverImage .coverPhotoImg")[0],l,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:m,killClicks:true})};j.prototype.updateCoverImage=function(k,l){"use strict";__p&&__p();if(l)this.editMode();c("DOM").find(this.root,"input.hiddenPhotoID").value=k;c("Button").setEnabled(c("DOM").find(this.root,"button.saveButton"),true);if(l)c("DOM").replace(c("DOM").scry(this.root,".coverImage")[0],typeof l==="string"?c("HTML")(l):l);var m=c("DOM").scry(c("DOM").find(this.root,".coverImage"),".coverPhotoImg")[0],n=this.isCoverImageVerticalFlow(m),o=void 0;if(this._isLegacy)o=c("DOM").find(this.root,"input.photoOffsetInput");else o=n?c("DOM").find(this.root,"input.photoOffsetYInput"):c("DOM").find(this.root,"input.photoOffsetXInput");if(this._timelineDrag)this._timelineDrag.setPicture(m,{offsetInput:o,vertical:n});else this._createDragger(n);this._updateHeader()};j.prototype.cancelUpdate=function(){"use strict";this._reloadAfterNextUpdate=false;c("DOM").remove(c("DOM").scry(this.root,".coverImage")[0]);c("DOM").prependContent(this.cover,this._coverImage);if(this._originalOffset!==undefined)c("Style").set(c("DOM").scry(this._coverImage,".coverPhotoImg")[0],this._originalIsVertical?"top":"left",this._originalOffset);this._exitEditMode();this._updateHeader()};j.staticSaveComplete=function(){"use strict";j.getInstance().saveComplete()};j.prototype.saveComplete=function(){"use strict";__p&&__p();if(this._reloadAfterNextUpdate)c("ReloadPage").now();this._coverImage=c("DOM").scry(this.root,".coverImage")[0];var k=c("DOM").scry(this.root,"._3x7_")[0];if(k)c("CSS").removeClass(k,"_3x7_");this._exitEditMode();this._updateHeader();c("PageTransitions").rewriteCurrentURI(c("PageTransitions").getCurrentURI().getUnqualifiedURI(),c("PageTransitions").getCurrentURI().removeQueryData("preview_cover"))};j.prototype.isInEditMode=function(){"use strict";return this.editing};j.prototype._updateHeader=function(){"use strict";var k=c("DOM").scry(this.root,".coverImage")[0];if(!k)return;var l=c("CSS").hasClass(k,"coverNoImage"),m=c("CSS").hasClass(this._parentSection,"noCoverImage");if(l!==m)c("CSS").conditionClass(this._parentSection,"noCoverImage",l)};j.getInstance=function(){"use strict";return j.instance};j.staticUpdateCoverImage=function(k){"use strict";j.getInstance().updateCoverImage(null,k)};j.prototype.setupFileUpload=function(k,l,m){"use strict";__p&&__p();k.subscribe("change",function(){__p&&__p();var n=new(c("FileInputUploader"))(k.getInput()).setURI(l).setAllowCrossOrigin(true);n.subscribe("failure",function(){j.showErrorDialog(i._("Cover Upload Failed"),i._("Uploading the new cover picture failed. Please try again."))});n.subscribe(["success","failure"],function(){this.hideLoadingIndicator();k.clear();c("CSS").removeClass(k.getControl(),m);k.getInput().disabled=false}.bind(this));this.showLoadingIndicator();this._reloadAfterNextUpdate=true;n.send();c("CSS").addClass(k.getControl(),m);k.getInput().disabled=true}.bind(this))};j.setupFileUpload=function(k,l,m){"use strict";this.getInstance().setupFileUpload(k,l,m)};j.imageUploadDone=function(k,l){"use strict";this.getInstance().updateCoverImage(k,l)};j.showErrorDialog=function(k,l){"use strict";new(c("Dialog"))().setTitle(k).setButtons(c("Dialog").OK).setBody(l).setSemiModal(true).show();this.getInstance()&&this.getInstance().hideLoadingIndicator()};j.initFileUploadMenu=function(k){"use strict";j.showLoadingAfterFileUpload(k.getForm())};j.showLoadingAfterFileUpload=function(k){"use strict";c("tidyEvent")(k.subscribe("submit",function(){j.getInstance().showLoadingIndicator()}))};j.instance=null;f.exports=j}),null);
__d("legacy:TimelineCover",["TimelineCover"],(function a(b,c,d,e,f,g){b.TimelineCover=c("TimelineCover")}),3);
__d("TimelineSmartInsert",["Run","UserAgent_DEPRECATED","Vector"],(function a(b,c,d,e,f,g){__p&&__p();var h=100;function i(o){if(o==="viewport")return c("Vector").getViewportDimensions().y;return o}var j=false,k=false;function l(){if(k)return;c("Run").onLeave(m);k=true}function m(){j=false;k=false}var n={run:function o(p,q,r){__p&&__p();l();if(!j||c("UserAgent_DEPRECATED").ie()<=8){q();return}var s=p.offsetHeight;q();var t=p.offsetHeight,u=c("Vector").getScrollPosition().y,v=c("Vector").getElementPosition(p).y;if(t!==s&&v<u&&v+s<u+i(r||h))window.scrollBy(0,t-s)},enable:function o(){j=true}};f.exports=n}),null);
__d("TimelineURI",["BizSiteIdentifier.brands","BusinessURI.brands","ProfileTabConst","TimelineAppSectionConstants","URI","goURI"],(function a(b,c,d,e,f,g){__p&&__p();var h={parseURI:function i(j){__p&&__p();j=new(c("URI"))(j);var k=j.getQueryData(),l=j.getPath(),m=l.split("/").slice(1);if(m[0]=="people"||m[0]=="pages")m=m.slice(2);var n=k.sk||m[1]||c("ProfileTabConst").TIMELINE;if(n==c("ProfileTabConst").WALL)n=c("ProfileTabConst").TIMELINE;var o=null,p=null;if(n==c("ProfileTabConst").TIMELINE){p=parseInt(m[2],10)||null;o=parseInt(m[3],10)||null}return{path:l,id:k.id||m[0],key:n,viewas:k.viewas?k.viewas:"0",filter:k.filter?k.filter:null,year:p,month:o,friendship:!!k.and}},goToProfileID:function i(j){if(c("BizSiteIdentifier.brands").isBizSite())c("goURI")(c("BusinessURI.brands")("/profile.php").addQueryData("id",j),true);else c("goURI")(new(c("URI"))("/"+j),true)},getTabKeyFromURI:function i(j){var k=h.getSectionKeyFromURI(j);return c("TimelineAppSectionConstants").collectionTabKeyToAppTabKey[k]||k},getSectionKeyFromURI:function i(j){return j.getQueryData().sk||j.getPath().split("/")[2]||c("ProfileTabConst").TIMELINE},getVanityFromURI:function i(j){var k=j.getQueryData().id;return k||j.getPath().split("/")[1]},isVideoPermalink:function i(j){return h.getTabKeyFromURI(j)===c("ProfileTabConst").VIDEOS&&j.getPath().split("/").filter(function(k){return!!k}).length>2}};f.exports=h}),null);