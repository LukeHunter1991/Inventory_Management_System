const router = require('express').Router();
const { Employee } = require('../../models');
const { adminAuth } = require('../../utils/helpers');

/* 
The `/api/user/login` endpoint
Route to authenticate the employee and direct to dashboard based on the Role of the employee.
 The req.body should look like this
{
  "email" : "allen@abc.com",
  "password" : "123"
}
*/
router.post('/login', async (req, res) => {
  try {
    const employeeData = await Employee.findOne({
      where: { email: req.body.email },
    });

    if (!employeeData) {
      res.status(400).json({
        message: 'Incorrect email or password, please try again',
      });
      return;
    }

    const validPassword = await employeeData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: 'Incorrect email or password, please try again',
      });
      return;
    }
    req.session.employee_name =
      employeeData.first_name.charAt(0) + employeeData.last_name.charAt(0);
    req.session.user_id = employeeData.id;
    req.session.is_admin = employeeData.is_admin;
    req.session.logged_in = true;

    const { first_name, last_name, email, is_admin } = employeeData;

    res.json({
      employee: { first_name, last_name, email, is_admin },
      message: 'You are now logged in!',
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

/* 
The `/api/user/signup` endpoint
Route to create a new employee 
 The req.body should look like this
{   
  "firstname": "Tom",
  "lastname": "Allen",
  "email" : "allen@abc.com",
  "password" : "password123",
  
}
*/
router.post('/signup', async (req, res) => {
  try {
    // All the fields you can create and the data attached to the request body.
    //firstname, lastname, email, password, isAdmin

    let isAdmin = false;
    

    const employeeData = await Employee.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      is_admin: isAdmin,
    });

    req.session.user_id = employeeData.id;
    req.session.is_admin = employeeData.is_admin;
    req.session.logged_in = true;

    const { first_name, last_name, email, is_admin } = employeeData;

    res.status(200).json({
      employee: { first_name, last_name, email, is_admin },
      message: 'You are now logged in!',
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
