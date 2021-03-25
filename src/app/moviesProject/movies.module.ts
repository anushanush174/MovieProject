import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponent } from './search/search.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { AuthService } from '../auth-service';
import { MovieStatusComponent } from './movie-status/movie-status.component';

@NgModule({
  declarations: [
    CreateMovieComponent,
    DeleteMovieComponent,
    MovieListComponent,
    SearchComponent,
    UpdateMovieComponent,
    MovieStatusComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    AuthService
  ]
})
export class MoviesModule { }
