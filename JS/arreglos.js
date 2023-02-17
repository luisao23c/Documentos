export let json_sections = [];
let id = 0;
export async function add_section(section) {
json_sections.push({ id: id,name_section: section});
id ++;
console.log(json_sections);
}
async function add_sub_section(section){

}
async function remove_sub_section(section){

}
async function select_section(section){

}