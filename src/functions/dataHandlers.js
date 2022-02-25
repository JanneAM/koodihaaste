export const getDataFromArray = (array, filterParameter) => {
    return array.filter((object) => {
      return object.name === filterParameter;
    });
  };