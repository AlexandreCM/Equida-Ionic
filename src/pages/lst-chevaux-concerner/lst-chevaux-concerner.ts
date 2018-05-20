import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VentesProvider} from '../../providers/ventes/ventes';
import { ConsulterChevalPage } from '../consulter-cheval/consulter-cheval';

/**
 * Generated class for the LstChevauxConcernerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-chevaux-concerner',
  templateUrl: 'lst-chevaux-concerner.html',
})
export class LstChevauxConcernerPage {

    private chevaux;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ventesProvider: VentesProvider) {
      console.log("constr LstChevauxConcernerPage");
      let idVente = this.navParams.get("idVente");
      this.lstChevauxConcerner(idVente);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LstChevauxConcernerPage');
  }

  lstChevauxConcerner(idVente: number) {
    console.log("methode listerCheval");
    this.ventesProvider.lstChevauxConcerner(idVente)
    .then(data => {
      this.chevaux = data;
      console.log(this.chevaux);
    });
  }

  consulterCheval(idCheval: number){
    this.navCtrl.push(ConsulterChevalPage, {idCheval: idCheval});
    console.log("methode consulterCheval("+idCheval+") revoi vers consulter-cheval.ts");
  }

}
