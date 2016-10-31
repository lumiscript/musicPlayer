import React, { Component } from 'react'
//import { Button } from 'react-bootstrap'
import './App.css'

import Sound from 'react-sound';

const songArray = [{"slug": "fZRr9b", "is_external": true, "plays": 130, "url": "http://net.tooxclusive.com/wp-content/uploads/2016/10/Mr-Eazi-Ft.-Terry-G-Skin-Tight-Remix.mp3", "title": "Skin Tight Remix ft Terry G", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/skintight.jpg", "id": 3506, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Skin Tight Remix", "slug": "skin-tight-remix", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/skintight.jpg"}}, {"slug": "p4uxF5", "is_external": false, "plays": 133, "url": "eazybody.mp3", "title": "Body ft Mr Eazi", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3486, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}, {"slug": "VBoRtg", "is_external": true, "plays": 136, "url": "http://southpawgroup.com/gidiradio/songs/EaziHolUp.mp3", "title": "Hol Up", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3467, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}, {"slug": "P1ypfU", "is_external": true, "plays": 751, "url": "http://www.tayotv.net/wp-content/uploads/2016/06/Mr-Eazi-Anointing-ft.-Sarkodie.mp3", "title": "Anointing", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3415, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}, {"slug": "fTnwg0", "is_external": false, "plays": 2136, "url": "Shitor.mp3", "title": "Shitor", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/img_2348.jpg", "id": 3315, "artist": {"name": "Mr Eazi & DJ Juls", "slug": ""}, "album": {"title": "Life is Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/img_2348.jpg"}}, {"slug": "REvIaj", "is_external": false, "plays": 2134, "url": "Skin Tight ft Juls Efya .mp3", "title": "Skin Tight ft Juls Efya ", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Screen_Shot_2016-06-12_at_12.24.48_PM.png", "id": 3401, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Screen_Shot_2016-06-12_at_12.24.48_PM.png"}}, {"slug": "v5vTCY", "is_external": true, "plays": 0, "url": "http://southpawgroup.com/gidiradio/eazi/6Pipi_Dance.mp3", "title": "Pipi Dance", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/abouttoblow.jpg", "id": 3448, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "About to Blow", "slug": "about-blow", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/abouttoblow.jpg"}}, {"slug": "dIJjnU", "is_external": false, "plays": 735, "url": "Bankulize (Refix).mp3", "title": "Bankulize (Refix)", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Yung6ix-Mr-Eazi-Bankulize.jpg", "id": 3313, "artist": {"name": "Yung6ix x Mr Eazi", "slug": ""}, "album": {"title": "Bankulize", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/Yung6ix-Mr-Eazi-Bankulize.jpg"}}, {"slug": "mOlyx9", "is_external": false, "plays": 4214, "url": "Fever ft. Mr Eazi.mp3", "title": "Fever ft. Mr Eazi", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/X.O.png", "id": 2950, "artist": {"name": "X.O Senavoe", "slug": "xo-senavoe"}, "album": {"title": "Fever (Single)", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/X.O.png"}}, {"slug": "IZqB6Y", "is_external": false, "plays": 364, "url": "Pipi Dance.mp3", "title": "Pipi Dance", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg", "id": 3409, "artist": {"name": "Mr Eazi", "slug": ""}, "album": {"title": "Single - Eazi", "slug": "", "thumbnail": "http://southpawgroup.com/gidiloungeart/images/albums_thumbnail/eazi.jpg"}}];

var cleanSong = function(){

  songArray.forEach( function (arrayItem){
     if(arrayItem.is_external === false){
            arrayItem.url = 'http://southpawgroup.com/gidimusicplayer/gidimusic/newplayer/songs/Various/'+ arrayItem.url;
        }     
    });
  }

cleanSong();

class App extends Component {




  render() {
    return (
      <div className="App">

                  <MenuBar/>
                  <SongList />
                  



                   
      </div>
    );
  }
}

export default App;


class SongList extends Component {

constructor(props) {    
    
    super(props);
    
    this.state = {
        playStatus: Sound.status.PAUSED,
        playText: 'Play',
        url: 'unknown',
        songs: songArray,
        songPosition: 0,
        elapsed: '00:00',
        total: '00:00',
        playFromPosition: 0,
        nowPlaying: 'Play a Song'
    
};

  }


formatMilliseconds(milliseconds) {
    // Format hours
    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    // Format minutes
    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    // Format seconds
    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    // Return as string
    return (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds;
}

  //handlePlay function plays the song, updates the position and handle the logic for play/pause
  handlePlay(songUrl, songPosition){
        
    if(this.state.playStatus === Sound.status.PAUSED){
      this.setState({playStatus: Sound.status.PLAYING})
      this.setState({url: songUrl})
      this.setState({nowPlaying: this.state.songs[songPosition].title})  
    }
   
    else if(this.state.playStatus === Sound.status.PLAYING)
   
    {
      this.setState({playStatus: Sound.status.PLAYING})  
      this.setState({url: songUrl})
      this.setState({nowPlaying: this.state.songs[songPosition].title})  
    }
      
    //update song position
    this.setState({songPosition: songPosition})

  }


handleSongFinished () {
    // Call random Track
    this.playNext();
}

fastForward(){
  this.setState({playFromPosition: this.state.playFromPosition+=1000*2});
}

rewind(){
  this.setState({playFromPosition: this.state.playFromPosition-=1000*2});
}

playNext(){

  var updatedPosition = this.state.songPosition + 1;
  var nextSong = this.state.songs[updatedPosition];
  console.log(nextSong);
        
    if(this.state.playStatus === Sound.status.PAUSED){
      this.setState({playStatus: Sound.status.PLAYING})
      this.setState({url: nextSong.url})
       
    }
   
    else if(this.state.playStatus === Sound.status.PLAYING)
   
    {
      this.setState({playStatus: Sound.status.PLAYING})  
      this.setState({url: nextSong.url})
    }
      
    //update song position
    this.setState({songPosition: updatedPosition})

}


pauseSong(){
    
    this.setState({playStatus: Sound.status.PAUSED})


}

  handleSongPlaying(audio){
     this.setState({  elapsed: this.formatMilliseconds(audio.position),
                      total: this.formatMilliseconds(audio.duration),
                      position: audio.position / audio.duration })
   }
        
  render (){

    return (

        <div>

        <Sound
          url={this.state.url}
          playStatus={this.state.playStatus}
          playFromPosition={this.state.playFromPosition}
          onPlaying={this.handleSongPlaying.bind(this)}/>

           <span> {this.state.nowPlaying} </span> <span> {this.state.elapsed} </span> <br/>
           <a onClick={this.playNext.bind(this)} className="btn btn-primary" role="button"> Next </a> 
           <a onClick={this.pauseSong.bind(this)} className="btn btn-primary" role="button"> Pause </a> 
           <a onClick={this.fastForward.bind(this)} className="btn btn-primary" role="button"> Fast Forward </a> 
            <a onClick={this.rewind.bind(this)} className="btn btn-primary" role="button"> Fast Forward </a> 
           <p></p>


            {songArray.map(function(song, i){
              return <Song  key={i} 
                            url={song.url} 
                            albumArt={song.thumbnail}
                            songName={song.title}
                            artist={song.artist.name}
                            playText={'play'}
                            songPosition={i}
                            playSong={this.handlePlay.bind(this)}/> 
       },this

    )}
            </div>

       
        
      )
  }


}



class Song extends Component {  

  testFunction(url){
    console.log(url)
  }

  render(){
      return (
  <div>


                  <div className="col-sm-5 col-md-2">
                  <div className="thumbnail">
                  <img src={this.props.albumArt} alt="..."/>
                  <div className="caption">
                  <span className="songName">{this.props.songName} </span>
                  <span className="songName">  {this.props.artist} </span>  
            
            
            <a onClick={this.props.playSong.bind(this, this.props.url, this.props.songPosition)} className="btn btn-primary" role="button">{this.props.playText}</a> 
           
                  
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



