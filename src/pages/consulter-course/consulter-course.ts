import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesProvider} from '../../providers/courses/courses';

/**
 * Generated class for the ConsulterCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulter-course',
  templateUrl: 'consulter-course.html',
})
export class ConsulterCoursePage {

  private courses;

  constructor(public navCtrl: NavController, public navParams: NavParams, public coursesProvider : CoursesProvider) {
    console.log("constr consulterCourse");
    let idCourse = this.navParams.get("idCourse");
    this.consulterCourse(idCourse);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConsulterCoursePage');
  }

  consulterCourse(idCourse: number) {
    console.log("debut methode consulterCourse("+idCourse+")");
        this.coursesProvider.consulterCourse(idCourse)
        .then(data => {
            this.courses = data;
            console.log(data);
        });
        console.log("fin methode consulterCourse(idCourse) appelant coursesProvider");
  }

}
