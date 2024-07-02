import { useLoaderData, useParams } from "react-router-dom";
import './BookDetails.css'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks, saveWishList } from "../../utility/localStorage.js";

const BookDetails = () => {
    const book = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleBook = book.find(singleBook => singleBook.bookId === idInt);
    const handleRead = () => {
        saveReadBooks(idInt)
        toast("Book added to read list");
    }
    const handleWish = () => {
        saveWishList(idInt)
        toast("Book added to wish list");
    }


    return (
        <div className="grid md:grid-cols-4 gap-7 mt-20">
            <div className="col-span-2 flex items-center justify-center bg-[#1313130D]">
                <img className=" " src={singleBook.image} alt="" />
            </div>
            <div className="col-span-2">
                <h1 className="text-3xl font-bold">{singleBook.bookName}</h1>
                <hr className="my-3" />
                <h1> By: {singleBook.author}</h1>
                <hr className="my-3" />
                <h1>{singleBook.category}</h1>
                <hr className="my-3" />
                <h1> <span className="font-bold">Review:</span> {singleBook.review}</h1>
                <hr className="my-3" />
                <h1>{
                    singleBook.tags.map((tag, index) => (<span key={index} className="bookListTag"> #{tag} </span>))
                }</h1>
                <hr className="my-3" />
                <table>
                    <tbody>
                        <tr>
                            <td className="pr-20">Number of Pages</td>
                            <td className="font-bold">{singleBook.totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td className="font-bold">{singleBook.publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing</td>
                            <td className="font-bold">{singleBook.yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td className="font-bold">{singleBook.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex gap-3 my-3">
                    <button onClick={handleRead} className="btn btn-outline font-bold">Read</button>
                    <button onClick={handleWish} className="btn btn-info text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;