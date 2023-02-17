import {drowpdown} from './acordion.js';
export async function view_section(title,id){
    Swal.fire({
        title: title,
        html: `<input type="text" id="title" class="swal2-input" placeholder="Asigne un titulo ">`,
        width: 1800,
        padding: '1.5em',
        color: '#716add',
        background: '#fff ',
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `,
        confirmButtonText:
    'Salir',
    preConfirm: (e) => {
      drowpdown(id);
    },
      })
}