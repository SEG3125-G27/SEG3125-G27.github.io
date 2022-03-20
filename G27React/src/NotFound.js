import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>OOPS! Seems you're in the wrong page...</h2> <br />
            <p>That page cannot be found</p> <br />
            <Link to="/" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    textDecoration: "none",
                    padding: "10px"
                }} >Back to the homepage...</Link>
                <br /> <br /><br />
        </div>
     );
}
 
export default NotFound;

