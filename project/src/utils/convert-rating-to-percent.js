function convertRatingToPercent(dataInStars, round = false) {
  const dataInPercent = dataInStars / 5 * 100;
  if (round) {
    return Math.round(dataInPercent);
  }
  return dataInPercent;
}

export default convertRatingToPercent;
