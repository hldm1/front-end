const handleActiveField = (method, field) => {
  let selectedField;
  if (method === 'INIT' && !localStorage.getItem('activeField')) {
    localStorage.setItem('activeField', 0);
    selectedField = localStorage.getItem('activeField');
  }
  if (method === 'SET') {
    localStorage.setItem('activeField', field);
  }
  if (method === 'GET' && localStorage.getItem('activeField')) {
    selectedField = JSON.parse(localStorage.getItem('activeField'));
  }
  return selectedField;
}

export default handleActiveField;
