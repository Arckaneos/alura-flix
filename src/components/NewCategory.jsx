import React, { useState } from 'react';

function NewCategory() {
  const { addCategory } = useData();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({ name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="new-category">
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

export default NewCategory;
