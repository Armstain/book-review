import { Link } from 'react-router-dom';
import './book.css'
import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {



    const { image, bookName, author, category, tags, rating, bookId } = book;

    return (

        <div className="card w bg-base-100 border-solid-2 border-2 p-4">
            <Link to={`/book/${bookId}`}>
                <figure><img src={image} alt={bookName} /></figure>
                <div className="card-body">
                    <div className='h-20'>
                        <h1>
                            {
                                tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag} </span>
                                ))}
                        </h1>
                    </div>
                    <h2 className="card-title font-bold text-xl">
                        {bookName}
                    </h2>
                    <h1>By: {author}</h1>
                    <hr />
                    <div className="flex justify-between">
                        <h1>{category}</h1>
                        <h1 className='flex gap-1 items-center'>{rating}    <CiStar /></h1>
                    </div>

                </div>
            </Link>

        </div>
    );
};

export default Book;