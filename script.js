// Atualização automática do ano

// a linha abaixo captura a tag <span> e armazena o "conteúdo" na variavel ano
let ano = document.getElementById("copyrightYear")

// a linha abaixo obtem o ano do servidor e armazena na variável anoAtual
let anoAtual = new Date().getFullYear()

// a linha abaixo insere o conteúdo da variável anoAtual em ano(variável relacionada a tag <span>)
ano.textContent = anoAtual

/**Recolher menu na rolagem */
//Capturar o evento de rolagem diretamente no JS

window.addEventListener('scroll', function () {
    let menuCheck = this.document.getElementById('check')
    //se a caixa input check estiver marcada, desmarcar
    menuCheck.checked = false
})