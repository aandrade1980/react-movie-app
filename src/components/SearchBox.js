import React from 'react';

const SearchBox = ({ searchValue, setSearchValue }) => (
  <div className="col col-sm-4">
    <input
      type="text"
      className="form-control"
      placeholder="Type to search..."
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
    />
  </div>
);

export default SearchBox;
