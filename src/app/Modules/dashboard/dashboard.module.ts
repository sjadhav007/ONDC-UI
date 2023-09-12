import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { AddProductComponent } from 'src/app/components/dashboard/add-product/add-product.component';
import { MaterialModule } from '../material.module';
import { NotificationsComponent } from 'src/app/components/dashboard/notifications/notifications.component';


@NgModule({
  declarations: [
    DashboardComponent,  
    HeaderComponent,
    AddProductComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
