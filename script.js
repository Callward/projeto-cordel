function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var x = 1800
    var Fano = document.getElementById('txtano') 
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else if (Fano.value <x){
        var Idade = ano - Number(Fano.value)
        window.alert(`satisfeito joao?? sua idade é falsa nao creio que uma pessoa com ${Idade} anos) saberia usar um celular, agora me responda javas amoleceu teu penes?? .`)
        
    }  else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homen'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if ( idade < 21 ) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if ( idade < 21 ) 
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulta-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f')
            }
        }
        res.innerHTML = `Detectamos s ${genero} com ${idade} anos.`
        res.appendChild(img)
}
            
 



















