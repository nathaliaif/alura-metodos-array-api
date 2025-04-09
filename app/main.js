//Responsável por realizar a requisição 
let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

//Faz a requisição e busca os livros da API
getBuscarLivrosDaAPI()
async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI); //fetch -> manipular as funções e as requisições HTTP
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    // console.table(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
} 
