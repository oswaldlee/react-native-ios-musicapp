// Import libraries to create component
import React from 'react';
import { Text, View } from 'react-native';

// Create component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    marginLeft: 16,
    height: 80
    // elevation: 2,
    // position: 'relative'
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold'
  }
};
// Set component to be available to others
export default Header;
