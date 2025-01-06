let currentNumber = '0' /*定義currentNumber來放數值*/
let result = ''
let operator = ''
let dotcal= 0

function appendNumer(number) { //創建一個funcion 名為appendNumber (定義被傳送的值的名稱) 用於累計每次觸發button的值
    if(number!==0 && number!=='.'){      //當輸入的數字不為0與.時  (需新增.的計數 讓點不能一直輸入)
        if (currentNumber === '0') {     //當Current為0時 清空current
            currentNumber = '';
        }
        currentNumber += number;    //新增當下click btn 的值
    }
    else if (number!==0 && number === '.'){ //當輸入的數字為.時
        if(dotcal===0){                     //當點計數器為0時 則新增. 及 計數器+1 當計數器>1時不動作
            currentNumber += number;   //新增當下click btn 的值
            dotcal+=1;
        }      
    }
    console.log(currentNumber);
    console.log(dotcal);
    updateDisplay(currentNumber);//顯示當前輸入的值
}

function checkValue(number) {
    
}

function updateDisplay(value) { //創建一個funcion 名為updateDisplay (定義被傳送的值的名稱) 用於更新畫面(input)
    document.getElementById('cal-formula').value = value;
    console.log(currentNumber);
}

function setoperator(op) {
    operator = op;
    updateDisplay(currentNumber + operator);
}

function clearValue() {
    currentNumber = '0';
    dotcal = 0;  //點計數器歸0
    updateDisplay(currentNumber);
}