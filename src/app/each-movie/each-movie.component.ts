import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-each-movie',
  templateUrl: './each-movie.component.html',
  styleUrls: ['./each-movie.component.css']
})

export class EachMovieComponent implements OnInit {

  selectedName: string = '';
  selectedId: number = 0;
  selectedMovie: any;

  @Input() eachMovieInput: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService ) { }

  ngOnInit(): void {
    this.selectedId = this.activatedRoute.snapshot.params['id'];
    this.movieService.getMoviesById(this.selectedId).subscribe(response => this.selectedMovie = response);
    
  }
}