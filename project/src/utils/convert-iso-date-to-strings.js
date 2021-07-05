export default function convertIsoDateToStrings(format, date){
  const dateTimeString = Date.parse(date);
  const dateObject = new Date(dateTimeString);
  let newDate = format.replace('YYYY', dateObject.getFullYear());
  newDate = newDate.replace('MM', (`0${(dateObject.getMonth() + 1)}`).slice(-2)); //add leading zero and slicing 2 symbols
  newDate = newDate.replace('DD', ((`0${(dateObject.getDate())}`).slice(-2)));
  newDate = newDate.replace('Month', dateObject.toLocaleString('default', {month: 'long'}));
  return newDate;
}
