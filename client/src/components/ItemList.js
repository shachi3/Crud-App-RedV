import React, { useState, useEffect } from 'react';
import { getItems, deleteItem } from '../api';

const ItemList = ({ onEdit, refreshTrigger }) => {
 const [items, setItems] = useState([]);

 useEffect(() => {
  fetchItems();
 }, [refreshTrigger]);

 const fetchItems = async () => {
  const response = await getItems();
  setItems(response.data);
 };

 const handleDelete = async (id) => {
  await deleteItem(id);
  fetchItems();
 };

 return (
  <div className="container mx-auto my-8">
   <h2 className="text-2xl font-bold mb-4 uppercase text-center">Task List</h2>
   <hr />
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {items.map((item) => (
     <div key={item._id} className="shadow-md rounded-lg p-4 w-full md:w-auto bg-gray-100">
      <h3 className="text-xl font-semibold uppercase">{item.title}</h3>
      <p className="text-gray-700">{item.description}</p>
      <div className="mt-4">
       <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => onEdit(item)}
       >
        Edit
       </button>
       <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => handleDelete(item._id)}
       >
        Delete
       </button>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default ItemList;
