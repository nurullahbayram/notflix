import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { TemplateNetflixComponent } from './template-netflix/template-netflix.component';
import { EachMovieComponent } from './each-movie/each-movie.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    AddMovieFormComponent,
    TemplateNetflixComponent,
    EachMovieComponent,
    AllMoviesComponent,
    MovieDetailComponent,
    VideoPlayerComponent,
    LoginComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }