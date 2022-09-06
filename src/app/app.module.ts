import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { TemplateNetflixComponent } from './template-netflix/template-netflix.component';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    AddMovieFormComponent,
    TemplateNetflixComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }