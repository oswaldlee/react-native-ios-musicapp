import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const FeaturedCard = (props) => {
  const { albumInfo, albumTitleStyle, albumArtistStyle } = styles;

  return (
    <Card>
      <CardSection album={props.album}>
        <View style={albumInfo}>
          <Text style={albumTitleStyle}>{props.album.title}</Text>
          <Text style={albumArtistStyle}>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  albumInfo: {
    paddingLeft: 16,
    paddingBottom: 24,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  albumTitleStyle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  albumArtistStyle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    paddingTop: 9
  }
};

export default FeaturedCard;
