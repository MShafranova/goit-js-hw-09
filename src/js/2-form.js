const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function updateFormData() {
    return {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }
}

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
}
let formData = updateFormData();

form.addEventListener('input', () => {
    formData = updateFormData();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Both fields must be filled in to send the form!');
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = updateFormData();
});