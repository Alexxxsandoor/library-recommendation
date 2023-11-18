import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import FeedbackList from './FeedbackList';
import Button from 'react-bootstrap/Button';
import { FUNC_CREATE_REVIEWS } from '../../API/API_reviews';
import { useParams } from 'react-router-dom';

const Feedback = () => {
    const user = useSelector(state=>state.user.user)
    const { id } = useParams()
    const [valueStar, setValueStar] = useState(4);
    const [inputValue, setInputValue] = useState("");
    const [sendReviews, setSendReviews] = useState(false);

    const handleSendReviews = ()=>{
        FUNC_CREATE_REVIEWS(
            alert,
            {
                bookID: id,
                userID: user._id,
                review: inputValue,
                grade: valueStar
            }
        )
        setSendReviews(true)
        setInputValue("")
    }
    return (
        <div className='container'>
            {user.isLogin && 
            <>
                <Rating
                    name="simple-controlled"
                    value={valueStar}
                    onChange={(event, newValue) => {
                        setValueStar(newValue);
                    }}
                />
                <InputGroup className="mb-3">
                    <Form.Control
                    onChange={e=> setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder="Залишити відгук"
                    as="textarea"
                    type="text"
                    />
                </InputGroup>
                <Button onClick={handleSendReviews}>Залиши відгук</Button>
            </>
            }
            <FeedbackList sendReviews={sendReviews} setSendReviews={setSendReviews}/>

        </div>
    );
};

export default Feedback;