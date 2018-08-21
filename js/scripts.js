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

Ticket.prototype.adultMatineePrice = function() {

}

Ticket.prototype.childMatineePrice = function() {

}





//User-Interface Logic

$(document).ready(function() {
  $("#formOne").submit (function(event) {
    event.preventDefault();
    var movieInput = $("#movie-name").val();
    var timeInput = $("#movie-time").val();
    var ageInput = $("#age").val();


    $(".movie-name").text(nameInput)
    $(".movie-time").text(focusInput);
    $(".age").text(employerInput);


  });
});
