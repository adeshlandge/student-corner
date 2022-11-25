/*It is the homepage of 
our blog website and would show all the blogs in a list format. 
It does not contain the logic to display blogs in list format, but it calls the BlogList component 
and pass in the blogs to that component to display the blogs. 
The home component fetches the blogs using a useFetch custom hook we would create later.
*/
import PostList from './PostList';
import useFetch from './useFetch';
import PostsNavbar from './PostsNavbar';

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8080/listposts');
    console.log(data);
    return ( 
        <div>
        <PostsNavbar/>  <br/>      
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <PostList blogs={data} title="All Posts"/>
        </div>
        </div>
     );
}

export default Home;