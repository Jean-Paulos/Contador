var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var subtrair = document.getElementById('subtract');
var soma = document.getElementById('sum'); 

soma.addEventListener('click', function(){
    if(currentNumber <= 9){
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
        document.getElementById('currentNumber').style.color = "white";
    }else {
        return;
    }
});

subtract.addEventListener('click', function(){
    if(currentNumber >= 0) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }else if(currentNumber <= 0){
        document.getElementById('currentNumber').style.color = "red";
    }else {
        return;
    }
});






/* tente implementar os eventos usando o metodo addeventlistener
crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex 0 <= count > 10)
muda a cor do texto em current_number para vermelho quando o numero for negativo */