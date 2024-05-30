// Write your code here...
const formEl = document.getElementById('form')
const emailFld = document.getElementById('email')
const passwordFld = document.getElementById('password')
const repasswordFld = document.getElementById('rePassword')
const fullnameFld = document.getElementById('fullName')
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;


const submitForm = (data) => {
console.log('form submitted')
};

// Common logic to validate every feild it adds an extra class to elements
const validateFld = (el, condition) => {
  if (condition) {
    el.parentElement.classList.remove('form-field-error');
  } else {
    el.parentElement.classList.add('form-field-error');
  }
};

// email feild
emailFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  validateFld(this, evt.target.reportValidity());
});

// password feild
passwordFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  validateFld(this, passwordRegEx.test(evt.target.value));
});

// Retype password
repasswordFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  validateFld(this, passwordFld.value === evt.target.value);
});

// full name
fullnameFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  evt.target.value = evt.target.value.trimLeft()
  validateFld(this, evt.target.reportValidity());
});


// form event listner
formEl.addEventListener('submit', function (evt) {
  evt.preventDefault();
 submitForm(getFormValues);
});
