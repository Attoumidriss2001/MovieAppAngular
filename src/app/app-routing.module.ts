import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {path: "movies", component: MovieListComponent},
  {path: "detail/:id", component: MovieDetailComponent},
  {path: "", redirectTo:"movies", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
