import React, { useState } from 'react';
import './App.css';

function Wishlist() {
  const [items, setItems] = useState([]);

  function handleAddItem(event) {
    event.preventDefault();
    const newItem = {
      name: event.target.itemName.value,
      priority: event.target.priority.value
    };
    setItems([...items, newItem]);
  }

  function handleDeleteItem(index) {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  }

  function handleUpdatePriority(index, newPriority) {
    const updatedItems = [...items];
    updatedItems[index].priority = newPriority;
    setItems(updatedItems);
  }

  function handleMoveToTop(index) {
    const updatedItems = [...items];
    const itemToMove = updatedItems.splice(index, 1)[0];
    updatedItems.unshift(itemToMove);
    setItems(updatedItems);
  }

  return (
    <div className='container'>
      <h1>My Wish List</h1>
      <form className='myForm' onSubmit={handleAddItem}>
        <label>
          Item Name:
        </label>
        <input type="text" name="itemName" required/>

        <label>
          Priority:
        </label>
        <input type="number" name="priority" required/>
        <br></br>
        <button type="submit">Add Item</button>
      </form>
      <hr></hr>
      {items.map((item, index) => (
        <div className='item' key={index}>
          <div className='item-info'>
            <span>{item.name}</span>
            <span> (Priority: {item.priority})</span>
          </div>
          <div className='actions'>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
            <select value={item.priority} onChange={(event) => handleUpdatePriority(index, event.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={() => handleMoveToTop(index)}>Move to Top</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;


