function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function processContent(content) {
  // Process the content according to your PRD
  // You can create separate functions for Open Questions and Action Items
  // This is just a placeholder example
  return content;
}

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

document.getElementById('copyButton').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const openQuestionsContent = document.querySelector('#open-questions .ql-editor').innerHTML;
  const actionItemsContent = document.querySelector('#action-items .ql-editor').innerHTML;
  const mainBodyContent = document.querySelector('#main-body .ql-editor').innerHTML;

  const processedOpenQuestions = processContent(openQuestionsContent);
  const processedActionItems = processContent(actionItemsContent);
  const processedMainBody = processContent(mainBodyContent);

  const currentDate = formatDate(new Date());
  const formattedContent = `${currentDate} - ${title}\n\nOpen Questions\n${processedOpenQuestions}\n\nAction Items\n${processedActionItems}\n\nMain Body\n${processedMainBody}`;
  copyToClipboard(formattedContent);
});
const toolbarOptions = [
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['link'],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
    ['clean']
];

const quill = new Quill('#main-body', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Compose your note...',
    theme: 'snow'
});
