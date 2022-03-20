import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
const BlogDetails = () => {

    const { id } =  useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })

        alert("Item successfully deleted!");
    }

    return (
        <div className="blog-details">
            {/* <h2>Blog details - { id } </h2> */}

            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>Written by { blog.author } </p>
                    <div> { blog.body } </div>
                    <button onClick={handleClick} ><img src='../trash.svg' style={{marginBottom: '-1.5vh', paddingBottom: "7px"}} /> Delete</button>
                    <Link to="/" className="btn">&lt; Back</Link>
                    <br></br>
                    <br></br>
                </article>
            ) }

        </div>
     );
}

export default BlogDetails;
