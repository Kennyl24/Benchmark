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
import {Helmet} from "react-helmet";

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
      <Helmet>
            <title>Mortgage Lending 101</title>
            <meta name="keywords" content="Mortgae Lender, Mortgage Lending, Va Loans, First Time home buyers, conventional loans, closing costs" />
            <meta name="og:description" content="Mortgage Lending in the Napa Valley and surronding areas. You can find out many interestings things about home loans on this page." />
            <meta property="og:url" content={window.location.href}/>
      </Helmet>
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