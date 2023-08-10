let isContentScriptActive = false;

console.log("Background running...");

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(() => {
    if (isContentScriptActive) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { action: 'deactivate' });
      });
      console.log("pressed disabled...")
      isContentScriptActive = false;
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { action: 'activate' });
      });
      console.log("pressed enabled...")
      isContentScriptActive = true;
    }
  });
});
