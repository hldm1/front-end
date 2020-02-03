import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import fetchData from 'utils/fetchData';
import Home from 'pages/home';
import User from 'pages/user';
import { useDispatch } from 'react-redux';
import { addUsers, setVisibleUsers, setSelection, activePaginationField } from 'actions/index';
import dataLimiter from 'utils/dataLimiter';

import 'style/base.scss';

function App() {
  const [dataReady, setReady] = useState(false);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  if (!dataReady) {
    fetchData()
      .then(response => {
        dispatch(addUsers(response));
        dispatch(setSelection('id_ascending'));
        dispatch(activePaginationField(0));
        setUserData(response);
        setReady(true);
      });
  }

  useEffect(() => {
    const homePage = dataLimiter(userData, 0, 21);
    dispatch(setVisibleUsers(homePage));
  }, [userData]);

  return (
    <>
      {
        dataReady === true
          ?
          <HashRouter>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route path="/user" component={User} />
            </Switch>
          </HashRouter>
          :
          ''
      }
    </>
  )
}

export default App;
