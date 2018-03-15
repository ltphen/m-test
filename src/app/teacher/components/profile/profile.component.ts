import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

import { BackendAccessService } from './../../services/backend-access.service';

import { AuthService } from './../../../shared/services/auth.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	// auth key for accessing other teacher profile

	private auth_other : string;

	// fake data while waiting for the backend data
	
	public publications = 
			[
					{ id :5,
						Enseignant:
						{
							id:"$lampynassteacher",
							nom:"Loading ...",
							prenom:"",
							access_token:"",
							photo:null,
							photo_small:"",
							photo_m:null,
							photosmall_m:null
						},					
						titre:"Loading ...",
						texte:"Loading ...",
						media:null,
						media_small:null,
						media_m:null,
						media_small_m:null,
						date_publier:"Loading ..."
					}
				
			];
	// url for accessing to images

	url = "http://vy-cam-men-spider1025scha.mendolearn.com/backend/web/uploads/";

	// profile data

	public profile = {
			id : "@@pynas1teacher1441239188",
			nom:"Loading ...",
			prenom:" ",
			email:"dddd",
			phone:null,
			username:"@@pynas1teacher",
			access_token:"mBix7IO_MFFlKutniELWLgBDeslPqRME",
			dateNaissance:"2015-11-11",
			photo:null,
			photo_small:"avatar_teacher/1375387520_small.jpg",
			photo_m:null,
			photo_small_m :null,
			epreuveFollow:"1",
			pedaFollow:"1",
			progFollow:"1",
			CoursFollow:"1",
			tdFollow:"1",
			fichePeda:"...",
			ficheProg:"...",
			cours:"...",
			td:"...",
			epreuves:"...",
			students:"...",
			collaborator:'... '
		}
	

  constructor(private route : ActivatedRoute, private service : BackendAccessService, private auth : AuthService) { }

  ngOnInit() {
  	this.init();
  }

  // Initialisation function . get all publications depending on the fact your are log or you are asking for someone else

  init(){
  	let that = this;
  	this.auth_other = this.route.snapshot.paramMap.get('auth_other');
  	console.log(this.auth_other);
  	if (this.auth_other == undefined  || this.auth_other == null || this.auth_other == this.auth.credentials().auth_key) {
  		this.service.functions['indexPublications']().then(function (data) {
				data = that.service.dataReceiver(data);
				if(data){
					that.publications = data.data;
					that.url = data.url;
				}
			})

			this.service.functions['getProfile']().then(function (data) {
				data = that.service.dataReceiver(data);
				if(data){
					that.profile = data.data;
				}

			})
  	}else{
  		let other = '&auth_other='+this.auth_other;
  		this.service.functions['indexPublications'](null, other).then(function (data) {
				data = that.service.dataReceiver(data);
				if(data){
					that.publications = data.data;
					that.url = data.url;
				}
			})
			this.service.functions['getProfile'](null, other).then(function (data) {
				data = that.service.dataReceiver(data);
				if(data){
					that.profile = data.data;
				}

			})
  	}
  }

}
