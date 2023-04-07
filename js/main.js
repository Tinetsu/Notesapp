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
