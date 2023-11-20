import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserBookList from './UserBookList'
import {FUNC_GET_FAVORITE} from '../../API/API_favorite'
import {FUNC_GET_RECOMMENDATIONS} from '../../API/API_recommendations'
import SnipperLoader from '../../components/snipperLoader/SnipperLoader';

const UserPage = () => {
    const user = useSelector(state=>state.user.user)   
    const [axiosFavoriteBooks, setAxiosFavoriteBooks] = useState([])
    const [favoriteBooks, setFavoriteBooks] = useState([])
    const [recommendationsBooks, setRecommendationsBooks] = useState([])
    const [REC_LIST, setREC_LIST] = useState([])
    const [load, setLoad] = useState(false)
    
    const makeUniq = (arr) => [...new Set(arr)];

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        return arr;
      }

    function getRandomWords(arr, n) {
        if(recommendationsBooks){
            const arrLength = arr.length;
            if (arrLength < n) {
            return arr.slice(0, arrLength);
            }
        
            shuffle(arr);
            return arr.slice(0, n);
        }
    }

    

    useEffect(()=>{
        FUNC_GET_FAVORITE(setAxiosFavoriteBooks, user._id)
        setTimeout(() => {
            setLoad(true)
        }, 3000);
    },[])

    useEffect(()=>{
        setFavoriteBooks([...axiosFavoriteBooks].map(book => book.bookID))
        FUNC_GET_RECOMMENDATIONS(setRecommendationsBooks, user._id)
    },[axiosFavoriteBooks])

    useEffect(()=>{
        if(recommendationsBooks.length) setREC_LIST(getRandomWords(makeUniq([...recommendationsBooks, ...favoriteBooks]), 8))
    },[recommendationsBooks])

    return (
        <div className='user-view'>
            <div className="container py-4">
                <h4>Користувач: {user.loginName}</h4>
                <div>
                    <h3>Рекомендації:</h3>
                    {!favoriteBooks.length && <p>Для отримання рекомендацій додайте щось до улюбленних або залишайте гарні відгуки</p>}
                    {recommendationsBooks.length && load ? <UserBookList books={REC_LIST}/> : <SnipperLoader />}  
                </div>
                <div>
                    <h3>Улюблені книги:</h3>
                    {favoriteBooks.length ? <UserBookList books={[...favoriteBooks]}/> : <SnipperLoader />}           
                </div>
                <div>
                    <h3>Історія перегляду:</h3>
                    {user.history.length ? <UserBookList books={[...user.history]}/> : <SnipperLoader />}
                </div>
            </div>
        </div>
    );
};

export default UserPage;