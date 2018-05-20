import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interesser } from '../../model/interesser';

/*
  Generated class for the ClientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientsProvider {

    apiUrl = 'http://localhost/IONAC/restApi/index.php';

  constructor(public http: HttpClient) {
    console.log('Hello ClientsProvider Provider');
  }

  listerClients() {
      console.log("clientsProvider methode listerClients()");

      let key = "getLesClients",
      url = this.apiUrl+"?key="+key;

      return new Promise(resolve => {
          this.http.get(url).subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
  }

  consulterClient(idClient: number) {
    console.log("clientsProvider methode consulterClient("+idClient+")");

    let key = "getClient",
    url = this.apiUrl+"?key="+key+"&id="+idClient;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

  lstCategInteresser(idClient: number) {
    console.log("clientsProvider methode lstCategInteresser("+idClient+")");

    let key = "getCategClient",
    url = this.apiUrl+"?key="+key+"&id="+idClient;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

  listerLesCategVentes() {
      console.log("clientsProvider methode listerLesCategVentes()");

      let key = "getLesCategVentes",
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

  ajouterCategInteresser(interesser: Interesser) {
      console.log("clientsProvider methode ajouterCategInteresser(interesser: Interesser)");
      console.log(interesser);

      let key = "ajouterCategInteresser",
      headers : any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options : any = JSON.stringify(interesser),
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
