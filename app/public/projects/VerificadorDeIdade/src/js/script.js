function Verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("inputAno").value
  var res = document.getElementById("res")
  
  var imgFolder = "src/img"

  if (fano.length == 0 || fano > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - fano
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if ( fsex[0].checked) {
      genero = 'Homem'
      if( idade >= 0 && idade < 10 ) {
        // Criança
        img.setAttribute('src', `${imgFolder}/menino.jpg`)
      } else if( idade >= 10 && idade < 30 ) {
        // Jovem
        img.setAttribute('src', `${imgFolder}/homemJovem.jpg`)
      } else if( idade >= 30 && idade < 60 ) {
        // Adulto
        img.setAttribute('src', `${imgFolder}/homemMaduro.jpg`)
      } else if( idade >= 60 ) {
        // Idoso
        img.setAttribute('src', `${imgFolder}/senhor.jpg`)
      }
    } else if ( fsex[1].checked ) {
      genero = 'Mulher'
      if( idade >= 0 && idade < 10 ) {
        // Criança
        img.setAttribute('src', `${imgFolder}/menina.jpg`)
      } else if( idade >= 10 && idade < 30 ) {
        // Jovem
        img.setAttribute('src', `${imgFolder}/mulherJovem.jpg`)
      } else if( idade >= 30 && idade < 60 ) {
        // Adulto
        img.setAttribute('src', `${imgFolder}/mulherMadura.jpg`)
      } else if( idade >= 60 ) {
        // Idoso
        img.setAttribute('src', `${imgFolder}/senhora.jpg`)
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
