$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var blanks = ["contact", "address"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $(".well").show();

  });
});
