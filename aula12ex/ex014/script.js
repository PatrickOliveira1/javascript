function carregar() {
    let mensagem = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        document.body.style.backgroundColor = "#70b3ff"
        imagem.style.backgroundImage = "url('imagens/manha.jpg')"
    } else if (hora < 18) {
        document.body.style.backgroundColor = "#ffc170"
        imagem.style.backgroundImage = "url('imagens/tarde.jpg')"
    } else {
        document.body.style.backgroundColor = "#5b2eff"
        imagem.style.backgroundImage = "url('imagens/noite.jpg')"
    }
}

Element.addEventListener(onload, carregar())