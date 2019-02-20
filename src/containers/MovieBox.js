import React, {Component, Fragment} from "react";
import MovieList from "../components/MovieList";

class MovieBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    const url = 'http://localhost:5000/api/movies';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({movies: data})
    });
    request.send();
  }

  render() {
    console.log(this.state.movies);
    return(
      <Fragment>
        <h2>CodeClanFlix</h2>
        <MovieList movies={this.state.movies}/>
      </Fragment>
    )
  }

}

export default MovieBox;
