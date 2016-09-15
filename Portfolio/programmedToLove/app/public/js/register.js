$(document).ready(function() {

	$('#modal2').openModal();

  var currentURL = window.location.origin;

  $('#registerButton').on('click', function(){

	  var registerBio = $('#registerBio').val().trim();
      var sexPref = $('input[name="gender"]:checked').val();
      var devPref = $('input[name="orientation"]:checked').val();
      var age = $('#ageID').val().trim();
      var mySex = $('input[name="myGender"]:checked').val();
      var myDev = $('input[name="myDev"]:checked').val();
      var username = $('<%= user.username %>').val();

      if(registerBio === ''){
       
        $('#modalAlert').openModal();
        $('#modalAlert h5').text("Don't be a stranger!");
        $('#modalAlert p').text("Please complete the bio section so our users can get to know how awesome you are.");
        return
      };

      if(age === ''){
       
        $('#modalAlert').openModal();
        $('#modalAlert h5').text("Don't be shy!");
        $('#modalAlert p').text("Please enter your age.");
        return
      };

      if(mySex === undefined || myDev === undefined){
        $('#modalAlert').openModal();
        $('#modalAlert h5').text("Just a second!");
        $('#modalAlert p').text("You haven't told us enough about yourself.");
        return
      };

      if(sexPref === undefined || devPref === undefined){
        $('#modalAlert').openModal();
        $('#modalAlert h5').text("Just a second!");
        $('#modalAlert p').text("You haven't told us about your ideal match.");
        return
      };

  newUser = {
      "bio": registerBio,
      "age": age,
      "sex": mySex,
      "dev": myDev,
      "sexPref": sexPref,
      "devPref": devPref
  };

	$.post(currentURL + "/api/users", newUser )
	    .done(function(data){

	      // alert(data);
        $('#modalAlert').openModal();
	      $('#modalAlert h5').text(data);
	      $('#modalAlert p').text("Let's go to your profile page...");
	        
	    })

});










});