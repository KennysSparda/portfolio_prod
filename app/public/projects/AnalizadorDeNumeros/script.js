var lista = []
const selectSaida = document.getElementById("selectSaida")
const valorEntrada = document.getElementById("entrada")
const divSaida = document.getElementById("saida")

function preencher() {
  selectSaida.innerHTML = ""
  selectSaida.setAttribute("size", lista.length)
  for(let i = 0; i<lista.length;i++) {
    selectSaida.innerHTML += `<option>${lista[i]}</option>`
  }
}

function adicionarElem() {
  if (valorEntrada.value.length == 0 ) {
    alert("Insira um valor primeiro!")
  } else {
    for(let i = 0; i<lista.length; i++) {
      if(valorEntrada.value == lista[i]) {
        alert("Valor ja adicionado!")
        valorEntrada.value = ""
        return
      }
    }
    lista.push(parseInt(valorEntrada.value))
    valorEntrada.value = "" 
    divSaida.innerHTML = "Auardando..."
    preencher()
  }
}

function soma(a) {
  let soma = 0
  for(let i = 0; i<a.length;i++) {
    soma += a[i]
  }
  return soma
}

function media(a) {
  let media = soma(a) / a.length
  return media
}

function analisar() {
  if ( lista.length == 0 ) {
    alert("Adicione valores antes de analizar!")
  } else {
    divSaida.innerHTML = ""
    lista.sort( function(a,b) { return a - b; })
    preencher()
    divSaida.innerHTML += `<p>A lista tem ${lista.length} elementos</p>`
    divSaida.innerHTML += `<p>O menor elemento é o ${lista[0]}</p>`
    divSaida.innerHTML += `<p>O maior elemento é o ${lista[lista.length-1]}</p>`
    divSaida.innerHTML += `<p>A soma de todos os elementos é ${soma(lista)}</p>`
    divSaida.innerHTML += `<p>A media de todos os elementos é ${media(lista)}</p>`
  }
}

