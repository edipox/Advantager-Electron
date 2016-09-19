window.onload = function() {
  var onReady = function(){
    var appendStyle  = function(element, style){
      element.attr("style", style+";"+element.attr("style"));
    }
 /*   var $header = $("#top-menu, #header, #wrapper");
    appendStyle($header, "background: #49aede!important;"); */
    var $notDraggable = $("a, input, textarea, button");
    appendStyle($notDraggable, "-webkit-app-region: no-drag!important");
    appendStyle($("body"), "background: #5682a3");
 //    var containers = "html, body, #wrapper, #wrapper1, #wrapper2, #wrapper3, #main, #content".split(", ");
 //   $.each(containers, function(index, cont){ appendStyle($(cont), "height: 100%"); })
function Start() {

   var OldHtml = window.jQuery.fn.html;

   window.jQuery.fn.html = function () {

     var EnhancedHtml = OldHtml.apply(this, arguments);

     var myClass = ".im_bottom_panel_wrap"
     if (arguments.length && EnhancedHtml.find(myClass).length) {

         var theElAdded = EnhancedHtml.find(myClass); //there it is
        appendStyle($(theElAdded), "padding-bottom: 40px"); 

     }

     return EnhancedHtml;
   }
}

$(Start);

//    var $im_panel = #(".im_bottom_panel_wrap");
 //   appendStyle($im_panel, "padding-bottom: 50px"); 
  }
  $(document).ready(onReady).on("turbolinks:load", onReady);
};
