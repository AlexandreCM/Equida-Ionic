import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsulterVentePage } from './consulter-vente';

@NgModule({
  declarations: [
    ConsulterVentePage,
  ],
  imports: [
    IonicPageModule.forChild(ConsulterVentePage),
  ],
})
export class ConsulterVentePageModule {}
