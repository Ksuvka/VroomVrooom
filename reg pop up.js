const openPOPUP = document.getElementById('open_pop_up');
const close =document.getElementById('close_pop_up');
const close2 =document.getElementById('close_pop_up_2');
const popUp = document.getElementById('pop_up');
const successMessage = document.getElementById("successMessage");
const registrationForm = document.getElementById("register");


openPOPUP.addEventListener('click', function(e){
    e.preventDefault();

    popUp.classList.add('active');
})

close.addEventListener('click', () =>{
    popUp.classList.remove('active');
})
close2.addEventListener('click', () =>{
    popUp.classList.remove('active');
})

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    successMessage.classList.remove("hidden"); // Показываем сообщение
});



function showForm(formId) { 
    var forms = document.getElementsByClassName("pop_up_body"); 
    for (var i = 0; i < forms.length; i++) { 
        if (forms[i].id == formId) { 
            forms[i].classList.add("active"); 
        } else { 
            forms[i].classList.remove("active"); 
        } 
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



