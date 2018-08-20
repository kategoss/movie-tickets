function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(type, street, city, state) {
  this.type = type;
  this.street = street;
  this.city = city;
  this.state = state;
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input[name='optradio']").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Address.prototype.fullAddress = function() {
  return this.type + ": " + this.street + ", " + this.city + ", " + this.state;
}
//User-Interface Logic

$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address hideME">' +
                                 '<div class="radio-inline hideME">' +
                                  '<label><input type="radio" name="optradio" checked value="Home">Home</label>' +
                                '</div>' +
                                '<div class="radio-inline hideME">' +
                                  '<label><input type="radio" name="optradio" value="Work">Work</label>' +
                                '</div>' +
                                 '<div class="form-group hideME">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street hideME">' +
                                '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city hideME">' +
                                 '</div>' +
                                 '<div class="form-group hideME">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state hideME">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    $(".hideME").hide();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedType = ($("input[name='optradio']:checked").val());
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    function resetFields(){
    };
  });
});
});
