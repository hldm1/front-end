import React from 'react';
import Header from 'layout/header';
import Sorter from 'components/sorter';
import Card from 'shared/card/';
import Pagination from 'components/pagination';
import { useSelector } from 'react-redux';

import styles from './home.module.scss';

const Home = ({ ...props }) => {
  const store = useSelector(state => state);
  const { visibleUsers } = store.users;

  return (
    <>
      <Header {...props} />

      <div className={styles.container}>
        <Sorter />

        {visibleUsers.map((user, idx) => (
          <Card key={idx} index={idx} {...user} />
        ))}

        <Pagination />
      </div>
    </>
  )
}

export default Home;
