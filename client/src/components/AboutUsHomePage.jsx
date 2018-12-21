import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ServiceTest from './ServiceTest.jsx'
import Button from '@material-ui/core/Button';


class AboutUsHomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    hovered: false,
    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    this.setState({
      hovered: !this.state.hovered
    })
  }
  componentWillMount(){
    console.log(this.props)
  }
  render () {
    return (
      <MuiThemeProvider>
  { this.state.hovered ? 
     <div className="offer-card" style={{borderColor: this.props.user.color}}
     onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}
     >
     <h1 className="offer-header" style={{color: this.props.user.color}}> 
       {this.props.user.title}
      </h1>
      <h2 className="offer-subtitle"> 
       {this.props.user.subtitle}
      </h2>
      <img
      className="offer-image"
       src={this.props.user.image}/>
    <div>
    <Button style={{color:'blue'}}><Link to={{ pathname: '/Contact' }} style={{color:'blue'}}>Contact</Link></Button>
    <Button style={{color:'red'}}><a href="https://napa.benchmark.us/apply/" target="_blank" style={{color:'red'}}>Apply Now</a></Button>
    </div>   
       </div>
       : 
       <div className="offer-card" 
       onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}
       >
       <h1 className="offer-header"> 
         {this.props.user.title}
        </h1>
        <h2 className="offer-subtitle"> 
         {this.props.user.subtitle}
        </h2>
        <img
        className="offer-image"
         src={this.props.user.image}/>
         <div>
         <Button style={{color:'blue'}}><Link to={{ pathname: '/Contact' }} style={{color:'blue'}}>Contact</Link></Button>
    <Button style={{color:'red'}}><a href="https://napa.benchmark.us/apply/" target="_blank" style={{color:'red'}}>Apply Now</a></Button>
    </div> 
         </div>
  }
     </MuiThemeProvider>
)
}
};

export default AboutUsHomePage;