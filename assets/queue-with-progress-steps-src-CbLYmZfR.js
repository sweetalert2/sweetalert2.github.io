//#region recipe-gallery/queue-with-progress-steps-src.ts?raw
var queue_with_progress_steps_src_default = "import Swal from 'sweetalert2'\n\nconst steps = ['1', '2', '3']\nconst Queue = Swal.mixin({\n  progressSteps: steps,\n  confirmButtonText: 'Next >',\n  // optional classes to avoid backdrop blinking between steps\n  showClass: { backdrop: 'swal2-noanimation' },\n  hideClass: { backdrop: 'swal2-noanimation' },\n})\n\n;(async () => {\n  await Queue.fire({\n    title: 'Uno',\n    currentProgressStep: 0,\n  })\n  await Queue.fire({\n    title: 'Dos',\n    currentProgressStep: 1,\n  })\n  await Queue.fire({\n    title: 'Tres',\n    currentProgressStep: 2,\n    confirmButtonText: 'OK',\n  })\n})()\n";
//#endregion
export { queue_with_progress_steps_src_default as default };
