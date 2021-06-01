const router = require('express').Router();
const { Streetlights, User } = require('../models');


// test route to render home route
router.get('/home', async (req, res) => {
  res.render('home');
});


// TODO: make route to render '/login' view
// Remember, '/login' will need information about the user passed into it





// TODO: make route to render '/register' view



// TODO: make route to render '/main' view



// TODO: make '/logout' route. This will render '/login' view
// Even if we don't do login/logout routes correctly using sessions/cookies, 
// we can still make this route so that when the logout button is clicked,
// the user is redirected to the login view. This simulates a 'real' login/logout feature.



module.exports = router;