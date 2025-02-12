let currentNumber = '0'; /*定義currentNumber來放數值*/
let previousNum = '0';
let formula = '';
let result = 0;
let operator = '';
let dotcal = 0;

function appendNumer(number) { //創建一個funcion 名為appendNumber (定義被傳送的值的名稱) 用於累計每次觸發button的值
    if (number !== 0 && number !== '.') {      //當輸入的數字不為0與.時  (需新增.的計數 讓點不能一直輸入)
        if (formula === '0'){
           formula = '';
        }  
        if (currentNumber === '0') {     //當Current為0時 清空current
            currentNumber = '';
        }      
        currentNumber += number;    //新增當下click btn 的值
        formula += number;
    }
    else if (number !== 0 && number === '.') { //當輸入的數字為.時
        if (dotcal === 0) {                     //當點計數器為0時 則新增. 及 計數器+1 當計數器>1時不動作
            currentNumber += number;   //新增當下click btn 的值
            formula = number;
            dotcal += 1;
        }
    }
    if (operator !== '') {  //檢查是否有運算子 有的話進行計算
        calculate();
    }
    check();
    updateformula(formula);//顯示當前輸入的值
    updateresult(result);
}

function checkValue(number) {

}

function updateformula(value) { //創建一個funcion 名為updateDisplay (定義被傳送的值的名稱) 用於更新畫面(input)
    document.getElementById('cal-formula').value = value;
}

function updateresult(value){
    document.getElementById('cal-result').value = value;
}

function setoperator(op) {
    operator = op;
    previousNum = currentNumber;
    formula += op;
    currentNumber = "";
    check();
    updateformula(formula);
    updateresult(result);
}

function calculate() {
    let pre = parseFloat(previousNum);
    let cur = parseFloat(currentNumber);
    if (cur === '') return;
    switch (operator) {
        case '+': {
            result = pre + cur;
            console.log('pre ' + pre);
            console.log('cur ' + cur);
            break;
        }
        case '-': {
            result = pre - cur;
            console.log('pre ' + pre);
            console.log('cur ' + cur);
            break;
        }
        case '×': {
            result = pre * cur;
            console.log('pre ' + pre);
            console.log('cur ' + cur);
            break;
        }
        case '÷': {
            result = pre / cur;
            console.log('pre ' + pre);
            console.log('cur ' + cur);
            break;
        }
    }

}

function clearValue() {
    previousNum = '0';
    currentNumber = '0';
    formula = currentNumber;
    result = 0;
    dotcal = 0;  //點計數器歸0
    updateformula(formula);
    updateresult(result);
    check();
}

function check() {
    console.log('previousNum ' + previousNum);
    console.log('operator ' + operator);
    console.log('currentNumber ' + currentNumber);
    console.log('formula ' + formula);
    console.log('result ' + result);
    console.log('dotcal ' + dotcal);
}