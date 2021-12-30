// Requisição
let quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', () => {
    quantidadePokemons(quantidade.value)
})

function quantidadePokemons(quantidade){
   fetch("https://pokeapi.co/api/v2/pokemon?limit="+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        let pokemons = []

        allpokemon.results.map((val) => {

            fetch(val.url).then(response => response.json())
            .then(pokemonsSingle => {
                pokemons.push({
                    nome: val.name,
                    img: pokemonsSingle.sprites.front_default})

                let pokemonBox = document.querySelector('.pokemonBox')
                pokemonBox.innerHTML = '';

                pokemons.map(function(val){
                    pokemonBox.innerHTML += `
                    <div class='boxPokemon'>
                        <img src='${val.img}'/>
                        <p> ${val.nome}</p>
                    </div>
                    `
                })
            })
        })
    })
}

//name