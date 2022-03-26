import BlogList from "./BlogList";
import ArchiveList from "./ArchiveList";
import useFetch from "./useFetch";

const Archives = () => {
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const { data: archives, isPending2, error2 } = useFetch('http://localhost:8000/archives');

    return (
        <div className="home">

            {error2 && <div>{error2}</div>}
            {isPending2 && <div>Loading...</div>}
            {archives && <ArchiveList archives={archives} />}

        </div>
    );
}

export default Archives;