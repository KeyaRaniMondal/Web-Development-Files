import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/AddtoDB";

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    console.log(Array.isArray(data))
    const book = data.find (book => book.bookId === parseInt(bookId))
    const { bookId: currentBook, image } = book;

    const handleMarkAsRead = (id) => {
        // 1.understand what to store or save:=>bookId
        // 2.where to store: database, we are using localstorege as DB
        // 3.we can store it as Array,list,HTMLAllCollection
        // 4.check:if the book is already in the readlist
        // 5.If not then add to the readlist
        // 6.If yes then don't add the book
        addToStoredReadList(id)

    }
    return (
        <div className="m-10">
            <h2 className="text-xl">This is book detail:{bookId}</h2>
            <img src={image} alt="" className="w-40 mb-5" />
            <button onClick={() => handleMarkAsRead(bookId)} class="btn btn-outline btn-info mr-5">Read</button>
            <button class="btn btn-active btn-accent">Wishlist</button>
        </div>
    )
}
export default BookDetail;


