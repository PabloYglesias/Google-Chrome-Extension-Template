chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.html',{width: 500, height: 309});
});