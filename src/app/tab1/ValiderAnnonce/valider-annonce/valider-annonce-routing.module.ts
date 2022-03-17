import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValiderAnnoncePage } from './valider-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: ValiderAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValiderAnnoncePageRoutingModule {}
