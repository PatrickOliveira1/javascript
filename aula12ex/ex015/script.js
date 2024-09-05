function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let foto = document.getElementById('fotos')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        foto.style.display = 'block'

        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''

        if (fsex[0].checked) {

            genero = 'Homem'

            if (idade > 0 && idade < 5) {
                foto.style.backgroundImage = "url('imagens/bebe-menino.webp')"
            } else if (idade < 12) {
                foto.style.backgroundImage = "url('imagens/criança-menino.webp')"
            } else if (idade < 21) {
                foto.style.backgroundImage = "url('imagens/jovem-menino.webp')"
            } else if (idade < 65) {
                foto.style.backgroundImage = "url('imagens/adulto-homem.avif')"
            } else {
                foto.style.backgroundImage = "url('imagens/idoso.jpeg')"
            }
        } else {

            genero = 'Mulher'

            if (idade > 0 && idade < 5) {
                foto.style.backgroundImage = "url('imagens/bebe-menina.webp')"
            } else if (idade < 12) {
                foto.style.backgroundImage = "url('imagens/criança-menina.jpg')"
            } else if (idade < 21) {
                foto.style.backgroundImage = "url('imagens/jovem-menina.jpg')"
            } else if (idade < 65) {
                foto.style.backgroundImage = "url('imagens/adulto-mulher.jpg')"
            } else {
                foto.style.backgroundImage = "url('imagens/idosa.jpg')"
            }
        }
    }
}