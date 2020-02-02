import React from 'react';

import style from './placeholder.module.scss';

const PlaceHolder = () => {
  return (
    <div className={style.wrapper}>
      <span>Loading ...</span>
    </div>
  );
}

export default PlaceHolder;