const form = document.querySelector("#form-post")

const titulo = document.querySelector("#titulo")
const conteudo = document.querySelector("#conteudo")

const postArtigo = document.querySelector('.post-section')
const tituloRenderizar = document.querySelector("#renderizador-titulo")
const conteudoRenderizar = document.querySelector("#renderizador-conteudo")

form.addEventListener("submit", event => {

    event.preventDefault()

    const data = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1

    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
        
    })
    .then(Response => Response.json())
    .then(data => {

        postArtigo.style.display = "block"
        tituloRenderizar.innerHTML = data.title

        conteudoRenderizar.innerHTML = data.body

        form.reset()
    })

})