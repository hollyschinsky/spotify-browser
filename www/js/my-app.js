Template7.registerHelper('stringify', function (context){
    var str = JSON.stringify(context);
    // Need to replace any single quotes in the data with the HTML char to avoid string being cut short
    return str.split("'").join('&#39;');
});

// Initialize your app
var myApp = new Framework7({
    precompileTemplates: true,
    template7Pages: true,
    modalTitle: "Spotify Browser"
})

// Export selectors engine (jQuery like)
var $$ = Dom7;

// Add views - this app uses only one view stack
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true
});

// Set a default range slider value
$$('input#sliderVal').val('20');

// Handle the cordova deviceready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

/* Media List Page Handling */
myApp.onPageInit('list', function (page) {
    $$('.preview').on('click', function (e) {
        e.stopPropagation();
        var item = page.context[this.dataset.item]; //this.dataset.item returns data held in data-item attribute set in template

        myApp.alert("Previewing " + item.name);
        var media = new Media(item.preview_url, function () {console.log("Media Success");},function (error) {console.log("Media fail " + error)},null);
        media.play();
        setTimeout(function() {media.stop()},7000) //preview for 7 seconds
    });

    $$('.favorite').on('click', function (e) {
        e.stopPropagation();
        var item = page.context[this.dataset.item]; //this.dataset.item returns data held in data-item attribute set in template
         myApp.alert(item.name + ' added to favorites!');
    });
});

/* Media Item Page Handling */
myApp.onPageInit('media', function (page) {
    var item = page.context;

    $$('#like').on('click', function (e) {
        myApp.alert("I like " + item.name);
    })
});

/*
    Range Slider Handling
    - This function displays the value next to the slider as it slides for better visual indicator
*/
$$(document).on('input change', 'input[type="range"]', function (e) {
    $$('input#sliderVal').val(this.value);
})

/*
    Handle Submit Button
    - This function calls the Spotify Web API with the designated search options then loads the list
      page when a response is received.
*/
$$(document).on('click', '#btnSearch', function (e) {
    var term = $$("#term").val();
    if (term.length==0) {
        myApp.alert("Please enter a search term.");
    }
    else {
        var mediaType = "track";
        var numResults = $$("#numResults").val()

        var url = "https://api.spotify.com/v1/search?q=" + term +"&type=" + mediaType + "&limit=" + numResults;
        $$.ajax({
            dataType: 'json',
            url: url,
            success: function (resp) {
                myApp.template7Data = resp.tracks.items;
                 mainView.router.load({
                    template: Template7.templates.listTemplate,
                    context: myApp.template7Data
                });
            },
            error: function (xhr) {
                console.log("Error on ajax call " + xhr);
            }
        });
    }
})

/* Side Menu Handlers */
$$(document).on('click', '#favorites', function (e) {
    myApp.alert('Show my favorites');
});

$$(document).on('click', '#about', function (e) {
    myApp.alert('Show About');
});

$$(document).on('click', '#settings', function (e) {
    myApp.alert('Show Settings');
});

$$(document).on('click', '#home', function (e) {
    mainView.router.load({url: 'index.html'}); // need to fix, causes issues on mobile only when try to re-search again
    myApp.closePanel();
});
