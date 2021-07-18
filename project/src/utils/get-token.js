const getToken = () => {
  const token = localStorage.getItem('token');
  return !!token && token; //return token or false
};

export default getToken;
