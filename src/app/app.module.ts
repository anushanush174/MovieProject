import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie-list/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { SearchComponent } from './search/search.component';
import { ShowModalComponent } from './show-modal/show-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchComponent,
    CreateMovieComponent,
    DeleteMovieComponent,
    UpdateMovieComponent,
    ShowModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
