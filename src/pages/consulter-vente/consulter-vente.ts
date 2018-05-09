import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VentesProvider} from '../../providers/ventes/ventes';
import { LstChevauxConcernerPage } from '../lst-chevaux-concerner/lst-chevaux-concerner';

/**
 * Generated class for the ConsulterVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulter-vente',
  templateUrl: 'consulter-vente.html',
})
export class ConsulterVentePage {

    private ventes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ventesProvider : VentesProvider) {
      console.log("constr consulterVente");
      let idVente = this.navParams.get("idVente");
      this.consulterVente(idVente);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsulterVentePage');
  }

  consulterVente(idVente: number) {
    console.log("debut methode consulterVente("+idVente+")");
        this.ventesProvider.consulterVente(idVente)
        .then(data => {
            this.ventes = data;
            console.log(data);
        });
        console.log("fin methode consulterVente(idVente) appelant ventesProvider");
  }

  lstChevauxConcerner(idVente: number){
    this.navCtrl.push(LstChevauxConcernerPage, {idVente: idVente});
    console.log("methode lstChevauxConcerner("+idVente+") dans controlleur consulterVente");
  }

}
