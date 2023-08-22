import { selectorTemporada } from './main.js';

export function ordenarAZ(data) {
  const ordenarAZdata = data.sort((a, b) => a.name.localeCompare(b.name)); 
  return ordenarAZdata
}

export function ordenarZA(data) {
  const ordenarZAdata = data.slice().sort((a, b) => b.name.localeCompare(a.name));
  return ordenarZAdata
}

export function temporada(data) {
  const temporadaAFiltrar = parseInt(selectorTemporada.value, 10);
  // La función parseInt() en JavaScript se utiliza para analizar una cadena y extraer un número entero de ella.
  // La función parseInt() toma dos argumentos:
  // El primer argumento es la cadena que se va a convertir en un número.
  // El segundo argumento (opcional) es la base numérica en la que se debe interpretar la cadena. En este caso, se usa 10 para interpretar la cadena en base decimal.
  // Por ejemplo, si el valor seleccionado en selectorTemporada es "1", que es una cadena, al utilizar parseInt(selectorTemporada.value, 10), el resultado sería 1 como un número entero.

  // console.log(temporadaAFiltrar);
  const filtroTemporada = data.filter((personaje)=> personaje.appearance.includes(temporadaAFiltrar));
  // console.log(filtroTemporada);
  return filtroTemporada
}

// export const filtroTemporada = (array) => {
//   return array.filter(elemento=>elemento.apperance);
// };

// export const ordenarAZ = (array) => {
//   return array.data.sort(elemento=>elemento.name);
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
