import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';


const routes: Routes = [{path:'create-profile',component:CreateProfileComponent},
{path:'',component:UserHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
