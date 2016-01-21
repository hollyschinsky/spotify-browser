---
layout: module
title: Module 6&#58; Making Your App Feel Native
---

### Overview
In this module we're going to discuss ways to make your app feel and act native. Much of the tips included here are built into Framework7 so you
will not need to implement them in this particular app but it's important to be aware of them in general and if you decide to use a different 
framework or do it yourself in the future. 

## CSS Tips for a Native Feel
1. Use System Fonts

*iOS*    
    `font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;`

*Android*    
    `font-family: 'RobotoRegular', 'Droid Sans', sans-serif;`

*Windows Phone*
    `font-family: 'Segoe UI', Segoe, Tahoma, Geneva, sans-serif;`    

2. Disable user selections on actionable elements (for instance a select on a long tap)

Try it without, try it with this

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

3. Link Appearance (don't allow default links on HTML elements)     
 -Remove grey highlight around tapped links:
	       
	       -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      	   -webkit-tap-highlight-color: transparent; 
     	   
  > May or may not need both of the above      	   
 
 -Disable touch callout (default callout that displays when you hold down on a link)
      		 
      		 - [Touch callout disabled](http://phonegap-tips.com/articles/essential-phonegap-css-webkit-touch-callout.html) 
        `-webkit-touch-callout: none` - use on a link to show this

4. Overflow scrolling - if you feel like the scrolling in your app doesn't quite feel right, try adding the following CSS property to your container:

        - `-webkit-overflow-scrolling: touch; `
      
>All of the above are built into Framework7. 
 
## Performance Tips

TODO NEED DEMOS

1. Serve properly sized images for all different resolutions
>Resolution-independent images (SVG) are a great option and scale well.

2. Native Scrolling (momentum scrolling)
Scrollable content and a fixed header and/or footer bar are common to nearly all apps. There are two common approaches to achieving this with CSS:
    - Disabling scrolling on the body, and applying `overflow: scroll` to the content enables momentum scrolling
    
> On Android 4+ every scrollable container has momentum scrolling.

3. Hardware Accelerated Transitions

>The [Native Transitions Plugin](http://plugins.telerik.com/cordova/plugin/native-page-transitions) is a Cordova plugin to help increase the speed of your transitions.  The plugin immediately grabs a screenshot 
of your webview (making a more lightweight view), then waits for the new content to load, and then performs the transition by animating out the 
screenshot and in the new view.

4. Some other nice features Framework7 includes to help with performance:
-Lazy loading of images
-Virtual lists
-HTML Caching


## Guides 
Check out these specific guides to find out more details on specific ways to ensure your app feels native and performant.  


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module7.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
