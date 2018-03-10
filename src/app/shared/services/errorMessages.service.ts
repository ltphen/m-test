import { Injectable } from '@angular/core';
import { RequestService } from './request.service';


@Injectable()

 /********************************* Authentification global detection ***************************************************************************/
export class ErrorMessagesService {

  public factory = {
    loginError : "Email ou Mot de passe incorrect",

  } 
  
}
