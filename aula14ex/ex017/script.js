function gerarTabuada() {
    let number = document.getElementById('number')
    let resultado = document.getElementById('resultado')

    if (number.value.length == 0) {
        window.alert('Valor inválido!')
    } else {
        resultado.style.display = 'block'
        let numero = Number(number.value)
        resultado.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text += `${numero} x ${i} = ${numero * i}`
            item.value = `resultado${i}`
            resultado.appendChild(item)
        }
    }
}