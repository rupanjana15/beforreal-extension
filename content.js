  
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "sarcasm-result") {
      const { sarcasmResult } = message;
      let resultText, resultIcon;
      if (sarcasmResult) {
        resultText = "Oh, That's Definitely Sarcasm!";
        resultIcon = "😏";
      } else {
        resultText = "Well, well, well... Someone's feeling extra spicy today!";
        resultIcon = "🤔";
      }
      showSarcasmPopup(resultText, resultIcon);
    }
  });
  
  function showSarcasmPopup(text, icon) {
    const popup = document.createElement("div");
    popup.classList.add("sarcasm-popup");
    popup.innerHTML = `
      <div class="sarcasm-popup-content">
        <span class="sarcasm-popup-icon">${icon}</span>
        <span class="sarcasm-popup-text">${text}</span>
      </div>
    `;
    document.body.appendChild(popup);
  
    setTimeout(() => {
      popup.classList.add("sarcasm-popup-fade-out");
      popup.addEventListener("transitionend", () => {
        popup.remove();
      });
    }, 3000);
  }
  
 