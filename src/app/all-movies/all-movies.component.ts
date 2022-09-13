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

  movies: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void { this.movieService.getMovies().subscribe((response) => { this.movies = response; });}
}


// <div *ngFor="let movie of movies">
//   <a [routerLink]="movie.id">
//     <img [src]="movie.imageUrl | safe" width="260" height="115">
//     <h3>{{movie.name}}</h3>
//   </a>
// </div>
