---
layout: module
title: Module 4&#58; Implement Track Detail Page
---

### Overview
In this module you will add a template to display the details of a track selected from the list view.
 
## Steps
1. Open index.html and add the following template for the item detail after the list template created in the previous step.

    <script id="itemTemplate" type="text/template7">
        <!-- Navbar for this view -->
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left"><a href="#" class="back link"> <i class="icon icon-back"></i><span>Back</span></a></div>
                <div class="center sliding">Media Detail</div>
                <div class="right">
                    <a href="#" class="link icon-only open-panel"> <i class="icon icon-bars"></i></a>
                </div>
            </div>
        </div>
    
        <div data-page="media" class="page no-toolbar">
            <div class="page-content">
                <div class="content-block-title">Track Info</div>
                <div class="list-block">
                    <!-- item template content gets appended here -->
                    <ul>
                        <li>
                            <div class="item-content">
                                <div class="item-media"><img data-src="{{album.images[2].url}}" class="lazy"/></div>
                                <div class="item-inner">
                                    <div class="item-title">{{name}}</div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title label">Type</div>
                                    <div class="item-title label">{{type}}</div>
                                </div>
                            </div>
                        </li>
    
                        <li>
                            <div class="item-content">
                                <div class="item-inner">
                                    <div class="item-title label">Artist</div>
                                    <div class="item-title label">{{artists[0].name}}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="content-block-title">Album Info</div>
                    <div class="list-block">
                        <ul>
                            <li>
                                <div class="item-content">
                                    <div class="item-inner">
                                        <div class="item-title label">Album</div>
                                        <div class="item-title label">{{album.name}}</div>
                                    </div>
                                </div>
                            </li>
    
                            <li>
                                <div class="item-content">
                                    <div class="item-inner">
                                        <div class="item-title label">Popularity Rank</div>
                                        <div class="item-title label">{{popularity}}</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="content-block-title">Preview</div>
                    <div class="content-block inset">
                        <div class="content-block-inner">
                            <div id="previewAudio">
                                <audio controls preload src="{{preview_url}}"></audio>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    </script>

2. Try running the app in the browser to ensure you're navigating into this new detail view when a list item is clicked. 
3. Now try clicking on the Preview button. 
4. Instead of doing a browser test, serve and run the app in the PhoneGap Developer app and try to preview the audio there. 

### Bonus Step  
1. If you have the PhoneGap CLI setup to build locally with a platform SDK, try using it to run your app on the emulator or a device:

        $ phonegap run ios
        $ phonegap run android
        
1. What happens when you try to preview the audio? Why? 

### Dependencies
- [Media Plugin](https://github.com/apache/cordova-plugin-media)
       
      $ phonegap plugin add cordova-plugin-media


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module3.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module5.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
