---
layout: module
title: Module 9&#58; Debugging your Apps 
---

## Overview
In this module we'll cover useful debugging tools that you should know how to use as a hybrid app developer. There are many options for debugging
 your apps regardless of how you're running your app; on device/emulator, in the browser or in the PhoneGap Developer App.  

### iOS Remote Debugging via Safari
This feature was introduced in iOS6 and allows you to use the Safari web browser to debug web applications running on iOS devices, and this includes PhoneGap apps.  

#### Requirements
- Mac OS X
- USB Cable
- Safari Version 6.0+
- iOS Device or Simulator

>  You can remote debug a PhoneGap application running on a simulator if you don't have a device handy for testing. 
If you're using the PhoneGap CLI in particular, ensure to install [ios-sim](https://github.com/phonegap/ios-sim) to easily launch and simulate your apps on iOS.</div>

#### Steps 
1. Connect your iOS Device to your computer via USB
2. Enable Web Inspector on the device: 
    - Open **Settings**, click on **Safari**, then **Advanced** from your device and turn on the Web Inspector toggle as shown below:

   <img class="screenshot-lg-center" src="images/ios-web-insp.png"/>

3. Enable the Safari Developer Menu on your computer
    - Open Safari and select **Preferences** from the Safari toolbar drop-down
    - Check the box next to **Show Develop menu in menu bar** at the bottom of the screen  as shown below:

    <img class="screenshot-lg" src="images/safari-dev-menu.png"/>

4. Run the mobile PhoneGap application you want to debug on your device or simulator from  the CLI 
		    
		 $ phonegap run ios  
		 $ phonegap run ios --emulator
		
5. Open the newly enabled **Develop** menu in Safari and locate the name of your connected device in the drop down:

  <img class="screenshot-lg" src="images/safari-develop.png"/>
  
6. Select it and start debugging your app directly on the device using the Safari Web Inspector tools.

  <img class="screenshot-lg" src="images/safari-web-insp.png"/>

<div class="alert--info">Check out the [Safari Web Inspector Official Documentation](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html) for details about what you can do with the tools.</div>

### Android Device Debugging via Chrome 

You can remotely debug your Android applications running on your device in a similar way to iOS apps running in Safari with Android apps running in Chrome. Follow the steps to get started.

#### Requirements
- USB Cable
- Chrome Version 32+
- Android Device 

#### Steps
1. Connect your Android Device to your computer via USB
2. Enable Developer mode on your device - from your Android device, open up Settings and scroll down to **About phone**, scroll down to the **Build number** and tap on it 7 times:

  <img class="screenshot-lg-center" src="images/build-number.png"/>

3. Go back to the previous Settings screen and locate the new developer options item: 

  <img class="screenshot-lg-center" src="images/android-dev-options.png"/>
    
4. Tap into it and turn on USB Debugging (and any other settings you may need):

   <img class="screenshot-lg-center" src="images/usb-debug.png"/>
 
5. Run the mobile PhoneGap application you want to debug on the device from the CLI 
    		
    	$ phonegap run android
    	

6. Open Chrome on your computer and type `chrome://inspect/` for the URL location

7. From the **Devices** menu option on the left you should see your device with a list of web applications running on it including WebView applications. Locate your app in the list.

   <img class="screenshot-lg" src="images/chrome-inspect.png"/>

8. Click *inspect* and start debugging your application directly on your device using the Chrome DevTools.  
 
  <img class="screenshot-lg" src="images/chrome-devtools.png"/>
    
>Check out the [Chrome DevTools Official Documentation](https://developer.chrome.com/devtools/docs/remote-debugging) for details about what you can do with the tools.</div>

 
### Debugging Apps Running in PhoneGap Developer App
Check out this detailed guide in our [PhoneGap Docs]( http://docs.phonegap.com/references/developer-app/debugging/) of how to debug your apps using weinre:

### Additional Debugging Resources:
- [GapDebug](https://www.genuitec.com/products/gapdebug/)

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module8.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module10.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
