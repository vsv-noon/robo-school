const sendForm = () => {
  const phoneInput = document.getElementById('phone');
  const contactsForm = document.forms.sendForm;

  phoneInput.addEventListener('input', function(e) {
    
      // let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      // e.target.value = !x[2] ? x[1] : (x[1] ? '(' + x[1] : '') + (x[2] ? ')' + x[2] : '') + (x[3] ? '-' + x[3] : '');
      
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = (x[1] ? '+' + x[1] : '') + (x[2] ? '(' + x[2] : '') + (x[3] ? ')' + x[3] : '') + (x[4] ? '-' + x[4] : '');
    

    // console.log(x);
  });

  contactsForm.addEventListener('submit', (e) => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
    console.log(phoneInput.value);
    if (phoneInput.value.length < 10 || phoneInput.value.length > 11) {
      alert("Введите 11 цифр телефонного номера");
      e.preventDefault();
    } else {

      alert('Ваше сообщение отправлено.')
    }
    // e.preventDefault();

  })
}

export default sendForm;