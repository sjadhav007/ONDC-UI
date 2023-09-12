import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// debugger
const routes: Routes = [

  { path: 'user', loadChildren: () => import('./Modules/user/user.module').then(m =>m.UserModule) },
  {
    path: 'dashboard', loadChildren: () => import('./Modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
