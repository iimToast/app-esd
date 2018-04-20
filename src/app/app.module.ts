import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FavorisPage } from '../pages/favoris/favoris';
import { MonComptePage } from '../pages/mon-compte/mon-compte';
import { BestOfPage } from '../pages/best-of/best-of';
import { ReglagesPage } from '../pages/reglages/reglages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// ajout de firebase et af2

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAve9Ow02ACV8-IM8sovFxCdw9YUNbC9UM",
  authDomain: "esdmag-ca2ca.firebaseapp.com",
  databaseURL: "https://esdmag-ca2ca.firebaseio.com",
  projectId: "esdmag-ca2ca",
  storageBucket: "esdmag-ca2ca.appspot.com",
  messagingSenderId: "508650479974"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FavorisPage,
    MonComptePage,
    BestOfPage,
    ReglagesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FavorisPage,
    MonComptePage,
    BestOfPage,
    ReglagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
