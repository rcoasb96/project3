// TODO: Use a function closure and release global $
$(document).ready(function() {
  $('#bmi-form').on('submit', function(event) {
    var query = $('#bmi-weight', '#bmi-height'").val();
    $.get(
      'https://bmi.p.mashape.com/' + query,
      function(data) {
        $('#bmi').append(
           xhr.setRequestHeader("X-Mashape-Authorization", "WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo");
        );
      });
    event.preventDefault();
  });
});
