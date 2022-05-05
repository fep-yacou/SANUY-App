import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD
=======
import { Ng2OrderModule } from 'ng2-order-pipe';

>>>>>>> 41cd1a971dd1be31601845d296b83e1472dc2bfa
import { DetailCategoriePageRoutingModule } from './detail-categorie-routing.module';

import { DetailCategoriePage } from './detail-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    DetailCategoriePageRoutingModule
=======
    DetailCategoriePageRoutingModule,
    Ng2OrderModule
>>>>>>> 41cd1a971dd1be31601845d296b83e1472dc2bfa
  ],
  declarations: [DetailCategoriePage]
})
export class DetailCategoriePageModule {}
