import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from './movie.model';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService { 
  private url = 'http://localhost:8090/api/movie';
  // generatedMovies: Movie[]| undefined;

  private allMovies = new BehaviorSubject({});

  public allMovies$ = this.allMovies.asObservable();

  private genreMovies = new BehaviorSubject({});

  public genreMovies$ = this.genreMovies.asObservable();


  constructor(private http: HttpClient ) { }

  // public getMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.url + "/all");
  // }

  public getMovies(): Observable<Movie[]> {
    let data: any;
    this.http.get<Movie[]>(this.url + "/all").subscribe( res => {
      this.allMovies.next(res);
    })
    return data;
  }

  public getMoviesById(id: number) {
    return this.http.get(this.url + "/all/" + id);
  }

  public getMoviesByGenre(genre: string) {
    let allMoviesArray: any = [];
    let genreMoviesArray: any = [];
    // Keep the key in there, even though we don't use it.
    for (const [key, value] of Object.entries(this.allMovies.value)) {
      allMoviesArray.push(value);
    }
    allMoviesArray.forEach((movie: { genre: any; }) => {
      if (movie.genre === genre) {
        genreMoviesArray.push(movie);
      }
    });
    console.log(genreMoviesArray);
    this.genreMovies.next(genreMoviesArray);
  }

  public addMovies(movie: Movie) {
    const body = JSON.stringify(movie);
    console.log(body);
    return this.http.post(this.url + "/add", body);
  }
   public updateRate(movie: Movie) {
    this.http.put(this.url, movie).subscribe((data) => {
    })
  }
  // public findMovieByGenre(x: String) : Observable<Movie[]>  {
  //   // return this.getMovies().subscribe((data) => {
  //   //   console.log(data)
  //   //   data.forEach(movie=>movie.genre==x)
  //   // })
  //   return this.http.get<Movie[]>(this.url + "/all/"+x);
  // }
}