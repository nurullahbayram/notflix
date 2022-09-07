import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie } from './movie.model';
import { catchError, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService { 
  private url = 'http://localhost:8090/api/movie';


  constructor(private http: HttpClient ) { }

  // public getMovies() {
  //   return this.http.get(this.url + "/all");
  // }
   public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "/all");}

  public getMoviesById(id: number) {
    return this.http.get(this.url + "/all/" + id);
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
