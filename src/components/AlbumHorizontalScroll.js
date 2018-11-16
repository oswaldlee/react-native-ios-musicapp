import React from 'react';
import { View, Text, Image } from 'react-native';

const AlbumHorizontalScroll = ({ album }) => {
  const { title, artist, image } = album;
  const { albumInfoStyle, thumbnailStyle, artistInfoStyle } = styles;

  return (
    <View>
      <View style={albumInfoStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: image }}
        />
      </View>
      <View style={artistInfoStyle}>
        <Text 
          style={{ fontSize: 12, lineHeight: 18, width: 80 }}
          numberOfLines={2}
        >{title}</Text>
        <Text
          style={{ color: '#666', fontSize: 12, width: 80 }}
          numberOfLines={1}
        >{artist}</Text>
      </View>
    </View>
  );
};

const styles = {
  albumInfoStyle: {
    width: 90,
  },
  artistInfoStyle: {
    paddingTop: 4
  },
  thumbnailStyle: {
    height: 80,
    width: 80
  }
};

export default AlbumHorizontalScroll;
