import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import debounce from 'lodash/debounce';
import './style.css';

const API_KEY = 'AIzaSyAu4RfsQ_wgSL-4rLdqs7v1O1GEaYiCKUE';

class App extends Component  {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }
  
  videoSearch = debounce((term) => {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      })
    })
  }, 500)

  render(){
    const { videos, selectedVideo } = this.state;

    return (
      <div className="container"> 
        <SearchBar onSearchTermChange={ this.videoSearch }/>
        <VideoDetail video={ selectedVideo }/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={ videos }/>
      </div>
    )
  }
}
  

ReactDOM.render(<App/>, document.getElementById('root'));