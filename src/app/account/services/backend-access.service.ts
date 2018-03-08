import { Injectable } from '@angular/core';
import { RequestService } from './../../shared/services/request.service';
@Injectable()
export class BackendAccessService {

	// url for the back end ressources 

	public RESSOURCESTEACHER = "http://vy-cam-men-spider1025scha.mendolearn.com/backend/web/index.php";
	
	public RESSOURCESTUDENT = "http://vy-cam-men-spider1025scha.mendolearn.com/frontend/web/index.php";
	
	// services URI 

	public account = {};

	//services functions 

	public functions = {};

	// routes for functions ... 

	public routes = {};

	// access token ... from backend

	private AccessToken = "ZR32UPxRNYLAi3q0BqeY_Bp2Z3NpcezV";

 /********************************* Back end access services for account ***************************************************************************/

  constructor(private request : RequestService) {
  	this.init();
  	this.generateFunctions();
  	this.routes["account"] = this.account;
	this.routes["functions"] = this.functions;
  }

 /********************************* Init services object ***************************************************************************/
  init(){

	  	this.account = {

	  		// account actions

	  		"student" : {
				"createStudentAccount" : this.RESSOURCESTUDENT +  "index.php/user/create?access-token=" + this.AccessToken,
				"loginStudent" : this.RESSOURCESTUDENT +  "index.php/user/login?access-token=" + this.AccessToken,
				"logoutStudent" : this.RESSOURCESTUDENT +  "index.php/user/logout?access-token=" + this.AccessToken,
			},
			"teacher" : {
				"createTeacherAccount" : this.RESSOURCESTUDENT +  "index.php/user/create?access-token=" + this.AccessToken,
				"loginTeacher" : this.RESSOURCESTUDENT +  "index.php/user/login?access-token=" + this.AccessToken,
				"logoutTeacher" : this.RESSOURCESTUDENT +  "index.php/user/logout?access-token=" + this.AccessToken,

			},
			"general" : {
				"email" : this.RESSOURCESTUDENT +"/user/if-email-exist?access-token=" + this.AccessToken,
			}


		}
  }

 /********************************* services generator / services factory ***************************************************************************/

  generateFunctions(){
  	var that = this;
  	for (let data in this.account) {
  		let modules = this.account[data];
  		for (let links in modules) {
  			let link = modules[links];

  			/*
  			* @params data Object the post data
  			* @params fn Function the callback function
  			* @params urlParams String the url add parameters
  			*/

  			this.functions[links] = function (data, urlParams) {
  				return new Promise(function (resolve, reject) {
  		
	  				link = (urlParams == undefined) ? link  : link + "?" + urlParams;

  					that.request.post(link, data).subscribe(function(result){
	  					resolve(result.json());
	  				})	
  				});
  				
  			}
  		}
  	}
  }


}
