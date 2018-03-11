import { Component, OnInit } from '@angular/core';

import { BackendAccessService } from './../../services/backend-access.service';
import { ErrorMessagesService } from './../../../shared/services/errorMessages.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public notifier = "";


  constructor(private service : BackendAccessService, private messages : ErrorMessagesService) { }

  ngOnInit() {

  }

  /************************Validate credentials ******************************************/
  /*
	* @params { String } surname  the surname from the form
	* @params { String } name  the name from the form
	* @params { String } email  the email from the form
	* @params { String } password  the password from the form
	* @params { Boolean } conditions  the conditions checkbox from the form
	*/
  validateCredentials(surname, name, email, password,  conditions){
  	var that = this;
  	let back = true;
  
  	if (!conditions) {
				this.notifier = this.messages.factory.conditionsErrorFromRegister;
				back = false;
  	} 

  	if( password.length <= 1 ){
				this.notifier = this.messages.factory.passwordErrorFromRegister;
				back = false;

  	}
  	if(this.ValidateEmail(email)){

	  	this.service.functions["email"](null, 'email='+email).then((data) => {
	  		if (data.status == that.service.status.success) {
					this.notifier = this.messages.factory.emailErrorFromRegister;
					back = false;
				}
	  	});
  	}else{
					this.notifier = this.messages.factory.incorectEmailErrorFromRegister;
					back = false;
  	}
  	if(name.length <= 1){
				this.notifier = this.messages.factory.nameErrorFromRegister;
				back = false;
  	} 
  	

  	if(surname.length <= 1){
				this.notifier = this.messages.factory.surnameErrorFromRegister;
				back = false;

  	} 
  	return back;

  }

  /************************Finish with a step then continue **************************/
   /*
	* @params { String } surname  the surname from the form
	* @params { String } name  the name from the form
	* @params { String } email  the email from the form
	* @params { String } password  the password from the form
	* @params { Boolean } conditions  the conditions checkbox from the form
	*/

  nextStep(surname, name, email, password,  conditions){
  	if (this.validateCredentials(surname, name, email, password,  conditions)) {
  		alert("Right you can continue");
  		this.notifier = "";
  	}
  }

  /************************Email regex validator **************************/

  /*
	* @params { String } email  the email from the form
	*/
 ValidateEmail(mail) {
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
	  return true;
	  
	  return false;
	}
}
