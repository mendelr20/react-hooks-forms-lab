import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, items}) {
  
  const [itemName, setName] = useState("")
  const [itemCategory, setCategory] = useState("")

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  
  function formSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), 
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={formSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
