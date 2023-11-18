import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FUNC_GET_USER } from '../../API/API_users';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { FUNC_DELETE_REVIEWS } from '../../API/API_reviews';

const FeedbackItem = (props) => {
    const user = useSelector(state=>state.user.user)
    const {_id, grade, review, userID, setSendReviews,sendReviews} = props
    const [userName, setUserName] = useState('')
    
    const handleDeleteReview = () =>{
      FUNC_DELETE_REVIEWS(alert, _id)
      setSendReviews(!sendReviews)
      setSendReviews(!sendReviews)
    }

    useEffect(()=>{
        FUNC_GET_USER(setUserName, userID)
    },[])

    return (
        <Card border="dark" className='m-2' style={{ width: '18rem' }}>
        <Card.Header>{userName}{userName=="admin" && "🛡️"}</Card.Header>
        <Card.Body>
          <Card.Title><Rating name="read-only" value={grade} readOnly /></Card.Title>
          <Card.Text>{review}</Card.Text>
        </Card.Body>
        {user.isAdmin && <Button onClick={handleDeleteReview} variant="secondary">Видалити комментар</Button>}
      </Card>
    );
};

export default FeedbackItem;