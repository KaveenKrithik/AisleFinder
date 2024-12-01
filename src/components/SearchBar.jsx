import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SearchBar.css';
import { items } from '../data/items';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(results.slice(0, 5));
    } else {
      setFilteredItems([]);
    }
  };

  const handleSearch = () => {
    onSearch(query);
    setFilteredItems([]);
  };

  const handleItemClick = (name) => {
    onSearch(name);
    setFilteredItems([]);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for items..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      {filteredItems.length > 0 && (
        <motion.ul
          className="recommendations"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredItems.map((item) => (
            <motion.li
              key={item.id}
              onClick={() => handleItemClick(item.name)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default SearchBar;



