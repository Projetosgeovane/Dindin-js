// 1. O header deve ter cor de fundo #2E948A
let header = document.getElementsByTagName('header');

header[0].style.backgroundColor = '#2E948A';


// 2. No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
let linkCursos = document.querySelector('#menu_opcoes nav a');

linkCursos.setAttribute('href', 'cursos.html');