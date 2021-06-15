const toCamel = (stringData) =>
  stringData.replace(/([-_][a-z])/ig, ($1) =>
    $1.toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

const checkIfArray = (arrayData) =>
  Array.isArray(arrayData);

const checkIfObject = (objectData) =>
  objectData === Object(objectData) && !checkIfArray(objectData) && typeof objectData !== 'function';

const convertKeysToCamel = (dataInSnake) => {
  if (checkIfObject(dataInSnake)) {
    const dataInCamel = {};
    Object.keys(dataInSnake)
      .forEach((k) => {
        dataInCamel[toCamel(k)] = convertKeysToCamel(dataInSnake[k]);
      });
    return dataInCamel;
  } else if (checkIfArray(dataInSnake)) {
    return dataInSnake.map((i) =>
      convertKeysToCamel(i),
    );
  }
  return dataInSnake;
};

export default convertKeysToCamel;
