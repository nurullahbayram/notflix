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

  private generatedMovies = new BehaviorSubject({});

  public generatedMovies$ = this.generatedMovies.asObservable();



  constructor(private http: HttpClient ) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "/all");
  }

  // public getMovies(): Observable<Movie[]> {
  //   let dataSet: any;
  //   this.http.get<Movie[]>(this.url + "/all").subscribe( data => {
  //     // console.log(data);
  //   })
  //   return dataSet;
  // }

  public getMoviesById(id: number) {
    return this.http.get(this.url + "/all/" + id);
  }

  public getMoviesByGenre(genre: string) {
    let generatedMovies: any;
    this.getMovies().subscribe(data => {
      data.forEach(movie => {
        if(movie.genre === genre) {
          generatedMovies.push(movie); 
        }
      })
    })
    this.generatedMovies.next(generatedMovies);
    return this.generatedMovies;
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
}
