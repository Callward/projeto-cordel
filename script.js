function carregar(){
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem') 
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `agora são ${hora} horas`
    
    }
    
    if (hora >= 0 && hora <12 )  {
    
        img.src = `bom dia.png`
    }   
    
    else if (hora>=12 && hora <18)  {
    img.src= 'boa tarde.png'
    }
    else (
        img.src = 'boa noite.png'
    )
