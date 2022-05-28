import mail from "../img/mail.svg"

export default function InfoButton() {
    return (
        <a href="mailto:severyn.h@gmail.com">
            <img src={mail} alt="mail icon" />
            <span>Email</span>
        </a>
    )
}