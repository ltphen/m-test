import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { BackendAccessService } from './services/backend-access.service';

import { routes } from './account-routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
  	SignInComponent, 
  	SignUpComponent, 
  	HomeComponent, 
  	ForgotPasswordComponent
  ],
  providers : [
    BackendAccessService,
  ]
})
export class AccountModule { }
