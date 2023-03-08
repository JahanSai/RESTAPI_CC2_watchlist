import React, { Component } from 'react'
import MovieService from '../services/MovieService';
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            movie: '',
            description: '',
            platform: '',
            
        }
        this.changeMovieNameHandler = this.changeMovieNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateMovie = this.saveOrUpdateMovie.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            MovieService.getMovieById(this.state.id).then( (res) =>{
                let movies = res.data;
                this.setState({
                    id: movies.id,
                    movie: movies.movie,
                    description : movies.description,
                    platform : movies.platform
                });
            });
        }        
    }
    saveOrUpdateMovie = (e) => {
        e.preventDefault();
        let movies = {movie: this.state.movie, description: this.state.description, platform: this.state.platform};
        console.log('movies => ' + JSON.stringify(movies));

        // step 5
        if(this.state.id === '_add'){
            MovieService.createMovie(movies).then(res =>{
                this.props.history.push('/movies');
            });
        }else{
            MovieService.updateMovie(movies, this.state.id).then( res => {
                this.props.history.push('/movies');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center p-4 m-2 text-info">Add Movie</h3>
        }else{
            return <h3 className="text-center p-4 m-2 text-info">Update Movie</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Movie Name : </label>
                                            <input placeholder="Movie Name" name="movie" className="form-control" 
                                                value={this.state.movie} onChange={this.changeMovieNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description : </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Platform : </label>
                                            <input placeholder="Platform" name="platform" className="form-control" 
                                                value={this.state.platform} onChange={this.changePlatformHandler}/>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div> */}
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.saveOrUpdateMovie}><BsCheckCircleFill/> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><BsFillXCircleFill/> Cancel</button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Create;
