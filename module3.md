---
layout: module
title: Module 3&#58; Spotify API Call and Results Handling 
---

### Overview
This is a 2-part module where you will implement the submit button handling from our main view to call the Spotify API in Part 1 and then
 create your list template to load the data into in Part 2. 
  
  <img class="screenshot-lg" src="images/list.png"/>
  
### Part 1
  
1. Open **my-app.js** and add the following code block to handle the submit button using page level events:

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
                        console.log("Items returned: " +  resp.tracks.items);                         
                    },
                    error: function (xhr) {
                        console.log("Error on ajax call " + xhr);
                    }
                });
            }
        })
        
    >Note: you could handle this inside a page level event as well        

2. Run this in the browser and make sure you're getting results back in the success function.

###Part 2

1. Open index.html and add the following template for the list view just before the cordova.js `<script>` include:

        <script id="listTemplate" type="text/template7">
            <div class="navbar">
                <div class="navbar-inner">
                    <div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>
                    <div class="center sliding">Results</div>
                    <div class="right">
                        <a href="#" class="link icon-only open-panel"> <i class="icon icon-bars"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="page" data-page="list">
                <form class="searchbar searchbar-init" data-search-list=".list-block-search" data-search-in=".item-title"
                      data-searchbar-found=".searchbar-found" data-searchbar-not-found=".searchbar-not-found">
                    <div class="searchbar-input">
                        <input type="search" placeholder="Search">
                        <a href="#" class="searchbar-clear"></a>
                    </div>
                    <a href="#" class="searchbar-cancel">Cancel</a>
                </form>
                <div class="searchbar-overlay"></div>
                <div class="page-content">
                    <!-- no result -->
                    <div class="content-block searchbar-not-found">
                        Nothing found
                    </div>
        
                    <div id="mediaList" class="list-block media-list list-block-search searchbar-found">
                        <ul>
                            {{#each this}}
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
                            {{/each}}
                        </ul>
                    </div>
                </div>
            </div>
           </script>

2. Change the ajax `success` function to use the new template and data:

        success: function (resp) {
            myApp.template7Data = resp.tracks.items;
             mainView.router.load({
                template: Template7.templates.listTemplate,
                context: myApp.template7Data
            });
        },

3. Now try running the app to ensure you get back list results based on your search. Your list view should look something like the following:

  <img class="screenshot-lg" src="images/list.png"/>

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module4.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
