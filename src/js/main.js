// var sayHello = require('./say-hello');// example of Browserify require

$(document).ready(function() {

    // sayHello();// example of Browserify require
    // navigation MAIN MENU
    var navigation = responsiveNav(".nav-collapse", {
        animate: true,
        transition: 160,
        closeOnNavClick: false
    });

    // hide popup
    $('.btnGetCode').click(function () {
        $('.popUp').slideUp(500);
    });

    // index date input
    (function(){
        var date = new Date();
        var formatedDate = "";
        var weekday = new Array(7);
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";



        formatedDate += weekday[date.getDay()] + ' ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        $('#toDay').html(formatedDate);
    }());


    // random code creation
    var createCode = function() {
        var text = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var date = new Date();
        var formatedDate = "";

        for (var i = 1; i<21; ++i){
            text += chars.charAt(Math.floor(Math.random() * chars.length));
            //console.log(text);
            if( i==5 || i==10 || i==15 || i==20){
                text += "-";
            }
        };

        text += "*****";

        (function() {
            formatedDate += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " ";
            formatedDate +=  + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        }());

        $('#code').html(text);
        $('#date').html(formatedDate);
    };
    createCode();
    $('.btnRefresh').click(function (){
        createCode();
    });

    // codes made
    var start = 26344;
    function codesMade () {
        start += 1;
        made = start.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
        $('#codesServed').html(made);
    }
    codesMade();

    setInterval(codesMade, 60*1000);

});