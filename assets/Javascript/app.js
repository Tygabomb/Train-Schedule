// Clock const and functions 
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setdate() {

    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(` ${seconds}`)
  }

  setInterval(setdate, 1000);

// conjuction function 

let trainName = "";
let destination = "";
let trainTime = "";
let freq = 0;
let trainData = [];
var hhmmTime;
let nextTrain;

// let now = moment().format("HH: mm");
// console.log(`${now}`);


$("#submit").on("click", function (event) {
  event.preventDefault();

  trainName = $("#trainName").val().trim();
  destination = $("#trainDestination").val().trim();
  trainTime = $("#trainTime").val().trim();
  freq = $("#frequency").val().trim();

  console.log(`${trainName} ${destination} ${trainTime} ${freq} `);

  var hhmmTime = moment(trainTime, "h:mm  a A").format("HH:mm");

  console.log(`${trainTime} ${hhmmTime} `);

  nextTrain = moment(trainTime, 'HH:mm')
  while (moment().isAfter(nextTrain, "HH:mm")) {
    nextTrain = nextTrain.add(freq, 'm');
    console.log(`${nextTrain}`);
  }



  trainData.push({
    name: trainName,
    location: destination,
    trainTime: trainTime,
    time: freq,
  });

  // let trainData = {name: 'trainName', location:'destination', trainTime:'trainTime', time:'freq'};


  localStorage.setItem("Schedule", JSON.stringify(trainData));
  resetFields();
  populate(nextTrain)
  //   localStorage.setItem("city", JSON.stringify (destination));
  //   localStorage.setItem("time", JSON.stringify (trainTime));
  //   localStorage.setItem("freq", JSON.stringify (freq));

  function resetFields() {
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#trainTime").val("");
    $("#frequency").val("");

  }

  function populate(hhmmTime) {
    // new div infro 
    var duration = moment.duration(moment(nextTrain, "HH:mm").diff(moment())).asMinutes()
    var minutesTill = Math.round(duration);
    console.log(duration);
    var tBody = $("tbody");
    var tRow = $("<tr>");

    var trainNa = $("<td>").text(trainName);
    var dest = $("<td>").text(destination);
    var freqTime = $("<td>").text(freq);
    var trainSchedule = $("<td>").text(nextTrain);
    var minutesAway = $("<td>").text(minutesTill);

    // let newRow = $("<tr>");
    //   newRow.append($("<td>" + localStorage.val().trainName + "</td>"));
    //   newRow.append($("<td>" + localStorage.val().destination + "</td>"));
    //   newRow.append($("<td class='text-center'>" + localStorage.val().frequency + "</td>"));
    //   newRow.append($("<td class='text-center'>" + moment(nextTrain).format("LTS") + "</td>"));
    //   newRow.append($("<td class='text-center'><button class='arrival btn btn-danger btn-xs' data-key='" + trainData + "'>X</button></td>"));

    // remove button 
    // $(document).on("click", ".arrival", function() {
    //   keyref = $(this).attr("data-key");
    //   newRow.ref().child(keyref).remove();
    //   window.location.reload();
    // });

    tRow.append(trainNa, dest, freqTime, trainSchedule, minutesAway);
    tBody.append(tRow);


  };
});


  