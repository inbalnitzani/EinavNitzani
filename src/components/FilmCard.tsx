import React from 'react';
import type { Film } from '../types/Film';

const FilmCard: React.FC<{ film: Film }> = ({ film }) => (
  <div className="d-flex flex-column flex-md-row">
    {/* Film Card Content */}
    <div className="card mb-4 w-100 w-md-50 me-md-4">
      <div className="card-body text-center">
        {film.trailer.endsWith('.mp4') && (
          <video
            src={film.trailer}
            controls
            className="w-100"
          />
        )}
        
        <h5 className="card-title">{film.title} - {film.role}</h5>
        <p className="card-text">{film.description}</p>
        {film.festivals && (
          <div>{film.festivals.map(festival => <p><strong>{festival}</strong></p>)}</div>
        )}
        <p className="card-text"><strong>Director:</strong> {film.director}</p>
        <p className="card-text"><strong>Cast:</strong> {film.cast}</p>
        <p className="card-text">{film.info}</p>

        {/* Festivals, etc. */}
      </div>
    </div>

    {/* Images Section */}
    <div className="d-flex flex-column flex-md-row align-items-center" style={{ gap: '20px' }}>
      {/* Left Image - Positioned between the heights of the 2 right images */}
      {film.photos && film.photos.length > 0 && (
        <div style={{ transform: `rotate(${film.leftImageAngle || -3}deg)`, alignSelf: 'center' }}>
          <img 
            src={film.photos[0]} 
            alt="Einav Nitzani"
            className="img-fluid rounded shadow"
            style={{ maxWidth: `${film.leftImageSize || 200}px`, height: 'auto' }}
          />
        </div>
      )}
      
      {/* Right Images Container */}
      <div className="d-flex flex-row flex-md-column" style={{ gap: '20px' }}>
        {/* First Image - Tilted Left */}
        {film.photos && film.photos.length > 1 && (
          <div style={{ transform: `rotate(${film.topRightImageAngle || -5}deg)` }}>
            <img 
              src={film.photos[1]} 
              alt="Einav Nitzani"
              className="img-fluid rounded shadow"
              style={{ maxWidth: `${film.topRightImageSize || 200}px`, height: 'auto' }}
            />
          </div>
        )}
        
        {/* Second Image - Tilted Right */}
        {film.photos && film.photos.length > 2 && (
          <div style={{ transform: `rotate(${film.bottomRightImageAngle || 8}deg)` }}>
            <img 
              src={film.photos[2]}  
              alt="Einav Nitzani"
              className="img-fluid rounded shadow"
              style={{ maxWidth: `${film.bottomRightImageSize || 200}px`, height: 'auto' }}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default FilmCard;