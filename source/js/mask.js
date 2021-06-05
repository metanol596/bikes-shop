const phoneInput = document.querySelector('#phone');

const maskOptions = {
  mask: '+7(000)000-00-00'
}

const mask = new IMask(phoneInput, maskOptions);
