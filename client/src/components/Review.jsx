import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import StarRateSharp from '@material-ui/icons/StarRateSharp';

class Review extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){

  }
  checkCount(){
  }
  render (repeat) {
    let photoHolder = [];
    for(let i=0;i < this.props.review.stars; i++){
        photoHolder.push(
             <StarRateSharp/>
        );  
    }
    return (
    <MuiThemeProvider>
    <div style={{padding:'0 24px 48px', minWidth: '27%', maxWidth:'350px'}}>
    <div className="review-card">
    <div style={{marginTop:'5%', alignItems:'center', margin:'auto', textAlign:'center'}}>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)", marginTop:'10%'}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    </div>
    {/* {photoHolder.map(i => <div key={i}></div>)} */}
    <div className="container">
      <p className="blog-text">{this.props.review.review}</p> 
      <p className="blog-text" style={{fontWeight: 'bold'}}>{this.props.review.name}</p> 
      <p className="blog-text">{this.props.review.date}</p> 
    </div>
    </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default Review;