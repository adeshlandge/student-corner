//This is where you would create new blogs and add them to the previous blogs list.
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FileBase from 'react-file-base64';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); //Adesh
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    //new code fr file
    const [selectedFile, setSelectedFile] = useState('');
    //const [isSelected, setIsSelected] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, selectedFile }; // 

        setIsPending(true);

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            navigate('/posts');
        })
    }

    return (
        <div>
            <nav className="navbar">
                <h1>Student Corner</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/posts">All Posts</Link>
                </div>
            </nav>
            <br />
            <div className="create">
                <h2>Add a New Post</h2>
                <form onSubmit={handleSubmit}>
                    <label>Post Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Post Body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <label>Post Author:</label>
                    <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <FileBase type="file" multiple={false} 
                    onDone={({ base64 }) => setSelectedFile( base64)} />
                 

                    {/* <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Tommy">Tommy</option>
                    <option value="Arthur">Arthur</option>
                    <option value="John">John</option>
                </select> */}
                    {!isPending && <button>Create Post</button>}
                    {isPending && <button disabled>Adding Blog</button>}
                </form>
            </div>
        </div>
    );
}

export default Create;