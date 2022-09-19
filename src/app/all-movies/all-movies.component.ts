import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  allMoviesInput: any; 
  selectedMovies: any;
  movies: any;

  genre: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void { this.movieService.getMovies().subscribe((response) => { this.movies = response; });
  // console.log(this.movieService.findMovieByGenre('Action'))
  this.movieService.getMovies().subscribe((response) => { this.movies = response; });
}


  selectGenre(parameter: string) {
    console.log(parameter);
    this.genre = parameter;
  }
}


// <div *ngFor="let movie of movies">
//   <a [routerLink]="movie.id">
//     <img [src]="movie.imageUrl | safe" width="260" height="115">
//     <h3>{{movie.name}}</h3>
//   </a>
// </div>
