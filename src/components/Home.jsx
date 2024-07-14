import React from 'react';
import { useData } from './DataProvider';

function Home() {
  const { categories, videos, deleteVideo, deleteCategory } = useData();

  return (
    <div className="home">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <button onClick={() => deleteCategory(category.id)}>Eliminar Categoría</button>
          <div className="videos">
            {videos
              .filter((video) => video.category === category.name)
              .map((video) => (
                <div key={video.id} className="video">
                  <img src={video.imageLink} alt={video.title} />
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <button onClick={() => deleteVideo(video.id)}>Eliminar Video</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
