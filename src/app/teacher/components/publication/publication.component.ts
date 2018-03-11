import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

	publications = [
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
