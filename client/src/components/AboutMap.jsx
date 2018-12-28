import React from 'react';
import { Link } from 'react-router-dom';
import Individual from './Individual.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const team = [
  {
    name: 'Hilda Hensley',
    title: 'Branch Manager',
    image: 'https://i.ibb.co/NNb98LG/hilda-hensley.jpg', 
    color: 'red',
    nmls: '280206',
    about: 'As a financial home expert here in the Napa Valley I advise people like yourself on how to maximize your financial situation through strategic mortgage planning. I have been in the Mortgage Business 24 years always as a Loan Originator/Manager.  I opened Benchmark Mortgage in Napa in July of 2009!',
    phone: '7075298377',
    email: 'hilda.hensley@benchmark.us'
  }, 
  {
    name: 'Johnathn Weber',
    title: 'Loan Officer',
    image: 'https://i.ibb.co/rKBmVNk/john-weber-horizontal.jpg', 
    color: 'blue',
    nmls: '940566',
    phone: '7073498257',
    email: 'john.weber@benchmark.us',
    about: 'I have been in the Real Estate space for 7 years now. I previously worked as a Marketing Rep for a title company. I also have previosuly worked for a bank as a loan originator before coming home to join the Benchmark team!'
  },
  {
    name: 'Kelly Winkle',
    title: 'Senior Loan Processor',
    image: 'https://i.ibb.co/j8r5RYj/Kelly-Winkle.jpg', 
    color: 'red',
    phone: '7072548891',
    email: 'kelly.winkle@benchmark.us',
    about: 'I have been a Loan Processor since 2003, and I have been with Hilda for 10 years now.'
  },
  {
    name: 'Diana Arana',
    title: 'Administrative Assistant',
    image: 'https://i.ibb.co/YdM1q05/diana-arana.jpg', 
    color: 'blue',
    phone: '7072548891',
    email: 'diana.arana@benchmark.us',
    about: 'I came to Benchmark after two years at a Credit Union. I have been fortunate to work with Hilda and her team for 4 years now.'
  },
  {
    name: 'Jeff Pinto',
    title: 'Regional Operations Manager',
    image: 'https://i.ibb.co/GpthntP/jeff-pinto-735px.jpg', 
    color: 'blue',
    phone: '8583493052',
    email: 'jeff.pinto@benchmark.us',
    about: 'I started in the mortgage business in 2002. I have worked as a Loan Originator, Processor and now currently work as an Operations Manager for the Bencmark community.'
  },

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
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <h3 className="homepage-header" style={{color:'#787878'}} >Meet the Team</h3>
    <div className="about-container">
        {team.length > 0 ? team.map((individual, key) => <Individual individual={individual} key={key} />) : null}
    </div>
      </MuiThemeProvider>
)
}
};

export default AboutMap;