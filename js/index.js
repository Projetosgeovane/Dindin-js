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



// Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
let novoCurso = document.querySelector('#investimentos_poupando_independencia');

let nova = `<div id="independencia">
<img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar agora</a>
</div>`;

novoCurso.innerHTML += nova;





