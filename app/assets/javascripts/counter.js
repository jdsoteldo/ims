
$(document).ready(function() {
  $("#input").on('click', function() {
   var copy = $('#base');
   $('#base').clone("ul").appendTo('#content').find("input[type='text'][type='number']").val = "";
  })

})
