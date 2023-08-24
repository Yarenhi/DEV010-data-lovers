
import data from './data/breakingbad/breakingbad.js';
import { ordenarAZ, ordenarZA, temporada } from './data.js';

export function getData(data) {

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
    return data.map(p => ({ name: p.name, img: p.img }))
  });
}

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

//Crear función de filtro por apodo y personaje y función filtro Actor/Actriz)

export {data};


















// export function getData(data) {
//     return data.map(p => ({ name: p.name, img: p.img }));
//   }

//resultadoTemporada.innerHTML ="";
//filtroTemporada.forEach(personaje => { const elemento = document.createElement('div');
//elemento.textContent = `${personaje.name} - Temporada: ${personaje.appearance.join(',')}`;
//resultadoTemporada.appendChild(elemento);});
//}


//};
// ctrl + }]

// const selectorTemporada = document.querySelector('#selectorTemporada');
// const resultadoTemporada = document.querySelector('#resultadoTemporada');

// selectorTemporada.addEventListener("change", () => {
//   const appearance = parseInt(selectorTemporada.value);
//   const personajesEnTemporada = getCharactersBySeason(data, appearance);
//   resultadoTemporada.textContent = JSON.stringify(personajesEnTemporada, null, 2);
// });

// function getCharactersBySeason(data, appearance) {
//   const characters = data["breaking_bad"];

//   const personajesEnTemporada = characters.filter(character =>
//     character.appearance.includes(appearance)
//   );
//   console.log(personajesEnTemporada);
//   return personajesEnTemporada;
// }



/*const divRoot = document.getElementById('root');

/*const divRoot = document.getElementById('root');
const arr = ["KABCDEFGHIJKLMNOPQ","L","F"];
function draw(){
  let contentRoot="";
  for (let i=0; i<arr.length;i++){
    contentRoot+=`<p>${arr[i]}</p>`
  }
  console.log({contentRoot})
  divRoot.innerHTML=contentRoot;
}
draw()*/

// Array.prototype.forEach()

/*const dataFilms = {

};*/

/*const searchName = 'Walter White';
const foundName = data.breaking_bad.find((name)=> name.breaking_bad===searchName);
/*console.log(foundName); //Revisar para activar el buscador*/

/*function printdata(array){
    const container = document.querySelector('.character-card')
    for(let i=0 ; i<array.length; i++){
       // console.log(data.array[i]);
        container.innerHTML += `<figure>
        <img
        src="${array[i].img}"
        alt="${array[i].name}"
        />
        <figcaption>${array[i].name}</figcaption>
        </figure>`; //template String (envío elementos de HTML como si fuesen de JS)
    }
}
printdata(data.breaking_bad)

//Cuando tenga el buscador le puedo enviar foundName a print data para reutilizar el código, el bucle for repite una acción y la función nos permite reutilizar.*/
