document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js est chargé');

  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;
    let errors = [];


    if (!name) {
      isValid = false;
      errors.push('Le nom est requis.');
    }

    if (!email) {
      isValid = false;
      errors.push('L\'email est requis.');
    } else if (!validateEmail(email)) {
      isValid = false;
      errors.push('L\'email n\'est pas valide.');
    }

    if (isValid) {

      console.log('Formulaire soumis avec succès !');
      form.reset();
    } else {

      console.error(errors.join('\n'));
    }
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
