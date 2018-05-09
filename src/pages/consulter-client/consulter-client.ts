import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientsProvider} from '../../providers/clients/clients';
import { LstCategInteresserPage } from '../lst-categ-interesser/lst-categ-interesser';

/**
 * Generated class for the ConsulterClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulter-client',
  templateUrl: 'consulter-client.html',
})
export class ConsulterClientPage {

    private clients;

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientsProvider: ClientsProvider) {
      console.log("constr consulterClient");
      let idClient = this.navParams.get("idClient");
      console.log("idClient : " + idClient);
      this.consulterClient(idClient);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsulterClientPage');
  }

  consulterClient(idClient: number) {
        console.log("methode consulterClient("+idClient+")");
        this.clientsProvider.consulterClient(idClient)
        .then(data => {
            this.clients = data;
            console.log(data);
        });
        console.log("fin methode consulterClient(idClient) appelant clientsProvider");
  }

  lstCategInteresser(idClient: number){
    this.navCtrl.push(LstCategInteresserPage, {idClient: idClient});
    console.log("methode lstCategInteresser("+idClient+") dans controlleur consulterClient");
  }

}
