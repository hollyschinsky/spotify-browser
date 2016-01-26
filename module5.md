---
layout: module
title: Module 5&#58; Add Menu/Side Drawer Navigation and Swipeouts
---

### Overview
In this step we'll add some common mobile UX features to our app to make it more useful; menus (aka side-drawer navigation) and swipeouts.  
 
## Side Menu

*** Need to add css to fix it up ***
*** NEED TO ADD FONT-AWESOME FOR THIS!! ** 
Icons won't show up in the detail view yet either 

The decision to use a slide-out menu (also known as a [navigation drawer](https://www.google.com/design/spec/patterns/navigation-drawer.html)
or hamburger menu) is widely debated, but it has been a common mobile pattern in the recent past. It might be best used for less commonly used
actions where you don't want to use important screen real estate.  
 
 <img class="screenshot-lg" src="images/menu-p.png"/>

Let's look at how Framework7 supports panels to create a side panel menu with some basic event handling.
 
1. Since we started with a basic Framework7 template initially, we already have some placeholder code for a panel. Open 
index.html and locate the `<div class="panel-overlay"></div>` section.  Currently there's a left panel already defined with a simple
element in it that we can replace with our menu list. Modify the existing panel code to define the following content menu list:   

        <div class="panel-overlay"></div>
        <!-- Left panel with reveal effect-->
        <div class="panel panel-left panel-reveal">
            <div class="list-block">
                <ul>
                    <li id="settings">
                        <div class="item-content">
                            <div class="item-media"> <i class="icon fa fa-cog"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">Settings</div>
                            </div>
                        </div>
                    </li>
                    <li id="favorites" >
                        <div class="item-content">
                            <div class="item-media"><i class="icon fa fa-star"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">Favorites</div>
                            </div>
                        </div>
                    </li>
                    <li id="about">
                        <div class="item-content">
                            <div class="item-media"><i class="icon fa fa-info-circle"></i></div>
                            <div class="item-inner">
                                <div class="item-title label">About</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

  >Notice the panel has a `reveal` effect. You could change it to `panel-cover` to try out that effect instead.
   

2. Now we need to add handling for each of these menu list items. Each of them has an id we can use to add a click event to. 
Open my-app.js and add the following basic click handlers to the end of the file for each of the id's:
 
    
        $$(document).on('click', '#favorites', function (e) {
            myApp.alert('Show my favorites');
        });
        
        $$(document).on('click', '#about', function (e) {
            myApp.alert('Show About');
        });
        
        $$(document).on('click', '#settings', function (e) {
            myApp.alert('Show Settings');
        });

3. **Extra credit:** Add a template to handle the About page that is loaded when the menu item is clicked. 
(Use the [Framework7 docs](http://www.idangero.us/framework7/docs) as a reference). 

## Swipeouts

Now let's add swipeout handling to our list template to allow a user to do various actions without leaving the list. 

    <img class="screenshot-md" src="images/play-front.png"/><img class="screenshot-md" src="images/swipe-front.png"/>

1. Open index.html, locate the list template definition and change this section to:
   
            <li class="swipeout">
               <div class="swipeout-content">
                   <a href='#' id='mediaItem{{@index}}' data-template='itemTemplate' data-context='{{stringify this}}'
                      class="item-content item-link">
                       <div class="item-media">
                           <img data-src="{{album.images[2].url}}" class="lazy">
                       </div>
                       <div class="item-inner">
                           <div class="item-title-row">
                               <div class="item-title">{{name}}</div>
                           </div>
                           <div class="item-subtitle">{{artists[0].name}}</div>
                           <div class="item-text">{{album.name}}</div>
                       </div>
                   </a>
               </div>
               <div class="swipeout-actions-right">
                   <a href="#" class="bg-orange favorite" data-item="{{@index}}"><i class="icon fa fa-star fa-2x"></i></a>
                   <a href="#" class="bg-blue share" data-item="{{@index}}"><i class="icon fa fa-share fa-2x"></i></a>
               </div>
               <div class="swipeout-actions-left">
                   <a href="#" class="bg-green preview" data-item="{{@index}}"><i class="icon fa fa-play fa-2x"></i></a>
               </div>
           </li>

2. In the above swipeouts we have buttons that require some handlers to invoke code to actually do something when clicked. In this
step we will add the handling for them.

    {{@index}} - number of current item in list 
 
#### Favorites Handling
The `star` button indicates that the user can add this item as a favorite. Open **my-app.js** and add the following into the list page
 init handler:
 

    $$(page.container).find('.favorite').on('click', function (e) {
         e.stopPropagation();
         var item = page.context[this.dataset.item]; //this.dataset.item returns data held in data-item attribute set in template
         myApp.alert(item.name + ' added to favorites!');
     });
     
>It will simply alert at the moment but you could extend this to add to an array of favorites and then display it in another view.     
     
#### Preview Handling
The left swipeout `play` button indicates the user can click it to play a preview of this item. Open **my-app.js** and add the following into 
the list page init handler as well:

    $$(page.container).find('.preview').on('click', function (e) {
        e.stopPropagation();
        var item = page.context[this.dataset.item]; //this.dataset.item returns data held in data-item attribute set in template

        myApp.alert("Previewing " + item.name);
        var media = new Media(item.preview_url, function () {console.log("Media Success");},function (error)
            {console.log("Media fail " + error)},null);
        media.play();
        setTimeout(function() {media.stop()},7000) //preview for 7 seconds
    });
    
    ### Dependencies
    - [Media Plugin](https://github.com/apache/cordova-plugin-media)
           
            $ phonegap plugin add cordova-plugin-media

    
<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module4.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module6.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
