import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackendAccessService } from './../../services/backend-access.service';
import { ErrorMessagesService } from './../../../shared/services/errorMessages.service';
import { AuthService } from './../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email = "test@test.com";

  public password = "test";

  public notifier = "";

  constructor(private service : BackendAccessService, private messages : ErrorMessagesService, private auth : AuthService, private route : Router) { }

  ngOnInit() {
  }

  /**********************Login function ******************************************/
  /*
	* @params { String } email  the email from the form
	* @params { String } password  the password from the form
	*/

  public login(email, password){
		console.log(email, password);
		this.notifier = 'loading';
		let that = this;
		this.service.functions["email"](null, 'email='+email).then( (data) => {
			if (data.status == that.service.status.success) {
				that.service.getAccountAction(data.data, 'login')("username="+ email+"&password="+ password ).then((response) => {
					this.notifier = '';
					if (response.status == that.service.status.success) {
						this.auth.saveCredentials(response);
						this.redirect(data.data);
					}else{
						this.notifier = this.messages.factory.loginError;
					}
				})
			} else{
				this.notifier = this.messages.factory.loginError;
			}
			
		})
  }
  

  /**********************Redicrecter function ******************************************/
  	/*
	* @params { String } accountType  the account type(student, teacher)
	*/
  // URGENT !!!!!!! remove static string after

  public redirect(accountType){
  	if (accountType == 'student') {
  		this.route.navigate(['/s/home']);
  	} else{
  		this.route.navigate(['/t/home']);
  	}
  }
}
