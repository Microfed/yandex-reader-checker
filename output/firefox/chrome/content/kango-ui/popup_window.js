﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
var YandexnReadernChecker_kango=null,YandexnReadernChecker_kangoPopup={_container:null,border_size:21,frameWidth:0,frameHeight:0,x:0,y:0,url:"",setConfig:function(a){this.url=a.url;this.frameWidth=a.width;this.frameHeight=a.height;this.x=a.x;this.y=a.y},getFrame:function(){return document.getElementById("frame")},navigateFrame:function(a){this.getFrame().setAttribute("src",a)},initApiForFrame:function(){this.getFrame().addEventListener("DOMContentLoaded",function(a){a.originalTarget.defaultView.wrappedJSObject.kango=YandexnReadernChecker_kango},!0)},init:function(){var a=
window.arguments[0].wrappedJSObject;YandexnReadernChecker_kango=a.kango;this.setConfig(a);this.initApiForFrame();this.navigateFrame(this.url);a=this.getOuterSize();window.resizeTo(a.width,a.height);this.magicMoveTo(this.x,this.y)},getOuterSize:function(){return{width:this.frameWidth+2*this.border_size,height:this.frameHeight+2*this.border_size}},getWindowRect:function(a){var c=null,c=a.windowState==STATE_MAXIMIZED?{left:a.mozInnerScreenX,top:a.mozInnerScreenY,right:a.screenX+(a.mozInnerScreenX-a.screenX)+a.innerWidth,
bottom:a.screenY+(a.mozInnerScreenY-a.screenY)+a.innerHeight}:{left:a.screenX,top:a.mozInnerScreenY,right:a.screenX+a.outerWidth,bottom:a.screenY+a.outerHeight};c.outerHeight=a.outerHeight;c.outerWidth=a.outerWidth;return c},magicMoveTo:function(a,c){var b=a-20-8,f=c-7,e=this.getWindowRect(window.opener),d=e.right-b-window.outerWidth+5;0>d&&(b+=d);b-=6;d=0;22>e.right-a&&(d=11);document.getElementById("pin").left=a-b-8-d+"px";window.moveTo(b,f)}};
window.addEventListener("load",function(){YandexnReadernChecker_kangoPopup.init()},!1);
