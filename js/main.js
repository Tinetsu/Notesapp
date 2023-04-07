let quill = new Quill('#editor', {
  theme: 'snow'
});

function generateFormattedText() {
  const content = quill.getText();
  return content;
}

function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  const successful = document.execCommand("copy");
  document.body.removeChild(el);

  if (!successful) {
    console.error("Failed to copy text");
  }
}

document.querySelector("#copy-button").addEventListener("click", () => {
  const formattedText = generateFormattedText();
  copyToClipboard(formattedText);
});
