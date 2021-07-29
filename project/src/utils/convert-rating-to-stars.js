function convertRatingToPercent(dataInStars) {
  return (Math.round(dataInStars) * 20);
}

export default convertRatingToPercent;
