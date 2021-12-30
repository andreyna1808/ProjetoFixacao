//Criei um array vazio que irei adicionando
let itens = [];

//Eu chamo todos os meus inputs dando dentro do click 
document.querySelector('input[type=submit]').addEventListener('click', () => {
    let nomeProduto = document.querySelector('input[name=nomeProduto]');
    let valorProduto = document.querySelector('input[name=valorProduto]');
    let linkImg = document.querySelector('input[name=linkImg]');

    //Crio um objetos que será mandando para o array vazio
    // conforme o valor digitado pelo usuário
    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value,
        img: linkImg.value
    });

    //Chamo o ListaJs onde vai rodar todos os dados
    let lista = document.querySelector('.listaJS');
    let soma = 0;
    lista.innerHTML = '';


    //vou percorrer e informar novas coisas para o objeto
    itens.map(function(val){
        //Isso foi criado para fazer a soma dos valores
        soma += parseFloat(val.valor);
        //Chamo a lista de produtos e o que o usuário irá colocar em cada objeto
        lista.innerHTML += `
        <div class='lista-produtos'>
            <h3 class='nome-produto'> ${val.nome}</h3>
            <h3 class="price-produto"><span>R$ ${val.valor}</span></h3>
            <h3 class='img-produto' ><img src="${val.img}" alt="imagem"></h3>
        </div>
       `
    })

    //Faço a matemática da soma que pode apenas 2 numeros após a vírgula
    soma = soma.toFixed(2);
    
    //vou limpar os dados de pesquisa
    nomeProduto.value = "";
    valorProduto.value = "";
    linkImg.value = "";

    //Elaboro o raciocinio e soma e printo para o usuário
    let somarElementos = document.querySelector('.soma h1');
    somarElementos.innerHTML = 'R$ ' + soma;
});

//Botão de resetar
document.querySelector('button[name=limpar]').addEventListener('click', () => { 

    document.querySelector('.listaJS').innerHTML = '';
    document.querySelector('.soma h1').innerHTML = 'R$ 0';
})