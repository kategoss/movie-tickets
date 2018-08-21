//Business Logic

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;

}

Ticket.prototype.adultTicketPrice = function() {

}

Ticket.prototype.childTicketPrice = function() {

}

Ticket.prototype.seniorTicketPrice = function() {

}

Ticket.prototype.MatineePrice = function() {

}





//User-Interface Logic

$(document).ready(function() {
  $("#formOne").submit (function(event) {
    event.preventDefault();
    var movieInput = $("#movie-name").val();
    var timeInput = $("#movie-time").val();
    var ageInput = $("#age").val();


    var newTicket = new Ticket(movieInput, timeInput, ageInput);


    $(".movie-name").text(movieInput)
    $(".movie-time").text(timeInput);
    $(".age").text(ageInput);



    if (timeInput === "2:00 PM" || timeInput === "4:30 PM") {
      $("#result1").show();
    } else if (ageInput === "Under 18") {
      $("#result2").show();
    } else if(ageInput === "Over 65") {
      $("#result3").show();
    } else if (ageInput === "19-64") {
      $("#result4").show();
    }

    console.log();

  });
});
