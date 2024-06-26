const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Get all items
router.get('/', async (req, res) => {
 try {
  const items = await Item.find();
  res.json(items);
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
});

// Get an item by ID
router.get('/:id', async (req, res) => {
 try {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
});

// Add a new item
router.post('/', async (req, res) => {
 const { title, description } = req.body;
 if (!title || !description) return res.status(400).json({ message: 'Title and description are required' });

 const newItem = new Item({ title, description });
 try {
  const savedItem = await newItem.save();
  res.status(201).json(savedItem);
 } catch (err) {
  res.status(400).json({ message: err.message });
 }
});

// Update an item by ID
router.put('/:id', async (req, res) => {
 const { title, description } = req.body;
 if (!title || !description) return res.status(400).json({ message: 'Title and description are required' });

 try {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
  if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
  res.json(updatedItem);
 } catch (err) {
  res.status(400).json({ message: err.message });
 }
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
 try {
  const deletedItem = await Item.findByIdAndDelete(req.params.id);
  if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
  res.json({ message: 'Item deleted' });
 } catch (err) {
  res.status(500).json({ message: err.message });
 }
});

module.exports = router;
