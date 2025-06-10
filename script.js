const toastTrigger = document.getElementById('submit-position')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

var submit = document.getElementById("submit-position")


submit.addEventListener("click", function() {
    var texto = document.getElementById("texto").value.toString()
    var resultado = texto.toLowerCase();
    console.log(resultado)
    if (resultado == "993") {
        window.location.href = "/2.html"
    }

    if (resultado == "nigger") {
        window.location.href = "/3.html"
    }

    if (resultado == "pixa in" || resultado == "pixa-in") {
        window.location.href = "/4.html"
    } else if(resultado == "pixain"){
        window.alert("Não é assim que se escreve :P")
    }
    if (resultado == "#6b1812" || resultado == "adm") {
        window.location.href = "/5.html"
    } else if(resultado == "vermelho"){
        window.alert("Não é tão fácil assim cara")
    }
    if (resultado == "squirtle") {
        window.location.href = "/6.html"
    } else if(resultado == "squirt"){
        window.alert("Essa não é a nossa forma de falar >:C")
    }
})
