// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}




// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}
// $(function() {
//      $("#dateTimeInput").datepicker({
//          changeYear: true,
//          changeMonth:true,
//          dateFormat: 'mm/dd/yy',
//          timeFormat: 'hh:mm',
//          minDate: 0,
//          maxDate: '+3M'
//      });
// });

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("(xxxx)");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateTimeInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: 0,  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );

// timepick function 

$(document).ready(function(){
    $('#timeinput').timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '9:00am',
    maxTime: '8:00pm',
    defaultTime: '9',
    startTime: '9:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
    });
});


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});

// https://www.youtube.com/watch?app=desktop&v=r5IbUHETupk
function validatePhone2(phone)
    {
        phone = phone.replace(/[^0-9]/g,'');
        $("#phonefield").val(phone);
        if(phone == ' ' || !phone.match(/^[0-9]{10}$/))
        {
            $("#phonefield").css({'background' : '#FFEDEF', 'border' : 'solid 1px red'});
            return false;
        }
        else
        {
            $("#phonefield").css({'background' : '#99FF99', 'border' : 'solid 1px #99FF99'});
            return true
        }
    }


function validateCard(card)
    {
        function format(card) {
            card = card.replace(/[^0-9]/g,'');
            return card.toString().replace(/\d{4}(?=.)/g, '$& ');
        }

        card = card.replace(/[^0-9]/g,'');
        $("#cardfield").val(format(card)); // 1234567890123456
        if(card == ' ' || !card.match(/^[0-9]{16}$/))
        {
            $("#cardfield").css({'background' : '#FFEDEF', 'border' : 'solid 1px red'});
            return false;
        }
        else
        {
            $("#cardfield").css({'background' : '#99FF99', 'border' : 'solid 1px #99FF99'});
            return true
        }
    
    }