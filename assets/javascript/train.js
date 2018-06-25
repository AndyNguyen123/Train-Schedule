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

//when form submitted, add new train info to firebase
$('#add-train-btn').on('click', function () {
    event.preventDefault();
    trainName = $('#train-name').val().trim();
    destination = $('#destination').val().trim();
    frequency = $('#frequency').val().trim();
    departureTime = $('#first-train-time').val().trim();


    database.ref().push({
        name: trainName,
        destination: destination,
        frequency: frequency,
        departure: departureTime,
    })

})

//get trains info from firebase and add to the table
database.ref().on('value', function (snapshot) {
    var trains = snapshot.val();
    console.log(trains);
    var trainNumber = 0;

    $('tbody').empty();
    //looping through each train in firebase
    for (var train in trains) {
        trainNumber++;
        var momentDeparture = moment().format('YYYY-MM-DD') + ' ' + trains[train].departure;
        var minuteDiff = moment().diff(momentDeparture, 'minutes');

        minutesAway = Number(trains[train].frequency) - (minuteDiff % Number(trains[train].frequency));
        nextArrival = moment().add(minutesAway, 'minutes').format('hh:mm A');

        var trainDiv = $(`
        <tr>
            <th scope="row">${trainNumber}</th>
            <td>${trains[train].name}</td>
            <td>${trains[train].destination}</td>
            <td>${trains[train].frequency}</td>
            <td>${nextArrival}</td>
            <td>${minutesAway}</td>
        </tr>
        `)
        
        $('tbody').append(trainDiv);
    }
})