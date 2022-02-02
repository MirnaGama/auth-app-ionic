import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'specialists',
    loadChildren: () => import('./specialists/specialists.module').then( m => m.SpecialistsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
