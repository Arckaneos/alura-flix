import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, { ...category, id: Date.now().toString() }]);
  };

  const updateCategory = (id, updatedCategory) => {
    setCategories(categories.map((cat) => (cat.id === id ? { ...cat, ...updatedCategory } : cat)));
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
    setVideos(videos.filter((video) => video.category !== categories.find((cat) => cat.id === id)?.name));
  };

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: Date.now().toString() }]);
  };

  const updateVideo = (id, updatedVideo) => {
    setVideos(videos.map((vid) => (vid.id === id ? { ...vid, ...updatedVideo } : vid)));
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter((vid) => vid.id !== id));
  };

  return (
    <DataContext.Provider value={{ categories, videos, addCategory, updateCategory, deleteCategory, addVideo, updateVideo, deleteVideo }}>
      {children}
    </DataContext.Provider>
  );
};
