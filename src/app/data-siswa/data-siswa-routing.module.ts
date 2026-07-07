import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSiswaPage } from './data-siswa.page';

const routes: Routes = [
  {
    path: '',
    component: DataSiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSiswaPageRoutingModule {}
