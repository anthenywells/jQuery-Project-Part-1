"use strict";


$(document).ready(() => {

//opens form, changes tables class
$(".available").on("click", function(e){
  let selectedTable = $(e.target)
  console.log(selectedTable)
  $("#form").css("display", "flex");
  $("#tabNum").text(`${$(this).get(0).id}`);
});

//submit closes form and reserves table
$("#submit").on("click", function(){
  $(selectedTable).addClass("reserved");
  $("#form").css("display", "none")
});

//X closes form
$(".close").on("click", function(){
  $("#form").css("display", "none")
})

//clicking outside of the form closes the form
// $(window).on("click", function(e){
//   if(e.target.id == 'form'){
//       $('#form').css("display", "none");
//   }
// });

});