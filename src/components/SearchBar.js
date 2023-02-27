import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
    console.log(searchTerm);
  };

  return (
    <input
          type="text"
          className=" lg:w-[230px] w-[180px] px-4 py-2 m-2 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
          placeholder="Search for products"
          
          onChange={handleSearchInputChange}
        />
  );
};

export default SearchBar;
