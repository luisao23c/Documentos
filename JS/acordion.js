import {view_section as load_section} from './alerts.js';
let cont = 0;
let button_view = null;
let delete_button = 0;
create_title_section();
async function new_acordion(title) {
  let accordion = await create_acordion(title);
  container.appendChild(accordion);
}
async function create_title_section() {
  Swal.fire({
    title: "Nueva Seccion",
    html: `<input type="text" id="title" class="swal2-input" placeholder="Asigne un titulo ">`,
    confirmButtonText: "Crear Seccion",
    focusConfirm: false,
    preConfirm: () => {
      const title = Swal.getPopup().querySelector("#title").value;
      if (!title) {
        Swal.showValidationMessage(
          `Porfavor escriba un Titulo para la seccion`
        );
      } else {
        new_acordion(title);
      }
    },
  });
}

async function create_acordion(title) {
  let button = document.createElement("div");
  let title_section = document.createElement("p");
  title_section.textContent = title;
  button.appendChild(title_section);
  button.classList.add("accordion");
  button.id = "accordion" + cont;
  button.setAttribute("data-id", button.id);
  let menu = await menu_accordion(cont);
  button.appendChild(menu);
  let div = document.createElement("div");
  div.id = "panel" + cont;
  let text_example = document.createElement("p");
  div.classList.add("panel");
  let return_div = document.createElement("div");
  return_div.appendChild(button);
  return_div.appendChild(div);
  return_div.id = "acordion_section" + cont;
  cont++;
  return return_div;
}
export async function drowpdown(id) {
  let button = document.getElementById("view" + id);
  let panel = document.getElementById("panel" + id);
  button.classList.toggle("active");

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    button.textContent = "+";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    button.textContent = "-";
    let title = document.getElementById(panel.previousSibling.id);
    load_section(title.firstChild.textContent,id);
  }
}
async function menu_accordion(id) {
  let menu_acordion = document.createElement("div");
  let div = document.createElement("div");
  div.classList.add("dropdown");
  let button_add = document.createElement("button");
  button_add.textContent = "Agregar";
  let button_delete = document.createElement("button");
  button_delete.textContent = "Eliminar";
  button_delete.onclick = function () {
    delete_section(id);
  };
  button_view = document.createElement("button");
  button_view.textContent = "+";
  button_view.id = "view" + id;
  button_view.onclick = function () {
    drowpdown(id);
  };
  let div_dropdown = document.createElement("div");
  div_dropdown.classList.add("dropdown-content");
  let add_section = document.createElement("a");
  add_section.onclick = function () {
    create_title_section();
  };
  add_section.textContent = "Agregar Seccion";
  let add_sub_section = document.createElement("a");
  add_sub_section.textContent = "Agregar Sub Seccion";
  div.appendChild(button_view);
  div.appendChild(button_delete);
  div.appendChild(button_add);

  div_dropdown.appendChild(add_section);
  div_dropdown.appendChild(add_sub_section);
  menu_acordion.appendChild(div);
  div.appendChild(div_dropdown);
  return menu_acordion;
}
async function delete_section(id) {
  let div_section = document.getElementById("acordion_section" + id);
  container.removeChild(div_section);
}
