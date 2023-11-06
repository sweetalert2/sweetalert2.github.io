import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Sidebar, sidebarUrl } from '../components/Nav'

export const showSidebar = () => {
  withReactContent(Swal).fire({
    html: <Sidebar />,
    showConfirmButton: false,
    showCloseButton: true,
    position: 'top-left',
    customClass: {
      container: 'sidebar',
    },
    showClass: {
      popup: 'animate__animated animate__fadeInLeft animate__faster',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutLeft animate__faster',
    },
    footer: `This sidebar is powered by SweetAlert2,
      <a href="${sidebarUrl}" class="nowrap" target="_blank">source code ↗</a>`,
  })
}
