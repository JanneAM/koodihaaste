export const calculateDifferences = (valueA, valueB) => {
    return (valueA - valueB).toFixed(2);
  };

export  const calculateConsumptionForSpeed = (speed, baseConsumption) => {
    return (baseConsumption * Math.pow(1.009, speed - 1)).toFixed(2);
  };

 export const calculateTravelTimeForDistance = (distance, speed) => {
    return (distance / speed).toFixed(2);
  };

  export const calculateTotalConsumption = (distance, consumption) => {
    return ((distance*consumption)/100).toFixed(2);
  }