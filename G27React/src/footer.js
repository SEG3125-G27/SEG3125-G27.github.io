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
        </div>
    );
}

export default Footer;