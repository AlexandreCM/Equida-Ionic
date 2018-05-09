import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LstClientsPage } from './lst-clients';

@NgModule({
  declarations: [
    LstClientsPage,
  ],
  imports: [
    IonicPageModule.forChild(LstClientsPage),
  ],
})
export class LstClientsPageModule {}
