// conjuction function 

let trainName = "";
let destination = "";
let trainTime = "";
let freq = 0;
let trainData = [];



$("#submit").on("click", function(event)  {
  event.preventDefault();

  let trainName = $("#trainName").val().trim();
  let destination = $("#trainDestination").val().trim();
  let trainTime = moment($("#trainTime").val().trim());
  let freq = $("#frequency").val().trim();

  console.log(`${trainName}, ${lineName}, ${destination}, ${trainTime}, ${freq} `);
    
  trainData.push(trainName);


  localStorage.setItem("train", JSON.stringify (trainName));
  localStorage.setItem("city", JSON.stringify (destination));
  localStorage.setItem("time", JSON.stringify (trainTime));
  localStorage.setItem("freq", JSON.stringify (freq));

  $("#trainName").val("");
  $("#trainDestination").val("");
  $("#trainTime").val("");
  $("#frequency").val("");

});

// let trainData = JSON.parse(localStorage.getItem("trainData"))


// let newRow = $("<tr>");
//   newRow.append($("<td>" + localStorage.val().trainName + "</td>"));
//   newRow.append($("<td>" + localStorage.val().destination + "</td>"));
//   newRow.append($("<td class='text-center'>" + localStorage.val().frequency + "</td>"));
//   newRow.append($("<td class='text-center'>" + moment(nextTrain).format("LTS") + "</td>"));
//   newRow.append($("<td class='text-center'><button class='arrival btn btn-danger btn-xs' data-key='" + trainData + "'>X</button></td>"));



// $(document).on("click", ".arrival", function() {
//   keyref = $(this).attr("data-key");
//   newRow.ref().child(keyref).remove();
//   window.location.reload();
// });




  // var newTrain = {
  //   name,  
  //   line,
  //   destination,
  //   trainTime,
  //   frequency,
  //   Trains: ["trainName", "lineName", "destination", "trainTime", "frequency" ]
  //

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

console.log(`%c color: red; ${seconds}`)
}

setInterval(setdate, 1000);



// 