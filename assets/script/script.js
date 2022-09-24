setInterval(() => $("#currentDay").text(moment(new Date().toLocaleString()).format("MMM Do, YYYY, hh:mm:ss")), 1000);
timeColorChange
function timeColorChange() {
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        if (currHour > moment().hours()) {
            $(this).addClass("future");
        } else if (currHour === moment().hours()) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

function localStorageSave(){
localStorage.setItem($(this).siblings(".hour").text(), $(this).siblings(".task").val());
}
$(".saveBtn").on("click", localStorageSave);

function enterTask() {
    $(".hour").each(function() {
        if(localStorage.getItem($(this).text()) !== null) {
            $(this).siblings(".task").val(localStorage.getItem($(this).text()));
        }
    });
}
timeColorChange();
enterTask();