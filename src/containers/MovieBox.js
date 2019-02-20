import React, {Component, Fragment} from "react";

class MovieBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    const url = 'http://localhost:5000/api/movies';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      // data.feed.entry is the top 20 songs
      this.setState({movies: data})
    });
    request.send();
  }

  render() {
    console.log(this.state.movies);
    return(
      <Fragment>
        <h2>CodeClanFlix</h2>
      </Fragment>
    )
  }

}

export default MovieBox;
