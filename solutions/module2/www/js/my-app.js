var myApp = new Framework7({
    precompileTemplates: true,
    template7Pages: true,
    modalTitle: "Spotify Browser"
})

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true
});

$$(document).on('input change', 'input[type="range"]', function (e) {
    $$('input#sliderVal').val(this.value);
})

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

