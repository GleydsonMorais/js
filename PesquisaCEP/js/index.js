const campoCep = document.querySelector('#cep')
const campoCepErro = document.querySelector('#cepErro')
const campoRua = document.querySelector('#rua')
const campoNumero = document.querySelector('#numero')
const campoBairro = document.querySelector('#bairro')
const campoCidade = document.querySelector('#cidade')
const campoEstado = document.querySelector('#estado')
const loadingField = document.querySelector('img#loading')
const formulario = document.querySelector('form')

campoCep.addEventListener('focus', () => {
  limpaCepErro()
})

campoCep.addEventListener('blur', () => {
  let cep = campoCep.value

  if (/\d{5}-?\d{3}/.test(cep)) {
    buscaEndereco(cep)
  } else {
    mostraCepErro()
  }
})

function buscaEndereco(cep) {
  loadingField.classList.toggle('hidden')
  formulario.classList.toggle('loading')
  let url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(res => res.json())
    .then(cepInfo => {
      if(cepInfo.erro) {
        limpaCamposEndereco()
      } else {
        formulario.classList.toggle('loading')
        loadingField.classList.toggle('hidden')
        campoRua.value = cepInfo.logradouro
        campoBairro.value = cepInfo.bairro
        campoCidade.value = cepInfo.localidade
        campoEstado.value = cepInfo.uf
  
        campoNumero.focus()
        limpaCepErro()
      }
    })
    .catch(error => {
      mostraCepErro()
    })
}

function limpaCepErro() {
  campoCep.classList.remove('input-cep-error')
  campoCepErro.classList.add('hidden')
}

function mostraCepErro() {
  campoCep.classList.add('input-cep-error')
  campoCepErro.classList.remove('hidden')
  limpaCamposEndereco()
}

function limpaCamposEndereco() {
  campoRua.value = ''
  campoNumero.value = ''
  campoBairro.value = ''
  campoCidade.value = ''
  campoEstado.value = ''
}