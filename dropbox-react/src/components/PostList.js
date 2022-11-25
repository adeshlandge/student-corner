//It receives the blogs from the Home component and displays them.
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { useState } from 'react';

const PostList = ({ blogs, title }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/posts/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p><b>Posted by : {blog.author}</b></p>
                    </Link>
                    <div>
                        <button onClick={() => setCount(count + 1)}>
                            <FaThumbsUp />
                        </button> &nbsp;
                        {count}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostList;