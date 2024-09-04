const iframe = document.createElement("iframe");

const iframeStyles = (styleString) => {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

iframeStyles(`
  .chat-frame {
    position: fixed;
    bottom: 50px;
    right: 50px;
    border: none;
    z-index: 1000;
  }
`);

iframe.src = "https://corinna-9a1qpl4ij-sumit-mehtas-projects.vercel.app/chatbot";
iframe.classList.add('chat-frame');
document.body.appendChild(iframe);

window.addEventListener("message", (e) => {
  if (e.origin !== "https://corinna-9a1qpl4ij-sumit-mehtas-projects.vercel.app") return;
  let dimensions = JSON.parse(e.data);
  iframe.width = dimensions.width;
  iframe.height = dimensions.height;
  iframe.contentWindow.postMessage("${id}", "https://corinna-9a1qpl4ij-sumit-mehtas-projects.vercel.app/");
});
