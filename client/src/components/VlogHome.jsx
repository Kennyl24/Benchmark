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
import VlogHomePage from './VlogHomePage.jsx';


const opts = {
  height: '390',
  width: '640',
  playerVars: { 
    autoplay: 1
  }
};
  class VlogHome extends React.Component { 
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
         {/* <MuiThemeProvider> */}
        <h3 className="homepage-header" style={{color:'#787878', cursor:'pointer',marginBottom:''}} 
        onClick={() => window.location.href = "/vlog"}
        > Mortgage Lending Video Tips </h3>
  <div className="vlog-container">
      {this.state.videos.length > 0 ? this.state.videos.map((video, key) => <VlogHomePage video={video} key={key} />) : null}
  </div>
  </div>
    // </MuiThemeProvider>
     )
    }};

export default VlogHome;