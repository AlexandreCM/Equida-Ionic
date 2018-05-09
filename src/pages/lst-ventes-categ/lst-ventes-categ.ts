import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VentesProvider} from '../../providers/ventes/ventes';
import { ConsulterVentePage } from '../consulter-vente/consulter-vente';

/**
 * Generated class for the LstVentesCategPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-ventes-categ',
  templateUrl: 'lst-ventes-categ.html',
})
export class LstVentesCategPage {

    private ventes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ventesProvider : VentesProvider) {
      console.log("constr lstVentesCateg");
      let idCateg = this.navParams.get("idCateg");
      this.lstVentesCateg(idCateg);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LstVentesCategPage');
  }

  lstVentesCateg(idCateg: number) {
    console.log("methode lstVentesCateg("+idCateg+")");
    this.ventesProvider.lstVentesCateg(idCateg)
    .then(data => {
      this.ventes = data;
      console.log(this.ventes);
    });
  }

  consulterVente(idVente: number){
    this.navCtrl.push(ConsulterVentePage, {idVente: idVente});
    console.log("methode consulterVente("+idVente+") revoi vers consulter-vente");
  }

}
