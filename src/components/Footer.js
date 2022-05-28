import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={twitter} alt="twitter icon" />
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={linkedin} alt="linkedin icon" />
            <img src={github} alt="github icon" />
        </footer>
    );
}
