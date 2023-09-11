import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './Users/register-page/register-page.component';
import { LoginPageComponent } from './Users/login-page/login-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'register', component: RegisterPageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
