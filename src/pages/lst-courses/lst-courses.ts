import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesProvider} from '../../providers/courses/courses';
import { ConsulterCoursePage } from '../consulter-course/consulter-course';

/**
 * Generated class for the LstCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-courses',
  templateUrl: 'lst-courses.html',
})
export class LstCoursesPage {

  private courses;

  constructor(public navCtrl: NavController, public navParams: NavParams, public coursesProvider : CoursesProvider) {
    console.log("constr lstCourses");
    this.listerCourses();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LstCoursesPage');
  }

  listerCourses() {
    console.log("methode listerCourses");
    this.coursesProvider.listerCourses()
    .then(data => {
      this.courses = data;
      console.log(this.courses);
    });
  }

  consulterCourse(idCourse: number){
    this.navCtrl.push(ConsulterCoursePage, {idCourse: idCourse});
    console.log("methode consulterCourse("+idCourse+") revoi vers consulter-course");
  }

}
