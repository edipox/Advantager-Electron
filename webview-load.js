window.onload = function() {
  var onReady = function(){
    var appendStyle  = function(element, style){
      element.attr("style", style+";"+element.attr("style"));
    }
 /*   var $header = $("#top-menu, #header, #wrapper");
    appendStyle($header, "background: #49aede!important;"); */
    var $notDraggable = $("a, input, textarea, button");
    appendStyle($notDraggable, "-webkit-app-region: no-drag!important");
    appendStyle($("body"), "-webkit-app-region: drag");
 //    var containers = "html, body, #wrapper, #wrapper1, #wrapper2, #wrapper3, #main, #content".split(", ");
 //   $.each(containers, function(index, cont){ appendStyle($(cont), "height: 100%"); })


function Start() {

   var OldHtml = window.jQuery.fn.html;

   window.jQuery.fn.html = function () {
     var args = arguments;
     var enhancedHtml = OldHtml.apply(this, args);
     function applyInFlyStyle(mySelector, style){
       if (args.length && enhancedHtml.find(mySelector).length) {
          var theElAdded = enhancedHtml.find(mySelector); //there it is
          appendStyle($(theElAdded), style);
       }
     }

    //  applyInFlyStyle(".im_bottom_panel_wrap", "padding-bottom: 40px")
    applyInFlyStyle(".tg_head_wrap", "background: #5682a3");
     applyInFlyStyle(".tg_head_split", "border: 1px solid #83aac7;border-top: none;border-bottom: 2px solid #83aac7;background: linear-gradient(to bottom, rgba(125,185,232,0) 1%,rgba(125,185,232,0) 4%,rgba(125, 185, 232, 0) 10%,rgba(125, 185, 232, 0) 13%,rgba(72,123,160,1) 100%)")
     applyInFlyStyle(".tg_head_logo_wrap", "margin-left: 45px; width: 25%");
    //  applyInFlyStyle("body", );
      $.each( "a, input, textarea, button".split(", "), function(index, selector){
        applyInFlyStyle(selector, "-webkit-app-region: no-drag!important");
      })


     return enhancedHtml;
   }
}

$(Start);

//    var $im_panel = #(".im_bottom_panel_wrap");
 //   appendStyle($im_panel, "padding-bottom: 50px");
  }
  $(document).ready(onReady).on("turbolinks:load", onReady);
};
