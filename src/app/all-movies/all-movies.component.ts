import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

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
  subscriptions: any = [];
  genreMovie: string = '';

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getMovies();
    this.subscriptions.push(
      this.movieService.allMovies$.subscribe((res) => {
        this.movies = res;
      }),
      this.movieService.genreMovies$.subscribe((res) => {
        this.selectedmovies = res;
      })
    )
  }

  getGenre(genre: string) {
    this.genreMovie = genre;
    this.movieService.getMoviesByGenre(genre);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: any) => { sub.unsubscribe(); });
  }
}