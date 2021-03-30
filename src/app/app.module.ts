import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { Test1Component } from './test/test1/test1.component';
import { Test2Component } from './test/test2/test2.component';
import { MyCurrencyPipe } from "./Pipe/MyCurrency.pipe";
import { MyCurrencyFormatterDirective } from './Directives/digitDecimalNumber.directive';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './service/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';

@NgModule({
  exports:[
    MyCurrencyPipe
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ContactComponent,
    PriceComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    DashboardComponent,
    Test1Component,
    Test2Component,
    MyCurrencyPipe,
    MyCurrencyFormatterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MyCurrencyPipe, MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
