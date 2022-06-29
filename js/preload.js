const pre_carregamento = document.getElementById("preloadid");
const conteudo = document.getElementById("onloadid");

function preload(){
    pre_carregamento.style.opacity = "0";

    setTimeout(() => {
        pre_carregamento.style.display = "none"
        conteudo.style.display = "inline"
    }, 5000);
}





