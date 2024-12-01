import React from 'react';
import { motion } from 'framer-motion';
import './Carousel.css';

const Carousel = ({ products = [], title = "" }) => {
  if (!products || products.length === 0) {
    return <p className="carousel-empty" align="center">No products to display.</p>;
  }

 
  const loopedProducts = [...products, ...products];

  return (
    <div className="carousel-section">
      {title && <h2 className="carousel-title">{title}</h2>}
      <div className="carousel-container">
        <motion.div
          className="carousel"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20, 
              ease: 'linear',
            },
          }}
        >
          {loopedProducts.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p> {}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;


