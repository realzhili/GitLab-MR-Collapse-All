chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['jquery.js', 'content.js']
  });
});