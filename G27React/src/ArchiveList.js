import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ArchiveList = ( {archives, title} ) => {
    // const blogs = props.blogs; 
    // const title = props.title;
    const { t } = useTranslation();
    
    return ( 
        <div className="blog-list">

            { archives.map((archive) => (
                <div className="blog-preview" key={archive.id} >

                    <Link to= {`/blogs/${archive.id}`} >
                        <h2>{archive.title}</h2>
                        <p> {t("written_by")} {archive.author} </p>
                    </Link>

                </div>
            )) }

        </div>
     );
}
 
export default ArchiveList;