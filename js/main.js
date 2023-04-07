const options = {
  modules: {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  },
  theme: "snow",
};

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
