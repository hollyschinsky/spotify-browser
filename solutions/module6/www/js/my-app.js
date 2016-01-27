Template7.registerHelper('stringify', function (context){
    var str = JSON.stringify(context);
    return str.replace(/'/g, '&#39;');
});

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
// Media List Page Handling
myApp.onPageInit('list', function (page) {
    $$(page.container).find('.favorite').on('click', function (e) {
        // this.dataset.item returns current index of item clicked so we can retrieve from context
        var item = page.context[this.dataset.item];
        myApp.alert(item.name + ' added to favorites!');
    });

    $$(page.container).find('.preview').on('click', function (e) {
        var item = page.context[this.dataset.item];

        myApp.alert("Previewing " + item.name);
        var media = new Media(item.preview_url, function () {console.log("Media Success");},function (error)
        {console.log("Media fail " + error)},null);
        media.play();
        setTimeout(function() {media.stop()},7000); //preview for 7 seconds
    });
});


// Side Menu Handlers
$$(document).on('click', '#favorites', function (e) {
    myApp.alert('Show my favorites');
});

$$(document).on('click', '#about', function (e) {
    myApp.alert('Show About');
});

$$(document).on('click', '#settings', function (e) {
    myApp.alert('Show Settings');
});

