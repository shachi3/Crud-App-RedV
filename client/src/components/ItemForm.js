import React, { useState, useEffect } from 'react';
import { createItem, updateItem } from '../api';

const ItemForm = ({ currentItem, onSave }) => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 useEffect(() => {
  if (currentItem) {
   setTitle(currentItem.title);
   setDescription(currentItem.description);
  } else {
   setTitle('');
   setDescription('');
  }
 }, [currentItem]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!title || !description) return alert('Title and description are required');

  const item = { title, description };
  if (currentItem) {
   await updateItem(currentItem._id, item);
  } else {
   await createItem(item);
  }
  onSave(); // Trigger the parent component's function to refresh the item list
  setTitle('');
  setDescription('');
 };

 return (
  <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 p-6 bg-gray-100 shadow-md rounded-lg">
   <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Title</label>
    <input
     type="text"
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     className="w-full px-3 py-2 border rounded"
    />
   </div>
   <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Description</label>
    <textarea
     value={description}
     onChange={(e) => setDescription(e.target.value)}
     className="w-full px-3 py-2 border rounded"
    />
   </div>
   <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
    {currentItem ? 'Update' : 'Add'}
   </button>
  </form>
 );
};

export default ItemForm;
