import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import InfoViewer from "./components/InfoViewer/InfoViewer";
import { getDataFromArray } from "./functions/dataHandlers";
import { calculateTravelTimeForDistance, calculateDifferences, calculateConsumptionForSpeed } from "./functions/calculations";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  const [selectedCar, setSelectedCar] = useState("Auto A");
  const [baseConsumption, setBaseConsumption] = useState("");
  const [consumptionOnSpeed1, setConsumptionOnSpeed1] = useState("0");
  const [consumptionOnSpeed2, setConsumptionOnSpeed2] = useState("0");

  const [travelTimeOnSpeed1, setTravelTimeOnSpeed1] = useState("0");
  const [travelTimeOnSpeed2, setTravelTimeOnSpeed2] = useState("0");
  const [distance, setDistance] = useState("");
  const [distanceError, setDistanceError] = useState("");

  const [speed1, setSpeed1] = useState("");
  const [speed1Error, setSpeed1Error] = useState("");
  const [speed2, setSpeed2] = useState("");
  const [speed2Error, setSpeed2Error] = useState("");

  const cars = useMemo(
    () => [
      { name: "Auto A", consumption: 3 },
      { name: "Auto B", consumption: 3.5 },
      { name: "Auto C", consumption: 4 },
    ],
    []
  );

  const infoChangeHandler = useCallback(() => {
    setBaseConsumption(
      () => getDataFromArray(cars, selectedCar)[0].consumption
    );
  }, [cars, selectedCar]);

  useEffect(() => {
    if (selectedCar) {
      infoChangeHandler();
    }
  }, [selectedCar, infoChangeHandler]);

  const carChangeHandler = (e) => {
    const carName = e.target.value;
    setSelectedCar(() => carName);
  };

  const speed1InputChangeHandler = (e) => {
    const speed = e.target.value;
    setSpeed1(() => speed);
  };

  const speed2InputChangeHandler = (e) => {
    const speed = e.target.value;
    setSpeed2(() => speed);
  };

  const distanceInputHandler = (e) => {
    const speed = e.target.value;
    setDistance(() => speed);
  };

  const validateInputs = () => {
    let errorFound = false;
    if (speed1 && !isNaN(speed1)) {
      setSpeed1Error(() => "");
    } else {
      setSpeed1Error(() => "Syötä kenttään numeerinen arvo!");
      errorFound = true;
    }
    if (speed2 && !isNaN(speed2)) {
      setSpeed2Error(() => "");
    } else {
      setSpeed2Error(() => "Syötä kenttään numeerinen arvo!");
      errorFound = true;
    }
    if (distance && !isNaN(distance)) {
      setDistanceError(() => "");
    } else {
      setDistanceError(() => "Syötä kenttään numeerinen arvo!");
      errorFound = true;
    }
    if (!errorFound) {
      calculate();
    } else return;
  };

  const calculate = () => {

    setConsumptionOnSpeed1(() =>
      calculateConsumptionForSpeed(speed1, baseConsumption)
    );
    setConsumptionOnSpeed2(() =>
      calculateConsumptionForSpeed(speed2, baseConsumption)
    );
    
    setTravelTimeOnSpeed1(() => 
      calculateTravelTimeForDistance(distance, speed1)
    );

    setTravelTimeOnSpeed2(() => 
      calculateTravelTimeForDistance(distance, speed2)
    );
  };

  

  return (
    <div className="App">
      <header className="App-header">
        <Menu
          options={cars}
          menuName={"Valitse auto"}
          selected={selectedCar}
          selectFunction={carChangeHandler}
        />
      </header>
      <main>
        <Input
          inputName={"Nopeus1 (km/h)"}
          placeholder={"Syötä nopeus"}
          onChange={speed1InputChangeHandler}
          value={speed1}
          error={speed1Error}
        />
        <Input
          inputName={"Nopeus2 (km/h)"}
          placeholder={"Syötä nopeus"}
          onChange={speed2InputChangeHandler}
          value={speed2}
          error={speed2Error}
        />
        <Input
          inputName={"Matka (km)"}
          placeholder={"Syötä matka"}
          onChange={distanceInputHandler}
          value={distance}
          error={distanceError}
        />
        <InfoViewer
          car={selectedCar}
          baseConsumption={baseConsumption}
          consumptionOnSpeed1={consumptionOnSpeed1}
          consumptionOnSpeed2={consumptionOnSpeed2}
          travelTimeOnSpeed1={travelTimeOnSpeed1}
          travelTimeOnSpeed2={travelTimeOnSpeed2}
          consumptionDifference={calculateDifferences(
            consumptionOnSpeed2,
            consumptionOnSpeed1
          )}
          travelTimeDifference={calculateDifferences(travelTimeOnSpeed1,travelTimeOnSpeed2)}
        />
        <Button buttonName={"Laske"} onClick={validateInputs} />
      </main>
    </div>
  );
}

export default App;
