import { ordenarAZ, ordenarZA, temporada} from "../src/data";

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
    const resultadoOrdenado = [
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
    ];
      
    const datosOrdenados = ordenarAZ(data);
    expect(datosOrdenados).toEqual(resultadoOrdenado);
  });
});

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });

  it('returns `example`', () => {
    const data=[
      { name: 'C' },
      { name: 'A' },
      { name: 'B' },
    ];
    const resultadoOrdenado = [
      { name: 'C' },
      { name: 'B' },
      { name: 'A' },
    ];
      
    const datosOrdenados = ordenarZA(data);
    expect(datosOrdenados).toEqual(resultadoOrdenado);
  });
});


describe('temporada', () => {
  it('is a function', () => {
    expect(typeof temporada).toBe('function');
  });

  it('returns `example`', () => {
    const data=[
      { name: 'C' },
      { name: 'A' },
      { name: 'B' },
    ];
    const resultadoFiltrados = [
      { name: 'C' },
    
    ];
    const resultadoFiltrado = temporada(data);
    expect(resultadoFiltrado).toEqual(resultadoFiltrados);
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
