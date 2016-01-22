---
layout: module
title: Module 7&#58; Configuring Your App
---

### Overview

### Content Security Policy
Content Security Policy is defined as:
 
>A mechanism web applications can use to mitigate a broad class of content injection vulnerabilities, such as cross-site scripting (XSS)
 
Essentially it allows you to define where your app is allowed to load content from. You need to customize it for your own apps based on your
needs. You also must ensure the cordova-plugin-whitelist has been added to your project. (Note that it was part of the base template we used
and was already included for us in this case).  


To learn more about how to customize it specifically, check out the [Cordova Whitelist Guide](http://cordova.apache.org/docs/en/latest/guide/appdev/whitelist/index.html)
 and [Cordova Whitelist Plugin](https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy).  
 

Also, you can get help generating your specific header to include in the meta tag more easily using this [website](http://cspisawesome.com/). 

1. Open the **index.html** file in your project and add the following `<meta>` tag to set up your CSP in the `<meta>` tag section. 

        <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval';
         script-src * 'unsafe-eval'; style-src 'self'; media-src *; frame-src *;  img-src * data:; connect-src * 'unsafe-eval'">

2. To enable Android devices to navigate to external URLs and retrieve data, you must add this property to the **config.xml**
 file in addition to having the CSP above defined as well as the Cordova Whitelist plugin added. The currently block all domains so you must
 add some kind of configuration for the type of support you require. Obviously the wildcard is not a secure and production-ready solution.
 
  
        <allow-navigation href="http://*/*" />

### General configuration settings
1. Webview Bounce Effect / DisallowOverscroll

        <preference name="DisallowOverscroll" value="true" />
    
2. Storage (add this) 


### Icons and Splash Screens

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module6.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module8.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
