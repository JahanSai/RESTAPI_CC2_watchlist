import React, { Component } from 'react'
import MovieService from '../services/MovieService';
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            movies: {}
        }
    }

    componentDidMount(){
        MovieService.getMovieById(this.state.id).then( res => {
            this.setState({movies: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 cardshadow3 mt-5">
                    <h3 className = "text-center mt-3 text-primary"> View  Details</h3>
                    <div className = "card-body">
                        <div className="row">
                                {/* <div className="col-5">
                                <img src={this.state.movies.img} className="profile-image-x ml-5" alt="dynamic" />
                                </div> */}
                                <div className="col-7">

                                        <div className = "row">
                                            <label>Movie Name : </label>
                                            <div className='ml-2'> { this.state.movies.movie }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Descrption : </label>
                                            <div className='ml-2'> { this.state.movies.description }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Platform : </label>
                                            <div className='ml-2'> { this.state.movies.platform }</div>
                                        </div>
                                </div>
                        </div>
 
                    </div>
                    
                    <Link to='/' className='btn btn-primary mt-2 mb-4'><BsFillArrowLeftCircleFill/> Back</Link>

                </div>
            </div>
        )
    }
}

export default View
