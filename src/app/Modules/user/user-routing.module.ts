import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  // {
  //   path: '', component: UserComponent,
  //   children: [
  //       { path: 'signIn', component: SigninComponent },
  //       { path: 'login', component: LoginComponent },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
