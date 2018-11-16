import React from 'react';
import SongItemHorizontalScroll from './SongItemHorizontalScroll';

const BestOfTheWeek = (props) => {
  return props.item.map(song => 
          <SongItemHorizontalScroll song={song} />);
};

export default BestOfTheWeek;