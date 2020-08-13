// procurar o botao
document.querySelector('#add-time')
// quando clicar no botao 
.addEventListener('click', cloneField ) //"ouvidor" de eventos (qual evento, qual acao (paramentros dentopr das aspas))
// executar a acao 
function cloneField() {
    //     duplicar os campos. que campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //dado boolean: true or false

   //pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
        
    })
    //     colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}





