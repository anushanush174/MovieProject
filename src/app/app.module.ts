import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowModalComponent } from './show-modal/show-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './moviesProject/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
