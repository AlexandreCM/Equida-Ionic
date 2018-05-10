import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';
import { LstCoursesChevalPage } from '../lst-courses-cheval/lst-courses-cheval';

/**
 * Generated class for the ConsulterChevalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulter-cheval',
  templateUrl: 'consulter-cheval.html',
})

export class ConsulterChevalPage {

  private chevaux;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chevauxProvider: ChevauxProvider) {

    console.log("constr consulterCheval");
    let idCheval = this.navParams.get("idCheval");
    console.log("idCheval : " + idCheval);
    this.consulterCheval(idCheval);

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ConsulterChevalPage');
  }

  consulterCheval(idCheval: number) {
        console.log("methode consulterCheval("+idCheval+")");
        this.chevauxProvider.consulterCheval(idCheval)
        .then(data => {
            this.chevaux = data;
            console.log(data);
        });
        console.log("fin methode consulterCheval(idCheval) appelant chevauxProvider");
  }

  getLesCoursesCheval(idCheval: number){
    this.navCtrl.push(LstCoursesChevalPage, {idCheval: idCheval});
    console.log("methode getLesCoursesCheval("+idCheval+") dans controlleur consulterCheval");
  }

}
