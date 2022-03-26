import { Link } from "react-router-dom";

const ArchiveList = ( {archives, title} ) => {
    // const blogs = props.blogs; 
    // const title = props.title;
    
    return ( 
        <div className="blog-list">

            { archives.map((archive) => (
                <div className="blog-preview" key={archive.id} >

                    <Link to= {`/blogs/${archive.id}`} >
                        <h2>{archive.title}</h2>
                        <p> Written by {archive.author} </p>
                    </Link>

                </div>
            )) }

        </div>
     );
}
 
export default ArchiveList;