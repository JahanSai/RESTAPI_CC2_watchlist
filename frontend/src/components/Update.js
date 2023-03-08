import React, { Component } from 'react'
import MovieService from '../services/MovieService';

class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            movie: '',
            description: '',
            platform: ''
        }
        this.changeMovieNameHandler = this.changeMovieNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
    }

    componentDidMount(){
        MovieService.getMovieById(this.state.id).then( (res) =>{
            let movie = res.data;
            this.setState({
                movie: movie.movie,
                description: movie.description,
                platform : movie.platform
            });
        });
    }

    updateMovie = (e) => {
        e.preventDefault();
        let list = {movie: this.state.movie, description: this.state.description, platform: this.state.platform};
        console.log('movie => ' + JSON.stringify(list));
        console.log('id => ' + JSON.stringify(this.state.id));
        MovieService.updateMovie(list, this.state.id).then( res => {
            this.props.history.push('/movies');
        });
    }
    
    changeMovieNameHandler= (event) => {
        this.setState({movie: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changePlatformHandler= (event) => {
        this.setState({platform: event.target.value});
    }
    // changeImgHandler= (event) => {
    //     this.setState({img: event.target.value});
    // }

    cancel(){
        this.props.history.push('/movies');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Movie Name: </label>
                                            <input placeholder="Movie Name" name="moviename" className="form-control" 
                                                value={this.state.movie} onChange={this.changeMovieNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Platform: </label>
                                            <input placeholder="Platform" name="platform" className="form-control" 
                                                value={this.state.platform} onChange={this.changePlatformHandler}/>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="Img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div> */}

                                        <button className="btn btn-success" onClick={this.updateMovie}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Update;
