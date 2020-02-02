//users actions

export const setVisibleUsers = users => ({
  type: 'SET_VISIBLE_USERS',
  users
});

export const addUsers = users => ({
  type: 'ADD_USERS',
  users
});

//sorting selection
export const setSelection = (selection) => ({
  type: 'SET_SELECTION',
  selection
})

//pagination actions

export const activePaginationField = field => ({
  type: 'SET_FIELD',
  field
});

export const setPaginationFields = fields => ({
  type: 'CURRENT_FIELDS',
  fields
})