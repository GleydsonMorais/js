const campoCalculaIMCBotao = document.querySelector('#calc-imc-btn')
const campoAltura = document.querySelector('input[name=altura]')
const campoPeso = document.querySelector('input[name=peso]')
const campoAviso = document.querySelector('#warning')
const campoIMC = document.querySelector('#imc')
const tempoTransicao = 400

function imcResultado(peso, altura, sexo) {
  const imc = peso / altura ** 2

  if (sexo === 'feminino')
    if (imc < 19.1)
      return 'Abaixo do Peso'
    else if (imc < 25.8)
      return 'Peso Normal'
    else if (imc < 27.3)
      return 'Marginalmente Acima do Peso'
    else if (imc < 32.3)
      return 'Acima do Peso Ideal'
    else
      return 'Obeso'
  else
    if (imc < 20.7)
      return 'Abaixo do Peso'
    else if (imc < 26.4)
      return 'Peso Normal'
    else if (imc < 27.8)
      return 'Marginalmente Acima do Peso'
    else if (imc < 31.1)
      return 'Acima do Peso Ideal'
    else
      return 'Obeso'
}

function validaValores(altura, peso) {
  return !(isNaN(altura) || altura == 0 || isNaN(peso) || peso == 0)
}

function calculadoraDeIMC() {
  let altura = campoAltura.value.replace(',','.')
  let peso = campoPeso.value.replace(',', '.')
  let sexo = document.querySelector('input[name=sexo]:checked').value
  let resultado = ''

  if (validaValores(altura, peso)) {
    resultado = imcResultado(peso, altura, sexo)
    esconderAviso()
    mostrarBorder(resultado)
  } else {
    mostrarAviso()
    esconderBorder()
  }

  campoIMC.value = resultado
}

const border = {
  'Abaixo do Peso': 'border border-warning bg-warning text-white',
  'Peso Normal': 'border border-sucess bg-success text-white',
  'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
  'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
  'Obeso': 'border border-danger bg-danger text-white'
}

function mostrarBorder(resultado) {
  setTimeout(function () {
    campoIMC.className = `form-control form-control-lg ${border[resultado]}`
  }, tempoTransicao)
}

function esconderBorder() {
  setTimeout(function () {
    campoIMC.className = 'form-control form-control-lg'
  }, tempoTransicao)
}

const mensagemAviso =
  `<div class="alert alert-warning" role="alert">
      <strong>Informe o peso e a altura corretamente.</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`

function mostrarAviso() {
  campoAviso.innerHTML = mensagemAviso
}

function esconderAviso() {
  campoAviso.innerHTML = ''
  campoIMC.className = 'form-control form-control-lg text-black'
}

campoCalculaIMCBotao.addEventListener('click', function(event) {
  event.preventDefault()
  calculadoraDeIMC()
})

document.body.addEventListener('keydown', function(event) {
  if(event.key == "Enter"){
    event.preventDefault()
    calculadoraDeIMC()
  }
})