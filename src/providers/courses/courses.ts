import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Course } from '../../model/course';

/*
  Generated class for the CoursesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoursesProvider {

  // private baseURI: string  = "http://localhost/IONAC/";
  apiUrl = 'http://localhost/IONAC/restApi/index.php';

  constructor(public http: HttpClient) {
    console.log('Hello CoursesProvider Provider');
  }

  listerCourses() {
      console.log("coursesProvider methode listerCourses()");

      let key = "getLesCourses",
      url = this.apiUrl+"?key="+key;
      
      return new Promise(resolve => {
          this.http.get(url).subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
  }

  consulterCourse(idCourse: number) {
    console.log("coursesProvider methode consulterCourse("+idCourse+")");

    let key = "getCourse",
    url = this.apiUrl+"?key="+key+"&id="+idCourse;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

}
