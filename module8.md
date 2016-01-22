---
layout: module
title: Module 8&#58; Add Native Share Feature
---
In this lesson we'll learn how to share a destination's information through the device's native sharing options. 

### Steps
Prior to this we added the button for sharing on both the list and item detail views, however they don't actually do anything yet.
In this module we'll add event handling to them and use the Social Sharing plugin. 

1. Open **my-app.js** and locate the page init event handler for the *list* page (`myApp.onPageInit('list')...`). 
2. Add the following code to handle when a user clicks the share button on the swipeout:
  
         $$(page.container).find('.share').on('click', function (e) {
             e.stopPropagation();
             var item = page.context[this.dataset.item]; //this.dataset.item returns data held in data-item attribute set in template
     
             if (window.plugins && window.plugins.socialsharing) {
                 window.plugins.socialsharing.share("Hey! My new favorite song is " + item.name + " check it out!",
                     'Check this out', item.album.images[2].url, item.preview_url,
                     function () {
                         console.log("Share Success")
                     },
                     function (error) {
                         console.log("Share fail " + error)
                     });
             }
             else console.log("Share plugin not found");
         });

3. Next add the share handler for the media detail page under the media page init code block  (`myApp.onPageInit('media')...`). 
        
        if (window.plugins && window.plugins.socialsharing) {
            window.plugins.socialsharing.share("Hey! My new favorite song is " + item.name + " check it out!",
                'Check this out', item.album.images[2].url, item.preview_url,
                function () {
                    console.log("Share Success")
                },
                function (error) {
                    console.log("Share fail " + error)
                });
        }
        else console.log("Share plugin not found");

Now run the application and ensure you see the native sharing working on your desired device. For instance, on iOS you will see something like shown
below:

<img class="screenshot-lg" src="images/share1.png"/>
<img class="screenshot-lg" src="images/share2.png"/>
    
>The options shown here will depend on your particular devices' native sharing options.

### Dependencies
 
-[Social Sharing 3rd Party Plugin](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
  
     $ phonegap plugin add cordova-plugin-x-socialsharing
    
    
 > The Social Sharing plugin is already included in the config.xml from the final project repo and will be added automatically if you are using it with the 
  CLI locally.  If you're using the PhoneGap Developer App to preview your app however, this will not work since it is a 3rd party plugin.

<div class="row" style="margin-top:40px;">
 <div class="col-sm-12">
 <a href="module7.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
 <a href="module9.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
 </div>
</div>


