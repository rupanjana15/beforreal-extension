  chrome.contextMenus.create({
    id: "sarcasm-check",
    title: "Is this sarcasm?",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "sarcasm-check") {
      const sarcasmResult = await checkSarcasm(info.selectionText);
      chrome.tabs.sendMessage(tab.id, { type: "sarcasm-result", sarcasmResult });
    }
  });
  
  async function checkSarcasm(text) {
    const response = await fetch(`https://sarcasmai.com/detect?text=${encodeURIComponent(text)}`);
    const data = await response.json();
    return data.sarcasm;
  }
