const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector('#firstname-signup').value.trim();
  const lastname = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const isAdmin = document.querySelector('#isadmin-signup').value.trim();

  if (firstname && lastname && email && password && isAdmin === 'false') {
    const response = await fetch('/api/user/signup/', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, email, password, isAdmin }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      if (isAdmin === 'true') {
        document.location.replace('/admin');
      } else {
        document.location.replace('/employee');
      }
    } else {
      const jsonData = await response.json();
      const error = jsonData.errors;
      const errorDetailStrObj = jsonData.parent;

      const errorStrObj = JSON.stringify(error[0]);

      const errorDetail = errorDetailStrObj.code;

      const parsedErrObj = JSON.parse(errorStrObj);
      if (errorDetail.trim() === '23505') {
        alert(
          'Failed to signup' +
            ': Email ID ' +
            parsedErrObj.value +
            ' already exists.'
        );
      } else {
        alert('Failed to signup');
      }
    }
  }
};

document
  .querySelector('.sign-form')
  .addEventListener('submit', signupFormHandler);
