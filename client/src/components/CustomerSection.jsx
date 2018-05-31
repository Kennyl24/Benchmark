import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Star from 'material-ui/svg-icons/toggle/star';
class CustomerSection extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className="review_container">
      <h2>
        What Our Customers Say
      </h2>
      <div className="review_text">
      "My husband was very pleased working with Marty. We brought in our Ford Explorer for repair. Marty was direct with his diagnosis and fast with his turnaround time. 

It's always a good feeling when you know you found a mechanic you can trust!"
<br/>
<br/>
<br/>
<div style={{textAlign:'center'}}>
- Elsa S. <Star color="black"/><Star color="black"/><Star color="black"/><Star color="black"/><Star color="black"/>
<br/>
<Link to={{ pathname: '/Reviews' }}>View all Reviews</Link>
</div>
</div>
      </div>
)
}
};

export default CustomerSection;