import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>TODO List</h1>
            <div className="links">
                <Link to="/"><img src='../home.svg' style={{marginBottom: '-0.5vh'}} /> Home</Link>
                <Link to="/archives"><img src='../archives.png' style={{marginBottom: '-0.5vh', width:'25px'}} /> Archives</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }} >New Item <b style={{color: 'white'}} className='links'>+</b></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;