import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movies: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void { this.movieService.getMovies().subscribe((response) => { this.movies = response; });}
}
