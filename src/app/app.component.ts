import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { LstChevauxPage } from '../pages/lst-chevaux/lst-chevaux';
import { LstVentesPage } from '../pages/lst-ventes/lst-ventes';
import { LstCoursesPage } from '../pages/lst-courses/lst-courses';
import { LstClientsPage } from '../pages/lst-clients/lst-clients';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LstChevauxPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Chevaux', component: LstChevauxPage },
      { title: 'Ventes', component: LstVentesPage },
      { title: 'Courses', component: LstCoursesPage },
      { title: 'Clients', component: LstClientsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
