function checkboxToggle() {
  var isAdmin = document.getElementById('isadmin-login');
  isAdmin.value = isAdmin.checked;
  alert(isAdmin.value);
}

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const isAdmin = document.querySelector('#isadmin-login').value.trim();

  alert(email);

  if (email && password && isAdmin) {
    const response = await fetch('/api/employee/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, isAdmin }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Response ok');
      alert(isAdmin);
      if (isAdmin === 'true') {
        alert('ADMIN');
        document.location.replace('/api/admin');
      } else {
        alert('EMP');
        document.location.replace('/api/employee');
      }
    } else {
      alert('Failed to log in');
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
