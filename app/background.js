/**
 * Created by Jorge on 10/08/2014.
 */
chrome.app.runtime.onLaunched.addListener(function (launchData) {
    var opt = {
        width: 400,
        height: 200
    };

    chrome.app.window.create('index.html', opt, function (win) {
        win.launchData = launchData;
    });

});