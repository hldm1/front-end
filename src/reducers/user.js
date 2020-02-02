const users = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        ...state,
        usersList: action.users
      }
    case 'SET_VISIBLE_USERS':
      return {
        ...state,
        visibleUsers: action.users
      };
    case 'UPDATE_USERS':
      return state.usersList = action.users;
    default:
      return state;
  }
}

export default users;