import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'data-siswa',
    loadChildren: () => import('./data-siswa/data-siswa.module').then( m => m.DataSiswaPageModule)
  },
  {
    path: 'admin-formulir',
    loadChildren: () => import('./admin-formulir/admin-formulir.module').then( m => m.AdminFormulirPageModule)
  },
  {
    path: 'statistik',
    loadChildren: () => import('./statistik/statistik.module').then( m => m.StatistikPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
