import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FUNC_GET_REVIEWS_BY_BOOK } from '../../API/API_reviews';
import FeedbackItem from './FeedbackItem'


const FeedbackList = (props) => {
    
    const {sendReviews,setSendReviews} = props
    const { id } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        setSendReviews(false)
        FUNC_GET_REVIEWS_BY_BOOK(setReviews, id)
    },[sendReviews])
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {reviews.length ? reviews.map(rev => <FeedbackItem key={rev._id} setSendReviews={setSendReviews} sendReviews={sendReviews} {...rev}/>) : <h5 className='mt-4'>Відгуків немає</h5>}
            
        </div>
    );
};

export default FeedbackList;