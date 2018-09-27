// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
const g = G$('John', 'Doe');

// use our chainable methods
g.log().greet().setLang('es').greet(true);

// using our object on the click of the login button
$('#login').click(function() {

  // create a new 'Greetr' object (let's pretend we know the name from the login)
  const loginGrtr = G$('Jane', 'Doe');

  // hide the login on the screen
  $('#logindiv').hide();

  // fire off an HTML greeting, passing '#greeting' as the selector and the chosen language, and log the welcome as well
  loginGrtr.setLang($('#lang').val()).HTMLgreeting('#greeting', true).log();

});