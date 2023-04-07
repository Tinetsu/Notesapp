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
	const openQuestions = getQuillHTML(quillOpenQuestions);
	const actionItems = getQuillHTML(quillActionItems);
	const mainBody = getQuillHTML(quillMainBody);

    const formattedContent = `
      ${date} - ${title}
      
      <h2>Open Questions</h2>
      ${openQuestions}
      
      <h2>Action Items</h2>
      ${actionItems}
      
      <h2>Main Body</h2>
      ${mainBody}
    `;

    const el = document.createElement("textarea");
    el.value = formattedContent;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    alert("Content copied to clipboard!");
  };
});
