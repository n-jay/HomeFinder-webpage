$(document).ready(function() { //this waits till the DOM loads to execute whats inside
    var btnType = document.getElementById('btnSearchType');
    var btnPrice = document.getElementById('btnSearchPrice');
    var btnRooms = document.getElementById('btnSearchRooms');
    var btnDate = document.getElementById('btnSearchDate');
    
    //below functions performs the logic of the search buttons
    btnType.addEventListener('click', function() { //search by house type
        var searchText = document.getElementById("search").value;
        $.ajax ({
            url: 'properties.json', 
            dataType: 'json',
            type: 'get',
            cache: 'false',
            success: function(data) {
                 var noResults = 0; // this variable is used to capture if no results are returned
                 var output = '<ul>'; //the final output is concatenated to one variable to be displayed
                 var len = data.properties.length;

                 for (i=0; i < len; i++) {  //condition is checked with the JSON data and returns only the valid results
                     if (data.properties[i].type == searchText) {
                        output += '<section id = "oneResult">';
                        output += '<p id = "resultID">Property Code: ' + data.properties[i].id + '</p>'; 
                        output += '<img src = "'+data.properties[i].picture+'">';
                        output += '<p id = "resltDesc">'+data.properties[i].description+'</p> <a href = "'+data.properties[i].url+'" target = "_blank">See More</a> <br>';
                        output += '<p>Going for $'+data.properties[i].price+'</p> <br>';
                        output += '</section><br><br>';
                        noResults++;
                     }
                 }
                 output += '</ul>';
                 $('#update').html(output); //final output displayed
                 if (noResults == 0) {
                     $('#update').html("No results found");
                 }
            }        
        });
    });

    btnPrice.addEventListener('click', function() { //search by house price
        var searchText = document.getElementById("search").value;
        var sPrice = parseInt(searchText);

        $.ajax ({
            url: 'properties.json', 
            dataType: 'json',
            type: 'get',
            cache: 'false',
            success: function(data) {
                 var noResults = 0;
                 var output = '<ul>';
                 var len = data.properties.length;

                 for (i=0; i < len; i++) {  //condition is checked with the JSON data and returns only the valid results
                     if (data.properties[i].price == sPrice) {
                        output += '<section id = "oneResult">';
                        output += '<p id = "resultID">Property Code: ' + data.properties[i].id + '</p>'; 
                        output += '<img src = "'+data.properties[i].picture+'">';
                        output += '<p id = "resltDesc">'+data.properties[i].description+'</p> <a href = "'+data.properties[i].url+'" target = "_blank">See More</a> <br>';
                        output += '<p>Going for $'+data.properties[i].price+'</p> <br>';
                        output += '</section><br><br>';
                        noResults++;
                    }
                 }
                 output += '</ul>';
                 $('#update').html(output); //final output displayed
                 if (noResults == 0) {
                     $('#update').html("No results found");
                 }
            }        
        });
    });

    btnRooms.addEventListener('click', function() { //search by no of bedrooms in house
        var searchText = document.getElementById("search").value;
        var sBedroooms = parseInt(searchText);
        $.ajax ({
            url: 'properties.json', 
            dataType: 'json',
            type: 'get',
            cache: 'false',
            success: function(data) {
                 var noResults = 0;
                 var output = '<ul>';
                 var len = data.properties.length;

                 for (i=0; i < len; i++) {  //condition is checked with the JSON data and returns only the valid results
                     if (data.properties[i].bedrooms == sBedroooms) {
                        output += '<section id = "oneResult">';
                        output += '<p id = "resultID">Property Code: ' + data.properties[i].id + '</p>'; 
                        output += '<img src = "'+data.properties[i].picture+'">';
                        output += '<p id = "resltDesc">'+data.properties[i].description+'</p> <a href = "'+data.properties[i].url+'" target = "_blank">See More</a> <br>';
                        output += '<p>Going for $'+data.properties[i].price+'</p> <br>';
                        output += '</section><br><br>';
                        noResults++;
                     }
                 }
                  output += '</ul>';
                 $('#update').html(output); //final output displayed
                 if (noResults == 0) {
                     $('#update').html("No results found");
                 }
            }        
        });
    });

    btnDate.addEventListener('click', function() { //search by the date house was added to list
        var searchText = document.getElementById("search").value;
        var sDate = parseInt(searchText);
        $.ajax ({
            url: 'properties.json', 
            dataType: 'json',
            type: 'get',
            cache: 'false',
            success: function(data) {  
                 var noResults = 0;
                 var output = '<ul>';
                 var len = data.properties.length;

                 for (i=0; i < len; i++) {  //condition is checked with the JSON data and returns only the valid results
                     if (data.properties[i].added.month == searchText || data.properties[i].added.day == sDate || data.properties[i].added.year == sDate) {
                        output += '<section id = "oneResult">Property Code: ';
                        output += '<p id = "resultID">' + data.properties[i].id + '</p>'; 
                        output += '<img src = "'+data.properties[i].picture+'">';
                        output += '<p id = "resltDesc">'+data.properties[i].description+'</p> <a href = "'+data.properties[i].url+'" target = "_blank">See More</a> <br>';
                        output += '<p>Going for $'+data.properties[i].price+'</p> <br>';
                        output += '</section><br><br>';
                        noResults++;
                     }
                 }
                 output += '</ul>';
                 $('#update').html(output); //final output displayed
                 if (noResults == 0) {
                     $('#update').html("No results found");
                 }
            }        
        });
    });

    
    $("#reset").click(function() { //reset button clears page and reloads elements
        window.location.reload(true);
    });

    //code for the autocomplete function in search bar
    $( function() { 
        var availableTags = [ //the system prompts user with below suggestions
        "House",
        "Condo",
        "Flat",
        "Bungalow",
        "January",
        "October",
        "September",
        "May",
        "July",
        "2016"
        ];
        $( "#search" ).autocomplete({
            source: availableTags,
            appendTo: "#suggestions"
        });
    });

     
    //the Jquery UI code for button icons is below but it was commented due to not displaying properly.
    // $( "#btnSearchType" ).button({
    //     icon: { icon: "ui-icon-gear" }
    // });

}); 
   




