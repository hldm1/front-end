import React from 'react';
import Header from 'layout/header/index.js'
import Redirect from 'utils/redirect';
import UserInfo from 'components/userInfo';

const User = ({ location: { state = {} }, ...props }) => {
  const {
    name = ''
  } = state;

  return (
    <>
      {
        name !== ''
          ?
          <>
            <style dangerouslySetInnerHTML={{
              __html: `
              @media(min-width: 768px) {
                #root {
                  height: 90vh;
                }
              }
            `}} />
            <Header {...props} />
            <UserInfo state={state} />
          </>
          :
          Redirect()
      }

    </>
  )
}

export default User;
