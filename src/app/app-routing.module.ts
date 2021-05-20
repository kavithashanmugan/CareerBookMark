import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [{path:'create-profile',component:CreateProfileComponent},
{path:'jobs',component:JobsComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'sign-up',component:SignUpComponent},
{path:'home',component:HomePageComponent},
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
