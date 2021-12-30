// Array de string em ordem alfabetica
function alfabeto(a,b){ // crio uma função de comparador
    if (a < b) {
      return -1
    } else {
      return true
    } // faço com que o objeto nome seja ordenado
  }
  function arrayNome(nomeOrdem) {
    return nomeOrdem.sort(alfabeto) 
}
console.log(arrayNome(['Willian', 'Cleonice', 'Andreyna', 'Edivaldo']));


//Usando style no js pelo DOM
let teste = document.getElementById('teste')
teste.style.width = 110;
teste.style.height = 110;
teste.style.backgroundColor = 'black';
teste.style.margin = 5;

let classi = document.getElementsByClassName('box');
  for(let i = 0; i < classi.length; i++){
    let classe = classi[i]

    classe.style.width = 110;
    classe.style.height = 110;
    classe.style.backgroundColor = 'red';
    classe.style.margin = 5;
  }

//Criando uma animação no quadrado
let box = document.querySelectorAll('.animation')[0];
setTimeout(() => {
  box.classList.add('animacao');
},1000)

box.addEventListener('click', () => {
  box.classList.add('animacaoClick');
})

//Criando o saiba mais
let geral = document.querySelector('.conteudo span')
geral.addEventListener('click', function(){
  let conteudo = document.querySelector('.conteudo p')

  if(conteudo.classList.contains('mostrar')){
    conteudo.classList.remove('mostrar')
    geral.innerHTML = 'Ver mais';

  }
  else {
    conteudo.classList.add('mostrar')
    geral.innerHTML = 'Ver menos';
  }
})  

//Criando o slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//Utilizando AJAX
let resquest = new XMLHttpRequest();
resquest.open('GET', 'chama o back end na net', true);

resquest.onload = function(){
  if(this.status >= 200 && this.status < 400){
    let data = JSON.parse(this.response);
    console.log(data);
  }
  else {
    console.log('Não deu nenhuma requisição, porque você não colocou um site')
  }
}
resquest.onerror = function(){

}
resquest.send();

//Utilizando AJAX/fetch
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json));

//Lista de filmes mais assistidos
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
  method: 'GET'
}).then(response => response.json()).then(function(json){
  let filmes = document.querySelector('.filmes');

  json.results.map(function(val){
    filmes.innerHTML += `
      <div style='cursor:pointer;' class='tituloFilmes'> ${val.title}
      <hr>
      <div style='display:none;' class='descricao'> ${val.overview}
      </div>
    `
  })
  let titulos = document.querySelectorAll('.tituloFilmes');
  for(let i = 0; i < titulos.length; i++){
    titulos[i].addEventListener('click', function(texto){
      if(texto.target.querySelector('.descricao').style.display = 'none'){
        texto.target.querySelector('.descricao').style.display = 'block'
      }
      else {
        texto.target.querySelector('.descricao').style.display = 'none'
      }
    })
  }

})

