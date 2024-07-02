import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../utility/localStorage.js";
import '../BookDetails/BookDetails.css'
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaPagerSolid } from "react-icons/lia";
import { IoIosArrowDropdownCircle } from "react-icons/io";




const BookList = () => {
    const books = useLoaderData();

    const [sortBooks, setSortBooks] = useState([]);

    const [booksRead, setBooksRead] = useState([]);

    const handleBookFilter = filter => {

        if (filter === 'All') {

            setSortBooks(booksRead);
        } else if (filter === 'Science Fiction') {

            const filteredBooks = booksRead.filter(book => book.category === 'Science Fiction');
            setSortBooks(filteredBooks);
        }
        else if (filter === 'Romance') {

            const filteredBooks = booksRead.filter(book => book.category === 'Romance');
            setSortBooks(filteredBooks);
        }
        else if (filter === 'Fiction') {
            const filteredBooks = booksRead.filter(book => book.category === 'Fiction');
            setSortBooks(filteredBooks);
        }
    }




    useEffect(() => {
        const storedBookBookIds = getStoredBooks();
        if (books.length > 0) {


            const readBooks = [];
            for (const id of storedBookBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    readBooks.push(book);
                }
            }

            setBooksRead(readBooks);
            setSortBooks(readBooks);

        }
    }, [])
    return (
        <div>




            <div className="flex justify-center">
                {/* dropdown */}
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white font-bold">Sort By Category <IoIosArrowDropdownCircle /> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBookFilter('All')}><a>All</a></li>
                        <li onClick={() => handleBookFilter('Science Fiction')}><a>Science Fiction</a></li>
                        <li onClick={() => handleBookFilter('Romance')}><a>Romance</a></li>
                        <li onClick={() => handleBookFilter('Fiction')}><a>Fiction</a></li>
                        <li onClick={() => handleBookFilter('Magical Realism')}><a>Magical Realism</a></li>
                        <li onClick={() => handleBookFilter('Fantasy')}><a>Fantasy</a></li>

                    </ul>
                </details>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    sortBooks.map(book => <div key={book.bookId}>
                        <div className="flex gap-2 p-2 border-solid-2 border-2">
                            <div>
                                <figure>
                                    <img src={book.image} alt={book.bookName} />
                                </figure>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl">{book.bookName}</h1>
                                <h1 className="my-3">By: {book.author}</h1>
                                <div className="flex my-3">
                                    <h1 className=""> Tag:
                                        {
                                            book.tags.map(tag => <span key={tag} className="bookListTag">#{tag} </span>)
                                        }
                                    </h1>
                                    <h1 className="flex items-center gap-2">
                                        <CiLocationOn /> Year of Publishing: {book.yearOfPublishing}
                                    </h1>
                                </div>
                                <div className="flex gap-5 my-3">
                                    <h1 className="flex items-center gap-2"><IoPeopleOutline /> Publisher: {book.publisher}</h1>
                                    <h1 className="flex items-center gap-2"><LiaPagerSolid />Pages: {book.totalPages} </h1>
                                </div>
                                <hr className="my-3" />
                                <div className="flex gap-5">
                                    <div className="bg-[#328EFF26] rounded-full p-2 font-bold">
                                        <h1 className="text-[#328EFF]">Category: {book.category}</h1>
                                    </div>
                                    <div className="bg-[#FFAC3326] rounded-full p-2 font-bold">
                                        <h1 className="text-[#FFAC33]">Rating: {book.rating}</h1>
                                    </div>
                                    <div className="bg-[#23BE0A] rounded-full p-2 text-white font-bold">
                                        <Link >View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)



                    // <div key={book.bookId} className="card card-compact bg-base-100 shadow-xl">
                    //     <figure><img src={book.image} alt="Shoes" /></figure>
                    //     <div className="card-body">
                    //         <h2 className="card-title">{book.title}</h2>
                    //         <p>{book.description}</p>
                    //         <div className="card-actions justify-end">)
                }

            </div>


        </div>
    );
};

export default BookList;