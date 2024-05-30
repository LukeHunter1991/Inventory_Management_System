function checkboxToggle() {
  var isAdmin = document.getElementById('isadmin-login');
  isAdmin.value = isAdmin.checked;
}

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const isAdmin = document.querySelector('#isadmin-login').value.trim();

  if (email && password && isAdmin) {
    const response = await fetch('/api/employee/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, isAdmin }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      if (isAdmin === 'true') {
        document.location.replace('/api/admin');
      } else {
        document.location.replace('/api/employee');
      }
    } else {
      const jsonData = await response.json();
      alert(JSON.stringify(jsonData));
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
