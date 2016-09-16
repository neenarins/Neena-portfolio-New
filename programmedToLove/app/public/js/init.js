(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );

  $(document).ready(function() {

    var newUser = {};
    var currentURL = window.location.origin;


    $('select').material_select();

    $('#loginButton').on('click', function(){
      var registerBio = $('#registerBio').val().trim();
      var sexPref = $('input[name="gender"]:checked').val();
      var devPref = $('input[name="orientation"]:checked').val();
      var age = $('#ageID').val().trim();
      var mySex = $('input[name="myGender"]:checked').val();
      var myDev = $('input[name="myDev"]:checked').val();

      if(registerBio === ''){
        //please enter bio
        $('#modalAlert').openModal();
        $('#modalAlert h5').text("Don't be a stranger!");
        $('#modalAlert p').text("Please complete the bio section so our users can get to know how awesome you are.");
        return
      };

      if(age === ''){
        //please enter bio
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


    $('#modalAlert').openModal();
    $('#modalAlert h5').text("One more step");
    $('#modalAlert p').text("You're almost there!  Let's just get you connected to GitHub...");
    //$('#modalAlert a').html();
    $('#modalAlert a').html('<button ><class=" githubtrigger modal-action modal-close waves-effect waves-green btn-flat">Agree</button>');
  
  });
  
});