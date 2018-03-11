import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	// fake data while waiting for the backend data
	
	public publications = [
		{
			title : "Nous bureau des activités scolaires",
			image : "./../../../../assets/images/05.jpg",
			content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam labore,hic deserunt vero magni esse cumque quae.",
			time : "Sept 25",
			poster_image : "./../../../../assets/ow.jpg",
			poster_name : "Albert Einstein",
		},

		{
			title : "Un autre truc",
			image : "./../../../../assets/images/07.jpg",
			content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam labore,hic deserunt vero magni esse cumque quae.",
			time : "Sept 25",
			poster_image : "./../../../../assets/ow.jpg",
			poster_name : "Albert Einstein",
		},

		{
			title : "Ca semble cool",
			image : "./../../../../assets/images/06.jpg",
			content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam labore,hic deserunt vero magni esse cumque quae.",
			time : "Sept 25",
			poster_image : "./../../../../assets/ow.jpg",
			poster_name : "Albert Einstein",
		},

	]

  constructor() { }

  ngOnInit() {
  }

}
