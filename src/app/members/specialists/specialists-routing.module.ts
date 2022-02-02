import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistsPage } from './specialists.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialistsPageRoutingModule {}
