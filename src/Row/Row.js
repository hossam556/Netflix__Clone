import React , {useState,useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from '../axios';
import './Row.css';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row=({title , fetchUrl , isPoster})=> {
    const [movies , setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState('');

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        };
        fetchData();
    },[fetchUrl]);

    const handleClick =  (movie)=> {
         if(trailerUrl){
             setTrailerUrl('')
         }else{
             movieTrailer(movie?.name ||'').then(url=>{
                 const urlParams = new URLSearchParams(new URL(url).search);
                 setTrailerUrl(urlParams.get('v'));
             }).catch(error=>{
                 console.log(error)
             })
         }
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },} ;
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-imgs'>
             {movies.map(movie=>(
                 <img 
                 onClick={()=>handleClick(movie)}
                 className={`row-img ${isPoster && 'row-imgLarge'}`}
                 key={movie.id} 
                 src={isPoster ? `${base_url}${movie.poster_path}` : `${base_url}${movie.backdrop_path}`} 
                 alt={movie.name}/>
             ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row