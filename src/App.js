import React, { Component } from 'react'
//import { Button } from 'react-bootstrap'
import './App.css'

import Sound from 'react-sound';

var songArray = [{"slug": "fZRr9b", "is_external": true, "plays": 130, "url": "http://net.tooxclusive.com/wp-content/uploads/2016/10/Mr-Eazi-Ft.-Terry-G-Skin-Tight-Remix.mp3", "title": "Skin Tight Remix ft Terry G", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/skintight.jpg", "id": 3506, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Skin Tight Remix", "slug": "skin-tight-remix", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/skintight.jpg"}}, {"slug": "p4uxF5", "is_external": true, "plays": 133, "url": "eazybody.mp3", "title": "Body ft Mr Eazi", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3486, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}, {"slug": "VBoRtg", "is_external": true, "plays": 136, "url": "http://southpawgroup.com/gidiradio/songs/EaziHolUp.mp3", "title": "Hol Up", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3467, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}, {"slug": "P1ypfU", "is_external": true, "plays": 751, "url": "http://www.tayotv.net/wp-content/uploads/2016/06/Mr-Eazi-Anointing-ft.-Sarkodie.mp3", "title": "Anointing", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3415, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}, {"slug": "fTnwg0", "is_external": false, "plays": 2136, "url": "Shitor.mp3", "title": "Shitor", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/img_2348.jpg", "id": 3315, "artist": {"name": "Mr Eazi & DJ Juls", "slug": ""}, "album": {"title": "Life is Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/img_2348.jpg"}}, {"slug": "REvIaj", "is_external": false, "plays": 2134, "url": "Skin Tight ft Juls Efya .mp3", "title": "Skin Tight ft Juls Efya ", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Screen_Shot_2016-06-12_at_12.24.48_PM.png", "id": 3401, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Screen_Shot_2016-06-12_at_12.24.48_PM.png"}}, {"slug": "v5vTCY", "is_external": true, "plays": 0, "url": "http://southpawgroup.com/gidiradio/eazi/6Pipi_Dance.mp3", "title": "Pipi Dance", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/abouttoblow.jpg", "id": 3448, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "About to Blow", "slug": "about-blow", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/abouttoblow.jpg"}}, {"slug": "dIJjnU", "is_external": false, "plays": 735, "url": "Bankulize (Refix).mp3", "title": "Bankulize (Refix)", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Yung6ix-Mr-Eazi-Bankulize.jpg", "id": 3313, "artist": {"name": "Yung6ix x Mr Eazi", "slug": ""}, "album": {"title": "Bankulize", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Yung6ix-Mr-Eazi-Bankulize.jpg"}}, {"slug": "mOlyx9", "is_external": false, "plays": 4214, "url": "Fever ft. Mr Eazi.mp3", "title": "Fever ft. Mr Eazi", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/X.O.png", "id": 2950, "artist": {"name": "X.O Senavoe", "slug": "xo-senavoe"}, "album": {"title": "Fever (Single)", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/X.O.png"}}, {"slug": "IZqB6Y", "is_external": false, "plays": 364, "url": "Pipi Dance.mp3", "title": "Pipi Dance", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3409, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}];

var shitor = 
{"slug": "fTnwg0", "is_external": false, "plays": 2136, "url": "Shitor.mp3", "title": "Shitor", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/img_2348.jpg", "id": 3315, "artist": {"name": "Mr Eazi & DJ Juls", "slug": ""}, "album": {"title": "Life is Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/img_2348.jpg"}};

var cleanSong = function(){

  songArray.forEach( function (arrayItem){
     if(arrayItem.is_external === false){
            arrayItem.url = 'http://southpawgroup.com/gidimusicplayer/gidimusic/newplayer/songs/Various/'+ arrayItem.url;
        }     
    });
  }

cleanSong();

class App extends Component {


constructor() {    /* Note props is passed into the constructor in order to be used */
    
    super();
    
    this.state = {
        position: 0,
        shitor: shitor,
        playStatus: Sound.status.PAUSED,
        playText: 'Play',
        url: songArray[0].url,
        songName: songArray[0].title,
        albumArt: songArray[0].thumbnail
    
};

  }

togglePlay(){

 
    console.log('toggleplay')
    if(this.state.playStatus === Sound.status.PAUSED){
      this.setState({playStatus: Sound.status.PLAYING})
      this.setState({playText:'Playing'})  
    }
    else if(this.state.playStatus === Sound.status.PLAYING)
    {
      this.setState({playStatus: Sound.status.PAUSED})  
      this.setState({playText:'Paused'})
    }
      
  }

debugSong() {
    console.log('test');
  }


  render() {
    return (
      <div className="App">

                  <MenuBar/>
                  <Song debugSong={this.debugSong.bind(this)}   
                        togglePlay={this.togglePlay.bind(this)}
                        playText={this.state.playText}
                        url={this.state.url}
                        albumArt={this.state.albumArt}
                        songName={this.state.songName}
                        artist={this.state.artist}
                        playStatus={this.state.playStatus}

                  /> 
                   <a onClick={this.togglePlay.bind(this)} className="btn btn-primary" role="button">Debug</a>
      </div>
    );
  }
}

export default App;




class Song extends Component {  
  
  render(){
      return (
  <div>
                  <Sound
                  url={this.props.url}
                  playStatus={this.props.playStatus}/>
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img src={this.props.albumArt} alt="..."/>
          <div className="caption">
            <h2>{this.props.songName} <br/> {this.props.artist}</h2>
            
            
            <a onClick={this.props.togglePlay} className="btn btn-primary" role="button">{this.props.playText}</a> 
            
          
          </div>
        </div>
      </div>

</div>
        )
  }

}

class MenuBar extends Component {
  render(){
    return(

        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    Songs
                  </a>
                </div>
            </div>
        </nav>
  )
  }
}



