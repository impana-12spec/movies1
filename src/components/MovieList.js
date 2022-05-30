import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const MovieList=() =>{
    const {loading ,movies} = useGlobalContext();
    console.log(movies)
    if(loading){
        return(
            <h2 className='loading'>***loading***</h2>
        )
    }
  
    return (
        <div className='movie-list'>
        {movies.map((item, index)=>{
            const {Title:title, Year:year, imdbID:id, Poster:poster } = item
           
            return(
                <Link  to={`/movie/${id}`} key={id} className='movie' >
                    <article>
                        <img src={poster} alt={title} />
                        <div className="movie-info">
                            <h4 className='title'>{title}</h4>
                            <p>{year}</p>

                        </div>
                    </article>
                </Link>
               
            )
        })}
             
        </div>
    )
}

export default MovieList
