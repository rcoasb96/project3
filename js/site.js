// TODO: Use a function closure and release global $
$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      //saving inputs
      var weight = $('#bmi-weight').val();
      var height = $('#bmi-height').val();
      
      $.get(
          'https://bmi.p.mashape.com/WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo' + weight + height,
          function(data){
            $('#bmi').append(
            '<p>Your BMI is:</p>)'+ data.bmi
          )
      });     
    });
  event.preventDefault();
  });
});
