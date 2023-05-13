$(document).ready(function() {
    $("#loadDataBtn").click(function() {
      $.ajax({
        url: "data.json",
        method: "GET",
        dataType: "json",
        success: function(response) {
          displayData(response);
        },
        error: function(xhr, status, error) {
          console.log("An error occurred: " + error);
        }
      });
    });

    function displayData(data) {
      var resultDiv = $("#result");

      resultDiv.empty();

      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var itemDiv = $("<div>").text(item.title);
        resultDiv.append(itemDiv);
      }
    }
  });