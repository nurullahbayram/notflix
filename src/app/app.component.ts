import { Component } from '@angular/core';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies: any;

  constructor(private movieService: MovieService ) {}

  ngOnInit(): void {
      this.movieService.getMovies().subscribe((response) => { this.movies = response; });
  }

  // title = 'notflix';

  // movieList: Movie[] = [
  //   new Movie('https://www.youtube.com/embed/Ve31S_1CQ0s', 'title1', 'imageSrc1', 'description1', 'category1', 5),
  //   new Movie('url2', 'title2', 'imageSrc2', 'description2', 'category2', 4),
  //   new Movie('url3', 'title3', 'imageSrc3', 'description3', 'category3', 3)
  // ];
}