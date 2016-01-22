---
layout: module
title: Module 2&#58; Create the App Structure 
---

## Overview
In this module you will learn how to set up your app structure, including the headers, main view, toolbars and Framework7 initialization code.
  
A quick explanation of what Views and Pages mean in context of Framework7 is worth mentioning but you should refere to the extensive docs pages
and example apps on [the Framework7 website](http://www.idangero.us/framework7/docs) to understand further.

### Views
The wrapper container for all visual views. Only one `views` element is allowed

### View
A separate visual part of app with its own settings, navigation and history. You must have a default view with class `view-main` since it's
the default where all pages are loaded into.  

### Pages
A wrapper container for pages within a single view. It is required because all page transitions happen here.

### Page
Similar to a web page, this is what we're transitioning between and there are many pages within a single view

> Based on the above terminology, in our Spotify Browser App we are using one View (stack of pages) and we navigate between these pages
 by loading different templates into the main view container along with the required data to bind to that page so the expressions are
 properly evaulated. 
 
    <img class="screenshot-lg" src="images/structure.png"/>

### Steps

Open **index.html** and replace the code from the current `<body>` tag down to just before the cordova.js `<script>` include with:

    <body class="layout-dark">
    <!-- Status bar overlay for iOS7 issue - see my-app.css for background color setting and config.xml -->
    <div class="statusbar-overlay"></div>
    
    <!-- Panels overlay - used for side menu and any other panels to slide out from either side-->
    <div class="panel-overlay"></div>
    
    <!-- Left panel menu with reveal effect (could also use a panel-cover effect)-->
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
                <li id="home">
                    <div class="item-content">
                        <div class="item-media"><i class="icon fa fa-home"></i></div>
                        <div class="item-inner">
                            <div class="item-title label">Home</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
    <!-- Views-->
    <div class="views">
        <!-- Main view-->
        <div class="view view-main">
            <!-- Top Navigation Bar-->
            <div class="navbar" >
                <div class="navbar-inner">
                    <!-- Home navbar -->
                    <div class="left ">
                        <!-- Left side navbar contains only icon -->
                        <a href="#" class="link icon-only open-panel">
                            <i class="icon icon-bars"></i>
                        </a>
                    </div>
                    <div class="center sliding">Spotify Browser</div>
                </div>
            </div>
    
            <!-- Pages - Fixed navbar and toolbar throughout all pages in this view stack-->
            <div class="pages navbar-through toolbar-through">
                <!-- Page, data-page contains page name-->
                <div data-page="index" class="page">
                    <!-- Scrollable page content-->
                    <div class="page-content">
                        <div class="content-block-title">Criteria</div>
                        <div class="list-block">
                            <ul>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-name"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">Search</div>
                                            <div class="item-input">
                                                <input id="term" type="text" placeholder="Search for..." value=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
    
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-settings"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">Max Results</div>
                                            <div class="item-input">
                                                <div class="range-slider">
                                                    <input id="numResults" type="range" min="0" max="50" value=" 20" step="1"/>
                                                </div>
                                            </div>
                                            <div class="item-input">
                                                <input id="sliderVal" type="text" disabled>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="content-block">
                            <div class="row">
                                <div class="col-100">
                                    <input id="btnSearch" type="button" value="Submit" class="button button-big button-fill color-green"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- Bottom Toolbar on every view unless no-toolbar class specified -->
            <div class="toolbar">
                <div class="toolbar-inner">
                    <a href="http://www.spotify.com" class="link external">
                        <i class="icon icon-spotify"></i>
                        <p>Spotify</p>
                    </a>
    
                    <a href="http://www.idangero.us/framework7" class="link external">
                        <i class="icon icon-f7"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>


Open **my-app.js** and replace the current Framework7 initialization code with the following:

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

Add the following code to handle the slider value update:
        
        // Set a default range slider value
        $$('input#sliderVal').val('20');

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module1.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module3.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
