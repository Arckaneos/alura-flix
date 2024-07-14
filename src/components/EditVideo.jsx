import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function EditVideo() {
  const { id } = useParams();
  const { videos, updateVideo, categories } = useData();
  const video = videos.find((vid) => vid.id === id);

  const [title, setTitle] = useState(video ? video.title : '');
  const [category, setCategory] = useState(video ? video.category : '');
  const [videoLink, setVideoLink] = useState(video ? video.videoLink : '');
  const [imageLink, setImageLink] = useState(video ? video.imageLink : '');
  const [description, setDescription] = useState(video ? video.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(video.id, { title, category, videoLink, imageLink, description });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-video">
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

export default EditVideo;
