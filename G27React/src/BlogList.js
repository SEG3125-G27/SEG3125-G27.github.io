import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const BlogList = ( {blogs, title} ) => {
    // const blogs = props.blogs; 
    // const title = props.title;

    const { t } = useTranslation();
    
    return ( 
        <div className="blog-list">

            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >

                    <Link to= {`/blogs/${blog.id}`} >
                        <h2>{blog.title}</h2>
                        <p> {t("written_by")} {blog.author} </p>
                    </Link>

                </div>
            )) }

        </div>
     );
}
 
export default BlogList;