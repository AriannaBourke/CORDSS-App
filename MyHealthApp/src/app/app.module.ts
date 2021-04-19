import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from "@ionic-native/camera/ngx";
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { File } from '@ionic-native/file/ngx'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavParams } from '@ionic/angular';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, NavParams],
  providers: [ Camera, CallNumber, SQLite, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, File, SplashScreen, FileOpener, StatusBar, NavParams ],
  bootstrap: [AppComponent],
})
export class AppModule {}
