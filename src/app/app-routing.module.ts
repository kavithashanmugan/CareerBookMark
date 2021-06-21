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
import { HirerSignUpComponent } from './components/hirer-sign-up/hirer-sign-up.component';
import { CreateCompanyProfleComponent } from './components/create-company-profle/create-company-profle.component';
import { CompanyPortfolioComponent } from './components/company-portfolio/company-portfolio.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { ManageJobsComponent } from './components/manage-jobs/manage-jobs.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [{path:'create-profile/:userId',component:CreateProfileComponent},
{path:'jobs',component:JobsComponent},
{path:'portfolio/:userId',component:PortfolioComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'sign-up',component:SignUpComponent},
{path:'home',component:HomeComponent},
{path:'network',component:MyNetworkComponent},
{path:'upskill',component:UpskillComponent},
{path:'hirer-signup',component:HirerSignUpComponent},
{path:'hiring-home',component:HiringHomeComponent},
{path:'edit-profile/:userId',component:EditProfileComponent},
{path: '',   redirectTo: '/home', pathMatch: 'full' },
{path:'manage-jobs/:userId',component:ManageJobsComponent},
{path:'create-company-profile/:hirerId',component:CreateCompanyProfleComponent},
{path:'company-portfolio/:hirerId',component:CompanyPortfolioComponent},
{path:'post-job',component:PostJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
