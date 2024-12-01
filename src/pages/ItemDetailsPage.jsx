import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../data/items';
import '../components/ItemCard.css';
import '../components/Carousel';
import ItemCard from '../components/ItemCard';

const ItemDetailsPage = () => {
  const { itemName } = useParams();
  const item = items.find((i) => i.name.toLowerCase() === itemName.toLowerCase());

  if (!itemName || !item) {
    return <div>Item not found. Please check the URL or search for a valid item.</div>;
  }


  const notifyShopkeeper = () => {
    alert(`Notification sent to the shopkeeper: The item "${item.name}" is out of stock.`);
  };


  const getSimilarItems = () => {
    return items.filter((i) => i.category === item.category && i.name !== item.name);
  };

  const similarItems = getSimilarItems();

  return (
    <div className="item-details-page">
      <div className="item-card">
        <img
          src={item.image}
          alt={item.name}
          className="item-card-image"
        />
        <div className="item-card-content">
          <h2 className="item-card-title">{item.name}</h2>
          <p className="item-card-description">{item.description}</p>
          <p className="item-card-price">Price: ₹{item.price}</p>
          <p className="item-card-location">Location: {item.location}</p>
          {item.offer && (
            <span className="item-card-offer-tag">Offer: {item.offer}</span>
          )}
          {!item.inStock && (
            <button className="out-of-stock-button" onClick={notifyShopkeeper}>
              Out of Stock
            </button>
          )}
        </div>
      </div>

      {similarItems.length > 0 && (
        <div className="similar-products-section">
          <h3 align="center">Most Relevant Products</h3>
          <div className="similar-products">
            {similarItems.map((similarItem) => (
              <ItemCard key={similarItem.name} item={similarItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsPage;











