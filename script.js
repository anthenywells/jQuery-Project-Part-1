"use strict";




//opens form, changes tables class
$(".available").on("click", function(){
  let selectedTable = this.id;
  console.log(selectedTable)
  $("#form").css("display", "flex");
  $("#tabNum").text(`${$(this).get(0).id}`);
  $("#submit").on("click", function(){
    $(selectedTable).addClass("reserved");
  });
});

//X closes form
$(".close").on("click", function(){
  $("#form").css("display", "none")
})
// submit closes form
$("#submit").on("click", function(){
  $("#form").css("display", "none")
})
//clicking outside of the form closes the form
$(window).on("click", function(e){
  if(e.target.id == 'form'){
      $('#form').css("display", "none");
  }
});
