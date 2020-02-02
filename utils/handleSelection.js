const handleSelection = (method, selection) => {
  let selectedOption;
  if (method === 'SET') {
    localStorage.setItem('selection', selection);
  }
  if (method === 'GET' && localStorage.getItem('selection')) {
    selectedOption = localStorage.getItem('selection');
  }
  return selectedOption;
}

export default handleSelection;
