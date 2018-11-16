import React from 'react';
import { ScrollView } from 'react-native';

const HorizontalScrollView = (props) => {
  return (
    <ScrollView
      ref={(scrollView) => { this.scrollView = scrollView; }}
      horizontal={true}
      style={styles.albumDetailsStyle}
      // pagingEnabled={true}
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      // snapToInterval={width - 60}
      snapToAlignment={'start'}
      contentInset={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 16,
      }}
    >
      {props.children}
    </ScrollView>
  );
};

const styles = {
  albumDetailsStyle: { 
    paddingLeft: 16,
    marginTop: 8,
    marginBottom: 24
  }
};

export default HorizontalScrollView;
