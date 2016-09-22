const remote = require('electron').remote;
window.jq = require('./js/jquery-3.1.0.min.js');

jq(document).on("click", "#min-btn", function(e) {
    remote.getCurrentWindow().minimize();
});

jq(document).on("click, dblclick", "#max-btn, #controls", function(e) {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
})

jq(document).on("click", "#close-btn", function(e) {
    remote.getCurrentWindow().close();
});

jq(document).on("click", "#settings-btn", function(e) {
    jq("#settings-panel").appendTo("#popup");
    jq("#popup").show();
});

jq(document).on('keydown', function(e) {
    if (e.which == 27) jq("#popup").hide();
});
jq(document).on("click", "#close-popup", function() {
    jq("#popup").hide();
})

var setCustomTheme = function(theme){
  var THEME_CONTAINER_ID = "window_theme_container";
  fs = require('fs');

  var createOrUpdate = function(id, content, type, appender) {
      jq('#' + id).remove();
      jq('<' + type + ' id="' + id + '">' + content + '</' + type + '>').appendTo(appender);
  }
  fs.readFile("./themes/" + theme + "/window.css", 'utf8', function(err, content) {
      createOrUpdate(THEME_CONTAINER_ID, content, "style", "body")
  });
  var webview = document.getElementById('webview')
  webview.send('change-theme', theme);
}

jq(document).on("change", "#theme-selector", function(e) {
    var theme = jq(e.target).find("option:selected").text();
    setCustomTheme(theme)
})
var onReady = function(){ setCustomTheme("elementary") };
jq(document).ready(onReady).on("turbolinks:load", onReady);

// hack because of reasons
jq("#settings-btn").click();
jq("#close-popup").click();
