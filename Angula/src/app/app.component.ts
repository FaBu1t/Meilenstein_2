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


  sample_movie_one = {
    'title': 'Avengers',
    'release': '19.12.2001',
    'length': '164 Minutes',
    'regisseur': 'Peter Elcron',
    'rating': '5/5'
  }

  movieArray = [
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
    },
    {
      'title': 'Jupiter Ascendingengers',
      'date': '09.11.2015',
      'length': 'Zu Lang',
      'regisseur': 'Schlechter Film',
      'rating': '1'
    },
    {
      'title': 'Der Schatzplanet',
      'date': '05.03.2002',
      'length': '95',
      'regisseur': 'Jon Clements',
      'rating': '5'
    },
    {
      'title': 'Pacific Rim',
      'date': '18.07.2021',
      'length': '131',
      'regisseur': 'Guillermo del Toro',
      'rating': '5'
    }
  ]

  constructor()
  {
    if (localStorage.getItem('persons'))
    {
      this.movieArray = JSON.parse(localStorage.getItem('persons'));
    }else{
      console.log(this.movieArray);
    }
  }

  change()
  {
    
  }

  add()
  {
    this.movieArray.push({
      'title': this.movie.title,
      'release': this.movie.release,
      'length': this.movie.length,
      'regisseur': this.movie.regisseur,
      'rating': this.movie.rating
    });
    this.movie.title = '';
    this.movie.release = '';
    this.movie.length = '';
    this.movie.release= '';
    this.movie.release= '';
    this.persist();
  }

  edit(movie)
  {
    this.movie = movie;
  }

  delete(movie)
  {
    this.movieArray.splice(this.movieArray.indexOf(movie), 1);
    this.persist();
  }

  persist()
  {
    localStorage.setItem('persons', JSON.stringify(this.movieArray));
  }

  deleteLocalstorage(){
    localStorage.clear();
    location.reload();
  }
}
