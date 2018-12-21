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


  class VlogHomePage extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        videos: null,
        hovering: false,
        showEverything: false,
      }
    }
    componentWillMount(){
      fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLhVpGPBTPb700oGkIbfp_rYaaz4TXzmBu&key=AIzaSyCrHVss1cDavtAH-fXIPO8PiXWncGJa48o')
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
        <h3 className="homepage-header" style={{color:'#787878', marginBottom:''}} > VLOGS </h3>
        <div className="comingsoon-modal-home">
        <h2 style={{marginTop:'0%'}}>COMING SOON</h2>
        <p className="blog-text" style={{textAlign:'center'}}>Our vlog is close to launching<br/>
        Be the first to know, subscribe below!
        </p>
        <div style={{margin:'auto', width: '40%', marginLeft:'35%'}}>
        <div>
        <TextField
          style={{width: '250px', height: '50px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        </div>
        <div>
        <Button variant="contained" style={{marginTop:'.5%', marginBottom: '2%',width: '250px', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
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