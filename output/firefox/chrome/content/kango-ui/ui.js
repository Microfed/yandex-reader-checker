﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
YandexnReadernChecker_kango.ui={};YandexnReadernChecker_kango.oop.mixin(YandexnReadernChecker_kango.ui,YandexnReadernChecker_kango.EventTarget.prototype);YandexnReadernChecker_kango.oop.mixin(YandexnReadernChecker_kango.ui,new YandexnReadernChecker_kango.EventTarget);YandexnReadernChecker_kango.ui._init=function(){throw new YandexnReadernChecker_kango.NotImplementedException;};YandexnReadernChecker_kango.ui.event={READY:"Ready"};YandexnReadernChecker_kango.ui.ButtonBase=function(a){this._details=a;YandexnReadernChecker_kango.oop.mixin(this,YandexnReadernChecker_kango.EventTarget.prototype);YandexnReadernChecker_kango.oop.mixin(this,new YandexnReadernChecker_kango.EventTarget)};
YandexnReadernChecker_kango.ui.ButtonBase.prototype={_details:null,event:{Command:"command",COMMAND:"command",PopupDocumentComplete:"PopupDocumentComplete"},setTooltipText:function(){throw new YandexnReadernChecker_kango.NotImplementedException;},setCaption:function(){throw new YandexnReadernChecker_kango.NotImplementedException;},setIcon:function(){throw new YandexnReadernChecker_kango.NotImplementedException;},setBadgeValue:function(){throw new YandexnReadernChecker_kango.NotImplementedException;},setBadgeBackgroundColor:function(){throw new YandexnReadernChecker_kango.NotImplementedException;},setPopup:function(){throw new YandexnReadernChecker_kango.NotImplementedException;
},setContextMenu:function(){throw new YandexnReadernChecker_kango.NotImplementedException;}};YandexnReadernChecker_kango.addEventListener(YandexnReadernChecker_kango.event.READY,function(){YandexnReadernChecker_kango.ui._init()});YandexnReadernChecker_kango.ui.IOptionsPage=function(){};YandexnReadernChecker_kango.ui.IOptionsPage.prototype={open:function(){throw new YandexnReadernChecker_kango.NotImplementedException;}};YandexnReadernChecker_kango.ui.NotificationBase=function(a,b){YandexnReadernChecker_kango.oop.mixin(this,YandexnReadernChecker_kango.EventTarget.prototype);YandexnReadernChecker_kango.oop.mixin(this,new YandexnReadernChecker_kango.EventTarget);this._id=a;b&&(this._impl=b)};
YandexnReadernChecker_kango.ui.NotificationBase.prototype={_impl:null,event:{Click:"Click",Close:"Close",Show:"Show"},id:"",getId:function(){return this._id},show:function(){throw new YandexnReadernChecker_kango.NotImplementedException;},close:function(){throw new YandexnReadernChecker_kango.NotImplementedException;}};YandexnReadernChecker_kango.ui.NotificationsBase=function(){};YandexnReadernChecker_kango.ui.NotificationsBase.prototype={createNotification:function(){throw new YandexnReadernChecker_kango.NotImplementedException;}};
YandexnReadernChecker_kango.ui.ContextMenuItemBase=function(){YandexnReadernChecker_kango.oop.mixin(this,YandexnReadernChecker_kango.EventTarget.prototype);YandexnReadernChecker_kango.oop.mixin(this,new YandexnReadernChecker_kango.EventTarget)};YandexnReadernChecker_kango.ui.ContextMenuItemBase.prototype={event:{CLICK:"click"}};


// Merged from /home/microfed/sources/YandexnReadernChecker_kango/src/js/firefox/kango-ui/ui.part.js

