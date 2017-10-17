YUI.add("moodle-atto_wiris-button",function(e,t){e.namespace("M.atto_wiris").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_lang:"en",initializer:function(t){if(!t.filter_enabled)return;this._platform_version=t.platform_version;if(this._serviceAvailable(t.url_status)==0){this._notify("error_connection");return}this._lang=t.lang,window._wrs_int_langCode=t.lang,window.wrs_int_notifyWindowClosed=function(){window._wrs_int_popup=null,window._wrs_temporalImage=null,window._wrs_isNewElement=!0},window.wrs_int_updateFormula=function(e,t){var n=window._wrs_int_currentPlugin.get("host").editor.getDOMNode();wrs_updateFormula(n,window,e,null,t,_wrs_int_currentPlugin._lang),window._wrs_int_currentPlugin.markUpdated(),window._wrs_int_currentPlugin._updateEditorImgHandlers()},window.wrs_int_updateCAS=function(e,t,n,r){var i=window._wrs_int_currentPlugin.get("host").editor.getDOMNode();wrs_updateCAS(i,window,e,t,n,r),window._wrs_int_currentPlugin.markUpdated(),window._wrs_int_currentPlugin._updateCasImgHandlers()},window._wrs_int_conf_file=M.cfg.wwwroot+"/filter/wiris/integration/configurationjs.php",window._wrs_int_conf_path=M.cfg.wwwroot+"/lib/editor/atto/plugins/wiris",window._wrs_int_conf_async=!0,window._wrs_int_popup=window._wrs_int_popup||null,window._wrs_int_coreLoading=window._wrs_int_coreLoading||!1,window._wrs_int_path=window._wrs_int_conf_file.split("/"),window._wrs_int_path.pop(),window._wrs_int_path=window._wrs_int_path.join("/"),window._wrs_int_path=window._wrs_int_path.indexOf("/")===0||window._wrs_int_path.indexOf("http")===0?window._wrs_int_path:window._wrs_int_conf_path+"/"+window._wrs_int_path,window._wrs_isMoodle24=!0,window._wrs_int_customEditors={chemistry:{name:"Chemistry",toolbar:"chemistry",icon:"chem.gif",enabled:!1,confVariable:"_wrs_conf_chemEnabled",title:"WIRIS EDITOR chemistry"}},window._wrs_int_coreLoading||(window._wrs_int_coreLoading=!0,e.Get.js(window._wrs_int_conf_path+"/core/core.js",function(e){e}));var n=this.get("host"),r=this;window._wrs_int_currentPlugin=this,window._wrs_int_editors_elements=typeof window._wrs_int_editors_elements=="undefined"?{}:window._wrs_int_editors_elements,n.on("change",function(e){r._unparseContent()}),n._wirisUpdateFromTextArea=n.updateFromTextArea,n.updateFromTextArea=function(){n._wirisUpdateFromTextArea(),r._parseContent()},this._parseContent(),this._addButtons();var i=n.textarea.ancestor("form");i&&i.on("submit",this._submitClean,this)},_submitClean:function(){var e=this.get("host"),t=e.editor.get("innerHTML");e.textarea.set("value",wrs_endParse(t,null,this._lang,!0))},_addButtons:function(){if(window._wrs_conf_plugin_loaded){window._wrs_conf_editorEnabled&&this.addButton({title:"wiris_editor_title",buttonName:"wiris_editor",icon:"formula",iconComponent:"atto_wiris",callback:this._editorButton}),window[_wrs_int_customEditors.chemistry.confVariable]&&this.addButton({title:"wiris_chem_editor_title",buttonName:"wiris_chem_editor",icon:"chem",iconComponent:"atto_wiris",callback:this._chemEditorButton}),window._wrs_conf_CASEnabled&&this.addButton({title:"wiris_cas_title",buttonName:"wiris_cas",icon:"cas",iconComponent:"atto_wiris",callback:this._casButton});var t=this.get("host");t.plugins.collapse&&t.plugins.collapse._setVisibility(t.plugins.collapse.buttons.collapse)}else e.later(50,this,this._addButtons)},_editorButton:function(){if(_wrs_int_popup)_wrs_int_popup.focus();else{var e=!1;this._connectEditor(e)}},_chemEditorButton:function(){if(_wrs_int_popup)_wrs_int_popup.focus();else{var e=!0;this._connectEditor(e)}},_casButton:function(){if(_wrs_int_popup)_wrs_int_popup.focus();else{var e=this.get("host");_wrs_int_currentPlugin=this,_wrs_int_popup=wrs_openCASWindow(e.editor.getDOMNode(),!1,this._lang)}},_parseContent:function(){if(window._wrs_conf_plugin_loaded){var t=this.get("host"),n=t.editor.get("innerHTML");n=wrs_initParse(n,this._lang),t.editor.set("innerHTML",n),this.markUpdated(),this._updateCasImgHandlers(),this._updateEditorImgHandlers()}else e.later(50,this,this._parseContent)},_unparseContent:function(){if(window._wrs_conf_plugin_loaded){var t=this.get("host"),n=t.textarea.get("value");n=wrs_mathmlDecode(wrs_endParse(n,null,this._lang,!0)),t.textarea.set("value",n)}else e.later(50,this,this._unparseContent)},_handleElementDoubleclick:function(e,t,n){if(t.dataset.mathml){n.stopPropagation(),window._wrs_temporalImage=t,window._wrs_isNewElement=!1;var r=window._wrs_temporalImage.getAttribute("data-custom-editor");typeof r!="undefined"&&r&&window[_wrs_int_customEditors[r].confVariable]&&wrs_int_enableCustomEditor(r),window._wrs_int_editors_elements[e.id]._editorButton()}},_handleCasDoubleClick:function(e){window._wrs_temporalImage=e.currentTarget.getDOMNode(),window._wrs_isNewElement=!1,this._casButton(),e.stopPropagation()},_updateEditorImgHandlers:function(){wrs_addElementEvents(this.get("host").editor.getDOMNode(),this._handleElementDoubleclick),window._wrs_int_editors_elements[this.get("host").editor.getDOMNode().id]=this},_updateCasImgHandlers:function(){this.editor.all("img.Wiriscas").each(function(e){e.detachAll("dblclick"),e.on("dblclick",this._handleCasDoubleClick,this)},this)},_serviceAvailable:function(e){var t=new XMLHttpRequest;t.open("GET",e,!1);try{t.send()}catch(n){return t.abort(),!1}return t.status==200?(t.abort(),!0):(t.abort(),!1)},_connectEditor:function(e){var t=this.get("host");wrs_int_currentPlugin=this,e==1?wrs_int_enableCustomEditor("chemistry"):wrs_int_enableCustomEditor(),_wrs_int_popup=wrs_openEditorWindow(this._lang,t.editor.getDOMNode(),!1)},_notify:function(e){this._platform_version>2016052300&&require(["core/notification"],function(t){t.addNotification({message:M.util.get_string(e,"atto_wiris"),type:"danger"})})}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","get"]});
