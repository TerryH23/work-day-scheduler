$(document).ready(function(){

var currentTime = moment().format("H");
var today = moment().format("dddd LL hA")
$(".jumbotron").css("background-color", "lightblue");
$("#currentDay").text(today);

// need to fix the function, it is only adding the future class

$(".description").each(function() {

    var hour = $(".hour");
    
    if (currentTime == hour) {
        $(this).addClass("present");

    } else if (currentTime < hour) {
        $(this).removeClass("present");
        $(this).addClass("future");
 
    } else if (currentTime > hour) {
        $(this).removeClass("future");
        $(this).addClass("past");
    
}})

// retrieves saved local storage
$(".description").each(function () {

    for (i = 0; i < localStorage.length; i++) {
        var timeOfDay = localStorage.key(i);
        var enteredText = localStorage.getItem(timeOfDay);
        var scheduledTime = $(this).siblings(".hour").text();

    if (timeOfDay === scheduledTime) 
            $(this).val(enteredText);

}});


// save button to set local storage
$(".saveBtn").on("click", function () {
    var time = $(this).siblings(".hour").text();
    var toDo = $(this).siblings(".description").val();

    if (toDo == "") {
        localStorage.setItem(time, "");
    }
    else {
        localStorage.setItem(time, toDo);
    
}})

// added a clear feature
$(".clearSave").on("click", function () {
    localStorage.clear()
})

});