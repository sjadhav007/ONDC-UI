import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { RegisterComponent } from 'src/app/components/users/register/register.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
