$(document).ready(function(){

  $("#content1").show();
  $("#content2").hide();
  $("#content3").hide();
  $("#content4").hide();
 
    $("#personBio").click(function(){
    $("#content1").show();
    $("#content2").hide();
    $("#content3").hide();
    $("#content4").hide();
  });


  $("#projRepo").click(function(){
    $("#content1").hide();
    $("#content2").hide();
    $("#content3").show();
    $("#content4").hide();
  });

  $("#userPrefs").click(function(){
    $("#content1").hide();
    $("#content3").hide();
    $("#content2").show();

  });

  $("#chatTab").click(function(){
    $("#content1").hide();
    $("#content2").hide();
    $("#content3").hide();
    $("#content4").show();
  });   

  var messagesRef = new Firebase('https://programmedtolove.firebaseio.com/');

  // CREATE USER STEVEN STABILE
  messagesRef.createUser({
    email    : "stevenstabile@gmail.com",
    password : "ptlsteve"
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });

  // LOGIN USER STEVEN STABILE
  messagesRef.authWithPassword({
    email    : "stevenstabile@gmail.com",
    password : "ptlsteve"
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });

  // REGISTER DOM ELEMENTS
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('#messageArea');

  // LISTEN FOR KEYPRESS EVENT
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var username = nameField.val();
      var message = messageField.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      messagesRef.push({name: username, text: message});
      messageField.val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var messageElement = $("<li>");
    var nameElement = $("<strong class='messageArea-X'></strong>")
    nameElement.text(username + ":" + " ");
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE
    messageList.append(messageElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    messageList[0].scrollTop = messageList[0].scrollHeight;
  });



      







  
  

});


