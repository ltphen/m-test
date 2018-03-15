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

	private AccessTokenStudent = "EtrYWRBY5OQDyeTgnaxct6_swqzmUyFo";

	private AccessTokenTeacher = "ZR32UPxRNYLAi3q0BqeY_Bp2Z3NpcezV";

	// account type

	public accountType = {
		student : 'student',
		teacher : 'teacher'
	};

	// request status 

	public status = {
		success : 'success',
		error : 'error'
	};

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
				"registerStudent" : this.RESSOURCESTUDENT +  "/user/create?access-token=" + this.AccessTokenStudent,
				"loginStudent" : this.RESSOURCESTUDENT +  "/user/login?access-token=" + this.AccessTokenStudent,
				"logoutStudent" : this.RESSOURCESTUDENT +  "/user/logout?access-token=" + this.AccessTokenStudent,
			},
			"teacher" : {
				"registerTeacher" : this.RESSOURCESTEACHER +  "/user/create?access-token=" + this.AccessTokenTeacher,
				"loginTeacher" : this.RESSOURCESTEACHER +  "/user/login?access-token=" + this.AccessTokenTeacher,
				"logoutTeacher" : this.RESSOURCESTEACHER +  "/user/logout?access-token=" + this.AccessTokenTeacher,

			},
			"general" : {
				"email" : this.RESSOURCESTUDENT +"/user/if-email-exist?access-token=" + this.AccessTokenStudent,
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
  			* @params { Object }data  the post data
  			* @params { Function } fn  the callback function
  			* @params { String } urlParams  the url add parameters
  			*/

  			this.functions[links] = function (data, urlParams) {
  				return new Promise(function (resolve, reject) {
  		
	  				link = (urlParams == undefined) ? link  : link + "&" + urlParams;

  					that.request.post(link, data).subscribe(function(result){
	  					resolve(result);
	  				})	
  				});
  				
  			}
  		}
  	}
  }

 /********************************* Account type getter ***************************************************************************/
 /*
 * @params { String } accountType the account type ( teacher, student)
 * @params { String } action the action function to return ( login )
 */
 getAccountAction(accountType, action){
 	return this.functions[action + accountType.charAt(0).toUpperCase() + accountType.slice(1)]
 }

}
