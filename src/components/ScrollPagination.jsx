import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner'; 
import https from '../../axios';

const ScrollPagination = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const defaultImage = 'https://picsum.photos/200/300'; 

  useEffect(() => {
    const fetchPhotos = () => {
      setLoading(true);
      https.get(`/photos?_page=${page}&_limit=9`)
        .then(response => {
          setPhotos(prevPhotos => [...prevPhotos, ...response.data]);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false); 
        });
    };
    fetchPhotos();
  }, [page]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div onScroll={handleScroll} className="overflow-y-scroll p-4 h-96">
      <h1 className="text-2xl font-bold mb-4">Food Blog</h1>
      {loading && photos.length === 0 ? (
        <div className="flex justify-center items-center">
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {photos.map(photo => (
            <div key={photo.id} className="card border rounded-lg overflow-hidden shadow-lg">
              <img 
                src={photo.thumbnailUrl} 
                alt={photo.title} 
                onError={(e) => { e.target.src = defaultImage; }} 
                className="w-full h-32 object-cover"
              />
              <h3 className="p-2 text-center">{photo.title}</h3>
            </div>
          ))}
        </div>
      )}
      {loading && photos.length > 0 && (
        <div className="flex justify-center items-center">
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </div>
  );
};

export default ScrollPagination;