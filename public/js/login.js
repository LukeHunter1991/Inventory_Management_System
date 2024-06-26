const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const jsonData = await response.json();

      /* Once the employee is authenticated, based on the role of employee: directed either to admin dashboard or employee dashboard */
      if (jsonData.employee.is_admin === true) {
        document.location.replace('/admin');
      } else {
        document.location.replace('/employee');
      }
    } else {
      const jsonData = await response.json();
      alert(response.statusText + ': ' + jsonData.message);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
