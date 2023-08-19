import { filtroTemporada } from './data.js';
import data from './data/breakingbad/breakingbad.js';
console.log (filtroTemporada(data.breaking_bad));
function getData(){
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
const main= document.querySelector('main')
/*console.log(example, data);*/
//Constante para selector de temporada
data.breaking_bad.forEach(p => {
/*Codigo para crear la tarjeta*/
const characterCard =document.createElement('div');
characterCard.className ="character-card";
const img = document.createElement('img');
img.src= p.img;
const titulo= document.createElement('h3');
titulo.textContent =  p.name;
characterCard.append(img, titulo);
main.append(characterCard);

}); /*array va o no*/

}

getData()



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
