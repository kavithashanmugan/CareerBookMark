import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyNetworkComponent } from './components/my-network/my-network.component';
import { UpskillComponent } from './components/upskill/upskill.component';
import { HiringHomeComponent } from './components/hiring-home/hiring-home.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{path:'create-profile',component:CreateProfileComponent},
{path:'jobs',component:JobsComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'sign-up',component:SignUpComponent},
{path:'home',component:HomeComponent},
{path:'network',component:MyNetworkComponent},
{path:'upskill',component:UpskillComponent},
{path:'hiring-home',component:HiringHomeComponent},
{path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
