import React from 'react';

import style from './header.module.scss';

const Header = ({ selectedOption, ...props }) => {
  const {
    history: { goBack },
    match: { path }
  } = props;

  return (
    <header className={`${style.header} ${path === '/' ? `${style.marginBottom}` : ''}`}>
      <div className={style.container}>
        {
          path === '/user'
            ?
            <button onClick={() => { goBack(); }}>Go Back</button>
            :
            <h1 className={style.title}>Search And Select a User</h1>
        }
      </div>
    </header>
  )
}

export default Header;