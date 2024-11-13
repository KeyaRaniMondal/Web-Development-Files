import { useLoaderData } from "react-router-dom";

const Details = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    return (
        <div>
            <h3>details about:{id}</h3>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
        </div>
    )
}
export default Details;