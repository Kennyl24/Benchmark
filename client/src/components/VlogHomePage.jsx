import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ServiceTest from './ServiceTest.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ComingSoonModal from './ComingSoonModal.jsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import config from '../../../config.js';


  class VlogHomePage extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        videos: null,
        hovering: false,
        showEverything: false,
        email: '',
      }
      this.submitted = this.submitted.bind(this);
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
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLhVpGPBTPb700oGkIbfp_rYaaz4TXzmBu&key=${config.GOOGLE_MAPS_API_KEY}`)
      .then(resp => resp.json())
      .then((resp) => {
        this.setState({
          videos: resp.items.slice(0,3),
          showEverything: true
        });
        console.log(this.state.videos);
      });
    }
    render () {
      return (
        <MuiThemeProvider>
        <h3 className="homepage-header" style={{color:'#787878', cursor:'pointer',marginBottom:''}} 
        onClick={() => window.location.href = "/vlog"}
        > Mortgage Lending Video Tips </h3>
        <div className="comingsoon-modal-home">
        <h2 style={{marginTop:'0%'}}>COMING SOON</h2>
        <p className="vlog-text" style={{textAlign:'center'}}>Our video tips are close to launching<br/>
        Be the first to know, subscribe below!
        </p>
        <div style={{display:'flex', flexDirection: 'column',
    alignItems: 'center'}}>
        <div style={{alignItems: 'center'}}>
        <TextField
          style={{width:'60%', minWidth:'200px', height: '50px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email:event.target.value
            })
          } }
        />
        </div>
        <div>
        <Button onClick={this.submitted} variant="contained" fullWidth={true} style={{marginTop:'.5%', marginBottom: '2%', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
          Notify Me
      </Button>
      </div>
      </div>
        </div>
        </MuiThemeProvider>
    // if(!this.state.showEverything){
    //     return <div/>
    //   }
    //   return (
    //     <Link to={{ pathname:'/vlog' }} >
    //     <div style={{marginBottom: '4%'}}>
    // <h3 className="homepage-header" style={{color:'#787878'}} > VLOGS </h3>
    // <div style={{
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around'
    // }}>
    //     {this.state.videos.length > 0 ? this.state.videos.map((video, key) =>  
    // <Card style={{height:'auto', 
    //   width:'33%', 
    //   display: 'flex',
    //   flexWrap: 'nowrap',
    //   overflowX: 'auto'}}>
    //   <CardHeader
    //     title={video.snippet.title}
    //     titleStyle={{fontSize:'16px', fontWeight: 'bold'}}
    //     // subtitle="Subtitle"
    //   />
    //   <CardMedia
    //     overlay={<Link to={{ pathname:'/vlog' }}className="home-links"><CardTitle title="View More"
    //     titleStyle={{color:'white'}}
    //     /></Link>}
    //   >
    //   <div style={{position: 'relative',
    //   top: 0,
    //   left: 0
    // }}>
    //     <img className="card-image2" src={video.snippet.thumbnails.high.url} alt="" />
    //     <img className="card-secondImage" src={this.state.hovering ? "https://i.ibb.co/hChgLkq/yt-icon-rgb.png" : 'https://i.ibb.co/47cKNLk/youtube-social-icon-dark.png'} />
    //   </div>
    //   </CardMedia>
    // </Card>)
    // : null}
    // </div>
    // </div>
    // </Link>

)
}};
export default VlogHomePage;