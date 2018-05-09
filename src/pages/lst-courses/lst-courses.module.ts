import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LstCoursesPage } from './lst-courses';

@NgModule({
  declarations: [
    LstCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(LstCoursesPage),
  ],
})
export class LstCoursesPageModule {}
