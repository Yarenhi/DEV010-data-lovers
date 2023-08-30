
import data from './data/breakingbad/breakingbad.js';
import { ordenarAZ, ordenarZA, temporada, filtrar } from './data.js';

function getData(data) {

  const main = document.querySelector('main')
  main.innerHTML = ''

  data.forEach(p => {
    /*Codigo para crear la tarjeta*/
    const characterCard = document.createElement('div')
    
    characterCard.className = "character-card"
    const img = document.createElement('img')
    img.src = p.img
    const titulo = document.createElement('h3')
    titulo.textContent = p.name
    characterCard.append(img, titulo)
    main.append(characterCard)
    return data.map(p=>({name:p.name, img:p.img}))
  });
}
// const characterArray = Object.values(data.breaking_bad);
// getData(characterArray);
// console.log(data.breaking_bad);
getData(data.breaking_bad) 

const btnOrdenarAZ = document.querySelector('#btnOrdenarAZ');
btnOrdenarAZ.addEventListener("click", ()=>{
// llamar
//  console.log(ordenarAZ);
// invocacion
// console.log(ordenarAZ(data.breaking_bad))
  const ejecutarOrdenarAZ = ordenarAZ(data.breaking_bad)
  getData(ejecutarOrdenarAZ)
}); 

const btnOrdenarZA = document.querySelector('#btnOrdenarZA');
btnOrdenarZA.addEventListener("click", ()=>{
  const ejecutarOrdenarZA = ordenarZA(data.breaking_bad)
  getData(ejecutarOrdenarZA)
}); 

const selectorTemporada= document.querySelector('#selectorTemporada');
selectorTemporada.addEventListener("change", ()=>{
  const ejecutarFiltarTemporada = temporada(data.breaking_bad, selectorTemporada.value)
  getData(ejecutarFiltarTemporada)
});

const btnBuscar = document.querySelector('#buscar');
const busquedaPersonaje = document.querySelector('#busquedaPersonaje');

btnBuscar.addEventListener('click', () => {
  const valorBusqueda = busquedaPersonaje.value.trim();
  
  if (valorBusqueda === '') {
    const resultado = document.querySelector('#resultado');
    resultado.textContent = alert("Por favor ingresa un término de búsqueda.");
  } else {
    const ejecutarFiltrar = filtrar(data.breaking_bad, busquedaPersonaje.value);

    if (ejecutarFiltrar.length > 0) {
      getData(ejecutarFiltrar);
    } else {
      displayErrorImage("Imagenes/bb_walter-white-large.jpg");
      // const resultado = document.querySelector('#resultado');
      // resultado.textContent = "No se encontraron coincidencias.";
      function displayErrorImage(imageSrc) {
        const errorContainer = document.getElementById("error-container");
        // Limpiar el contenido existente en el contenedor
        errorContainer.innerHTML = '';
   // Crear un elemento de imagen y establecer sus atributos
        const errorImage = document.createElement("img");
        errorImage.id = "error-image";
        errorImage.src = imageSrc;
        errorImage.alt = "Error Image";
        // Agregar la imagen al contenedor de error y mostrarlo
        errorContainer.appendChild(errorImage);
        errorContainer.style.display = "block";
        // acá puedes seguir usando el appendChild que irá "poniendo de hijo" un elemento a otro que será padre. Eso hace que puedas ir asignandolo donde tú quieras.
      
      }

    }
  }
});

