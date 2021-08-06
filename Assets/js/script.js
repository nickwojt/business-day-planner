var timeEl = [$('#time9'), $('#time10'), $('#time11'), $('#time12'), $('#time1'), $('#time2'), $('#time3'), $('#time4'), $('#time5')]
var contentEl = $('#content');
var saveEl = $('.material-icons');
var currentDay = $('#currentDay');
var textArea = [$('#content9'), $('#content10'), $('#content11'), $('#content12'), $('#content1'), $('#content2'), $('#content3'), $('#content4'), $('#content5')]

currentDay.text(moment().format('MMMM Do, YYYY'));

var timeCount = 9
for (var i = 0; i < 9; i++) {
    if (timeCount < 12) {
        timeEl[i].text(timeCount + ":00 AM");
    } else if (timeCount === 12) {
        timeEl[i].text(timeCount + ":00 PM");
    } else {
        timeEl[i].text((parseInt(timeCount) - 12) + ":00 PM");
    }
    

    if (timeCount < moment().format('k')) {
    textArea[i].addClass('past');
    } else if (timeCount == parseInt(moment().format('k'))) {
    textArea[i].addClass('present');
    } else {
    textArea[i].addClass('future');
    }
    timeCount++;
}


// Event Handlers
$('#save9').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content9', $('#content9').val())
})
$('#content9').val(localStorage.getItem('content9'));

$('#save10').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content10', $('#content10').val())
})
$('#content10').val(localStorage.getItem('content10'));

$('#save11').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content11', $('#content11').val())
})
$('#content11').val(localStorage.getItem('content11'));

$('#save12').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content12', $('#content12').val())
})
$('#content12').val(localStorage.getItem('content12'));

$('#save1').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content1', $('#content1').val())
})
$('#content1').val(localStorage.getItem('content1'));

$('#save2').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content2', $('#content2').val())
})
$('#content2').val(localStorage.getItem('content2'));

$('#save3').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content3', $('#content3').val())
})
$('#content3').val(localStorage.getItem('content3'));

$('#save4').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content4', $('#content4').val())
})
$('#content4').val(localStorage.getItem('content4'));

$('#save5').unbind().on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('content5', $('#content5').val())
})
$('#content5').val(localStorage.getItem('content5'));


