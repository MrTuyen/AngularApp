import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PriceComponent } from './price/price.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{ path: 'forgot-password', component: ForgetPasswordComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, 
      children: [
		{ path: 'contact', component: ContactComponent },
		{ path: 'price', component: PriceComponent },
      ]
    },
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
