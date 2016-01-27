// Initialize your app
var myApp = new Framework7({
    precompileTemplates: true,
    template7Pages: true,
    modalTitle: "Spotify Browser"
});

// Export selectors engine (jQuery like)
var $$ = Dom7;

// Add views - this app uses only one view stack
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true
});

// Handle Range Slider
// - This function displays the value next to the slider as it slides for better visual indicator
$$(document).on('input change', 'input[type="range"]', function (e) {
    $$('input#sliderVal').val(this.value);
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Handle Submit Button
// - This function calls the Spotify Web API with the designated search options then loads the list
// page when a response is received.
$$(document).on('click', '#btnSearch', function (e) {
    var term = $$("#term").val();
    if (term.length==0) {
        myApp.alert("Please enter a search term.");
    }
    else {
        var mediaType = "track";
        var numResults = $$("#numResults").val();

        var url = "https://api.spotify.com/v1/search?q=" + term +"&type=" + mediaType + "&limit=" + numResults;

        $$.ajax({
            dataType: 'json',
            url: url,
            success: function (resp) {
                //Uncomment for Part 1 of this module
                //myApp.alert("Number of results " + resp.tracks.items.length);
                mainView.router.load({
                      template: Template7.templates.listTemplate,
                      context: resp.tracks.items
                 });
            },
            error: function (xhr) {
                console.log("Error on ajax call " + xhr);
            }
        });
    }
});

