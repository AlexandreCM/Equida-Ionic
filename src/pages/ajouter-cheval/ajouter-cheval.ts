import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Cheval } from '../../model/cheval';
import { TypeCheval } from '../../model/typeCheval';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';

/**
 * Generated class for the AjouterChevalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-cheval',
  templateUrl: 'ajouter-cheval.html',
})
export class AjouterChevalPage {

  private types;
  public form                   : FormGroup;
  public isEdited               : boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public toastCtrl: ToastController, public chevauxProvider: ChevauxProvider) {
     // Create form builder validation rules
     this.listerLesTypesCheval();

     this.form = fb.group({
      "cheval_nom": ["", Validators.required],
      "cheval_sexe": ["", Validators.required],
      "cheval_prix": ["", Validators.required],
      "cheval_type": ["", Validators.required],
      "cheval_dateNaissance": ["", Validators.required]
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterChevalPage');
  }

  listerLesTypesCheval() {
    console.log("methode listerLesTypesCheval");

    this.chevauxProvider.getLesTypesCheval()
    .then(data => {
      this.types = data;
    });
  }

  ajouterCheval() : void
  {
      let cheval_nom : string  = this.form.controls["cheval_nom"].value,
      cheval_sexe : string  = this.form.controls["cheval_sexe"].value,
      cheval_prix : number = this.form.controls["cheval_prix"].value,
      cheval_type : TypeCheval = this.form.controls["cheval_type"].value,
      cheval_dateNaissance : Date = this.form.controls["cheval_dateNaissance"].value;

      let cheval : Cheval = new Cheval();

      cheval.nom = cheval_nom;
      cheval.sexe = cheval_sexe;
      cheval.prix = cheval_prix;
      cheval.type = cheval_type;
      cheval.dateNaissance = cheval_dateNaissance;
      console.log(cheval);

      if(!this.isEdited)
      {
          this.chevauxProvider.ajouterCheval(cheval);
          console.log('CREATE');
          this.sendNotification('Votre cheval est enregisté');

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
