import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
