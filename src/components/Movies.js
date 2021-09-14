function Movies({movies}){

    function handleLike(e){
        console.log(`${e.title} was liked`)
    }

    return(
        <div >
            {movies.map(movie=> (
                <div key={movie.id} className="movie-div">
                    {movie.poster_path !== null? 
                    <div>
                        <img key={movie.poster_path} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="poster" alt={movie.title}/>
                    </div>:
                    <div className="container"> 
                        <img key={"no image"} src={`https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Halloween-PNG-Pictures/Black_Coffin_PNG_Clip_Art_Image.png?m=1507172109`} style={{width:"100px"}} alt={movie.title}/>
                    </div>
                    }
                    <button className="like-button" onClick={()=>handleLike(movie)}>Add  "<b><em>{movie.title}</em></b>"  to My Movies
                    </button>
                    <p key={movie.overview}>{movie.overview}</p>
                    <p key={movie.release_date} >Year Released: {movie.release_date.slice(0,4)} </p>
                    <p key={movie.vote_average}>Rating: {movie.vote_average}</p>
                </div>
            ))}
        </div>
    )
}
export default Movies