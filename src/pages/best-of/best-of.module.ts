import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestOfPage } from './best-of';

@NgModule({
  declarations: [
    BestOfPage,
  ],
  imports: [
    IonicPageModule.forChild(BestOfPage),
  ],
})
export class BestOfPageModule {}
