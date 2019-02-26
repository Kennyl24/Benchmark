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
    this.readMore = this.readMore.bind(this);
  }
  componentDidMount(){
   if( this.props.review.review.split('').length > 155){
     this.setState({
       expanded:false
     })
   } 
  }
  checkCount(){
  }
  readMore(){
    this.setState({
      expanded: !this.state.expanded
    })
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
    <div style={{padding:'0 24px 48px', minWidth: '27%', marginTop:'2%', marginBottom:'2%', maxWidth:'350px'}}>
    <div className="review-card">
    <div style={{marginTop:'5%', alignItems:'center', margin:'auto', textAlign:'center'}}>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)", marginTop:'10%'}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    <StarRateSharp style={{fill:"rgb(36, 47, 110)"}}/>
    </div>
    <div className="container">
      {/* <p className="blog-text"> {this.props.review.review.split('').length > 160? <div>{this.props.review.review.split('').splice(0,160)}<Button onClick={this.readMore}>Read More</Button> </div>: this.props.review.review}</p>  */}
      {this.state.expanded ? 
      <span>
      <p className="blog-text">{this.props.review.review}</p>{this.props.review.review.split('').length > 160? <Button style={{color:"#242f6e"}} onClick={this.readMore}>Read Less</Button> : null}</span>: <span> <p className="blog-text">{this.props.review.review.split('').splice(0,160)}</p>{this.props.review.review.split('').length > 155 ? <Button style={{color:"#242f6e"}} onClick={this.readMore}>Read More</Button>: null} </span>}
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