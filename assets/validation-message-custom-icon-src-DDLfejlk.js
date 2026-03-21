//#region recipe-gallery/validation-message-custom-icon-src.tsx?raw
var validation_message_custom_icon_src_default = "import Swal from 'sweetalert2'\nimport './styles.css'\n\nSwal.fire({\n  title: 'Enter your name',\n  input: 'text',\n  customClass: {\n    validationMessage: 'my-validation-message',\n  },\n  preConfirm: (value) => {\n    if (!value) {\n      Swal.showValidationMessage('<i class=\"fa fa-info-circle\"></i> Your name is required')\n    }\n  },\n})\n";
//#endregion
export { validation_message_custom_icon_src_default as default };
