//It is the component that fetches a single blog and displays it on a separate page.
import { useParams, useNavigate  } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data, error, isPending } =  useFetch('http://localhost:8080/fetchPost/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8080/deletePost/'+ id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/posts'); //after delete navigate to showing all the posts.
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >                
                <h2>{data.title}</h2>
                <p>Written by {data.author}</p>
                <div>{data.body}</div>
                <img src={data.selectedFile}></img>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;