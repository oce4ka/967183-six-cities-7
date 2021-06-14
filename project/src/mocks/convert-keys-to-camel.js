const toCamel = (stringData) =>
  stringData.replace(/([-_][a-z])/ig, ($1) =>
    $1.toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

const checkIfArray = function (arrayData) {
  return Array.isArray(arrayData);
};

const checkIfObject = function (objectData) {
  return objectData === Object(objectData) && !checkIfArray(objectData) && typeof objectData !== 'function';
};

const keysToCamel = function (dataInSnake) {
  if (checkIfObject(dataInSnake)) {
    const dataInCamel = {};
    Object.keys(dataInSnake)
      .forEach((k) => {
        dataInCamel[toCamel(k)] = keysToCamel(dataInSnake[k]);
      });
    return dataInCamel;
  } else if (checkIfArray(dataInSnake)) {
    return dataInSnake.map((i) =>
      keysToCamel(i),
    );
  }
  return dataInSnake;
};

export default keysToCamel;
