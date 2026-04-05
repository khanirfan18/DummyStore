import React from "react"
import {Link, useParams, useNavigate} from "react-router-dom"

export default function ItemDetails(){

  const [detail, setDetails] = React.useState(null)
  const params = useParams()


  React.useEffect(()=>{
      fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
  },[params.id])

  const navigate = useNavigate()

  if(!detail){
      return (<h1>Loading...</h1>)
     }else{

     return( 
      <>
     <div className="product-details">
     <button className="back" onClick={()=>navigate(-1)}>Go Back</button>
      <div className="details-container">
        <img src={detail.thumbnail} alt={detail.title} />
        <div className="info">
          <h1>{detail.title}</h1>
          <p className="price">${detail.price}</p>
          <p className="desc">{detail.description}</p>
          <p className="stock">{detail.availabilityStatus}</p>
        </div>
    <section className="review-section">
      {detail.reviews.map((review, i) => (
        <div className="review-card" key={i}>
          <p className="review-name">{review.reviewerName}</p>
          <p className="review-rating">⭐ {review.rating}</p>
          <p className="review-text">{review.comment}</p>
        </div>
      ))}
    </section>
        </div></div>
        </>)
     }
  
}
