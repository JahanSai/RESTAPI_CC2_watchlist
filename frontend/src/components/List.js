import React, { Component } from 'react'
import MovieService from '../services/MovieService';
import { BsFillTrashFill,BsPencilFill,BsFillEyeFill,BsFillPlusCircleFill } from "react-icons/bs";

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
                movies: []
        }
        this.addMovie = this.addMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
    }

    deleteMovie(id){
        MovieService.deleteMovie(id).then( res => {
            this.setState({movies: this.state.movies.filter(movies => movies.id !== id)});
        });
    }
    viewMovie(id){
        this.props.history.push(`/view/${id}`);
    }
    editMovie(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
        MovieService.getMovie().then((res) => {
            this.setState({ movies: res.data});
        });
    }

    addMovie(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
<div class="bg-image"
>
                <div className="title"><h1 className='name'>Movies Watchlist</h1></div>
                 <div className = "row mt-4">
                    <button className="btn btn-primary pt-2 pb-2 float-right" onClick={this.addMovie} id="butt"><BsFillPlusCircleFill/>  Add </button>
                 </div>
                 <br></br>
                 <div className = "card p-5 row cardshadow3">
                        <table className = "table table-bordered">

                            <thead>
                                <tr>
                                    <th className='text-center'>Movie Name</th>
                                    <th className='text-center'>Description</th>
                                    <th className='text-center'>Platform</th>
                                    <th className='text-center'> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.movies.map(
                                        movies => 
                                        <tr key = {movies.id}>
                                             <td className='text-center'>{movies.movie}</td>
                                             {/* <td> {movies.movie}</td>    */}
                                             <td> {movies.description}</td>
                                             <td> {movies.platform}</td>
                                             <td className='text-center'>
                                                 <button onClick={ () => this.viewMovie(movies.id)} className="btn-hover btn-hover-x color-1"><BsFillEyeFill/></button>
                                                 <button onClick={ () => this.editMovie(movies.id)} className="ml-2 btn-hover btn-hover-x color-7"><BsPencilFill/></button>
                                                 <button onClick={ () => this.deleteMovie(movies.id)} className="ml-2 btn-hover btn-hover-x color-11"><BsFillTrashFill/> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default List;
