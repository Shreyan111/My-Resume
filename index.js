var wow = new WOW(
   {
     boxClass:     'wow',      // animated element css class (default is wow)
     animateClass: 'animated', // animation css class (default is animated)
     offset:       0,          // distance to the element when triggering the animation (default is 0)
     mobile:       true,       // trigger animations on mobile devices (default is true)
     live:         true,       // act on asynchronously loaded content (default is true)
     callback:     function(box) {
       // the callback is fired every time an animation is started
       // the argument that is passed in is the DOM node being animated
     },
     scrollContainer: null,    // optional scroll container selector, otherwise use window,
     resetAnimation: true,     // reset animation on end (default is true)
   }
 );
 wow.init();

//  window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("headers");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

import { firebaseConfig } from '../Dir1/config.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('firstname');
  var lname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var phoneno = /^[6-9]\d{9}$/;
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if(phoneno.test(phone) && reg.test(email)){
  // Save message
  saveMessage(fname, lname, email, phone, message);

  alert("The Message has been sent Successfully");

  // Clear form
  document.getElementById('contactForm').reset();
  }

  else{
    alert("Information is wrong");
  }
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
    message: message
  });
}
