import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import YouTube from 'react-youtube';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};


class Vlog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      playingVideo: false,
      hovering: false,
    }
    this.playVideo = this.playVideo.bind(this);
    this.closeVideo = this.closeVideo.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  playVideo(){
    this.setState({
      playingVideo: true,
    })
  }
  closeVideo(){
    this.setState({
      playingVideo: false,
    })
  }
  changeColor(){
    this.setState({
      hovering: !this.state.hovering
    })
  }
  render () {
    let string = 'https://www.youtube.com/embed/"'+ this.props.video.id + '"';
    return (
    <MuiThemeProvider>
    <div style={{padding:'0 24px 48px', maxWidth: '350px', cursor:'pointer'}}>
    <div onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>
    {/* <iframe src='https://www.youtube.com/embed/sWlYdCutkLE' style={{width:'100%', height:'30%'}}></iframe> */}
    <div style={{position: 'relative',
      top: 0,
      left: 0,
      overflow:'hidden'
    }}
    onClick={this.playVideo}
    >
   
    <img className="card-image2" src={this.props.video.snippet.thumbnails.high.url}/>
    <img className="card-secondImage" src={this.state.hovering ? "https://i.ibb.co/hChgLkq/yt-icon-rgb.png" : 'https://i.ibb.co/Ph8qmJF/youtube-social-icon-dark.png'} />
    </div>
      <h4 style={{textAlign:'center', lineHeight:'2.0'}}><b style={{color: '#242f6e', fontSize: '16px', borderBottom: '2px solid currentColor'}}>{this.props.video.snippet.title}</b></h4> 
    </div>
    </div>
    {this.state.playingVideo ? 
    <div>
    <IconButton 
      style={{
        position: 'fixed',
        right: '10%',
        top: '13%',
        zIndex:'9999999', 
        cursor: 'pointer',
        backgroundColor:'white'
      }}
    aria-label="Delete"
    onClick={this.closeVideo}
    >
  <SvgIcon>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </SvgIcon>
</IconButton>
    <YouTube
        className="video-player"
        containerClassName="video-container"  
        videoId={this.props.video.snippet.resourceId.videoId}
        opts={opts}
        onReady={this._onReady}
      />
      </div>
      : null}
      
   </MuiThemeProvider>
)
}
};

export default Vlog;