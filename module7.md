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
    
2. iOS Backup Storage (defaults to iCloud)
 
        <preference name="BackupWebStorage" value="none" />


### Icons and Splash Screens
The icons and splash screens required for each platform vary depending on platform and version. The latest iOS requirements are here.
The Ionic guys have a great tool for making this process easy using their icon sizing service. You need to provide an image for an icon
iwth a size of 192x192 and another for the splash screen with a size of 2208x2208. Ionic provides Photoshop templates you can use as well.
See [this post](http://blog.ionic.io/automating-icons-and-splash-screens/) for more details on using their tool.
 
For this workshop we can use the resources folder provided in the sample project, then add the references to the **config.xml** as shown below.
If you build the project with the CLI it will copy them down into the platforms for you. 

#### iOS
        <icon src="resources/ios/icon/icon.png" width="57" height="57"/>
        <icon src="resources/ios/icon/icon@2x.png" width="114" height="114"/>
        <icon src="resources/ios/icon/icon-40.png" width="40" height="40"/>
        <icon src="resources/ios/icon/icon-40@2x.png" width="80" height="80"/>
        <icon src="resources/ios/icon/icon-50.png" width="50" height="50"/>
        <icon src="resources/ios/icon/icon-50@2x.png" width="100" height="100"/>
        <icon src="resources/ios/icon/icon-60.png" width="60" height="60"/>
        <icon src="resources/ios/icon/icon-60@2x.png" width="120" height="120"/>
        <icon src="resources/ios/icon/icon-60@3x.png" width="180" height="180"/>
        <icon src="resources/ios/icon/icon-72.png" width="72" height="72"/>
        <icon src="resources/ios/icon/icon-72@2x.png" width="144" height="144"/>
        <icon src="resources/ios/icon/icon-76.png" width="76" height="76"/>
        <icon src="resources/ios/icon/icon-76@2x.png" width="152" height="152"/>
        <icon src="resources/ios/icon/icon-small.png" width="29" height="29"/>
        <icon src="resources/ios/icon/icon-small@2x.png" width="58" height="58"/>
        <icon src="resources/ios/icon/icon-small@3x.png" width="87" height="87"/>
        <splash src="resources/ios/splash/Default-568h@2x~iphone.png" width="640" height="1136"/>
        <splash src="resources/ios/splash/Default-667h.png" width="750" height="1334"/>
        <splash src="resources/ios/splash/Default-736h.png" width="1242" height="2208"/>
        <splash src="resources/ios/splash/Default-Landscape-736h.png" width="2208" height="1242"/>
        <splash src="resources/ios/splash/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
        <splash src="resources/ios/splash/Default-Landscape~ipad.png" width="1024" height="768"/>
        <splash src="resources/ios/splash/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
        <splash src="resources/ios/splash/Default-Portrait~ipad.png" width="768" height="1024"/>
        <splash src="resources/ios/splash/Default@2x~iphone.png" width="640" height="960"/>
        <splash src="resources/ios/splash/Default~iphone.png" width="320" height="480"/>


### Android
    <icon src="resources/android/icon/drawable-ldpi-icon.png" density="ldpi"/>
    <icon src="resources/android/icon/drawable-mdpi-icon.png" density="mdpi"/>
    <icon src="resources/android/icon/drawable-hdpi-icon.png" density="hdpi"/>
    <icon src="resources/android/icon/drawable-xhdpi-icon.png" density="xhdpi"/>
    <icon src="resources/android/icon/drawable-xxhdpi-icon.png" density="xxhdpi"/>
    <icon src="resources/android/icon/drawable-xxxhdpi-icon.png" density="xxxhdpi"/>
    <splash src="resources/android/splash/drawable-land-ldpi-screen.png" density="land-ldpi"/>
    <splash src="resources/android/splash/drawable-land-mdpi-screen.png" density="land-mdpi"/>
    <splash src="resources/android/splash/drawable-land-hdpi-screen.png" density="land-hdpi"/>
    <splash src="resources/android/splash/drawable-land-xhdpi-screen.png" density="land-xhdpi"/>
    <splash src="resources/android/splash/drawable-land-xxhdpi-screen.png" density="land-xxhdpi"/>
    <splash src="resources/android/splash/drawable-land-xxxhdpi-screen.png" density="land-xxxhdpi"/>
    <splash src="resources/android/splash/drawable-port-ldpi-screen.png" density="port-ldpi"/>
    <splash src="resources/android/splash/drawable-port-mdpi-screen.png" density="port-mdpi"/>
    <splash src="resources/android/splash/drawable-port-hdpi-screen.png" density="port-hdpi"/>
    <splash src="resources/android/splash/drawable-port-xhdpi-screen.png" density="port-xhdpi"/>
    <splash src="resources/android/splash/drawable-port-xxhdpi-screen.png" density="port-xxhdpi"/>
    <splash src="resources/android/splash/drawable-port-xxxhdpi-screen.png" density="port-xxxhdpi"/>
    
    
    
    <preference name="SplashScreen" value="screen"/>
    <preference name="SplashScreenDelay" value="3000"/>
 
 




<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module6.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module8.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
