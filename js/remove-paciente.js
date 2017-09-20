var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    // Somente executará nosso código caso o elemento em que clicamos seja um <td>.
    if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
    }
});