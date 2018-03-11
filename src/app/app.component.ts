import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {trigger, animate, style, query, transition} from '@angular/animations';

import { AuthService } from './shared/services/auth.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            opacity: 0,
            width : "100%",
            transform: 'translateX(-100%)'
          }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
            	opacity: 0,
            	width : "100%",
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
            	width : "100%",
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
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

  /************************state changer for page transition ******************************************/

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }



}
