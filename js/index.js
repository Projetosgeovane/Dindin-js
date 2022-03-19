// 1. O header deve ter cor de fundo #2E948A
let header = document.getElementsByTagName('header');

header[0].style.backgroundColor = '#2E948A';


// 2. No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
let linkCursos = document.querySelector('#menu_opcoes nav a');

linkCursos.setAttribute('href', 'cursos.html');

// No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
let centralizar = document.getElementById('introducao');
centralizar.style.justifyContent = 'center';

// Na etapa de depoimentos, o título deveria ser "O que falam sobre nós"
let texto = document.querySelector('.titulo.depoimento h3').innerHTML = 'O que falam sobre nós';

// Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
let titulo = document.querySelector('section:nth-child(5) h3').innerHTML = 'Mais conteúdo pra você';



// Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.
let upper = document.querySelectorAll('.titulo')
upper.forEach(titulo => {
    titulo.style.textTransform = 'upperCase'
});




// o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
let botao = document.getElementById('todos_posts')
botao.setAttribute('href', '/blog.html')


