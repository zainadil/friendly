
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Loading up friendly.js');
  chrome.tabs.executeScript(null, {file: "friendly.js"});
});