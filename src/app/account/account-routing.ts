import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes : Routes = [
		{
			path : 'account/home',
			component : HomeComponent
		},
		{
			path : 'account/signIn',
			component : SignInComponent
		},

		{
			path : 'account/signUp',
			component : SignUpComponent
		},
		
		{
			path : 'account/forgotPassword',
			component : ForgotPasswordComponent
		}
		
];


