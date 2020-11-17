import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

// localhost:4200/ -> movieListComponent
// localhost:4200/add-movie -> CreateMovieListComponent

const routes: Routes = [
    {path: '', component: MovieListComponent},
    {path: 'add-movie', component: CreateMovieComponent},
    {path: 'edit-movie', component: UpdateMovieComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{

}
