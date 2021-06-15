export default function convertIsoDateToStrings(format, date){
  const dateTimeString = Date.parse(date);
  const dateObject = new Date(dateTimeString);
  let newDate = format.replace('YYYY', dateObject.getFullYear());
  newDate = newDate.replace('MM', (`0${(dateObject.getMonth() + 1)}`).slice(-2)); //add leading zero and slicing 2 symbols
  newDate = newDate.replace('DD', ((`0${(dateObject.getDate())}`).slice(-2)));
  newDate = newDate.replace('Month', dateObject.toLocaleString('default', {month: 'long'}));
  return newDate;
}
/*
function convertIsoDateToDayMonth(date) {
  //April 2019
  const dateTimeString = Date.parse(date);
  const dateObject = new Date(dateTimeString);
  return `${dateObject.toLocaleString('default', {month: 'long'})} ${dateObject.getFullYear}`;
}

export function convertIsoDateToDayTime(date) {
  const dateTimeString = Date.parse(date);
  const dateObject = new Date(dateTimeString);
  //2019-04-24
  //return d.getFullYear();
  return `${dateObject.getFullYear()}-${(`0${(dateObject.getMonth() + 1)}`).slice(-2)}-${(`0${(dateObject.getDate())}`).slice(-2)}`;
}

export default convertIsoDateToDayMonth;
*/
