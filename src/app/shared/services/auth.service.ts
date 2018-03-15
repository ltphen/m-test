import { Injectable } from '@angular/core';
import { RequestService } from './request.service';


@Injectable()

 /********************************* Authentification global detection ***************************************************************************/
export class AuthService {

  // backend access

  public RESSOURCE = "http://vy-cam-men-spider1025scha.mendolearn.com/frontend/web/index.php";
  
  // access token ... the default for initial request

  private AccessToken = "EtrYWRBY5OQDyeTgnaxct6_swqzmUyFo";

  constructor(private request : RequestService) { }

 /********************************* To know if i'm login ***************************************************************************/
 public isLogin(){
   return localStorage.getItem("loginData") != null;
 }

 /********************************* To switch between different account ***************************************************************************/

 public accountType(email){
   return this.request.post(this.RESSOURCE +"/user/if-email-exist?access-token=" + this.AccessToken+"&email="+email, null);
 }

 /********************************* To get saved credentials ***************************************************************************/

  public credentials(){
    return JSON.parse(localStorage.getItem('loginData'));
  } 

 /********************************* To save credentials ***************************************************************************/

  public saveCredentials(loginData){
    localStorage.setItem('loginData', JSON.stringify(loginData));
  } 

  
}
