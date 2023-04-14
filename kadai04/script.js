const nameElement = document.querySelector('input[name="name"]');
const emailElement = document.querySelector('input[name="email"]');
const passwordElement = document.querySelector('input[name="password"]');
const telElement = document.querySelector('input[name="tel"]');
const submitElement = document.querySelector('input[name="submit"]');



submitElement.addEventListener('click', event => {
  removeErrors();

  if (nameElement.value === '') {
    showError(nameElement, '入力してください');
  }

  if (!emailElement.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    showError(emailElement, '正しいメールアドレスを入力してください');
  }

  if (!telElement.value.match(/^0\d{9,10}$/)) {
    showError(telElement, '正しい電話番号を入力してください');
  }


  if (existsError()) {
    event.preventDefault();
  }

  if (passwordElement.value.length <= 7) {
    showError(passwordElement, '8文字以上で入力してください');
  }
  

});






function showError(element, message) {
  const errorElement = document.createElement('p');
  errorElement.classList.add('message-error');
  errorElement.innerText = message;
  element.closest('label').append(errorElement);
}

function removeErrors() {
  const errors = document.querySelectorAll('.message-error');
  errors.forEach(error => error.remove());
}

function existsError() {
  const errors = document.querySelectorAll('.message-error');
  return errors.length > 0;
}

function lengthError() {
  const errors = document.querySelectorAll('.message-error');
  return errors.length > 0;
}