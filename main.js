// Paste the code from Firebase 
var config = {
 apiKey: "AIzaSyCTJcf4n1dPQ_wpH5sOhSUMp5h5eKesXDA",
    authDomain: "jellfish.firebaseapp.com",
    databaseURL: "https://jellfish.firebaseio.com",
    projectId: "jellfish",
    storageBucket: "jellfish.appspot.com",
    messagingSenderId: "520210705534"
    
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});