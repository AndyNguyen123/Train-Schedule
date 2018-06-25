// Initialize Firebase
var config = {
    apiKey: "AIzaSyCjX4wkEcNXcaJYdMCYYkjrvIv_5VoVC3c",
    authDomain: "train-schedule-95778.firebaseapp.com",
    databaseURL: "https://train-schedule-95778.firebaseio.com",
    projectId: "train-schedule-95778",
    storageBucket: "train-schedule-95778.appspot.com",
    messagingSenderId: "1083719097111"
  };
  firebase.initializeApp(config);

var trainName, destination, frequency, firstDeparture

$('#submit-btn').on('click', function() {
    event.preventDefault();
    trainName = $('#train-name').val().trim();
    destination = $('#destination').val().trim();
    frequency = $('#frequency').val().trim();
    firstDeparture = $('#first-train-time').val().trim();
    
})