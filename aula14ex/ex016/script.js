function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i < 0 || p < 1) {
        window.alert('Valores inválidos!')
    } else {

        if ( i < f) {
            // contagem crescente
            resultado.innerHTML = `Contando... <br> `
            resultado.innerHTML += `${i} 👉 `

            while (i <= f) {
                let soma = i + p
                if (soma <= f) {
                    resultado.innerHTML += `${soma} 👉 ` 
                }
                i += p
            }
        } else {
            // contagem decrescente
            resultado.innerHTML = `Contando... <br> `
            resultado.innerHTML += `${i} 👉 `

            while (i >= f) {
                let soma = i - p
                if (soma >= f) {
                    resultado.innerHTML += `${soma} 👉 ` 
                }
                i -= p
            }
        }
        resultado.innerHTML += `🚩`
    }
}