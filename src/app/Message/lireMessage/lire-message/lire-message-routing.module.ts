import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LireMessagePage } from './lire-message.page';

const routes: Routes = [
  {
    path: '',
    component: LireMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LireMessagePageRoutingModule {}
