const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector('#firstname-signup').value.trim();
  const lastname = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const isAdmin = document.querySelector('#isadmin-signup').value.trim();

  if (firstname && lastname && email && password && isAdmin) {
    const response = await fetch('/api/employee/signup', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, email, password, isAdmin }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      if (isAdmin === 'true') {
        document.location.replace('/api/admin');
      } else {
        document.location.replace('/api/employee');
      }
    } else {
      alert('Failed to signup');
    }
  }
};

document
  .querySelector('.sign-form')
  .addEventListener('submit', signupFormHandler);
