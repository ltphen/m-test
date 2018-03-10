import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthService } from './shared/services/auth.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* 
* @name AppComponent
* @role have to verify if you are login / if you have an account and send you to the appropriate room
*/
export class AppComponent {

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private auth : AuthService
  ){
  	this.init();

  }
  /************************Initial configuration and path redirecter ******************************************/

  private init () : void{
  	if (this.auth.isLogin()) {
  		let account = this.auth.accountType(this.auth.credentials().email);
  	 	this.router.navigate(['/s/home']);
  	}else{
  		this.router.navigate(['/account/home']);	
  	}
  }



}
