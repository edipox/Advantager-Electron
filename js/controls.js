const remote = require('electron').remote;

document.getElementById("min-btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     window.minimize();
});

const toggleMaximize = function (e) {
     var window = remote.getCurrentWindow();
     if (!window.isMaximized()) {
         window.maximize();
     } else {
         window.unmaximize();
     }
}

document.getElementById("max-btn").addEventListener("click", toggleMaximize);
// document.getElementById("controls").addEventListener("dblclick", toggleMaximize);

document.getElementById("close-btn").addEventListener("click", function (e) {
     var window = remote.getCurrentWindow();
     window.close();
});
