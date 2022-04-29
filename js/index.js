let listaDeFilmes = [
    'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg',
    'https://br.web.img2.acsta.net/c_310_420/pictures/13/12/18/20/56/273919.jpg',
    'https://m.media-amazon.com/images/I/517p+iKIK2L._AC_SX342_.jpg',
    'https://media.fstatic.com/VcQode_XESjYEZrHOPsF-iR7c5o=/290x478/smart/media/movies/covers/2009/08/c912c5113e56bf032aa9beee3c1de24d.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Pulp_Fiction_cover.jpg/230px-Pulp_Fiction_cover.jpg'
];

let listaDeTitulos = [
    'Clube da Luta',
    'Efeito Borboleta',
    'Donnie Darko',
    'Dagon',
    'Pulp Fiction'
];

let catalogo = document.querySelector("#catalogo");
let i = 0;
let erro = document.querySelector("#erro");

for(i; i<listaDeFilmes.length; i++)
{
    catalogo.innerHTML += `<div class="filme">
        <img src=${listaDeFilmes[i]}>
        <figcaption>${listaDeTitulos[i]}</figcaption>
    </div>`;
}

let filmeRepetido = true;

function cadastrar()
{
    console.log("Fui clicado");
    let novoFilme = document.querySelector('#filme').value;
    
    let novoTitulo = document.querySelector('#titulo').value;

    if (listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo.toLowerCase())) {
        erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
      }else{
        listaDeFilmes.push(novoFilme)
        listaDeTitulos.push(novoTitulo)
        //? Vamos chamar uma função para mostrar os filmes
      }
      document.querySelector('#filme').value = ''
      document.querySelector('#titulo').value = ''

}