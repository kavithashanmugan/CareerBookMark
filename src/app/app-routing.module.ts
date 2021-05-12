import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [{path:'create-profile',component:CreateProfileComponent},
{path:'jobs',component:JobsComponent},
{path:'**',component:HomePageComponent},
{path:'portfolio',component:PortfolioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
