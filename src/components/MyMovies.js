
function MyMovies({likedMovies, reviews, setReviews, reviewsText, setReviewsText, setlikedMovies}){

 

 
    const handleSubmitReviews=(e)=>{
        e.preventDefault()
        setReviews(...reviews, reviewsText)
        // console.log(`My review for ${likedMovies.movieTitle}: ${reviewsText}`)
        // console.log(`likedMovies.movieID from MyMovies handleSubmitReviews: ${likedMovies.movieID}`)
        // console.log(`likedMovies.movieTitle from MyMovies handleSubmitReviews: ${likedMovies.movieTitle}`)
        // console.log(`reviewsText from MyMovies handleSubmitReviews: ${reviewsText}`)
        setReviewsText("")
        console.log(reviews)
    }



    const handleReviewsText=(e)=>{
        setReviewsText(e.target.value)
    }

    return (
        <div>
            <h1>MyMovies!</h1>

            <div>
                <h2>My Review for {likedMovies.movieTitle}</h2> 
                <form onSubmit={handleSubmitReviews}>
                    <textarea className="comment" onChange={handleReviewsText} value={reviewsText}></textarea>
                    <br/>
                    <input type="submit"></input>
                </form>
            </div>

            {/* <form> */}


            {/* <textarea name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea> */}
            {/* </form> */}
        </div>
    )
}   
export default MyMovies