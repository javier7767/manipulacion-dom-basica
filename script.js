const h1 = document.querySelector('h1');
const input_1 = (document.querySelector('#num_1'));
const input_2 = (document.querySelector('#num_2'));
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#resultado');
const form = document.querySelector('#form');

// btn.addEventListener('evento','codigo(X)'), a las funciones No se le colocan parentecis

// el boton dentro de un form envia el formulario a una ruta y limpia el documento

//btn.addEventListener('click', btnOnClick);

// form.addEventListener('submit', sumarInputValues)
// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = +input_1.value + +input_2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }


// Si especificamos al último boton que es de tipo button TYPE = BUTTON su comportamiento no será de tipo submit, y no se recargará la pagina

btn.addEventListener('click', sumarInputValues)
function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = +input_1.value + +input_2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}