import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Button from './Button';

const SongItemHorizontalScroll = ({ song }) => {
  
  const { title, artist, album, url, thumbnail_image, price } = song;
  const { containerStyle, songDetailButtonContainer, songInfoStyle, albumImageStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image
        source={{ uri: thumbnail_image }}
        style={albumImageStyle}
      />
      <View style={songDetailButtonContainer}>
        <View style={songInfoStyle}>
          <Text
            style={{ fontSize: 12, lineHeight: 14, width: 160 }}
            numberOfLines={1}>
            {title}
          </Text>
          <Text
            style={{ color: '#666', fontSize: 12, lineHeight: 14, width: 160 }} numberOfLines={1}
          >{artist} - {album}</Text>
        </View>
        <Button onPress={() => Linking.openURL(url)}>
          S$ {price/100}
        </Button>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    width: 280,
    flexDirection: 'row'
  },
  songDetailButtonContainer: {
    flexDirection: 'row'
  },
  songInfoStyle: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 8
  },
  albumImageStyle: {
    width: 40,
    height: 40
  }
}

export default SongItemHorizontalScroll;
