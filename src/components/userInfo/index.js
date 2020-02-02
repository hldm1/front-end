import React, { useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import PlaceHolder from 'shared/placeholder';

import styles from './userInfo.module.scss';

const UserInfo = ({ state = {} }) => {
  const thumbnailRef = useRef();
  const {
    name = '',
    thumbnail,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends
  } = state;

  function handleThumbnailSizing() {
    const image = thumbnailRef.current;
    const imageWidth = image.clientWidth;
    if (screen.availWidth >= 768 && screen.availWidth < 992 && imageWidth < 500) {
      image.style.objectPosition = 0;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleThumbnailSizing);

    return window.removeEventListener('resize', handleThumbnailSizing);
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.thumbnailWrapper}>
          <LazyLoad placeholder={<PlaceHolder />}>
            <img onLoad={() => { handleThumbnailSizing(); }} ref={thumbnailRef} src={thumbnail} alt={`${name} profile`} className={styles.thumbnail} />
          </LazyLoad>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>

          <div className={`${styles.features} ${styles.borderRight}`}>
            <h2 className={styles.title}>Phisical Characteristics</h2>
            <div className={styles.table}>
              <div className={styles.left}>
                <p className={styles.charDesc}>Age:</p>
                <p className={styles.charDesc}>Weight:</p>
                <p className={styles.charDesc}>Height:</p>
                <p className={styles.charDesc}>Hair Color:</p>
              </div>

              <div className={styles.right}>
                <p className={styles.charFeature}>{age} Years Old</p>
                <p className={styles.charFeature}>{weight} Kg</p>
                <p className={styles.charFeature}>{height} cm</p>
                <p className={styles.charFeature}>{hair_color}</p>
              </div>
            </div>
          </div>

          <div className={styles.features}>
            <h2 className={styles.title}>Professions</h2>
            <div className={styles.professions}>
              <>
                {
                  professions.length > 0
                    ?
                    <>
                      {professions.map((prof, idx) => (
                        <p key={idx} className={styles.charDesc}>- {prof}</p>
                      ))}
                    </>
                    :
                    <p className={styles.charDesc}>No Profession</p>
                }
              </>
            </div>
          </div>

          <div className={`${styles.friends} ${styles.features}`}>
            <h2 className={styles.title}>Friends</h2>
            <>
              {
                friends.length > 0
                  ?
                  <>
                    {
                      friends.map((friend, idx) => (
                        <p key={idx} className={styles.charDesc}>- {friend}</p>
                      ))
                    }
                  </>
                  :
                  <p className={styles.charDesc}>No Friends</p>
              }
            </>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserInfo;