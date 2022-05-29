function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res= document.querySelector('div#res')
  
    
 if (fano.value.length == 0 || Number(fano.value) >ano){
window.alert ('error')
 }
    else {   
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img =document.createElement('img')
        img.setAttribute('id','foto')
        if( fsex[0].checked)
        { gênero ='homen'
if ( idade >=0 && idade < 13){ img.setAttribute('src','foto-bebe-m.png')}
else if ( idade >=14 && idade < 28){ img.setAttribute('src','foto-jovem-m.png')}
else if ( idade >=29 && idade <50 ){ img.setAttribute('src','foto-adulto-m.png')}
else if ( idade >=51 && idade < 1200){ img.setAttribute('src','foto-idoso-m.png')}
}            
            
 else if ( fsex [1].checked)
            {gênero='mulher'}
if ( idade >=0 && idade < 13){ img.setAttribute('src','foto-bebe-f.png')}
else if ( idade >=14 && idade < 28){ img.setAttribute('src','foto-jovem-f.png')}
else if ( idade >=29 && idade <50 ){ img.setAttribute('src','foto-adulto-f.png')}
else if ( idade >=51 && idade < 1200){ img.setAttribute('src','foto-idoso-f.png')}







            res.innerHTML = `detectamos ${gênero} com ${idade}anos`
            res.appendChild(img)
        
 
} }
 
 
     
           
            
 



















