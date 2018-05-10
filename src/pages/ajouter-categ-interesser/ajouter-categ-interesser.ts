import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategVente } from '../../model/categVente';
import { Client } from '../../model/client';
import { Interesser } from '../../model/interesser';
import { ClientsProvider} from '../../providers/clients/clients';

/**
 * Generated class for the AjouterCategInteresserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-categ-interesser',
  templateUrl: 'ajouter-categ-interesser.html',
})
export class AjouterCategInteresserPage {

    private lesCateg;
    public form                   : FormGroup;
    public isEdited               : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public toastCtrl: ToastController, public clientsProvider: ClientsProvider) {
      console.log("constr ajouterCategInteresser");

      // afficher la liste deroulante
      this.listerLesCategVentes();

      // Create form builder validation rules
      let idClient = this.navParams.get("idClient");
      this.form = fb.group({
       "categ_code": ["", Validators.required],
       "client_id": idClient
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterCategInteresserPage');
  }

  listerLesCategVentes() {
    console.log("methode listerLesCategVentes");

    this.clientsProvider.listerLesCategVentes()
    .then(data => {
      this.lesCateg = data;
    });
  }

  ajouterCategInteresser() : void
  {
      let categ_code: CategVente = this.form.controls["categ_code"].value,
      client_id: Client = this.form.controls["client_id"].value;

      let interesser : Interesser = new Interesser();
      interesser.interCateg = categ_code;
      interesser.interClient = client_id;
      console.log(interesser);

      if(!this.isEdited)
      {
          this.clientsProvider.ajouterCategInteresser(interesser);
          console.log('CREATE');
          this.sendNotification('Votre catégorie a été ajouté');

       }
      else
      {
          console.log('ERROR');
          //this.updateEntry(episode_id, title,director);
      }
  }

  sendNotification(msg: string): void {
      let notif = this.toastCtrl.create({
          message: msg,
          duration: 2000
      });
      notif.present();
  }

}
