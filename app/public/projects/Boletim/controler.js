var mediaMinima = 6
const qntDisciplinas = 7

function calcularDisciplina(numDisciplina) {
  let media = 0
  let soma = 0
  let aprovado = false

  let notaDisciplina1_1 = parseFloat(document.getElementById(`notaDisciplina${numDisciplina}_1`).value)
  let notaDisciplina1_2 = parseFloat(document.getElementById(`notaDisciplina${numDisciplina}_2`).value)
  let notaDisciplina1_3 = parseFloat(document.getElementById(`notaDisciplina${numDisciplina}_3`).value)
  let notaDisciplina1_4 = parseFloat(document.getElementById(`notaDisciplina${numDisciplina}_4`).value)

  let txtSoma = document.getElementById(`somaDisciplina${numDisciplina}`)
  let txtMedia = document.getElementById(`mediaDisciplina${numDisciplina}`)
  let txtAprovado = document.getElementById(`situacaoDisciplina${numDisciplina}`)
  
  soma = notaDisciplina1_1 + notaDisciplina1_2 + notaDisciplina1_3 + notaDisciplina1_4
  media = soma / 4
  if (media >= mediaMinima) { aprovado = true } else { aprovado = false}

  txtSoma.innerHTML = soma
  txtMedia.innerHTML = media

  if (aprovado) {
    txtAprovado.innerHTML = 'Aprovado'
    txtAprovado.style.backgroundColor = "#AAFFFF"
  } else {
    txtAprovado.innerHTML = 'Reprovado'
    txtAprovado.style.backgroundColor = "#FFAAAA"
  }
}

function setMedia() {
  mediaMinima = parseFloat(document.getElementById("setMedia").value)
  for (let numDisciplina=1; numDisciplina<=qntDisciplinas; numDisciplina++) {
    calcularDisciplina(numDisciplina)
  }
}