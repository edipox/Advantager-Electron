var THEME_CONTAINER_ID = "custom_theme_container";
fs = require('fs');

var createOrUpdate = function(id, content, type, appender){
  $('#'+id).remove();
  $('<'+type+' id="'+id+'">'+content+'</'+type+'>').appendTo(appender);
}

var setCustomTheme = function(theme){
  fs.readFile("themes/webview/"+theme+".css", 'utf8', function (err, content) {
    console.error(err);
    createOrUpdate(THEME_CONTAINER_ID, content, "style", "body")
  });
}

window.onload = function() {
    var onReady = function() { setCustomTheme("elementary"); };
    $(document).ready(onReady).on("turbolinks:load", onReady);
}
