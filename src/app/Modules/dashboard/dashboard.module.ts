import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/components/dashboard/header/header.component';
import { MaterialModule } from '../material.module';
import { NotificationsComponent } from 'src/app/components/dashboard/notifications/notifications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from 'src/app/components/dashboard/add-product/add-product.component';


@NgModule({
  declarations: [
    DashboardComponent,  
    HeaderComponent,
    NotificationsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
