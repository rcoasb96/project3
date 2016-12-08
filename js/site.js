$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      $.ajax(
       {
        method: 'POST',
        url: "https://bmi.p.mashape.com/",
        headers: {
            "X-Mashape-Key": "WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo",
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