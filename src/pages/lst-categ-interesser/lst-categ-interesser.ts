import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VentesProvider} from '../../providers/ventes/ventes';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ventesProvider : VentesProvider) {
      console.log("constr lstCategClient");
      let idClient = this.navParams.get("idClient");
      console.log("idClient: " + idClient);
      this.lstCategInteresser(idClient);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LstCategInteresserPage');
  }

  lstCategInteresser(idClient: number) {
    console.log("methode lstCategInteresser("+idClient+")");
    this.ventesProvider.lstCategInteresser(idClient)
    .then(data => {
      this.lesCateg = data;
      console.log(this.lesCateg);
    });
  }

}
