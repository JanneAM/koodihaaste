import './InfoViewer.css'

const InfoViewer = ({
    car,
    baseConsumption,
    distance,
    speed1,
    speed2,
    travelTimeDifference,
    consumptionDifference
}) => {
    return (
        <div>
            <p>Valittu auto: {car}</p>
            <p>Peruskulutus: {baseConsumption}</p>
            <p>Matka: {distance}</p>
            <p>Nopeus 1: {speed1}</p>
            <p>Nopeus 2: {speed2}</p>
            <p>Matka-ajan erotus: {travelTimeDifference}</p>
            <p>Polttoaineen kulutuksen erotus:{consumptionDifference}</p>
        </div>
    );
};

export default InfoViewer;