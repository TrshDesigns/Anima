// Array de marcas
const marcas = ["BMW", "Peugeot", "Chevrolet", "Subaru", "Nissan"];

// Elementos del DOM
const listaMarcas = document.getElementById("listaMarcas");
const btnMostrar = document.getElementById("btnMostrar");
const btnEliminarUltima = document.getElementById("btnEliminarUltima");
const inputNuevaMarca = document.getElementById("inputNuevaMarca");
const btnAgregar = document.getElementById("btnAgregar");
const inputEliminarMarca = document.getElementById("inputEliminarMarca");
const btnEliminarEspecifica = document.getElementById("btnEliminarEspecifica");
const alertContainer = document.getElementById("alertContainer");

// A. Función mostrarMarcas (sin argumentos)
function mostrarMarcas() {
  listaMarcas.innerHTML = ""; // Limpiar
  if (marcas.length === 0) {
    listaMarcas.innerHTML =
      '<li class="list-group-item text-muted">No hay marcas.</li>';
    return;
  }
  marcas.forEach((marca) => {
    const html = `<li class="list-group-item">${marca}</li>`;
    listaMarcas.insertAdjacentHTML("beforeend", html);
  });
}

// Mostrar al cargar (opcional)
// mostrarMarcas();

// A. Botón Mostrar marcas
btnMostrar.addEventListener("click", mostrarMarcas);

// B. Eliminar última marca
btnEliminarUltima.addEventListener("click", () => {
  if (marcas.length === 0) {
    mostrarAlerta("No hay marcas para eliminar.", "warning");
    return;
  }
  marcas.pop();
  mostrarMarcas();
});

// C + D. Agregar marca (sin duplicados)
btnAgregar.addEventListener("click", () => {
  const nueva = inputNuevaMarca.value.trim();
  if (!nueva) {
    mostrarAlerta("Por favor, ingresa una marca.", "danger");
    return;
  }
  if (marcas.includes(nueva)) {
    mostrarAlerta(`La marca "${nueva}" ya existe.`, "danger");
    return;
  }
  marcas.push(nueva);
  inputNuevaMarca.value = "";
  mostrarMarcas();
});

// Enter en input agregar
inputNuevaMarca.addEventListener("keypress", (e) => {
  if (e.key === "Enter") btnAgregar.click();
});

// E. Eliminar marca específica
btnEliminarEspecifica.addEventListener("click", () => {
  const aEliminar = inputEliminarMarca.value.trim();
  if (!aEliminar) {
    mostrarAlerta("Ingresa una marca a eliminar.", "danger");
    return;
  }
  const indice = marcas.indexOf(aEliminar);
  if (indice === -1) {
    mostrarAlerta(`La marca "${aEliminar}" no existe.`, "danger");
    return;
  }
  marcas.splice(indice, 1);
  inputEliminarMarca.value = "";
  mostrarMarcas();
});

// Enter en input eliminar
inputEliminarMarca.addEventListener("keypress", (e) => {
  if (e.key === "Enter") btnEliminarEspecifica.click();
});

function mostrarAlerta(mensaje, tipo) {
  alertContainer.innerHTML = "";
  const alerta = `
          <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          </div>
        `;
  alertContainer.insertAdjacentHTML("beforeend", alerta);
}
