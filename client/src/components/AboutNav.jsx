import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TestModal from './TestModal.jsx';

class AboutNav extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
    <MuiThemeProvider>
      {/* borderTop:'1px solid #242f6e', borderBottom:'1px solid #242f6e' */}
      <div style={{minHeight:'80px', width:'100%', backgroundColor: 'white'}}>
      <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', justifyContent:'center'}}>
      <div style={{cursor:'pointer', display:'flex', flexDirection:'column', paddingTop:'2px',paddingBottom:'4px', marginRight:'80px'}}
      onClick={ () => window.location="#team"}
      >
      <img src="https://img.icons8.com/nolan/64/000000/commercial-development-management.png"/>
      <h5 style={{textAlign:'center', margin:'0'}}>TEAM</h5>
      </div>
      <div className="divider">
      </div>
      <div style={{cursor:'pointer',display:'flex', flexDirection:'column', paddingTop:'2px', paddingBottom:'4px', marginRight:'80px'}}
      onClick={ () => window.location="#mission"}>
      <img src="https://img.icons8.com/nolan/64/000000/user-manual.png"/>
      <h5 style={{textAlign:'center', margin:'0'}}>MISSION</h5>
      </div>
      <div style={{cursor:'pointer',display:'flex', flexDirection:'column', paddingTop:'2px', paddingBottom:'4px'}}
      onClick={ () => window.location="#corevalues"}
      >
      <img src="https://img.icons8.com/nolan/64/000000/bulleted-list.png"/>
      <h5 style={{textAlign:'center', margin:'0'}}>VALUES</h5>
      </div>
      </div>
      </div>
   </MuiThemeProvider>
)
}
};

export default AboutNav;