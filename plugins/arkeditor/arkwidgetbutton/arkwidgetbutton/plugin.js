(function(){CKEDITOR.plugins.add("arkwidgetbutton",{lang:"en",icons:"arkwidgetbutton",hidpi:!1,init:function(n){if(n.config.arkWidgetEnabled){var i={exec:function(n){var t=function(n){n.cancel()};n.editable().once("blur",t,null,null,-100);jQuery(document).triggerHandler("ark:widget:xtd:open",{editor:n.name,el:window})}},t="arkwidgetbutton",r=n.addCommand(t,i);r.modes={wysiwyg:1};n.ui.addButton&&n.ui.addButton("Arkwidgetbutton",{label:n.lang.arkwidgetbutton.toolbar,command:t})}}})})()