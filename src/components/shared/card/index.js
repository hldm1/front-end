import React from 'react';
import { Link } from 'react-router-dom';
import style from './card.module.scss';
import Lazyload from 'react-lazyload';
import PlaceHolder from 'shared/placeholder';

const Card = ({ ...props }) => {
  const {
    name,
    thumbnail,
    professions,
    friends
  } = props;

  return (
    <div className={style.card}>
      <Link
        to={{
          pathname: '/user',
          state: props
        }}
        className={style.imgLink}
      >
        <div className={style.thumbnailWrapper}>
          <Lazyload placeholder={<PlaceHolder />}>
            <img className={style.thumbnail} alt={`${name} profile`} src={thumbnail} />
          </Lazyload>
        </div>
      </Link>
      <Link
        to={{
          pathname: '/user',
          state: props
        }}
        className={style.socialWrapper}
      >
        <p className={style.name}>{name}</p>
        <div className={style.socialDetails}>
          <p className={style.detail}>Number Of Friends: {friends.length}</p>
          <p className={style.detail}>Number Of Professions: {professions.length}</p>
        </div>
      </Link>
    </div >
  )
}


export default Card;
