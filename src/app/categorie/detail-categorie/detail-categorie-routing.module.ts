import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCategoriePage } from './detail-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCategoriePageRoutingModule {}
