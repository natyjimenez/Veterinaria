import Animal from "./Animal";

const btnIngreso = document.getElementById("btnIngreso")
const animal = new Animal()

btnIngreso.addEventListener("click", () => {

  const listado = document.getElementById("listado");
  listado.innerHTML += ` Dueño: ${animal.nombre.value.toUpperCase()} <br>
  Dirección: ${animal.direccion.value.toUpperCase()} <br>
  Telefono: ${animal.telefono.value} <br>
  Nombre Mascota: ${animal.nombreMascota.value.toUpperCase()} <br>
  Tipo de Animal: ${animal.tipo.value.toUpperCase()} <br>
  Enfermedad: ${animal.enfermedad.value.toUpperCase()} <br>
  <hr />
  `;
})