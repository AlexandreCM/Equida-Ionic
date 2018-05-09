import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';
import { ConsulterChevalPage } from '../consulter-cheval/consulter-cheval';
import { AjouterChevalPage } from '../ajouter-cheval/ajouter-cheval';
//import { Cheval } from '../../model/cheval';

/**
 * Generated class for the LstChevauxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-chevaux',
  templateUrl: 'lst-chevaux.html',
})
export class LstChevauxPage {

  private chevaux;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chevauxProvider: ChevauxProvider) {
    console.log("constr lstCheval");
    this.listerChevaux();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LstChevauxPage');
  }

  listerChevaux() {
    console.log("methode listerCheval");
    this.chevauxProvider.listerChevaux()
    .then(data => {
      this.chevaux = data;
      console.log(this.chevaux);
    });
  }

  consulterCheval(idCheval: number){
    this.navCtrl.push(ConsulterChevalPage, {idCheval: idCheval});
    console.log("methode consulterCheval("+idCheval+") revoi vers consulter-cheval.ts");
  }


  ajouterCheval(){
    this.navCtrl.push(AjouterChevalPage);
    console.log("methode ajouterCheval() dans lstCheval revoi vers ajouter-cheval.ts");
  }
}
