import styles from "./footer.module.css";
import logoLight from '~/../public/images/svg/academy-light.svg';
import logoDark from '~/../public/images/svg/academy-dark.svg';
import {Link} from "@remix-run/react";

interface HeaderProps {
    isDarkMode: boolean,
}

const Footer = ({isDarkMode}: HeaderProps) => {
    return (
        <footer className={`container ${styles.footer}`}>
            <div className={styles.copyright}>
                <Link to={'/'} className={'linkOpacity'}>
                    <img src={isDarkMode ? logoDark : logoLight} alt="logo"/>
                </Link>
                <p>Copyright &copy; Integral 2023 - Todos los derechos reservados</p>
                <div className={styles.socialNetworks}>
                    <Link className={'linkIcon linkOpacity'}
                          to={'https://www.facebook.com/AcademiaIntegral'}
                          target={'_blank'}>
                        <i className="fa-brands fa-facebook-f"/>
                    </Link>
                    <Link className={'linkIcon linkOpacity'}
                          to={'https://www.instagram.com/integralpre/'}
                          target={'_blank'}>
                        <i className="fa-brands fa-instagram"/>
                    </Link>
                    <Link className={'linkIcon linkOpacity'}
                          to={'https://www.tiktok.com/@academiaintegralhz'}
                          target={'_blank'}>
                        <i className="fa-brands fa-tiktok"/>
                    </Link>
                    {/*<Link className={'linkIcon linkOpacity'}*/}
                    {/*      to={'https://www.facebook.com/AcademiaIntegral'}*/}
                    {/*      target={'_blank'}>*/}
                    {/*    <i className="fa-brands fa-youtube"/>*/}
                    {/*</Link>*/}
                    <Link className={'linkIcon linkOpacity'}
                          to={'https://www.linkedin.com/company/academia-integralhz'}
                          target={'_blank'}>
                        <i className="fa-brands fa-linkedin-in"/>
                    </Link>
                    {/*<Link className={'linkIcon linkOpacity'}*/}
                    {/*      to={'https://www.facebook.com/AcademiaIntegral'}*/}
                    {/*      target={'_blank'}>*/}
                    {/*    <i className="fa-brands fa-x-twitter"/>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </footer>
    );
}
export default Footer;