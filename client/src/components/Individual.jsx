import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { SocialIcon } from 'react-social-icons';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import SvgIcon from '@material-ui/core/SvgIcon';
import SecondTest from './SecondTest.jsx'
import Popup from "reactjs-popup";
import IconButton from '@material-ui/core/IconButton';
class Individual extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      clicked: false,
      modal: false,
    }
    this.moused = this.moused.bind(this);
    this.clicked = this.clicked.bind(this);
  }
  moused(){
    console.log('mousing')
    this.setState({
      hovered: !this.state.hovered
    })
  }
  clicked(){
    console.log('clicking')
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render () {
    return (
    <MuiThemeProvider>
    <Popup 
    overlayStyle={{background:'rgba(0, 0, 0, 0.8)'}}
    trigger={
      <div className="individual-box">
      <div onMouseEnter={this.moused} onMouseLeave={this.moused}
      style={{position: 'relative',
        width: '100%',
        maxWidth: '400px',
        cursor:'pointer'
      }}
      onClick={this.clicked}
      >
      <img src={this.props.individual.image} style={{height:'200px', width:'90%', paddingLeft:'5%', paddingRigh:'5%'}}/>
      {this.state.hovered ? 
      <div style={{position:'absolute', top:0, bottom:0, left:0, right:0, height:'100%', width:'100%', backgroundColor:'rgba(108, 122, 137, .8)'}}>
    <img src="https://img.icons8.com/ios/50/000000/plus.png" style={{maxHeight:'20%', maxWidth:'20%', marginTop:'30%', marginLeft:'40%'}}alt="info-circle-outline-512" border="0"/>
      </div> 
      :
      null
      }
      </div>
      <h3 className="homepage-header" style={{color:'#282a2d', margin: '0', fontSize:'1.2em', paddingTop:'10px', paddingBottom:'5px', fontWeight:'400'}}>{this.props.individual.name}</h3>
      <p style={{fontFamily:'plexeina-regular,Helvetica,sans-serif', color:'#787878', lineHeight:'1.5em', textAlign:'center'}}>{this.props.individual.title}</p>
      </div>
    } 
      modal
      closeOnDocumentClick
    >
    <div style={{textAlign: 'center', height:'80%'}}>
    <IconButton style={{
      position: 'absolute',
      right: '10px',
    }}
    aria-label="Delete">
  <SvgIcon>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </SvgIcon>
</IconButton>
        <div style={{flexDirection: 'row'}}>
    <img src={this.props.individual.image} className="modal-blog-image"style={{position:'absolute', top: '-10px', width: '25%', height:'30%'}}/>
    <div style={{lineHeight:'1.5em'}}>
    <p style={{fontFamily:'plexeina-regular,Helvetica,sans-serif',paddingLeft:'20px', lineHeight:'2.0', fontSize:'24px', textAlign:'left',fontWeight:'600'}}>{this.props.individual.name}</p>
    <p style={{fontFamily:'plexeina-regular,Helvetica,sans-serif',paddingLeft:'20px', lineHeight:'2.0', fontSize:'18px', textAlign:'left',fontWeight:'500'}}>{this.props.individual.title}</p>
    <p  style={{fontFamily:'plexeina-regular,Helvetica,sans-serif', lineHeight:'2.0',padding:'20px', textAlign:'left', fontFamily:'Graphik Web,Helvetica,sans-serif!important'}}>{this.props.individual.about}</p>
    <div style={{display:'flex', flexDirection:'column'}}>
    <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', paddingLeft:'20px'}}>
    <a href={'mailto:' + this.props.individual.email} style={{color:'black', marginTop:'10px',}}> 
    <Email style={{marginRight:'15px'}} network="email" color="white"/>
    </a>
    <p style={{padding:'0px', marginTop:'12px'}}>{this.props.individual.email}&nbsp;&nbsp;</p>
    </div>
    <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', paddingLeft:'20px'}}>
    <a href="tel:(707) 254-8891" style={{color:'black', marginTop:'10px', height:'200%'}}>
    <Phone style={{marginRight:'15px'}} fill="blue"/>
    </a>
    <p style={{padding:'0px', marginTop:'12px'}}>{this.props.individual.phone}</p>&nbsp;&nbsp;
    </div>
    <p style={{padding:'0px', textAlign:'left', paddingLeft:'20px'}}>{this.props.individual.nmls ? 'NMLS# ' + this.props.individual.nmls : null}</p>
    </div>
    </div>
    </div>
      </div>
  </Popup>

    
    {/* <div className="individual-modal" onMouseLeave={this.moused}>
        <div style={{flexDirection: 'row'}}>
    <img src={this.props.individual.image} className="modal-blog-image"style={{width: '35%', height:'100%'}}/>
    <div>
    <p style={{fontSize:'24px', fontWeight:'600'}}>{this.props.individual.name}</p>
    <p style={{fontSize:'18px', fontWeight:'500'}}>{this.props.individual.title}</p>
    <p  style={{padding:'20px', fontFamily:'Graphik Web,Helvetica,sans-serif!important', lineHeight:'1.3'}}>{this.props.individual.about}</p>
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
    <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap'}}>
    <a href={'mailto:' + this.props.individual.email} style={{color:'black', marginTop:'10px',}}> 
    <Email style={{marginRight:'15px'}} network="email" color="white"/>
    </a>
    <p style={{padding:'0px'}}>{this.props.individual.email}&nbsp;&nbsp;</p>
    </div>
    <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap'}}>
    <a href="tel:(707) 254-8891" style={{color:'black', marginTop:'10px', height:'200%'}}>
    <Phone fill="blue"/>
    </a>
    <p style={{padding:'0px'}}>{this.props.individual.phone}</p>&nbsp;&nbsp;
    </div>
    <p style={{padding:'0px'}}>{this.props.individual.nmls ? 'NMLS# ' + this.props.individual.nmls : null}</p>
    </div>
    </div>
    </div>
      </div> */}
   </MuiThemeProvider>
)
}
};

export default Individual;