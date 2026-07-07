import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminFormulirPageRoutingModule } from './admin-formulir-routing.module';

import { AdminFormulirPage } from './admin-formulir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminFormulirPageRoutingModule
  ],
  declarations: [AdminFormulirPage]
})
export class AdminFormulirPageModule {}
