import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from '../movie.model';
import { MovieService } from '../movie.service';
import {Observable, Subscription} from "rxjs";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnChanges, OnDestroy {
  selectedMovie: any;
  selectedId: number = 0;
  starRating =0;

  movie: Movie = {
    "id": 1,
    "name": "John Wick",
    "description": "Nice movie",
    "genre": "Action",
    "rating": 8,
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    "videoUrl": "https://www.youtube.com/embed/2AUmvWm5ZDQ"
  };
 
 
  @Input() movieId: number = 0;
  movies: Movie[] = [];
  rating: number = 0;
  latestMovie?: null | Movie;
  private movieSubscription?: Subscription;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  async onRatingClicked(value: number): Promise<void> {
    await this.rateMovie(value)
    await this.movieService.updateRate(this.movie)
    await console.log(this.movie.rating)
  }
//Observable<Product[]>
  ngOnInit(): void {
    // this.movieSubscription = this.movieService.getMovies().subscribe(
    //   {
    //     next: movies=> {
    //       this.movies= movies;
    //       console.log("MM: " + this.movies)

    //     },
    //   })

    this.selectedId = this.activatedRoute.snapshot.params['id'];      
    this.movieService.getMoviesById(this.selectedId).subscribe(response => this.selectedMovie = response);
    

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("iiii: " + this.movieId)
    this.movie = this.getMovieById(this.movieId)
    console.log(this.movie)
  }

  ngOnDestroy(): void {
    this.movieSubscription?.unsubscribe();
  }

  getMovieById(id: number) {
    console.log("getMovieID: " + id)

    let findedData = this.movies.find(i => i.id == id);
    if (typeof findedData === 'undefined') {
      console.log("hello")
      return this.movie;
    }
    console.log("find: " + findedData)
    return findedData;
  }

  rateMovie(value: number) {
    this.movie.rating = value;

  }
}