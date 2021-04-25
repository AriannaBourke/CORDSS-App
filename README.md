# COMP0067_2021_Team12

CORDSS

Childhood Onset Rare Diseae Selfcare Support App

Helping children with chronic health conditions manage their medicial notes as they transition into adulthood.


Developed as part of the COMP0067 module, for GOSH DRIVE

Developers: Eleni Rotsidou, Megan Gallagher, Arianna Bourke

Technologies used: Ionic Angular, with Cordova, TypeScript, HTML and CSS. With a SQLite3 database.

Requirements: Node.js and ionic CLI


To run the app, navigate to the MyHealthApp folder and type the following commands:

	npm i

	ionic cordova plugin add cordova-plugin-file-opener2
	
	ionic cordova plugin add cordova-plugin-file

	npm install pdfmake

	npm install pdfmake @ionic-native/file-opener @ionic-native/file

	npm install html-to-pdfmake

	Ionic cordova platform add android

	Ionic cordova platform add ios



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


Cordova Plugins used: Camera, SQLite, Call number, file opener, file opener2, in-app browser, PDFmake
