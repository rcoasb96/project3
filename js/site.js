// TODO: Use a function closure and release global $
$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      //saving inputs
      var weight = $('#bmi-weight').val();
      var height = $('#bmi-height').val();
      
      var url= 'https://bmi.p.mashape.com/WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo' +weight + height;
          
      $.get(url).done(
   
        
          function(data,json){
            
           $('#InputResults').append(
            '<p>Your BMI is: '+data.bmi.value+'</p>'
          );
          $('#InputResults').append(
            '<p>Your status is: '+data.bmi.status+'</p>'
          );
          $('#InputResults').append(
           '<p>Your risk is: '+data.bmi.risk+'</p>'
          );
          
          var output= 'Your Bmi:' +value+ '. Your status:' +status+ '. Your risk:' +risk+ '.';
          $('#results').text(output);
      
      });  
       
    });
  event.preventDefault();
  });
});(jQuery);
