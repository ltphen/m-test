import { Component, OnInit, Input } from '@angular/core';

interface publication {
	title : string,
	image : string,
	content : string,
	time : string,
	poster_image : string,
	poster_name : string,
}



@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})

export class CardProfileComponent implements OnInit {

	@Input('publication') publication : publication;

  constructor() { }

  ngOnInit() {
  }

}
