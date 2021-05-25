import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MyNetworkComponent } from './components/my-network/my-network.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { UpskillComponent } from './components/upskill/upskill.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminComponent,
    NotificationsComponent,
    PortfolioComponent,
    MyNetworkComponent,
    PostJobComponent,
    UserHomeComponent,
    AppHeaderComponent,
    CreateProfileComponent,
    AppFooterComponent,
    JobsComponent,
    SignUpComponent,
    UpskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
