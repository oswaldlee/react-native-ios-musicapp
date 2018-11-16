import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 4,
    paddingBottom: 4
  },
  buttonStyle: {
    flexDirection: 'column',
    justifyContent:'center',
    alignSelf: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#007AFF',
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 16
  }
}

export default Button;