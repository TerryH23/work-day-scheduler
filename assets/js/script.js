$(document).ready(function(){

$(".jumbotron").css("background-color", "lightblue");


var today = moment().format("dddd LL hA")
$("#currentDay").text(today);



// need to fix the function, it is only adding the future class

$(".time-block").each(function() {

    var currentTime = moment().format("hA");
    var hour = $(".hour");
    
    if (currentTime == hour) {
        $(this).addClass("present");
        // $(this).removeClass("past");
    
    } else if (currentTime < hour) {
        $(this).removeClass("present");
        $(this).addClass("future");
    
    } else if (currentTime > hour) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
})



// still need to add save button feature and localstorage


// $(".saveBtn").click(function (event) {
//     event.preventDefault;
//     $("<textarea>").val("");
//     localStorage.setItem("")
// })




});