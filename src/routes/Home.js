import React from "react";
import axios from "axios";
import Movies from "../components/Movie";
import "./Home.css";

/*class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>count => {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}*/

//https://yts-proxy.now.sh/list_movies.json?sort_by=rating

class Home extends React.Component {
  state = {
    isLoadings: true,
    movies: []
  };

  getMovie = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoadings: false });
  };
  componentDidMount() {
    this.getMovie();
  }

  render() {
    const { isLoadings, movies } = this.state;
    return (
      <section className="movieWrap">
        {isLoadings ? (
          <div className="loading">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movies
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                poster={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
