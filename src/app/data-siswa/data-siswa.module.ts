import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataSiswaPageRoutingModule } from './data-siswa-routing.module';

import { DataSiswaPage } from './data-siswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataSiswaPageRoutingModule
  ],
  declarations: [DataSiswaPage]
})
export class DataSiswaPageModule {}
