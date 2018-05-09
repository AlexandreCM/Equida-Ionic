import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
