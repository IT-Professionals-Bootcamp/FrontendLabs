import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ sarki }) => {
  if (!sarki) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {sarki.title}
        <br />
        Duration: {sarki.duration}
      </p>
    </div>
  );
};

const mapToStateProps = (state) => {
  return { sarki: state.selectedSong }
};


export default connect(mapToStateProps)(SongDetail);
