!function(t){var s=function(t,s){this.options={openDelay:250,closeDelay:500,animIn:"fadeIn",animOut:"fadeOut",animSpeed:"normal",duration:450,wrap:null,direction:"ltr",event:"mouseenter",touch:"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,offset:0,wcag:1},this.init(t,s)};s.prototype.init=function(s,o){var i=this;if(jQuery.extend(i.options,o),s.length){switch(i.options.menu=s,i.options.blurTimer=null,i.options.animSpeed){case"fast":i.options.duration=250;break;case"slow":i.options.duration=650}s.addClass(i.options.animSpeed);var n=s.find("li.dj-up");i.kids=[],i.options.wrap=t("#"+i.options.wrap),i.options.wrap.length||(i.options.wrap=s.parents("div").last()),i.options.touch&&s.on("touchstart",function(t){t.stopPropagation()}),n.each(function(s){var o=t(this);i.kids[s]=new e(o,0,i,i.options)}),1==i.options.fixed&&t(window).one("load",i.makeSticky.bind(i,s)),1==i.options.wcag&&(i.focusable=s.find("a[href], [tabindex]"),s.on("keydown",function(t){i.focusNearest(t)}))}},s.prototype.focusNearest=function(s){var e=this,o=s.which,i=e.options.menu.find(":focus"),n=i.offset(),a={x:1024,y:1024},u=null;if(n){var r=function(t){if(!t.is(":hidden")&&t!=i){var s=t.offset(),e={x:Math.abs(s.left-n.left),y:Math.abs(s.top-n.top)};37==o&&s.left<n.left||39==o&&s.left>n.left?(e.y<a.y||e.y==a.y&&e.x<a.x)&&(a=e,u=t):(38==o&&s.top<n.top||40==o&&s.top>n.top&&e.x<t.width())&&e.x+e.y<a.x+a.y&&(a=e,u=t)}};e.focusable.each(function(){r(t(this))}),u&&(s.preventDefault(),s.stopPropagation(),u.focus())}},s.prototype.makeSticky=function(s){var e=this;e.sticky=!1;var o=t("#"+s.attr("id")+"sticky"),i=t("<div />");i.css({display:"none",opacity:0,height:s.height()}),i.attr("id",s.attr("id")+"placeholder"),i.insertBefore(o),t(window).scroll(e.scroll.bind(e,o,s,i,!1)),t(window).resize(e.scroll.bind(e,o,s,i,!0)),e.scroll(o,s,i,!1),t(window).on("orientationchange",function(){setTimeout(function(){t(window).trigger("resize")},500)})},s.prototype.scroll=function(s,e,o,i){var n=this;if(!e.is(":hidden")){var a=t(window).scrollTop(),u=(n.sticky?o.offset().top:e.offset().top)-parseInt(n.options.offset);if(n.sticky&&(a<u||i)&&(e.css({position:"",top:"",background:"",width:"",height:""}),e.removeClass("dj-megamenu-fixed"),s.find(".dj-stickylogo").css("display","none"),s.css({position:"",top:"",height:"",left:"",width:"",display:"none"}),o.css({display:"none","min-width":""}),e.find(".dj-up > .dj-subwrap").css({"max-height":"","overflow-y":""}),n.sticky=!1),!n.sticky&&a>=u){s.css({position:"fixed",top:parseInt(n.options.offset),left:0,width:"100%",display:"block"}),o.css({"min-width":e.outerWidth(!0),display:""});var r=0,l=s.find(".dj-stickylogo");l.length&&(l.css("display",""),l.hasClass("dj-align-center")&&(r=l.outerHeight(!0),console.log(r))),e.css({position:"fixed",top:parseInt(n.options.offset)+r,background:"transparent",height:"auto"}),e.addClass("dj-megamenu-fixed"),e.css("width",o.width()?o.width()+1:"auto"),o.css("height",e.outerHeight()),s.css("height",r+e.outerHeight());var c=t(window).height()-parseInt(n.options.offset)-s.height();e.find(".dj-up > .dj-subwrap").each(function(){t(this).find(".dj-subwrap").length||t(this).css({"max-height":c,"overflow-y":"auto"})}),n.sticky=!0}}};var e=function(t,s,e,o){this.options={},this.init(t,s,e,o)};e.prototype.init=function(s,e,o,i){var n=this;jQuery.extend(n.options,i),n.menu=s,n.level=e,n.parent=o,n.timer=null,n.blurTimer=null,n.sub=n.menu.find("> .dj-subwrap").first(),n.menu.find(".dj-submenu > li, .dj-subtree > li").length||(n.sub.remove(),n.menu.removeClass("parent"),n.menu.find("span.dj-drop").removeClass("dj-drop"),n.menu.find("i.arrow").remove());var a="mouseenter";if(n.options.touch||"click_all"==n.options.event?(a="click_all"==n.options.event?"click":a,(u=n.menu.find("> a").first()).length&&(n.menu.hasClass("separator")&&u.css("cursor","pointer"),u.on("touchend click",function(t){n.sub.length&&!n.menu.hasClass("hover")&&(t.preventDefault(),"touchend"==t.type&&n.menu.trigger("click"))}))):"click"==n.options.event&&n.menu.hasClass("separator")&&((u=n.menu.find("> a").first()).length&&u.css("cursor","pointer"),a="click"),n.options.touch&&(n.menu.on("click",n.showSub.bind(n)),t(document).on("touchstart",function(){n.menu.hasClass("hover")&&n.menu.trigger("mouseleave")})),n.menu.on(a,n.showSub.bind(n)),n.menu.on("mouseleave",n.hideSub.bind(n)),1==n.options.wcag){var u=n.menu.find("> a").first();u.on("focus",n.showSub.bind(n)),u.on("blur",function(){n.blurTimer=setTimeout(function(){if(!n.options.menu.find(":focus").length){for(var t=n;t.level>0;)t.hideSub(),t=t.parent;t.hideSub()}},1e3)}),u.on("keydown",function(t){n.focusNearest(t)}),n.options.menu.on("click",function(){clearTimeout(n.blurTimer)})}n.sub.length&&(n.kids=[],n.initKids())},e.prototype.focusNearest=function(s){var e=this,o=s.which,i=e.menu.offset(),n={x:1024,y:1024},a=null,u=function(t){if(t.menu&&t.menu.find("> a").length){var s=t.menu.offset(),e={x:Math.abs(s.top-i.top),y:Math.abs(s.left-i.left)};37==o&&s.left<i.left||39==o&&s.left>i.left?(e.x<n.x||e.x==n.x&&e.y<n.y)&&(n=e,a=t):(38==o&&s.top<i.top||40==o&&s.top>i.top)&&(e.y<n.y||e.y==n.y&&e.x<n.x)&&(n=e,a=t)}};t.each(e.parent.kids,function(t,s){u(s)}),a||(u(e.parent),e.sub.length&&t.each(e.kids,function(t,s){u(s)})),a&&(s.preventDefault(),s.stopPropagation(),a.menu.find("> a").first().focus())},e.prototype.showSub=function(){var s=this;clearTimeout(s.timer),s.menu.hasClass("hover")&&!s.sub.hasClass(s.options.animOut)||(s.sub.length&&s.sub.css("display","none"),s.timer=setTimeout(function(){clearTimeout(s.animTimer),s.menu.addClass("hover"),s.hideOther(),s.sub.length&&(s.sub.css("display",""),s.sub.removeClass(s.options.animOut),s.checkDir(),s.sub.addClass(s.options.animIn),s.sub.find(".modules-wrap").length&&t(window).trigger("resize"))},s.options.openDelay))},e.prototype.hideSub=function(){var t=this;clearTimeout(t.timer),t.sub.length?t.timer=setTimeout(function(){t.menu.is(":hover")||(t.sub.removeClass(t.options.animIn),t.sub.addClass(t.options.animOut),t.animTimer=setTimeout(function(){t.menu.removeClass("hover")},t.options.duration))},t.options.closeDelay):t.menu.removeClass("hover")},e.prototype.checkDir=function(){var t=this;if(!t.menu.hasClass("fullsub")){t.sub.css("left",""),t.sub.css("right",""),t.sub.css("margin-left",""),t.sub.css("margin-right","");var s=t.sub.offset(),e=t.options.wrap.offset();if("ltr"==t.options.direction)((o=s.left+t.sub.outerWidth()-t.options.wrap.outerWidth()-e.left)>0||t.sub.hasClass("open-left"))&&(t.level?(t.sub.css("right",t.menu.outerWidth()),t.sub.css("left","auto")):t.sub.hasClass("open-left")?(t.sub.css("right",t.sub.css("left")),t.sub.css("left","auto")):t.sub.css("margin-left",-o));else if("rtl"==t.options.direction){var o=s.left-e.left;(o<0||t.sub.hasClass("open-right"))&&(t.level?(t.sub.css("left",t.menu.outerWidth()),t.sub.css("right","auto")):t.sub.hasClass("open-right")?(t.sub.css("left",t.sub.css("right")),t.sub.css("right","auto")):t.sub.css("margin-right",o))}}},e.prototype.initKids=function(){var s=this;s.sub.find("> .dj-subwrap-in > .dj-subcol > ul.dj-submenu > li").each(function(o){var i=t(this);s.kids[o]=new e(i,s.level+1,s,s.options)})},e.prototype.hideOther=function(){var s=this;t.each(s.parent.kids,function(t,e){e.menu.hasClass("hover")&&e!=s&&(e.sub.length?(e.hideOtherSub(),e.sub.removeClass(e.options.animIn),e.sub.addClass(e.options.animOut),e.animTimer=setTimeout(function(){e.menu.removeClass("hover")},s.options.duration)):e.menu.removeClass("hover"))})},e.prototype.hideOtherSub=function(){var s=this;t.each(s.kids,function(t,s){s.sub.length&&(s.hideOtherSub(),s.sub.removeClass(s.options.animIn),s.sub.removeClass(s.options.animOut)),s.menu.removeClass("hover")})},t(document).ready(function(){t(".dj-megamenu[data-options]").each(function(){var e=t(this);e.find(".dj-hideitem").remove(),e.data();var o=e.data("options");e.removeAttr("data-options"),e.find(".modules-wrap ul.nav li.current").each(function(){t(this).parents("ul.dj-submenu > li, li.dj-up").each(function(){t(this).addClass("active"),t(this).find("> a").addClass("active")})}),new s(e,o)})})}(jQuery);;
!function(n){var e=function(e,o){var i=n('<select id="'+e.attr("id")+'select" class="inputbox dj-select" />').on("change",function(){n(this).val&&(window.location=n(this).val())}),t=e.find("li.dj-up");a(t,i,0),i.appendTo(o),o.find(".dj-mobile-open-btn").on("click",function(n){n.stopPropagation(),n.preventDefault();var e=i[0];if(document.createEvent){var a=document.createEvent("MouseEvents");a.initMouseEvent("mousedown",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}else e.fireEvent&&e.fireEvent("onmousedown")})},a=function(e,o,i){for(var t="",d=!1,c=0;c<i;c++)t+="- ";e.each(function(){var e=n(this),c=e.find("> a").first(),s=e.find("> .dj-subwrap > .dj-subwrap-in > .dj-subcol > .dj-submenu > li, > .dj-subtree > li");if(c.length){var l="",f=c.find("img").first();f.length?l=t+f.attr("alt"):(l=c.html().replace(/(<small[^<]+<\/small>)/gi,""),l=t+l.replace(/(<([^>]+)>)/gi,""));var r=n('<option value="'+c.prop("href")+'">'+l+"</option>").appendTo(o);c.prop("href")||r.prop("disabled",!0),e.hasClass("active")&&(o.val(r.val()),d=!0)}s&&a(s,o,i+1)}),i||d||(n('<option value="">- MENU -</option>').prependTo(o),o.val(""))},o=function(e){var a=null;e.find("ul.dj-mobile-nav > li, ul.dj-mobile-nav-child > li").each(function(){var e=n(this),o=e.find("> a").first();o.length&&(e.find("> ul.dj-mobile-nav-child > li:not(:empty)").length||(e.removeClass("parent"),e.find("ul.dj-mobile-nav-child").remove()),e.hasClass("parent")&&(e.hasClass("active")?o.attr("aria-expanded",!0):o.attr("aria-expanded",!1),o.append('<span class="toggler"></span>'),o.on("click",function(i){e.hasClass("active")?n(i.target).hasClass("toggler")&&(i.preventDefault(),i.stopPropagation(),clearTimeout(a),e.removeClass("active"),o.attr("aria-expanded",!1)):i.preventDefault()})),o.on("focus",function(){a=setTimeout(function(){e.click()},250)})),e.on("click",function(){e.siblings().removeClass("active"),e.siblings().find("> a").attr("aria-expanded",!1),e.addClass("active"),o.length&&o.attr("aria-expanded",!0)})})},i=function(e){var a=null,i=jQuery(".dj-offcanvas-wrapper").first(),t=jQuery(".dj-offcanvas-pusher").first(),d=jQuery(".dj-offcanvas-pusher-in").first();i.length||(a=n(document.body).children(),i=n('<div class="dj-offcanvas-wrapper" />'),t=n('<div class="dj-offcanvas-pusher" />'),d=n('<div class="dj-offcanvas-pusher-in" />'));var c=e.find(".dj-offcanvas").first(),s=c.data("effect");n(document.body).addClass("dj-offcanvas-effect-"+s);var l=null;e.find(".dj-mobile-open-btn").on("click",function(e){e.stopPropagation(),e.preventDefault(),clearTimeout(l),c.data("scroll",n(window).scrollTop()),n(document.body).addClass("dj-offcanvas-anim"),setTimeout(function(){n(document.body).addClass("dj-offcanvas-open")},50),d.css("top",-c.data("scroll")),c.find(".dj-offcanvas-close-btn").focus()}),a&&n(document.body).prepend(i),3==s||6==s||7==s||8==s||14==s?t.append(c):i.append(c),a&&(i.append(t),t.append(d),d.append(a)),c.find(".dj-offcanvas-close-btn").on("click",function(a){a.stopPropagation(),a.preventDefault(),n(document.body).hasClass("dj-offcanvas-open")&&(n(document.body).removeClass("dj-offcanvas-open"),l=setTimeout(function(){e.find(".dj-mobile-open-btn").focus(),d.css("top",0),n(document.body).removeClass("dj-offcanvas-anim"),n(window).scrollTop(c.data("scroll"))},500))}),n(".dj-offcanvas-pusher").on("click",function(e){n(e.target).hasClass("dj-offcanvas-pusher")&&c.find(".dj-offcanvas-close-btn").click()}),c.find(".dj-offcanvas-close-btn").on("keydown",function(n){9==n.which&&setTimeout(function(){c.find(":focus").length||c.find(".dj-offcanvas-close-btn").click()},50)}),c.find(".dj-offcanvas-end").on("focus",function(){c.find(".dj-offcanvas-close-btn").click()}),o(c),c.find("a").click(function(e){var a=n(this).attr("href");if(a&&"#"==a.charAt(0)){var o=n(a);if(o.length){e.preventDefault();var i=o.position().top;c.data("scroll",i),d.css("top",-i)}}})},t=function(e){e.find(".dj-mobile-open-btn").on("click",function(n){n.stopPropagation(),n.preventDefault(),e.find(".dj-accordion-in").slideToggle("fast")}),n(document).on("click",function(a){n(a.target).closest(".dj-accordion-in").length||e.find(".dj-accordion-in").is(":visible")&&e.find(".dj-accordion-in").slideUp("fast")}),o(e)},d=[],c=null,s=function(){window.clearTimeout(c),c=window.setTimeout(function(){for(var e=0;e<d.length;e++)d[e].mobile&&(window.matchMedia("(max-width: "+d[e].trigger+"px)").matches?(n(document.body).addClass("dj-megamenu-mobile"),n(document.body).addClass(d[e].id+"-mobile"),n.contains(document,d[e].menu[0])&&(d[e].menu.after(d[e].menuHandler),d[e].menu.detach()),n.contains(document,d[e].mobileHandler[0])&&d[e].mobileHandler.replaceWith(d[e].mobile),n.contains(document,d[e].offcanvasHandler[0])&&d[e].offcanvasHandler.replaceWith(d[e].offcanvas)):(n(document.body).removeClass("dj-megamenu-mobile"),n(document.body).removeClass(d[e].id+"-mobile"),n.contains(document,d[e].mobile[0])&&(d[e].mobile.after(d[e].mobileHandler),d[e].mobile.detach()),d[e].offcanvas&&n.contains(document,d[e].offcanvas[0])&&(d[e].offcanvas.after(d[e].offcanvasHandler),d[e].offcanvas.detach()),n.contains(document,d[e].menuHandler[0])&&d[e].menuHandler.replaceWith(d[e].menu)))},100)};n(document).ready(function(){n(".dj-megamenu:not(.dj-megamenu-sticky)").each(function(){var e=n(this),a=n("#"+e.prop("id")+"mobile"),o=n("#"+e.prop("id")+"offcanvas"),c=d.length;d[c]={},d[c].id=e.prop("id"),d[c].trigger=e.data("trigger"),d[c].menu=e,d[c].menuHandler=n("<div />"),d[c].mobile=a.length?a:null,d[c].mobileHandler=n("<div />"),d[c].offcanvas=o.length?o:null,d[c].offcanvasHandler=n("<div />");var s=n("#"+e.prop("id")+"mobileWrap");s.length&&s.empty().append(d[c].mobile),d[c].mobile&&(d[c].mobile.find(".dj-hideitem").remove(),d[c].mobile.hasClass("dj-megamenu-offcanvas")?i(d[c].mobile):d[c].mobile.hasClass("dj-megamenu-accordion")&&t(d[c].mobile))}),n(window).resize(s),s()}),n(window).one("load",function(){for(var a=0;a<d.length;a++)d[a].mobile&&d[a].mobile.hasClass("dj-megamenu-select")&&e(d[a].menu,d[a].mobile);n(".dj-offcanvas-close-btn").click()})}(jQuery);;