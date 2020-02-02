import React, { useEffect } from 'react';
import dataLimiter from 'utils/dataLimiter';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibleUsers, activePaginationField, setPaginationFields } from 'actions/index';

import style from './pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);

  const { usersList } = store.users;
  const {
    currentField,
    paginationFields
  } = store.pagination;

  const getSubFieldsAmount = (users) => {
    return Math.round(users.length / 21);
  }

  const renderLimitedFields = (activeField, usersArr) => {
    let limitedFields, before, after;
    const currentlyActive = activeField + 1;
    const totalFieldsArr = Array.apply(null, { length: getSubFieldsAmount(usersArr) }).map(Number.call, Number);
    if (currentlyActive <= 10) {
      limitedFields = dataLimiter(totalFieldsArr, 0, 12);
    }
    if (currentlyActive > 10) {
      const fiveLess = currentlyActive - 6;
      const fiveMore = currentlyActive + 5;
      before = dataLimiter(totalFieldsArr, fiveLess, currentlyActive);
      after = dataLimiter(totalFieldsArr, currentlyActive, fiveMore);
      limitedFields = [...before, ...after];
    }

    return limitedFields;
  }

  const handleClick = (field) => {
    const begin = field === 0 ? 0 : field * 21;
    const end = begin === 0 ? 21 : begin + 21;
    dispatch(setVisibleUsers(dataLimiter(usersList, begin, end)));
    dispatch(activePaginationField(field));
  }

  const scrollUp = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    handleClick(currentField)
  }, [usersList]);

  useEffect(() => {
    dispatch(setPaginationFields(renderLimitedFields(currentField, usersList)));
  }, [currentField]);

  useEffect(() => {
    handleClick(currentField);
  }, []);

  return (
    <div className={style.pagination}>
      {
        paginationFields !== undefined
          ?
          paginationFields.map((field, i) => (
            <span
              className={`${style.paginationKey} ${field === currentField ? `${style.active}` : ''}`}
              key={i}
              onClick={() => {
                handleClick(field);
                scrollUp();
              }}
              data-index={`${field}`}
            >
              {field + 1}
            </span>
          ))
          :
          ''
      }
    </div>
  )
}

export default Pagination;