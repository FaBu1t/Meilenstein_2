import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  oldmovie={
    'title': '',
    'release': '',
    'length': '',
    'regisseur': '',
    'rating': ''
  };

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
      'rating': '1/5'
    },
    {
      'title': 'Der Schatzplanet',
      'date': '05.03.2002',
      'length': '95',
      'regisseur': 'Jon Clements',
      'rating': '5/5'
    },
    {
      'title': 'Pacific Rim',
      'date': '18.07.2021',
      'length': '131',
      'regisseur': 'Guillermo del Toro',
      'rating': '5/5'
    }
  ]

  allowChange: boolean =false;


  constructor() { 
    if (localStorage.getItem('persons'))
    {
      this.movieArray = JSON.parse(localStorage.getItem('persons'));
    }else{
      console.log(this.movieArray);
    }
  }


  add(movie)
  {
    this.movieArray.push({
      'title': movie.title,
      'release': movie.release,
      'length': movie.length,
      'regisseur': movie.regisseur,
      'rating': movie.rating
    });
    movie.title = '';
    movie.release = '';
    movie.length = '';
    movie.regisseur= '';
    movie.rating= '';
    this.persist();

    return movie;
  }

  change(movie){
    if(this.allowChange){
      this.delete(this.oldmovie);
      this.add(movie);
    }
    this.allowChange=false;
  }

  edit(movie)
  {
    this.oldmovie=movie;
    this.allowChange=true;
  }


  getMovies() {
    return this.movieArray;
  }

  delete(movie){
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
