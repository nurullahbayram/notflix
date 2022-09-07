import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { EachMovieComponent } from './each-movie/each-movie.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllMoviesComponent },
  { path: 'all/:id', component: VideoPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
