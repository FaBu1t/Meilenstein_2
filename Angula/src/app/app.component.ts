import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moviedatabase';

  movie = {
    'title': '',
    'release': '',
    'length': '',
    'regisseur': '',
    'rating': ''
  };

  movieArray = []

  constructor(private dataService:DataService)
  {
    
  }

  ngOnInit(){
    this.getMovies();
  }


  getMovies(){
    this.movieArray=this.dataService.getMovies();
  }


  change()
  {
    this.dataService.change(this.movie);
  }

  add(movie)
  {
    this.movie=this.dataService.add(movie);
  }

  edit(movie)
  {
    this.dataService.edit(movie);
    this.movie = movie;
    
  }

  delete(movie)
  {
      this.dataService.delete(movie);
  }

  deleteLocalstorage(){
    this.dataService.deleteLocalstorage();
  }
}
