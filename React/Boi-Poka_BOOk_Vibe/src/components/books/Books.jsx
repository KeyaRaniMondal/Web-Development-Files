import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import BOOk from "../Book/Book";

const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('../booksData.json')
        .then(res=>res.json())
        .then(d=>setBooks(d))
        
    },[])
    return (
        <div className="mx-10">
            <h1>Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map(book=><BOOk book={book} key={book.bookId}></BOOk>)
                }
            </div>
        </div>
    )
}
export default Books;

// useState to store books
// useEffect
// fetch to load data
// set data to the books state