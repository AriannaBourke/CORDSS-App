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
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ Camera, CallNumber, SQLite, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ImagePicker, File, SplashScreen, FileOpener, StatusBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
