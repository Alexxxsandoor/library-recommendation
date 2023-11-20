import UserBookItem from './UserBookItem'

const UserBookList = (props) => {
    const {books} = props
  
    return (
        <div className='d-flex flex-wrap'>
            {books.map(el=> <UserBookItem key={el + new Date()} bookId={el}/>)}
        </div>
    );
};

export default UserBookList;