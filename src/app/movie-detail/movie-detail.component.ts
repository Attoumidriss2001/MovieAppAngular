import { Component, OnInit } from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../services/movie/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie?: Movie;

  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieById();
  }

  getMovieById(){
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(id).subscribe(
      movie => this.movie = movie
    );
  }

}
