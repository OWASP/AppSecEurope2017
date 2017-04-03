---
title: Developer summit
---

# {{page.title}}

We are excited to announce the OWASP Developer Summit EU 2017. OWASP is providing a structured platform for Developers two full days prior to the AppSec EU 2017 conference. The Developer Summit will start with a full-day, hands-on developer session followed by two half day sessions geared towards learning about security vulnerabilities. 

Come by yourself or grab a couple friends. The Developer Summit is free (no charge) for anyone who would like to participate and learn something new. 

We just ask that you [SIGN](https://docs.google.com/spreadsheets/d/1mVVonj0axYtn3DSdku3nEsbSqx-rIrqgy9D1Gojg7AI/edit#gid=0) UP so we can get a head count to be sure we have enough space and food.

## Agenda

### Day 1: Full Day Hands On Session 
Date: Tuesday, May 9th  
Time: 9am-5pm (breakfast at 9am, lunch at 12pm)  
Presenter: Johanna Curiel, Vice Chair of the OWASP Board of Directors

**Reverse Engineering Android Apps with Bytecodeviewer**

Two important OWASP Top 10 Mobile risks are how resistant an application is against Reverse Engineering and Code Tampering. In this hands on session, we will go through the process of Reverse Engineering known Android apps (like Facebook, some banking apps,Twitter etc), or bring your own app and test it if you want! 

Using hands-on techniques you will learn:

* How to apply OWASP Mobile Top 10, Mobile Testing Guide(in progress) and Android Cheat Sheet pen testing
* How hackers actually ‘decompile’ an APK and code tamper apps with Hooking methods using Xposed or changing Smali
* Techniques to find useful information in highly obfuscated apps
* How to bypass Certificate Pinning and Root detection
* What can you do to make your apps harder against Reverse Engineering
* How to root a phone. If you have not root'ed a phone, bring one (make sure is using Android Nougat 6.0 or earlier versions of Android)

Requirements:

* Own laptop
* [Bytecodeviewer 2.9.8](https://github.com/Konloch/bytecode-viewer)
* [Dex2Jar](https://github.com/pxb1988/dex2jar)
* [JD-GUI](http://jd.benow.ca/)
* [ApkTool](https://ibotpeaches.github.io/Apktool/)
* [https://github.com/voider1/a2scomp](https://github.com/voider1/a2scomp)
* [Android Studio + SDK Tools installed](https://developer.android.com/studio/index.html)
* A rooted Android Device /or you can root your device in the class
* USB Cable to connect to your android phone to the laptop


### Day 2: Half Day Morning Session
Date: Wednesday, May 10th  
Time: 9am-1pm (breakfast at 9am, lunch at 12pm)  
Presenter: Spyros Gasteratos

**Automating On-Deploy Security Testing* of web applications with ZAP and Jen**

In this workshop we will go through installing and configuring Zap to work with Jenkins so that it automatically tests the deployed web application when we ask Jenkins to do so. Moreover we will write an example Zap plugin to better test specific parts of the example application. 

We will go through:

* Configuring Jenkins to work with ZAP (there’s a plugin, we’ll go through how it works)
* Configuring the testing harness to work with ZAP
* Writing zap plugins in order to test better

Requirements: [To be announced]

### Day 2: Half Day Afternoon Session
Date: Wednesday, May 10th  
Time: 1pm - 5pm  
Presenters: Nicole Becher & Mordecai Kraushar  

**Attacking your web app**

There are some great OWASP projects that deal with both methodologies and tools for testing web sites. There may be even more to it! This workshop will provide the developer with a look at the offensive mindset an attacker has in attacking your web site

We will go through:

* Using automated scanning tools against the app
* Using ZAP we will look at a few things you can do as a proxy
* Use sqlmap to enumerate and inject into databases
* How to go after those non-technical app vulnerabilities

Requirements:

* On a Virtual Machine a recent copy of Kali
* On a Virtual Machine a copy of the Broken Web Application Distribution
* The OWASP Juice Shop project








