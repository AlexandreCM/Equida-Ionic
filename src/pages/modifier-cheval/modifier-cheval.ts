import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Cheval } from '../../model/cheval';
import { TypeCheval } from '../../model/typeCheval';
import { ChevauxProvider} from '../../providers/chevaux/chevaux';

/**
 * Generated class for the ModifierChevalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-cheval',
  templateUrl: 'modifier-cheval.html',
})
export class ModifierChevalPage {

    private types;
    public form                   : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public toastCtrl: ToastController, public chevauxProvider: ChevauxProvider) {
      // Create form builder validation rules
      console.log("contr modifCheval");
      this.listerLesTypesCheval();
      let cheval = this.navParams.get("cheval");
      // console.log(cheval.id);

      this.form = fb.group({
       "cheval_id": [cheval.id],
       "cheval_nom": [cheval.nom, Validators.required],
       "cheval_sexe": [cheval.sexe, Validators.required],
       "cheval_prix": [cheval.prixDepart, Validators.required],
       "cheval_type": [cheval.idType, Validators.required],
       "cheval_dateNaissance": [cheval.dateNaissance, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierChevalPage');
  }

  listerLesTypesCheval() {
    console.log("methode listerLesTypesCheval");

    this.chevauxProvider.getLesTypesCheval()
    .then(data => {
      this.types = data;
    });
  }

  modifierCheval() : void
  {
      let cheval_id : number  = this.form.controls["cheval_id"].value,
      cheval_nom : string  = this.form.controls["cheval_nom"].value,
      cheval_sexe : string  = this.form.controls["cheval_sexe"].value,
      cheval_prix : number = this.form.controls["cheval_prix"].value,
      cheval_type : TypeCheval = this.form.controls["cheval_type"].value,
      cheval_dateNaissance : Date = this.form.controls["cheval_dateNaissance"].value;

      let cheval : Cheval = new Cheval();

      cheval.id = cheval_id;
      cheval.nom = cheval_nom;
      cheval.sexe = cheval_sexe;
      cheval.prix = cheval_prix;
      cheval.type = cheval_type;
      cheval.dateNaissance = cheval_dateNaissance;
      console.log(cheval);

      this.chevauxProvider.modifierCheval(cheval);
      console.log('Update');
      this.sendNotification('Votre cheval est modifié');


  }

  sendNotification(msg: string): void {
      let notif = this.toastCtrl.create({
          message: msg,
          duration: 2000
      });
      notif.present();
  }

}
