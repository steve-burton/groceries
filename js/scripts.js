var item1;
var item2;
var item3;
var items;
var itemTest = true;


$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    item1 = $("#item1").val();
    item2 = $("#item2").val();
    item3 = $("#item3").val();
    items = [item1, item2, item3];

    items.sort();

    items.forEach(function(item) {
      if (item) {
        $("#groceryList").append("<li>" + item.toUpperCase() + "</li>");
      } else {
        alert("Please enter an item in every box.");
        itemTest = false;
      }
    });

    if (itemTest) {
      $("#input").hide();
    };
  });
});
