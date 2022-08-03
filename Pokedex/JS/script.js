const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.button btn-prev');
const buttonNext = document.querySelector('.button btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status==200){
    const data = await APIResponse.json();
    return data;
    }
}

const renderPokemon = async (pokemon) =>{

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data){
    pokemonImage.style.display = 'block';   
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found';
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value='';
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
    searchPokemon -=1;
    renderPokemon(searchPokemon);
    }
});
buttonNext.addEventListener('click', () => {
    searchPokemon +=1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);


