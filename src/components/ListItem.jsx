import React from 'react';

const ListItem = ({ name, description, toggleList, itemLocation, removeItem }) => (
  <li className="list-group-item">
    <div className="item-container">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button className="btn btn-danger" onClick={removeItem}>
          ✖
        </button>
        <button className="btn btn-primary" onClick={toggleList}>
          Add to {itemLocation}
        </button>
      </div>
    </div>
  </li>
);

export default ListItem;
