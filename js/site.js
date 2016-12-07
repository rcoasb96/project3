// TODO: Use a function closure and release global $
$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      //saving inputs
      var weight = $('#bmi-weight').val();
      var height = $('#bmi-height').val();
      
      var url= 'https://bmi.p.mashape.com/WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo' +weight+height+;
          
      $.get(url).done(
        
          function(data,json){
            $('#bmi').append(
            '<p>Your BMI is: '+data.bmi.value+'</p>'
          );
          $('#bmi').append(
            '<p>Your status is: '+data.bmi.status+'</p>'
          );
          $('#bmi').append(
           '<p>Your risk is: '+data.bmi.risk+'</p>'
          );
      });  

        var string= 'Your Bmi:' +value+ '. Your status:' +status+ '. Your risk:' +risk + '.';
        $('#results').text(string);
       


    });
  event.preventDefault();
  });
});(jQuery);
