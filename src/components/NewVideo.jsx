import React, { useState } from 'react';


function NewVideo() {
  const { categories, addVideo } = useData();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo({ title, category, videoLink, imageLink, description });
  };

  return (
    <form onSubmit={handleSubmit} className="new-video">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del video"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>Seleccione una categoría</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>
      <input
        type="text"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        placeholder="Link del video"
      />
      <input
        type="text"
        value={imageLink}
        onChange={(e) => setImageLink(e.target.value)}
        placeholder="Link de la imagen del video"
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

export default NewVideo;
