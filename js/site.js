<<<<<<< HEAD
$.ajax(
    {
        method: 'POST',
        url: "https://bmi.p.mashape.com/",
        headers: {
            "X-Mashape-Key": "14EnqO5furmshplJ1g93Wydl6c7fp1unkUvjsnbVpbghxX9Nfb",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        data: '{"weight":{"value":"85.00","unit":"kg"},"height":{"value":"170","unit":"cm"},"sex":"m","age":"24","waist":"34.00","hip":"40.00"}'
    }
).done(function(data,json){
  $('#bmi').append('<p>Your BMI is: '+data.bmi.value+'</p>');
    $('#bmi').append('<p>Your status is: '+data.bmi.status+'</p>');
    $('#bmi').append('<p>Your risk is: '+data.bmi.risk+'</p>');
            

    console.log("Done");
});
=======
// TODO: Use a function closure and release global $
$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      //saving inputs
      var weight = $('#bmi-weight').val();
      var height = $('#bmi-height').val();
      
      var url= 'https://bmi.p.mashape.com/WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo' + weight + height;
          
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
          
          var output= 'Your Bmi:' +value+ '. Your status:' +status+ '. Your risk:' +risk+ '.';
          $('#results').text(output);
      
      });  
       
    });
  event.preventDefault();
  });
});(jQuery);
>>>>>>> 6a961e1ceea597401da41dbcd955830099589d2b
