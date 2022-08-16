function copiarEm  (){
    let copiarE = document.getElementById("copiarEmail").value;

   if (navigator.clipboard.writeText(copiarE)){
    document.getElementById("botaoEm").style.filter = "grayscale(100%)";
   }
   setInterval(function() {
    document.getElementById("botaoEm").style.filter = "none";
   }, 3000 );

}

function copiarNumb (){
    let copiarM = document.getElementById("copiarNumber").value;
    
    if (navigator.clipboard.writeText(copiarM)){
        document.getElementById("botaoNum").style.filter = "grayscale(100%)";
    }
    setInterval(function(){
        document.getElementById("botaoNum").style.filter = "none";
    }, 3000);
}
