import mail from "../img/mail.svg";

export default function InfoButton() {
    return (
        <a href="mailto:severyn.h@gmail.com" className="email-button">
            <img src={mail} alt="mail icon" className="mail-icon" />
            <span className="button-text">Email</span>
        </a>
    );
}
