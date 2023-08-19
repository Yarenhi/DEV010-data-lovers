// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filtroTemporada= (array)=>{
return array.filter(elemento=>elemento.appearance)
}


/*const selectorTemporada = document.getElementById('selectorTemporada');
const characterCards = Array.from(document.querySelectorAll('.character-card'));

  function filtroCaracterPorTemporada(numeroTemporada) {
    characterCards.forEach(card => {
      const characterName = card.querySelector('h3').textContent;
      const character = data.breaking_bad.find(c => c.name === characterName);

      if (character.appearance.includes(numeroTemporada) || numeroTemporada === 6) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  selectorTemporada.addEventListener('change', () => {
    const temporadaSeleccionada = parseInt(selectorTemporada.value);
    filtroCaracterPorTemporada(temporadaSeleccionada);
  });*/