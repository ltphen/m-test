import { Component, OnInit } from '@angular/core';

import { BackendAccessService } from './../../services/backend-access.service';
import { ErrorMessagesService } from './../../../shared/services/errorMessages.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email = "test@test.com";

  public password = "test";

  public notifier = "";

  constructor(private service : BackendAccessService, private messages : ErrorMessagesService) { }

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
				that.service.getAccountAction(data.data, 'login')({
					email : email,
					password : password
				}).then((response) => {
					this.notifier = '';
					if (response.status == that.service.status.success) {
						alert("Good log in");
					}else{
						this.notifier = this.messages.factory.loginError;
					}
				})
			} else{
				this.notifier = this.messages.factory.loginError;
			}
			
		})
  }
}
