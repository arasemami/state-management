import { useState } from 'react';
import useProductStore from '../modules/products/productStore';
import AddProduct from "../components/AddProduct";


const ProductList = () => {
  const products = useProductStore((state) => state.products);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const editProduct = useProductStore((state) => state.editProduct);

  // For editing
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const startEdit = (product) => {
    setEditId(product.id);
    setEditName(product.name);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName('');
  };

  const saveEdit = (id) => {
    editProduct({ id, name: editName });
    cancelEdit();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Product List</h2>
      <AddProduct />
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center">
            {editId === product.id ? (
              <>
                <input
                  className="border p-1 mr-2"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button
                  className="mr-2 text-green-600"
                  onClick={() => saveEdit(product.id)}
                >
                  Save
                </button>
                <button className="text-gray-600" onClick={cancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{product.name}</span>
                <div>
                  <button
                    className="mr-4 text-blue-600"
                    onClick={() => startEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
