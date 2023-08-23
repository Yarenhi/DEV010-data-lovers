import { ordenarAZ } from "../src/data";

// import { getData } from '../src/main.js';

// describe('getData', () => {
//   it('devuelve datos con la estructura esperada', () => {
//     const data = [
//       { name: 'Personaje 1', img: 'imagen1.jpg' },
//       { name: 'Personaje 2', img: 'imagen2.jpg' },
//     ];

//     const resultadoEsperado = [
//       { name: 'Personaje 1', img: 'imagen1.jpg' },
//       { name: 'Personaje 2', img: 'imagen2.jpg' },
//     ];

//     const datosObtenidos = getData(data);
//     expect(datosObtenidos).toEqual(resultadoEsperado);
//   });
// });

// agregamos una linea en función get data en main.js return data.map(p => ({ name: p.name, img: p.img })) y en packaage.json 
// agregamos },
//   "jest": {
//     "testEnvironment": "jsdom"
//   }
// } al final y comentamos esto que no sé si sirve //jest.spyOn(window, 'getData').mockImplementation(() => {});

// nos da un error con inner en JS, no sabemos cómo probar la función aislando el test. 
//Cómo idea podemos dormir la función del DOM comentando y evaluar la funciones por separado ¿Es permitido?
// Al intenatr comentar el main.js, obtemos errores de ejecución de JS que hasta no resolverlos no permite correr el test y para resolverlos tendríamos que hacer muchos cambios
// ¿Se puede crear un archivo JS solo para alamcenar funciones y probaralas con los test, que sean las mismas de la interfaz pero que no interactuen con el DOM, a manera de avanzar.


// jest.spyOn(window, 'getData').mockImplementation(() => {});

// describe('ordenarAZ', () => {
//   it('ordena correctamente los datos', () => {
//     const data = [
//       { name: 'C' },
//       { name: 'A' },
//       { name: 'B' },
//     ];

//     const resultadoOrdenado = [
//       { name: 'A' },
//       { name: 'B' },
//       { name: 'C' },
//     ];

//     const datosOrdenados = ordenarAZ(data);
//     expect(datosOrdenados).toEqual(resultadoOrdenado);
//   });
// });


// main 
// import { filtroTemporada } from './data.js'; import data from './data/breakingbad/breakingbad.js'; console.log (filtroTemporada(data.breaking_bad));


describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('returns `example`', () => {
    const data=[
      { name: 'C' },
      { name: 'A' },
      { name: 'B' },
    ];
    expect(ordenarAZ(data).length).toBe(3);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
