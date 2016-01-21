---
layout: module
title: Module 6&#58; Configuring Your App
---

### Overview

### Content Security Policy

 <!--
        http://cspisawesome.com/

       Customize this policy to fit your own app's needs. For more guidance, see:
           https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy
           We recommend using this site to help you build your Content Security Policy easily: http://cspisawesome.com/
       Some notes:
           * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
           * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
           * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
               * Enable inline JS: add 'unsafe-inline' to default-src
       -->
    <!--<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">-->
    <meta http-equiv="Content-Security-Policy" content="default-src *; img-src *; media-src*; frame-src *">


### General configuration settings
1. DisallowOverscroll
2. AndroidPersistentFileLocation ??? File Plugin related? Media includes file so this is set auto? Test

** These are set in the PG F7 template **


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="module5.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module7.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>
