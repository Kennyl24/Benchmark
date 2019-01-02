import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import GalleryImages from './GalleryImages.jsx';
import VlogIntro from './VlogIntro.jsx';
import VlogMap from './VlogMap.jsx';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import PlusOneOutlined from '@material-ui/icons/Navigation';
import Icon from '@material-ui/core/Icon';
import Popup from "reactjs-popup";
import BottomNav from './BottomNav.jsx';
import ComingSoonModal from './ComingSoonModal.jsx';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class VlogPage extends React.Component { 
  targetElement = null;
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      videos: []
    }
  }
  componentDidMount(){
    this.targetElement = document.querySelector('#helloitsme');
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLhVpGPBTPb700oGkIbfp_rYaaz4TXzmBu&key=AIzaSyCrHVss1cDavtAH-fXIPO8PiXWncGJa48o')
    .then(resp => resp.json())
    .then((resp) => {
      console.log(resp);
      //this.setState({video: resp.results});
      this.setState({videos: resp.items});
      console.log(this.state.videos);
    });

  }
  showTargetElement = () => {
    disableBodyScroll(this.targetElement);
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
    <MuiThemeProvider>
      <body >
      <div id="helloitsme">
      <LeadingBar/>
      <VlogIntro style={{position:'fixed'}}/>
      <ComingSoonModal/>
      </div> 
      {/* <BottomNav/> */}
      </body>
   </MuiThemeProvider>

)
}
};

export default VlogPage;