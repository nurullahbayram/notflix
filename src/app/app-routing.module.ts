import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TemplateNetflixComponent } from './template-netflix/template-netflix.component';
// import { LoginComponent } from './login/login.component';
import { BeterloginComponent } from './beterlogin/beterlogin.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllMoviesComponent },
  { path: 'all/:id', component: VideoPlayerComponent },
  {path: 'login', component: BeterloginComponent},
  {path: 'admin', component: AddMovieFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
