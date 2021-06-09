import { FirebaseService } from './services/firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HiringHomeComponent } from './components/hiring-home/hiring-home.component';
import { HiringHeaderComponent } from './components/hiring-header/hiring-header.component';
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './components/home/home.component';
import { ShortnamePipe } from './pipes/shortname.pipe';





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
    UpskillComponent,
    HiringHomeComponent,
    HiringHeaderComponent,
    HomeComponent,
    ShortnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBIqCDamgsiM3blOHr-0dSEEN46tsrnLFI",
      authDomain: "careerbookmark-315000.firebaseapp.com",
      projectId: "careerbookmark-315000",
      storageBucket: "careerbookmark-315000.appspot.com",
      messagingSenderId: "350001668933",
      appId: "1:350001668933:web:f2eccf5e9269c53005942c"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
