const sortReviews = ([...reviews]) => {
  const reviewsSorted = reviews.sort((j, k) => {
    if (Date.parse(j.date) > Date.parse(k.date)) {
      return -1;
    }
    if (Date.parse(j.date) < Date.parse(k.date)) {
      return 1;
    }
    return 0;
  });
  return reviewsSorted;
};

export default sortReviews;
