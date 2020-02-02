import { combineReducers } from 'redux';
import users from 'reducers/user';
import pagination from 'reducers/pagination';
import sorting from 'reducers/sorting';

const reducers = combineReducers({
  users,
  sorting,
  pagination
});

export default reducers;