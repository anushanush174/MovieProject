import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginPageComponent } from './login/login-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

// localhost:4200/ -> movieListComponent
// localhost:4200/add-movie -> CreateMovieListComponent

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'add-movie', component: CreateMovieComponent, canActivate: [AuthGuard] },
  { path: 'edit-movie/:id', component: UpdateMovieComponent, canActivate: [AuthGuard] },
  { path: 'log-in', component: LoginPageComponent},
  { path: 'forgot-pass', component: ForgotPasswordComponent},
  { path: 'change-pass', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
