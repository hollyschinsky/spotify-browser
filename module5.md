---
layout: module
title: Module 5&#58; Add Menu/Side Drawer Navigation and Swipeouts
---

### Overview
In this step we'll add some common mobile UX features to our app to make it more useful; menus (aka side-drawer navigation) and swipeouts.  
 
## Side Menu
A common mobile pattern for navigation is to use a slide-out menu (otherwise known by Google as a navigation drawer). 

 <img class="screenshot-lg" src="images/menu-p.png"/>

Let's add support for one now with some very basic event handling.
 
1. Open index.html and locate the `view-main` section.  Add the following code:

        <!--Reveal effect (could also use a panel-cover effect)-->
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
 
#### Favorites Handling
The `star` button indicates that the user can add this item as a favorite. Open **my-app.js** and add the following into the list page
 init handler:
 

    $$(page.container).find('.favorite').on('click', function (e) {
         e.stopPropagation();
         var item = page.context[this.dataset.item]; //this.dataset.item returns data held in data-item attribute set in template
         myApp.alert(item.name + ' added to favorites!');
     });
     
>It will simply alert at the moment but you could extend this to add to an array of favorites and then display it in another view.     
     
#### Play Handling
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
    
<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module4.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module6.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
