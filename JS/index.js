import {create_acordion} from "./acordion.js";
let delete_button = 0;
let new_section = document.createElement("button");
new_section.textContent="Agregar Seccion";
container.appendChild(new_section);
new_section.onclick = async function() {
let accordion = await create_acordion();
container.appendChild(accordion);
//if (delete_button === 0) {
  //  container.removeChild(new_section);
    //delete_button =1;
//}
}