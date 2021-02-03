import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
     };



     handledelete = (movie) =>{
        const movies = this.state.movies.filter(m=> m._id !== movie._id);
        this.setState({movies});
     }


    render() { 
        if(this.state.movies.length === 0 ) return <div className="container mt-5"><p>There are no movies in the database.</p></div>
        return (
            
            <React.Fragment>
                <div className="container mt-5">
                <p>Showing {this.state.movies.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(movie =>(
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><button onClick={()=>this.handledelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
           
          );
    }
}
 
export default Movies;