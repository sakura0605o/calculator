let currentNumber='' /*定義currentNumber來放數值*/
let result=''
let operator=''

function appendNumer(number){ //創建一個funcion 名為appendNumber (定義被傳送的值的名稱) 用於累計每次觸發button的值
    currentNumber += number; //當button click一次就新增一次值
    // alert(currentNumber);
    updateDisplay(currentNumber);//顯示當前輸入的值
}

function updateDisplay(value){ //創建一個funcion 名為updateDisplay (定義被傳送的值的名稱) 用於更新畫面(input)
    document.getElementById('cal-formula').value=value;
}

function setoperator(op){
    operator=op;
    updateDisplay(currentNumber+operator);
}

function clearValue(){
    currentNumber='';
    updateDisplay(currentNumber);
}