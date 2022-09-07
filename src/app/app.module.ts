import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SafePipe } from './safe.pipe';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { TemplateNetflixComponent } from './template-netflix/template-netflix.component';
import { EachMovieComponent } from './each-movie/each-movie.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    AddMovieFormComponent,
    TemplateNetflixComponent,
    EachMovieComponent,
    AllMoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }