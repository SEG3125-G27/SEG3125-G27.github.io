import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';

const BlogDetails = () => {

    const alert = useAlert();
    const { id } =  useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })

        alert.success("Item successfully deleted");
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
                    <Link to="/" className="btn">&lt; Back</Link>
                    <button className = 'btn' onClick={handleClick} ><img src='../trash.svg' style={{marginBottom: '-1.5vh', paddingBottom: "8px"}} /> Delete</button>

                    <br></br>
                    <br></br>
                </article>
            ) }

        </div>
     );
}

export default BlogDetails;
