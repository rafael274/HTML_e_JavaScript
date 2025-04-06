var numSecreto = Math.floor(Math.random()*100)+ 1 ;


function verificarPalpite(){

    var palpite = parseInt(document.getElementById('palpite').value);
    var resultado;

    if(palpite == numSecreto){
        resultado = "PARABÉNS VC É TOP MESMO EIN";
    }else if(palpite < numSecreto){
        resultado = "Opa não foi dessa vez, chuta mais alto!!!!!";
    }else{
        resultado = "Opa nããão, chuta mais baixo!!!";
    }
    document.getElementById('resultado').innerHTML = resultado;
}