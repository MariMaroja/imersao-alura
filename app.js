function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa")
    // Obtém o termo de pesquisa inserido pelo usuário
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    // Verifica se o usuário inseriu algum termo de pesquisa
    if(!campoPesquisa) {
        // Exibe uma mensagem caso o campo de pesquisa esteja vazio
        section.innerHTML= "<p>Tente pesquisar por um jogo ;)</p>"
        return
    }
    // Converte o termo de pesquisa para minúsculas para tornar a pesquisa case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
let resultados = "";
let titulo= "";
let descricao= "";
let tags= "";
let criador= "";
// Itera sobre cada jogo nos dados
for (let dado of dados) {
     // Converte os dados do jogo para minúsculas para facilitar a comparação
    titulo= dado.titulo.toLowerCase()
    descricao= dado.descricao.toLowerCase()
    tags= dado.tags.toLowerCase()
    criador= dado.criador.toLowerCase()
    // Verifica se o termo de pesquisa está presente em algum dos campos do jogo
    if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes(campoPesquisa) || criador.includes(campoPesquisa))
        // Adiciona um novo elemento HTML com as informações do jogo aos resultados
        {resultados += `
        <div class="item-resultado">
                        <h2> 
                        <a href=${dado.trailer} target="_blank">${dado.titulo}</a></h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p class="descricao-meta"> <a href=${dado.midia} target="_blank">${dado.criador}</p>
                        <a href=${dado.link} target="_blank">para download do jogo</a>
                    </div>
        `}
        // **Observação:** A linha abaixo é útil para depuração, mas pode ser removida em produção
    console.log(dado.titulo.includes (campoPesquisa))
    }
    // Verifica se algum resultado foi encontrado
    if (!resultados) {
        // Exibe uma mensagem caso nenhum jogo seja encontrado
        resultados = "<p>Nenhum jogo encontrado ;-;</p>"
    }
    
// Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
section.innerHTML = resultados
}




