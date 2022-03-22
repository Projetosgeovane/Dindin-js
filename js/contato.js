// // O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
let action = document.querySelector('#formulario form');
action.setAttribute('href', 'sucesso.html');


// // Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
let campoTelefone = document.createElement('input');
let inputTel = document.querySelector("textarea");
let adicionaTelefone = inputTel.insertAdjacentElement('beforebegin', campoTelefone);
adicionaTelefone.setAttribute('type', 'email');
adicionaTelefone.setAttribute('required', '');
adicionaTelefone.setAttribute('placeholder', 'telefone');


// // O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;
inputTel.style.boxSizing = "border-box";


// O botão não está do tamanho adequado, precisa ter uma largura maior;
let botao = document.getElementById('enviar');
botao.style.width= '145px';


// Abaixo da section do formulário, adicione uma seção de comentário igual a página Home
let comentario = document.createElement('section');
comentario.setAttribute('class', 'titulo depoimento');
comentario.innerHTML = '<h3>Depoimentos</h3>';

let comentarios = document.createElement('section');
comentarios.setAttribute('id', 'falam_sobre');
comentarios.innerHTML = `<section id='falam_sobre'>
<div class="depoimentos">
    <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>
<div class="depoimentos">
    <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>
<div class="depoimentos">
    <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>
<div class="depoimentos">
    <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
</section>`

let mainArea = document.querySelector('main');

mainArea.append(comentario, comentarios);

let comentariosStyle = document.querySelector('head');

comentariosStyle.innerHTML += '<link rel="stylesheet" href="/css/index.css">';