const email = document.querySelector("#email");
const sendBtn = document.querySelector('.booking__send');
const popup = document.querySelector('.booking__popup');
const close = document.querySelectorAll('[data-close-button]')

close.forEach(button => {
  button.addEventListener('click', () => {
      const popup = button.closest('.booking__popup')
      closePopup(popup)
  })
})

function closePopup(popup){
  if(popup == null) return
  popup.classList.remove('booking__show-popup')
}


const showError = (input, msg) => {
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector('.error-text');

  formBox.classList.add('error');
  errorMsg.textContent = msg;
}

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove('error');
}

const checkForm = input => {
  input.forEach(el => {
      if (el.value === '') {
          showError(el, el.placeholder)
      } else {
          clearError(el)
      };
  });
};


const checkEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
      clearError(email)
  } else {
      showError(email, 'E-mail is not correct')
  }
}

const checkErrors = () => {

  const allInputs = document.querySelectorAll('.booking__form-box');
  let errorCount = 0;

  allInputs.forEach(el => {
      if (el.classList.contains('error')) {
          errorCount++
      }
  })

  if (errorCount === 0) {
      popup.classList.add('booking__show-popup')
  }
}


sendBtn.addEventListener('click', e => {
  e.preventDefault();

  checkForm([email])
  checkEmail(email);
  checkErrors()

})

