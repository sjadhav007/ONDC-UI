import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { AddProductComponent } from 'src/app/components/dashboard/add-product/add-product.component';
import { HomeComponent } from 'src/app/components/dashboard/home/home.component';
import { SidebarComponent } from 'src/app/components/dashboard/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'sidebar', component: SidebarComponent },
      { path: 'header', component: HeaderComponent },
      {path :'addProduct', component:AddProductComponent},
      {path: 'home', component:HomeComponent}
    ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
