import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LstVentesCategPage } from './lst-ventes-categ';

@NgModule({
  declarations: [
    LstVentesCategPage,
  ],
  imports: [
    IonicPageModule.forChild(LstVentesCategPage),
  ],
})
export class LstVentesCategPageModule {}
