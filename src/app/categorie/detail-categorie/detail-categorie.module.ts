import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { DetailCategoriePageRoutingModule } from './detail-categorie-routing.module';

import { DetailCategoriePage } from './detail-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCategoriePageRoutingModule,
    Ng2OrderModule
  ],
  declarations: [DetailCategoriePage]
})
export class DetailCategoriePageModule {}
