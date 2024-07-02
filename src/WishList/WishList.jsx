import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../utility/localStorage.js";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaPagerSolid } from "react-icons/lia";
import { IoIosArrowDropdownCircle } from "react-icons/io";


const WishList = () => {
    const wishLists = useLoaderData();
    const [sortBooks, setSortBooks] = useState([]);
    const [listedWish, SetListedWish] = useState([]);
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
        const storedWishListIds = getStoredWishList();
        if (wishLists.length > 0) {
            const wishedBooks = [];
            for (const id of storedWishListIds) {
                const wishList = wishLists.find(wishlist => wishlist.bookId === id);
                if (wishList) {
                    wishedBooks.push(wishList);
                }
            }
            SetListedWish(wishedBooks);
            setSortBooks(wishedBooks);
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
                    sortBooks.map(wishList => <div key={wishList.bookId}>
                        <div className="flex gap-2 p-2 border-solid-2 border-2">
                            <div>
                                <figure>
                                    <img src={wishList.image} alt={wishList.bookName} />
                                </figure>
                            </div>
                            <div>
                                <h1 className="font-bold text-2xl">{wishList.bookName}</h1>
                                <h1 className="my-3">By: {wishList.author}</h1>
                                <div className="flex my-3">
                                    <h1> Tag:
                                        {
                                            wishList.tags.map(tag => <span key={tag} className="bookListTag">#{tag} </span>)
                                        }
                                    </h1>
                                    <h1 className="flex items-center gap-2">
                                        <CiLocationOn /> Year of Publishing: {wishList.yearOfPublishing}
                                    </h1>
                                </div>
                                <div className="flex gap-5 my-3">
                                    <h1 className="flex items-center gap-2"><IoPeopleOutline /> Publisher: {wishList.publisher}</h1>
                                    <h1 className="flex items-center gap-2"><LiaPagerSolid />Pages: {wishList.totalPages} </h1>
                                </div>
                                <hr />
                                <div className="flex gap-5 my-3">
                                    <div>
                                        <h1 className="bg-[#328EFF26] rounded-full p-2 font-bold text-[#328EFF]">Category: {wishList.category}</h1>
                                    </div>
                                    <div className="bg-[#FFAC3326] rounded-full p-2 font-bold text-[#FFAC33]">
                                        <h1>Rating: {wishList.rating}</h1>
                                    </div>
                                    <div className="bg-[#23BE0A] rounded-full p-2 text-white font-bold font-bold">
                                        <a href="">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)

                }

            </div>
        </div>
    );
};

export default WishList;

