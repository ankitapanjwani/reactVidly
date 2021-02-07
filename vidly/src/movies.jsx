import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Like from  './like';
import Pagination from './pagination';
import {paginate} from './'
class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
     };

    handlePageChange = (page) =>{
        this.setState({ currentPage: page});
    };


     handledelete = (movie) =>{
        const movies = this.state.movies.filter(m=> m._id !== movie._id);
        this.setState({movies});
     }
     handleLike = (movie) =>{
        const movies = [...this.state.movies];
        //  console.log("like clicked...",movie);
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
     }

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage} = this.state;
        if(count === 0 ) return <div className="container mt-5"><p>There are no movies in the database.</p></div>

        


        return (
            
            <React.Fragment>
                <div className="container mt-5">
                <p>Showing {count} movies in the database.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Like</th>
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
                                    <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}></Like></td>
                                    <td><button onClick={()=>this.handledelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination itemsCount={count} 
                    pageSize={pageSize} 
                    currentPage={currentPage} 
                    onPagechange={this.handlePageChange}/>
                </div>
            </React.Fragment>
           
          );
    }
}
 
export default Movies;