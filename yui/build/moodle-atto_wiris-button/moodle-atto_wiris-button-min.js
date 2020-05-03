YUI.add("moodle-atto_wiris-button",function(e,t){e.namespace("M.atto_wiris").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(t){if(!t.filter_enabled)return;e.Get.js(M.cfg.wwwroot+"/lib/editor/atto/plugins/wiris/core.js?v="+t.version,function(e){if(!e){AttoIntegration=function(e){WirisPlugin.IntegrationModel.call(this,e),this.config=e.config},AttoIntegration.prototype=Object.create(WirisPlugin.IntegrationModel&&WirisPlugin.IntegrationModel.prototype),AttoIntegration.prototype.getPath=function(){return M.cfg.wwwroot+"/lib/editor/atto/plugins/wiris"},AttoIntegration.prototype.getLanguage=function(){return this.config.lang},AttoIntegration.prototype.doubleClickHandler=function(e,t){var n=e.classList.contains("Wirisformula");n&&(t.stopPropagation(),WirisPlugin.IntegrationModel.prototype.doubleClickHandler.call(this,e,t))},AttoIntegration.prototype.updateFormula=function(e){WirisPlugin.IntegrationModel.prototype.updateFormula.call(this,e);var t=this.editorObject.get("host"),n=t.textarea.get("value"),r=this.convertSafeMathml(WirisPlugin.Parser.endParse(n,null,this.config.lang,!0));t.textarea.set("value",r),this.editorObject.markUpdated()},AttoIntegration.prototype.callbackFunction=function(){WirisPlugin.IntegrationModel.prototype.callbackFunction.call(this),this.parseContent();var e=this.editorObject.get("host").textarea.ancestor("form");e&&e.on("submit",this.submit,this)},AttoIntegration.prototype.parseContent=function(){var e=this.editorObject.get("host"),t=e.editor.get("innerHTML");t=WirisPlugin.Parser.initParse(t,this.config.lang),e.editor.set("innerHTML",t),this.editorObject.markUpdated()},AttoIntegration.prototype.unParseContent=function(){var e=this.editorObject.get("host"),t=e.textarea.get("value"),n=this.convertSafeMathml(WirisPlugin.Parser.endParse(t,null,this.config.lang,!0));e.textarea.set("value",n)},AttoIntegration.prototype.submit=function(){var e=this.editorObject.get("host"),t=e.editor.get("innerHTML");(t.indexOf("math\u00bb")>=0||t.indexOf("math>")>=0)&&e.textarea.set("value",WirisPlugin.Parser.endParse(t,null,this.config.lang,!0))},AttoIntegration.prototype.convertSafeMathml=function(e){var t="",n="\u00abmath",r="\u00ab/math\u00bb",i=e.indexOf(n),s=0;while(i!=-1){t+=e.substring(s,i),imageMathmlAttribute=e.indexOf(WirisPlugin.Configuration.get("imageMathmlAttribute")),s=e.indexOf(r,i),s==-1?s=e.length-1:imageMathmlAttribute!=-1?s+=e.indexOf("/>",i):s+=r.length;if(!WirisPlugin.MathML.isMathmlInAttribute(e,i)&&imageMathmlAttribute==-1){var o=e.substring(i,s);t+=WirisPlugin.MathML.safeXmlDecode(o)}else t+=e.substring(i,s);i=e.indexOf(n,s)}return t+=e.substring(s,e.length),t};var n={};n.configurationService=M.cfg.wwwroot+"/filter/wiris/integration/configurationjs.php",n.editorObject=this,n.target=this.get("host").editor.getDOMNode(),n.scriptName="",n.config=t;var r=new AttoIntegration(n);r.init(),r.listeners.fire("onTargetReady",{}),WirisPlugin.currentInstance=r}}.bind(this)),this._addButtons(t);var n=this.get("host");n.on("atto:selectionchanged",function(e){if(typeof e.event=="undefined"){var t=n.editor.get("innerHTML");t=WirisPlugin.Parser.initParse(t,WirisPlugin.currentInstance.config.lang),n.editor.set("innerHTML",t)}}),n._wirisUpdateFromTextArea=n.updateFromTextArea,n.updateFromTextArea=function(){n._wirisUpdateFromTextArea();var e=n.editor.get("innerHTML");e=WirisPlugin.Parser.initParse(e,WirisPlugin.currentInstance.config.lang),n.editor.set("innerHTML",e)},n._wirisupdateOriginal=n.updateOriginal,n.updateOriginal=function(){n._wirisupdateOriginal();var e=n.textarea.get("value"),t=WirisPlugin.Parser.endParse(e);t=_convertSafeMathML(t),n.textarea.set("value",t)},_convertSafeMathML=function(e){var t="",n="\u00abmath",r="\u00ab/math\u00bb",i=e.indexOf(n),s=0;while(i!=-1){t+=e.substring(s,i),imageMathmlAttribute=e.indexOf(WirisPlugin.Configuration.get("imageMathmlAttribute")),s=e.indexOf(r,i),s==-1?s=e.length-1:imageMathmlAttribute!=-1?s+=e.indexOf("/>",i):s+=r.length;if(!WirisPlugin.MathML.isMathmlInAttribute(e,i)&&imageMathmlAttribute==-1){var o=e.substring(i,s);t+=WirisPlugin.MathML.safeXmlDecode(o)}else t+=e.substring(i,s);i=e.indexOf(n,s)}return t+=e.substring(s,e.length),t}},_addButtons:function(e){parseInt(e.editor_is_active)&&this.addButton({title:"wiris_editor_title",buttonName:"wiris_editor",icon:"formula",iconComponent:"atto_wiris",callback:this._editorButton}),parseInt(e.chemistry_is_active)&&this.addButton({title:"wiris_chem_editor_title",buttonName:"wiris_chem_editor",icon:"chem",iconComponent:"atto_wiris",callback:this._chemButton});var t=this.get("host");t.plugins.collapse&&t.plugins.collapse._setVisibility(t.plugins.collapse.buttons.collapse)},_editorButton:function(){WirisPlugin.currentInstance.editorObject=this,WirisPlugin.currentInstance.setTarget(this.get("host").editor.getDOMNode()),WirisPlugin.currentInstance.core.getCustomEditors().disable(),WirisPlugin.currentInstance.openNewFormulaEditor()},_chemButton:function(){WirisPlugin.currentInstance.editorObject=this,WirisPlugin.currentInstance.setTarget(this.get("host").editor.getDOMNode()),WirisPlugin.currentInstance.getCore().getCustomEditors().enable("chemistry"),WirisPlugin.currentInstance.openNewFormulaEditor()}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","get"]});
