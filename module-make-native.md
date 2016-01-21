---
layout: module
title: Module 2&#58; Best Practice - Using Native Alerts
---


**NEW**
 

 
## Steps
Use System Fonts
/* iOS */
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

/* Android */
font-family: 'RobotoRegular', 'Droid Sans', sans-serif;

/* Windows Phone */
font-family: 'Segoe UI', Segoe, Tahoma, Geneva, sans-serif;
  
  How to hide that it's a web app - don't allow default links on HTML elements

     disabling user selections on actionable elements
     - Disable Selection/Copy When Long Tapping
	        `-webkit-user-select: none;`
		  `-webkit-touch-callout: none; `
		  <meta name="msapplication-tap-highlight" content="no">
		  
		  outline: 0;
             -webkit-tap-highlight-color: rgba(0,0,0,0);
             -webkit-tap-highlight-color: transparent;
             -webkit-touch-callout: none;
             -webkit-user-select: none;
                -moz-user-select: none;
                 -ms-user-select: none;
                     user-select: none;

	  
     - double tapping? touch start event? Try this
     - `-webkit-user-select: text;` (built in F7 - see search field)
     - `-webkit-appearance: none;` (make flat controls not glossy) (built in F7)
    - Link Appearance     
		- Remove grey highlight around tapped links when tapped with:
	       ```-webkit-tap-highlight-color: rgba(0, 0, 0, 0);```
      		 ```-webkit-tap-highlight-color: transparent; ```
      		 - [Touch callout disabled](http://phonegap-tips.com/articles/essential-phonegap-css-webkit-touch-callout.html) 
        `-webkit-touch-callout: none` - use on a link to show this
     - Overflow scrolling (built-in F7) - If you have some elements that are set to scroll when overflowing, you might feel that the scrolling itself doesn’t “feel right”. I suggest looking in this direction:
        - `-webkit-overflow-scrolling: touch; `
      

### Overview
A default JavaScript alert gives away the fact that your application is not native. In this section, we set up the basic infrastructure to display 
native alerts when the application is running on a device, and simply fall back to default JavaScript alerts when it is running in the browser.
 
   <img class="screenshot-lg" src="images/not-native-alert.jpg"/>

## Steps
1. Notice the code behind the button pressed to illustrate the issue above. It's located in the **www/js/HomeView.js** file and is a simple alert:

        alert("PhoneGap Day Workshop App version 1.0");

1. Handle all alerts globally with some code that will override it to use the native plugin in one piece of code. Open the **www/js/app.js** file 
and add the following into the `deviceready` handling section:        


        if (navigator.notification) {      
            window.alert = function (message) {         
                navigator.notification.alert( message, // message             
                null,                                 // callback             
                "Pocket Guide",                       // title             
                'OK'                                  // buttonName             
            ); 
            };
         } else console.log("Notification plugin not found or not supported.");

2. Now test out the info button again once you have added the above code and it should look like a native alert:   
        
     <img class="screenshot-lg" src="images/native-alert.jpg"/>

### Dependencies

   [Cordova Dialogs Core Plugin](https://github.com/apache/cordova-plugin-dialogs) 
 
    $ phonegap plugin add cordova-plugin-dialogs
   
   >You won't need to specifically add it for this workshop if you used the project repo **config.xml** or if you are testing the app with the PhoneGap Developer App
   since it will automatically be added. If you are creating the project from scratch and using the CLI locally then use the command above.
   
 
         

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module1.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module3.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
