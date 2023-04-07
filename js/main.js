$(document).ready(function () {
  $("#summernote").summernote({
    minHeight: 200,
  });

  $("#copy-button").click(function () {
    let content = $("#summernote").summernote("code");
    navigator.clipboard.writeText(content).then(
      function () {
        alert("Content copied to clipboard!");
      },
      function (err) {
        alert("Could not copy content to clipboard");
      }
    );
  });
});
