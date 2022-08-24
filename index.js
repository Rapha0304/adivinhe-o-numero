function instrucao(qual){
    document.querySelector("#mensagem").innerHTML = qual;
}
    function jogo(fase) {
        console.log(fase);
  
    if(fase === 1){
        instrucao ("Voce deve adivinhar o numero que vou pensar....");
    }
    else if (fase === 2){
       instrucao  ("Estou pensando em um numero de 1 a 50!");
        numero = Math.floor(Math.random()*50)+1
    }
    else if (fase === 3){
        instrucao("Tente adivinhar o numero!");
       document.querySelector("#entrada").setAttribute("style","display:block;");
        }
        else{

        
        var tentativa = document.querySelector("#entrada").value;

        if(tentativa == numero){
            instrucao("Prabens! Voce acertou!");
         }
         else if(tentativa < numero){
             instrucao("Seu numero é baixo demais...");
         }
         else if(tentativa > numero){
             instrucao("Seu numero é alto demais...");

         }
    }
}


var fase=0;
var numero;
document.querySelector('button').onclick = function(){
    fase= fase+1;
    jogo(fase);
}