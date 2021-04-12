import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor( private _plat: Platform, private splashScreen: SplashScreen) {
    
  this._plat.ready().then(() => {
    setTimeout(() => {
        this.splashScreen.hide();

    }, 800);
});
  

}}


