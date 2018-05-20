import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VentesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VentesProvider {

    apiUrl = 'http://localhost/IONAC/restApi/index.php';

  constructor(public http: HttpClient) {
    console.log('Hello VentesProvider Provider');
  }

  listerVentes() {
      console.log("ventesProvider methode listerVentes()");

      let key = "getLesVentes",
      url = this.apiUrl+"?key="+key;

      return new Promise(resolve => {
          this.http.get(url).subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
  }

  consulterVente(idVente: number) {
    console.log("ventesProvider methode consulterVente("+idVente+")");

    let key = "getVente",
    url = this.apiUrl+"?key="+key+"&id="+idVente;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

  lstChevauxConcerner(idVente: number) {
    console.log("ventesProvider methode lstChevalConcerner("+idVente+")");

    let key = "getChevauxConcerner",
    url = this.apiUrl+"?key="+key+"&id="+idVente;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

  lstVentesCateg(idCateg: number) {
    console.log("ventesProvider methode lstVentesCateg("+idCateg+")");

    let key = "getVentesCateg",
    url = this.apiUrl+"?key="+key+"&id="+idCateg;

    return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
  }

}
