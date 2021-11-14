import { Component } from '@angular/core';

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


  movies = [
    {
      'title': 'Avengers',
      'release': '19.12.2001',
      'length': '164 Minutes',
      'regisseur': 'Peter Elcron',
      'rating': '5/5'
    },
    {
      'title': 'Dune',
      'release': '19.09.2021',
      'length': '155 Minutes',
      'regisseur': 'Denis Villeneuve',
      'rating': '5/5'
    }
  ]
  
  constructor()
  {
  
    if (localStorage.getItem('movies'))
    {
      this.movies = JSON.parse(localStorage.getItem('movies'));
    }

    
      console.log(this.movies.length);
    
  }

  change()
  {
    this.title = 'geändert';
  }

  add()
  {

    this.movies.push


    this.movies.push(
      {
      'title': this.movie.title,
      'release': this.movie.release,
      'length': this.movie.length,
      'regisseur': this.movie.regisseur,
      'rating': this.movie.rating
      }
      );

    this.movie.title = '';
    this.movie.release = '';
    this.movie.length = '';
    this.movie.regisseur = '';
    this.movie.rating = '';

    this.persist();
  }

  edit(movie)
  {
    this.movie = movie;
  }

  delete(movie)
  {
    this.movies.splice(this.movies.indexOf(movie), 1);
    this.persist();
  }

  persist()
  {
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
