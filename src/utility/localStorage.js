const getStoredBooks = () => {

    const storedBooks =localStorage.getItem('readBooks');
    if(storedBooks){
        return  JSON.parse(storedBooks);
    }
    return [];
}


    const saveReadBooks = id =>{
        const storedBooks = getStoredBooks();
        const exists = storedBooks.find(bookId => bookId === id);
        if(!exists){
            storedBooks.push(id);
            localStorage.setItem('readBooks', JSON.stringify(storedBooks));
        }
    }

const getStoredWishList = () => {
    const storedWishList =localStorage.getItem('wishList');
    if(storedWishList){
        return  JSON.parse(storedWishList);
}
    return [];
}

const saveWishList = wishId =>{
    const storedBooks = getStoredBooks();
    const existsInReadBooks = storedBooks.find(bookId => bookId === wishId);
    if(existsInReadBooks){
        alert("You already added this book to your read list.");
    }
    else{
    const storedWishList = getStoredWishList();
    const exist  = storedWishList.find(wishId =>BookId === wishId);
    if(!exist){
        storedWishList.push(wishId);
        localStorage.setItem('wishList', JSON.stringify(storedWishList));
    }
    }
    
}



export {saveReadBooks, getStoredBooks, saveWishList, getStoredWishList}