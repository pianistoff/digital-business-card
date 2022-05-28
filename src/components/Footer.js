import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={twitter} alt="twitter icon" className="social-link" />
            <img src={facebook} alt="facebook icon" className="social-link" />
            <img src={instagram} alt="instagram icon" className="social-link" />
            <img src={linkedin} alt="linkedin icon" className="social-link" />
            <img src={github} alt="github icon" className="social-link" />
        </footer>
    );
}
