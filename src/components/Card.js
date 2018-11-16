import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    shadowOpacity: 0.2,
    elevation: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 24
  }
};

export default Card;
