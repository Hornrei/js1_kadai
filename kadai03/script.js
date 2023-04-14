let left = '';
let right = '';
let isInputLeft = true; //1つめの数字が入力中かどうか
let operator = null;


document.querySelectorAll('.number').forEach(element => {
  element.addEventListener('click', event => {
    const number = event.target.innerHTML;
    if (isInputLeft) {
      left += number;
      updateDisplay(left);
      start = true;

      return;
    }
    right += number;
    start = true;
    updateDisplay(right);

    document.querySelector('.clear').addEventListener('click', () => {
    
    
  });
})});

document.querySelectorAll('.operator').forEach(element => {
  element.addEventListener('click', event => {
    isInputLeft = false;
    start = false;
    operator = event.target.innerHTML;
  });
});

document.querySelector('.equal').addEventListener('click', event => {
  const leftNumber = Number(left);
  const rightNumber = Number(right);
  let result = 0;
  let kekka = '';
  

  switch(operator) {
    case '+':
      result = leftNumber + rightNumber;
      kekka = leftNumber.toLocaleString() + '+' + rightNumber.toLocaleString() + '=' + result.toLocaleString();
      addHistory(kekka);
      
      break;
    case '-':
      result = leftNumber - rightNumber;
      kekka = leftNumber.toLocaleString() + '-' + rightNumber.toLocaleString() + '=' + result.toLocaleString();
      addHistory(kekka);
      
      break;
    case '×':
      result = leftNumber * rightNumber;
      kekka = leftNumber.toLocaleString() + '×' + rightNumber.toLocaleString() + '=' + result.toLocaleString();
      addHistory(kekka);
      
      break;
    case '÷':
      result = leftNumber / rightNumber;
      kekka = leftNumber.toLocaleString() + '÷' + rightNumber.toLocaleString() + '=' + result.toLocaleString();
      addHistory(kekka);
      
      break;
    case '%':
      result = leftNumber / 100;
      kekka = leftNumber.toLocaleString() + '% =' + result.toLocaleString();
      addHistory(kekka);
      
      break;
    
    case 'x²':
      result = leftNumber * leftNumber;
      kekka = leftNumber.toLocaleString() + '²' + '=' + result.toLocaleString();
      addHistory(kekka);
      
      break;
    
    case 'x^y':
      // result = leftNumber ^ rightNumber;
      let i = 0;
      let a = 1;
      while(i <= rightNumber - 1){
        a = a * leftNumber;
        i += 1;
      }
      result = a;
      kekka = leftNumber.toLocaleString() + '^' + rightNumber.toLocaleString() + '=' + result.toLocaleString();
      addHistory(kekka);
      
      break; 

    case '!':
      let j = leftNumber;
      let b = 1;
      while(j >= 1){
        b = b * j;
        j -= 1;
      }
      result = b;
      kekka = leftNumber.toLocaleString() + '! =' + result.toLocaleString();
      addHistory(kekka);
      
      break;
    default:
      result = 0;
  }

  updateDisplay(result);
  // addHistory(kekka);
  reset();
  left = result
});

document.querySelector('.clear').addEventListener('click', () => {
  if (isInputLeft){
    left = left.substring(0,left.length-1);
    updateDisplay(left);
  } else{
    right = right.substring(0,right.length-1);
    updateDisplay(right);
  }
});


document.querySelector('.all-clear').addEventListener('click', () => {
  reset();
  updateDisplay(0);
  
});

document.querySelector('.point').addEventListener('click', () => {
  if(isInputLeft){
    if(left.indexOf('.') != -1){
      return;
    }
  }
  
  if(right.indexOf('.') != -1){
    return;
  }

  
  
  if (isInputLeft){
      left += '.';
      updateDisplay(left)
      return;
    }
  if(right == ''){
      right += '0.';
      updateDisplay(right);
      return;
    }else{
      right += '.';
      updateDisplay(right)
    }
  
})

const resultElement = document.querySelector('.display');
function updateDisplay(number) {

  num = Number(number)
  const baseFontsize = 25;
  let a = Math.floor(number.length / 3);
  const fontsize = baseFontsize - a;
  resultElement.style.fontSize = `${fontsize}px`;
  resultElement.innerHTML =num.toLocaleString();
}

function reset() {
  left = '';
  right = '';
  isInputLeft = true;
  operator = null;
  fontsize = 25;
  resultElement.style.fontSize = '25px';
}

const histories = document.querySelector('.histories')
function addHistory(formula) {
  const history = document.createElement('li');
  history.innerHTML = formula;
  histories.prepend(history);
}

