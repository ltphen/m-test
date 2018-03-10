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

  public ErrorMessage = "";

  constructor(private service : BackendAccessService, private messages : ErrorMessagesService) { }

  ngOnInit() {
  }

  /**********************Login function ******************************************/

  public login(email, password){
	console.log(email, password);
	let that = this;
	this.service.functions["email"](null, 'email='+email).then( (data) => {
		if (data.data.status == that.service.status.success) {
			that.service.getAccountAction(data.data.data, 'login')({
				email : email,
				password : password
			}).then((student) => {
				if (student.data.status == that.service.status.success) {
					alert("Good log in");
				}else{
					this.ErrorMessage = this.messages.factory.loginError;
				}
			})
		} else{
			this.ErrorMessage = this.messages.factory.loginError;
		}
		
	})
  }
}
