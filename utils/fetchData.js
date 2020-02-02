const getUsersData = async () => {
  let storedObj;
  const storedData = localStorage.getItem('storedData');
  if (storedData) {
    storedObj = JSON.parse(storedData);
  } else {
    const fetchedData = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').catch(e => { if (e) throw e; })
    const dataJson = await fetchedData.json();
    localStorage.setItem('storedData', JSON.stringify(dataJson));
    storedObj = dataJson;
  }
  const {
    Brastlewark
  } = storedObj;
  return Brastlewark.map(user => {
    return user;
  });
};

export default getUsersData;
