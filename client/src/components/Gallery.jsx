import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import Paper from 'material-ui/Paper';
import GalleryImages from './GalleryImages.jsx';
const style = {
  height: '607px',
  order: '0',
  width: '70%',
  textAlign: 'center',
  verticalAlign:'top',
  display: 'inline-block', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  overflow: 'hidden', 
};
class Directions extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
        <LeadingBar/>
        <div 
          style={{display: 'flex',
          flexWrap: 'nowrap'}}> 
        <Paper style={style} zDepth={5} rounded={false}>
        <div className="testpop">
        <h1>NAPA VALLEY TRANSMISSIONS</h1>
        <div
        style={{paddingTop:'0%', paddingBottom:'4%'}}>
        <img src='https://i.imgur.com/qCdQveB.jpg' alt="" height='260px' width='300px'/>
        </div>
        <div className="description">
        Marty and Susie Laprelle have owned and operated Napa Valley Transmissions since 1992. 26+ years later, Marty has continually served the Napa Valley with any transmission needs. Including working on car fleets for local businesses, family cars, muscle cars, large 4x4 trucks, and not to mention, some drag racing cars as well!
        </div>
        </div>
        </Paper>
        </div>
   </MuiThemeProvider>
)
}
};

export default Directions;