import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LireMessagePageRoutingModule } from './lire-message-routing.module';

import { LireMessagePage } from './lire-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LireMessagePageRoutingModule
  ],
  declarations: [LireMessagePage]
})
export class LireMessagePageModule {}
