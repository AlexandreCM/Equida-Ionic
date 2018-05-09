import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LstChevauxPage } from '../pages/lst-chevaux/lst-chevaux';
import { ConsulterChevalPage } from '../pages/consulter-cheval/consulter-cheval';
import { LstCoursesChevalPage } from '../pages/lst-courses-cheval/lst-courses-cheval';
import { AjouterChevalPage } from '../pages/ajouter-cheval/ajouter-cheval';

import { LstVentesPage } from '../pages/lst-ventes/lst-ventes';
import { ConsulterVentePage } from '../pages/consulter-vente/consulter-vente';
import { LstChevauxConcernerPage } from '../pages/lst-chevaux-concerner/lst-chevaux-concerner';

import { LstCoursesPage } from '../pages/lst-courses/lst-courses';
import { ConsulterCoursePage } from '../pages/consulter-course/consulter-course';

import { LstClientsPage } from '../pages/lst-clients/lst-clients';
import { ConsulterClientPage } from '../pages/consulter-client/consulter-client';
import { LstCategInteresserPage } from '../pages/lst-categ-interesser/lst-categ-interesser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChevauxProvider } from '../providers/chevaux/chevaux';
import { CoursesProvider } from '../providers/courses/courses';
import { ClientsProvider } from '../providers/clients/clients';
import { VentesProvider } from '../providers/ventes/ventes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

    LstChevauxPage,
    ConsulterChevalPage,
    LstCoursesChevalPage,
    AjouterChevalPage,

    LstVentesPage,
    ConsulterVentePage,
    LstChevauxConcernerPage,

    LstCoursesPage,
    ConsulterCoursePage,

    LstClientsPage,
    ConsulterClientPage,
    LstCategInteresserPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,

    LstChevauxPage,
    ConsulterChevalPage,
    LstCoursesChevalPage,
    AjouterChevalPage,

    LstVentesPage,
    ConsulterVentePage,
    LstChevauxConcernerPage,

    LstCoursesPage,
    ConsulterCoursePage,

    LstClientsPage,
    ConsulterClientPage,
    LstCategInteresserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChevauxProvider,
    CoursesProvider,
    ClientsProvider,
    VentesProvider
  ]
})
export class AppModule {}
