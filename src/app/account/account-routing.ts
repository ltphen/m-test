import { Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes : Routes = [
		{
			path : 'account/home',
			component : HomeComponent,
			data: { animation: 'accountHome' }
		},
		{
			path : 'account/signIn',
			component : SignInComponent,
			data: { animation: 'accountLogin' }

		},

		{
			path : 'account/signUp',
			component : SignUpComponent,
			data: { animation: 'accountRegister' }

		},
		
		{
			path : 'account/forgotPassword',
			component : ForgotPasswordComponent,
			data: { animation: 'accountForgotpassword' }

		}
		
];


