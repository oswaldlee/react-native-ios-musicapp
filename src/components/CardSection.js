import React from 'react';
import { ImageBackground } from 'react-native';

const CardSection = (props) => {

  return (
    <ImageBackground
      source={{ uri: props.album.image }}
      style={{
              width: '100%',
              height: 360,
              justifyContent: 'flex-end',
              flexDirection: 'column'
            }}
      imageStyle={{ borderRadius: 16 }}>
        {props.children}
    </ImageBackground>
  );
};

export default CardSection;
