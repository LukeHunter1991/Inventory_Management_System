const dayjs = require('dayjs');
module.exports = {
  withAuth: (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  },
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    if (date != null) {
      const originalDate = dayjs(date);
      const newDate = originalDate.format('M/D/YYYY');
      return newDate;
    }
    return;
  },
};