YandexnReadernChecker_kango.ui.Button=function(a){YandexnReadernChecker_kango.ui.ButtonBase.call(this,a);this._popup=new YandexnReadernChecker_kango.ui.Popup;this._popupDetails=null;this._badgeText=this._icon="";this._badgeBackgroundColor=this._badgeDefaultBackgroundColor;this._image=null;var b=this;this._popup.addEventListener("PopupDocumentComplete",function(a){b._onPopupDocumentComplete(a)});this._initDetails(a);this._addCommandListener();window.addEventListener("aftercustomization",YandexnReadernChecker_kango.lang.bind(function(){this._addCommandListener()},this),!1)};
YandexnReadernChecker_kango.ui.Button.prototype=YandexnReadernChecker_kango.oop.extend(YandexnReadernChecker_kango.ui.ButtonBase,{_popup:null,_popupDetails:null,_icon:null,_badgeBackgroundColor:null,_badgeDefaultBackgroundColor:[176,0,18,255],_badgeText:"",_image:null,_commandListener:null,_caption:"",_tooltipText:"",_addCommandListener:function(){var a=this,b=this._getElement();null!=b&&null==this._commandListener&&(this._commandListener=function(b){a._onCommand(b)},b.addEventListener("command",this._commandListener,!1),this._update())},_getElement:function(){return document.getElementById(this._buttonId)},
_initDetails:function(a){YandexnReadernChecker_kango.lang.isObject(a)&&(YandexnReadernChecker_kango.lang.isString(a.icon)&&this.setIcon(a.icon),YandexnReadernChecker_kango.lang.isString(a.caption)&&this.setCaption(a.caption),YandexnReadernChecker_kango.lang.isString(a.tooltipText)&&this.setTooltipText(a.tooltipText),"undefined"!=typeof a.popup&&YandexnReadernChecker_kango.lang.isObject(a.popup)&&(this._popupDetails=a.popup))},_onCommand:function(a){var b=this._getElement();if(null!=b&&a.target.id==b.id)if(null!=this._popupDetails){var c=b.getBoundingClientRect(),a=parseInt(b.boxObject.screenX+c.width/2,10),
b=parseInt(b.boxObject.screenY+c.height,10);this._popup.open({url:this._popupDetails.url,width:parseInt(this._popupDetails.width,10),height:parseInt(this._popupDetails.height,10),x:a,y:b})}else this.fireEvent(this.event.COMMAND)},_onPopupDocumentComplete:function(a){this.fireEvent(this.event.PopupDocumentComplete,a)},_update:function(){var a=this._getElement();if(null!=a){a.label=this._caption;a.setAttribute("tooltiptext",this._tooltipText);null!=this._image&&(this._image.onload=function(){},delete this._image,
this._image=null);var b=this._image=new Image,c=this,k=function(){if(null!=c._image)if(c._image.complete){var g=b.width,i=b.height;if(19<g||19<i)g=i=19;var j=document.getElementById("YandexnReadernChecker_kango-ui-canvas"),d=j.getContext("2d");if(""!=c._badgeText){d.font="bold 11px Tahoma,arial,helvetica,sans-serif";j.width=19;j.height=19;var h=Math.round(d.measureText(c._badgeText).width);j.width=g+h+2;j.height=i;d.drawImage(b,0,0,g,i);var e=g+-4,f=i-11-1,h=h+6,l="rgba("+c._badgeBackgroundColor[0]+", "+c._badgeBackgroundColor[1]+
", "+c._badgeBackgroundColor[2]+", "+c._badgeBackgroundColor[3]/255+")";d.beginPath();d.moveTo(e,f+4);d.lineTo(e,f+12-4);d.quadraticCurveTo(e,f+12,e+4,f+12);d.lineTo(e+h-4,f+12);d.quadraticCurveTo(e+h,f+12,e+h,f+12-4);d.lineTo(e+h,f+4);d.quadraticCurveTo(e+h,f,e+h-4,f);d.lineTo(e+4,f);d.quadraticCurveTo(e,f,e,f+4);d.fillStyle=l;d.fill();d.font="bold 11px Tahoma,arial,helvetica,sans-serif";d.textBaseline="top";d.fillStyle="white";d.fillText(c._badgeText,g+-4+2,i-11)}else j.width=g,j.height=i,d.drawImage(b,
0,0,g,i);a.image=j.toDataURL("image/png")}else window.setTimeout(k,10)};b.onload=k;b.src=this._icon}},setTooltipText:function(a){this._tooltipText=a;var b=this._getElement();null!=b&&b.setAttribute("tooltiptext",a)},setCaption:function(a){this._caption=a;var b=this._getElement();null!=b&&(b.label=a)},setIcon:function(a){var b=this._getElement(),c=a;YandexnReadernChecker_kango.io.isLocalUrl(a)&&(""!=a?c=YandexnReadernChecker_kango.io.getExtensionFileUrl(a):(null!=b&&b.removeAttribute("image"),c=""));this._icon!=c&&(this._icon=c,this._update())},
setBadgeValue:function(a){a=null!=a&&0!=a?a.toString():"";this._badgeText!=a&&(this._badgeText=a,this._update())},setBadgeBackgroundColor:function(a){null!=a&&(YandexnReadernChecker_kango.lang.isArray(a)&&4<=a.length)&&(this._badgeBackgroundColor=a,this._update())},setPopup:function(a){this._popupDetails=a},closePopup:function(){this._popup.close()},setContextMenu:function(a,b){var c=this._getElement();if(null!=c){var k=document.createElement("menupopup");k.setAttribute("id",c.id+"-menu");c.appendChild(k);var g=document.createElement("menuitem");
g.setAttribute("label",a);g.addEventListener("command",function(a){b();a.preventDefault()},!1);k.appendChild(g);this._getElement().addEventListener("contextmenu",function(a){k.openPopup(c,"after_start",0,0,!0,!1);a.preventDefault()},!1)}}});YandexnReadernChecker_kango.ui._init=function(){var a=YandexnReadernChecker_kango.getExtensionInfo().toolbar;YandexnReadernChecker_kango.lang.isObject(a)&&(YandexnReadernChecker_kango.ui.toolbar=new YandexnReadernChecker_kango.ui.Toolbar);a=YandexnReadernChecker_kango.getExtensionInfo().browser_button;YandexnReadernChecker_kango.lang.isObject(a)&&(YandexnReadernChecker_kango.ui.browserButton=new YandexnReadernChecker_kango.ui.BrowserButton(a));return this.fireEvent(this.event.READY)};
YandexnReadernChecker_kango.ui.popup={};YandexnReadernChecker_kango.ui.popup.close=function(){YandexnReadernChecker_kango.ui.browserButton.closePopup()};
