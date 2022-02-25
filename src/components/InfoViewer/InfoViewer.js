import "./InfoViewer.css";

const InfoViewer = ({
  car,
  baseConsumption,
  consumptionOnSpeed1,
  consumptionOnSpeed2,
  totalConsumptionOnSpeed1,
  totalConsumptionOnSpeed2,
  travelTimeOnSpeed1,
  travelTimeOnSpeed2,
  travelTimeDifference,
  consumptionDifference,
}) => {
  return (
    <div className="info-viewer">
      <p>Valittu auto: <span className="result">{car}</span></p>
      <p>Peruskulutus: <span className="result">{baseConsumption} l/100km</span></p>
      <p>Kulutus nopeudella 1: <span className="result">{consumptionOnSpeed1} l/100km</span></p>
      <p>Kulutus nopeudella 2: <span className="result">{consumptionOnSpeed2} l/100km</span></p>
      <p>Kokonaiskulutus nopeudella 1: <span className="result">{totalConsumptionOnSpeed1} l</span></p>
      <p>Kokonaiskulutus nopeudella 2: <span className="result">{totalConsumptionOnSpeed2} l</span></p>
      <p>Polttoaineen kulutuksen erotus: <span className="result">{consumptionDifference} l/100km</span></p>
      <p>Matka-aika nopeudella 1: <span className="result">{travelTimeOnSpeed1} h</span></p>
      <p>Matka-aika nopeudella 2: <span className="result">{travelTimeOnSpeed2} h</span></p>
      <p>Matka-ajan erotus: <span className="result">{travelTimeDifference} h</span></p>
    </div>
  );
};

export default InfoViewer;
