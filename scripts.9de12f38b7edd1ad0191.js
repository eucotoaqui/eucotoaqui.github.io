!function(t,e){"object"==typeof exports?module.exports=e(window,document):t.SimpleScrollbar=e(window,document)}(this,(function(t,e){function s(t){Object.prototype.hasOwnProperty.call(t,"data-simple-scrollbar")||Object.defineProperty(t,"data-simple-scrollbar",{value:new n(t)})}function i(t){for(this.target=t,this.direction=window.getComputedStyle(this.target).direction,this.bar='<div class="ss-scroll">',this.wrapper=e.createElement("div"),this.wrapper.setAttribute("class","ss-wrapper"),this.el=e.createElement("div"),this.el.setAttribute("class","ss-content"),"rtl"===this.direction&&this.el.classList.add("rtl"),this.wrapper.appendChild(this.el);this.target.firstChild;)this.el.appendChild(this.target.firstChild);this.target.appendChild(this.wrapper),this.target.insertAdjacentHTML("beforeend",this.bar),this.bar=this.target.lastChild,function(t,s){function i(t){var e=t.pageY-n;n=t.pageY,a((function(){s.el.scrollTop+=e/s.scrollRatio}))}function r(){t.classList.remove("ss-grabbed"),e.body.classList.remove("ss-grabbed"),e.removeEventListener("mousemove",i),e.removeEventListener("mouseup",r)}var n;t.addEventListener("mousedown",(function(s){return n=s.pageY,t.classList.add("ss-grabbed"),e.body.classList.add("ss-grabbed"),e.addEventListener("mousemove",i),e.addEventListener("mouseup",r),!1}))}(this.bar,this),this.moveBar(),this.el.addEventListener("scroll",this.moveBar.bind(this)),this.el.addEventListener("mouseenter",this.moveBar.bind(this)),this.target.classList.add("ss-container");var s=window.getComputedStyle(t);"0px"===s.height&&"0px"!==s["max-height"]&&(t.style.height=s["max-height"])}function r(){for(var t=e.querySelectorAll("*[ss-container]"),i=0;i<t.length;i++)s(t[i])}var a=t.requestAnimationFrame||t.setImmediate||function(t){return setTimeout(t,0)};i.prototype={moveBar:function(t){var e=this.el.scrollHeight,s=this;this.scrollRatio=this.el.clientHeight/e;var i="rtl"===s.direction?s.target.clientWidth-s.bar.clientWidth+18:-1*(s.target.clientWidth-s.bar.clientWidth);a((function(){s.scrollRatio>=1?s.bar.classList.add("ss-hidden"):(s.bar.classList.remove("ss-hidden"),s.bar.style.cssText="height:"+Math.max(100*s.scrollRatio,10)+"%; top:"+s.el.scrollTop/e*100+"%;right:"+i+"px;")}))}},e.addEventListener("DOMContentLoaded",r),i.initEl=s,i.initAll=r;var n=i;return n}));