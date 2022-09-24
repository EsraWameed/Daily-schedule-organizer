//added a live timer through SetInterval and moment.js to be displayed in the header section
setInterval(() => $("#currentDay").text(moment(new Date().toLocaleString()).format("MMM Do, YYYY, hh:mm:ss")), 1000);
//added a function to take in compare live time from moment.js to time in class id and color code by adding classes based on our if/else conditions
function timeColorChange() {
    $(".time-block").each(function() {
        if (parseInt($(this).attr("id")) > moment().hours()) {
            $(this).addClass("future");
        } else if (parseInt($(this).attr("id")) === moment().hours()) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
//added a function to store key value pairs of hour selected and input made
function localStorageSave(){
localStorage.setItem($(this).siblings(".hour").text(), $(this).siblings(".task").val());
}
//ebent listener to save button to trigger local storage function
$(".saveBtn").on("click", localStorageSave);
//function for when users refresh screen, the input remains if they've entered an input before through getting the input from local storage
function enterTask() {
    $(".hour").each(function() {
        if(localStorage.getItem($(this).text()) !== null) {
            $(this).siblings(".task").val(localStorage.getItem($(this).text()));
        }
    });
}
//calling our functions
timeColorChange();
enterTask();