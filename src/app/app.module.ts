import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Firebase } from '@ionic-native/firebase';
import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { LicensePage } from '../pages/license/license';
import { HistoryService } from '../services/history';
import { StorageService } from '../services/storage';
import { FontPage } from '../pages/font/font';
import { AboutPage } from '../pages/about/about';
import { DayInfoService } from '../services/dayInfo';
import { AudioService } from '../services/audio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    LicensePage,
    FontPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    LicensePage,
    FontPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    HistoryService,
    StorageService,
    DayInfoService,
    Base64ToGallery,
    Firebase,
    NativeAudio,
    AudioService
  ]
})
export class AppModule {}
