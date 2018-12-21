import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AboutUsHomePage from './AboutUsHomePage.jsx';

const users = [
    {
      title: 'First time home buyer?',
      subtitle: 'We have the tools to help you, no matter what stage of the process you are in.',
      image: 'https://i.ibb.co/Yj9H4Dk/first-time.jpg', 
      color: 'blue'
    },
    {
      title: 'Are you a veteran?',
      subtitle: 'Contact today to chat with us about a VA loan.',
      image: 'https://i.ibb.co/qYnVGZk/VA.jpg', 
      color: 'red'
    },
    {
      title: 'Investor? Looking to refinance? Or anything else?',
      subtitle: 'Contact us today, or apply here!',
      image: 'https://i.ibb.co/09TNzck/Refi.png', 
      color: 'green'
    }
]
class AboutHomeMap extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <div className="service_container" style={{marginTop:'160px'}}>
        <h3 className="homepage-header" style={{color:'#787878'}} >WHY BENCHMARK NAPA?</h3>
        <div style={{display: 'flex', flexDirection:'row wrap', width: '100%', marginLeft:'12%', width:'80%'}}>
        {users.length > 0 ? users.map((user, key) => 
        <AboutUsHomePage user={user} key={key} />): null}
        </div>
        </div>
      </MuiThemeProvider>
)
}
};

export default AboutHomeMap;