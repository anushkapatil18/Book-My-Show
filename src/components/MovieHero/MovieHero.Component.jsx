import React,{useState,useContext} from 'react';
import MovieInfo from './MovieInfo.Component';

//conetext
import {MovieContext} from '../../context/Movie.context';
import { generatePath } from 'react-router';

const MovieHero = () => {
    /*const [movie, setMovie] = useState({
        id: "awerf",
        original_title: 'Bell Bottom',
        overview: "2h 10m • Action, Thriller • UA • 19 Aug, 2021",
        backdrop_path: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg",
        poster_path: "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg",

    }); */

    const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(", ");

    return <>
         <div>
             {/*mobile & tablet*/}
             <div className="lg:hidden w-full">
                 <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='cover poster' className="m-4 rounded" style={{width: "calc(100% - 2rem)"}} />
             </div>
             <div className="flex flex-col gap-3 lg:hidden">
                 <div className="flex flex-col-reverse gap-3 px-4 my-3">
                     <div className="text-black flex flex-col gap-2 md:px-4">
                         <h4>27k ratings</h4>
                         <h4>English, Hindi, Marathi, Tamil, Telegu</h4>
                         <h4>{movie.runtime} mins • {genres} </h4>
                     </div>
                 </div>
                 <div className='flex items-center gap-3 md:px-4 md:w-screen text-xl px-4'>
                     <button className='bg-red-500 w-full py-3 text-white font-semibold rounded'>Rent ₹200.00</button>
                     <button className='bg-red-500 w-full py-3 text-white font-semibold rounded'>Buy ₹899.00</button>
                 </div>
             </div>
        
             {/*Large screen devices*/}
             <div className=' relative hidden w-full lg:block' style={{height: "30rem"}}>
                 <div className='absolute z-10 w-full h-full' style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",}}></div>
                 <div className='absolute z-30 left-24 top-10 flex items-center gap-10'>
                     <div className='w-64 h-96'>
                         <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='MOvie Poster' className='w-full h-full rounded-xl'/>
                     </div>
                     <div >
                         <MovieInfo movie={movie}/>
                     </div>
                 </div>
                 <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='Backdrop poster' className='w-full h-full rounded-xl'/>
             </div>
         </div>
    </>;
}

export default MovieHero;