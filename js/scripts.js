//Business Logic

function Ticket(movie, time, age, price) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = [];
}

Ticket.prototype.adultTicketPrice = function() {
  if (this.age === "19-64") {
    return this.price + 10;
  }
}

Ticket.prototype.childTicketPrice = function() {
  if (this.age === "Under 18") {
    return this.price + 7;
  }
}

Ticket.prototype.seniorTicketPrice = function() {
  if(this.age === "Over 65") {
    return this.price + 5;
  }
}

Ticket.prototype.MatineePrice = function() {
  if (this.time === "2:00 PM" || this.time === "4:30 PM") {
    return this.price + 5;
  }
}


function resetFields() {
  $("#movie-name").val("");
  $("#movie-time").val("");
  $("#age").val("");
};

//User-Interface Logic

$(document).ready(function() {
  $("#formOne").submit (function(event) {
    event.preventDefault();
    var movieInput = $("#movie-name").val();
    var timeInput = $("#movie-time").val();
    var ageInput = $("#age").val();


    var newTicket = new Ticket(movieInput, timeInput, ageInput);


    $(".movie-name").text(newTicket.movie)
    $(".movie-time").text(newTicket.time);
    $(".age").text(newTicket.age);



    // if (timeInput === "2:00 PM" || timeInput === "4:30 PM") {
    //   $("#result1").show();
    // } else if (ageInput === "Under 18") {
    //   $("#result2").show();
    // } else if(ageInput === "Over 65") {
    //   $("#result3").show();
    // } else if (ageInput === "19-64") {
    //   $("#result4").show();
    // }

    $("ul#show-price-adult").append("<li>" + newTicket.adultTicketPrice() + "</li>");
    $("ul#show-price-adult").append("<li>" + newTicket.childTicketPrice() + "</li>");
    $("ul#show-price-adult").append("<li>" + newTicket.seniorTicketPrice() + "</li>");
    $("ul#show-price-adult").append("<li>" + newTicket.MatineePrice() + "</li>");

  });
});
