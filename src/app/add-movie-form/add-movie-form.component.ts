import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {

  form: FormGroup;

  movie: Movie = {
    "id": 1,
    "name": "John Wick",
    "description": "Nice movie",
    "genre": "Action",
    "rating": 8,
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
    "videoUrl": "https://www.youtube.com/embed/2AUmvWm5ZDQ"
  };;

  subscription: any;

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private movieService: MovieService,
    private router: Router) {
      this.form = this.fb.group({
        name: ['',[Validators.required]],
        description: ['',[Validators.required]],
        genre: ['',[Validators.required]],
        imageUrl: ['',[Validators.required]],
        videoUrl: ['',[Validators.required]]
      });    
  }

  submitForm(){
    var formData: any = new FormData();

    this.movie.id=0;
    this.movie.name=this.form.get('name')?.value;
    this.movie.description=this.form.get('description')?.value;
    this.movie.genre=this.form.get('genre')?.value;
    this.movie.rating=this.form.get('rating')?.value;
    this.movie.imageUrl=this.form.get('imageUrl')?.value;
    this.movie.videoUrl=this.form.get('videoUrl')?.value;

    console.log(this.movie);
    console.log(formData);
    this.http
      .post('http://localhost:8090/api/movie/add', this.movie)
      .subscribe({
        next: (response) => {
          alert('The movie is succesfully added!');
          console.log(response);
        },
        error: (error) => console.log(error),
      });
  }  
}