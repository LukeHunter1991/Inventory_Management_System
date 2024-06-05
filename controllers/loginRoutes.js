const router = require('express').Router();

/* 
The `/login/` endpoint
Route to display the login page. If the employee is already logged in then redirects to the dashboard based on the role. 
*/
router.get('/', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in && req.session.is_admin) {
    res.redirect('/admin');
    return;
  } else if (req.session.logged_in && !req.session.is_admin) {
    res.redirect('/employee');
    return;
  }

  res.render('login');
});

/* 
The `/signup/` endpoint
Route to display the sign up page. If the employee is already logged in then redirects to the dashboard based on the role. 
*/
router.get('/signup', (req, res) => {
  // If a session exists, redirect the request to the homepage

  if (req.session.logged_in && req.session.is_admin) {
    req.session.destroy(() => {
      res.redirect('/signup');
      return;
    });
  } else if (req.session.logged_in && !req.session.is_admin) {
    req.session.destroy(() => {
      res.redirect('/signup');
      return;
    });
  }

  res.render('signup');
});

/* 
The `/logout/` endpoint
Route to logout the employee but destroying the session. On successful logout, the login page is displayed.
*/
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
