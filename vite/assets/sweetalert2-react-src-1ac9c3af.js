const sweetalert2ReactSrc = "import Swal from 'sweetalert2'\nimport withReactContent from 'sweetalert2-react-content'\n\nconst MySwal = withReactContent(Swal)\n\nMySwal.fire({\n  title: <strong>Good job!</strong>,\n  html: <i>You clicked the button!</i>,\n  icon: 'success',\n})\n";

export { sweetalert2ReactSrc as default };
