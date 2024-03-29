import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PriceComponent } from './price/price.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
	{ path: 'forgot-password', component: ForgetPasswordComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{
		path: '', component: HomeComponent,
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'user', component: UserComponent },
			{ path: 'price', component: PriceComponent },
			{ path: 'user-detail/:id', component: UserDetailComponent },
		]
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
