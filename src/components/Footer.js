import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/severyn_h"><img src={twitter} alt="twitter icon" className="social-link" /></a>
            <a href="https://www.facebook.com/severyn.hundiak/"><img src={facebook} alt="facebook icon" className="social-link" /></a>
            <a href="https://www.instagram.com/severino_il_pianista/"><img src={instagram} alt="instagram icon" className="social-link" /></a>
            <a href="https://www.linkedin.com/in/severyn-hundiak-839b4421b/"><img src={linkedin} alt="linkedin icon" className="social-link" /></a>
            <a href="http://github.com/pianistoff/"><img src={github} alt="github icon" className="social-link" /></a>
        </footer>
    );
}
