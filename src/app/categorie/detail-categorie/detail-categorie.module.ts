import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCategoriePageRoutingModule } from './detail-categorie-routing.module';

import { DetailCategoriePage } from './detail-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCategoriePageRoutingModule
  ],
  declarations: [DetailCategoriePage]
})
export class DetailCategoriePageModule {}
