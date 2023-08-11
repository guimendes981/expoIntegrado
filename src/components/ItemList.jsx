import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: 10 }}>
          Nome: {item.name} - Idade: {item.idade}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
