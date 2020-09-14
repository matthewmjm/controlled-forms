import React from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import MovieForm from './Components/MovieForm';

class App extends React.Component {
  state = {
    movies: [
      {name: "The Matrix", image: 'https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL.jpg'},
      {name: "Air Bud", image: 'https://movieguide.b-cdn.net/wp-content/uploads/2014/05/hsuwcVNDjsjleHS3IOr0p3gn5oG-768x1152.jpg'},
      {name: "Blade", image: 'https://static.rogerebert.com/uploads/movie/movie_poster/blade-1998/widget_nAxQVrrFG5m9qzVYDXzOpz70Q2z.jpg'}
    ]
  }

  showMovies = () => this.state.movies.map(movie => {
    // return <MovieCard name={movie.name} image={movie.image}/>
    return <MovieCard {...movie} />
  })

  addMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Movie App</h1>
        <MovieForm addMovie={this.addMovie} />
        <ul>
          {this.showMovies()}
        </ul>
      </div>
    );
  }
}



export default App;
