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
            
            
          
            var v=data.bmi.value;
     
            var s=data.bmi.status;
            
            var r=data.bmi.risk;
      
          
          var output= 'Your Bmi:' +v+ '. Your status:' +s+ '. Your risk:' +r+ '.';
          $('#results').text(output);
      });  
       
    });
  event.preventDefault();
  });
});(jQuery);
