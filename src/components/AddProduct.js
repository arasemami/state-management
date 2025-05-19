// src/components/AddProduct.js
import React, { useState } from 'react';
import useProductStore from '../modules/products/productStore';

const AddProduct = () => {
  const [name, setName] = useState('');
  const addProduct = useProductStore((state) => state.addProduct);

  const handleAdd = () => {
    if (name.trim()) {
      addProduct({ id: Date.now(), name });
      setName('');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
        className="border px-2 py-1 mr-2"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1">
        Add
      </button>
    </div>
  );
};

export default AddProduct;
