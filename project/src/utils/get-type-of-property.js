import {TypesOfProperty} from '../const';

const getTypeOfProperty = (typeOfproperty) => {
  switch (typeOfproperty) {
    case 'apartment':
      return TypesOfProperty.APARTMENT;
    case 'room':
      return TypesOfProperty.ROOM;
    case 'house':
      return TypesOfProperty.HOUSE;
    case 'hotel':
      return TypesOfProperty.HOTEL;
    default:
      return typeOfproperty;
  }
};

export default getTypeOfProperty;
