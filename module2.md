---
layout: module
title: Module 2&#58; Setting up the App Structure 
---

### Overview
In this module you will learn how to set up your app structure, including the headers, main view, toolbars and Framework7 initialization code.
  
####Views, View, Page
- Views = the wrapper container for all visual views. Only one `views` element is allowed
- View = a separate visual part of app with its own settings, navigation and history. Need a default view with class `view-main` since it's
the default where pages are loaded into. 
**NOTE** `data-view` attribute allows you to specify the CSS selector of the view you want to load into otherwise
        <!-- This link will trigger a back in Left view -->
        <a href="#" class="back" data-view=".left-view"> About </a>
        <a href="services.html" data-view=".left-view"> Services </a>

- Pages = <div class="pages"> is a wrapper container for pages within a single view. It is required because all page transitions happen here.
- Page = like a web page, this is what we're transitioning between and there are many pages within a single view
All visual content (like list views, forms, etc.) we should put inside of <div class="page-content"> that should be a child of 
<div class="page">. This is required for correct styling, layout and scrolling
- Page Events

<div class="views">
              <!-- Your main view -->
              <div class="view view-main">
                <!-- Navbar-->
                <!-- Pages -->
                <!-- Toolbar-->
              </div>
              <!-- Another view -->
              <div class="view another-view">
                <!-- Navbar-->
                <!-- Pages -->
                <!-- Toolbar-->
              </div>          
            </div>


   <img class="screenshot-lg" src="images/not-native-alert.jpg"/>

## Steps

1. Open index.html and replace the code from the current `<body>` tag down to just before the `<script..>` tag for the cordova.js include with:

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


2. Open my-app.js and replace the current Framework7 initialization code with he following:

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

3. Set a default range value for the slider:
        
        // Set a default range slider value
        $$('input#sliderVal').val('20');

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module1.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module3.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
