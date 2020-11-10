import React from 'react';
import { Link } from 'react-router-dom';
import Individual from './Individual.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const team = [
  {
    name: 'Hilda Hensley',
    title: 'Branch Manager',
    image: 'https://i.ibb.co/XXdQxQb/Cropped-hilda.jpg', 
    color: 'red',
    nmls: '280206',
    about: 'As a financial home expert here in the Napa Valley I advise people like yourself on how to maximize your financial situation through strategic mortgage planning. I have been in the Mortgage Business 24 years always as a Loan Originator/Manager.  I opened Benchmark Mortgage in Napa in July of 2009!',
    phone: '7075298377',
    email: 'hilda.hensley@benchmark.us'
  }, 
  {
    name: 'Kelly Winkle',
    title: 'Senior Loan Processor',
    image: 'https://i.ibb.co/KFyWnNp/Cropped-kelly.jpg', 
    color: 'red',
    phone: '7072548891',
    email: 'kelly.winkle@benchmark.us',
    about: 'I have been a Loan Processor since 2003, and I have been with Hilda for 10 years now.'
  },
  
  {
    name: 'Diana Arana',
    title: 'Loan Officer Assistant',
    image: 'https://i.ibb.co/HgxhHzH/cropped-diana.jpg', 
    color: 'blue',
    phone: '7072548891',
    email: 'diana.arana@benchmark.us',
    about: 'I came to Benchmark after two years at a Credit Union. I have been fortunate to work with Hilda and her team for 4 years now.'
  },
   /* {
    name: 'Perla',
    title: 'Production Partner',
    image: "",
    // image: 'https://i.ibb.co/py0Qv8T/IMG-1808-removebg-preview.png',
    // image: 'https://i.ibb.co/vVTS49g/IMG-1807-removebg-preview.png',
    // image: 'https://i.ibb.co/qkx4RZP/IMG-1807-removebg-preview.png', 
    color: 'blue',
    phone: '7072548891',
    email: 'perla.duke@benchmark.us',
    about: ''
  }, */
 /*   {
    name: 'Angela Hensley',
    title: 'Production Partner',
    image: "",
    // image: 'https://i.ibb.co/py0Qv8T/IMG-1808-removebg-preview.png',
    // image: 'https://i.ibb.co/vVTS49g/IMG-1807-removebg-preview.png',
    // image: 'https://i.ibb.co/qkx4RZP/IMG-1807-removebg-preview.png', 
    color: 'blue',
    phone: '7072548891',
    email: 'angela.hensley@benchmark.us',
    about: ''
  }, */
  // {
  //   name: 'Jeff Pinto',
  //   title: 'Regional Operations Manager',
  //   image: 'https://i.ibb.co/D1RQPd9/image-10.png', 
  //   color: 'blue',
  //   phone: '8583493052',
  //   email: 'jeff.pinto@benchmark.us',
  //   about: 'I started in the mortgage business in 2002. I have worked as a Loan Originator, Processor and now currently work as an Operations Manager for the Bencmark community.'
  // },

]
const hilda = {
  name: 'Hilda Hensley',
  title: 'Branch Manager',
  image: 'https://i.ibb.co/Tw7Yw50/image-8.png', 
  color: 'red',
  about: 'As a financial home expert here in the Napa Valley I advise people like yourself on how to maximize your financial situation through strategic mortgage planning. It has been a pleasure serving the Napa Valley for the past 18 years.'
}
class AboutMap extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      clicked:false,
    }
    this.clicked = this.clicked.bind(this)
  }
  clicked(){
    console.log('clicking', key)
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render () {
    return (
      <MuiThemeProvider>
    <div style={{backgroundColor:'#f5f5f5'}} id="team">
    <h3 className="homepage-header" style={{ margin: '0', paddingTop:'2%', color:'rgb(37, 45, 114)'}} >Meet the Team</h3>    
    <div className="about-container">
        {team.length > 0 ? team.map((individual, key) => 
        <Individual 
        individual={individual} 
        key={key} 
        onClick={this.clicked}
        />) : null}
    </div>
    </div>
      </MuiThemeProvider>
)
}
};

export default AboutMap;