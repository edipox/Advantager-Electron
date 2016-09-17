window.onload = function() {
  var onReady = function(){
    $("#top-menu, #header, #wrapper").attr("style", "background: none!important; -webkit-app-region: drag!important;")
    $("a, input, textarea, button").attr("style", "-webkit-app-region: no-drag!important;")
  }
  $(document).ready(onReady).on("turbolinks:load", onReady);
};
