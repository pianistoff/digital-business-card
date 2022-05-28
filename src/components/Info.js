import InfoPhoto from "./InfoPhoto";
import InfoText from "./InfoText";
import InfoButtons from "./InfoButton";

export default function Info() {
    return (
        <div className="info">
            <InfoPhoto />
            <InfoText />
            <InfoButtons />
        </div>
    )
}