"use strict";

//opens form, changes tables class
$(".available").on("click", function(){
  $(this).removeClass("available").addClass("reserved");
  $("#form").css("display", "flex");
});
//X closes form
$(".close").on("click", function(){
  $("#form").css("display", "none")
})
//X closes form
$("#submit").on("click", function(){
  $("#form").css("display", "none")
})
//clicking outside of the form closes the form
$(window).on("click", function(e){
  if(e.target.id == 'form'){
      $('#form').css("display", "none");
  }
});

