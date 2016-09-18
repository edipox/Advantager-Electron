window.onload = function() {
  var onReady = function(){
    var appendStyle  = function(element, style){
      element.attr("style", style+";"+element.attr("style"));
    }
    var $header = $("#top-menu, #header, #wrapper");
    appendStyle($header, "background: none!important; -webkit-app-region: drag!important");
    var $notDraggable = $("a, input, textarea, button");
    appendStyle($notDraggable, "-webkit-app-region: no-drag!important");
    var containers = "html, body, #wrapper, #wrapper1, #wrapper2, #wrapper3, #main, #content".split(", ");
    $.each(containers, function(index, cont){ appendStyle($(cont), "height: 100%"); })
  }
  $(document).ready(onReady).on("turbolinks:load", onReady);
};
