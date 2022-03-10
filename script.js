var currentDate = moment().get("date");
console.log(currentDate);
///
var hoursList = [
  $("#hourNine"),
  $("#hourTen"),
  $("#hourEleven"),
  $("#hourTwelve"),
  $("#hourOne"),
  $("#hourTwo"),
  $("#hourThree"),
  $("#hourFour"),
  $("#hourFive"),
];

//use empty strings to show that these variables are where local storage stores input
var tenText = "";
var elevenText = "";
var twelveText = "";
var oneText = "";
var twoText = "";
var threeText = "";
var fourText = "";
var fiveText = "";

//add variable names for add event buttons
var addNine = $("#addToHourNine");
var addTen = $("#addToHourTen");
var addEleven = $("#addToHourEleven");
var addTwelve = $("#addToHourTwelve");
var addOne = $("#addToHourOne");
var addTwo = $("#addToHourTwo");
var addThree = $("#addToHourThree");
var addFour = $("#addToHourFour");
var addFive = $("#addToHourFive");

//add event listeners to all add event buttons

//(9AM Row)
$(document).ready(function () {
  $("#addToHourNine").on("click", function () {
    var nineText = "";
    var inputNine = document.getElementById("hourNine").value;
    localStorage.setItem("hourNine", JSON.stringify(hourNine));
    var nineText = JSON.parse(localStorage.getItem("inputNine"));
    $("#hourNine").innerText = inputNine + " --";
    console.log(inputNine);
    $("#hourNine").append(inputNine);
  });
});

//(10AM Row)
$(document).ready(function () {
  $("#addToHourTen").on("click", function () {
    var inputTen = document.getElementById("hourTen").value;
    localStorage.setItem("hourTen", JSON.stringify(hourTen));
    var tenText = JSON.parse(localStorage.getItem("inputTen"));
    $("#hourTen").innerText = "-- " + inputTen + " --";
    console.log(inputTen);
    $("#hourTen").append(inputTen);
  });
});

//(11AM Row)
$(document).ready(function () {
  $("#addToHourEleven").on("click", function () {
    var inputEleven = document.getElementById("hourEleven").value;
    localStorage.setItem("hourEleven", JSON.stringify(hourEleven));
    var elevenText = JSON.parse(localStorage.getItem("inputEleven"));
    $("#hourEleven").innerText = "-- " + inputEleven + " --";
    console.log(inputEleven);
    $("#hourEleven").append(inputEleven);
  });
});
//(12PM Row)
$(document).ready(function () {
  $("#addToHourTwelve").on("click", function () {
    var inputTwelve = document.getElementById("hourTwelve").value;
    localStorage.setItem("hourTwelve", JSON.stringify(hourTwelve));
    var twelveText = JSON.parse(localStorage.getItem("inputTwelve"));
    $("#hourTwelve").innerText = "-- " + inputTwelve + " --";
    console.log(inputTwelve);
    $("#hourTwelve").append(inputTwelve);
  });
});
//(1PM Row)
$(document).ready(function () {
  $("#addToHourOne").on("click", function () {
    var inputOne = document.getElementById("hourOne").value;
    localStorage.setItem("hourOne", JSON.stringify(hourOne));
    var oneText = JSON.parse(localStorage.getItem("inputOne"));
    $("#hourOne").innerText = "-- " + inputOne + " --";
    console.log(inputOne);
    $("#hourOne").append(inputOne);
  });
});
//(2PM Row)
$(document).ready(function () {
  $("#addToHourTwo").on("click", function () {
    var inputTwo = document.getElementById("hourTwo").value;
    localStorage.setItem("hourTwo", JSON.stringify(hourTwo));
    var twoText = JSON.parse(localStorage.getItem("inputTwo"));
    $("#hourTwo").innerText = "-- " + inputTwo + " --";
    console.log(inputTwo);
    $("#hourTwo").append(inputTwo);
  });
});
//(3PM Row)
$(document).ready(function () {
  $("#addToHourThree").on("click", function () {
    var inputThree = document.getElementById("hourThree").value;
    localStorage.setItem("hourThree", JSON.stringify(hourThree));
    var threeText = JSON.parse(localStorage.getItem("inputThree"));
    $("#hourThree").innerText = "-- " + inputThree + " --";
    console.log(inputThree);
    $("#hourThree").append(inputThree);
  });
});
//(4PM Row)
$(document).ready(function () {
  $("#addToHourFour").on("click", function () {
    var inputFour = document.getElementById("hourFour").value;
    localStorage.setItem("hourFour", JSON.stringify(hourFour));
    var fourText = JSON.parse(localStorage.getItem("inputFour"));
    $("#hourFour").innerText = "-- " + inputFour + " --";
    console.log(inputFour);
    $("#hourFour").append(inputFour);
  });
});
//(5PM Row)
$(document).ready(function () {
  $("#addToHourFive").on("click", function () {
    var inputFive = document.getElementById("hourFive").value;
    localStorage.setItem("hourFive", JSON.stringify(hourFive));
    var fiveText = JSON.parse(localStorage.getItem("inputFive"));
    $("#hourFive").innerText = "-- " + inputFive + " --";
    console.log(inputFive);
    $("#hourFive").append(inputFive);
  });
});

// if (i < 4) {
//   hoursList[i].style.backgroundColor = "red";
// } else if (i > currentHour) {
//   hoursList[i].style.backgroundColor = "green";
// }

var nineColor = $("#hourNine");
var tenColor = $("#hourTen");
var elevenColor = $("#hourEleven");
var twelveColor = $("#hourTwelve");
var oneColor = $("#hourOne");
var twoColor = $("#hourTwo");
var threeColor = $("#hourThree");
var fourColor = $("#hourFour");
var fiveColor = $("#hourFive");

//hardcoded row colors for demo purposes-- assumes that index number of current hour is i=4

nineColor.style.backgroundColor = "gray";
tenColor.style.backgroundColor = "gray";
elevenColor.style.backgroundColor = "gray";
twelveColor.style.backgroundColor = "gray";
oneColor.style.backgroundColor = "red";
twoColor.style.backgroundColor = "green";
threeColor.style.backgroundColor = "green";
fourColor.style.backgroundColor = "green";
fiveColor.style.backgroundColor = "green";