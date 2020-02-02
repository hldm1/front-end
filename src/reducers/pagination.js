const pagination = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        currentField: action.field
      };
    case 'CURRENT_FIELDS':
      return {
        ...state,
        paginationFields: action.fields
      }
    default:
      return state;
  }
}

export default pagination;