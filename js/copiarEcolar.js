function copiarEm() {
    let copiarE = document.getElementById("copiarEmail").value;

    if (navigator.clipboard.writeText(copiarE)) {
        document.getElementById("botaoEm").style.filter = "grayscale(100%)";
        document.getElementById("copiadoEm").style.display = "inline";
    }
   setInterval(function() {
    document.getElementById("botaoEm").style.filter = "none";
    document.getElementById("copiadoEm").style.display = "none";
   }, 3000 );

}

function copiarNumb (){
    let copiarM = document.getElementById("copiarNumber").value;
    
    if (navigator.clipboard.writeText(copiarM)){
        document.getElementById("botaoNum").style.filter = "grayscale(100%)";
        document.getElementById("copiadoNum").style.display = "inline";
    }
    setInterval(function(){
        document.getElementById("botaoNum").style.filter = "none";
        document.getElementById("copiadoNum").style.display = "none";
    }, 3000);
}
