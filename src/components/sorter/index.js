import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, setSelection } from 'actions/index';

import style from './sorter.module.scss';

const Sorter = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const { usersList } = store.users;
  const { sortingSelection } = store.sorting;

  const sortSelect = useRef(null);

  const sortByIdAsc = (a, b) => a.id - b.id;
  const sortByIdDesc = (a, b) => b.id - a.id;
  const sortByName = (a, b) => a.name.localeCompare(b.name);
  const sortByAgeAsc = (a, b) => a.age - b.age;
  const sortByAgeDesc = (a, b) => b.age - a.age;
  const sortByWeightAsc = (a, b) => a.weight - b.weight;
  const sortByWeightDesc = (a, b) => b.weight - a.weight;
  const sortByHeightAsc = (a, b) => a.height - b.height;
  const sortByHeightDesc = (a, b) => b.height - a.height;
  const sortByHairColor = (a, b) => a.hair_color.localeCompare(b.hair_color);

  const handleSorting = () => {
    const value = sortSelect.current.value;
    dispatch(setSelection(value));
    if (value === 'id') dispatch(addUsers([...usersList.sort(sortByIdAsc)]));
    if (value === 'id_descending') dispatch(addUsers([...usersList.sort(sortByIdDesc)]));
    if (value === 'name') dispatch(addUsers([...usersList.sort(sortByName)]));
    if (value === 'age') dispatch(addUsers([...usersList.sort(sortByAgeAsc)]));
    if (value === 'age_desc') dispatch(addUsers([...usersList.sort(sortByAgeDesc)]));
    if (value === 'weight') dispatch(addUsers([...usersList.sort(sortByWeightAsc)]));
    if (value === 'weight_desc') dispatch(addUsers([...usersList.sort(sortByWeightDesc)]));
    if (value === 'height') dispatch(addUsers([...usersList.sort(sortByHeightAsc)]));
    if (value === 'height_desc') dispatch(addUsers([...usersList.sort(sortByHeightDesc)]));
    if (value === 'hair_color') dispatch(addUsers([...usersList.sort(sortByHairColor)]));
  }

  useEffect(() => {
    handleSorting();
  }, [])

  return (
    <div className={style.sorterWrapper}>
      <p className={style.title}>Sort By: </p>
      <select
        ref={sortSelect}
        className={style.sorter}
        onChange={() => {
          handleSorting();
        }}
        defaultValue={sortingSelection}
      >
        <option value="id">Id (ascending)</option>
        <option value="id_descending">Id (descending)</option>
        <option value="name">Name</option>
        <option value="age">Age (ascending)</option>
        <option value="age_desc">Age (descending)</option>
        <option value="weight">Weight (ascending)</option>
        <option value="weight_desc">Weight (descending)</option>
        <option value="height">Height (ascending)</option>
        <option value="height_desc">Height (descending)</option>
        <option value="hair_color">Hair Color</option>
      </select>
    </div>
  )
}

export default Sorter;