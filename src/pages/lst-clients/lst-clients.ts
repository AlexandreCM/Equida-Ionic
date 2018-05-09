import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientsProvider} from '../../providers/clients/clients';
import { ConsulterClientPage } from '../consulter-client/consulter-client';

/**
 * Generated class for the LstClientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lst-clients',
  templateUrl: 'lst-clients.html',
})
export class LstClientsPage {

    private clients

  constructor(public navCtrl: NavController, public navParams: NavParams, public clientsProvider : ClientsProvider) {
      console.log("constr lstClients");
      this.listerClients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LstClientsPage');
  }

  listerClients() {
    console.log("methode listerClients");
    this.clientsProvider.listerClients()
    .then(data => {
      this.clients = data;
      console.log(this.clients);
    });
  }

  consulterClient(idClient: number){
    this.navCtrl.push(ConsulterClientPage, {idClient: idClient});
    console.log("methode consulterClient("+idClient+") revoi vers consulter-client");
  }

}
