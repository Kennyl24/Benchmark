import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ComingSoonModal from './ComingSoonModal.jsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import config from '../../../config.js';
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
  class VlogHomePage extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        videos: [],
        hovering: false,
        showEverything: false,
        email: '',
        hovering:false,
      }
      this.submitted = this.submitted.bind(this);
      this.playVideo = this.playVideo.bind(this);
      this.closeVideo = this.closeVideo.bind(this);
      this.changeColor = this.changeColor.bind(this);

    }
    submitted(){
      axios.post('/Vlog', {
        email: this.state.email,
      })
      .then( (response) =>  {
        setTimeout(() => {
        }, 500);
      })
      .catch( (error) => {
        return ('There seems to have been an error');
      });
    }
    componentWillMount(){
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL3c0jH6bVf991JnYXXEebRBbIr3ZjyAHk&key=${config.GOOGLE_MAPS_API_KEY}`)
      .then(resp => resp.json())
      .then((resp) => {
        this.setState({
          videos: resp.items.slice(0,3),
          showEverything: true
        });
      });
    }
    playVideo(){
      this.setState({
        playingVideo: true,
      });
  
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
      return (
        <div>
    <div style={{padding:'0 24px 48px', maxWidth: '350px', cursor:'pointer'}}>
    <div onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}>
    <div style={{position: 'relative',
      top: 0,
      left: 0,
      overflow:'hidden'
    }}
    onClick={this.playVideo}
    >
   
    <img className="card-image2" src={this.props.video.snippet.thumbnails.high.url}/>
    <img className="card-secondImage" src={this.state.hovering ? "https://i.ibb.co/hChgLkq/yt-icon-rgb.png" : 'https://i.ibb.co/47cKNLk/youtube-social-icon-dark.png'} />
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
     </div>
     )
    }};

export default VlogHomePage;