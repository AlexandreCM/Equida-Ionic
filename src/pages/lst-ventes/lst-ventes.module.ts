import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LstVentesPage } from './lst-ventes';

@NgModule({
  declarations: [
    LstVentesPage,
  ],
  imports: [
    IonicPageModule.forChild(LstVentesPage),
  ],
})
export class LstVentesPageModule {}
