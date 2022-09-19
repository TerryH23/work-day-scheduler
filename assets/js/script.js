var currentTime = moment().format("HH");
var today = moment().format("dddd LL hA");

$(".jumbotron").css("background-color", "lightblue");

// displays current local date and time
$("#currentDay").text(today);


// function to set colored background of text area depedent on the whether it is past, present or future
$(".description").each(function() {

    var hour = parseInt($(this).attr("id"));
    
    if (currentTime == hour) {
        $(this).addClass("present");

    } else if (currentTime < hour) {
        $(this).removeClass("present");
        $(this).addClass("future");
 
    } else if (currentTime > hour) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }

});


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
    var scheduledTime = $(this).siblings(".hour").text();
    var toDo = $(this).siblings(".description").val();

    if (toDo == "") {
        localStorage.setItem(scheduledTime, "");
    }
    else {
        localStorage.setItem(scheduledTime, toDo);
    
}});

// added a button to clear local storage
$(".clearSave").on("click", function () {
    localStorage.clear()
});
