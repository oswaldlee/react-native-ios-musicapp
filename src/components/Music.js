import React, { Component } from 'react';
import { Text, ScrollView, Dimensions, View, FlatList } from 'react-native';
import FeaturedCard from './FeaturedCard';
import HorizontalScrollView from './HorizontalScrollView';
import AlbumHorizontalScroll from './AlbumHorizontalScroll';
import SongItemHorizontalScroll from './SongItemHorizontalScroll';
// import BestOfTheWeek from './BestOfTheWeek';

class Music extends Component {
  state = { 
    albums: [],
    bestOfTheWeek: []
  };

  componentWillMount() {
    fetch('https://api.myjson.com/bins/jhltq')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));

      fetch('https://api.myjson.com/bins/13ihiu')
      .then(response => response.json())
      .then(data => this.setState({ bestOfTheWeek: data }));
  }

  renderFeaturedArtist() {
    const render = this.state.albums.map(album => {
      if (album.featured === true) {
        return <FeaturedCard key={album.title} album={album} />;
      }
    });
    
    return render;
  }

  renderFeaturedAlbums() {
    const render = this.state.albums.map(album => {
      if (album.featured !== true) {
        return <AlbumHorizontalScroll key={album.title} album={album} />;
      }
    });
    
    return render;
  }

  renderBestOfTheWeek = (items) => {
    return (
      <View>
        {Array.from(items).map((item, index) => <SongItemHorizontalScroll item={item} key={index} />)}
        {/* Alternative attempt */}
        {/* {Array.from(items).map((item, index) => <BestOfTheWeek item={item} key={index} />)} */}
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.featureTextStyle}>Featured Artist</Text>
        {this.renderFeaturedArtist()}

        <Text style={styles.featureTextStyle}>Featured Albums</Text>
        <HorizontalScrollView>
          {this.renderFeaturedAlbums()}
        </HorizontalScrollView>

        <Text style={styles.featureTextStyle}>Best of The Week</Text>
        <FlatList
          data={this.state.bestOfTheWeek}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderBestOfTheWeek}
          // keyExtractor={item => item.title}
        />
      </ScrollView>
    );
  }
}

const styles = {
  featureTextStyle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#C14770',
    marginLeft: 16
  }
};

export default Music;
