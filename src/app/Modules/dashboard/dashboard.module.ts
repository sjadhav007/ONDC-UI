import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { AddProductComponent } from 'src/app/components/dashboard/add-product/add-product.component';


@NgModule({
  declarations: [
    DashboardComponent,  
    HeaderComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
