var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var subtrair = document.getElementById('subtract');
var soma = document.getElementById('sum'); 

soma.addEventListener('click', function(){
    if(currentNumber < 10){
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
        document.getElementById('currentNumber').style.color = "white";
    }
});

subtract.addEventListener('click', function(){
    if(currentNumber > 0) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }else {
        document.getElementById('currentNumber').style.color = "red";
    }
});
