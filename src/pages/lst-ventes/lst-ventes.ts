import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VentesProvider} from '../../providers/ventes/ventes';
import { ConsulterVentePage } from '../consulter-vente/consulter-vente';

/**
 * Generated class for the LstVentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-ventes',
  templateUrl: 'lst-ventes.html',
})
export class LstVentesPage {

    private ventes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ventesProvider : VentesProvider) {
      console.log("constr lstVentes");
      this.listerVentes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LstVentesPage');
  }

  listerVentes() {
    console.log("methode listerVentes");
    this.ventesProvider.listerVentes()
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
