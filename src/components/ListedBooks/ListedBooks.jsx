import React, { useEffect, useState } from 'react';
import Book from '../Book/Book.jsx';

const ListedBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className='my-20'>
            <h1 className='text-center text-5xl font-bold'>Books</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;