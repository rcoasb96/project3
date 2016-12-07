// TODO: Use a function closure and release global $
$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      //saving inputs
      var weight = $('#bmi-weight').val();
      var height = $('#bmi-height').val();
      
      var url= 'https://bmi.p.mashape.com/WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo' +weight+height;
          
      $.get(url).done(
   
        
          function(data,json){
            
            
          $('#bmi').append(
            var v=data.bmi.value;
            '<p>Your BMI is: '+v+'</p>'
          );
          $('#bmi').append(
            var s=data.bmi.status;
            '<p>Your status is: '+s+'</p>'
          );
          $('#bmi').append(
            var r=data.bmi.risk;
           '<p>Your risk is: '+r+'</p>'
          );
          
          var string= 'Your Bmi:' +v+ '. Your status:' +s+ '. Your risk:' +r+ '.';
        $('#results').text(string);
      });  
       
      });
  event.preventDefault();
  });
});(jQuery);
