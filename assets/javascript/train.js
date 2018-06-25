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
  var database = firebase.database();

var trainName, destination, frequency, departureTime
var nextArrival, minutesAway

$('#submit-btn').on('click', function() {
    event.preventDefault();
    trainName = $('#train-name').val().trim();
    destination = $('#destination').val().trim();
    frequency = $('#frequency').val().trim();
    departureTime = $('#first-train-time').val().trim();
    console.log(departureTime);

    var today = moment().format('YYYY-MM-DD');
    var momentDeparture = today + ' ' + departureTime;
    console.log(momentDeparture);
    var minuteDiff = moment().diff(momentDeparture, 'minutes');
    console.log(minuteDiff);
    
    minutesAway = frequency - (minuteDiff%frequency);
    nextArrival = moment().add(minutesAway, 'minutes').format('hh:mm A');
    console.log('minutes away: ' + minutesAway);
    console.log(nextArrival);

    // database.ref().push({
    //     name: trainName,
    //     destination: destination,
    //     frequency: frequency,
    //     departure: departure,
    // })

})