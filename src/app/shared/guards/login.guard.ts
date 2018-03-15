import { Injectable } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()

 /********************************* Authentification global guard ***************************************************************************/
export class LoginGuard implements CanActivate {

  
  constructor(private auth : AuthService, private route : Router) { }

 /********************************* To activate the right route ***************************************************************************/
 public canActivate(): boolean{
   if (!this.auth.isLogin()) {
     this.route.navigate(['account/home']);
     return false;
   }
   return true;
 }


  
}
