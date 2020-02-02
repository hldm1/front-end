const sorting = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTION':
      return {
        ...state,
        sortingSelection: action.selection
      };
    default:
      return state;
  }
}

export default sorting;