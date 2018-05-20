import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientsProvider} from '../../providers/clients/clients';
import { LstVentesCategPage } from '../lst-ventes-categ/lst-ventes-categ';

/**
 * Generated class for the LstCategInteresserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-categ-interesser',
  templateUrl: 'lst-categ-interesser.html',
})
export class LstCategInteresserPage {

    private lesCateg;

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientsProvider : ClientsProvider) {
      console.log("constr lstCategClient");
      let idClient = this.navParams.get("idClient");
      this.lstCategInteresser(idClient);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LstCategInteresserPage');
  }

  lstCategInteresser(idClient: number) {
    console.log("methode lstCategInteresser("+idClient+")");
    this.clientsProvider.lstCategInteresser(idClient)
    .then(data => {
      this.lesCateg = data;
      console.log(this.lesCateg);
    });
  }

  lstVentesCateg(idCateg: number) {
    this.navCtrl.push(LstVentesCategPage, {idCateg: idCateg});
    console.log("methode lstVentesCateg("+idCateg+") revoi vers lst-ventes-categ.ts");
  }

}
