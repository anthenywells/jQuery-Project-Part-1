"use strict";

$(document).ready(() => {
  let selectedTable;
  //opens form, changes tables class
  $(document).on("click", ".available", (e) => {
    selectedTable = $(e.target)
    $("#form").fadeIn(150).css("display", "flex");
    $("#tabNum").text(`${selectedTable.get(0).id}`);
  });
  //submit closes form and reserves table
  $(document).on("click", "#submit", () => {
    $(selectedTable)
    .removeClass("available").addClass("reserved")
    .attr("name", $("#name").val())
    .attr("guests", $("#howMany").val());
    $("#form").fadeOut(150)
  });
  //X closes form
  $(document).on("click", ".close", () => {
    $("#form").fadeOut(150)
  });
  //displays reserved table attributes
  $(document).on("mouseenter", ".reserved", (event) => {
    if ($(event.target).attr("name") && $(event.target).attr("guests")) {
      $(event.target).append(`
      <section class="tooltip">
        Name: ${$(event.target).attr("name")}<br>
        Guests: ${$(event.target).attr("guests")}
      </section>
      `);
    } 
  });
  //hides reserved table attributes
  $(document).on("mouseleave", ".reserved", () => {
    $(".tooltip").remove();
  });
});

