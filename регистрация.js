function showForm(formId) { 
    var forms = document.getElementsByClassName("form"); 
    for (var i = 0; i < forms.length; i++) { 
        if (forms[i].id == formId) { 
            forms[i].classList.add("active"); 
        } else { 
            forms[i].classList.remove("active"); 
        } 
    } 


const scriptURL = 'https://script.google.com/macros/s/AKfycbywb9r7r9JNS94K8Khau2VcACwXX2QoAHHUPj7vJJIhXCZ4lnayzWyJqJ5ainrazNy5/exec'
const form = document.forms['register']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
}