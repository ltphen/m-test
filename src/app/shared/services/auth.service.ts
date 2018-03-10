import { Injectable } from '@angular/core';
import { RequestService } from './request.service';


@Injectable()

 /********************************* Authentification global detection ***************************************************************************/
export class AuthService {

  // backend access

  public RESSOURCE = "http://vy-cam-men-spider1025scha.mendolearn.com/frontend/web/index.php";
  
  // access token ... the default for initial request

  private AccessToken = "ZR32UPxRNYLAi3q0BqeY_Bp2Z3NpcezV";

  constructor(private request : RequestService) { }

 /********************************* To know if i'm login ***************************************************************************/
 public isLogin(){
   return localStorage.getItem("access-token") != null;
 }

 /********************************* To switch between different account ***************************************************************************/

 public accountType(email){
   return this.request.post(this.RESSOURCE +"/user/if-email-exist?access-token=" + this.AccessToken+"&email="+email, null);
 }

 /********************************* To get saved credentials ***************************************************************************/

  public credentials(){
    return {
      email : localStorage.getItem("email"),
      accessToken : localStorage.getItem("access-token")
    };
  } 

  
}
