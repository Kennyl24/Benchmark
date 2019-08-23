import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BlogIntro from './BlogIntro.jsx';
import BlogMap from './BlogMap.jsx';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import PlusOneOutlined from '@material-ui/icons/Navigation';
import Icon from '@material-ui/core/Icon';
import Popup from "reactjs-popup";
import BottomNav from './BottomNav.jsx';

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

class BlogPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
    <MuiThemeProvider>
      <div style={{backgroundColor: '#F5F5F5'}}>
      <LeadingBar/>
      {/* <BlogIntro/> */}
      <BlogMap/>
      </div>
      <BottomNav/>
   </MuiThemeProvider>

)
}
};

export default BlogPage;