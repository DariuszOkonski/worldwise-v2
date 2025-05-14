import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import React from 'react';

const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate('form');
      }}
    >
      <h1>Map</h1>
      {lat && lng && (
        <React.Fragment>
          <h2>
            Position: {lat}, {lng}
          </h2>
          <button
            onClick={(event) => {
              event.stopPropagation();
              setSearchParams({ lat: 23, lng: 50 });
            }}
          >
            Change Position
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Map;
