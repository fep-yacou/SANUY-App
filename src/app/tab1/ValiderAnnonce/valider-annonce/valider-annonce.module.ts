import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValiderAnnoncePageRoutingModule } from './valider-annonce-routing.module';

import { ValiderAnnoncePage } from './valider-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValiderAnnoncePageRoutingModule
  ],
  declarations: [ValiderAnnoncePage]
})
export class ValiderAnnoncePageModule {}
