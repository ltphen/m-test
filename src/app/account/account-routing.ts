import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes : Routes = [
	{
		path : "account",
		component : HomeComponent,
		children : [
			{
				path : 'home',
				component : HomeComponent
			},
			{
				path : 'signIn',
				component : SignInComponent
			},

			{
				path : 'signUp',
				component : SignUpComponent
			},
			
			{
				path : 'forgotPassword',
				component : ForgotPasswordComponent
			}
		]
	},
	

];


