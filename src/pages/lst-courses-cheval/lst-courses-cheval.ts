import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';

/**
 * Generated class for the LstCoursesChevalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-courses-cheval',
  templateUrl: 'lst-courses-cheval.html',
})
export class LstCoursesChevalPage {

  // public cheval;
  private courses;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chevauxProvider: ChevauxProvider) {

    console.log("constr LstCoursesChevalPage");
    let idCheval = this.navParams.get("idCheval");
    this.getLesCoursesCheval(idCheval);

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LstCoursesChevalPage');
  }

  getLesCoursesCheval(idCheval: number) {
    console.log("methode getLesCoursesCheval("+idCheval+")");
    this.chevauxProvider.getLesCoursesCheval(idCheval)
    .then(data => {
      this.courses = data;
      console.log(this.courses);
    });
  }

}
