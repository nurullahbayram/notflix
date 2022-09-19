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
  selectedmovies: any;
  subscription: any;

  constructor(private movieService: MovieService) {
  
  }

  ngOnInit(): void { 
    this.movieService.getMovies().subscribe((response) => { 
      this.movies = response; 
    });
    this.subscription = this.movieService.generatedMovies$.subscribe((res) => {
      console.log('Below the response of generatedmovies behaviorsubject')
      console.log(res);
      this.selectedmovies = res;
    })
  }

  getActionMovies() {
    this.selectedmovies = this.movieService.getMoviesByGenre('Action')
  }
}