import { useEffect, useState } from "react/cjs/react.development"


function Home({reviewsText}){

    const [reviewArray, setReviewArray]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/REVIEWS')
        .then(res => res.json())
        .then(reviewData => setReviewArray(reviewData))
    },[])

    



    return(
        <div>
            <h1>Home!</h1>
            <p style={{width:"500px", margin:"auto"}}>Here I can have some links to the Movies that I've rated and done reviews on. Listed alphabetically. Dated and <em>maybe</em> by the specific user.
            </p>
            {reviewArray.map((review)=>(
                <div key = {review.id}>
                    <h1 key = {review.title}><small>Title:</small> <b>{review.title}</b></h1>
                    <p key = {review.reviewText}><small>Review:</small> <b>{review.reviewText}</b></p>
                    <p key={review.rating}><small>Rating:</small> <b>{review.rating}</b></p>
                </div>
            ))}
            
            <div>{reviewsText}</div>
        </div>
    )
}
export default Home