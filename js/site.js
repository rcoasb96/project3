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
            var v=data.bmi.value;
            '<p>Your BMI is: '+v+'</p>'
          );
          $('#InputResults').append(
            var s=data.bmi.status;
            '<p>Your status is: '+s+'</p>'
          );
          $('#InputResults').append(
            var r=data.bmi.risk;
           '<p>Your risk is: '+r+'</p>'
          );
          
          var output= 'Your Bmi:' +v+ '. Your status:' +s+ '. Your risk:' +r+ '.';
          $('#results').text(output);
      
      });  
       
    });
  event.preventDefault();
  });
});(jQuery);
