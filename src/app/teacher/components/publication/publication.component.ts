import { Component, OnInit } from '@angular/core';

import { BackendAccessService } from './../../services/backend-access.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

	publications = 
			[
				[
					{ id :5,
						Enseignant:
						{
							id:"$lampynassteacher",
							nom:"BOUBA",
							prenom:"JOLA",
							access_token:"",
							photo:null,
							photo_small:"",
							photo_m:null,
							photosmall_m:null
						},					
						titre:"Bonjour le monde",
						texte:"To day c'est la rentree",
						media:null,
						media_small:null,
						media_m:null,
						media_small_m:null,
						date_publier:"2017-06-01 05:13:18"
					}
				],
				[
					{id:20,
					Enseignant:
						{
							id:"@@pynas1teacher1441239188",
							nom:"djifo",
							prenom:"moi",
							access_token:"mBix7IO_MFFlKutniELWLgBDeslPqRME",
							photo:"avatar_teacher/1375387520.jpg",
							photo_small:"avatar_teacher/1375387520_small.jpg",
							photo_m:null,"photo_small_m":null
						},

						titre:"du nouveau",
						texte:"Un groupe educatif",
						media:null,
						media_small:null,
						media_m:null,
						media_small_m:null,
						date_publier:"2017-07-12 09:51:49"
					}
				]
			];

	url = "http://vy-cam-men-spider1025scha.mendolearn.com/backend/web/uploads/";

  constructor(private service : BackendAccessService) { }

  ngOnInit() {
  	this.init();
  }

   // Initialisation function . get all publications depending on the fact your are log or you are asking for someone else

  init(){
  	let that = this;
	this.service.functions['getPublications']().then(function (data) {
		data = that.service.dataReceiver(data);
		if(data){
			that.publications = data.data;
			that.url = data.url;
		}
	})
  	
  }

}
