import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleSave = () => {
    setCurrentItem(null);
    setRefreshTrigger(!refreshTrigger); // Toggle the refresh trigger to refresh the item list
  };

  return (
    <div className="App container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-8">CRUD-APPLICATION</h1>
      <hr />
      <ItemForm currentItem={currentItem} onSave={handleSave} />
      <ItemList onEdit={handleEdit} refreshTrigger={refreshTrigger} />
    </div>
  );
};

export default App;
