function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('Erro, verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('txtsexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Sua idade é ${idade} Anos.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 12) {
                img.setAttribute('src', 'criancamas.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovemmas.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'adultomasc.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade <= 12) {
                img.setAttribute('src', 'criancafem.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'adultomel.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos que você é ${genero}!`
        res.appendChild(img)
    }

}