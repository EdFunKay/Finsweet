const form = document.querySelector('.ValidationForm');
const errorMessage = document.querySelector('.error-message');
console.log(form);
console.log(errorMessage);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.querySelector('.form-name');
  const emailInput = document.querySelector('.form-email');
  const messageInput = document.querySelector('.form-message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Валидация имени
  if (name.length < 2 || name.length > 12 || /\d/.test(name)) {
    errorMessage.textContent =
      'Invalid name. It should be between 2 and 12 characters, and should not contain numbers.';
    return;
  }

  // Валидация email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Invalid email address.';
    return;
  }

  // Ваша дополнительная валидация для сообщения, если нужно

  // Если все данные прошли валидацию
  alert('Отправлено'); /// Придумайте что вывести вместо алерта
  // Здесь вы можете отправить данные формы на сервер или выполнить другие действия

  // Очистка полей формы
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
