document.addEventListener("DOMContentLoaded", function () {
function copyToClipboard(html) {
  const el = document.createElement("textarea");
  el.value = html;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("insertHTML", false, html);
  document.body.removeChild(el);
}

  const quillOpenQuestions = new Quill("#open-questions", {
    modules: {
      toolbar: "#toolbar-container",
    },
    theme: "snow",
  });

  const quillActionItems = new Quill("#action-items", {
    modules: {
      toolbar: "#toolbar-container",
    },
    theme: "snow",
  });

  const quillMainBody = new Quill("#main-body", {
    modules: {
      toolbar: "#toolbar-container",
    },
    theme: "snow",
  });

  window.copyContent = function () {
    const title = document.getElementById("title").value;
    const date = new Date().toISOString().slice(0, 10);
	const openQuestionsEditor = new Quill("#open-questions", options);
const actionItemsEditor = new Quill("#action-items", options);
const mainBodyEditor = new Quill("#main-body", options);

function generateFormattedText() {
  const title = document.querySelector("#title").value;
  const openQuestionsContent = openQuestionsEditor.root.innerHTML;
  const actionItemsContent = actionItemsEditor.root.innerHTML;
  const mainBodyContent = mainBodyEditor.root.innerHTML;
  const date = new Date().toISOString().split("T")[0];

  const formattedText = `
${date} - ${title}

Open Questions
${openQuestionsContent}

Action Items
${actionItemsContent}

Main Body
${mainBodyContent}
`;

  return formattedText;
}

function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

document.querySelector("#copy-button").addEventListener("click", () => {
  const formattedText = generateFormattedText();
  copyToClipboard(formattedText);
});
