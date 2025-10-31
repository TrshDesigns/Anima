  // Obtener elementos
  const titulo = document.getElementById('display-title');
  const parrafo = document.getElementById('display-paragraph');
  const inputTitulo = document.getElementById('inputTitle');
  const inputParrafo = document.getElementById('inputParagraph');
  const inputTamaño = document.getElementById('inputFontSize');
  const formulario = document.getElementById('editForm');

  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    if (formulario.checkValidity()) {

      titulo.textContent = inputTitulo.value;
      parrafo.textContent = inputParrafo.value;

      const tamaño = inputTamaño.value;
      titulo.style.fontSize = tamaño + 'rem';

      const colorSeleccionado = document.querySelector('input[name="titleColor"]:checked').value;
      titulo.className = colorSeleccionado; 

      alert('¡Cambios guardados!');
    } else {
      formulario.reportValidity(); 
    }
  });