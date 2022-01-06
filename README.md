# CORDSS (Childhood Onset Rare Disease Selfcare Support) App

Helping children with chronic health conditions manage their medicial notes as they transition into adulthood.

Young patients with chronic medical conditions require regular  appointments and treatments. As care teams can be situated across the  country, the current method of carrying extensive documentation between  appointments is inefficient and unmanageable for many patients. As patients  grow up and transition into an age of self-care, it is important that they gain  independence in managing their own health conditions. As such, the goal of  this project is to produce a cross-platform mobile application for GOSH  DRIVE that provides a way for patients to easily store, view and manage  aspects of their health conditions, allowing them to keep track of medical  records and build confidence in managing their own health, and inform themselves and others about their conditions. 

Developed for [GOSH DRIVE](https://www.goshdrive.com/)

Features include: 
* Record personal information and  emergency contacts. 
* Record key medical information such as conditions, medicines, appointments and test results.
* Be guided to external links for medical advice and support. 
* Document key information through  uploading pictures. 
* Download key information into  printable PDF format.
* Child-friendly, accessible and  intuitive user interface. 

## Built With

* Ionic Angular
* Cordova
* TypeScript
* HTML and CSS
* SQLite3 database
* Cordova Plugins used: Camera, SQLite, Call number, file opener, file opener2, in-app browser, PDFmake

## Authors

* Arianna Bourke
* Megan Gallagher
* Eleni Rotsidou

## Getting started

To run the project on your local machine please use the following instructions:

### Prerequisites

* Node.js 
* Ionic CLI

### Installation 

1. Clone the repo
   ```bash
   git clone https://github.com/AriannaBourke/CORDSS-App.git
   ```
 2. Navigate to the MyHealthApp folder and type the following commands:
 ```bash
	npm i

	ionic cordova plugin add cordova-plugin-file-opener2
	
	ionic cordova plugin add cordova-plugin-file

	npm install pdfmake

	npm install pdfmake @ionic-native/file-opener @ionic-native/file

	npm install html-to-pdfmake

	Ionic cordova platform add android

	Ionic cordova platform add ios
 ```

For Android (Requirements: Android Studio developer kit):
1.  Connect the device to the computer and unlock the screen
2.  ‘Import Project’ and navigate to the MyHealthApp>platforms>android
3.  Select your device from the ‘Available Devices’ drop-down
4.  Run>Run ‘app’
5.  The application will then run on the phone
Or:
From the command line type: ionic cordova run android

For iOS (Requirements: XCode):
1.  Register for an iOS developer account through XCode
2.  Connect the device to the computer
3.  ‘Import Project’ and navigate inside the source code like so:MyHealthApp>platforms>ios>CORDSS.xcworkspace
4.  Open CORDSS.xcworkspace
5.  In XCode, under ”Devices” choose your device
6.  Run the project, making sure your phone is unlocked
7.  The application will be installed on the phone



