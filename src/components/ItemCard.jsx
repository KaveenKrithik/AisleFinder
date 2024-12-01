import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>Price:</strong> ₹{item.price}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Offer:</strong> {item.offer}</p>
    </div>
  );
};

export default ItemCard;
