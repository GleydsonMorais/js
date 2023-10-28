import bandeiras from './model/bandeiras.js';

const main = document.querySelector('main');

for (const bandeira of bandeiras) {
  main.insertAdjacentHTML('beforeend', criaViewBandeiras(bandeira));
}

function criaViewBandeiras(bandeira) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="${bandeira.image}" alt="${bandeira.name}">
    <p>${bandeira.name}</p>
  </div>`;
}