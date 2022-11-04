function carregar() {
    var hoje = new Date()
    var hora = hoje.getHours()
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('img2')
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são <strong> ${hora} </strong> horas`
        document.body.style.backgroundColor='#A6BED6'
        imagem.src = 'imagens/manhã.jpg'
        
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são <strong> ${hora} </strong> horas`
        imagem.src='imagens/tarde.jpg'
        document.body.style.backgroundColor = '#FCAB3A'
        
    } else {
        msg.innerHTML = `Agora são <strong> ${hora} </strong> horas`
        imagem.src='imagens/noite.jpg'
        document.body.style.backgroundColor ='#755F98'
    
    }
}