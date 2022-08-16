const pre_carregamento = document.getElementById("preloadid");
const conteudo = document.getElementById("onloadid");

function preload(){
    pre_carregamento.style.opacity = "0";

    setTimeout(() => {
        pre_carregamento.style.display = "none"
        conteudo.style.display = "inline"
    }, 2000);
};

const SobreInline = setTimeout(ConteudoSobre, 5000);

function ConteudoSobre(){

    document.getElementById("testeInline").style.display = "inline"
}




