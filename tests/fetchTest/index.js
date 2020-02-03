const fetch = require('node-fetch');

const getUsersData = async () => {
  const fetchedData = await fetch('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').catch(e => { if (e) throw e; })
  const dataJson = await fetchedData.json();

  const {
    Brastlewark
  } = dataJson;

  return Brastlewark.map(user => {
    return user;
  });
};


export default getUsersData;
