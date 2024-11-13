import { Link } from "react-router-dom";

const BOOk=({book})=>{
    const {bookId,bookName,image,author,tags,category}=book;
    return(
<Link to={`/books/${bookId}`}>
<div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className="py-8 bg-gray-200">
    <img
      src={image} className="h-[166px]" 
      alt="Shoes" />
  </figure>
  <div className="card-body">
        <div className="flex gap-3 justify-center ">
            {
                tags.map((tag,index)=><button  key={index} className="btn btn-xs bg-green-100 text-green-800">{tag}</button>)
            }
        </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>author: {author}</p>
    <div className="border-t-2 border-dashed"></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</Link>

    )
}
export default BOOk;