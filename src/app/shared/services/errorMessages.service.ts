import { Injectable } from '@angular/core';
import { RequestService } from './request.service';


@Injectable()

 /*********************** Notification and error messages providers ****************************************/
export class ErrorMessagesService {

  public factory = {
    loginError : "Email ou Mot de passe incorrect",
    conditionsErrorFromRegister : "Veuillez accepter les conditions d'utilisations pour continuer",
    passwordErrorFromRegister : "Le mot de passe devra depassser au moins un caractere",
    surnameErrorFromRegister : "Veuillez entrer un prenom valide",
    nameErrorFromRegister : "Veuillez entrer un nom valide",
    emailErrorFromRegister : "Cette adresse email n'est pas disponible, veullez choisir un autre",
    incorectEmailErrorFromRegister : "Veuillez entrer une addresse email valide",
  } 
  
}
