$(document).ready(function () {
  $('#editor').summernote({
    height: 'calc(100vh - 120px)',
  });

  document
    .getElementById('copy-button')
    .addEventListener('click', function () {
      let editorContent = $('#editor').summernote('code');
      console.log(editorContent);
      // You can implement the copy functionality here using the 'editorContent' variable
    });
});