import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner'; 
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import https from '../../axios';

const ButtonPagination = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const defaultImage = 'https://picsum.photos/200/300'; 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 

  useEffect(() => {
    const fetchPhotos = () => {
      setLoading(true);
      https.get(`/photos?_page=${currentPage}&_limit=${itemsPerPage}`)
        .then(response => {
          setPhotos(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false); 
        });
    };
    fetchPhotos();
  }, [currentPage]);

  const totalPages = 556; 

  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-2xl font-bold mb-4 text-center">Food Blog</h1>
      <p className='text-[#7D7878] text-center'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
      {loading ? (
        <div className="flex justify-center items-center h-32"> 
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
      <div className="flex justify-center mt-6 w-full max-w-xs mx-auto"> 
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ButtonPagination;