const dataLimiter = (usersList, begin, end) => {
  if(usersList) {
    return usersList.slice(begin, end);
  }
}

export default dataLimiter;