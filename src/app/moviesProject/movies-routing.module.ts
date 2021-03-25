import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard';
import { AppComponent } from './app/app.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { MovieStatusComponent } from './movie-status/movie-status.component';

// localhost:4200/ -> movieListComponent
// localhost:4200/create-movie -> CreateMovieListComponent

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', component: MovieListComponent },
    { path: 'create-movie', component: CreateMovieComponent, canActivate: [AuthGuard] },
    { path: 'update-movie/:id', component: UpdateMovieComponent, canActivate: [AuthGuard] },
    { path: 'movie-status', component: MovieStatusComponent},

    ]},
];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class MoviesRoutingModule { }
