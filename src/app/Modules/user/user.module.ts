import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from 'src/app/components/users/register/register.component';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class UserModule { }
