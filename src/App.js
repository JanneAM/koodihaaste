import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import InfoViewer from "./components/InfoViewer/InfoViewer";
import { getDataFromArray } from "./functions/dataHandlers";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  const [selectedCar, setSelectedCar] = useState("Auto A");
  const [baseConsumption, setBaseConsumption] = useState("");
  const [distance, setDistance] = useState("");
  const [distanceError, setDistanceError] = useState("");

  const [speed1, setSpeed1] = useState("");
  const [speed1Error, setSpeed1Error] = useState("");
  const [speed2, setSpeed2] = useState("");
  const [speed2Error, setSpeed2Error] = useState("");

  const [consumptionDifference, setConsumptionDifference] = useState("");
  const [travelTimeDifference, setTravelTimeDifference] = useState("");

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
    setSpeed1(()=>speed);
  }

  const speed2InputChangeHandler = (e) => {
    const speed = e.target.value;
    setSpeed2(()=>speed);
  }

  const distanceInputHandler = (e) => {
    const speed = e.target.value;
    setDistance(()=>speed);
  }

  const validateInputs = () => {
    let errorFound = false;
    if(speed1 && !isNaN(speed1)) {setSpeed1Error(()=>"")}
    else{ setSpeed1Error(()=>"Syötä kenttään numeerinen arvo!"); errorFound=true; }
    if(speed2 && !isNaN(speed2)) {setSpeed2Error(()=>"")}
    else{ setSpeed2Error(()=>"Syötä kenttään numeerinen arvo!"); errorFound=true;}
    if(distance && !isNaN(distance)) {setDistanceError(()=>"")}
    else{ setDistanceError(()=>"Syötä kenttään numeerinen arvo!"); errorFound=true;}
    if(!errorFound){
      calculate()
    }
    else return;
  }

  const calculate = () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <Menu options={cars} menuName={"Valitse auto"} selected={selectedCar} selectFunction={carChangeHandler} />
      </header>
      <main>
        <InfoViewer car={selectedCar} baseConsumption={baseConsumption} />
        <Input placeholder={"Syötä nopeus"} onChange={speed1InputChangeHandler} value={speed1} error={speed1Error}/>
        <Input placeholder={"Syötä nopeus"} onChange={speed2InputChangeHandler} value={speed2} error={speed2Error}/>
        <Input placeholder={"Syötä matka"} onChange={distanceInputHandler} value={distance} error={distanceError}/>
        <Button buttonName={"Laske"} onClick={validateInputs}/>
      </main>
    </div>
  );
}

export default App;
