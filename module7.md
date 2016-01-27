---
layout: module
title: Module 7&#58; Configuring Your App
---

### Overview
Confi

### General configuration settings
1. Webview Bounce Effect / DisallowOverscroll

        <preference name="DisallowOverscroll" value="true" />
    
2. iOS Backup Storage (defaults to iCloud)
 
        <preference name="BackupWebStorage" value="none" />

**These settings were already included in your base template project, but worth pointing out.** 

### Icons and Splash Screens
#### General Icon (PhoneGap Desktop Uses)
1. Copy the icon.png file from the final project into your project root, this will be the general icon to be used for the app and is displayed 
in PhoneGap Desktop. 

2. Now open the config.xml file and add an icon element to reference it. A good place to put it is just after the <content src="index.html">.
      
      <icon src="www/icon.png" />

This will configure a general icon to be used to represent your app.  

### Bonus: Platform-Specific Icon Configuration
The above is fine while testing but when you're ready to actually build and package your app for submission you'll want to know how to 
configure all the different sizes needed specifically per platform. (This will vary depending on platform and version, use this as a general guideline
and see the official iOS/Android/MS docs for the latest details. 

The Ionic Framework has a great tool for making this process easy using their icon sizing service. You need to provide an image for an icon
with a size of 192x192 and another for the splash screen with a size of 2208x2208. Ionic provides Photoshop templates you can use as well.
See [this post](http://blog.ionic.io/automating-icons-and-splash-screens/) for more details on using their tool.
 
1. An icon and splash screen are included at the proper sizes in a *resources* folder in the project root starting with this module going forward. You can 
use them to run `ionic resources` and they will generate all the icons and splash screen file sizes for you and add them to the config.xml file. 
Once the CLI is used to do a build locally (for instance when you're ready to move towards production), then
these assets will all be copied down to their respective platform locations for you by having them included here. 
   
    **Note:** If you're using the Android platform, Ionic also includes the following two preferences to configure the splash screen. 
    Please see the [Cordova Splash Screen plugin](https://github.com/apache/cordova-plugin-splashscreen) for more details. 
  
        <preference name="SplashScreen" value="screen"/>
        <preference name="SplashScreenDelay" value="3000"/>

### Plugin Dependencies 
At this point it's worth going over all of the plugins this project relies on. You can add them into your config.xml so you have them 
when you decide to use the CLI to build locally and outside of the PhoneGap Developer app. 

        <plugin name="cordova-plugin-statusbar" spec="~1.0.1" />
        <plugin name="cordova-plugin-console" spec="~1.0.1" />
        <plugin name="cordova-plugin-whitelist" spec="~1.2.1" />
        <plugin name="cordova-plugin-media" spec="~2.1.0" />
        <plugin name="cordova-plugin-file" spec="~4.1.0" />
        <plugin name="cordova-plugin-splashscreen" spec="~3.1.0" />
        <plugin name="cordova-plugin-x-socialsharing" spec="~5.0.9" />

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module6.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module8.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
