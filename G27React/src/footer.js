import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className="footer">

            <p style={{
                textAlign: 'center',
                padding: '15px',
                color: "silver",
                fontFamily: 'Times New Roman',
                fontSize: 'large'
            }} >
                {t("footer")}
            </p>

            {/* Comment out the div below to remove language selectors from the footer */}
            <div className="languages">
                <a href="/?lng=es" className="spanish" >
                    <img src="../spain.png" style={{width: '25px'}} alt="spanish" />
                </a>
                <a href="/?lng=en" className="english">
                    <img src="../britain.png" style={{width: '25px'}} alt="english" />
                </a>
            </div>
        </div>
    );
}

export default Footer;