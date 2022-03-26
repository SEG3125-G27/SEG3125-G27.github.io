import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { t } from "i18next";

const BlogDetails = () => {

    const alert = useAlert();
    const { id } =  useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            fetch('http://localhost:8000/blogs/' + blog.id, {
                method: 'DELETE'
            }).then(() => {
                history.push('/');
            })
            alert.success("Item successfully deleted");
        }
    }

    return (
        <div className="blog-details">
            {/* <h2>Blog details - { id } </h2> */}

            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p>{t("written_by")} { blog.author } </p>
                    <div> { blog.body } </div>
                    <Link to="/" className="btn">&lt; {t("back")}</Link>
                    <button className = 'btn' onClick={handleClick} ><img src='../trash.svg' style={{marginBottom: '-1.5vh', paddingBottom: "8px"}} /> {t("delete")}</button>
                    <br></br>
                    <br></br>
                </article>
            ) }

        </div>
     );
}

export default BlogDetails;
