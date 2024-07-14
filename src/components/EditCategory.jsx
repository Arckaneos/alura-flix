import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EditCategory() {
  const { id } = useParams();
  const { categories, updateCategory } = useData();
  const category = categories.find((cat) => cat.id === id);

  const [name, setName] = useState(category ? category.name : '');
  const [description, setDescription] = useState(category ? category.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(id, { name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-category">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la categoría"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default EditCategory;
