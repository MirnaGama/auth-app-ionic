import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialistsPageRoutingModule } from './specialists-routing.module';

import { SpecialistsPage } from './specialists.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialistsPageRoutingModule
  ],
  declarations: [SpecialistsPage, FooterPage]
})
export class SpecialistsPageModule {}
