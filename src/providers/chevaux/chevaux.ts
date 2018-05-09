// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cheval } from '../../model/cheval';
// import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ChevauxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChevauxProvider {

  // private baseURI: string  = "http://localhost/IONAC/gestionChevaux.php/";
  apiUrl = 'http://localhost/IONAC/restApi/index.php';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }


  listerChevaux() {
      console.log("coursesProvider methode listerChevaux()");

      let key = "getLesChevaux",
      url : any = this.apiUrl+"?key="+key;

      return new Promise(resolve => {
          this.http.get(url)
          .subscribe(data =>
          {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
  }

  consulterCheval(idCheval: number) {
    console.log("chevauxProvider methode consulterCheval("+idCheval+")");

    let key = "getCheval",
    url : any = this.apiUrl+"?key="+key+"&id="+idCheval;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

  getLesCoursesCheval(idCheval: number) {
    console.log("chevauxProvider methode consulterCheval("+idCheval+")");

    let key = "getLesCoursesCheval",
    url : any = this.apiUrl+"?key="+key+"&id="+idCheval;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

  getLesTypesCheval() {
      console.log("coursesProvider methode getLesTypesCheval()");

      let key = "getLesTypesCheval",
      url : any = this.apiUrl+"?key="+key;
      
      return new Promise(resolve => {
          this.http.get(url)
          .subscribe(data =>
          {
              resolve(data);
          }, err => {
              console.log("noooon !!");
              console.log(err);
          });
      });
  }

  ajouterCheval(cheval: Cheval) {
      console.log("chevauxProvider methode ajoutCheval(cheval: Cheval)");
      // console.log(cheval);

      let key = "ajouterCheval",
      headers : any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options : any = JSON.stringify(cheval),
      url : any = this.apiUrl+"?key="+key;

      return new Promise(resolve => {
          this.http.post(url, options, headers)
          .subscribe(data =>
          {
              console.log("Promise ouiiiiii");
              resolve(data);
          }, err => {
              console.log("Promise NNNOOOOOONNN !!! :'c");
              console.log(options);
              console.log(err);
          });
      });
  }

}
