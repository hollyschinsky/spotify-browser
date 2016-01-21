---
layout: module
title: Module 3&#58; Performance Optimizations
---

### Overview

 
## Steps

1. Serving properly sized images for all different resolutions
Resolution-independent images (SVG) great option and scale well


SCROLLING
Scrollable content and a fixed header and/or footer bar are common to nearly all apps. There are two common approaches to achieving this with CSS:
    - Disabling scrolling on the body, and applying `overflow: scroll` to the content;
    
overflow-scrolling that enables momentum scrolling
On Android 4, you don’t even need this property. Every scrollable container has momentum scrolling.


Native Transitions Plugin
the plugin immediately grabs a screenshot of your webview, then waits a little for the new content to load, and then performs the transition by animating out the screenshot and in the view.

1. Open up the **lib/router.js** file and look through the code. This library is just a simple routing mechanism based on hash tag routing.
             
2. Now open **www/js/app.js** and take a look at the routes being used for this application:
 
       service.initialize().done(function () {
            router.addRoute('', function() {
                slider.slidePage(new HomeView(service).render().$el);
            });
       
           router.addRoute('items/:id', function(id) {
               service.findById(parseInt(id)).done(function(item) {
                   slider.slidePage(new ItemView(item).render().$el);
               });
           });
       
           router.start();
       });

  When the URL is empty (no additional parameters), we show the home view with the list of items. However if we find the URL contains
  `/items` with a given id, then we look up the id and show the `ItemView` for that item.

> [PageSlider](https://github.com/ccoenraets/PageSlider) is a simple library providing hardware accelerated page transitions for Mobile Apps

3. Open **www/js/HomeView.js** and notice how you can render template content within another template, for example, the `ListView` items are populated here within the `content` tag of the home template when the `HomeView` is rendered.

            this.render = function() {
                this.$el.html(this.template());
                $('.content', this.$el).html(listView.$el);
                 return this;
            };
            
            this.findByName = function() {
                service.findByName($('.search-key').val()).done(function(items) {
                    listView.setListItems(items);
                });
            };
        
            this.findAll = function() {
                service.findAll().done(function(items) {
                    listView.setListItems(items);
                });
            };

> See [this workshop](http://hollyschinsky.github.io/phonegap-workshop/) for a better understanding of how this architecture was put together. 

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module2.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module4.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
