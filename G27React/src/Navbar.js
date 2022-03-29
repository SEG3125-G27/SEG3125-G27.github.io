import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation();
    return ( 
        <nav className="navbar">
            <h1>{t("title_bar")}</h1>
            <div className="links">
                <Link to="/"><img src='../home.svg' style={{marginBottom: '-0.5vh'}} /> {t("home")}</Link>
                <Link to="/archives"><img src='../archives.png' style={{marginBottom: '-0.5vh', width:'25px'}} /> {t("archives")}</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }} >{t("new_item")} <b style={{color: 'white'}} className='links'>+</b></Link>

                {/* <div className="container"> */}
                <a href="/?lng=es">
                    <img src='../spain.png' style={{marginBottom: '-0.5vh', width:'25px'}} />
                </a>
                <a href="/?lng=en">
                    <img src='../britain.png' style={{marginBottom: '-0.5vh', width:'25px'}} />
                </a>

                {/* </div> */}

                
            </div>
        </nav>
     );
}
 
export default Navbar;